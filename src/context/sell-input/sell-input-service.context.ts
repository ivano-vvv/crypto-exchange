import {createContext} from 'react';

import {stateServices} from '../../state';

export const SellInputServiceContext = createContext(
    stateServices.sellInputService
);
