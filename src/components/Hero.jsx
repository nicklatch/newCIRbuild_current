import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='hero min-h-full max-w-7xl rounded-md bg-base-200 text-white shadow-custom shadow-black/40 ring-2 ring-base-200'>
      <div className='hero-content p-4 text-center '>
        <div className='min-h-full min-w-full'>
          <h1 className='text-7xl font-bold'>The Fastest Show On Ice</h1>
          <p className='py-6 text-lg sm:text-xl'>
            Well...maybe not. But it&apos;s pretty close! Come enjoy free racing
            action every Sunday @ noon! January through March
          </p>
          <Link to={'/schedule'}>
            <button className='btn-primary btn'>Schedule</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
