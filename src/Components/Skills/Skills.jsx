import React, { useState, useEffect, useRef } from "react";
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
                { name: "Express.js", icon: <SiExpress />, color: "#ffffff" },
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
                { name: "REST APIs", icon: <FaDatabase />, color: "#346065" }
            ]
        }
    ];

    return (
        <section
            id="skills-section"
            ref={sectionRef}
            className="relative w-full min-h-screen bg-black flex justify-center py-16 px-6 overflow-hidden z-10"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 91%)" }}
        >
            <div className={`max-w-7xl w-full transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>

                {/* Header */}
                <div className="text-center mb-20">
                    <h2 className="text-5xl md:text-6xl font-protest text-white mb-4">
                        Technical <span className="text-brand">Toolkit</span>
                    </h2>
                    <p className="text-slate-400 text-lg md:text-xl font-medium">The technologies I use to bring ideas to life.</p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((cat, index) => (
                        <div
                            key={index}
                            className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[32px] shadow-2xl hover:border-brand/50 transition-all duration-500 group"
                        >
                            <h3 className="text-brand text-2xl font-bold mb-8 text-center border-b border-white/10 pb-4 uppercase tracking-widest group-hover:text-white transition-colors">
                                {cat.title}
                            </h3>

                            <div className="grid grid-cols-2 gap-y-10 gap-x-4">
                                {cat.skills.map((skill, i) => (
                                    <div key={i} className="flex flex-col items-center gap-4 group/item cursor-default">
                                        <div
                                            className="text-5xl transition-transform duration-300 group-hover/item:scale-125 drop-shadow-md"
                                            style={{ color: skill.color }}
                                        >
                                            {skill.icon}
                                        </div>
                                        <span className="text-slate-300 text-sm font-semibold tracking-wide whitespace-nowrap group-hover/item:text-brand transition-colors">
                                            {skill.name}
                                        </span>
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