export interface ExchangeRates {
  base: string
  last_updated: number
  exchange_rates: Rates
}

export interface Rates {
  [key: string]: number
}
