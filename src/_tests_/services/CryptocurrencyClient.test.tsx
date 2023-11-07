import { CoinsResponse } from "@/interfaces/table";
import { cryptoCurrency } from '@/mock/crypto';
import { CryptocurrencyClient } from '@/services/CryptocurrencyClient';
import { ApiClient } from '@/services/ApiClient';

// Mock the ApiClient module
jest.mock('@/services/ApiClient');

// Test suite for CryptocurrencyClient
describe('CryptocurrencyClient', () => {
  let cryptoClient: any;

  // Setup before each test case
  beforeEach(() => {

    // Reset ApiClient mock
    ApiClient.mockClear();
    cryptoClient = new CryptocurrencyClient(process.env.CRYPTOCURRENCY_API);
  });


  // Test the getCoins method
  it('should fetch coins data using the ApiClient', async () => {

    const mockData: CoinsResponse = cryptoCurrency;
    const page = '1';
    const expectedUrl = `${process.env.CRYPTOCURRENCY_COIN_ENDPOINT}?start=0&limit=100`;

    // Mock the ApiClient instance method get
    ApiClient.prototype.get.mockResolvedValue(mockData);

    // Call the getCoins method
    const data = await cryptoClient.getCoins(page);

    // Assertions
    expect(ApiClient.prototype.get).toHaveBeenCalledWith(expectedUrl);
    expect(data).toEqual(mockData);
  });

  // Test the constructor
  it('should throw an error if CRYPTOCURRENCY_API is not set', () => {
    delete process.env.CRYPTOCURRENCY_API;
    expect(() => new CryptocurrencyClient()).toThrow("Invalid CRYPTOCURRENCY_API");
  });

});
