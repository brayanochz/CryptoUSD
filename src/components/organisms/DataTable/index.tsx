"use client";

import React, { useEffect, useContext, useState } from 'react';
import Table from '../../molecules/Table';
import { ApiContext } from '@/context/ApiContext';
import { CryptocurrencyClient } from '@/services/CryptocurrencyClient';
import { Coin } from '@/interfaces/coins';

const columns = {
  Name: 'name',
  Symbol: 'symbol',
  Price: 'price_usd',
  Rank: 'rank'
}

const DataTable = () => {

  const [coins, setCoins] = useState<Coin[]>([])
  const context = useContext(ApiContext);

  const getAllCoins = async (client: CryptocurrencyClient) => {
    const coins = await client.getCoins()
    console.log(coins)
    setCoins(coins?.data)
  }

  useEffect(() => {
    const { apiCryptocurrency } = context
    if (!apiCryptocurrency) return
    getAllCoins(apiCryptocurrency)
  }, [context])

  return (
    <section className="relative overflow-x-auto w-full">
      <Table data={coins} headers={columns} />
    </section>
  );
};

export default DataTable;