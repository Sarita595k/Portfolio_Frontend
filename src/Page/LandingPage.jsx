import About from '../components/About/About'
import Projects from '../components/Projects/Projects'
import "./LandingPage.css"
import Skills from '../components/Skills/Skills'
import Resume from '../components/Experience/Resume'
import Hero from '../components/Header/Hero'
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