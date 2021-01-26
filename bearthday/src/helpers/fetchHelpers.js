
export const BASE_URL = 'https://epic.gsfc.nasa.gov/api/natural';

export async function fetchDates() {
  const url = `${BASE_URL}/all`;
  const response = await fetch(url, {});
  const data = await response.json();
  const dates = data.map(d => d.date);
  return dates.slice(0, 365);
}

export async function fetchImages(date) {
  if (!date) return [];
  const url = `${BASE_URL}/date/${date}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.map(d => d.image);
}
