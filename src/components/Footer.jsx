import { Link } from 'react-router-dom';
import logo from '../assets/images/digit-white.png';
import NavMenu from './NavMenu';

const Footer = () => {
  return (
    <>
      <div className='flex justify-center bg-blue-stone-500 text-white'>
        <div className='w-section grid grid-cols-1 md:auto-cols-auto md:grid-flow-col py-[40px] px-[20px] md:py-[100px] md:grid-cols-3 gap-8'>
          <div className='w-full md:col-span-2'>
            <Link to='/'>
              <img className='w-[10rem] ml-[-11px]' src={logo} alt='/' />
            </Link>
            <p className='md:w-[75%]'>
              Curabitur aliquet quam id dui posuere blandit. Vivamus suscipit
              tortor eget felis porttitor
            </p>
          </div>
          <div className='w-full'>
            <h2 className='text-xl border-b-[1px] w-fit'>Menu Links</h2>
            <NavMenu
              flexCol={'flex-col'}
              itemClass={'px-0 py-2 hover:text-white'}
            />
          </div>
          <div>
            <h2 className='text-xl border-b-[1px] w-fit'>Contact Us</h2>
            <ul>
              <li className='font-extralight px-0 py-2 hover:text-white'>
                26th St. Ave. Los Angeles, CA
              </li>
              <li className='font-extralight px-0 py-2 hover:text-white'>+1 888.888.8888</li>
              <li className='font-extralight px-0 py-2 hover:text-white'>office@example.com</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='flex justify-center bg-blue-stone-200'>
        <div className='w-section flex py-6 px-[20px] flex-row '>
          <div className='flex flex-row w-full gap-4 text-[13px] flex-wrap font-light items-center'>
            <span>© Website Name 2022</span>
            <span>Privacy Policy</span>
          </div>
          <div className='w-full flex justify-end'>
            <span className='text-[13px] font-light'>
              Created by <a href='https://urielsoto.com/'>Uriel Soto</a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
