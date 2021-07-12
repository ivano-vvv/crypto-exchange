import {ReactElement} from 'react';
import {observer} from 'mobx-react-lite';

import s from './exchange-form.module.css';
import {DefaultComponentProps} from '../../typings';
import classNames from 'classnames';
import {useExchangeFormService} from '../../../context';
import {CurrencyInput} from '../currency-input';
import {CurrencyInputValue} from '../currency-input/currency-input.typings';

export const ExchangeForm = observer(
    ({className}: DefaultComponentProps): ReactElement => {
        const exchangeFormService = useExchangeFormService();

        const fromValue = exchangeFormService.fromValue;
        const toValue = exchangeFormService.toValue;

        function handleFromInputChange(value: CurrencyInputValue): void {
            exchangeFormService.updateFromInput(value);
        }

        function handleToInputChange(value: CurrencyInputValue): void {
            exchangeFormService.updateFromInput(value);
        }

        return (
            <form className={classNames(className, s.self)}>
                <CurrencyInput
                    className={classNames(s.input, s.input__from)}
                    value={fromValue}
                    onValueChange={handleFromInputChange}
                />
                <CurrencyInput
                    className={classNames(s.input, s.input__to)}
                    value={toValue}
                    onValueChange={handleToInputChange}
                />
            </form>
        );
    }
);
