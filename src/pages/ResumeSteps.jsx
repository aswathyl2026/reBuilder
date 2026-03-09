import React from 'react'
import { FcDocument } from "react-icons/fc";
import { FaFileDownload } from "react-icons/fa";
import {Link} from 'react-router-dom'
function ResumeSteps() {
  return (
    <>
     <div className='my-5' >
         <h1 className='text-center'>Create a Job winning Resume in Minutes</h1>
         <div className="container my-5">
           <div className="row">
             <div className="col-md-1"></div>
             <div className="col-md-4 rounded p-5 shadow text-center">
                <FcDocument  className='fs-1 text-primary mb-4'/>
                <h4>Add Your Informations</h4>
                <p>Add pre-written example to each sections</p>
                <h5>Step 1</h5>
             </div>
             <div className="col-md-2"></div>
             <div className="col-md-4 rounded p-5  shadow text-center">
              <FaFileDownload  className='fs-1 text-danger mb-4'/>
                <h4>Download Your Resume</h4>
                <p>Download and start applying</p>
                <h5>Step 2</h5>
             </div>
             <div className="col-md-1"></div>
             <div className="text-center">
               <Link to={"/forms"} className='btn text-light mt-5'style={{backgroundColor:'#9a6652'}}>Let's Start</Link> 
               </div>
           </div>
         </div>
     </div>
    </>
  )
}

export default ResumeSteps
