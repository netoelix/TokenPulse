import { ApiResponse } from '../types';

export async function getAll(): Promise<ApiResponse> {
  const response = await fetch('https://tokenpulse-585ae2963e8d.herokuapp.com/getAll');
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data: ApiResponse = await response.json();
  return data;
}
