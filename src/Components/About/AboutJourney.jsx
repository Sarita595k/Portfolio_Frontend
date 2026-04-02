import React, { useState, useEffect, useRef } from "react";
import "./AboutJourney.css";

// Import your specific icons from the 'fa' (FontAwesome) library inside react-icons
import { FaPlane, FaServer, FaJava, FaLaptopHouse } from "react-icons/fa";

const AboutJourney = () => {
    const timelineRef = useRef(null);
    const [planePosition, setPlanePosition] = useState(0);

    // Timeline Data - Now using React Icon components
    const journeySteps = [
        {
            id: 1,
            title: "Foundational Growth",
            subtitle: "Time Management & Resilience",
            date: "Ongoing",
            icon: <FaLaptopHouse />,
            desc: "Balancing the fast-paced demands of managing a household with rigorous technical learning. Developed exceptional multitasking, resilience, and problem-solving skills to consistently meet project goals."
        },
        {
            id: 2,
            title: "Full-Stack Developer",
            subtitle: "MERN Stack Architecture",
            date: "Present",
            icon: <FaServer />,
            desc: "Architecting complex backend routing for custom Job Portals using Node.js and Express, alongside designing responsive, client-facing interfaces for organic nutritionist platforms using React."
        },
        {
            id: 3,
            title: "Algorithmic Thinking",
            subtitle: "Java Data Structures & Algorithms",
            date: "Current Focus",
            icon: <FaJava />,
            desc: "Sharpening logic and optimizing code efficiency by actively tackling complex Data Structures and Algorithms in Java, ensuring high performance in technical implementations."
        }
    ];

    // Handle Scroll to move the plane
    useEffect(() => {
        const handleScroll = () => {
            if (!timelineRef.current) return;

            const rect = timelineRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Start moving the plane when the top of the timeline enters the middle of the screen
            const startScroll = rect.top - (windowHeight / 2);
            const totalScroll = rect.height;

            let progress = 0;
            if (startScroll < 0) {
                progress = Math.abs(startScroll) / totalScroll;
            }

            // Keep the plane within the 0% to 100% bounds of the line
            progress = Math.max(0, Math.min(progress, 1));

            setPlanePosition(progress * 100);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section id="journey-section">
            <div className="journey-header">
                <h2 className="section-title">
                    <span className="title-icon"><FaPlane /></span> My <span className="highlight-text">Journey</span>
                </h2>
            </div>

            <div className="timeline-container" ref={timelineRef}>
                {/* The Central Line */}
                <div className="timeline-line"></div>

                {/* The Moving Airplane (Now a React Icon) */}
                <div
                    className="timeline-plane"
                    style={{ top: `${planePosition}%` }}
                >
                    <FaPlane />
                </div>

                {/* Timeline Items */}
                {journeySteps.map((step, index) => (
                    <div
                        key={step.id}
                        className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
                    >
                        <div className="timeline-content">
                            {/* Render the React Icon component directly */}
                            <div className="timeline-icon-box">
                                {step.icon}
                            </div>
                            <div className="timeline-text">
                                <h3 className="designation">{step.title}</h3>
                                <h4 className="company-name">{step.subtitle}</h4>
                                <span className="date-badge">{step.date}</span>
                                <p className="description">{step.desc}</p>
                            </div>
                        </div>
                        <div className="timeline-dot"></div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AboutJourney;