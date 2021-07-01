import {ReactElement} from 'react';

import {WrapperProps} from '../view/typings';
import {InitializationServiceProvider} from './initialization';

export function AppContextProvider(props: WrapperProps): ReactElement {
    return (
        <InitializationServiceProvider>
            {props.children}
        </InitializationServiceProvider>
    );
}
