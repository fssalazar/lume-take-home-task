import { Person } from "@/entities/person";

export async function fetchDataset(): Promise<Person[]> {
  try {
    const response = await fetch('http://localhost:3000/dataset.json', {method: 'GET'})
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}