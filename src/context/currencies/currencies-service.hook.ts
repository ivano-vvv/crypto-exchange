import {useContext} from 'react';

import {CurrenciesService} from '../../state/services';
import {CurrenciesServiceContext} from './currencies-service.context';

export function useCurrenciesService(): CurrenciesService {
    return useContext(CurrenciesServiceContext);
}
