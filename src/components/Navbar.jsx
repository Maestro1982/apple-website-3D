import { navLists } from '../constants';
import { appleImg, bagImg, searchImg } from '../utils';

const Navbar = () => {
  return (
    <header className='w-full py-5 sm:px-10 px-5 flex items-center justify-between'>
      <nav className='flex w-full screen-max-width'>
        <img src={appleImg} alt='Apple' height={18} width={14} />
        <div className='flex flex-1 justify-center max-sm:hidden'>
          {navLists.map((nav) => (
            <div
              key={nav}
              className='px-5 text-sm cursor-pointer text-gray hover:text-white transition-none'
            >
              {nav}
            </div>
          ))}
        </div>

        <div className='flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1'>
          <img src={searchImg} alt='Search' height={18} width={18} />
          <img src={bagImg} alt='Bag' height={18} width={18} />
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
