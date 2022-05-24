import { Link } from 'react-router-dom';
import aboutImage from '../../../assets/images/about-img.png';

const About = () => {
  return (
    <div className=' bg-blue-stone-200 flex justify-center'>
      <div className='flex flex-col md:flex-row gap-7 w-[900px] py-[50px] px-[20px] md:py-[100px]'>
        <div className='w-full flex justify-center'>
          <img className='md:w-full w-[60%]' src={aboutImage} alt='/' />
        </div>
        <div>
          <h3>About Us</h3>
          <h2>Who we are</h2>
          <p>
            Donec rutrum congue leo eget malesuada. Sed porttitor lectus nibh.
            Cras ultricies ligula sed magna dictum porta. Vivamus magna justo,
            lacinia eget consectetur sed, convallis at tellus. Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            <br />
            <br />
            Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper
            sit amet ligula. Quisque velit nisi, pretium ut lacinia in,
            elementum id enim. Vivamus suscipit tortor eget felis porttitor
            volutpat. Sed porttitor lectus nibh. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia Curae.
          </p>
          <Link to='/about'>
            <button>Learn More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
