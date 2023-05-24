import { Outlet, useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Root = () => {
  const currentLocation = useLocation();

  return (
    <>
      <div className='min-w-screen relative mx-auto flex min-h-screen max-w-7xl flex-col items-stretch justify-between p-6 shadow-inner sm:px-8'>
        <Navbar />
        <main>{currentLocation.pathname === '/' ? <Hero /> : <Outlet />}</main>
        <Footer />
      </div>
    </>
  );
};

export default Root;
