import About from '../Components/About/About'
import Projects from '../Components/Projects/Projects'
import "./LandingPage.css"
import Skills from '../Components/Skills/Skills'
import Resume from '../Components/Experience/Resume'
import Hero from '../Components/Header/Hero'
import Navbar from '../Components/Navbar/Navbar'
const LandingPage = () => {

    return (
        <div>
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Resume />
            <Projects />
        </div>
    )
}

export default LandingPage