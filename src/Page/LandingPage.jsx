import About from '../Components/About/About'
import Projects from '../Components/Projects/Projects'
import "./LandingPage.css"
import Skills from '../Components/Skills/Skills'
import Footer from '../Components/Footer/footer'
import Contact from '../Components/Contact/Contact'
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
            <Contact />
            <Footer />
        </div>
    )
}

export default LandingPage