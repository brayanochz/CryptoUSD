import { ApiClient } from '@/services/ApiClient';
import axios from 'axios';

// Mock the axios module with Jest
jest.mock('axios');

const mockAxiosInstance = {
  get: jest.fn(),
  post: jest.fn(),
};

// Since the ApiClient class is using axios.create, we need to mock that
axios.create.mockReturnValue(mockAxiosInstance);

// Test suite for ApiClient
describe('ApiClient', () => {
  const baseURL = 'http://example.com';
  let apiClient: ApiClient;

  beforeEach(() => {
    mockAxiosInstance.get.mockReset();
    mockAxiosInstance.post.mockReset();
    apiClient = new ApiClient(baseURL);
  });

  it('should perform a GET request and return data', async () => {
    const mockData = { key: 'value' };
    const url = '/data';

    mockAxiosInstance.get.mockResolvedValue({ data: mockData });

    const data = await apiClient.get(url);

    expect(mockAxiosInstance.get).toHaveBeenCalledWith(url, undefined);
    expect(data).toEqual(mockData);
  });

  it('should perform a POST request and return data', async () => {
    const mockData = { key: 'value' };
    const url = '/submit';
    const postData = { form: 'data' };

    mockAxiosInstance.post.mockResolvedValue({ data: mockData });

    const data = await apiClient.post(url, postData);

    expect(mockAxiosInstance.post).toHaveBeenCalledWith(url, postData, undefined);
    expect(data).toEqual(mockData);
  });
});
