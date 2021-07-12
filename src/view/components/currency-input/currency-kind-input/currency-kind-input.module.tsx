import {ReactElement} from 'react';
import {useCurrenciesService} from '../../../../context';
import {Select} from '../../select';
import {SelectItem} from '../../select/select.typings';
import {CurrencyKindInputProps} from './currency-kind-input.typings';
import {convertCurrencyToSelectItem} from './currency-kind-input.utils';

export function CurrencyKindInput({
    className,
    combined,
    value,
    onChange,
    onTrigger,
}: CurrencyKindInputProps): ReactElement {
    const currencies = [...useCurrenciesService().list]; // TODO: update service interface and create immutable getter

    function handleSelect(item: SelectItem): void {
        const selectedCurrency = currencies.find(c => c.ticker === item.key);

        if (selectedCurrency && onChange) {
            onChange(selectedCurrency);
        }
    }

    return (
        <Select
            className={className}
            selectedItem={convertCurrencyToSelectItem(value)}
            items={currencies.map(convertCurrencyToSelectItem)}
            onSelect={handleSelect}
            onTrigger={onTrigger}
            headerParams={{
                renderIcon: true,
                renderKey: true,
                renderLabel: false,
            }}
            optionParams={{
                renderIcon: true,
                renderKey: true,
            }}
            combined={combined}
        />
    );
}
