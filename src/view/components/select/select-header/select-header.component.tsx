import classNames from 'classnames';
import {ReactElement} from 'react';

import s from './select-header.module.css';
import {SelectHeaderProps} from './select-header.typings';
import {SelectField} from '../select-field';
import {SelectHeaderIcon} from '../select-header-icon';

export function SelectHeader({
    open,
    className,
    item,
    params,
    placeholder,
    onClick,
    combined,
}: SelectHeaderProps): ReactElement {
    return (
        <div
            className={classNames(
                className,
                s.self,
                open && s.self__opened,
                combined && combined.includes('left') && s.self__combinedLeft,
                combined && combined.includes('right') && s.self__combinedRight
            )}
            onClick={onClick}
        >
            {!item && placeholder && <span>{placeholder}</span>}
            {item && <SelectField item={item} params={params} />}
            <SelectHeaderIcon className={s.icon} open={open} />
        </div>
    );
}
