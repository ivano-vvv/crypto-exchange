import {Currency} from '../../entities';
import {State} from '../typings';

export type ExchangeInput = {
    state: State;

    errorMessage: string | null;

    value: number;

    currency: Currency;
};

export type ExchangeFromInput = ExchangeInput & {minAmount: Dictionary<number>};

export type UpdateHandler = (value: ViewInputValue) => void;

export type ViewInputValue = {
    amount: number;

    kind: Currency;
};

export interface ExchangeFormService {
    init(): Promise<void>;

    fromValue: ViewInputValue;

    toValue: ViewInputValue;

    fromState: State;

    toState: State;

    fromErrorMessage: string | null;

    toErrorMessage: string | null;

    updateFromInput: UpdateHandler;

    updateToInput: UpdateHandler;
}
