import MobileMenu from './MobileMenu';

export const Navbar = ({ page, setPage }) => {
  return (
    <header className='flex justify-between items-center mb-2'>
      <p className='text-4xl font-bold text-center p-0 indent-0'>
        Chetek Ice Races
      </p>
      <nav>
        <div className='justify-around items-center hidden sm:flex'>
          <button className='btn mx-1 btn-primary'>Home</button>
          <button className='btn mx-1 btn-primary drop-shadow-sm'>
            Points
          </button>
          <button className='btn mx-1 btn-primary'>Rules</button>
          <button className='btn mx-1 btn-primary'>About</button>
        </div>
        {/* mobile */}
        <MobileMenu page={page} setPage={setPage} />
      </nav>
    </header>
  );
};
