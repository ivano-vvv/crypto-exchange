import {ReactElement} from 'react';

import {stateServices} from '../../state';
import {WrapperProps} from '../../view/typings';
import {ErrorIndicationServiceContext} from './error-indication-service.context';

export function ErrorIndicationServiceProvider(
    props: WrapperProps
): ReactElement {
    return (
        <ErrorIndicationServiceContext.Provider
            value={stateServices.errorIndication}
        >
            {props.children}
        </ErrorIndicationServiceContext.Provider>
    );
}
