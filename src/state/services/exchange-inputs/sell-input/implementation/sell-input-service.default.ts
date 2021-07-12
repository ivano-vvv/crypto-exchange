import {inject, injectable} from 'inversify';
import {action, computed, makeObservable, observable} from 'mobx';

import {BuyInputSyncronizer} from '../../../../features/exchange-form/buy-input-synchronizer/buy-input-synchronizer.model';
import {featuresTokens} from '../../../../features/featuresTokens';
import {CurrenciesService} from '../../../currencies';
import {servicesTokens} from '../../../services.tokens';
import {State} from '../../../typings';
import {BuyInputService} from '../../buy-input';
import {SellInputService} from '../sell-input.model';

@injectable()
export class DefaultSellInputService implements SellInputService {
    @computed
    get amount(): number {
        return this._amount;
    }

    @computed
    get currencyTicker(): string {
        return this._currencyTicker;
    }

    @computed
    get errorMessage(): string | null {
        return this.state === 'error' ? this._errorMessage : null;
    }

    @computed
    get state(): State {
        return this._state;
    }

    @action
    updateAmount(value: number): void {
        this.updateState('loading');
        this._amount = value;

        if (!this.amount) {
            return;
        }

        this.currenciesService
            .getMinRate(
                this.currencyTicker,
                this.buyInputService.currencyTicker
            )
            .then(amount => {
                this.handleMinAmount(amount);
            })
            .catch(() => {
                this.updateState('error');
            });
    }

    @action
    updateCurrency(ticker: string): void {
        this._currencyTicker = ticker;
        this.updateAmount(this.amount);
    }

    @action
    updateState(state: State): void {
        this._state = state;
    }

    @action
    updateErrorMessage(errorMsg: string | null): void {
        this._errorMessage = errorMsg;
    }

    private handleMinAmount(minAmount: number): void {
        if (this.amount < minAmount) {
            this.updateState('error');
            this.updateErrorMessage(`min amount is ${minAmount}`);
        } else {
            this.updateState('default');
            this.recalcBuyAmount();
        }
    }

    private async recalcBuyAmount(): Promise<void> {
        await this.exchangeFormSyncronizer.recalcBuyAmount(
            this.amount,
            this.currencyTicker
        );
    }

    @observable
    private _amount = 0;

    @observable
    private _currencyTicker = '';

    @observable
    private _state: State = 'default';

    @observable
    private _errorMessage: string | null = null;

    constructor() {
        makeObservable(this);
    }

    @inject(featuresTokens.exchangeForm.synchronizer)
    private exchangeFormSyncronizer: BuyInputSyncronizer;

    @inject(servicesTokens.buyInputService)
    private buyInputService: BuyInputService;

    @inject(servicesTokens.currencies)
    private currenciesService: CurrenciesService;
}
