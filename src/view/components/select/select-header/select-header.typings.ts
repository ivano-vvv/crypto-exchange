import {DefaultComponentProps} from '../../../typings';
import {SelectFieldParams} from '../select-field/select-field.typings';
import {SelectItem} from '../select.typings';

export interface SelectHeaderProps extends DefaultComponentProps {
    open: boolean;

    item?: SelectItem;

    placeholder?: string;

    params?: SelectFieldParams;

    onClick?: () => void;
}
