import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '58496818-3d464c5a7babb498db9fb21b5';

export async function getImagesByQuery(query, page) {
  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      page: page,
      per_page: 15,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });

  return response.data;
}
