import {Currency} from '../../entities';

export type EstimatedExchange = {
    estimatedAmount: number;
};

export type CurrenciesToExchange = {
    from: Currency['ticker'];
    to: Currency['ticker'];
};

export interface EstimatedExchangeService {
    calc(
        amount: number,
        currencies: CurrenciesToExchange
    ): Promise<EstimatedExchange>;
}
