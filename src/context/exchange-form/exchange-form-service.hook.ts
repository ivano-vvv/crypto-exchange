import {useContext} from 'react';

import {ExchangeFormService} from '../../state/services';
import {ExchangeFormServiceContext} from './exchange-form-service.context';

export function useExchangeFormService(): ExchangeFormService {
    return useContext(ExchangeFormServiceContext);
}
