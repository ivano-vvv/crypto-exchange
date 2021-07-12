import classNames from 'classnames';
import {ReactElement} from 'react';
import {observer} from 'mobx-react-lite';

import s from './sell-input.module.css';
import {DefaultComponentProps} from '../../typings';
import {CurrencyInput} from '../../components/currency-input';
import {useCurrenciesService, useSellInputService} from '../../../context';
import {CurrencyInputValue} from '../../components/currency-input/currency-input.typings';

export const SellInput = observer(
    ({className}: DefaultComponentProps): ReactElement => {
        const sellInputService = useSellInputService();
        const currenciesService = useCurrenciesService();

        const amount = sellInputService.amount;
        const kind = currenciesService.get(sellInputService.currencyTicker);

        if (!kind) {
            // TODO: should be handled properly
            return <span className={className}>--</span>;
        }

        const value: CurrencyInputValue = {
            amount,
            kind,
        };

        function handleValueUpdate(value: CurrencyInputValue): void {
            const {amount, kind} = value;

            sellInputService.updateAmount(amount);
            sellInputService.updateCurrency(kind.ticker);
        }

        const errorMessage = sellInputService.errorMessage;

        return (
            <div>
                <CurrencyInput
                    className={classNames(className, s.self)}
                    value={value}
                    onValueChange={handleValueUpdate}
                />
                {/* TODO: should be inside component */}
                {errorMessage && <p className={s.errorLabel}>{errorMessage}</p>}
            </div>
        );
    }
);
