import PropTypes from 'prop-types';

const PointsTable = ({ driverData }) => {
  driverData.sort((aDriver, bDriver) => bDriver.points - aDriver.points);
  return (
    <>
      <div className='mb-2 max-h-[35rem] overflow-x-auto overflow-y-auto rounded-md text-white ring-2 ring-neutral sm:max-h-[45rem]'>
        <table className='table w-full'>
          <thead>
            <tr key='headerRow'>
              <th>Pos.</th>
              <th>#</th>
              <th>Driver</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {driverData.map((driver) => {
              return (
                <tr key={driver.id}>
                  <th>{driverData.indexOf(driver) + 1}</th>
                  <td>{driver.number}</td>
                  <td>{driver.name}</td>
                  <td>{driver.points}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

PointsTable.propTypes = {
  driverData: PropTypes.array.isRequired,
};

export default PointsTable;
