import {ReactElement} from 'react';

import {TitleBlock} from '../title-block';

import {DefaultComponentProps} from '../../typings';
import {ExchangeForm} from '../exchange-form';

export function MainContent({className}: DefaultComponentProps): ReactElement {
    return (
        <main className={className}>
            <TitleBlock />
            <ExchangeForm />
        </main>
    );
}
