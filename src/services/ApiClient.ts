import { IApiClient } from '@/interfaces/apiClient';
import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

const axiosClient = axios.create({
  baseURL: process.env.CRYPTOCURRENCY_API,
  timeout: parseInt(process.env.TIMEOUT || '1000'),
  headers: {}
});

export class ApiClient implements IApiClient {
  async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await axiosClient.get(url, config);
    return response.data;
  }

  async post<T>(url: string, data: any, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await axiosClient.post(url, data, config);
    return response.data;
  }
}