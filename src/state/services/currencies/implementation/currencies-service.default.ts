import {inject, injectable} from 'inversify';
import {action, makeObservable, observable} from 'mobx';
import {CurrencySource} from '../../../../core/sources';
import {Currency as SourceCurrency} from '../../../../core';
import {coreTokens} from '../../../composition/core.tokens';

import {Currency} from '../../../entities';
import {servicesTokens} from '../../services.tokens';
import {ThrobberService} from '../../throbber/throbber-service.model';
import {CurrenciesService} from '../currencies-service.model';
import {ErrorIndicationService} from '../../error-indication';

@injectable()
export class DefaultCurrenciesService implements CurrenciesService {
    @observable
    list: Currency[] = [];

    @action
    update(): void {
        this.throbberService.toggle(true);

        this.currencySource
            .getAll()
            .then(list => this.handleSourceResponse(list))
            .catch(() => this.errorIndication.toggle(true))
            .finally(() => this.throbberService.toggle(false));
    }

    private handleSourceResponse(list: SourceCurrency[]): void {
        this.list = list.map(c => ({
            image: c.image,
            name: c.name,
            ticker: c.ticker,
            minRates: {},
        }));
    }

    constructor() {
        makeObservable(this);
    }

    @inject(servicesTokens.throbber)
    throbberService: ThrobberService;

    @inject(servicesTokens.errorIndication)
    errorIndication: ErrorIndicationService;

    @inject(coreTokens.sources.currency)
    currencySource: CurrencySource;
}
