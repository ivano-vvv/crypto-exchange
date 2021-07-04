import {inject, injectable} from 'inversify';

import {infrastructureTokens} from '../../infrastructureTokens';
import {URIParamsFormatter, utilsTokens} from '../../../utils';

import {OnlineConnector} from '../online-connector.model';

@injectable()
export class DefaultOnlineConnector implements OnlineConnector {
    async get<T>(url: string, params?: Dictionary<primitive>): Promise<T> {
        const paramsString = params ? `?${this.uriFormatter.do(params)}` : '';

        const response = await fetch(`${this.baseUrl}${url}${paramsString}`);
        return response.json(); // TODO: handle parsing errors
    }

    @inject(infrastructureTokens.baseServerUrl)
    private baseUrl: string;

    @inject(utilsTokens.formatters.uriParams)
    private uriFormatter: URIParamsFormatter;
}
