import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Skill from './components/Skill';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';


const App = () => {
  return (
    <Router>
      {/* <nav>
        <ul>
          <li><Link to="#home">Home</Link></li>
          <li><Link to="#about">About</Link></li>
          <li><Link to="#services">Services</Link></li>
          <li><Link to="#contact">Contact</Link></li>
        </ul>
      </nav>
       */}

      <Header />

      <Home />
      <About />
      <Skill />
      <Portfolio />
      <Contact />
      <Footer />
    </Router>
  );
};

export default App;
