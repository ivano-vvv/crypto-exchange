import {inject, injectable} from 'inversify';

import {ThrobberService} from '../../throbber';
import {ErrorIndicationService} from '../../error-indication';
import {CurrenciesService} from '../../currencies';
import {ExchangeFormInitializer} from '../../../features';
import {servicesTokens} from '../../services.tokens';
import {InitializationService} from '../initialization-service.model';
import {featuresTokens} from '../../../features/featuresTokens';

@injectable()
export class DefaultInitializationService implements InitializationService {
    init(): void {
        this.throbberService.toggle(true);

        this.currenciesService
            .update()
            .then(() => {
                this.exchangeFormInitializer
                    .init()
                    .then(() => this.throbberService.toggle(false));
            })
            .catch(() => this.errorIndication.toggle(true));
    }

    @inject(servicesTokens.currencies)
    private readonly currenciesService: CurrenciesService;

    @inject(featuresTokens.exchangeForm.initializer)
    private readonly exchangeFormInitializer: ExchangeFormInitializer;

    @inject(servicesTokens.throbber)
    throbberService: ThrobberService;

    @inject(servicesTokens.errorIndication)
    errorIndication: ErrorIndicationService;
}
