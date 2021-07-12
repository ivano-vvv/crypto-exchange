import {Currency} from '../../entities';

export interface CurrenciesService {
    list: Currency[];

    update(): Promise<void>;

    get(ticker: string): Currency | undefined;

    getMinRate(
        from: Currency['ticker'],
        to: Currency['ticker']
    ): Promise<number>;

    getEstimatedRate(
        amount: number,
        currencies: {
            from: Currency['ticker'];
            to: Currency['ticker'];
        }
    ): Promise<number>;
}
