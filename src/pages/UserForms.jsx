import React,{useState} from 'react'
import UserInput from '../components/UserInput'
import Preview from '../components/Preview'
function userForms() {
       const [resumeData,setResumeData]=useState({
           fullName:"",
           location:"",
           job:"",
           email:"",
           phone:"",
           linkedin:"",
           github:"",
           degree:"",
           university:"",
           passOut:"",
           skills:[],
           summary:""
   
       })
  return (
    <div className='container my-5'>
     <div className="row">
        <div className="col-lg-6">
            <UserInput resumeData={resumeData} setResumeData={setResumeData}/>
        </div>
        <div className="col-lg-6">
           {resumeData.fullName &&
           <Preview resumeData={resumeData} />} 
        </div>
      </div>
    </div>
  )
}

export default userForms
