import {inject, injectable} from 'inversify';

import {ThrobberService} from '../../throbber';
import {ErrorIndicationService} from '../../error-indication';
import {CurrenciesService} from '../../currencies';
import {ExchangeFormService} from '../../exchange-form/exchange-form-service.model';
import {servicesTokens} from '../../services.tokens';
import {InitializationService} from '../initialization-service.model';

@injectable()
export class DefaultInitializationService implements InitializationService {
    init(): void {
        this.throbberService.toggle(true);

        this.currenciesService
            .update()
            .then(() => {
                this.exchangeFormService
                    .init()
                    .then(() => this.throbberService.toggle(false));
            })
            .catch(() => this.errorIndication.toggle(true));
    }

    @inject(servicesTokens.currencies)
    private readonly currenciesService: CurrenciesService;

    @inject(servicesTokens.exchangeForm)
    private readonly exchangeFormService: ExchangeFormService;

    @inject(servicesTokens.throbber)
    throbberService: ThrobberService;

    @inject(servicesTokens.errorIndication)
    errorIndication: ErrorIndicationService;
}
