import React, {useState} from "react";
import { FaEnvelope, FaInstagram,FaTwitter, } from "react-icons/fa";
import{BiLogoFacebook, BiSearch} from "react-icons/bi"
import{BsFillTelephoneFill} from "react-icons/bs"
import './First.css'
import logo from '../images/logo-image.png';
import Search from "./search";

 function First() {
    const [modal, setModal] = useState(false);
  return (

<section className="homee">
{modal && <Search />}
          <div className="page1">
            <div className="location">
             <p className="email"> <FaEnvelope className="p"/> hollidayplanners@gmail.com</p>
            <p className="email1"><BsFillTelephoneFill className="p"/> +250789466837</p>   
            </div>
            <div className="home-icons">
              <BiLogoFacebook className="FaFacebook"/>
              <FaInstagram className="FaFacebook"/>
              <FaTwitter/>  
            </div>
        </div>
        <div className="logo">
         <div className="logo-image">
         <img src={logo}  alt="logo-image" />
        </div>
          <div className="slider-nav">
            <button className="research-btn">Reserve</button>
               <BiSearch className="search-image"/>
            <div className="hamburger-menu" 
             onClick={() => {
              setModal(!modal);
             }} >
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
          </div>
         </div>
    
    </div>
    </section>
  )
} export default First
