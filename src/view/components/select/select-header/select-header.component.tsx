import classNames from 'classnames';
import {ReactElement} from 'react';

import s from './select-header.module.css';
import {SelectHeaderProps} from './select-header.typings';
import {SelectField} from '../select-field';
import {SelectHeaderIcon} from '../select-header-icon';

export function SelectHeaderComponent({
    open,
    className,
    item,
    params,
    placeholder,
    onClick,
}: SelectHeaderProps): ReactElement {
    return (
        <div
            className={classNames(className, s.self, open && s.self__opened)}
            onClick={onClick}
        >
            {!item && placeholder && <span>{placeholder}</span>}
            {item && <SelectField item={item} params={params} />}
            <SelectHeaderIcon className={s.icon} open={open} />
        </div>
    );
}
