import "./Header.css"
import HeaderGirlImg from "../../assets/Header/wave-image.png"
import sliderBg from "../../assets/Header/slider-bg.jpg"
import planeImg from "../../assets/Header/Plane-With-Line.png"
import HeroIntro from "./HeroIntro"
const MainContainer = () => {
    return (
        <>
            <div id="mainContainer" style={{ backgroundImage: `url(${sliderBg})`, backgroundRepeat: "no-repeat" }}>
                <div className="container">
                    <div id="greetings-container"></div>
                    <HeroIntro />
                </div>
                <div className="plane" style={{ backgroundImage: `url(${planeImg})` }}></div>
                <div className="imageContainer">
                    <img className="girlImage" src={HeaderGirlImg} alt="girls-header-image" />
                </div>
            </div>
        </>
    )
}

export default MainContainer