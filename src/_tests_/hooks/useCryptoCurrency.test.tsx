import { CryptocurrencyClient } from "@/services/CryptocurrencyClient";
import { cryptoCurrency } from "@/mock/crypto";
import useCryptoCurrency from "@/hooks/useCryptoCurrency";

// Mock de la clase CryptocurrencyClient
jest.mock("@/services/CryptocurrencyClient");

describe("useCryptoCurrency", () => {
  it('should return the expected result', async () => {
    const mockResponseData = cryptoCurrency;

    const getCoinsMock = jest.spyOn(CryptocurrencyClient.prototype, 'getCoins');
    getCoinsMock.mockResolvedValue(mockResponseData);

    const { getCoins } = useCryptoCurrency();
    const result = await getCoins('1');

    expect(result).toEqual(mockResponseData);
    expect(getCoinsMock).toHaveBeenCalledWith('1');
  });
});