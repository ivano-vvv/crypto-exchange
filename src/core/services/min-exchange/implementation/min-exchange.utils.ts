import {Currency} from '../../../entities';
import {MIN_EXCHANGE_ENDPOINT_BASE} from './min-exchange.constants';

export function formMinExchangeUrl(
    from: Currency['ticker'],
    to: Currency['ticker']
): string {
    return `${MIN_EXCHANGE_ENDPOINT_BASE}/${from}_${to}`;
}
