import {ChangeEvent, ReactElement} from 'react';

import {Input} from '../../../components/input';
import {CurrencyAmountInputProps} from './currency-amount-input.typings';

export function CurrencyAmountInput({
    className,
    value,
    onChange,
}: CurrencyAmountInputProps): ReactElement {
    function handleChange(e: ChangeEvent<HTMLInputElement>): void {
        if (onChange) {
            onChange(e.currentTarget.valueAsNumber);
        }
    }

    return (
        <Input
            className={className}
            type="number"
            value={value}
            onChange={handleChange}
            combined={['right']}
        />
    );
}
