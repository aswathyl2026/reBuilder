import React, { useEffect, useState } from 'react'
import { IoArrowBackSharp } from 'react-icons/io5'
import { MdDelete } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { getDownloadResumeApi } from '../services/allResumeService'

function Downloads() {

  const [allDownloads,setallDownloads]=useState([])
  console.log(allDownloads);
  
  useEffect(()=>{
    getAllDownload()
  },[])

 const getAllDownload=async()=>{
  const result=await getDownloadResumeApi()
  if(result.status==200){
    setallDownloads(result.data)
  }
 }

  return (
    <div className='container'>
     <div className='d-flex my-5 justify-content-between align-items-center'>
      <h1>Downloaded Resume History</h1>
      <Link to={'/forms'}><IoArrowBackSharp/>BACK</Link>
      </div> 

      <div className="row mb-5">
        <div className="col-lg-4">
          <div  style={{height:'400px'}} className="shadow p-3 rounded">
           <div className="d-flex align-items-center justify-content-between">
             <h5>review at : {result.data}</h5>
             <button className='btn btn-danger fs-5'><MdDelete/></button>
           </div>
           <div className="mt-3 text-center">
             <img width={'200px'}  height={'300px'}src="cv.jpeg" alt="cv" />
           </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Downloads
