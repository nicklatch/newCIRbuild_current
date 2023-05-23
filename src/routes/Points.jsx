import { useState, useEffect } from 'react';
import pointsService from '../services/pointsService';
import PointsTable from '../components/PointsTable';

const Points = () => {
  console.log('render');
  const [fwdDrivers, setFwdDrivers] = useState([]);
  const [rwdDrivers, setRwdDrivers] = useState([]);
  const [fwdIsLoaded, setFwdIsLoaded] = useState(false);
  const [rwdIsLoaded, setRwdIsLoaded] = useState(false);

  useEffect(() => {
    setFwdIsLoaded(false);
    pointsService.getAllFwd().then((data) => {
      setFwdDrivers(data);
      setFwdIsLoaded(true);
    });
  }, []);

  useEffect(() => {
    setRwdIsLoaded(false);
    pointsService.getAllRwd().then((data) => {
      setRwdDrivers(data);
      setRwdIsLoaded(true);
    });
  }, []);

  return !fwdIsLoaded || !rwdIsLoaded ? (
    <div>Loading...</div>
  ) : (
    <>
      <PointsTable classHeading='Front Wheel Drive' driverData={fwdDrivers} />
      <PointsTable classHeading='Rear Wheel Drive' driverData={rwdDrivers} />
    </>
  );
};

export default Points;
