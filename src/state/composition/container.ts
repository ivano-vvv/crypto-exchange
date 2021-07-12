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
import {
    ExchangeFormInitializer,
    DefaultExchangeFormInitializer,
} from '../features';
import {coreTokens} from './core.tokens';
import {featuresTokens} from '../features/featuresTokens';
import {BuyInputSyncronizer} from '../features/exchange-form/buy-input-synchronizer/buy-input-synchronizer.model';
import {DefaultBuyInputSynchronizer} from '../features/exchange-form/buy-input-synchronizer/implemenation/buy-input-synchronizer.default';

export const container = new Container({defaultScope: 'Singleton'});

// TODO: divide composing on submodules

container
    .bind<InitializationService>(servicesTokens.initialization)
    .to(DefaultInitializationService);

container
    .bind<CurrenciesService>(servicesTokens.currencies)
    .to(DefaultCurrenciesService);

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

container
    .bind<ExchangeFormInitializer>(featuresTokens.exchangeForm.initializer)
    .to(DefaultExchangeFormInitializer);

container
    .bind<BuyInputSyncronizer>(featuresTokens.exchangeForm.synchronizer)
    .to(DefaultBuyInputSynchronizer);
