import {InjectionTokens} from '../typings';

export const infrastructureTokens: InjectionTokens = {
    baseServerUrl: Symbol('infrastructure__base-server-url'),
    onlineConnector: Symbol('infrastructure__online-connector'),
};
