"use client";
import { CryptocurrencyClient } from '@/services/CryptocurrencyClient';
import { createContext } from 'react';

interface ApiContextType {
  apiCryptocurrency: CryptocurrencyClient| undefined; 
}

const initialState: ApiContextType = {
  apiCryptocurrency: undefined
}

export const ApiContext = createContext<ApiContextType>(initialState);