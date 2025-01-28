import './App.css'
import { Route, Routes } from 'react-router-dom'

import { Navbar } from './components/index'
import { Contact, About, Home, Socials, Projects } from './pages'

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/socials' element={<Socials />} />
        <Route path='/projects' element={<Projects />} />
        </Routes>
    </div>
  )
}

export default App
