import {ReactElement} from 'react';
import classNames from 'classnames';

import {SelectFieldProps} from './select-field.typings';
import s from './select-field.module.css';

export function SelectField({
    className,
    item,
    params,
}: SelectFieldProps): ReactElement {
    const {key, icon, label} = item;

    const renderIcon = !!params?.renderIcon;
    const renderKey = !!params?.renderKey;
    const renderLabel =
        typeof params?.renderLabel === 'undefined'
            ? true
            : !!params.renderLabel;

    return (
        <span className={classNames(className, s.self)}>
            {icon && renderIcon && <img src={icon} alt={key} />}
            {renderKey && <span className={s.key}>{key}</span>}
            {renderLabel && <span className={s.label}>{label}</span>}
        </span>
    );
}
