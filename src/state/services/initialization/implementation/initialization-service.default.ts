import {inject, injectable} from 'inversify';

import {CurrenciesService} from '../../currencies';
import {servicesTokens} from '../../services.tokens';
import {InitializationService} from '../initialization-service.model';

@injectable()
export class DefaultInitializationService implements InitializationService {
    init(): void {
        this.currenciesService.update();
    }

    @inject(servicesTokens.currencies)
    private readonly currenciesService: CurrenciesService;
}
