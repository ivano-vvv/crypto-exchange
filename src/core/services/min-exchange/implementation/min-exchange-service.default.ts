import {inject, injectable} from 'inversify';
import {Currency} from '../../..';
import {infrastructureTokens, OnlineConnector} from '../../../infrastructure';

import {MinExchange, MinExchangeService} from '../min-exchange.typings';
import {formMinExchangeUrl} from './min-exchange.utils';

@injectable()
export class DefaultMinExchangeService implements MinExchangeService {
    async calc(
        from: Currency['ticker'],
        to: Currency['ticker']
    ): Promise<MinExchange> {
        const url = formMinExchangeUrl(from, to);

        return await this.onlineConnector.get(url, {}, {useApiKey: true});
    }

    @inject(infrastructureTokens.onlineConnector)
    private readonly onlineConnector: OnlineConnector;
}
