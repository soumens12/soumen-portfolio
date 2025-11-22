import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css'

import Header from "./components/Header";
import Footer from './components/Footer';




const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./components/Contact"));
const Skill = lazy(() => import("./components/Skill"));
const Portfolio = lazy(() => import("./components/Portfolio"));



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

      <Suspense fallback={<div className='text-white d-flex justify-content-center align-items-center'>Loading...</div>}>
        <Home />
        <About />
        <Skill />
        <Portfolio />
        <Contact />
      </Suspense>

      <Footer />
    </Router>
  );
};

export default App;
