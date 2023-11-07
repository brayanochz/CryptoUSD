import { AxiosRequestConfig, AxiosResponse } from "axios";

export const axiosInstanceProperties = {
  defaults: undefined,
  interceptors: {
    request: undefined,
    response: undefined
  },
  getUri: function (config?: AxiosRequestConfig<any> | undefined): string {
    throw new Error('Function not implemented.');
  },
  request: function <T = any, R = AxiosResponse<T, any>, D = any>(config: AxiosRequestConfig<D>): Promise<R> {
    throw new Error('Function not implemented.');
  },
  delete: function <T = any, R = AxiosResponse<T, any>, D = any>(url: string, config?: AxiosRequestConfig<D> | undefined): Promise<R> {
    throw new Error('Function not implemented.');
  },
  head: function <T = any, R = AxiosResponse<T, any>, D = any>(url: string, config?: AxiosRequestConfig<D> | undefined): Promise<R> {
    throw new Error('Function not implemented.');
  },
  options: function <T = any, R = AxiosResponse<T, any>, D = any>(url: string, config?: AxiosRequestConfig<D> | undefined): Promise<R> {
    throw new Error('Function not implemented.');
  },
  put: function <T = any, R = AxiosResponse<T, any>, D = any>(url: string, data?: D | undefined, config?: AxiosRequestConfig<D> | undefined): Promise<R> {
    throw new Error('Function not implemented.');
  },
  patch: function <T = any, R = AxiosResponse<T, any>, D = any>(url: string, data?: D | undefined, config?: AxiosRequestConfig<D> | undefined): Promise<R> {
    throw new Error('Function not implemented.');
  },
  postForm: function <T = any, R = AxiosResponse<T, any>, D = any>(url: string, data?: D | undefined, config?: AxiosRequestConfig<D> | undefined): Promise<R> {
    throw new Error('Function not implemented.');
  },
  putForm: function <T = any, R = AxiosResponse<T, any>, D = any>(url: string, data?: D | undefined, config?: AxiosRequestConfig<D> | undefined): Promise<R> {
    throw new Error('Function not implemented.');
  },
  patchForm: function <T = any, R = AxiosResponse<T, any>, D = any>(url: string, data?: D | undefined, config?: AxiosRequestConfig<D> | undefined): Promise<R> {
    throw new Error('Function not implemented.');
  }
}