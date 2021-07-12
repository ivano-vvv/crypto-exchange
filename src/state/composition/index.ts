import {container} from './container';
import {
    CurrenciesService,
    ErrorIndicationService,
    InitializationService,
    servicesTokens,
    ThrobberService,
} from '../services';
import {ExchangeFormService} from '../services/exchange-form/exchange-form-service.model';

export const stateServices = {
    initialization: container.get<InitializationService>(
        servicesTokens.initialization
    ),
    currencies: container.get<CurrenciesService>(servicesTokens.currencies),
    exchangeForm: container.get<ExchangeFormService>(
        servicesTokens.exchangeForm
    ),
    throbber: container.get<ThrobberService>(servicesTokens.throbber),
    errorIndication: container.get<ErrorIndicationService>(
        servicesTokens.errorIndication
    ),
};
