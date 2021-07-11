import {MinExchangeService, serviceTokens} from '../services';
import {CurrencySource, sourceTokens} from '../sources';
import {container} from './container';

export const sources = {
    currency: container.get<CurrencySource>(sourceTokens.currencySource),
};

export const services = {
    minExchange: container.get<MinExchangeService>(serviceTokens.minExchange),
};
