import {createContext} from 'react';

import {stateServices} from '../../state';

export const ExchangeFormServiceContext = createContext(
    stateServices.exchangeForm
);
