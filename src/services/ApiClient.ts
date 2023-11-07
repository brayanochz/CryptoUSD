import { IApiClient } from '@/interfaces/apiClient';
import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';


export class ApiClient implements IApiClient {

  private axiosClient;

  constructor (baseUrl: string) {
    this.axiosClient = axios.create({
      baseURL: baseUrl,
      timeout: parseInt(process.env.TIMEOUT || '1000'),
      headers: {}
    });
  }

  async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await this.axiosClient.get(url, config);
    return response.data;
  }

  async post<T>(url: string, data: any, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await this.axiosClient.post(url, data, config);
    return response.data;
  }
}