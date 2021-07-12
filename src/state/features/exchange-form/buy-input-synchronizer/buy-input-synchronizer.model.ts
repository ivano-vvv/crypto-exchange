export interface BuyInputSyncronizer {
    recalcBuyAmount(sellAmount: number, sellCurrency: string): void;
}
