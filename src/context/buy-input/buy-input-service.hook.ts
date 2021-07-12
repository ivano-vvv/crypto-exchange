import {useContext} from 'react';

import {BuyInputService} from '../../state/services';
import {BuyInputServiceContext} from './buy-input-service.context';

export function useBuyInputService(): BuyInputService {
    return useContext(BuyInputServiceContext);
}
