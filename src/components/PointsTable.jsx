const PointsTable = ({ driverData, classHeading }) => {
  driverData.sort((aDriver, bDriver) => bDriver.points - aDriver.points);

  return (
    <>
      <h1 className='text-xl font-bold sm:text-3xl text-center mb-1'>
        {classHeading}
      </h1>
      <div className='overflow-x-auto border-b-4 border-primary mb-2'>
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
                <tr>
                  <th key={driver.id}>{driverData.indexOf(driver) + 1}</th>
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
