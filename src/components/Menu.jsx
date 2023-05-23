import { useRef } from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  const dropdown = useRef();
  const handleClick = () => {
    dropdown.current.classList.toggle('dropdown-open');
    document.activeElement.blur();
  };
  return (
    <div className='dropdown dropdown-bottom dropdown-end' ref={dropdown}>
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
        className='dropdown-content menu justify-center items-center p-none max-w-fit shadow bg-base-100 w-fit rounded-md'
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
  );
};

export default Menu;
