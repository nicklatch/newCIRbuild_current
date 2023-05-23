import { Link } from 'react-router-dom';
import Menu from './Menu';

const Navbar = ({ page, setPage }) => {
  return (
    <header className='navbar ring-2 ring-primary shadow-custom shadow-primary rounded-md bg-base-200 flex justify-between px-4 items-center mb-4 text-white'>
      <Link to={'/'}>
        <div className='hidden font-primary text-7xl m-1 lg:block'>
          Chetek Ice Racing
        </div>
        <div className='font-primary text-7xl m-1 lg:hidden'>CIR</div>
      </Link>
      <nav>
        <Menu />
      </nav>
    </header>
  );
};

export default Navbar;
