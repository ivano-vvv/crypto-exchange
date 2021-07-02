import classNames from 'classnames';
import {ReactElement} from 'react';

import {DefaultComponentProps} from '../../typings';
import s from './throbber.module.css';

export function Throbber({className}: DefaultComponentProps): ReactElement {
    return (
        <div className={classNames(className, s.self)}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}
