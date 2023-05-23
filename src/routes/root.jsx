import { useRef } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Root = () => {
  const dropdown = useRef();
  const handleClick = () => {
    dropdown.current.classList.toggle('dropdown-open');
    document.activeElement.blur();
  };

  const currentLocation = useLocation();

  return (
    <>
      <div className='flex flex-col items-stretch justify-between max-w-7xl min-w-screen min-h-screen sm:px-8 shadow-inner p-6 relative mx-auto sm:ring-2 sm:ring-primary sm:shadow-2xl sm:shadow-primary'>
        <Navbar />
        <main>{currentLocation.pathname === '/' ? <Hero /> : <Outlet />}</main>
        <Footer />
      </div>
    </>
  );
};

export default Root;
