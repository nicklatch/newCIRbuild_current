import axios from 'axios';

//TODO: create services for fetching points

const getAllFwd = async () => {
  const response = await axios.get('../../fwdDrivers.json');
  return response;
};

const getAllRwd = async () => {
  const response = await axios.get('../../rwdDrivers.json');
  return response;
};

export default { getAllFwd, getAllRwd };
