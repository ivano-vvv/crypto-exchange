import {createContext} from 'react';

import {stateServices} from '../../state';

export const CurrenciesServiceContext = createContext(stateServices.currencies);
