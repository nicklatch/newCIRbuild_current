import { useRef } from 'react';

const MobileMenu = ({ page, setPage }) => {
  const dropdown = useRef();
  const handleClick = () => {
    dropdown.current.classList.toggle('dropdown-open');
    document.activeElement.blur();
  };

  const handleMenuClick = (event) => {
    setPage(event.target.name);
    console.log(event.target.name);
  };
  return (
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
        className='dropdown-content menu justify-center items-center p-none max-w-fit shadow bg-base-100 rounded-box w-52'
      >
        <li>
          <button name='home' onClick={handleMenuClick}>
            Home
          </button>
        </li>
        <li>
          <button name='points' onClick={handleMenuClick}>
            Points
          </button>
        </li>
        <li>
          <button name='rules' onClick={handleMenuClick}>
            Rules
          </button>
        </li>
        <li>
          <button name='about' onClick={handleMenuClick}>
            About
          </button>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
