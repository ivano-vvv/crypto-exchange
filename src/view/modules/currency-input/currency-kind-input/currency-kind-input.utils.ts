import {Currency} from '../../../../state/entities';
import {SelectItem} from '../../../components/select/select.typings';

export function convertCurrencyToSelectItem(currency: Currency): SelectItem {
    return {
        key: currency.ticker,
        label: currency.name,
        icon: currency.image,
    };
}
