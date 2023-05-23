import { useState, useEffect } from 'react';
import pointsService from '../services/pointsService';

const Points = () => {
  console.log('render');
  const [allData, setAllData] = useState([]);
  const [fwdData, setFwdData] = useState([]);

  useEffect(() => {
    pointsService.getAll().then((data) => setAllData(data));
  }, []);

  const fwd = allData.fwdDrivers;

  console.log(fwd);

  function pointsSorting(a, b) {
    return a.points - b.points;
  }

  console.log(fwd.sort(pointsSorting));

  return (
    <>
      <h1>Points</h1>
      <div>
        <h2>FWD</h2>
        <table>
          <thead>
            <tr>{}</tr>
          </thead>
        </table>
      </div>
    </>
  );
};

export default Points;
