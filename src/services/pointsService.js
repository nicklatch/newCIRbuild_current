import axios from 'axios';
const baseUrl = 'http://localhost:3000/all';

//TODO: create services for fetching points

const getAll = async () => {
  const response = await axios.get(baseUrl);
  console.log('from services', response.data);
  return response.data;
};

export default { getAll };
