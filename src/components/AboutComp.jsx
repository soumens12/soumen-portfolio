import React from 'react';
import aboutImage from '../images/profile-pic.png';
import resume from '../images/SoumenSarkarResume.pdf'

function AboutComp() {

    return (
        <>
            <div className="row align-items-center">
                <div className="col-lg-5">
                    <div className='about-shape'>
                        <img loading='lazy' src={aboutImage} alt="about-image" className='img-fluid' />
                    </div>
                </div>
                <div className="col-lg-6 offset-lg-1">
                    <div className="heading white">
                        <strong className="filltext">About us</strong>
                        <h2>Hi There! I'm Soumen Sarkar</h2>
                        <h4>UI/UX Developer</h4>
                        <p>I am a UI/UX developer with 8 years of experience in front-end development and design, skilled in React, HTML, CSS, Tailwind CSS, jQuery and JavaScript. I bring creative expertise in tools like Photoshop, Illustrator, Adobe XD, and Figma to craft user-friendly, visually appealing interfaces.</p>
                        <a href={resume} className="btn btn__theme" download>Download CV<span className="bx bx-chevron-right"></span></a>
                    </div>

                </div>
            </div>
        </>

    )
}

export default AboutComp