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
    throbber: container.get<ThrobberService>(servicesTokens.throbber),
    errorIndication: container.get<ErrorIndicationService>(
        servicesTokens.errorIndication
    ),
};
