import {ReactElement} from 'react';

import {TitleBlock} from '../title-block';

import {DefaultComponentProps} from '../../typings';

export function MainContent({className}: DefaultComponentProps): ReactElement {
    return (
        <main className={className}>
            <TitleBlock />
        </main>
    );
}
