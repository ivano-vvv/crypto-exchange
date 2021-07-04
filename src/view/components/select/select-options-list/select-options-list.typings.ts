import {DefaultComponentProps} from '../../../typings';

import {SelectItem} from '../select.typings';
import {SelectFieldParams} from '../select-field/select-field.typings';

export interface SelectOptionsListProps extends DefaultComponentProps {
    items: SelectItem[];

    selectHandlerProvider?: (item: SelectItem) => () => void;

    optionParams?: SelectFieldParams;
}
