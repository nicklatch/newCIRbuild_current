import axios from 'axios';
import fwdData from '../../fwdDrivers.json';
import rwdData from '../../rwdDrivers.json';
//TODO: create services for fetching points

const getAllFwd = async () => {
  // const response = await axios.get('../../fwdDrivers.json');
  const response = fwdData;
  return response;
};

const getAllRwd = async () => {
  // const response = await axios.get('../../rwdDrivers.json');
  const response = rwdData;
  return response.data;
};

export default { getAllFwd, getAllRwd };
