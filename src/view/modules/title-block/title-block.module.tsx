import classNames from 'classnames';
import {ReactElement} from 'react';

import s from './title-block.module.css';
import {DefaultComponentProps} from '../../typings';

export function TitleBlock({className}: DefaultComponentProps): ReactElement {
    return (
        <div className={classNames(className, s.self)}>
            <h1 className={s.title}>Crypto Exchange</h1>
            <p className={s.desc}>Exchange fast and easy</p>
        </div>
    );
}
