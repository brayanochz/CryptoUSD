import useCryptoCurrency from "@/hooks/useCryptoCurrency";
import { cryptoCurrency } from "@/mock/crypto";
import { CryptocurrencyClient } from "@/services/CryptocurrencyClient";

// Mock the CryptocurrencyClient module
jest.mock("@/services/CryptocurrencyClient");

describe('useCryptoCurrency', () => {
  CryptocurrencyClient.prototype.getCoins = jest.fn().mockResolvedValue(cryptoCurrency);

  it('should return coins data when getCoins is called', async () => {
    const { getCoins } = useCryptoCurrency();
    const page = '1';

    const data = await getCoins(page);

    expect(CryptocurrencyClient.prototype.getCoins).toHaveBeenCalledWith(page);
    expect(data).toEqual(cryptoCurrency);
  });

});
