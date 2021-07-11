import {Currency} from '../../entities';

export type MinExchange = {
    minAmount: number;
};

export interface MinExchangeService {
    calc(
        from: Currency['ticker'],
        to: Currency['ticker']
    ): Promise<MinExchange>;
}
