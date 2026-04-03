const SolarSystem = () => {
    return (
        <div id="solarSystemContainer" className="pointer-events-none">
            <div className="w-full h-screen flex justify-center items-center absolute top-0 left-[30%] max-md:left-0">
                <svg
                    viewBox="0 0 1000 1000"
                    preserveAspectRatio="xMidYMid meet"
                    className="w-full h-full opacity-20 dark:opacity-50 transition-opacity duration-500"
                >
                    {/* Orbit 1 */}
                    <g className="origin-[500px_500px] animate-[spin_20s_linear_infinite]">
                        <circle
                            cx="500" cy="500" r="200"
                            className="fill-none stroke-slate-400 dark:stroke-[rgb(159,155,155)] stroke-[1px]"
                        />
                        <circle cx="700" cy="500" r="16" className="fill-[#ffcc00]" />
                    </g>

                    {/* Orbit 2 */}
                    <g className="origin-[500px_500px] animate-[spin_14s_linear_infinite]">
                        <circle
                            cx="500" cy="500" r="300"
                            className="fill-none stroke-slate-400 dark:stroke-[rgb(159,155,155)] stroke-[1px]"
                        />
                        <circle cx="800" cy="500" r="20" className="fill-[#1ca9c2]" />
                    </g>

                    {/* Orbit 3 */}
                    <g className="origin-[500px_500px] animate-[spin_10s_linear_infinite]">
                        <circle
                            cx="500" cy="500" r="400"
                            className="fill-none stroke-slate-400 dark:stroke-[rgb(159,155,155)] stroke-[1px]"
                        />
                        <circle cx="900" cy="500" r="24" className="fill-[#119f04]" />
                    </g>
                </svg>
            </div>

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