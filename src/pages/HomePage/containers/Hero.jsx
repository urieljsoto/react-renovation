import { HomeIcon, PencilIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';


const Hero = () => {
  return (
    <>
      <div className=' home-bg bg-cover bg-center md:bg-center md:bg-fixed'>
        <div className='w-full  md:p-0 h-[45vh] md:h-[80vh] flex flex-col items-center justify-center bg-gray-900/30'>
          <div className='flex flex-col items-center md:w-[70%] xl:w-[40%] p-10 '>
            <h1 className='text-6xl md:text-9xl text-white'>Welcome</h1>
            <p className='text-center text-white'>
              Pellentesque in ipsum id orci porta dapibus. Pellentesque in ipsum
              id orci porta dapibus. Nulla porttitor accumsan tincidunt.
              Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
            </p>
            <Link to='/contact'>
              <button className='mt-4'>Book a Call</button>
            </Link>
          </div>
        </div>
      </div>

      <div className='bg-blue-stone-500 flex justify-center xsm:h-[20vh] xsm:py-0 py-10'>
        <div className='w-section flex xsm:flex-row flex-col'>
          <div className=' md:w-[60%] xsm:w-[40%] flex items-center justify-center h-full border-r-2'>
            <h1 className='text-white md:text-4xl xsm:text-2xl text-4xl text-center font-light xsm:pb-0 pb-8'>
              Lets improve <br />
              your home
            </h1>
          </div>
          <div className='flex w-full justify-center px-0'>
            <div className='flex md:w-[80%] gap-8 md:px-0 px-2'>
              <div className='flex flex-col items-center justify-center gap-3 w-[50%] xsm:w-full'>
                <HomeIcon className='w-12 bg-white text-blue-stone-500 p-2 rounded-full' />
                <p className='text-white font-extralight text-center'>
                  Vivamus suscipit tortor eget
                  <br /> felis porttitor volutpat.
                </p>
              </div>
              <div className='flex flex-col items-center justify-center gap-3 w-[50%] xsm:w-full'>
                <PencilIcon className='w-12 bg-white text-blue-stone-500 p-2 rounded-full' />
                <p className='text-white font-extralight text-center'>
                  Vivamus suscipit tortor eget
                  <br /> felis porttitor volutpat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
