import {InjectionTokens} from '../typings';

export const infrastructureTokens: InjectionTokens = {
    baseServerUrl: Symbol('infrastructure__base-server-url'),
    apiKey: Symbol('infrastructure__api-key'),
    onlineConnector: Symbol('infrastructure__online-connector'),
};
