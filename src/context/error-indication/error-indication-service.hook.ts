import {useContext} from 'react';

import {ErrorIndicationService} from '../../state/services';
import {ErrorIndicationServiceContext} from './error-indication-service.context';

export function useErrorIndicationService(): ErrorIndicationService {
    return useContext(ErrorIndicationServiceContext);
}
