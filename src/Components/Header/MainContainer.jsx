import HeaderGirlImg from "../../assets/Header/wave-image.png";
import planeImg from "../../assets/Header/Plane-With-Line.png";
import HeroIntro from "./HeroIntro";
import SolarSystem from "./SolarSystem";
import SubContainer from "./SubContainer";

const MainContainer = () => {
    return (
        <section id="mainContainer" className="relative w-full min-h-screen bg-black flex flex-col md:flex-row items-center justify-between overflow-hidden pt-20">

            {/* Background elements */}
            <SubContainer />
            <SolarSystem />

            {/* Plane Image - Hidden on mobile for cleaner UI */}
            <div className="absolute top-1/3 left-1/4 w-full h-[50vh] opacity-20 pointer-events-none hidden md:block"
                style={{ backgroundImage: `url(${planeImg})`, backgroundRepeat: 'no-repeat' }}>
            </div>

            {/* Left Content Area */}
            <div className="w-full md:w-3/5 z-30">
                <HeroIntro />
            </div>

            {/* Right Image Area */}
            {/* Right Image Area */}
            <div className="relative w-full md:w-2/5 h-full flex items-end justify-center z-20 px-6 overflow-hidden">
                {/* Added overflow-hidden above ^ */}
                <img
                    className="w-full max-w-lg md:max-w-none md:w-[85%] h-auto md:h-[80%] object-contain drop-shadow-[0_20px_50px_rgba(52,96,101,0.3)] transition-transform duration-700 hover:scale-105"
                    src={HeaderGirlImg}
                    alt="Sarita Portfolio"
                />
            </div>

        </section>
    );
};

export default MainContainer;