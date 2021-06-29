export interface OnlineConnector {
    get<T>(url: string, params?: Dictionary<primitive>): Promise<T>;
}
