import {useContext} from 'react';

import {InitializationService} from '../../state/services';
import {InitializationServiceContext} from './initialization-service.context';

export function useInitializationService(): InitializationService {
    return useContext(InitializationServiceContext);
}
