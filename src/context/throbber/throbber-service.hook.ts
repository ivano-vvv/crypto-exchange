import {useContext} from 'react';

import {ThrobberService} from '../../state/services';
import {ThrobberServiceContext} from './throbber-service.context';

export function useThrobberService(): ThrobberService {
    return useContext(ThrobberServiceContext);
}
