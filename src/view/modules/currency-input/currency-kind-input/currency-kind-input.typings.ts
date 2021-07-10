import {Currency} from '../../../../state/entities';
import {CombinedState} from '../../../components/shared.typings';
import {DefaultComponentProps} from '../../../typings';

export interface CurrencyKindInputProps extends DefaultComponentProps {
    value: Currency;

    combined?: CombinedState[];

    onChange?: (value: Currency) => void;

    onTrigger?: (value: boolean) => void;
}
