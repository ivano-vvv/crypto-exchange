import {useContext} from 'react';

import {SellInputService} from '../../state/services';
import {SellInputServiceContext} from './sell-input-service.context';

export function useSellInputService(): SellInputService {
    return useContext(SellInputServiceContext);
}
