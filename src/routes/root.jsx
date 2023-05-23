import { useRef } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

const Root = () => {
  const dropdown = useRef();
  const handleClick = () => {
    dropdown.current.classList.toggle('dropdown-open');
    document.activeElement.blur();
  };

  const currentLocation = useLocation();

  return (
    <>
      <div className='flex flex-col items-stretch justify-between max-w-7xl min-w-screen min-h-screen p-8 sm:py-8 sm:pt-10 sm:pb-2 relative mx-auto bg-gradient-to-b from-base-200 to-neutral'>
        <header className='flex justify-between items-center mb-2'>
          <Link to={'/'}>
            <p className='text-4xl font-bold text-center p-0 indent-0'>
              Chetek Ice Races
            </p>
          </Link>
          <nav>
            <div className='justify-around items-center hidden sm:flex'>
              <Link to={'/'}>
                <button name='home' className='btn mx-1 btn-primary'>
                  Home
                </button>
              </Link>
              <Link to={'/points'}>
                <button className='btn mx-1 btn-primary drop-shadow-sm'>
                  Points
                </button>
              </Link>
              <Link to={'/rules'}>
                <button className='btn mx-1 btn-primary'>Rules</button>
              </Link>
              <Link to={'/about'}>
                <button className='btn mx-1 btn-primary'>About</button>
              </Link>
            </div>
            <div
              className='dropdown dropdown-bottom dropdown-end sm:hidden'
              ref={dropdown}
            >
              <label
                tabIndex={0}
                className='btn btn-primary m-1 rounded-md drop-shadow-md'
                onClick={handleClick}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='32'
                  height='32'
                  viewBox='0 0 512 512'
                >
                  <path d='M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z' />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className='dropdown-content menu justify-center items-center p-none max-w-fit shadow bg-transparent rounded-box w-52'
              >
                <li>
                  <Link to={'/'}>
                    <button name='home'>Home</button>
                  </Link>
                </li>
                <li>
                  <Link to={'/points'}>
                    <button name='points'>Points</button>
                  </Link>
                </li>
                <li>
                  <Link to={'/rules'}>
                    <button name='rules'>Rules</button>
                  </Link>
                </li>
                <li>
                  <Link to={'/about'}>
                    <button name='about'>About</button>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <main>{currentLocation.pathname === '/' ? <Hero /> : <Outlet />}</main>
        <Footer />
      </div>
    </>
  );
};

export default Root;
