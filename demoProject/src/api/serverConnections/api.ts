import ApiHelper from './apiHelper';

const API_URL = 'https://api.extrazone.com';

const api = new ApiHelper({
  baseURL: API_URL,
  timeout: 10000,
});

export default api;
