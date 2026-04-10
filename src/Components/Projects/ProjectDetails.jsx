import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { projectList } from "./Projects";

const ProjectDetails = () => {
    const { id } = useParams();
    const [aiContent, setAiContent] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAiData = async () => {
            // 1. Check local storage first
            const cacheKey = `project_ai_${id}`;
            const cachedData = localStorage.getItem(cacheKey);

            if (cachedData) {
                console.log("Loading from Cache...");
                setAiContent(JSON.parse(cachedData));
                setLoading(false);
                return; // Stop here, don't call the API
            }

            // 2. If no cache, find project details from your local list
            const project = projectList.find(p => p.id === parseInt(id));
            if (!project) return;

            try {
                console.log("Fetching fresh data from AI...");
                const response = await fetch('http://localhost:5000/api/project-analysis', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        projectName: project.title,
                        techStack: project.tech.join(", ")
                    }),
                });

                const data = await response.json();

                // 3. Store the result in localStorage for future visits
                localStorage.setItem(cacheKey, JSON.stringify(data));

                setAiContent(data);
            } catch (error) {
                console.error("AI Fetch Error:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchAiData();
    }, [id]);

    return (
        <div className="w-full min-h-screen bg-[var(--bg-main)]">
            {/* Adding PT-32 (Padding Top) ensures the content 
               starts AFTER your fixed navbar 
            */}
            <div className="max-w-4xl mx-auto pt-32 pb-20 px-6 text-white">

                {loading ? (
                    <div className="flex flex-col items-center justify-center py-20">
                        <div className="w-12 h-12 border-4 border-brand border-t-transparent rounded-full animate-spin mb-4"></div>
                        <p className="text-xl font-medium animate-pulse text-slate-400">
                            AI is analyzing <span className="text-brand font-bold">{id}</span>...
                        </p>
                    </div>
                ) : (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
                        {/* Header */}
                        <h1 className="text-4xl md:text-6xl font-bold mb-10 text-brand">
                            {aiContent?.projectName}
                        </h1>

                        {/* Vision Section */}
                        <section className="mb-16">
                            <h2 className="text-xl font-bold text-brand uppercase tracking-widest mb-4">The Vision</h2>
                            <p className="text-slate-300 text-lg leading-relaxed border-l-4 border-brand pl-6">
                                {aiContent?.whyDesigned}
                            </p>
                        </section>

                        {/* Two-Column Layout for Benefits & AI */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                            <section className="bg-slate-900/50 p-8 rounded-[32px] border border-white/5">
                                <h2 className="text-xl font-bold text-brand mb-4">Core Benefits</h2>
                                <ul className="space-y-3 text-slate-300">
                                    {aiContent?.benefits?.map((benefit, i) => (
                                        <li key={i} className="flex gap-2">
                                            <span className="text-brand">▹</span> {benefit}
                                        </li>
                                    ))}
                                </ul>
                            </section>

                            <section className="bg-brand/5 p-8 rounded-[32px] border border-brand/10">
                                <h2 className="text-xl font-bold text-brand mb-4">AI Integration</h2>
                                <p className="text-slate-300 leading-relaxed">
                                    {aiContent?.aiIntegration}
                                </p>
                            </section>
                        </div>

                        {/* Future Roadmap */}
                        <section className="bg-white/5 p-10 rounded-[40px] border border-white/10">
                            <h2 className="text-2xl font-bold text-white mb-8 text-center uppercase tracking-widest">
                                Future Roadmap
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                {aiContent?.futureRoadmap?.map((feature, i) => (
                                    <div key={i} className="flex flex-col items-center text-center p-4 bg-black/20 rounded-2xl">
                                        <span className="text-brand text-2xl mb-2">0{i + 1}</span>
                                        <p className="text-sm text-slate-400 font-medium">{feature}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectDetails;