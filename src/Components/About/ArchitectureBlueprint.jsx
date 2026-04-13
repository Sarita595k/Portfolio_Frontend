import { FaServer, FaDatabase, FaMobileAlt, FaBrain } from "react-icons/fa";

const ArchitectureBlueprint = () => {
    return (
        <section className="py-24 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Header Area */}
                <div className="mb-16 text-center lg:text-left">
                    <h2 className="text-brand uppercase tracking-[0.3em] font-bold text-sm mb-4">System Design</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-[var(--text-main)] transition-colors">
                        The AI Travel Cart <span className="text-brand/60">Blueprint</span>
                    </h3>
                    <p className="text-slate-500 mt-4 max-w-2xl">
                        A deep dive into the technical architecture of my MERN + AI integration.
                        Focused on low-latency data flow and structured LLM responses.
                    </p>
                </div>

                {/* The Blueprint Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative">

                    {/* Step 1: Frontend */}
                    <BlueprintCard
                        icon={<FaMobileAlt />}
                        title="Client Layer"
                        tech="React & Tailwind"
                        details="Handles state management and captures user preferences for AI processing."
                    />

                    {/* Connecting Line (Desktop Only) */}
                    <div className="hidden lg:flex items-center justify-center text-brand/30 text-2xl">→</div>

                    {/* Step 2: AI Orchestrator */}
                    <BlueprintCard
                        icon={<FaBrain />}
                        title="AI Logic"
                        tech="Gemini API & Prompt Eng."
                        details="Custom System Prompts ensure the AI returns strictly structured JSON itineraries."
                        highlight={true}
                    />

                    {/* Step 3: Backend */}
                    <BlueprintCard
                        icon={<FaServer />}
                        title="API Layer"
                        tech="Node.js & Express"
                        details="Processes AI output, validates data schemas, and handles PDF generation."
                    />

                    {/* Step 4: Storage */}
                    <BlueprintCard
                        icon={<FaDatabase />}
                        title="Persistence"
                        tech="MongoDB Atlas"
                        details="Optimized document storage for saving user itineraries and history."
                    />
                </div>

                {/* Technical Footnote */}
                <div className="mt-12 p-8 bg-brand/5 border-l-4 border-brand rounded-r-2xl">
                    <h4 className="text-[var(--text-main)] font-bold mb-2">Key Engineering Decision:</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                        To solve the "Hallucination" problem in LLMs, I implemented a **Validation Middleware** in Express.
                        If the AI response doesn't match the required JSON schema for the Travel Cart, the system
                        automatically triggers a retry logic, ensuring 100% data reliability for the user.
                    </p>
                </div>
            </div>
        </section>
    );
};

const BlueprintCard = ({ icon, title, tech, details, highlight }) => (
    <div className={`p-8 rounded-[32px] border transition-all duration-500 hover:-translate-y-2 ${highlight
        ? 'bg-brand text-white border-brand shadow-xl shadow-brand/20'
        : 'bg-[var(--card-bg)] border-[var(--border-subtle)] text-[var(--text-main)]'
        }`}>
        <div className={`text-3xl mb-6 ${highlight ? 'text-white' : 'text-brand'}`}>{icon}</div>
        <h4 className="font-bold text-xl mb-1">{title}</h4>
        <p className={`text-xs font-mono mb-4 uppercase tracking-wider ${highlight ? 'text-white/80' : 'text-slate-500'}`}>
            {tech}
        </p>
        <p className={`text-sm leading-relaxed ${highlight ? 'text-white/90' : 'text-slate-500'}`}>
            {details}
        </p>
    </div>
);

export default ArchitectureBlueprint;