import classNames from 'classnames';
import {ReactElement} from 'react';

import s from './input-divider.module.css';
import {DefaultComponentProps} from '../../../typings';

export function InputDivider({className}: DefaultComponentProps): ReactElement {
    return <div className={classNames(className, s.self)} />;
}
