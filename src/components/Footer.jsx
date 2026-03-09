import React from 'react'
import { FaFacebook,FaPhoneAlt } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { LuMessageCircle } from "react-icons/lu";
import { GoHeartFill } from "react-icons/go";

function Footer() {
  return (
    
    <div className='d-flex flex-column justify-content-center align-items-center text-white pt-4' style={{backgroundColor:'purple'}}>
     <h3 className='pb-3'>Contact Us</h3>
     <div className='pb-0'> <MdAttachEmail/>&nbsp;resumebuilder@gmail.com 
      <p className='text-center'><FaPhoneAlt />&nbsp;245125425</p> 
    </div>
    <h4 >Connect With Us</h4>
    <div className='d-flex flex-rowjustify-content-center align-items-center gap-1'><LuMessageCircle /><FaFacebook /><FaInstagram/></div>
    <p className='p-4'>Designed and built with <GoHeartFill  style={{color:'red'}} /> using React</p>
    </div>
    
  )
}

export default Footer
