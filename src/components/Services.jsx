import React from 'react';
import { FaUserTie, FaFileAlt, FaComments, FaBuilding } from 'react-icons/fa';
import './Services.css';

const services = [
    {
        id: 1,
        icon: <FaUserTie />,
        title: 'Career Counseling',
        description: 'One-on-one sessions with industry experts to map out your AI career path.'
    },
    {
        id: 2,
        icon: <FaFileAlt />,
        title: 'Resume Review',
        description: 'Optimize your CV and LinkedIn profile to pass ATS scanners and impress recruiters.'
    },
    {
        id: 3,
        icon: <FaComments />,
        title: 'Mock Interviews',
        description: 'Technical and HR mock interviews with real-time feedback to boost your confidence.'
    },
    {
        id: 4,
        icon: <FaBuilding />,
        title: 'Corporate Training',
        description: 'Custom AI workshops and upskilling programs for businesses and teams.'
    }
];

const Services = () => {
    return (
        <section className="section services-section" id="services">
            <div className="container">
                <h2 className="section-title text-center">Beyond <span className="text-secondary">Learning</span></h2>
                <p className="section-subtitle text-center">Comprehensive support to launch your career.</p>

                <div className="services-grid">
                    {services.map((service) => (
                        <div key={service.id} className="service-card">
                            <div className="service-icon-wrapper">
                                {service.icon}
                            </div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-desc">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
