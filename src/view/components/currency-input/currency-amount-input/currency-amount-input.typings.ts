import {DefaultComponentProps} from '../../../typings';

export interface CurrencyAmountInputProps extends DefaultComponentProps {
    value: number;

    onChange?: (value: number) => void;
}
