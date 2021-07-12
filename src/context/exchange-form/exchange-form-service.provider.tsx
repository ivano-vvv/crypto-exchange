import {ReactElement} from 'react';

import {stateServices} from '../../state';
import {WrapperProps} from '../../view/typings';
import {ExchangeFormServiceContext} from './exchange-form-service.context';

export function ExchangeFormServiceProvider(props: WrapperProps): ReactElement {
    return (
        <ExchangeFormServiceContext.Provider value={stateServices.exchangeForm}>
            {props.children}
        </ExchangeFormServiceContext.Provider>
    );
}
