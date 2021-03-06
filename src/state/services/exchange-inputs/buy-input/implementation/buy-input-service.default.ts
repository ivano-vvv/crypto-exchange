import {injectable} from 'inversify';
import {action, computed, makeObservable, observable} from 'mobx';
import {State} from '../../../typings';
import {BuyInputService} from '../buy-input.model';

// TODO: buy input service and sell input service should have a common parent
@injectable()
export class DefaultBuyInputService implements BuyInputService {
    @computed
    get amount(): number {
        return this._amount;
    }

    @computed
    get currencyTicker(): string {
        return this._currencyTicker;
    }

    @computed
    get errorMessage(): string | null {
        return this._errorMessage;
    }

    @computed
    get state(): State {
        return this._state;
    }

    @action
    updateAmount(value: number): void {
        this._amount = value;
    }

    @action
    updateCurrency(ticker: string): void {
        this._currencyTicker = ticker;
    }

    @action
    updateState(state: State): void {
        this._state = state;
    }

    @action
    updateErrorMessage(errorMsg: string | null): void {
        this._errorMessage = errorMsg;
    }

    @observable
    private _amount = 0;

    @observable
    private _currencyTicker = '';

    @observable
    private _state: State = 'default';

    @observable
    private _errorMessage: string | null = null;

    constructor() {
        makeObservable(this);
    }
}
