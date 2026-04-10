import About from '../Components/About/About'
import Projects from '../Components/Projects/Projects'
import "./LandingPage.css"
import Skills from '../Components/Skills/Skills'
import Resume from '../Components/Experience/Resume'
import Hero from '../Components/Header/Hero'
const LandingPage = () => {

    return (
        <div>
            <Hero />
            <About />
            <Skills />
            <Resume />
            <Projects />
        </div>
    )
}

export default LandingPage