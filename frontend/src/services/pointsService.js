import axios from 'axios';
const FwdBaseUrl = 'http://localhost:3001/api/fwdDrivers';
const RwdBaseUrl = 'http://localhost:3001/api/rwdDrivers';

const getAllFwd = async () => {
  const response = await axios.get(FwdBaseUrl);
  return response.data;
};

const getAllRwd = async () => {
  const response = await axios.get(RwdBaseUrl);
  return response.data;
};

export default { getAllFwd, getAllRwd };
