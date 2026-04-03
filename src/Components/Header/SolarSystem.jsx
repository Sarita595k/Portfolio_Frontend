const SolarSystem = () => {
    return (
        <div id="solarSystemContainer" className="pointer-events-none">
            {/* Main Wrapper matching your .solar-system class */}
            <div className="w-full h-screen flex justify-center items-center absolute top-0 left-[30%] max-md:left-0">

                <svg
                    viewBox="0 0 1000 1000"
                    preserveAspectRatio="xMidYMid meet"
                    className="w-full h-full"
                >
                    {/* Orbit 1: Slowest (20s) */}
                    <g className="origin-[500px_500px] animate-[spin_20s_linear_infinite]">
                        <circle
                            cx="500" cy="500" r="200"
                            className="fill-none stroke-[rgb(159,155,155)] stroke-[1px] opacity-50"
                        />
                        <circle cx="700" cy="500" r="16" className="fill-[#ffcc00]" />
                    </g>

                    {/* Orbit 2: Medium (14s) */}
                    <g className="origin-[500px_500px] animate-[spin_14s_linear_infinite]">
                        <circle
                            cx="500" cy="500" r="300"
                            className="fill-none stroke-[rgb(159,155,155)] stroke-[1px] opacity-50"
                        />
                        <circle cx="800" cy="500" r="20" className="fill-[#1ca9c2]" />
                    </g>

                    {/* Orbit 3: Fastest (10s) */}
                    <g className="origin-[500px_500px] animate-[spin_10s_linear_infinite]">
                        <circle
                            cx="500" cy="500" r="400"
                            className="fill-none stroke-[rgb(159,155,155)] stroke-[1px] opacity-50"
                        />
                        <circle cx="900" cy="500" r="24" className="fill-[#119f04]" />
                    </g>
                </svg>

            </div>

            {/* Inline Style for the Spin Animation since Tailwind's default spin is only 1s */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
            `}} />
        </div>
    );
};

export default SolarSystem;