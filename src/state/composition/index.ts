import {container} from './container';
import {
    CurrenciesService,
    ErrorIndicationService,
    servicesTokens,
    ThrobberService,
} from '../services';

export const stateServices = {
    currencies: container.get<CurrenciesService>(servicesTokens.currencies),
    throbber: container.get<ThrobberService>(servicesTokens.throbber),
    errorIndication: container.get<ErrorIndicationService>(
        servicesTokens.errorIndication
    ),
};
