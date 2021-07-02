import classNames from 'classnames';
import {ReactElement} from 'react';

import {InputProps} from '../input.typings';
import s from './input-base.module.css';

export function InputBase(props: InputProps): ReactElement {
    return <input {...props} className={classNames(props.className, s.self)} />;
}
