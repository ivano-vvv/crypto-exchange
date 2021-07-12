import classNames from 'classnames';
import {ReactElement} from 'react';
import {observer} from 'mobx-react-lite';

import s from './buy-input.module.css';
import {DefaultComponentProps} from '../../typings';
import {CurrencyInput} from '../../components/currency-input';
import {
    useBuyInputService,
    useCurrenciesService,
    useSellInputService,
} from '../../../context';
import {CurrencyInputValue} from '../../components/currency-input/currency-input.typings';

export const BuyInput = observer(
    ({className}: DefaultComponentProps): ReactElement => {
        const buyInputService = useBuyInputService();
        const sellInputService = useSellInputService();
        const currenciesService = useCurrenciesService();

        const amount = buyInputService.amount;
        const kind = currenciesService.get(buyInputService.currencyTicker);

        if (!kind) {
            // TODO: should be handled properly
            return <span className={className}>--</span>;
        }

        const value: CurrencyInputValue = {
            amount,
            kind,
        };

        function handleValueUpdate(value: CurrencyInputValue): void {
            const {kind} = value;

            // buyInputService.updateAmount(amount); // no info about handling target value change

            buyInputService.updateCurrency(kind.ticker);
            sellInputService.updateAmount(sellInputService.amount); // TODO: should not depends on service of another input
        }

        const errorMessage = buyInputService.errorMessage;

        return (
            <div className={classNames(className, s.wrapper)}>
                <CurrencyInput
                    className={s.self}
                    value={value}
                    onValueChange={handleValueUpdate}
                />
                {errorMessage && (
                    <span className={s.errorLabel}>{errorMessage}</span>
                )}
            </div>
        );
    }
);
