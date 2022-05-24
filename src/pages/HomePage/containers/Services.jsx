import serviceOne from '../../../assets/images/service-one.jpg';
import serviceTwo from '../../../assets/images/service-two.jpg';
import serviceThree from '../../../assets/images/service-three.jpg';
import serviceFour from '../../../assets/images/service-four.jpg';

const Services = () => {
  return (
    <div className='flex justify-center bg-blue-stone-200'>
      <div className='w-section py-[50px] grid grid-cols-1 xsm:grid-cols-2 md:grid-cols-4 px-[20px] gap-5'>
        <div className='bg-white'>
          <div className='w-full h-[200px]'>
            <img
              className='w-full h-full object-cover'
              src={serviceOne}
              alt=''
            />
          </div>
          <div className='p-5'>
            <h3 className='md:text-2xl'>Service One</h3>
            <p>
              Curabitur aliquet quam id dui posuere blandit. Vivamus suscipit
              tortor eget felis porttitor
            </p>
            <button className='w-full px-0'>Learn More</button>
          </div>
        </div>
        <div className='bg-white'>
          <div className='w-full h-[200px]'>
            <img
              className='w-full h-full object-cover'
              src={serviceTwo}
              alt=''
            />
          </div>
          <div className='p-5'>
            <h3 className='md:text-2xl'>Service One</h3>
            <p>
              Curabitur aliquet quam id dui posuere blandit. Vivamus suscipit
              tortor eget felis porttitor
            </p>
            <button className='w-full px-0'>Learn More</button>
          </div>
        </div>
        <div className='bg-white'>
          <div className='w-full h-[200px]'>
            <img
              className='w-full h-full object-cover'
              src={serviceThree}
              alt=''
            />
          </div>
          <div className='p-5'>
            <h3 className='md:text-2xl'>Service One</h3>
            <p>
              Curabitur aliquet quam id dui posuere blandit. Vivamus suscipit
              tortor eget felis porttitor
            </p>
            <button className='w-full px-0'>Learn More</button>
          </div>
        </div>
        <div className='bg-white'>
          <div className='w-full h-[200px]'>
            <img
              className='w-full h-full object-cover'
              src={serviceFour}
              alt=''
            />
          </div>
          <div className='p-5'>
            <h3 className='md:text-2xl'>Service One</h3>
            <p>
              Curabitur aliquet quam id dui posuere blandit. Vivamus suscipit
              tortor eget felis porttitor
            </p>
            <button className='w-full px-0'>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
