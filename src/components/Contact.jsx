import React, { useState } from 'react'

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Form validation
    const validateForm = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
        if (!formData.subject) newErrors.subject = 'Subject is required';
        if (!formData.message) newErrors.message = 'Message is required';
        return newErrors;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length === 0) {
            setSubmitted(true);
            // Handle successful form submission, e.g., send data to a server.
        } else {
            setErrors(validationErrors);
            setSubmitted(false);
        }
    };


    //social media active effect
    const [activeLink, setActiveLink] = useState(null);

    const links = [
        { id: 1, href: "https://www.facebook.com/", label: 'Facebook', icon: 'bx bxl-facebook' },
        { id: 2, href: "https://x.com/soumens180", label: 'Twitter', icon: 'bx bxl-twitter' },
        { id: 3, href: "https://www.linkedin.com/in/soumen-sarkar-685a84127", label: 'LinkedIn', icon: 'bx bxl-linkedin' }
    ]

    return (
        <div>
            <section className='bg__lightdark' id='contact'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className='skill-content heading mb-4'>
                                <br></br>
                                <strong className="filltext">Contact Me</strong>
                                <h2 className='text-white'>Get in Touch with Me!</h2>

                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-lg-6 mb-4 mb-lg-0">
                            <h3 className='text-white'>Just Say Hello</h3>
                            <form onSubmit={handleSubmit}>
                                {submitted && <div className="alert alert-success">Form submitted successfully!</div>}

                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input
                                        type="text"
                                        className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                    {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input
                                        type="email"
                                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="subject" className="form-label">Subject</label>
                                    <input
                                        type="text"
                                        className={`form-control ${errors.subject ? 'is-invalid' : ''}`}
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                    />
                                    {errors.subject && <div className="invalid-feedback">{errors.subject}</div>}
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label">Message</label>
                                    <textarea
                                        className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                                        id="message"
                                        name="message"
                                        rows="4"
                                        value={formData.message}
                                        onChange={handleChange}
                                    ></textarea>
                                    {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                                </div>

                                <button type="submit" className="btn btn__theme mt-3">Submit <span className="bx bx-chevron-right"></span></button>
                            </form>
                        </div>

                        <div className="col-lg-6">
                            <h3 className="text-white">Contact Info</h3>
                            <div className="st-contact-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla tincidunt id faucibus sed
                                suscipit feugiat.
                            </div>
                            <div className="st-contact-info-wrap">
                                <div className="st-single-contact-info">
                                    <i className="bx bx-envelope"></i>
                                    <div className="st-single-info-details">
                                        <h4>Email</h4>
                                        <a href="/">soumens180@gmail.com</a>
                                    </div>
                                </div>
                                <div className="st-single-contact-info">
                                    <i className="bx bx-phone"></i>
                                    <div className="st-single-info-details">
                                        <h4>Phone</h4>
                                        <a href="/">+91 891 081 8490</a>
                                    </div>
                                </div>

                                <div className="st-social-info">
                                    <div className="st-social-text">Visite my social profile and get connected</div>
                                    <div className="st-social-link">
                                        {links.map((link) => (
                                            <a
                                                key={link.id}
                                                href={link.href}
                                                target='_blank'
                                                rel="noopener noreferrer"
                                                className={`st-social-btn ${activeLink === link.id ? 'active' : ''}`}
                                                onMouseEnter={() => setActiveLink(link.id)}
                                                onMouseLeave={() => setActiveLink(null)}
                                            >
                                                <span className="st-social-icon"><i className={link.icon}></i></span>
                                                <span className="st-icon-name">{link.label}</span>
                                            </a>
                                        ))}
                                        {/* <a href="/" className="st-social-btn active">
                                        <span className="st-social-icon"><i className='bx bxl-dribbble'></i></span>
                                       
                                    </a>
                                    <a href="/" className="st-social-btn">
                                        <span className="st-social-icon"><i className="bx bxl-behance"></i></span>
                                        <span className="st-icon-name">Behance</span>
                                    </a>
                                    <a href="/" className="st-social-btn">
                                        <span className="st-social-icon"><i className="bx bxl-twitter"></i></span>
                                        <span className="st-icon-name">Twitter</span>
                                    </a>
                                    <a href="/" className="st-social-btn">
                                        <span className="st-social-icon"><i className="bx bxl-linkedin"></i></span>
                                        <span class="st-icon-name">LinkedIn</span>
                                    </a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact