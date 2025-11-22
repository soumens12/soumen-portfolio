import React, { useMemo, useState } from 'react';
import ui1 from '../images/ui1.webp';
import ui2 from '../images/ui2.webp';
import ui3 from '../images/ui3.webp';
import ui4 from '../images/ui4.webp';
import ui5 from '../images/ui5.webp';
import ui6 from '../images/ui6.png';
import ui7 from '../images/ui7.png';
import ui8 from '../images/ui8.png';
import ui9 from '../images/ui9.webp';
import ui10 from '../images/ui10.webp';
import ui11 from '../images/ui11.webp';
import ui12 from '../images/ui12.webp';
import ui13 from '../images/ui13.webp';

import uiD1 from '../images/uiDesign1.png';
import uiD2 from '../images/uiDesign2.png';
import uiD3 from '../images/uiDesign3.png';
import uiD4 from '../images/uiDesign4.png';

import reactUi from '../images/reactui.webp';
import graphics from '../images/graphics.webp';

function Portfolio() {
    const projects = [
        { id: 1, name: "Payment Gateway Website", image: ui1, category: "UI Development", url: "https://www.atlpay.com/" },
        { id: 2, name: "ATLPay template Design", image: uiD1, category: "UI Design", url: "https://xd.adobe.com/view/a44aa078-5421-45d8-9bf4-623be0c1f0b1-f119/" },
        { id: 3, name: "Graphics Design", image: graphics, category: "Graphics Design", url: "https://soumenswork.blogspot.com/" },
        { id: 5, name: "Property Booking Website", image: reactUi, category: "React UI", url: "https://dynamic-centaur-04fe5c.netlify.app/" },
        { id: 6, name: "TRIBES Website", image: ui2, category: "UI Development", url: "https://www.tribeww.in/" },
        { id: 7, name: "ATLMoney Website", image: ui3, category: "UI Development", url: "https://www.atlmoney.com/" },
        { id: 8, name: "Digital Banking Service Website", image: ui4, category: "UI Development", url: "https://stableone.co.uk/" },
        { id: 9, name: "Fintech Solution Website", image: ui5, category: "UI Development", url: "https://www.agpaytech.com/" },
        { id: 10, name: "Digital Service Provider", image: ui6, category: "UI Development", url: "https://revitaas.com/" },
        { id: 11, name: "Remmitance Solutions", image: ui7, category: "UI Development", url: "https://remitall.co.uk/" },
        { id: 12, name: "CryptoCurrency Solutions", image: ui8, category: "UI Development", url: "https://soumens12.github.io/bitwari.github.io/" },
        { id: 13, name: "Sports Website", image: ui9, category: "UI Development", url: "https://soumens12.github.io/Iconymo/" },
        { id: 14, name: "Online Pharmacy (Tailwind CSS)", image: ui10, category: "UI Development", url: "https://medibull.com/" },
        { id: 15, name: "KYC Lookup UI template", image: uiD2, category: "UI Design", url: "https://xd.adobe.com/view/50f4f717-b3a2-4a26-82e7-9d3323ca43a0-05a7/" },
        { id: 16, name: "ATL Properties Template", image: uiD3, category: "UI Design", url: "https://xd.adobe.com/view/53754b13-32f7-4a9a-9a25-b02de08878f4-0626/" },
        { id: 17, name: "Pharmacy Template Design", image: uiD4, category: "UI Design", url: "https://xd.adobe.com/view/4df8a9e3-1b72-4ef2-b814-0aafa27ceb34-18ab/" },
        { id: 18, name: "Music Portfolio", image: ui11, category: "UI Development", url: "https://kamransdiary.com/" },
        { id: 19, name: "React Js Dashboard", image: ui12, category: "React UI", url: "https://react1dashboard.netlify.app/" },
        { id: 20, name: "React MUI Dashboard", image: ui13, category: "React UI", url: "https://muidashboardsoumen.netlify.app/" },

    ];

    const [selectedCategory, setSelectedCategory] = useState("All");
    const handleFilterChange = (category) => {
        setSelectedCategory(category);
    };

    const filteredProjects=useMemo(()=>{
        return selectedCategory === "All"
          ? projects
          : projects.filter((project) => project.category === selectedCategory);
    }, [selectedCategory])
    
        
    return (
        <>
            <section id='portfolio' className='portfolio-section bg__dark'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className='skill-content heading'>
                                <br></br>
                                <strong className="filltext">Portfolio</strong>
                                <h2 className='text-white'>Latest Working Project</h2>
                                <p>
                                    Check out some of my design projects, meticulously crafted with love and dedication, each one reflecting the passion and soul I poured into every detail.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">

                            <div className="btn-group mb-3">
                                <button onClick={() => handleFilterChange("All")} className={`btn btn-tab ${selectedCategory === "All" ? "active" : ""}`}>
                                    All
                                </button>
                                <button onClick={() => handleFilterChange("UI Development")} className={`btn btn-tab ${selectedCategory === "UI Development" ? "active" : ""}`}>
                                    UI Development
                                </button>
                                <button onClick={() => handleFilterChange("UI Design")} className={`btn btn-tab ${selectedCategory === "UI Design" ? "active" : ""}`}>
                                    UI Design
                                </button>
                                <button onClick={() => handleFilterChange("React UI")} className={`btn btn-tab ${selectedCategory === "React UI" ? "active" : ""}`}>
                                    React Project
                                </button>
                                <button onClick={() => handleFilterChange("Graphics Design")} className={`btn btn-tab ${selectedCategory === "Graphics Design" ? "active" : ""}`}>
                                    Graphics Design
                                </button>
                            </div>
                            <div className="project-list">
                                {filteredProjects.map(project => (
                                    <div key={project.id} className="card bg-transparent mb-3">
                                        <div className="card-body">
                                            <div className='mb-3 project__image'>
                                                <img src={project.image} loading='lazy' className='img-fluid' alt="" />
                                                <a className='project-details-btn' rel="noopener noreferrer" href={project.url} target="_blank">
                                                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="remixicon "><path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path></svg>
                                                    <span className='visually-hidden'>details btn</span>
                                                </a>
                                            </div>
                                            <h5 className="card-title">{project.name}</h5>
                                            <p className="card-text">{project.category}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Portfolio