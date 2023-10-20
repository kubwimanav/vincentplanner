import {React,  useState } from 'react';
import {FaFacebookF ,FaGoogle} from 'react-icons/fa'
import {FcGoogle } from 'react-icons/fc'
import login from '../images/carton.png'
import './Login.css'
import { Link } from 'react-router-dom'
import SignupForm from './SignupForm';
 function Login({Places,onClose,onSave,openForm}) {
  
  const[name,setName]=useState('')
  const[email,Email]=useState('')
  const [isEditModalOpen,setEditModalOpen]=useState(false);

  const handleEditclick= () => {
 setEditModalOpen((previsEditModal) =>!previsEditModal)
  };
  const [open, setOpen] = useState(false);
  function openForm() {
    setOpen((prevOpen) => !prevOpen);
  }
  return (

<div className="logincontainer">
    
      <div className="login-form">
        <h2>Login</h2>
        <p>Does not have any account yet?   <p className='sinin' onClick={openForm} > sign up</p></p>
        <div className="form-group">
          <label htmlFor="username"><b>Email Address</b></label>
          <input type="text" id="username" placeholder="Your@example.com" required className='logininput'/>
        </div>
        <div className="form-group">
          <label htmlFor="password" className='loginpassword'><b>Password </b> <a href='#'>Forget My Password?</a></label> 
          <input type="password" id="password" placeholder="Enter 6 chracter or more" required className='logininput'/>
        </div>
          <div>
          <div>
              <input
                type="checkbox"
                value="Remember Me"
                name="Remember Me"
                className="contact_re"
              />
              Remember Me
            </div> 
          </div>
          
      
        <div>
        <button type='button' className="login-btn" onClick={()=>{window.location.href='dashboard'}}>Login</button>   
        </div>
       
        <div className="social-buttons">
      <button className="google-button">
        <FcGoogle /> Google
      </button>
      <button className="facebook-button">
        <FaFacebookF /> Facebook
      </button>
      </div>
      </div>
  
<div className='loginimage'>

</div>
{open  &&(<SignupForm openForm={openForm} />)}
    </div>

  
    

  )
} export default Login
