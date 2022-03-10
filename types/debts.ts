export interface summarizedDebts {
    creditCardLimit: Number;
    totalDebt: Number;
    totalDebtExternal: Number;
    totalDebtInternal: Number;
    availableLimit: Number;
}

export interface debtSourceSummarized {
    logoURL: String;
    name: String;
    creditCardLimit: Number;
    totalDebt: Number;
    totalDebtExternal: Number;
    totalDebtInternal: Number;
    availableLimit: Number;
}

export interface allDebts {
    debtSourceSummarized: Array<debtSourceSummarized>;
    summarizedDebts: summarizedDebts;
}