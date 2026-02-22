import "./Header.css"
const SolarSystem = () => {
    return (
        <div id="solarSystemContainer">
            <div className="solar-system">
                <svg viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid meet">

                    <g className="orbit orbit1">
                        <circle cx="500" cy="500" r="200" className="orbit-path" />
                        <circle cx="700" cy="500" r="16" className="planet1" />
                    </g>


                    <g className="orbit orbit2">
                        <circle cx="500" cy="500" r="300" className="orbit-path" />
                        <circle cx="800" cy="500" r="20" className="planet2" />
                    </g>


                    <g className="orbit orbit3">
                        <circle cx="500" cy="500" r="400" className="orbit-path" />
                        <circle cx="900" cy="500" r="24" className="planet3" />
                    </g>
                </svg>
            </div>
        </div>
    )
}

export default SolarSystem