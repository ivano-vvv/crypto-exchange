import {createContext} from 'react';

import {stateServices} from '../../state';

export const BuyInputServiceContext = createContext(
    stateServices.buyInputService
);
