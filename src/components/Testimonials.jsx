import React from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import './Testimonials.css';

const testimonials = [
    {
        id: 1,
        name: 'Sarah Jenkins',
        role: 'Data Scientist at Google',
        content: 'Upgenix AI transformed my career. The projects were challenging and mirrored real-world scenarios. I landed my dream job within 2 months of graduating!',
        rating: 5
    },
    {
        id: 2,
        name: 'Rahul Verma',
        role: 'ML Engineer at Amazon',
        content: 'The depth of the curriculum is unmatched. From basic Python to complex Neural Networks, the instructors made everything easy to understand.',
        rating: 5
    },
    {
        id: 3,
        name: 'Emily Chen',
        role: 'AI Researcher',
        content: 'The career support team is fantastic. They helped me polish my resume and prepared me thoroughly for technical interviews.',
        rating: 5
    }
];

const Testimonials = () => {
    return (
        <section className="section testimonials-section" id="testimonials">
            <div className="container">
                <h2 className="section-title text-center">Student <span className="text-primary">Success Stories</span></h2>

                <div className="testimonials-grid">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="testimonial-card">
                            <FaQuoteLeft className="quote-icon" />
                            <p className="testimonial-content">"{testimonial.content}"</p>
                            <div className="testimonial-rating">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <FaStar key={i} />
                                ))}
                            </div>
                            <div className="testimonial-author">
                                <div className="author-avatar">{testimonial.name.charAt(0)}</div>
                                <div className="author-info">
                                    <h4>{testimonial.name}</h4>
                                    <span>{testimonial.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
