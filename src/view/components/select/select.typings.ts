import {DefaultComponentProps} from '../../typings';
import {SelectFieldParams} from './select-field/select-field.typings';

export interface SelectProps extends DefaultComponentProps {
    items: SelectItem[];

    selectedItem?: SelectItem;

    onSelect?: (item: SelectItem) => void;

    optionParams?: SelectFieldParams;

    headerParams?: SelectFieldParams;

    placeholder?: string;
}

export type SelectItem = {
    key: string;

    label: string;

    icon?: string;
};
