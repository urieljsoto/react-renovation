import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/Services';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/services' element={<ServicesPage />}></Route>
        <Route path='/about' element={<AboutPage />}></Route>
        <Route path='/contact' element={<ContactPage />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
