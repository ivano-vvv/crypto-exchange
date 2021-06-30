export interface ThrobberService {
    isFetching: boolean;

    toggle(on: boolean): void;
}
