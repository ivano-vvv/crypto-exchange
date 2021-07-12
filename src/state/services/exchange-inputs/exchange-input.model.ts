import {State} from '../typings';

export interface ExchangeInput {
    amount: number;

    currencyTicker: string;

    state: State;

    errorMessage: string | null;

    updateAmount: (value: number) => void;

    updateCurrency: (currencyTicker: string) => void;
}
