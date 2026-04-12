import { useState, useEffect, useRef } from "react";
import { FaReact, FaNodeJs, FaJava, FaGraduationCap, FaUsers, FaClock, FaRocket } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";
import { FaRobot } from "react-icons/fa6";

const About = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
            { threshold: 0.15 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
    }, []);

    return (
        <section
            id="about-section"
            ref={sectionRef}
            className="relative w-full min-h-screen flex justify-center items-start pt-16 pb-32 px-6 md:px-12 overflow-hidden bg-[var(--bg-main)] transition-colors duration-500 z-20"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 92%, 0 100%)" }}
        >
            {/* Animated Background Dots */}
            <div className="absolute inset-0 opacity-10 dark:opacity-20 pointer-events-none"
                style={{
                    backgroundImage: "radial-gradient(circle, #346065 10%, transparent 10%)",
                    backgroundSize: "40px 40px",
                }}
            />

            <div className={`max-w-7xl w-full z-10 transition-all duration-1000 ease-out flex flex-col items-center ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}>

                {/* Header */}
                <div className="text-center pt-12 mb-20 w-full">
                    <h2 className="text-5xl md:text-6xl font-protest text-[var(--text-main)] mb-6">
                        About <span className="text-brand">Me</span>
                    </h2>
                    <div className="w-24 h-1 bg-brand mx-auto mb-6 rounded-full"></div>
                </div>

                {/* Main Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">

                    {/* Left Side: Professional Pivot (Bio) */}
                    <div className="md:col-span-2 space-y-8">
                        <div className="bg-[var(--card-bg)] backdrop-blur-xl border border-[var(--border-subtle)] rounded-[40px] p-8 md:p-12 shadow-xl">
                            <h3 className="text-brand text-sm uppercase tracking-widest font-bold mb-4">The Journey</h3>
                            <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-main)] leading-tight mb-8">
                                8 Years of Leadership <br />
                                <span className="text-slate-400 font-light italic text-3xl md:text-4xl">Re-Engineered for Tech</span>
                            </h2>
                            <div className="space-y-6 text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                                <p>
                                    Before entering full-stack development, I spent nearly a decade as an
                                    <strong className="text-[var(--text-main)]"> NGO Coordinator and Teacher</strong>.
                                    Mentoring over 300+ students taught me that great systems require both technical
                                    precision and human empathy.
                                </p>
                                <p className="border-l-4 border-brand pl-6 italic bg-brand/5 py-6 rounded-r-2xl text-slate-700 dark:text-slate-300">
                                    "I don't just write code; I build solutions with the empathy of an educator
                                    and the precision of a coordinator."
                                </p>
                            </div>
                        </div>

                        {/* Quick Stats Row */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                            <StatCard icon={<FaUsers />} title="300+" desc="Students" />
                            <StatCard icon={<FaGraduationCap />} title="8 Yrs" desc="Experience" />
                            <StatCard icon={<FaClock />} title="100%" desc="Commitment" />
                            <StatCard icon={<FaRocket />} title="MERN" desc="Specialization" />
                        </div>
                    </div>

                    {/* Right Side: Focus & Skills */}
                    <div className="space-y-8">
                        <div className="bg-[var(--card-bg)] backdrop-blur-xl border border-[var(--border-subtle)] rounded-[40px] p-10 shadow-xl flex flex-col gap-10">
                            <h3 className="text-[var(--text-main)] text-2xl font-bold">Current Focus</h3>

                            <FocusItem
                                Icon={FaJava}
                                title="Java DSA"
                                sub="Algorithm Mastery"
                                color="text-orange-500"
                            />

                            <FocusItem
                                Icon={FaRobot}
                                title="AI Integration"
                                sub="Gemini API Specialist"
                                color="text-purple-500"
                            />

                            <div className="pt-6 border-t border-[var(--border-subtle)]">
                                <p className="text-slate-500 text-sm font-medium mb-4 uppercase">Actively Building</p>
                                <div className="flex flex-wrap gap-2">
                                    {['E-commerce', 'AI Itinerary', 'NGO Portals'].map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-brand/10 text-brand text-xs font-bold rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Full Width: Tech Stack */}
                    <div className="md:col-span-3 bg-[var(--card-bg)] backdrop-blur-xl border border-[var(--border-subtle)] rounded-[40px] p-12 shadow-xl mt-4">
                        <h3 className="text-brand text-xl font-bold mb-12 text-center uppercase tracking-[0.3em]">
                            Core Stack
                        </h3>
                        <div className="flex flex-wrap justify-center gap-16 md:gap-24">
                            <TechItem Icon={SiMongodb} name="MongoDB" color="text-green-600" />
                            <TechItem Icon={SiExpress} name="Express" color="text-slate-900 dark:text-white" />
                            <TechItem Icon={FaReact} name="React" color="text-cyan-500" />
                            <TechItem Icon={FaNodeJs} name="Node.js" color="text-green-500" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

/* --- Helper Components --- */

const StatCard = ({ icon, title, desc }) => (
    <div className="bg-[var(--card-bg)] border border-[var(--border-subtle)] p-6 rounded-[32px] text-center hover:border-brand transition-all group">
        <div className="text-brand text-xl mb-2 flex justify-center group-hover:scale-110 transition-transform">{icon}</div>
        <h4 className="text-2xl font-bold text-[var(--text-main)]">{title}</h4>
        <p className="text-slate-500 text-xs uppercase tracking-widest">{desc}</p>
    </div>
);

const FocusItem = ({ Icon, title, sub, color }) => (
    <div className="flex items-center gap-6 group">
        <div className={`p-4 bg-white dark:bg-white/5 rounded-2xl shadow-sm group-hover:bg-brand/10 transition-all`}>
            <Icon className={`text-3xl ${color}`} />
        </div>
        <div>
            <h4 className="text-[var(--text-main)] font-bold text-lg">{title}</h4>
            <span className="text-slate-500 text-sm">{sub}</span>
        </div>
    </div>
);

const TechItem = ({ Icon, name, color }) => (
    <div className="flex flex-col items-center gap-4 group">
        <Icon className={`text-6xl ${color} transition-all duration-500 group-hover:scale-125 group-hover:-translate-y-2`} />
        <span className="text-[10px] font-bold tracking-widest text-slate-500 group-hover:text-brand transition-colors uppercase">
            {name}
        </span>
    </div>
);

export default About;