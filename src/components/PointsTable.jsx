const PointsTable = ({ driverData, classHeading }) => {
  driverData.sort((aDriver, bDriver) => bDriver.points - aDriver.points);

  return (
    <>
      <div className='overflow-x-auto overflow-y-auto mb-2 ring-2 ring-neutral rounded-md text-white sm:max-h-[45rem] max-h-96'>
        <table className='table w-full'>
          <thead>
            <tr>
              <th>Pos.</th>
              <th>Number</th>
              <th>Name</th>
              <th>Hometown</th>
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
                  <td>{driver.address}</td>
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
