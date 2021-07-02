import classNames from 'classnames';
import {ReactElement} from 'react';

import {InputBase} from '../base';
import {InputProps} from '../input.typings';
import s from './number-input.module.css';

export function NumberInput(props: InputProps): ReactElement {
    return (
        <InputBase
            {...props}
            type="number"
            className={classNames(props.className, s.self)}
        />
    );
}
