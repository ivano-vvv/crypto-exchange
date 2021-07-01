import {ReactElement} from 'react';

import {stateServices} from '../../state';
import {WrapperProps} from '../../view/typings';
import {CurrenciesServiceContext} from './currencies-service.context';

export function CurrenciesServiceProvider(props: WrapperProps): ReactElement {
    return (
        <CurrenciesServiceContext.Provider value={stateServices.currencies}>
            {props.children}
        </CurrenciesServiceContext.Provider>
    );
}
