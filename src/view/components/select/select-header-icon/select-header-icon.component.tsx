import classNames from 'classnames';
import {ReactElement} from 'react';

import s from './select-header-icon.module.css';
import {SelectHeaderIconProps} from './select-header-icon.typings';
import {ArrowIcon} from '../assets/arrow.icon';
import {CloseIcon} from '../assets/close.icon';

export function SelectHeaderIcon({
    className,
    open,
}: SelectHeaderIconProps): ReactElement {
    // TODO: add transition

    return (
        <div className={classNames(className, s.self)}>
            {open ? <ArrowIcon /> : <CloseIcon />}
        </div>
    );
}
