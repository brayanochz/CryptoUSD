import { CoinsResponse } from "@/interfaces/table";
import { cryptoCurrencyMock, cryptoDetailMock, marketsMock } from '@/mock/crypto';
import { CryptocurrencyClient } from '@/services/CryptocurrencyClient';
import { ApiClient } from '@/services/ApiClient';
import "@testing-library/jest-dom";
import { Coin } from "@/interfaces/coins";
import { Market } from "@/interfaces/market";

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

    const mockData: CoinsResponse = cryptoCurrencyMock;
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

  // Test the getDetails method
  it('should fetch coin details data using the ApiClient', async () => {

    const mockData: Coin[] = cryptoDetailMock;
    const id = '50';
    const expectedUrl = `${process.env.CRYPTOCURRENCY_COIN_DETAILS_ENDPOINT}?id=${id}`;

    // Mock the ApiClient instance method get
    ApiClient.prototype.get.mockResolvedValue(mockData);

    // Call the getCoinDetails method
    const data = await cryptoClient.getCoinDetails(id);

    // Assertions
    expect(ApiClient.prototype.get).toHaveBeenCalledWith(expectedUrl);
    expect(data).toEqual(mockData);
  });

  // Test the getMarkets method
  it('should fetch markets details data using the ApiClient', async () => {

    const mockData: Market[] = marketsMock;
    const id = '50';
    const expectedUrl = `${process.env.CRYPTOCURRENCY_MARKETS}?id=${id}`;

    // Mock the ApiClient instance method get
    ApiClient.prototype.get.mockResolvedValue(mockData);

    // Call the getCoinDetails method
    const data = await cryptoClient.getMarkets(id);

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
