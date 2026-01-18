import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer" id="contact">
            <div className="container">
                <div className="footer-grid">
                    {/* Brand Column */}
                    <div className="footer-col">
                        <h2 className="footer-logo">Upgenix<span className="text-primary">AI</span></h2>
                        <p className="footer-desc">
                            Empowering the next generation of AI leaders through industry-aligned education, mentorship, and placement support.
                        </p>
                        <div className="footer-social">
                            <a href="#"><FaLinkedin /></a>
                            <a href="#"><FaTwitter /></a>
                            <a href="#"><FaInstagram /></a>
                            <a href="#"><FaFacebook /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-col">
                        <h3>Quick Links</h3>
                        <ul className="footer-links">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#courses">All Courses</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#testimonials">Testimonials</a></li>
                        </ul>
                    </div>

                    {/* Courses */}
                    <div className="footer-col">
                        <h3>Popular Courses</h3>
                        <ul className="footer-links">
                            <li><a href="#">Data Science Master</a></li>
                            <li><a href="#">Machine Learning</a></li>
                            <li><a href="#">Generative AI</a></li>
                            <li><a href="#">Deep Learning</a></li>
                            <li><a href="#">Computer Vision</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="footer-col">
                        <h3>Contact Us</h3>
                        <ul className="footer-contact">
                            <li>
                                <FaPhone />
                                <span>+91 86608-77518</span>
                            </li>
                            <li>
                                <FaEnvelope />
                                <span>info@upgenix.ai</span>
                            </li>
                            <li>
                                <FaMapMarkerAlt />
                                <span>50/51-4, NS Palya, BTM Layout,<br />2nd Stage, Bengaluru, Karnataka</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Upgenix AI Private Limited. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
