import {createContext} from 'react';

import {stateServices} from '../../state';

export const InitializationServiceContext = createContext(
    stateServices.initialization
);
