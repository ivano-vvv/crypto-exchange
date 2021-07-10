import classNames from 'classnames';
import {ReactElement} from 'react';

import {CurrencyInputProps} from './currency-input.typings';
import s from './currency-input.module.css';
import {CurrencyAmountInput} from './currency-amount-input/currency-amount-input.module';
import {CurrencyKindInput} from './currency-kind-input/currency-kind-input.module';
import {Currency} from '../../../state/entities';
import {InputDivider} from './input-divider/input-divider.component';
import {useState} from 'react';

export function CurrencyInput({
    className,
    value,
    onValueChange,
}: CurrencyInputProps): ReactElement {
    const [choosingCurrency, setChoosingCurrency] = useState(false);

    function handleAmountChange(amount: number): void {
        onValueChange({...value, amount});
    }

    function handleCurrencySelectTrigger(value: boolean): void {
        setChoosingCurrency(value);
    }

    function handleCurrencyChange(kind: Currency): void {
        onValueChange({...value, kind});
    }

    return (
        <div className={classNames(className, s.self)}>
            <div
                className={classNames(
                    s.amountWrapper,
                    choosingCurrency && s.amountWrapper__hidden
                )}
            >
                <CurrencyAmountInput
                    className={s.amount}
                    value={value.amount}
                    onChange={handleAmountChange}
                />
                <InputDivider className={s.divider} />
            </div>
            <div
                className={classNames(
                    s.kindWrapper,
                    choosingCurrency && s.kindWrapper__hidden
                )}
            >
                <CurrencyKindInput
                    className={s.kind}
                    value={value.kind}
                    onChange={handleCurrencyChange}
                    onTrigger={handleCurrencySelectTrigger}
                    combined={!choosingCurrency ? ['left'] : undefined}
                />
            </div>
        </div>
    );
}
