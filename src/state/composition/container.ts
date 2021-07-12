import {Container} from 'inversify';
import 'reflect-metadata';

import {services, sources} from '../../core'; // TODO: create ts-aliases for core and state
import {
    EstimatedExchangeService,
    MinExchangeService,
} from '../../core/services';
import {CurrencySource} from '../../core/sources';

import {
    BuyInputService,
    CurrenciesService,
    DefaultBuyInputService,
    DefaultCurrenciesService,
    DefaultErrorIndicationService,
    DefaultInitializationService,
    DefaultSellInputService,
    DefaultThrobberService,
    ErrorIndicationService,
    InitializationService,
    SellInputService,
    servicesTokens,
    ThrobberService,
} from '../services';
import {ExchangeFormService} from '../services/exchange-form/exchange-form-service.model';
import {DefaultExchangeFormService} from '../services/exchange-form/implementation/exchange-form-service.default';
import {coreTokens} from './core.tokens';

export const container = new Container({defaultScope: 'Singleton'});

// TODO: divide composing on submodules

container
    .bind<InitializationService>(servicesTokens.initialization)
    .to(DefaultInitializationService);

container
    .bind<CurrenciesService>(servicesTokens.currencies)
    .to(DefaultCurrenciesService);

container
    .bind<ExchangeFormService>(servicesTokens.exchangeForm)
    .to(DefaultExchangeFormService);

container
    .bind<BuyInputService>(servicesTokens.buyInputService)
    .to(DefaultBuyInputService);

container
    .bind<SellInputService>(servicesTokens.sellInputService)
    .to(DefaultSellInputService);

container
    .bind<ThrobberService>(servicesTokens.throbber)
    .to(DefaultThrobberService);

container
    .bind<ErrorIndicationService>(servicesTokens.errorIndication)
    .to(DefaultErrorIndicationService);

container
    .bind<CurrencySource>(coreTokens.sources.currency)
    .toConstantValue(sources.currency);

container
    .bind<MinExchangeService>(coreTokens.services.minExchange)
    .toConstantValue(services.minExchange);

container
    .bind<EstimatedExchangeService>(coreTokens.services.estimatedExchange)
    .toConstantValue(services.estimatedExchange);
