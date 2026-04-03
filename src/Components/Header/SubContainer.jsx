import cloud1 from "../../assets/Header/Cloud1.png";
import cloud2 from "../../assets/Header/Cloud2.png";

const SubContainer = () => {
    return (
        <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
            {/* Top Cloud */}
            <div className="absolute top-[5vh] w-full animate-[bounce_8s_ease-in-out_infinite]">
                <img src={cloud1} alt="cloud" className="w-64 md:w-96 opacity-40 ml-[10%]" />
            </div>
            {/* Lower Cloud */}
            <div className="absolute top-[25vh] w-full animate-[bounce_12s_ease-in-out_infinite]">
                <img src={cloud2} alt="cloud" className="w-80 md:w-[500px] opacity-20 ml-[60%]" />
            </div>
        </div>
    );
};

export default SubContainer;