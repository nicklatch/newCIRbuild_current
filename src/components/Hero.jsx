import wiggers from '../assets/action.jpg';

const Hero = () => {
  return (
    <div className='hero bg-base-200 max-w-7xl rounded-md shadow-custom shadow-black/40 ring-2 ring-base-200 text-white min-h-full'>
      <div className='hero-content text-center p-4 '>
        <div className='min-w-full min-h-full'>
          <img
            className='m-auto sm:h-[400px] h-[150px] w-auto rounded-md mb-2 brightness-75'
            src={wiggers}
            alt='race car'
          ></img>
          <h1 className='text-5xl font-bold sm:text-6xl'>
            The Fastest Show On Ice
          </h1>
          <p className='py-6 text-lg sm:text-xl'>
            Well...maybe not. But it's pretty close! Come enjoy free racing
            action every Sunday @ noon! January through March
          </p>
          <button className='btn btn-primary'>Schedule</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
