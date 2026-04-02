import { useState, useEffect, useRef } from "react";
import "./About.css";

// Importing React Icons
import { FaReact, FaNodeJs, FaJava } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";
import { FaRobot } from "react-icons/fa6";

const About = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);


    // Scroll animation
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
        <section id="about-section" ref={sectionRef}>


            <div className={`about-container ${isVisible ? "animate-in" : ""}`}>

                <div className="about-header">
                    <h2 className="section-title">
                        About <span className="highlight-text">Me</span>
                    </h2>
                    <p className="section-subtitle">Bridging logic and creativity to build seamless web experiences.</p>
                </div>

                {/* Modern Bento Box Grid */}
                <div className="bento-grid">

                    {/* Bio Card */}
                    <div className="bento-card bio-card">
                        <h3>Who I Am</h3>
                        <p>
                            I am a Full-Stack Developer with a deep focus on the MERN stack. I thrive on architecting complex backend routing and designing highly responsive, client-facing interfaces.
                        </p>
                        <p>
                            Balancing the fast-paced, multifaceted demands of managing a household has equipped me with exceptional time management, resilience, and a detail-oriented approach to problem-solving. I bring this same relentless dedication and structural organization directly into my codebase, ensuring every application I build is scalable, clean, and efficient.
                        </p>
                    </div>

                    {/* Focus Card */}
                    <div className="bento-card focus-card">
                        <h3>Current Focus</h3>
                        <div className="focus-item">
                            <FaJava className="focus-icon java-color" />
                            <div>
                                <h4>Java DSA</h4>
                                <span>Mastering algorithms</span>
                            </div>
                        </div>
                        <div className="focus-item">
                            <FaRobot className="focus-icon ai-color" />
                            <div>
                                <h4>AI Integration</h4>
                                <span>AI-Integrated Travel Cart</span>
                            </div>
                        </div>
                    </div>

                    {/* Tech Stack Card */}
                    <div className="bento-card stack-card">
                        <h3>Core Technologies</h3>
                        <div className="stack-flex">
                            <div className="tech-item"><SiMongodb className="tech-icon mongo-color" /> <span>MongoDB</span></div>
                            <div className="tech-item"><SiExpress className="tech-icon express-color" /> <span>Express.js</span></div>
                            <div className="tech-item"><FaReact className="tech-icon react-color" /> <span>React</span></div>
                            <div className="tech-item"><FaNodeJs className="tech-icon node-color" /> <span>Node.js</span></div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;