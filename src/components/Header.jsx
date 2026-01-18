import React, { useState, useEffect } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaInstagram, FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            {/* Top Bar */}
            <div className="top-bar">
                <div className="container top-bar-content">
                    <div className="contact-info">
                        <span><FaPhone /> +91 86608-77518</span>
                        <span><FaEnvelope /> info@upgenix.ai</span>
                        <span className="address"><FaMapMarkerAlt /> 50/51-4, NS Palya, Bengaluru</span>
                    </div>
                    <div className="social-icons">
                        <a href="#"><FaLinkedin /></a>
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaInstagram /></a>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <div className="main-nav">
                <div className="container nav-container">
                    <div className="logo">
                        <h1>Upgenix<span className="text-primary">AI</span></h1>
                    </div>

                    <nav className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
                        <a href="#home" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
                        <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About Us</a>
                        <a href="#courses" onClick={() => setIsMobileMenuOpen(false)}>Courses</a>
                        <a href="#services" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
                        <a href="#testimonials" onClick={() => setIsMobileMenuOpen(false)}>Testimonials</a>
                        <a href="#contact" className="btn-nav" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</a>
                    </nav>

                    <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
