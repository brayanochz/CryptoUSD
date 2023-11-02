"use client";
export interface IApiClient {
  get<T>(url: string, config?: any): Promise<T>;
  post<T>(url: string, data: any, config?: any): Promise<T>;
  // Complement with other methods (put, delete, etc.)
}