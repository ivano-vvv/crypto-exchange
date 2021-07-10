import {DefaultComponentProps} from '../../typings';
import {CombinedState} from '../shared.typings';
import {SelectFieldParams} from './select-field/select-field.typings';

export interface SelectProps extends DefaultComponentProps {
    items: SelectItem[];

    selectedItem?: SelectItem;

    onSelect?: (item: SelectItem) => void;

    onTrigger?: (value: boolean) => void;

    optionParams?: SelectFieldParams;

    headerParams?: SelectFieldParams;

    placeholder?: string;

    combined?: CombinedState[];
}

export type SelectItem = {
    key: string;

    label: string;

    icon?: string;
};
