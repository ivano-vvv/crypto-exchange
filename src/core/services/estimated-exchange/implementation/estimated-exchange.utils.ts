import {CurrenciesToExchange} from '../estimated-exchange.typings';
import {ESTIMATED_EXCHANGE_ENDPOINT_BASE} from './estimated-exchange.constants';

export function formEstExchangeUrl(
    amount: number,
    {from, to}: CurrenciesToExchange
): string {
    return `${ESTIMATED_EXCHANGE_ENDPOINT_BASE}/${amount.toString()}/${from}_${to}`;
}
