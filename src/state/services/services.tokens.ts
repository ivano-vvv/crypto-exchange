import {InjectionTokens} from '../../core/typings';

export const servicesTokens: InjectionTokens = {
    currencies: Symbol('services__currencies'),
    throbber: Symbol('services__throbber'),
    errorIndication: Symbol('services__error-indication'),
};
