import img1 from '../../../assets/images/img1.jpg';
import img2 from '../../../assets/images/img2.jpg';
import img3 from '../../../assets/images/img3.jpg';
import img4 from '../../../assets/images/img4.jpg';
import img5 from '../../../assets/images/img5.jpg';
import img6 from '../../../assets/images/img6.jpg';

const Projects = () => {
  return (
    <div className='flex justify-center'>
      <div className='py-[50px] px-[20px] md:py-[100px] md:w-section flex flex-col items-center'>
        <h3>Our Work</h3>
        <h2 className='text-center'>We take it a step further </h2>
        <div className='grid grid-cols-2 gap-3 md:grid-cols-3 mt-5'>
          <img className='h-full w-full object-cover' src={img1} alt='/' />
          <img className='h-full w-full object-cover' src={img2} alt='/' />
          <img className='h-full w-full object-cover' src={img3} alt='/' />
          <img className='h-full w-full object-cover' src={img4} alt='/' />
          <img className='h-full w-full object-cover' src={img5} alt='/' />
          <img className='h-full w-full object-cover' src={img6} alt='/' />
        </div>
      </div>
    </div>
  );
};

export default Projects;
