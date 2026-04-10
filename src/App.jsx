import './App.css'
import Navbar from './Components/Navbar/Navbar'
import LandingPage from './Page/LandingPage'
import { Routes, Route } from 'react-router-dom'
import ProjectDetails from './Components/Projects/ProjectDetails'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'


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
