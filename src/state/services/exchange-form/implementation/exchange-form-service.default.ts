import {inject, injectable} from 'inversify';

import {CurrenciesService} from '../../currencies';
import {BuyInputService, SellInputService} from '../../exchange-inputs';
import {servicesTokens} from '../../services.tokens';
import {ExchangeFormService} from '../exchange-form-service.model';

@injectable()
export class DefaultExchangeFormService implements ExchangeFormService {
    async init(): Promise<void> {
        const currencies = this.currenciesService.list;

        // TODO: 0- and 1-length lists should be handled

        const sellCurrency = currencies[0].ticker;
        const buyCurrency = currencies[1].ticker;

        this.sellInputService.updateCurrency(sellCurrency);
        this.buyInputService.updateCurrency(buyCurrency);
    }

    @inject(servicesTokens.currencies)
    private currenciesService: CurrenciesService;

    @inject(servicesTokens.sellInputService)
    private sellInputService: SellInputService;

    @inject(servicesTokens.buyInputService)
    private buyInputService: BuyInputService;
}
