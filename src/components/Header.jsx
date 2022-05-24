import logo from '../assets/images/digit.png';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { useState } from 'react';
import NavMenu from './NavMenu';
import { Link } from 'react-router-dom';

const Header = () => {
  const [nav, setNav] = useState(false);
  const handleMobileNav = () => setNav(!nav);

  return (
    <div className='w-full h-[80px]'>
      <header className='bg-gray-100 flex justify-center h-[80px] z-10  w-screen fixed'>
        <div className='w-section flex justify-between items-center px-3 h-full'>
          <div className='w-20'>
            <Link to='/'>
              <img src={logo} alt='' />
            </Link>
          </div>
          <div>
            <div className='hidden md:flex items-center'>
              <NavMenu />
              <Link to='/contact'>
              <button className='mt-0'>Book a Call</button>
              </Link>
            </div>
            <div className='md:hidden' onClick={handleMobileNav}>
              {!nav ? <MenuIcon className='w-7' /> : <XIcon className='w-7' />}
            </div>
          </div>
        </div>
        <div
          className={`absolute w-full px-8 bg-gray-100 top-[65px] overflow-hidden transition-all duration-500 md:hidden ${
            !nav ? 'h-0' : 'h-[330px]'
          }`}
        >
          <NavMenu
            flexCol={'flex-col'}
            itemClass={'border-b-2 border-gray-300 w-full'}
          />
          <Link to='/contact'>
              <button className='my-5 w-full mt-0'>Book a Call</button>
            </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
