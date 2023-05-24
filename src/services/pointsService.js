// import axios from 'axios';
import fwdData from '../../fwdDrivers.json';
import rwdData from '../../rwdDrivers.json';
//TODO: create services for fetching points

const getAllFwd = async () => {
  // const response = await axios.get('../../fwdDrivers.json');
  const response = await fwdData;
  return response;
};

const getAllRwd = async () => {
  // const response = await axios.get('../../rwdDrivers.json');
  const response = await rwdData;
  return response;
};

export default { getAllFwd, getAllRwd };
