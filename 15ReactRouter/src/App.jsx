import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Notfound from './pages/Notfound'
import Men from './pages/Men'
import Women from './pages/Women'
import Kids from './pages/Kids'
import Courses from './pages/Courses'
import CoursesDetails from './pages/CoursesDetails'

function App() {
  return (
    <div className='h-screen bg-black text-white flex flex-col'>
   <Navbar/>
   <main className='flex-1'>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/product' element={<Contact/>}/>
    <Route path='/courses' element={<Courses/>}/>
     <Route path='/courses/:id' element={<CoursesDetails/>}/>
     <Route path='/product/men' element={<Men />} />
  <Route path='/product/women' element={<Women />} />
  <Route path='/product/kids' element={<Kids />} />
    <Route path='*' element={<Notfound/>}/>
   </Routes>
   </main>
   <Footer/>
    </div>
  )
}

export default App
