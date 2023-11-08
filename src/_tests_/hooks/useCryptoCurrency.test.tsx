import useCryptoCurrency from "@/hooks/useCryptoCurrency";
import { cryptoCurrency, cryptoDetail } from "@/mock/crypto";
import { CryptocurrencyClient } from "@/services/CryptocurrencyClient";

// Mock the CryptocurrencyClient module
jest.mock("@/services/CryptocurrencyClient");

describe('useCryptoCurrency', () => {
  CryptocurrencyClient.prototype.getCoins = jest.fn().mockResolvedValue(cryptoCurrency);
  CryptocurrencyClient.prototype.getCoinDetails = jest.fn().mockResolvedValue(cryptoDetail);

  it('should return coins data when getCoins is called', async () => {
    const { getCoins } = useCryptoCurrency();
    const page = '1';

    const data = await getCoins(page);

    expect(CryptocurrencyClient.prototype.getCoins).toHaveBeenCalledWith(page);
    expect(data).toEqual(cryptoCurrency);
  });

  it('should return coins data when getCoins is called', async () => {
    const { getCoinDetails } = useCryptoCurrency();
    const id = '50';

    const data = await getCoinDetails(id);

    expect(CryptocurrencyClient.prototype.getCoinDetails).toHaveBeenCalledWith(id);
    expect(data).toEqual(cryptoDetail);
  });

});
