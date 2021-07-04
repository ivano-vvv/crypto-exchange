import classNames from 'classnames';
import {ReactElement} from 'react';

import s from './select-option.module.css';
import {SelectField} from '../select-field';
import {SelectOptionProps} from './select-option.typings';

export function SelectOption({
    item,
    params,
    className,
    onSelect,
}: SelectOptionProps): ReactElement {
    return (
        <div className={classNames(className, s.self)} onClick={onSelect}>
            <SelectField className={s.field} item={item} params={params} />
        </div>
    );
}
