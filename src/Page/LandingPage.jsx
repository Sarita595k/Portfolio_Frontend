import MainContainer from '../Components/Header/MainContainer'
import SubContainer from '../Components/Header/SubContainer'
import SolarSystem from '../Components/Header/SolarSystem'
import About from '../Components/About/About'
import AboutJourney from '../Components/About/AboutJourney'
import Projects from '../Components/Projects/Projects'
import "./LandingPage.css"
import { useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import Skills from '../Components/Skills/Skills'
import Footer from '../Components/Footer/footer'
import Contact from '../Components/Contact/Contact'
import Resume from '../Components/Experience/Resume'
const LandingPage = () => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };
    return (
        <div className="app-wrapper" data-theme={theme}>

            {/* GLOBAL THEME TOGGLE - Always visible */}
            <button className="global-theme-toggle" onClick={toggleTheme}>
                {theme === "light" ? <FaMoon /> : <FaSun />}
            </button>
            <MainContainer />
            <SubContainer />
            <SolarSystem />
            <About />
            <Skills />
            <Resume />
            {/* <AboutJourney /> */}
            <Projects />
            <Contact />
            <Footer />
        </div>
    )
}

export default LandingPage