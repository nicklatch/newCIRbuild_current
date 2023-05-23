import axios from 'axios';
const baseUrl = 'http://localhost:3000';

//TODO: create services for fetching points

const getAllFwd = async () => {
  const response = await axios.get(`${baseUrl}/fwdDrivers`);
  return response.data;
};

const getAllRwd = async () => {
  const response = await axios.get(`${baseUrl}/rwdDrivers`);
  return response.data;
};

export default { getAllFwd, getAllRwd };
