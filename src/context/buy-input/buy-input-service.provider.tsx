import {ReactElement} from 'react';

import {stateServices} from '../../state';
import {WrapperProps} from '../../view/typings';
import {BuyInputServiceContext} from './buy-input-service.context';

export function BuyInputServiceProvider(props: WrapperProps): ReactElement {
    return (
        <BuyInputServiceContext.Provider value={stateServices.buyInputService}>
            {props.children}
        </BuyInputServiceContext.Provider>
    );
}
