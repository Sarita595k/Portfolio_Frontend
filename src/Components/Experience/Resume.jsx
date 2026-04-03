import React from 'react';

const Resume = () => {
    return (
        <section id="resume-section" className="relative py-16 bg-black px-6 overflow-hidden">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-brand uppercase tracking-[3px] font-bold text-sm">History</span>
                    <h2 className="text-5xl md:text-6xl font-protest text-white mt-4">
                        My <span className="text-brand">Resume</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/* Column 1: Education */}
                    <div className="space-y-10">
                        <h3 className="text-3xl font-bold text-white pl-5 border-l-4 border-brand">Education</h3>

                        <div className="relative border-l border-white/10 ml-4 pl-10 space-y-12">
                            <ResumeItem
                                date="2017 - 2020"
                                title="Master of Computer Applications (MCA)"
                                institution="Government College for Girls"
                                description="Achieved a strong academic record of 77.00%, building a deep foundation in computer science and software principles."
                            />
                            <ResumeItem
                                date="2024 - Present"
                                title="Full Stack Web Development"
                                institution="Coding Ninjas"
                                description="Intensive training in MERN stack, Data Structures (DSA), and AI integration for modern web applications."
                            />
                        </div>
                    </div>

                    {/* Column 2: Experience */}
                    <div className="space-y-10">
                        <h3 className="text-3xl font-bold text-white pl-5 border-l-4 border-brand">Experience</h3>

                        <div className="relative border-l border-white/10 ml-4 pl-10 space-y-12">
                            <ResumeItem
                                date="July 2023 - Aug 2023"
                                title="Frontend Developer Intern"
                                institution="Aimaster.live | Hyderabad"
                                description="Optimized 8+ functional UI pages, boosting responsiveness by 30% and reducing development time for new sections by 35%."
                            />
                            <ResumeItem
                                date="2024 - 2026"
                                title="MERN Stack Projects"
                                institution="Independent Development"
                                description="Architected scalable full-stack apps including an AI-Powered Itinerary Planner, a Job Portal, and E-commerce platforms."
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

// Sub-component for individual Timeline Items
const ResumeItem = ({ date, title, institution, description }) => (
    <div className="relative bg-white/5 backdrop-blur-xl p-8 rounded-[24px] border border-white/5 hover:border-brand/50 transition-all duration-300 group shadow-xl">

        {/* The Timeline Dot */}
        <div className="absolute -left-[51px] top-10 w-5 h-5 bg-black border-4 border-brand rounded-full z-10 group-hover:scale-125 transition-transform duration-300 shadow-[0_0_10px_rgba(52,96,101,0.5)]"></div>

        <span className="text-brand font-bold text-lg mb-3 block uppercase tracking-wide">
            {date}
        </span>

        <h4 className="text-2xl font-bold text-white mb-2 leading-tight">
            {title}
        </h4>

        <span className="text-slate-400 italic text-base block mb-4">
            {institution}
        </span>

        <p className="text-slate-400 text-lg leading-relaxed">
            {description}
        </p>
    </div>
);

export default Resume;