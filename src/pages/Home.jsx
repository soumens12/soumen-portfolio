import React, { useEffect } from 'react';
import ProfilePic from '../images/profile-pic.png';
import AOS from 'aos';
import '../../node_modules/aos/dist/aos.css'
import { Link } from 'react-scroll';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Specify animation duration in milliseconds
      once: true,     // Animations trigger only once
    });
  }, []);
  return (
    <>
      <section className='hero' id='home'>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="st-hero-text">
                        <h3 className='hero__subtitle' data-aos="fade-up">Hello, I’m</h3>
                        <h1 className='hero__title' data-aos="fade-up">Soumen <br/>Sarkar
                        </h1>
                        <h2 className='hero__designation' data-aos="fade-up">UI Developer/ Designer</h2>
                        <div className="hero__btn">
                        <Link className="btn btn__theme" to="contact" smooth={true} duration={500} spy={true} activeClass="active" offset={-70}>Hire me <span className='bx bx-chevron-right'></span></Link>
                            
                        </div>
                    </div>
                </div>
                <div className="col-lg-6" data-aos="fade-left">
                    <img src={ProfilePic} className='img-fluid' alt="" />
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Home
