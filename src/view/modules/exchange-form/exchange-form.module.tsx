import {ReactElement} from 'react';
import {observer} from 'mobx-react-lite';

import s from './exchange-form.module.css';
import {DefaultComponentProps} from '../../typings';
import classNames from 'classnames';
import {SellInput} from '../sell-input/sell-input.module';
import {BuyInput} from '../buy-input';

export const ExchangeForm = observer(
    ({className}: DefaultComponentProps): ReactElement => {
        return (
            <form className={classNames(className, s.self)}>
                <SellInput />
                <BuyInput />
            </form>
        );
    }
);
