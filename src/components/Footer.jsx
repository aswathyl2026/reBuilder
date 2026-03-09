import React from 'react'
import { FaFacebook,FaPhoneAlt } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";

import { GoHeartFill } from "react-icons/go";
import { FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    
    <div className='d-flex flex-column justify-content-center align-items-center text-white pt-4' style={{height:'400px',backgroundColor:'#534a40'}}>
     <h3 className='pb-3'>Contact Us</h3>
     <div className='pb-0'> <MdAttachEmail/> resumebuilder@gmail.com 
      <p className='text-center'><FaPhoneAlt /> 145125425</p> 
    </div>
    <h4 >Connect With Us</h4>
    <div className='d-flex flex-rowjustify-content-center align-items-center gap-1'><FaWhatsapp /><FaFacebook /><FaInstagram/></div>
    <h6 className='p-4'>Designed and built with <GoHeartFill  style={{color:'red'}} /> using React</h6>
    </div>
    
  )
}

export default Footer
