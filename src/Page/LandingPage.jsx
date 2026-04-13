import About from '../Components/About/About'
import Projects from '../Components/Projects/Projects'
import "./LandingPage.css"
import Skills from '../Components/Skills/Skills'
import Resume from '../Components/Experience/Resume'
import Hero from '../Components/Header/Hero'
import Navbar from '../Components/Navbar/Navbar'
import GithubSection from '../Components/About/GithubSection'
import AboutJourney from '../Components/About/AboutJourney'
import LiveStatus from '../Components/About/LiveStatus'
import ArchitectureBlueprint from '../Components/About/ArchitectureBlueprint'
const LandingPage = () => {

    return (
        <div>
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Resume />
            <Projects />
            {/* <GithubSection /> */}
            {/* <AboutJourney /> */}
            <LiveStatus />
            {/* <ArchitectureBlueprint /> */}
        </div>
    )
}

export default LandingPage