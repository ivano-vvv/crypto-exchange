import {createContext} from 'react';

import {stateServices} from '../../state';

export const ErrorIndicationServiceContext = createContext(
    stateServices.errorIndication
);
