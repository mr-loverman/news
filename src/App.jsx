import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { lazy, Suspense, useState } from "react"
import Loading from './Loading/Loading'
import Header from "./Components/Header"
import Menu from "./Components/Menu/Menu"
import React from "react"

const Home = lazy(() => import('./Pages/Home'))
const AllNews = lazy(() => import('./Pages/AllNews'))
const About = lazy(() => import('./Pages/About'))

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const setMenu = () => {
    
    setIsOpen(prevOpen => !prevOpen);
  }

  return (
    <>
      <Router>
        <Suspense fallback={<Loading/>} >
          <Header onMouseEnter={() => setMenu()}/>
          
          <Menu isOpen={isOpen} onMouseLeave={setMenu} />

          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/All-News" element={<AllNews/>} />
            <Route path="/About" element={<About/>} />
          </Routes>
        </Suspense>
      </Router>
    </>
  )
}

export default App
