import {injectable} from 'inversify';
import {action, computed, makeObservable, observable} from 'mobx';
import {State} from '../../../typings';
import {SellInputService} from '../sell-input.model';

@injectable()
export class DefaultSellInputService implements SellInputService {
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
