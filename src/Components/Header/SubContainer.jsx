import cloud1 from "../../assets/Header/Cloud1.png"
import cloud2 from "../../assets/Header/Cloud2.png"

import "./Header.css"
const SubContainer = () => {
    return (<>
        {/* <div className="container-bg" style={{ backgroundImage: `url(${sliderBg})` }}></div> */}
        <marquee id="cloud1" direction="right" scrollamount="4"><img src={cloud1} alt="" /> </marquee>
        <marquee id="cloud2" direction="right" scrollamount="8"><img src={cloud2} alt="" /></marquee>
    </>
    )
}

export default SubContainer