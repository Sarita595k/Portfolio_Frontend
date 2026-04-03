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
import Hero from '../Components/Header/Hero'
const LandingPage = () => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };
    return (
        <div className="app-wrapper" data-theme={theme}>
            <Hero />
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