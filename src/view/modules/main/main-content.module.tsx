import {ReactElement} from 'react';
import {DefaultComponentProps} from '../../typings';

export function MainContent({className}: DefaultComponentProps): ReactElement {
    return <h1 className={className}>hello world</h1>;
}
