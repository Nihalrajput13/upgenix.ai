import React from 'react';
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaLightbulb, FaBullseye, FaHandshake } from 'react-icons/fa';
import './About.css';

const About = () => {
    return (
        <section className="section about-section" id="about">
            <div className="container">
                <div className="about-header text-center">
                    <h2 className="section-title">About <span className="text-primary">Upgenix AI</span></h2>
                    <p className="section-subtitle">Empowering the Future of Artificial Intelligence</p>
                </div>

                <div className="about-content">
                    <div className="about-text-col">
                        <p className="about-intro">
                            Upgenix AI Private Limited, founded in 2026, is an ISO 9001:2015 Certified company dedicated to providing premium Training, Upskilling, and Consulting opportunities for AI, Machine Learning, and Data Science professionals.
                        </p>
                        <p>
                            Our mission is to shape the future of the technology industry through innovative training programs aligned with current market demands. With a profound understanding of the dynamic industry landscape, we have emerged as a leading provider of high-quality training solutions. We are committed to empowering professionals and organizations to excel in this ever-evolving field.
                        </p>
                        <p>
                            We focus on training and developing employees and young professionals, employing a diverse range of educational methods including hands-on projects, expert masterclasses, and real-world simulations.
                        </p>

                        <div className="about-image-wrapper">
                            <img src="/src/assets/about-office.png" alt="Upgenix AI Office" />
                        </div>

                        <div className="contact-details-box">
                            <h3>Get in Touch</h3>
                            <ul className="about-contact-list">
                                <li>
                                    <FaMapMarkerAlt />
                                    <span>50/51-4, NS Palya, BTM Layout, 2nd Stage, Bengaluru, Karnataka 560076</span>
                                </li>
                                <li>
                                    <FaPhone />
                                    <span>+91 86608-77518</span>
                                </li>
                                <li>
                                    <FaEnvelope />
                                    <span>info@upgenix.ai</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="about-features-col">
                        <div className="feature-card">
                            <FaBullseye className="feature-icon" />
                            <h3>Our Mission</h3>
                            <p>Empower professionals through cutting-edge, R&D-driven AI training and mentorship.</p>
                        </div>
                        <div className="feature-card">
                            <FaLightbulb className="feature-icon" />
                            <h3>Our Vision</h3>
                            <p>To be the most-preferred global AI training provider with expert-led, accredited programs.</p>
                        </div>
                        <div className="feature-card">
                            <FaHandshake className="feature-icon" />
                            <h3>Our Values</h3>
                            <p>We commit to integrity, innovation, and excellence in every aspect of our training.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
