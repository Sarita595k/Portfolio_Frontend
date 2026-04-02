import React, { useState, useEffect, useRef } from "react";
import "./Experience.css";
import { FaGraduationCap, FaBriefcase, FaCode, FaCertificate } from "react-icons/fa";

const Experience = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
            { threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
    }, []);

    return (
        <section id="experience-section" ref={sectionRef}>
            <div className={`exp-container ${isVisible ? "animate-in" : ""}`}>

                <div className="exp-header">
                    <h2 className="section-title">Resume & <span className="highlight-text">Milestones</span></h2>
                    <p className="section-subtitle">A timeline of my professional growth and academic excellence.</p>
                </div>

                <div className="exp-grid">

                    {/* Left Column: Professional Experience */}
                    <div className="exp-column">
                        <h3 className="column-title"><FaBriefcase /> Experience</h3>
                        <div className="timeline">
                            <div className="timeline-item">
                                <div className="time-mark">2024 - Present</div>
                                <h4>Full Stack Web Development Trainee</h4>
                                <p className="location">Coding Ninjas | Gurugram</p>
                                <p className="details">
                                    Mastering the MERN stack and Gen AI integration. Developing high-performance
                                    applications like the AI Itinerary Planner using React, Node.js, and Google Gemini API.
                                </p>
                            </div>
                            <div className="timeline-item">
                                <div className="time-mark">July 2023 - Aug 2023</div>
                                <h4>Frontend Developer Intern</h4>
                                <p className="location">Aimaster.live | Hyderabad</p>
                                <p className="details">
                                    Built 8+ functional UI pages, improving responsiveness by 30%. Created reusable
                                    templates that reduced development time for new sections by 35%.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Education */}
                    <div className="exp-column">
                        <h3 className="column-title"><FaGraduationCap /> Education</h3>
                        <div className="timeline">
                            <div className="timeline-item">
                                <div className="time-mark">2017 - 2020</div>
                                <h4>Master of Computer Applications (MCA)</h4>
                                <p className="location">Government College for Girls</p>
                                <p className="details">
                                    Graduated with a strong academic record of 77.00%. Developed a solid foundation
                                    in software engineering principles and computer science core concepts.
                                </p>
                            </div>
                            <div className="timeline-item">
                                <div className="time-mark">Core Competencies</div>
                                <h4>Technical Foundations</h4>
                                <p className="location">Programming & Architecture</p>
                                <p className="details">
                                    Expertise in JavaScript, Java, and MVC Architecture. Skilled in Data Structures
                                    (DSA) and REST API development for scalable systems.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Experience;