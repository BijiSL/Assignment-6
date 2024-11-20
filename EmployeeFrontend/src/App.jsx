import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './component/Login'
import { Route, Routes } from 'react-router-dom'
import Signup from './component/Signup'
import Navbar from './component/Navbar'
import Main from './component/Main'
import Employee from './component/Employee'
import Addemployee from './component/Addemployee'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>

<Route path='/' element={<Login />} />

<Route path='/signup' element={<Signup />} />
<Route path='/employee' element={<Main  child={<Employee />}/>} />
<Route path='/addemployee' element={<Main child={<Addemployee />} />} />





</Routes>      
    </>
  )
}

export default App
