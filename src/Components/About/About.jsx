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
            // Removed clip-path from style to prevent text cutting, used a bottom slant instead
            className="relative w-full min-h-screen flex justify-center items-start pt-48 pb-32 px-6 md:px-12 overflow-hidden bg-black z-20"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 92%, 0 100%)" }}
        >
            {/* Animated Background Dots */}
            <div
                className="absolute inset-0 opacity-20 pointer-events-none animate-[moveBg_30s_linear_infinite]"
                style={{
                    backgroundImage: "radial-gradient(circle, #346065 10%, transparent 10%)",
                    backgroundSize: "40px 40px",
                    width: "200%",
                    height: "200%",
                }}
            />

            <div
                className={`max-w-7xl w-full z-10 transition-all duration-1000 ease-out flex flex-col items-center ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
                    }`}
            >
                {/* Header - Added pt-12 and mb-20 for perfect vertical spacing */}
                <div className="text-center pt-12 mb-20 w-full">
                    <h2 className="text-5xl md:text-6xl font-protest text-white mb-6">
                        About <span className="text-brand">Me</span>
                    </h2>
                    <div className="w-24 h-1 bg-brand mx-auto mb-6 rounded-full"></div>
                    <p className="text-slate-400 text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed">
                        Bridging logic and creativity to build seamless web experiences.
                        I specialize in architecting scalable solutions with the MERN stack.
                    </p>
                </div>

                {/* Bento Grid - Adjusted Gap and Alignment */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">

                    {/* Bio Card */}
                    <div className="md:col-span-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 md:p-12 hover:border-brand/50 transition-all duration-500 shadow-2xl group flex flex-col justify-center">
                        <h3 className="text-white text-2xl font-bold mb-6 inline-block border-b-2 border-brand/20 pb-2 group-hover:border-brand transition-colors w-fit">
                            Who I Am
                        </h3>

                        <p className="text-slate-300 text-lg leading-relaxed mb-6">
                            I am a Full-Stack Developer with a deep focus on the MERN stack.
                            I thrive on architecting complex backend routing and designing
                            highly responsive, client-facing interfaces.
                        </p>

                        <p className="text-slate-500 italic text-lg leading-relaxed border-l-4 border-brand/30 pl-6">
                            Balancing the fast-paced, multifaceted demands of managing a
                            household has equipped me with exceptional resilience and a
                            detail-oriented approach to problem-solving.
                        </p>
                    </div>

                    {/* Focus Card */}
                    <div className="flex flex-col justify-between gap-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 md:p-10 hover:border-brand/50 transition-all duration-500 shadow-2xl">
                        <h3 className="text-white text-2xl font-bold mb-2">
                            Current Focus
                        </h3>

                        <div className="flex items-center gap-5 group">
                            <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-brand/10 transition-all duration-300">
                                <FaJava className="text-4xl text-[#f89820]" />
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-lg">Java DSA</h4>
                                <span className="text-slate-500 text-sm font-medium tracking-wide">Mastering algorithms</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-5 group">
                            <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-brand/10 transition-all duration-300">
                                <FaRobot className="text-4xl text-purple-400" />
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-lg text-nowrap">AI Integration</h4>
                                <span className="text-slate-500 text-sm font-medium tracking-wide">GenAI Itinerary</span>
                            </div>
                        </div>
                    </div>

                    {/* Tech Stack Card */}
                    <div className="md:col-span-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-12 hover:border-brand/50 transition-all duration-500 shadow-2xl">
                        <h3 className="text-brand text-2xl font-bold mb-12 text-center uppercase tracking-widest">
                            Core Technologies
                        </h3>

                        <div className="flex flex-wrap justify-center md:justify-around gap-12">
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
    <div className="flex flex-col items-center gap-4 group cursor-pointer">
        <div className="p-2 rounded-full group-hover:bg-brand/5 transition-all duration-300">
            <Icon
                className={`text-6xl ${color} transition-transform duration-500 group-hover:scale-125 drop-shadow-[0_0_15px_rgba(52,96,101,0.2)]`}
            />
        </div>
        <span className="text-xs font-bold tracking-[0.2em] text-slate-500 group-hover:text-brand transition-colors uppercase">
            {name}
        </span>
    </div>
);

export default About;