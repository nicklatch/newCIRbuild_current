import { Link } from 'react-router-dom';
import Menu from './Menu';

const Navbar = () => {
  return (
    <header className='navbar mb-4 flex items-center justify-between rounded-md bg-base-200 px-6 text-white shadow-custom shadow-primary ring-2 ring-primary'>
      <Link to={'/'}>
        <div className='m-1 hidden font-primary text-7xl sm:block'>
          Chetek Ice Racing
        </div>
        <div className='m-1 font-primary text-9xl sm:hidden'>CIR</div>
      </Link>
      <nav>
        <Menu />
      </nav>
    </header>
  );
};

export default Navbar;
