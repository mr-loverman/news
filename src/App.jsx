import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { lazy, Suspense, useState } from "react"
import Loading from './Loading/Loading'
import Header from "./Components/Header"
import Menu from "./Components/Menu/Menu"
import React from "react"
import "./index.css"

const Home = lazy(() => import('./Pages/Home'))
const AllNews = lazy(() => import('./Pages/AllNews'))
const About = lazy(() => import('./Pages/About'))

function App() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Router>
        <Suspense fallback={<Loading/>}>

          {isOpen && <div className="overlay" />}

          <div className={`container ${isOpen ? 'active' : ''}`}>
            <Header 
            onMouseEnter={() => {
              setIsOpen(true);
              console.log(`isOpen on Enter Test: ${isOpen ? "Fail" : "Pass"}`);
            }}
              />
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/All-News" element={<AllNews/>} />
              <Route path="/About" element={<About/>} />
            </Routes>
          </div>
          <Menu 
          isOpen={isOpen} 
          onMouseLeave={() => {
            setIsOpen(false);
            console.log(`isOpen on Enter Test: ${isOpen ? "Pass" : "Fail"}`);
          }}
          />
        </Suspense>
      </Router>
    </>
  )
}

export default App
