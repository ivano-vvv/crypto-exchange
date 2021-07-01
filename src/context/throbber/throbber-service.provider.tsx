import {ReactElement} from 'react';

import {stateServices} from '../../state';
import {WrapperProps} from '../../view/typings';
import {ThrobberServiceContext} from './throbber-service.context';

export function ThrobberServiceProvider(props: WrapperProps): ReactElement {
    return (
        <ThrobberServiceContext.Provider value={stateServices.throbber}>
            {props.children}
        </ThrobberServiceContext.Provider>
    );
}
