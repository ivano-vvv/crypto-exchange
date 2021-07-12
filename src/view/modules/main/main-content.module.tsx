import {ReactElement} from 'react';

import {TitleBlock} from '../title-block';

import s from './main-content.module.css';
import {DefaultComponentProps} from '../../typings';
import {ExchangeForm} from '../exchange-form';

export function MainContent({className}: DefaultComponentProps): ReactElement {
    return (
        <main className={className}>
            <TitleBlock className={s.titleBlock} />
            <ExchangeForm className={s.form} />
        </main>
    );
}
