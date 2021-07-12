import {inject, injectable} from 'inversify';
import {EstimatedExchangeService} from '../../../../../core/services';
import {coreTokens} from '../../../../composition/core.tokens';

import {servicesTokens, BuyInputService} from '../../../../services';
import {BuyInputSyncronizer} from '../buy-input-synchronizer.model';

@injectable()
export class DefaultBuyInputSynchronizer implements BuyInputSyncronizer {
    recalcBuyAmount(sellAmount: number, sellCurrency: string): void {
        this.buyInputService.updateState('loading');

        const currencies = {
            from: sellCurrency,
            to: this.buyInputService.currencyTicker,
        };

        this.estimatedExService
            .calc(sellAmount, currencies)
            .then(res => {
                this.buyInputService.updateAmount(res.estimatedAmount);
                this.buyInputService.updateState('default');
            })
            .catch(() => {
                this.buyInputService.updateState('error');
                this.buyInputService.updateErrorMessage(
                    'pair is not supported'
                );
            });
    }

    @inject(coreTokens.services.estimatedExchange)
    private estimatedExService: EstimatedExchangeService;

    @inject(servicesTokens.buyInputService)
    private buyInputService: BuyInputService;
}
