import React, { useState, useEffect, useRef } from "react";
import { FaGithub, FaExternalLinkAlt, FaTimes, FaLaptopCode, FaMobileAlt, FaTabletAlt } from "react-icons/fa";

const Projects = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeProject, setActiveProject] = useState(null);
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
        document.body.style.overflow = activeProject ? "hidden" : "auto";
    }, [activeProject]);

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
            color: "#3b82f6"
        },
        {
            id: 2,
            title: "Organic Nutritionist UI",
            category: "Frontend Architecture",
            shortDesc: "A highly responsive, client-facing website designed for an organic nutritionist business.",
            fullDetails: [
                "Designed a pixel-perfect, mobile-first interface prioritizing UX and accessibility.",
                "Utilized modern React Hooks (useState, useEffect) for dynamic state management.",
                "Implemented React Router for seamless single-page application (SPA) navigation.",
                "Optimized asset loading for fast performance and high Lighthouse scores."
            ],
            tech: ["React", "CSS3", "React Router"],
            github: "#",
            live: "#",
            color: "#10b981"
        },
        {
            id: 3,
            title: "Smart Developer Hub",
            category: "AI Integration",
            shortDesc: "An experimental platform integrating modern AI APIs directly into a React frontend.",
            fullDetails: [
                "Successfully integrated third-party AI APIs (like Gemini/OpenAI) via Express.",
                "Engineered dynamic prompt-handling for smart code analysis.",
                "Built an interactive chat interface mimicking real-time streaming responses.",
                "Stored conversation histories in MongoDB for user session continuity."
            ],
            tech: ["MERN Stack", "AI APIs", "Context API"],
            github: "#",
            live: "#",
            color: "#8b5cf6"
        }
    ];

    return (
        <section id="projects-section" ref={sectionRef} className="relative w-full min-h-screen bg-[var(--bg-main)] py-32 px-6 overflow-hidden z-20 transition-colors duration-500">
            <div className={`max-w-7xl mx-auto transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>

                {/* Header */}
                <div className="text-center mb-20">
                    <h2 className="text-5xl md:text-6xl font-protest text-[var(--text-main)] mb-4 transition-colors duration-500">
                        Featured <span className="text-brand">Projects</span>
                    </h2>
                    <p className="text-[#2d4f52] dark:text-slate-400 text-lg md:text-xl font-medium transition-colors duration-500">Showcasing responsive design across all devices.</p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectList.map((project) => (
                        <div
                            key={project.id}
                            className="bg-[var(--card-bg)] backdrop-blur-xl border border-[var(--border-subtle)] rounded-[32px] overflow-hidden flex flex-col hover:border-brand/50 transition-all duration-500 group shadow-xl dark:shadow-2xl"
                        >
                            {/* Device Mockup Wrapper */}
                            <div className="h-64 bg-brand/5 dark:bg-white/5 relative flex justify-center items-end pb-8 border-b border-[var(--border-subtle)] overflow-hidden transition-colors">
                                {/* Desktop */}
                                <div className="w-48 h-32 bg-slate-200 dark:bg-[#1a1a1a] border-2 border-slate-400 dark:border-slate-700 rounded-t-lg z-10 flex items-center justify-center text-brand text-3xl group-hover:scale-110 transition-all duration-500">
                                    <FaLaptopCode />
                                </div>
                                {/* Tablet */}
                                <div className="absolute left-10 bottom-10 w-20 h-28 bg-slate-300 dark:bg-[#222] border-2 border-slate-400 dark:border-slate-700 rounded-lg z-20 flex items-center justify-center text-brand text-2xl shadow-xl group-hover:-translate-x-2 transition-all duration-500">
                                    <FaTabletAlt />
                                </div>
                                {/* Mobile */}
                                <div className="absolute right-12 bottom-8 w-12 h-24 bg-slate-400 dark:bg-[#2a2a2a] border-2 border-slate-400 dark:border-slate-700 rounded-xl z-30 flex items-center justify-center text-brand text-xl shadow-2xl group-hover:translate-x-2 transition-all duration-500">
                                    <FaMobileAlt />
                                </div>
                            </div>

                            {/* Info */}
                            <div className="p-8 flex-grow">
                                <span className="text-xs font-bold uppercase tracking-widest mb-2 block" style={{ color: project.color }}>
                                    {project.category}
                                </span>
                                <h3 className="text-2xl font-bold text-[var(--text-main)] mb-4 transition-colors">{project.title}</h3>
                                <p className="text-[#2d4f52] dark:text-slate-400 mb-6 line-clamp-2 transition-colors">{project.shortDesc}</p>

                                <button
                                    onClick={() => setActiveProject(project)}
                                    className="w-full py-4 border border-brand/20 dark:border-white/10 text-[var(--text-main)] rounded-2xl font-bold hover:bg-brand hover:text-white transition-all duration-300 cursor-pointer"
                                >
                                    View Full Details →
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Project Modal Overlay */}
            {activeProject && (
                <div
                    className="fixed inset-0 z- flex items-center justify-center p-6 bg-slate-900/40 dark:bg-black/90 backdrop-blur-md animate-in fade-in duration-300"
                    onClick={() => setActiveProject(null)}
                >
                    <div
                        className="bg-[var(--bg-main)] border border-[var(--border-subtle)] w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[40px] p-8 md:p-12 relative shadow-[0_0_50px_rgba(52,96,101,0.2)] transition-colors duration-500"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="absolute top-8 right-8 text-[#2d4f52] dark:text-slate-400 hover:text-brand dark:hover:text-white text-3xl transition-colors cursor-pointer"
                            onClick={() => setActiveProject(null)}
                        >
                            <FaTimes />
                        </button>

                        <span className="text-sm font-bold uppercase tracking-widest mb-4 block" style={{ color: activeProject.color }}>
                            {activeProject.category}
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-main)] mb-8 leading-tight transition-colors">{activeProject.title}</h2>

                        {/* Tech Badges */}
                        <div className="flex flex-wrap gap-3 mb-10">
                            {activeProject.tech.map((tech, i) => (
                                <span key={i} className="px-4 py-2 bg-brand/5 dark:bg-white/5 border border-brand/10 dark:border-white/10 rounded-full text-brand dark:text-slate-300 text-sm font-medium">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* Details */}
                        <div className="space-y-6 mb-12">
                            <h3 className="text-xl font-bold text-[var(--text-main)] flex items-center gap-2 transition-colors">
                                <div className="w-2 h-8 bg-brand rounded-full"></div>
                                Key Features & Architecture
                            </h3>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {activeProject.fullDetails.map((detail, i) => (
                                    <li key={i} className="flex gap-4 text-[#2d4f52] dark:text-slate-400 leading-relaxed transition-colors">
                                        <span className="text-brand font-bold">▹</span> {detail}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Links */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-[var(--border-subtle)]">
                            <a href={activeProject.github} className="flex-1 flex items-center justify-center gap-3 py-4 bg-brand/5 dark:bg-white/5 hover:bg-brand/10 dark:hover:bg-white/10 text-brand dark:text-white border border-brand/20 dark:border-white/10 rounded-2xl font-bold transition-all">
                                <FaGithub /> Source Code
                            </a>
                            <a href={activeProject.live} className="flex-1 flex items-center justify-center gap-3 py-4 bg-brand text-white rounded-2xl font-bold transition-all hover:opacity-90 shadow-lg shadow-brand/20">
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