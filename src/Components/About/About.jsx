import { useState, useEffect, useRef } from "react";
import { FaReact, FaNodeJs, FaJava } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";
import { FaRobot } from "react-icons/fa6";

const About = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true);
            },
            { threshold: 0.15 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    return (
        <section
            id="about-section"
            ref={sectionRef}
            className="relative w-full min-h-screen flex justify-center items-start pt-32 pb-24 px-6 md:px-12 overflow-hidden bg-gradient-to-br from-black via-[#0a0a0a] to-[#111] z-20"
            style={{ clipPath: "polygon(100% 0, 100% 100%, 0 91%, 0 0)" }}
        >
            {/* Animated Background */}
            <div
                className="absolute inset-0 opacity-20 pointer-events-none animate-[moveBg_30s_linear_infinite]"
                style={{
                    backgroundImage:
                        "radial-gradient(circle, #346065 10%, transparent 10%)",
                    backgroundSize: "40px 40px",
                    width: "200%",
                    height: "200%",
                }}
            />

            <div
                className={`max-w-7xl w-full z-10 transition-all duration-1000 ease-out ${isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-16"
                    }`}
            >
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-3xl font-protest text-white mb-4">
                        About <span className="text-cyan-400">Me</span>
                    </h2>
                    <p className="text-slate-400 text-lg md:text-xl font-medium">
                        Bridging logic and creativity to build seamless web experiences.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* Bio Card */}
                    <div className="md:col-span-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-10 hover:border-cyan-400 transition-all duration-300 shadow-lg group">
                        <h3 className="text-white text-2xl font-bold mb-4 border-b border-white/10 pb-2 group-hover:border-cyan-400">
                            Who I Am
                        </h3>

                        <p className="text-slate-400 leading-relaxed mb-4">
                            I am a Full-Stack Developer with a deep focus on the MERN stack.
                            I thrive on architecting complex backend routing and designing
                            highly responsive, client-facing interfaces.
                        </p>

                        <p className="text-slate-500 italic leading-relaxed">
                            Balancing the fast-paced, multifaceted demands of managing a
                            household has equipped me with exceptional time management
                            and a detail-oriented approach to problem-solving. I bring
                            this structure into every codebase.
                        </p>
                    </div>

                    {/* Focus Card */}
                    <div className="flex flex-col gap-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 hover:border-cyan-400 transition-all duration-300 shadow-lg">
                        <h3 className="text-white text-2xl font-bold">
                            Current Focus
                        </h3>

                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-white/10 rounded-xl">
                                <FaJava className="text-3xl text-[#f89820]" />
                            </div>
                            <div>
                                <h4 className="text-white font-semibold">
                                    Java DSA
                                </h4>
                                <span className="text-slate-500 text-sm">
                                    Mastering algorithms
                                </span>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-white/10 rounded-xl">
                                <FaRobot className="text-3xl text-purple-400" />
                            </div>
                            <div>
                                <h4 className="text-white font-semibold">
                                    AI Integration
                                </h4>
                                <span className="text-slate-500 text-sm">
                                    GenAI Itinerary
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="md:col-span-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-cyan-400 transition-all duration-300 shadow-lg">
                        <h3 className="text-white text-2xl font-bold mb-8 text-center">
                            Core Technologies
                        </h3>

                        <div className="flex flex-wrap justify-center gap-10">
                            <TechItem Icon={SiMongodb} name="MongoDB" color="text-green-500" />
                            <TechItem Icon={SiExpress} name="Express.js" color="text-white" />
                            <TechItem Icon={FaReact} name="React" color="text-cyan-400" />
                            <TechItem Icon={FaNodeJs} name="Node.js" color="text-green-400" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const TechItem = ({ Icon, name, color }) => (
    <div className="flex flex-col items-center gap-3 group cursor-pointer">
        <Icon
            className={`text-5xl ${color} transition-transform duration-300 group-hover:scale-125 drop-shadow-lg`}
        />
        <span className="text-sm font-bold tracking-widest text-slate-400 uppercase">
            {name}
        </span>
    </div>
);

export default About;