import {Container} from 'inversify';
import 'reflect-metadata';

import {infrastructureTokens, OnlineConnector} from '../infrastructure';
import {DefaultOnlineConnector} from '../infrastructure/online-connector/implementations/default-online-connector';
import {CurrencySource, sourceTokens} from '../sources';
import {CurrencyOnlineSource} from '../sources/currencies/implementations';

export const container = new Container({defaultScope: 'Singleton'});

// TODO: divide on submodules by sections

container
    .bind<string | undefined>(infrastructureTokens.baseServerUrl)
    .toConstantValue(process.env.REACT_APP_SERVER_BASE_URL);

container
    .bind<OnlineConnector>(infrastructureTokens.onlineConnector)
    .to(DefaultOnlineConnector);

container
    .bind<CurrencySource>(sourceTokens.currencySource)
    .to(CurrencyOnlineSource);
