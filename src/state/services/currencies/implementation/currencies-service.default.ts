import {inject, injectable} from 'inversify';
import {action, computed, makeObservable, observable} from 'mobx';
import {CurrencySource} from '../../../../core/sources';
import {Currency as SourceCurrency} from '../../../../core';
import {coreTokens} from '../../../composition/core.tokens';

import {Currency} from '../../../entities';
import {CurrenciesService} from '../currencies-service.model';
import {
    EstimatedExchangeService,
    MinExchangeService,
} from '../../../../core/services';

@injectable()
export class DefaultCurrenciesService implements CurrenciesService {
    @computed
    get list(): Currency[] {
        return [...this._list];
    }

    @action
    async update(): Promise<void> {
        await this.currencySource
            .getAll()
            .then(list => this.handleSourceResponse(list));
    }

    @observable
    get(ticker: string): Currency | undefined {
        return this.list.find(c => c.ticker === ticker); // TODO: it's possible to implement in the service binary search
    }

    async getMinRate(
        from: Currency['ticker'],
        to: Currency['ticker']
    ): Promise<number> {
        const fromCurrency = this.list.find(c => c.ticker === from);
        const toCurrency = this.list.find(c => c.ticker === to); // TODO: both should be found in one cycle

        if (!fromCurrency || !toCurrency) {
            throw new Error();
        }

        const savedMinRate = fromCurrency.minRates[toCurrency.ticker];

        if (savedMinRate) {
            return await savedMinRate;
        }

        await this.minExchangeCoreService
            .calc(fromCurrency.ticker, toCurrency.ticker)
            .then(res => {
                fromCurrency.minRates[toCurrency.ticker] = res.minAmount;
            });

        return await fromCurrency.minRates[toCurrency.ticker];
    }

    async getEstimatedRate(
        amount: number,
        currencies: {
            from: Currency['ticker'];
            to: Currency['ticker'];
        }
    ): Promise<number> {
        const res = await this.estimatedExchangeCoreService.calc(
            amount,
            currencies
        );

        return res.estimatedAmount;
    }

    @observable
    private _list: Currency[] = [];

    @action
    private handleSourceResponse(list: SourceCurrency[]): void {
        // TODO: list should be sorted in order to implement binary search
        this._list = list.map(c => ({
            image: c.image,
            name: c.name,
            ticker: c.ticker,
            minRates: {},
        }));
    }

    constructor() {
        makeObservable(this);
    }

    @inject(coreTokens.sources.currency)
    currencySource: CurrencySource;

    @inject(coreTokens.services.minExchange)
    minExchangeCoreService: MinExchangeService;

    @inject(coreTokens.services.estimatedExchange)
    estimatedExchangeCoreService: EstimatedExchangeService;
}
