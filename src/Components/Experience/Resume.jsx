import React from 'react';
import './Resume.css';

const Resume = () => {
    return (
        <section id="resume-section">
            <div className="resume-container">
                <div className="resume-header">
                    <span className="subtitle">History</span>
                    <h2>My <span className="highlight">Resume</span></h2>
                </div>

                <div className="resume-grid">
                    {/* Column 1: Education */}
                    <div className="resume-column">
                        <h3 className="column-title">Education</h3>
                        <div className="resume-timeline">

                            <div className="resume-item">
                                <div className="date-badge">2017 - 2020</div>
                                <h4>Master of Computer Applications (MCA)</h4>
                                <span className="institution">Government College for Girls</span>
                                <p>Achieved a strong academic record of 77.00%, building a deep foundation in computer science and software principles[cite: 64, 65, 70].</p>
                            </div>

                            <div className="resume-item">
                                <div className="date-badge">2024 - Present</div>
                                <h4>Full Stack Web Development</h4>
                                <span className="institution">Coding Ninjas</span>
                                <p>Intensive training in MERN stack, Data Structures (DSA), and AI integration for modern web applications[cite: 67, 68, 71, 72].</p>
                            </div>

                        </div>
                    </div>

                    {/* Column 2: Experience */}
                    <div className="resume-column">
                        <h3 className="column-title">Experience</h3>
                        <div className="resume-timeline">

                            <div className="resume-item">
                                <div className="date-badge">July 2023 - Aug 2023</div>
                                <h4>Frontend Developer Intern</h4>
                                <span className="institution">Aimaster.live | Hyderabad</span>
                                <p>Optimized 8+ functional UI pages, boosting responsiveness by 30% and reducing development time for new sections by 35%[cite: 12, 13, 14, 15, 16, 17].</p>
                            </div>

                            <div className="resume-item">
                                <div className="date-badge">2024 - 2026</div>
                                <h4>MERN Stack Projects</h4>
                                <span className="institution">Independent Development</span>
                                <p>Architected scalable full-stack apps including an AI-Powered Itinerary Planner, a Job Portal, and E-commerce platforms[cite: 21, 30, 36].</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;