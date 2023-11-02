import { Coin } from "@/interfaces/coins";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ICoinsState {
  coins: Coin[]
}

const initialState: ICoinsState = {
  coins: []
};

export const coinsSlice = createSlice({
  name: "coins",
  initialState,
  reducers: {
    setCoins: (state, action: PayloadAction<Coin[]>) => {
      state.coins = action.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const { setCoins } = coinsSlice.actions;

export const coinsReducer = coinsSlice.reducer;