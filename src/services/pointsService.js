import axios from 'axios';

//TODO: create services for fetching points

const getAllFwd = async () => {
  const response = await axios.get('../../public/fwdDrivers.json');
  return response.data;
};

const getAllRwd = async () => {
  const response = await axios.get('../../public/rwdDrivers.json');
  return response.data;
};

export default { getAllFwd, getAllRwd };
