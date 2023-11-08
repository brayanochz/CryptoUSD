import { IApiClient } from '@/interfaces/apiClient';
import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

/**
 * The `ApiClient` class implements the `IApiClient` interface and provides methods for making HTTP GET and POST requests using Axios.
 * It is designed to interact with a specified base URL and includes options for customizing request configurations.
 *
 * @class
 * @implements {IApiClient}
 */
export class ApiClient implements IApiClient {

  private axiosClient;

  constructor (baseUrl: string) {
    this.axiosClient = axios.create({
      baseURL: baseUrl,
      timeout: parseInt(process.env.TIMEOUT || '1000'),
      headers: {}
    });
  }

  /**
   * Performs an HTTP GET request to the specified URL.
   *
   * @async
   * @template T - The type of response data.
   * @param {string} url - The URL for the GET request.
   * @param {AxiosRequestConfig} [config] - Optional Axios request configuration.
   * @returns {Promise<T>} - A promise that resolves to the response data.
   */
  async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await this.axiosClient.get(url, config);
    return response.data;
  }

  /**
   * Performs an HTTP POST request to the specified URL with the provided data.
   *
   * @async
   * @template T - The type of response data.
   * @param {string} url - The URL for the POST request.
   * @param {any} data - The data to be sent in the request body.
   * @param {AxiosRequestConfig} [config] - Optional Axios request configuration.
   * @returns {Promise<T>} - A promise that resolves to the response data.
   */
  async post<T>(url: string, data: any, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await this.axiosClient.post(url, data, config);
    return response.data;
  }
}