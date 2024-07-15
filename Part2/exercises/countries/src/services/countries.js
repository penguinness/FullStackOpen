import axios from 'axios';
const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api';

const getAll = () => {
  const request = axios.get(`${baseUrl}/all`);
  return request.then((response) => response.data);
};

const getCountry = (country) => {
  const request = axios.get(`${baseUrl}/name/${country}`);
  return request.then((response) => response.data);
};

export default { getAll, getCountry };
