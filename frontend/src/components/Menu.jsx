import { useRef } from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  const dropdown = useRef();
  const handleClick = () => {
    dropdown.current.classList.toggle('dropdown-open');
    document.activeElement.blur();
  };
  return (
    <div className='dropdown-bottom dropdown sm:dropdown-left' ref={dropdown}>
      <label
        tabIndex={0}
        className='btn-primary btn m-1 rounded-md drop-shadow-md'
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
        className='p-none dropdown-content menu w-fit max-w-fit items-center justify-center rounded-md bg-base-100 shadow-custom shadow-black/20'
      >
        <li>
          <Link to={'/'}>
            <button onClick={handleClick} name='home'>
              Home
            </button>
          </Link>
        </li>
        <li>
          <Link to={'/points'}>
            <button onClick={handleClick} name='points'>
              Points
            </button>
          </Link>
        </li>
        <li>
          <Link to={'/rules'}>
            <button onClick={handleClick} name='rules'>
              Rules
            </button>
          </Link>
        </li>
        <li>
          <Link to={'/about'}>
            <button onClick={handleClick} name='about'>
              About
            </button>
          </Link>
        </li>
        <li>
          <Link to={'/schedule'}>
            <button onClick={handleClick} name='schedule'>
              Schedule
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
