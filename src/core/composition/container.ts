import {Container} from 'inversify';
import 'reflect-metadata';

import {infrastructureTokens, OnlineConnector} from '../infrastructure';
import {DefaultOnlineConnector} from '../infrastructure/online-connector/implementations/default-online-connector';
import {
    DefaultMinExchangeService,
    MinExchangeService,
    serviceTokens,
} from '../services';
import {CurrencySource, sourceTokens} from '../sources';
import {CurrencyOnlineSource} from '../sources/currencies/implementations';
import {
    URIParamsFormatter,
    utilsTokens,
    DefaultURIParamsFormatter,
} from '../utils';

export const container = new Container({defaultScope: 'Singleton'});

// TODO: divide on submodules by sections

container
    .bind<string | undefined>(infrastructureTokens.baseServerUrl)
    .toConstantValue(process.env.REACT_APP_SERVER_BASE_URL);

container
    .bind<string>(infrastructureTokens.apiKey)
    .toConstantValue(process.env.REACT_APP_API_KEY as string); // TODO: handle undefined key

container
    .bind<OnlineConnector>(infrastructureTokens.onlineConnector)
    .to(DefaultOnlineConnector);

container
    .bind<CurrencySource>(sourceTokens.currencySource)
    .to(CurrencyOnlineSource);

container
    .bind<MinExchangeService>(serviceTokens.minExchange)
    .to(DefaultMinExchangeService);

container
    .bind<URIParamsFormatter>(utilsTokens.formatters.uriParams)
    .to(DefaultURIParamsFormatter);
