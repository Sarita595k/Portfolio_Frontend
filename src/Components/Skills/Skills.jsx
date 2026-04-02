import React, { useState, useEffect, useRef } from "react";
import "./Skills.css";
import {
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaJava, FaGitAlt, FaDatabase
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss, SiPostman, SiFirebase } from "react-icons/si";

const Skills = () => {
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

    const skillCategories = [
        {
            title: "Frontend",
            skills: [
                { name: "React.js", icon: <FaReact />, color: "#61DBFB" },
                { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38B2AC" },
                { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
                { name: "HTML5/CSS3", icon: <FaHtml5 />, color: "#E34F26" }
            ]
        },
        {
            title: "Backend & DB",
            skills: [
                { name: "Node.js", icon: <FaNodeJs />, color: "#68A063" },
                { name: "Express.js", icon: <SiExpress />, color: "var(--express-logo)" },
                { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
                { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28" }
            ]
        },
        {
            title: "Tools & Core",
            skills: [
                { name: "Java (DSA)", icon: <FaJava />, color: "#f89820" },
                { name: "Git/GitHub", icon: <FaGitAlt />, color: "#F05032" },
                { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
                { name: "REST APIs", icon: <FaDatabase />, color: "#346064" }
            ]
        }
    ];

    return (
        <section id="skills-section" ref={sectionRef}>
            <div className={`skills-container ${isVisible ? "animate-in" : ""}`}>
                <div className="skills-header">
                    <h2 className="section-title">Technical <span className="highlight-text">Toolkit</span></h2>
                    <p className="section-subtitle">The technologies I use to bring ideas to life.</p>
                </div>

                <div className="skills-grid">
                    {skillCategories.map((cat, index) => (
                        <div className="skill-category-card" key={index}>
                            <h3>{cat.title}</h3>
                            <div className="skills-list">
                                {cat.skills.map((skill, i) => (
                                    <div className="skill-item" key={i}>
                                        <div className="skill-icon" style={{ color: skill.color }}>
                                            {skill.icon}
                                        </div>
                                        <span>{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;