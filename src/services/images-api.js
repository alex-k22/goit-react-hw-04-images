import axios from 'axios';

export const fetchPhotos = async (query, page) => {
  const API_KEY = '35143802-c7b3e6fa9e518d9fa57872857';
  const BASE_URL = 'https://pixabay.com/api/';
  const BASE_SEARCH_PARAMS = {
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };
  const per_page = 12;
  
  return await axios.get(`${BASE_URL}`, {
    params: {
      ...BASE_SEARCH_PARAMS,
      q: query,
      page: page,
      per_page: per_page,
    },
  });
};
