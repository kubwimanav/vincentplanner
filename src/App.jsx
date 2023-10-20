import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import Footer from './assets/components/Foot'
import Search from './assets/components/search'
import About from './assets/components/About'
import Foot from './assets/components/Foot'
import Contact from './assets/components/Contact us'
import First from './assets/components/First'
import Tour from './assets/components/Tour'
import Login from './assets/components/Login'
import Single from './assets/components/Single'
import Dashboard from './assets/components/dashboard/Dashboard'
import User from './assets/components/dashboard/User'
import Camps from './assets/components/dashboard/Camps'
import Toure from './assets/components/dashboard/Toure'
import Places from './assets/components/dashboard/Places'
import SignupForm from './assets/components/SignupForm'
import Edit from './assets/components/dashboard/Edit'
import Home from './assets/components/Home'
const Layout = () => {
  return (
    <>
      <header>
        <First />
      </header>
       <Outlet />
      <footer>
        <Foot />
      </footer>
    </>
  );
 };
function App() {
  const [count, setCount] = useState(0);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} /> 
          <Route path="/homepage" element={<Home/>} />
          <Route path="/contact_page" element={<Contact />} />
          <Route path="/tour" element={<Tour />} />
          <Route path="/about" element={<About />} />
          <Route path="/single/:id" element={<Single />} />
          <Route path="/edit" element={<Edit />} />
        
        </Route>
        
        <Route path="/login" element={<Login />} />
       <Route path="/sign" element={<SignupForm />} /> 
          <Route path="/dashboard" element={<Dashboard />}>
           <Route index element={<Outlet/>}/>  
          <Route path="/dashboard/users" element={<User/>} />
          <Route path="place" element={<Places/>} />
          <Route path="c" element={<Camps/>} />
          <Route path="toure" element={<Toure/>} />
          

        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}
export default App;