import { FaCode, FaBookOpen, FaTerminal, FaCircle } from "react-icons/fa";

const LiveStatus = () => {
    return (
        <section className="py-20 px-6">
            <div className="max-w-5xl mx-auto">
                <div className="bg-[var(--card-bg)] backdrop-blur-xl border border-[var(--border-subtle)] rounded-[40px] p-8 md:p-12 shadow-2xl relative overflow-hidden">

                    {/* Active Status Indicator */}
                    <div className="flex items-center gap-3 mb-10 bg-brand/10 w-fit px-4 py-2 rounded-full border border-brand/20">
                        <FaCircle className="text-brand text-xs animate-pulse" />
                        <span className="text-brand text-xs font-bold uppercase tracking-widest">Active Sprint: April 2026</span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-main)] mb-12 leading-tight">
                        What I'm <span className="text-brand">Building & Learning</span> Right Now
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        {/* Current Project Card */}
                        <div className="bg-white dark:bg-white/5 p-8 rounded-[32px] border border-slate-200 dark:border-white/10 hover:border-brand transition-all">
                            <FaTerminal className="text-3xl text-brand mb-6" />
                            <h4 className="text-lg font-bold text-[var(--text-main)] mb-2">Current Project</h4>
                            <p className="text-slate-500 text-sm leading-relaxed">
                                Optimizing **TravelCart's** AI response time and implementing a PDF itinerary generator using Node.js.
                            </p>
                        </div>

                        {/* DSA Goal Card */}
                        <div className="bg-white dark:bg-white/5 p-8 rounded-[32px] border border-slate-200 dark:border-white/10 hover:border-brand transition-all">
                            <FaCode className="text-3xl text-purple-500 mb-6" />
                            <h4 className="text-lg font-bold text-[var(--text-main)] mb-2">Daily DSA Focus</h4>
                            <p className="text-slate-500 text-sm leading-relaxed">
                                Currently mastering **Dynamic Programming** and Graph Traversal algorithms in Java at Coding Ninjas.
                            </p>
                        </div>

                        {/* Learning Card */}
                        <div className="bg-white dark:bg-white/5 p-8 rounded-[32px] border border-slate-200 dark:border-white/10 hover:border-brand transition-all">
                            <FaBookOpen className="text-3xl text-blue-500 mb-6" />
                            <h4 className="text-lg font-bold text-[var(--text-main)] mb-2">Reading / Reseaching</h4>
                            <p className="text-slate-500 text-sm leading-relaxed">
                                Deep diving into **System Design** patterns and exploring advanced middleware security in Express.js.
                            </p>
                        </div>

                    </div>

                    {/* Bottom Utility Bar */}
                    <div className="mt-12 pt-8 border-t border-[var(--border-subtle)] flex flex-wrap justify-between items-center gap-6">
                        <div className="text-slate-500 text-sm italic">
                            Next Milestone: Deploying AI-Master Internship Project
                        </div>
                        <a
                            href="/Sarita_Resume.pdf"
                            download
                            className="bg-brand text-white px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-transform shadow-lg shadow-brand/20"
                        >
                            Download Full Roadmap (PDF)
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LiveStatus;