import MainContainer from '../Components/Header/MainContainer'
import SubContainer from '../Components/Header/SubContainer'
import SolarSystem from '../Components/Header/SolarSystem'
import ContactForm from '../Components/Contact/ContactForm'
import About from '../Components/About/About'
import AboutJourney from '../Components/About/AboutJourney'
import Projects from '../Components/Projects/Projects'
import "./LandingPage.css"
import { useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import Experience from '../Components/Experience/Experience'
import Skills from '../Components/Skills/Skills'
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
            <Experience />
            {/* <AboutJourney /> */}
            <Projects />
            <ContactForm />
        </div>
    )
}

export default LandingPage