import {Currency} from '../../../state/entities';
import {DefaultComponentProps} from '../../typings';

export interface CurrencyInputProps extends DefaultComponentProps {
    value: CurrencyInputValue;

    onValueChange: (value: CurrencyInputValue) => void;
}

export type CurrencyInputValue = {
    amount: number;

    kind: Currency;
};
