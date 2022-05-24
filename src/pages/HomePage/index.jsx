import About from './containers/About';
import Contact from './containers/Contact';
import Hero from './containers/Hero';
import Projects from './containers/Projects';
import Services from './containers/Services';

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Services />
      <Contact />
    </>
  );
};

export default HomePage;
