import React, { useState, useEffect, useRef } from "react";
import "./Projects.css";
import { FaGithub, FaExternalLinkAlt, FaTimes, FaLaptopCode, FaMobileAlt, FaTabletAlt } from "react-icons/fa";

const Projects = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeProject, setActiveProject] = useState(null); // Controls the Modal
    const sectionRef = useRef(null);

    // Scroll animation trigger
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true);
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    // Prevent body scrolling when modal is open
    useEffect(() => {
        if (activeProject) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [activeProject]);

    // Enhanced Project Data
    const projectList = [
        {
            id: 1,
            title: "Job Portal Platform",
            category: "Full-Stack (MERN)",
            shortDesc: "A robust job portal connecting employers and job seekers with custom backend routing.",
            fullDetails: [
                "Architected a custom RESTful API using Node.js and Express.",
                "Implemented secure user authentication and role-based access (Employer vs. Applicant).",
                "Designed a dynamic MongoDB schema for tracking job postings and application statuses.",
                "Built responsive server-side rendered views using EJS."
            ],
            tech: ["Node.js", "Express", "EJS", "MongoDB"],
            github: "#",
            live: "#",
            color: "#3b82f6" // Blue accent
        },
        {
            id: 2,
            title: "Organic Nutritionist UI",
            category: "Frontend Architecture",
            shortDesc: "A highly responsive, client-facing website designed for an organic nutritionist business.",
            fullDetails: [
                "Designed a pixel-perfect, mobile-first interface prioritizing user experience and accessibility.",
                "Utilized modern React Hooks (useState, useEffect) for dynamic state management.",
                "Implemented React Router for seamless single-page application (SPA) navigation.",
                "Optimized asset loading for fast performance and high Lighthouse scores."
            ],
            tech: ["React", "CSS3", "React Router"],
            github: "#",
            live: "#",
            color: "#10b981" // Green accent
        },
        {
            id: 3,
            title: "Smart Developer Hub",
            category: "AI Integration",
            shortDesc: "An experimental platform integrating modern AI APIs directly into a React frontend.",
            fullDetails: [
                "Successfully integrated third-party AI APIs (like Gemini/OpenAI) via a secure Express backend.",
                "Engineered dynamic prompt-handling for smart code analysis and snippet generation.",
                "Built an interactive chat interface mimicking real-time streaming responses.",
                "Stored conversation histories in MongoDB for user session continuity."
            ],
            tech: ["MERN Stack", "AI APIs", "Context API"],
            github: "#",
            live: "#",
            color: "#8b5cf6" // Purple accent
        }
    ];

    return (
        <section id="projects-section" ref={sectionRef}>
            <div className={`projects-container ${isVisible ? "animate-in" : ""}`}>

                <div className="projects-header">
                    <h2 className="section-title">
                        Featured <span className="highlight-text">Projects</span>
                    </h2>
                    <p className="section-subtitle">Showcasing responsive design across all devices.</p>
                </div>

                <div className="projects-grid">
                    {projectList.map((project) => (
                        <div className="project-card" key={project.id} style={{ '--theme-accent': project.color }}>

                            {/* The CSS Device Mockups Graphic */}
                            <div className="device-mockup-wrapper">
                                <div className="mockup desktop">
                                    <div className="screen"><FaLaptopCode /></div>
                                    <div className="base"></div>
                                </div>
                                <div className="mockup tablet">
                                    <div className="screen"><FaTabletAlt /></div>
                                </div>
                                <div className="mockup mobile">
                                    <div className="screen"><FaMobileAlt /></div>
                                </div>
                            </div>

                            {/* Card Content */}
                            <div className="project-info">
                                <span className="project-category" style={{ color: project.color }}>{project.category}</span>
                                <h3>{project.title}</h3>
                                <p>{project.shortDesc}</p>

                                <button className="btn-details" onClick={() => setActiveProject(project)}>
                                    View Full Details →
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal Overlay */}
            {activeProject && (
                <div className="project-modal-overlay" onClick={() => setActiveProject(null)}>
                    <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>

                        <button className="close-modal" onClick={() => setActiveProject(null)}>
                            <FaTimes />
                        </button>

                        <span className="modal-category" style={{ color: activeProject.color }}>
                            {activeProject.category}
                        </span>
                        <h2>{activeProject.title}</h2>

                        <div className="modal-tech">
                            {activeProject.tech.map((item, index) => (
                                <span key={index} className="tech-badge">{item}</span>
                            ))}
                        </div>

                        <div className="modal-details">
                            <h3>Key Features & Architecture:</h3>
                            <ul>
                                {activeProject.fullDetails.map((detail, index) => (
                                    <li key={index}>{detail}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="modal-links">
                            <a href={activeProject.github} target="_blank" rel="noreferrer" className="modal-btn">
                                <FaGithub /> Source Code
                            </a>
                            <a href={activeProject.live} target="_blank" rel="noreferrer" className="modal-btn outline">
                                <FaExternalLinkAlt /> Live Demo
                            </a>
                        </div>

                    </div>
                </div>
            )}
        </section>
    );
};

export default Projects;