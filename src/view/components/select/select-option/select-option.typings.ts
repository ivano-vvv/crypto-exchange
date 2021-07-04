import {DefaultComponentProps} from '../../../typings';
import {SelectFieldParams} from '../select-field/select-field.typings';
import {SelectItem} from '../select.typings';

export interface SelectOptionProps extends DefaultComponentProps {
    item: SelectItem;

    onSelect?: () => void;

    params?: SelectFieldParams;
}
