import {injectable} from 'inversify';
import {action, computed, makeObservable, observable} from 'mobx';
import {ErrorIndicationService} from '../error-indication-service.model';

@injectable()
export class DefaultErrorIndicationService implements ErrorIndicationService {
    @computed
    get isError(): boolean {
        return this.state;
    }

    @action
    toggle(on: boolean): void {
        this.state = on;
    }

    @observable
    private state = false;

    constructor() {
        makeObservable(this);
    }
}
