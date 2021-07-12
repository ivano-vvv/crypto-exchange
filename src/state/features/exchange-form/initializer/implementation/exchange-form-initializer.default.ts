import {inject, injectable} from 'inversify';
import {MinExchangeService} from '../../../../../core/services';
import {coreTokens} from '../../../../composition/core.tokens';

import {CurrenciesService} from '../../../../services/currencies';
import {
    BuyInputService,
    SellInputService,
} from '../../../../services/exchange-inputs';
import {servicesTokens} from '../../../../services/services.tokens';
import {ExchangeFormInitializer} from '../exchange-form-initializer.model';

@injectable()
export class DefaultExchangeFormInitializer implements ExchangeFormInitializer {
    async init(): Promise<void> {
        const currencies = this.currenciesService.list;

        // TODO: 0- and 1-length lists should be handled

        const sellCurrency = currencies[0].ticker;
        const buyCurrency = currencies[1].ticker;

        this.sellInputService.updateCurrency(sellCurrency);
        this.buyInputService.updateCurrency(buyCurrency);

        await this.minExchangeService
            .calc(
                this.sellInputService.currencyTicker,
                this.buyInputService.currencyTicker
            )
            .then(({minAmount}) => {
                this.sellInputService.updateAmount(minAmount);
            });
    }

    @inject(servicesTokens.currencies)
    private currenciesService: CurrenciesService;

    @inject(servicesTokens.sellInputService)
    private sellInputService: SellInputService;

    @inject(servicesTokens.buyInputService)
    private buyInputService: BuyInputService;

    @inject(coreTokens.services.minExchange)
    private minExchangeService: MinExchangeService;
}
