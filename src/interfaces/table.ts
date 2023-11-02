import { Coin } from "./coins"

export interface ITableHeader {
  [key: string]: ITableHeaderColumn
}

export interface ITableHeaderColumn {
    key: string,
    format?: boolean
}

export interface ITableData {
  data: Coin[]
  headers: ITableHeader
}

export interface CoinsResponse {
  data: Coin[]
  info: any
}