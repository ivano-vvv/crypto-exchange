import {inject, injectable} from 'inversify';

import {
    servicesTokens,
    BuyInputService,
    CurrenciesService,
} from '../../../../services';
import {BuyInputSyncronizer} from '../buy-input-synchronizer.model';

@injectable()
export class DefaultBuyInputSynchronizer implements BuyInputSyncronizer {
    recalcBuyAmount(sellAmount: number, sellCurrency: string): void {
        this.buyInputService.updateState('loading');

        const currencies = {
            from: sellCurrency,
            to: this.buyInputService.currencyTicker,
        };

        this.currenciesService
            .getEstimatedRate(sellAmount, currencies)
            .then(amount => {
                this.buyInputService.updateAmount(amount);
                this.buyInputService.updateState('default');
            })
            .catch(() => {
                this.buyInputService.updateState('error');
                this.buyInputService.updateErrorMessage(
                    'pair is not supported'
                );
            });
    }

    @inject(servicesTokens.buyInputService)
    private buyInputService: BuyInputService;

    @inject(servicesTokens.currencies)
    private currenciesService: CurrenciesService;
}
