import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="hero flex flex-col place-self-center rounded-md bg-base-200 text-white shadow-custom shadow-black/40 ring-2 ring-base-200">
      <h1 className="text-7xl font-bold">The Fastest Show On Ice</h1>
      <p className="py-6 text-lg sm:text-xl">
        Well...maybe not. But it&apos;s pretty close! Come enjoy free racing
        action every Sunday @ noon! January through March
      </p>
      <Link to={'/schedule'}>
        <button className="btn-primary btn">Schedule</button>
      </Link>
    </div>
  );
};

export default Hero;
