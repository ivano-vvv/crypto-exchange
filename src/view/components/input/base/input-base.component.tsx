import classNames from 'classnames';
import {ReactElement} from 'react';

import {InputProps} from '../input.typings';
import s from './input-base.module.css';

export function InputBase(props: InputProps): ReactElement {
    const {className, combined} = props;

    return (
        <input
            {...props}
            className={classNames(
                className,
                s.self,
                combined && combined.includes('left') && s.self__combinedLeft,
                combined && combined.includes('right') && s.self__combinedRight
            )}
        />
    );
}
