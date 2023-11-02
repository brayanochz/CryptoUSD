"use client";

import React, { useState } from 'react';
import OptionBar from '../../molecules/OptionBar';
import DataTable from '../../organisms/DataTable';
import { CryptocurrencyClient } from '@/services/CryptocurrencyClient'
import { ApiContext } from '@/context/ApiContext'

const CoinList = () => {

  const [apiCryptocurrency] = useState(new CryptocurrencyClient());

  return (
    <ApiContext.Provider value={{ apiCryptocurrency }}>
      <div>
        <OptionBar />
        <DataTable />
      </div>
    </ApiContext.Provider>
  );
};

export default CoinList;