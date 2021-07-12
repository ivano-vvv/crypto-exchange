import {ChangeEvent, ReactElement, useState} from 'react';
import {observer} from 'mobx-react-lite';
import classNames from 'classnames';

import s from './exchange-form.module.css';
import {DefaultComponentProps} from '../../typings';
import {SellInput} from '../sell-input/sell-input.module';
import {BuyInput} from '../buy-input';
import {Input} from '../../components/input';
import {useBuyInputService, useCurrenciesService} from '../../../context';

export const ExchangeForm = observer(
    ({className}: DefaultComponentProps): ReactElement => {
        const buyInputService = useBuyInputService();
        const currencies = useCurrenciesService();

        const targetCurrency = currencies.get(buyInputService.currencyTicker);

        const [address, setAddress] = useState(''); // TODO: should be on the same level with other inputs state

        function handleAddressChange(e: ChangeEvent<HTMLInputElement>): void {
            setAddress(e.currentTarget.value);
        }

        return (
            <form className={classNames(className, s.self)}>
                <div className={s.exchangeRow}>
                    <SellInput className={classNames(s.input, s.input__sell)} />
                    <BuyInput className={classNames(s.input, s.input__buy)} />
                </div>
                <div className={s.submitRow}>
                    <div className={s.addressInputGroup}>
                        {targetCurrency && (
                            <label
                                className={s.addressLabel}
                                htmlFor="address"
                            >{`Your ${targetCurrency.name} address`}</label>
                        )}
                        <Input
                            name="address"
                            className={s.address}
                            value={address}
                            onChange={handleAddressChange}
                        />
                    </div>
                    <button type="button" className={s.button}>
                        {/* should be in separated module */}
                        Exchange
                    </button>
                </div>
            </form>
        );
    }
);
