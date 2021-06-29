import {CurrencySource, sourceTokens} from '../sources';
import {container} from './container';

export const sources = {
    currency: container.get<CurrencySource>(sourceTokens.currencySource),
};
