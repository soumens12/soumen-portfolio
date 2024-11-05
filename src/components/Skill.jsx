import React from 'react';
import SkillProgress from './SkillProgress'

function Skill() {
  return (
    <>
        <section className='skill-section bg__lightdark' id='skills'>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className='skill-content heading'>
                            <strong className="filltext">My Skills</strong>
                            <h2 className='text-white'>All the skills that I have in that field of work are mentioned.</h2>
                            <p>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores.
                            </p>
                            <p>
                            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.
                            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <SkillProgress progress={80} color="warning" label="HTML5" />
                        <SkillProgress progress={80} color="warning" label="CSS3" />
                        <SkillProgress progress={80} color="warning" label="Bootstrap" />
                        <SkillProgress progress={60} color="warning" label="Tailwind CSS" />
                        <SkillProgress progress={55} color="warning" label="Javascript" />
                        <SkillProgress progress={50} color="warning" label="jQuery" />
                        <SkillProgress progress={50} color="warning" label="React Js" />
                        <SkillProgress progress={80} color="warning" label="Adobe Photoshop" />
                        <SkillProgress progress={70} color="warning" label="Adobe XD" />
                        <SkillProgress progress={80} color="warning" label="Adobe Illustrator" />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Skill