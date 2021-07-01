import {ReactElement} from 'react';

import {stateServices} from '../../state';
import {WrapperProps} from '../../view/typings';
import {InitializationServiceContext} from './initialization-service.context';

export function InitializationServiceProvider(
    props: WrapperProps
): ReactElement {
    return (
        <InitializationServiceContext.Provider
            value={stateServices.initialization}
        >
            {props.children}
        </InitializationServiceContext.Provider>
    );
}
