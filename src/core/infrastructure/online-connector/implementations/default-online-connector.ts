import {inject, injectable} from 'inversify';

import {infrastructureTokens} from '../../infrastructureTokens';
import {URIParamsFormatter, utilsTokens} from '../../../utils';

import {
    OnlineConnectionOptions,
    OnlineConnector,
} from '../online-connector.model';

@injectable()
export class DefaultOnlineConnector implements OnlineConnector {
    async get<T>(
        url: string,
        params?: Dictionary<primitive>,
        options?: OnlineConnectionOptions
    ): Promise<T> {
        const paramsToSend = this.applyOptionsOnParams(params, options);
        const paramsString = paramsToSend
            ? `?${this.uriFormatter.do(paramsToSend)}`
            : '';

        const response = await fetch(`${this.baseUrl}${url}${paramsString}`);
        return response.json(); // TODO: handle parsing errors
    }

    private applyOptionsOnParams(
        params?: Dictionary<primitive>,
        options?: OnlineConnectionOptions
    ): Dictionary<primitive> | undefined {
        if (!options) {
            return {...params};
        }

        const additionalParams: Dictionary<primitive> = {};

        if (options.useApiKey) {
            additionalParams.api_key = this.apiKey;
        }

        return {...params, ...additionalParams};
    }

    @inject(infrastructureTokens.baseServerUrl)
    private baseUrl: string;

    @inject(infrastructureTokens.apiKey)
    private apiKey: string;

    @inject(utilsTokens.formatters.uriParams)
    private uriFormatter: URIParamsFormatter;
}
