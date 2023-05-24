const PointsTable = ({ driverData, classHeading }) => {
  driverData.sort((aDriver, bDriver) => bDriver.points - aDriver.points);
  return (
    <>
      <div className='overflow-x-auto overflow-y-auto mb-2 ring-2 ring-neutral rounded-md text-white sm:max-h-[45rem] max-h-[35rem]'>
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

export default PointsTable;
