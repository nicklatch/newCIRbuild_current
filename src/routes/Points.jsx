import { useState, useEffect } from 'react';
import pointsService from '../services/pointsService';
import PointsTable from '../components/PointsTable';
import Tabs from '../components/Tabs';

const Points = () => {
  const [fwdDrivers, setFwdDrivers] = useState([]);
  const [rwdDrivers, setRwdDrivers] = useState([]);
  const [fwdIsLoaded, setFwdIsLoaded] = useState(false);
  const [rwdIsLoaded, setRwdIsLoaded] = useState(false);
  const [isActive, setIsActive] = useState('fwd');

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
    <div className='flex justify-center items-center text-5xl'>Loading...</div>
  ) : (
    <>
      <Tabs setIsActive={setIsActive} />
      {isActive === 'fwd' ? (
        <PointsTable classHeading='Front Wheel Drive' driverData={fwdDrivers} />
      ) : (
        <PointsTable classHeading='Rear Wheel Drive' driverData={rwdDrivers} />
      )}
    </>
  );
};

export default Points;
