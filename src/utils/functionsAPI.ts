import { ApiResponse } from '../types';

export async function getAll(): Promise<ApiResponse> {
  const response = await fetch('https://tokenpulse-f75f55a8ef95.herokuapp.com/getAll');
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data: ApiResponse = await response.json();
  return data;
}
