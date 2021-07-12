import {State} from '../typings';

// TODO: probably this service should be recreated as sqs
export interface ExchangeInput {
    amount: number;

    currencyTicker: string;

    state: State;

    errorMessage: string | null;

    updateAmount: (value: number) => void;

    updateCurrency: (currencyTicker: string) => void;

    // TODO: next two methods should not be available to ui
    updateState: (state: State) => void;

    updateErrorMessage: (errorMsg: string | null) => void;
}
