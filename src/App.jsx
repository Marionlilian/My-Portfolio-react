import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Projects from './Projects'
import NotFound from './NotFound'
import Contact from './Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
// import ThemeSwitcher from './components/ThemeSwitcher'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
        {/* <ThemeSwitcher /> */}
      </BrowserRouter>
    </>
  )
}

export default App
