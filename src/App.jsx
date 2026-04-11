import './App.css'
import Navbar from './Components/Navbar/Navbar.jsx'
import LandingPage from './Page/LandingPage'
import { Routes, Route } from 'react-router-dom'
import ProjectDetails from './Components/Projects/ProjectDetails.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Footer from "./Components/Footer/Footer.jsx"


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
      <Contact />
      <Footer />
    </>
  )
}

export default App
