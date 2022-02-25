import { ClientType } from 'types';

const API_BASE_URL = 'http://localhost:3001/api';

export async function fetchClientIndex(): Promise<ClientType[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/client/index`);
    return (await response.json()) as ClientType[];
  } catch (e) {
    console.error(e);
    return [];
  }
}
