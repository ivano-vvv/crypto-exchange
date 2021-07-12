import {inject, injectable} from 'inversify';

import {infrastructureTokens, OnlineConnector} from '../../../infrastructure';
import {
    CurrenciesToExchange,
    EstimatedExchange,
    EstimatedExchangeService,
} from '../estimated-exchange.typings';
import {formEstExchangeUrl} from './estimated-exchange.utils';

@injectable()
export class DefaultEstimatedExchangeService
    implements EstimatedExchangeService
{
    async calc(
        amount: number,
        currencies: CurrenciesToExchange
    ): Promise<EstimatedExchange> {
        const url = formEstExchangeUrl(amount, currencies);

        return await this.onlineConnector.get(url, {}, {useApiKey: true});
    }

    @inject(infrastructureTokens.onlineConnector)
    private readonly onlineConnector: OnlineConnector;
}
