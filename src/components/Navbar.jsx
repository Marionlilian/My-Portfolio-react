import React from 'react'
import { Link } from 'react-router-dom'
import ThemeSwitcher from './ThemeSwitcher'
import devml from '../assets/images/devml.png'; 

const Navbar=()=>{
  return (
    <div className='flex justify-between items-center p-4 bg-white dark:bg-gray-900 shadow'>
        <div className="text-xl font-bold text-gray-800 dark:text-white">
        <Link to="/"> <h1 className='text-3xl font-extrabold bg-gradient-to-r from-purple-500 via-green-400 to-blue-500 bg-clip-text text-transparent'>DEV MARION L.</h1></Link>
        </div>
        <div className="space-x-4">
        <Link to="/" className="text-gray-700 dark:text-gray-300 hover:underline">Home</Link>
        <Link to="/About" className="text-gray-700 dark:text-gray-300 hover:underline">About</Link>
        <Link to="/Projects" className="text-gray-700 dark:text-gray-300 hover:underline">Projects</Link>
         <Link to="/Contact" className="text-gray-700 dark:text-gray-300 hover:underline">Contact</Link>
        <Link to="/" className="text-gray-700 dark:text-gray-300 hover:underline">Contact</Link>
        </div>
      <ThemeSwitcher/>
    </div>
  )
}

export default Navbar
