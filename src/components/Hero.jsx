import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="hero-overlay"></div>
            <div className="container hero-content">
                <h1 className="hero-title">
                    Master <span className="text-secondary">Artificial Intelligence</span> <br />
                    with <span className="text-primary">Upgenix AI</span>
                </h1>
                <p className="hero-subtitle">
                    Accelerate your career with industry-leading courses in Data Science, Machine Learning, and Generative AI.
                </p>
                <div className="hero-cta">
                    <a href="#courses" className="btn btn-primary">Explore Courses</a>
                    <a href="#contact" className="btn btn-outline">Start Free Trial</a>
                </div>
            </div>

            {/* Abstract Animated Background Elements could go here */}
            <div className="hero-shapes">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
            </div>
        </section>
    );
};

export default Hero;
