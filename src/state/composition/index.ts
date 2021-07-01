import {container} from './container';
import {
    CurrenciesService,
    ErrorIndicationService,
    InitializationService,
    servicesTokens,
    ThrobberService,
} from '../services';

export const stateServices = {
    initialization: container.get<InitializationService>(
        servicesTokens.initialization
    ),
    currencies: container.get<CurrenciesService>(servicesTokens.currencies),
    throbber: container.get<ThrobberService>(servicesTokens.throbber),
    errorIndication: container.get<ErrorIndicationService>(
        servicesTokens.errorIndication
    ),
};
