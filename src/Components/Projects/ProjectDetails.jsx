import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { projectList } from "./Project";
import "./Project.css"
import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";

const ProjectDetails = () => {
    const { id } = useParams();
    const [aiContent, setAiContent] = useState(null);
    const [loading, setLoading] = useState(true);

    // Find the static project data (links, images, etc.)
    const project = projectList.find(p => p.id === parseInt(id));

    useEffect(() => {
        const fetchAiData = async () => {
            const cacheKey = `project_ai_${id}`;
            const cachedData = localStorage.getItem(cacheKey);

            if (cachedData) {
                setAiContent(JSON.parse(cachedData));
                setLoading(false);
                return;
            }

            if (!project) return;

            try {
                const response = await fetch(`${import.meta.VITE_URL}/api/project-analysis`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        projectName: project.title,
                        techStack: project.tech.join(", ")
                    }),
                });
                const data = await response.json();
                localStorage.setItem(cacheKey, JSON.stringify(data));
                setAiContent(data);
            } catch (error) {
                console.error("AI Fetch Error:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchAiData();
    }, [id, project]);

    return (
        <div className="w-full min-h-screen bg-[var(--bg-main)] transition-colors duration-300">
            <div className="max-w-7xl mx-auto pt-32 pb-20 px-6">

                {loading ? (
                    <div className="flex flex-col items-center justify-center py-20">
                        <div className="w-12 h-12 border-4 border-brand border-t-transparent rounded-full animate-spin mb-4"></div>
                        <p className="text-xl font-medium animate-pulse text-slate-500 dark:text-slate-400">
                            AI is analyzing the project...
                        </p>
                    </div>
                ) : (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">

                        {/* Title and Links Section */}
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                            <div>
                                <h1 className="text-5xl md:text-7xl font-bold text-brand mb-4">
                                    {aiContent?.projectName}
                                </h1>
                                <div className="flex gap-6 items-center">
                                    <a href={project?.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-brand transition-colors text-lg font-bold">
                                        <FaGithub /> GitHub
                                    </a>
                                    <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-brand transition-colors text-lg font-bold">
                                        <FaLinkedin /> LinkedIn
                                    </a>
                                </div>
                            </div>
                            <a href={project?.live} target="_blank" rel="noreferrer" className="bg-brand text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:scale-105 transition-transform shadow-lg shadow-brand/20">
                                <FaGlobe /> Live Site
                            </a>
                        </div>

                        {/* MULTI-DEVICE PREVIEW SECTION */}
                        <section className="hidden lg:block relative w-full overflow-hidden py-20 mb-20 bg-slate-100/50 dark:bg-white/5 rounded-[50px] border border-slate-200 dark:border-white/10">
                            <div className="device-wrapper relative mx-auto" style={{ height: '700px', maxWidth: '1200px' }}>

                                {/* Laptop Layout */}
                                <div className="laptop-layout-custom absolute left-0 top-0 w-[80%] aspect-video z-10 hidden lg:block">
                                    <iframe
                                        src={project?.live}
                                        title="Laptop Preview"
                                        className="w-full h-full rounded-xl border-[12px] border-slate-800 shadow-2xl"
                                    />
                                </div>

                                {/* Tablet - Middle Layer (Pushed to 38% Width) */}
                                <div className="absolute lg:right-[18%] lg:bottom-[2%] lg:w-[38%] aspect-[3/4] z-20 transition-all duration-500 hover:scale-[1.04] hover:z-50">
                                    <div className="absolute inset-0 bg-slate-900 rounded-[50px] border-[14px] border-slate-900 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.5)] overflow-hidden">
                                        <iframe
                                            src={project?.live}
                                            title="Tablet Preview"
                                            className="w-full h-full bg-white"
                                        />
                                    </div>
                                    {/* Center Home Button for detail */}
                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-slate-800 rounded-full"></div>
                                </div>

                                {/* Mobile - Front Layer (Pushed to 24% Width) */}
                                <div className="absolute lg:right-[0%] lg:bottom-[-5%] lg:w-[24%] aspect-[9/19] z-30 transition-all duration-500 hover:scale-[1.06] hover:z-50">
                                    <div className="absolute inset-0 bg-black rounded-[45px] border-[12px] border-black shadow-[0_45px_90px_-20px_rgba(0,0,0,0.6)] overflow-hidden">
                                        <iframe
                                            src={project?.live}
                                            title="Mobile Preview"
                                            className="w-full h-full bg-white"
                                        />
                                    </div>
                                    {/* Dynamic Island / Speaker Notch detail */}
                                    <div className="absolute top-5 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-3xl flex items-center justify-end px-3">
                                        <div className="w-2 h-2 rounded-full bg-slate-900"></div>
                                    </div>
                                </div>

                            </div>
                        </section>

                        {/* AI Content Section */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                            <div className="lg:col-span-2 space-y-12">
                                <section>
                                    <h2 className="text-2xl font-bold text-brand uppercase tracking-widest mb-4">The Vision</h2>
                                    <p className="text-slate-700 dark:text-slate-300 text-xl leading-relaxed">
                                        {aiContent?.whyDesigned}
                                    </p>
                                </section>

                                <section className="bg-brand/5 p-8 rounded-[32px] border border-brand/10">
                                    <h2 className="text-xl font-bold text-brand mb-4">AI Integration</h2>
                                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                                        {aiContent?.aiIntegration}
                                    </p>
                                </section>
                            </div>

                            <aside className="space-y-8">
                                <section className="bg-white dark:bg-slate-900/50 p-8 rounded-[32px] border border-slate-200 dark:border-white/5 shadow-sm">
                                    <h2 className="text-xl font-bold text-brand mb-4">Key Benefits</h2>
                                    <ul className="space-y-4">
                                        {aiContent?.benefits?.map((b, i) => (
                                            <li key={i} className="flex gap-3 text-slate-600 dark:text-slate-300 font-medium">
                                                <span className="text-brand">✔</span> {b}
                                            </li>
                                        ))}
                                    </ul>
                                </section>

                                <section className="bg-slate-50 dark:bg-black/20 p-8 rounded-[32px] border border-slate-200 dark:border-white/5">
                                    <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Roadmap</h2>
                                    <ul className="space-y-3">
                                        {aiContent?.futureRoadmap?.map((f, i) => (
                                            <li key={i} className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-brand"></div> {f}
                                            </li>
                                        ))}
                                    </ul>
                                </section>
                            </aside>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectDetails;