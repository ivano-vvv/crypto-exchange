import {injectable} from 'inversify';
import {action, computed, makeObservable} from 'mobx';

import {ThrobberService} from '../throbber-service.model';

@injectable()
export class DefaultThrobberService implements ThrobberService {
    @computed
    get isFetching(): boolean {
        return this.state;
    }

    @action
    toggle(on: boolean): void {
        this.state = on;
    }

    private state = false;

    constructor() {
        makeObservable(this);
    }
}
