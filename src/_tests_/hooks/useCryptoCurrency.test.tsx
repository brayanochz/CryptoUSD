import useCryptoCurrency from "@/hooks/useCryptoCurrency";

describe('useCryptoCurrency', () => {

  // Returns an object with a 'getCoins' function
  it('should return an object with a \'getCoins\' function', () => {
    const { getCoins } = useCryptoCurrency();
    expect(typeof getCoins).toBe('function');
  });

  // Calls the 'getCoins' function of the CryptocurrencyClient class with a valid page parameter
  it('should call the \'getCoins\' function of the CryptocurrencyClient class with a valid page parameter', () => {
    const page = '1';
    const mockGetCoins = jest.fn();
    const mockCryptocurrencyClient = jest.fn().mockImplementation(() => {
      return {
        getCoins: mockGetCoins
      };
    });
    jest.mock('@/services/CryptocurrencyClient', () => {
      return {
        CryptocurrencyClient: mockCryptocurrencyClient
      };
    });
    const { getCoins } = useCryptoCurrency();
    getCoins(page);
    expect(mockGetCoins).toHaveBeenCalledWith(page);
  });

  // Returns the result of the 'getCoins' function of the CryptocurrencyClient class
  it('should return the result of the \'getCoins\' function of the CryptocurrencyClient class', async () => {
    const page = '1';
    const mockGetCoins = jest.fn().mockResolvedValue('coins');
    const mockCryptocurrencyClient = jest.fn().mockImplementation(() => {
      return {
        getCoins: mockGetCoins
      };
    });
    jest.mock('@/services/CryptocurrencyClient', () => {
      return {
        CryptocurrencyClient: mockCryptocurrencyClient
      };
    });
    const { getCoins } = useCryptoCurrency();
    const result = await getCoins(page);
    expect(result).toBe('coins');
  });

  // Throws an error if the CryptocurrencyClient class throws an error
  it('should throw an error if the CryptocurrencyClient class throws an error', async () => {
    const page = '1';
    const mockGetCoins = jest.fn().mockRejectedValue(new Error('API error'));
    const mockCryptocurrencyClient = jest.fn().mockImplementation(() => {
      return {
        getCoins: mockGetCoins
      };
    });
    jest.mock('@/services/CryptocurrencyClient', () => {
      return {
        CryptocurrencyClient: mockCryptocurrencyClient
      };
    });
    const { getCoins } = useCryptoCurrency();
    await expect(getCoins(page)).rejects.toThrowError('API error');
  });

  // Throws an error if the 'getCoins' function of the CryptocurrencyClient class returns an invalid response
  it('should throw an error if the \'getCoins\' function of the CryptocurrencyClient class returns an invalid response', async () => {
    const page = '1';
    const mockGetCoins = jest.fn().mockResolvedValue('invalid response');
    const mockCryptocurrencyClient = jest.fn().mockImplementation(() => {
      return {
        getCoins: mockGetCoins
      };
    });
    jest.mock('@/services/CryptocurrencyClient', () => {
      return {
        CryptocurrencyClient: mockCryptocurrencyClient
      };
    });
    const { getCoins } = useCryptoCurrency();
    await expect(getCoins(page)).rejects.toThrowError('Invalid response');
  });

  // Returns an empty object if the 'getCoins' function of the CryptocurrencyClient class returns an empty response
  it('should return an empty object if the \'getCoins\' function of the CryptocurrencyClient class returns an empty response', async () => {
    const page = '1';
    const mockGetCoins = jest.fn().mockResolvedValue([]);
    const mockCryptocurrencyClient = jest.fn().mockImplementation(() => {
      return {
        getCoins: mockGetCoins
      };
    });
    jest.mock('@/services/CryptocurrencyClient', () => {
      return {
        CryptocurrencyClient: mockCryptocurrencyClient
      };
    });
    const { getCoins } = useCryptoCurrency();
    const result = await getCoins(page);
    expect(result).toEqual({});
  });
});
