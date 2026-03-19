import React, { useEffect, useState } from 'react'
import { IoArrowBackSharp } from 'react-icons/io5'
import { MdDelete } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { deleteDownloadResumeApi, getDownloadResumeApi } from '../services/allResumeService'

function Downloads() {

  const [allDownloads,setallDownloads]=useState([])

  
  useEffect(()=>{
    getAllDownload()
  },[])

 const getAllDownload=async()=>{
  const result=await getDownloadResumeApi()
  if(result.status==200){
    setallDownloads(result.data)
   
    
  }
 }
 const deleteDownload=async (id)=>{
  await deleteDownloadResumeApi(id)
  getAllDownload();
 }
 

  return (
    <div className='container'>
     <div className='d-flex my-5 justify-content-between align-items-center'>
      <h1>Downloaded Resume History</h1>
      <Link to={'/forms'}><IoArrowBackSharp/>BACK</Link>
      </div> 

      <div className="row mb-5">
        {
          
          allDownloads.length>0 ?
          allDownloads?.map(resume=>(
            <div key={resume?.id} className="col-lg-4">
          <div  style={{height:'400px'}} className="shadow p-3 rounded">
           <div className="d-flex align-items-center justify-content-between">
             <h6>review at : {resume?.resumeData.timeStamp}</h6>
             <button onClick={()=>deleteDownload(resume?.id)} className='btn btn-danger fs-5'><MdDelete/></button>
           </div>
           <div className="mt-3 text-center">
             <Link to={`/resume/${resume?.resumeData.pid}/view`}><img width={'200px'}  height={'300px'}src={resume?.resumeData.resumeImg} alt="cv" /></Link>
           </div>
          </div>
        </div>
          ))
          :
          <div className='text-danger'>No resume Downloaded yet</div>
        }
      </div>
    </div>
  )
}

export default Downloads
