import { ApiClient } from '@/services/ApiClient';
import { currencyMock } from "@/mock/currency";
import { ExchangeRates } from "@/interfaces/exchangeRates";
import { ExchangeCurrencyClient } from "@/services/ExchangeCurrencyClient";

// Mock the ApiClient module
jest.mock('@/services/ApiClient');

describe('ExchangeCurrencyClient', () => {
  let exchangeCurrencyClient: any;

  beforeEach(() => {
    ApiClient.mockClear();
    exchangeCurrencyClient = new ExchangeCurrencyClient(process.env.EXCHANGE_API);
  });

  it('should fetch coins data using the ApiClient', async () => {
    const mockData: ExchangeRates = currencyMock;
    const expectedUrl = `${process.env.EXCHANGE_LIVE_ENDPOINT}?api_key=${process.env.EXCHANGE_API_KEY}&base=${process.env.BASE_CURRENCY}`;

    // Mock the ApiClient instance method get
    ApiClient.prototype.get.mockResolvedValue(mockData);

    // Call the getCoins method
    const data = await exchangeCurrencyClient.getCurrencies();

    // Assertions
    expect(ApiClient.prototype.get).toHaveBeenCalledWith(expectedUrl);
    expect(data).toEqual(mockData);
  });

  // Test the constructor
  it('should throw an error if EXCHANGE_API is not set', () => {
    delete process.env.EXCHANGE_API;
    expect(() => new ExchangeCurrencyClient()).toThrow("Invalid EXCHANGE_API");
  });
});
