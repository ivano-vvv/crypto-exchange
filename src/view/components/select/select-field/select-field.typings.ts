import {DefaultComponentProps} from '../../../typings';
import {SelectItem} from '../select.typings';

export interface SelectFieldProps extends DefaultComponentProps {
    item: SelectItem;

    params?: SelectFieldParams;
}

export type SelectFieldParams = {
    renderIcon?: boolean;

    renderKey?: boolean;

    renderLabel?: boolean;
};
