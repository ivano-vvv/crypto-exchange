export interface Formatter<I, O> {
    do: (input: I) => O;
}
