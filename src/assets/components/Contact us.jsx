import React, { Component } from 'react';
import './Contact.css'
import { FaMailBulk, FaMailchimp, FaPeopleCarry, FaPhone, FaServicestack, FaVoicemail } from 'react-icons/fa';
import { MdEmail ,MdMedicalServices } from 'react-icons/md';
import { IoMdPerson } from 'react-icons/io'
function Contact () {
    return (
      <div >

          <div className='contactp'>
           <p >Contact Us</p>
           </div>
           <div className='contact'>


           <form className='form'>
            <div className='inputtt'>
                <div className='column'>
                    <IoMdPerson className='iconss'/>
                   <input type="text" placeholder="Full Name" className='contact-input'/> 
                   <MdEmail className='iconss'/>
                  <input type="email" placeholder="Email" className='contact-input' />  
                </div>
             <div className='column'>
                <FaPhone className='iconss'/>
              <input type="tel" placeholder="Phone"  className='contact-input'/>
              <MdMedicalServices className='iconss'/>
              <input type="text" placeholder="Services" className='contact-input' />  
             </div>
            
              <textarea placeholder="Message" className='contact-text'  />
             <button type="submit" className='contact-submit'>SUBMIT</button>

            </div>
        </form>
        <div className='contacts'>
          <div className='contact1 '>
        <b>WHY BOOK WITH US?</b>
        <div className='contact1-2'>
        <h>Best Price Guarantee</h>
        <h>Customer care available 24/7</h>
        <h>Free Travel Insureance</h>
        <h>Hand-picked Tours & Activities</h> 
        </div>
        </div>   

        <div className='contact2'>
       <b>GET A QUESTION?</b>
       <p>Do not hesitage to give us a call.<br/>
       We are an expert team and we are happy <br/>
       to talk to you.</p>
       <div className='contact2-1'>
        <h>holidayplanners@gmail.com</h>
        <h>+123 456 7890</h>
       </div>
       </div> 
        </div>




           </div>
        
       
      
      </div>
    );
  
}

export default Contact;