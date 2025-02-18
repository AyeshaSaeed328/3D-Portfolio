import { BrowserRouter } from "react-router-dom"
import {About, Contact, Hero, Navbar, Tech, Works, StarsCanvas, Footer} from "./components"

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  
  return (
    <BrowserRouter>
    <div className='relative z-0 bg-primary'>
    <ToastContainer className="z-[9999]"/>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          
          <Navbar />
          <Hero />
        </div>
        <About />
        <Tech />
        <Works />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
        <Footer/>
        
      </div>
    </BrowserRouter>
  )
}

export default App
