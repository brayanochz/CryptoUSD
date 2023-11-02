import { Coin } from "./coins"

export interface ITableHeader {
  [key: string]: string
}

export interface ITableData {
  data: Coin[]
  headers: ITableHeader
}

export interface CoinsResponse {
  data: Coin[]
  info: any
}