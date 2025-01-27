import './App.css'
import { Route, Routes } from 'react-router-dom'

import { Navbar } from './components/Navbar'
import { Contact, About, Home, Socials } from './pages/index'

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/socials' element={<Socials />} />
        </Routes>
    </div>
  )
}

export default App
