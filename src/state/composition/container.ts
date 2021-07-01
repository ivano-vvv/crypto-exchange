import {Container} from 'inversify';
import 'reflect-metadata';
import {sources} from '../../core'; // TODO: create ts-aliases for core and state
import {CurrencySource} from '../../core/sources';

import {
    CurrenciesService,
    DefaultCurrenciesService,
    DefaultErrorIndicationService,
    DefaultInitializationService,
    DefaultThrobberService,
    ErrorIndicationService,
    InitializationService,
    servicesTokens,
    ThrobberService,
} from '../services';
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
    .bind<ThrobberService>(servicesTokens.throbber)
    .to(DefaultThrobberService);

container
    .bind<ErrorIndicationService>(servicesTokens.errorIndication)
    .to(DefaultErrorIndicationService);

container
    .bind<CurrencySource>(coreTokens.sources.currency)
    .toConstantValue(sources.currency);
