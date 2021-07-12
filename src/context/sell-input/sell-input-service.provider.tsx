import {ReactElement} from 'react';

import {stateServices} from '../../state';
import {WrapperProps} from '../../view/typings';
import {SellInputServiceContext} from './sell-input-service.context';

export function SellInputServiceProvider(props: WrapperProps): ReactElement {
    return (
        <SellInputServiceContext.Provider
            value={stateServices.sellInputService}
        >
            {props.children}
        </SellInputServiceContext.Provider>
    );
}
