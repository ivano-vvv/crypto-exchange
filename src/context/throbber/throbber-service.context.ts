import {createContext} from 'react';

import {stateServices} from '../../state';

export const ThrobberServiceContext = createContext(stateServices.throbber);
