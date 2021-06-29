import {inject, injectable} from 'inversify';

import {infrastructureTokens} from '../../infrastructureTokens';

import {OnlineConnector} from '../online-connector.model';

@injectable()
export class DefaultOnlineConnector implements OnlineConnector {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async get<T>(url: string, params?: Dictionary<primitive>): Promise<T> {
        const response = await fetch(`${this.baseUrl}${url}`); // TODO: add params
        return response.json(); // TODO: handle parsing errors
    }

    @inject(infrastructureTokens.baseServerUrl)
    private baseUrl: string;
}
