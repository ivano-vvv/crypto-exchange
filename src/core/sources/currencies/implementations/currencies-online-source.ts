import {inject, injectable} from 'inversify';

import {Currency} from '../../../entities';
import {infrastructureTokens, OnlineConnector} from '../../../infrastructure';

import {CurrencySource} from '../currency-source.model';
import {FULL_LIST_ENDPOINT} from './currencies-online-source.constants';

@injectable()
export class CurrencyOnlineSource implements CurrencySource {
    async getAll(): Promise<Currency[]> {
        return await this.onlineConnector.get<Currency[]>(
            this.fullListEndpoint,
            {active: true}
        );
    }

    private readonly fullListEndpoint = FULL_LIST_ENDPOINT;

    @inject(infrastructureTokens.onlineConnector)
    private readonly onlineConnector: OnlineConnector;
}
