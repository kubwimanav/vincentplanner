import React from 'react'
import Toure from './Toure'
import Header from './Sidebar'
import { Outlet } from 'react-router-dom'
import Sidebar from './Header'


function Dashboard() {
  return (
    <div>
      
      <Sidebar/>
      <Header/>  
       <Outlet/>
              
       
    </div>
  )
}

export default Dashboard