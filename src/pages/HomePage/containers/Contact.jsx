import ContactForm from "../../../components/ContactForm/ContactForm";

const Contact = () => {
  return (
    <div className='flex justify-center'>
      <div className='w-section flex flex-col md:flex-row-reverse py-[50px] md:py-[100px] px-[20px] gap-8'>
        <div className='w-full'>
          <div className='bg-blue-stone-100 p-5'>
            <h3>Contact Us</h3>
            <h2>Get a free quote</h2>
            <ContactForm/>
          </div>
        </div>
        <div className='w-full'>
          <h3>Contact Info</h3>
          <h2>Get in touch with us</h2>
          <p className='md:w-[80%]'>
            Curabitur aliquet quam id dui posuere blandit. Vivamus suscipit
            tortor eget felis porttitor
          </p>
          <hr className='w-40 bg-blue-stone-500 h-[2px] my-6' />
          <ul className='m-0'>
            <li className='py-2 px-0'>26th St. Ave. Los Angeles, CA</li>
            <li className='py-2 px-0'>Email: office@example.com</li>
            <li className='py-2 px-0'>Phone: +1 888.888.8888</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
