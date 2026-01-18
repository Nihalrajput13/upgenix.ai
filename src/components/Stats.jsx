import React from 'react';
import './Stats.css';
import { FaUserGraduate, FaBriefcase, FaChalkboardTeacher, FaAward } from 'react-icons/fa';

const statsData = [
    {
        id: 1,
        icon: <FaUserGraduate />,
        count: '5,000+',
        label: 'Professionals Trained'
    },
    {
        id: 2,
        icon: <FaBriefcase />,
        count: '95%',
        label: 'Placement Success'
    },
    {
        id: 3,
        icon: <FaChalkboardTeacher />,
        count: '50+',
        label: 'Expert Instructors'
    },
    {
        id: 4,
        icon: <FaAward />,
        count: '20+',
        label: 'Industry Awards'
    }
];

const Stats = () => {
    return (
        <div className="stats-section">
            <div className="container">
                <div className="stats-grid">
                    {statsData.map((stat) => (
                        <div key={stat.id} className="stat-card">
                            <div className="stat-icon">{stat.icon}</div>
                            <div className="stat-info">
                                <h3 className="stat-count">{stat.count}</h3>
                                <p className="stat-label">{stat.label}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Stats;
