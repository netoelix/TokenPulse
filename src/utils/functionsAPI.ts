import { ApiResponse } from '../types';

export async function getAll(): Promise<ApiResponse> {
  const response = await fetch('http://localhost:3000/getAll');
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data: ApiResponse = await response.json();
  return data;
}
