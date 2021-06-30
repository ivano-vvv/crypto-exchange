import {Currency} from '../../entities';

export interface CurrenciesService {
    list: Currency[];

    update(): void;
}
