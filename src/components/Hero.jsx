const Hero = () => {
  return (
    <div className='hero min-h-max bg-base-200 max-w-7xl mx-auto my-8 rounded-md shadow-custom ring-2 ring-base-200 shadow-primary'>
      <div className='hero-content text-center p-4'>
        <div className='min-w-full min-h-full'>
          <h1 className='text-5xl font-bold sm:text-6xl'>Hard-Water Action</h1>
          <p className='py-6 text-xl'>
            Come enjoy free racing action ever Sunday @ noon! January through
            March
          </p>
          <button className='btn btn-primary'>Schedule</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
