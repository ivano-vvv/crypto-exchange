import {inject, injectable} from 'inversify';
import {action, computed, makeObservable, observable} from 'mobx';

import {Currency} from '../../../entities';
import {CurrenciesService} from '../../currencies';
import {servicesTokens} from '../../services.tokens';
import {State} from '../../typings';
import {
    ExchangeFormService,
    ExchangeFromInput,
    ExchangeInput,
    ViewInputValue,
} from '../exchange-form-service.model';

// TODO: should be refactored
@injectable()
export class DefaultExchangeFormService implements ExchangeFormService {
    @observable
    fromValue: ViewInputValue;

    @observable
    toValue: ViewInputValue;

    @observable
    fromState: State;

    @observable
    toState: State;

    @computed
    get fromErrorMessage(): string | null {
        return this.fromInput.state === 'error'
            ? this.fromInput.errorMessage
            : null;
    }

    @computed
    get toErrorMessage(): string | null {
        return this.toInput.state === 'error'
            ? this.toInput.errorMessage
            : null;
    }

    @action
    async init(): Promise<void> {
        this.setLoadingState();
        this.setInitialCurrencies();

        await this.getMinRate().then(
            minAmount => (this.fromInput.value = minAmount)
        );
    }

    @action
    updateFromInput(value: ViewInputValue): void {
        this.updateFromCurrency(value.kind);
        this.updateFromAmount(value.amount);
    }

    @action
    updateToInput(value: ViewInputValue): void {
        this.updateToCurrency(value.kind);
        this.updateToAmount(value.amount);
    }

    @observable
    private fromInput: ExchangeFromInput;

    @observable
    private toInput: ExchangeInput;

    private updateFromCurrency(currency: Currency): void {
        if (currency.ticker !== this.fromInput.currency.ticker) {
            this.fromInput.currency = {...currency};
        }
    }

    private updateToCurrency(currency: Currency): void {
        if (currency.ticker !== this.toInput.currency.ticker) {
            this.toInput.currency = {...currency};
        }
    }

    private updateFromAmount(amount: number): void {
        this.fromInput.value = amount;

        if (this.fromInput.minAmount[this.toInput.currency.ticker]) {
            this.handleNewFromAmount();
        }

        this.setLoadingState('from');

        this.getMinRate()
            .then(minAmount => {
                this.fromInput.minAmount[this.toInput.currency.ticker] =
                    minAmount;

                this.handleNewFromAmount();
                this.setDefaultState('from');
            })
            .then(() =>
                this.setErrorState({message: 'this pair is disabled now'})
            );
    }

    private updateToAmount(amount: number): void {
        console.error(
            new Error(
                `changing to value is not implemented. new amount: ${amount}`
            )
        );
    }

    handleNewFromAmount(): void {
        const minAmount =
            this.fromInput.minAmount[this.toInput.currency.ticker];
        const currentAmount = this.fromInput.value;

        if (currentAmount < minAmount) {
            this.setErrorState({
                input: 'from',
                message: `min amount is ${minAmount}`,
            });
        } else {
            this.recalcToInputValue();
        }
    }

    private recalcToInputValue(): void {
        this.setLoadingState('to');

        this.getEstRate()
            .then(estRate => {
                this.toInput.value = estRate;
                this.setDefaultState('to');
            })
            .catch(() =>
                this.setErrorState({message: 'this pair is disabled now'})
            );
    }

    private setDefaultState(input?: 'from' | 'to'): void {
        if (!input || input === 'from') {
            this.fromInput.state === 'default';
        }

        if (!input || input === 'to') {
            this.toInput.state === 'default';
        }
    }

    private setLoadingState(input?: 'from' | 'to'): void {
        if (!input || input === 'from') {
            this.fromInput.state === 'loading';
        }

        if (!input || input === 'to') {
            this.toInput.state === 'loading';
        }
    }

    private setErrorState(params: {
        input?: 'from' | 'to';
        message?: string;
    }): void {
        const {input, message} = params;

        if (!input || input === 'from') {
            this.fromInput.state === 'error';
            this.fromInput.errorMessage = message ?? 'unknown error';
        }

        if (!input || input === 'to') {
            this.toInput.state === 'error';
            this.toInput.errorMessage = message ?? null;
            this.fromInput.errorMessage = message ?? 'unknown error';
        }
    }

    private setInitialCurrencies(): void {
        const currencies = [...this.currenciesService.list];

        if (currencies.length === 0) {
            throw new Error('no available currencies');
        } else if (currencies.length === 1) {
            throw new Error('not enough currencies to exchange');
        }

        this.fromInput.currency = {...currencies[0]};
        this.toInput.currency = {...currencies[1]};
    }

    private async getMinRate(): Promise<number> {
        return await this.currenciesService.getMinRate(
            this.fromInput.currency.ticker,
            this.toInput.currency.ticker
        );
    }

    private async getEstRate(): Promise<number> {
        const amount = this.fromInput.value;

        const currencies = {
            from: this.fromInput.currency.ticker,
            to: this.toInput.currency.ticker,
        };

        return await this.currenciesService.getEstimatedRate(
            amount,
            currencies
        );
    }

    constructor() {
        makeObservable(this);

        const defaultInput: ExchangeInput = {
            currency: {
                image: '', // TODO: make undefined or create a default image
                name: '-',
                ticker: '-',
                minRates: {},
            },
            errorMessage: null,
            state: 'default',
            value: 0,
        };

        this.fromInput = {
            ...defaultInput,
            minAmount: {},
            currency: {...defaultInput.currency},
        };
        this.toInput = {
            ...defaultInput,
            currency: {...defaultInput.currency},
        };

        this.fromValue = {
            amount: this.fromInput.value,
            kind: this.fromInput.currency,
        };
        this.toValue = {
            amount: this.toInput.value,
            kind: this.toInput.currency,
        };

        this.fromState = this.fromInput.state;
        this.toState = this.toInput.state;
    }

    @inject(servicesTokens.currencies)
    private readonly currenciesService: CurrenciesService;
}
