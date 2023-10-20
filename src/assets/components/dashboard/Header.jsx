import React from 'react'
import {CiDark} from 'react-icons/ci'
import {LuSettings } from 'react-icons/lu'
import {FiSun} from 'react-icons/fi'
import './Header.css'
function Header() {
  return (
    
        <div className='sidebar'>
            <p>
                hello, Vincent
            </p>
            <div className=' sidebar-icon'>
                <LuSettings className='sidebar-icons1'/>
                <div className=' sidebar-icon1'>
                <FiSun className='sidebar-icons'/> 
                    <p>Dark Mode</p>
                    <CiDark className='sidebar-icons1'/>
                </div>
            </div> 
        </div>

    
  )
}

export default Header