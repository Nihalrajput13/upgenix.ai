import React from 'react';
import { FaPython, FaBrain, FaRobot, FaDatabase, FaChartLine, FaCode } from 'react-icons/fa';
import './CourseGrid.css';

const courses = [
    {
        id: 1,
        title: 'Data Science & Analytics',
        icon: <FaChartLine />,
        description: 'Master the art of data with Python, SQL, and Tableau. Building predictive models from scratch.',
        projects: '10+ Projects',
        level: 'Beginner to Advanced'
    },
    {
        id: 2,
        title: 'Machine Learning Masterclass',
        icon: <FaBrain />,
        description: 'Deep dive into algorithms: Regression, Classification, Clustering, and Neural Networks.',
        projects: '15+ Projects',
        level: 'Intermediate'
    },
    {
        id: 3,
        title: 'Generative AI & LLMs',
        icon: <FaRobot />,
        description: 'Learn to build and fine-tune Large Language Models. Work with LangChain, OpenAI, and HuggingFace.',
        projects: '5+ Capstones',
        level: 'Advanced'
    },
    {
        id: 4,
        title: 'Computer Vision',
        icon: <FaCode />,
        description: 'Image processing, object detection, and facial recognition using OpenCV and PyTorch.',
        projects: '8+ Projects',
        level: 'Advanced'
    },
    {
        id: 5,
        title: 'Python for AI',
        icon: <FaPython />,
        description: 'Solidify your programming foundation. Libraries: NumPy, Pandas, Matplotlib, Scikit-learn.',
        projects: '20+ Mini Projects',
        level: 'Beginner'
    },
    {
        id: 6,
        title: 'Big Data Engineering',
        icon: <FaDatabase />,
        description: 'Handle massive datasets with Spark, Hadoop, and Cloud Data Warehouses.',
        projects: 'End-to-end Pipeline',
        level: 'Intermediate'
    }
];

const CourseGrid = () => {
    return (
        <section className="section courses-section" id="courses">
            <div className="container">
                <h2 className="section-title text-center">Our <span className="text-primary">Premium Courses</span></h2>
                <p className="section-subtitle text-center">Industry-curated curriculum designed to get you hired.</p>

                <div className="course-grid">
                    {courses.map((course) => (
                        <div key={course.id} className="course-card">
                            <div className="course-icon">{course.icon}</div>
                            <h3 className="course-title">{course.title}</h3>
                            <p className="course-desc">{course.description}</p>
                            <div className="course-meta">
                                <span className="badge">{course.level}</span>
                                <span className="project-count">{course.projects}</span>
                            </div>
                            <button className="btn btn-outline btn-sm">View Syllabus</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CourseGrid;
