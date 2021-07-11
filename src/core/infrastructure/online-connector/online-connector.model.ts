export interface OnlineConnector {
    get<T>(
        url: string,
        params?: Dictionary<primitive>,
        options?: OnlineConnectionOptions
    ): Promise<T>;
}

export type OnlineConnectionOptions = {
    useApiKey?: boolean;
};
