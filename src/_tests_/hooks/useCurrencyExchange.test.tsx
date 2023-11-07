import useCurrencyExchange from '@/hooks/useCurrencyExchange';
import { cryptoMock } from '@/mock/crypto';
import { currencyMock } from '@/mock/currency';

describe('useCurrencyExchange', () => {
  const { getCurrencyData, convertCurrency, getCurrencyOptions } = useCurrencyExchange();

  describe('getCurrencyData', () => {
    it('should return the correct base currency value and exchange rates', async () => {
      const baseCurrency = 'EUR';
      const { baseCurrencyValue, exchanges } = await getCurrencyData(baseCurrency);

      expect(baseCurrencyValue).toBe(currencyMock.exchange_rates[baseCurrency]);
      expect(exchanges).toEqual(currencyMock);
    });

  });

  describe('convertCurrency', () => {
    it('should convert coin prices based on the currency value', () => {
      const currencyValue = 0.85;
      const convertedCoins = convertCurrency(cryptoMock, currencyValue);

      expect(convertedCoins[0].price).toBe((parseFloat(cryptoMock[0].price_usd) * currencyValue).toString());
      expect(convertedCoins[1].price).toBe((parseFloat(cryptoMock[1].price_usd) * currencyValue).toString());
    });
  });

  describe('getCurrencyOptions', () => {
    it('should return currency options including the base currency', () => {
      const ratesMock = currencyMock.exchange_rates;
      const options = getCurrencyOptions(ratesMock);

      expect(options).toEqual([
        { label: process.env.BASE_CURRENCY, value: process.env.BASE_CURRENCY },
        ...Object.keys(ratesMock).map(rate => ({
          label: rate,
          value: rate
        }))
      ]);
    });
  });

});
