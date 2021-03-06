import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import '../styles/index.css'
 
class Nav extends Component{
    render(){
    return(
        <nav className="w-full z-30 top-0 text-white">
            <div className='text-center bg-gray-600 p-2 h-12 w-full shadow-lg'>
            <Link className='text-gray-200 px-2 hover:text-gray-900' to='/home'>Home</Link>
            <Link className='text-gray-200 px-2 hover:text-gray-900' to='/about'>About</Link>
            <Link className='text-gray-200 px-2 hover:text-gray-900' to='/projects'>Projects</Link>
            <Link className='text-gray-200 px-2 hover:text-gray-900' to='/blog'>Blog</Link>
            <Link className='text-gray-200 px-2 hover:text-gray-900' to='/contact'>Contact Me</Link>
           </div>
        </nav>
        
    )}
}

export default Nav;
