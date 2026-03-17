import React, { useEffect, useState } from 'react'
import { FaFileDownload } from "react-icons/fa"
import { Link, useParams } from 'react-router-dom'
import { IoMdRefresh } from "react-icons/io";
import { FaFastBackward } from "react-icons/fa";
import Preview from '../components/Preview';
import Edit from '../components/Edit';
import { getResumeApi } from '../services/allResumeService';

function ViewResume() {
  
  const {pid}=useParams()
  const[resumeData,setResumeData]=useState({})
  useEffect(()=>{
    getResumeDetails()
  } ,[])
  const getResumeDetails= async()=>{
    if(pid){
        const result=await getResumeApi(pid)
        setResumeData(result.data)
    }
  }
  return (
    <div className='container'>
      <div className="row my-2">
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
          <div className="d-flex justify-content-center align-items-center">
            {/*download*/ }
              <button className='btn text-primary fs-2 me-2'><FaFileDownload/></button>
            {/*edit*/ }
             <Edit/>
            {/*history*/ }
            <Link to='{/downloads}' className='btn text-danger fs-2 me-2'><IoMdRefresh/></Link>
            {/*back*/ }
            <Link to='{/form}'className='btn text-success fs-2 me-2'><FaFastBackward/></Link>
          </div>
          <div className='mt-5'><Preview resumeData={resumeData}/></div>
        </div>
        <div className="col-lg-2"></div>
      </div> 
    </div>
  )


}

export default ViewResume
