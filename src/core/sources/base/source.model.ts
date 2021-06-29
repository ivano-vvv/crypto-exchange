export interface Source<T> {
    getAll(): Promise<T[]>;
}
