import {container} from './container';
import {
    BuyInputService,
    CurrenciesService,
    ErrorIndicationService,
    InitializationService,
    SellInputService,
    servicesTokens,
    ThrobberService,
} from '../services';
import {ExchangeFormService} from '../services/exchange-form/exchange-form-service.model';

export const stateServices = {
    initialization: container.get<InitializationService>(
        servicesTokens.initialization
    ),
    currencies: container.get<CurrenciesService>(servicesTokens.currencies),
    buyInputService: container.get<BuyInputService>(
        servicesTokens.buyInputService
    ),
    sellInputService: container.get<SellInputService>(
        servicesTokens.sellInputService
    ),
    exchangeForm: container.get<ExchangeFormService>(
        servicesTokens.exchangeForm
    ),
    throbber: container.get<ThrobberService>(servicesTokens.throbber),
    errorIndication: container.get<ErrorIndicationService>(
        servicesTokens.errorIndication
    ),
};
