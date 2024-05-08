import React from 'react'
import Home from './components/Home Page/Home'
import About from './components/About Page/About'
import Blog from './components/Blog Page/Blog'
import Contacts from './components/Contacts Page/Contacts'
import ErrorPage from './components/Error Page/ErrorPage'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Utils/Navbar'
import Footer from './components/Utils/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App