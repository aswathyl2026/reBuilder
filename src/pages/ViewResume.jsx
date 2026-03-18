import React, { useEffect, useRef, useState } from 'react'
import { FaFileDownload } from "react-icons/fa"
import { Link, useParams } from 'react-router-dom'
import { IoMdRefresh } from "react-icons/io";
import { FaFastBackward } from "react-icons/fa";
import Preview from '../components/Preview';
import Edit from '../components/Edit';
import { downloadResumeApi, getResumeApi } from '../services/allResumeService';
import html2canvas from 'html2canvas'
import jspdf from 'jspdf'
function ViewResume() {
  
  const {pid}=useParams()
  const[resumeData,setResumeData]=useState({})
  const[resumeImg,setResumeImg]=useState("")
  const previewRef=useRef()
  useEffect(()=>{
    getResumeDetails()
  } ,[])
  const getResumeDetails= async()=>{
    if(pid){
        const result=await getResumeApi(pid)
        setResumeData(result.data)
    }
  }
  const downloadResume=async()=>{
   
    const previewTag=previewRef.current
    const canvas=await html2canvas(previewTag)
    //const resumeImg=canvas.toDataURL('image/jpeg')
    canvas.toBlob(blob=>{
             const shortUrl=URL.createObjectURL(blob)
            generatePDF(shortUrl)
                
          })
    const generatePDF=async (resumeImg) =>{
       const today=new Date()
       const timeStamp=`${today.toLocaleDateString()},${today.toLocaleTimeString()}`
       const pdf=new jspdf()
      const imgWidth=pdf.internal.pageSize.getWidth()     
     const imgHeight=pdf.internal.pageSize.getHeight()  
       pdf.addImage(resumeImg,"PNG",0,0,imgWidth,imgHeight)  
     const downloadDetails={
      timeStamp,pid,resumeImg
    }

  const result=await downloadResumeApi(downloadDetails)
  console.log(result);
  if(result.status==201){
    pdf.save(`${resumeData?.fullName}-resume.pdf`)
  }
   
    }      
    
    //console.log(timeStamp,pid);
    //console.log(resumeImg);
    
  }
  return (
    <div className='container'>
      <div className="row my-2">
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
          <div className="d-flex justify-content-center align-items-center">
            {/*download*/ }
              <button onClick={downloadResume} className='btn text-primary fs-2 me-2'><FaFileDownload/></button>
            {/*edit*/ }
             <Edit/>
            {/*history*/ }
            <Link to='{/downloads}' className='btn text-danger fs-2 me-2'><IoMdRefresh/></Link>
            {/*back*/ }
            <Link to='{/form}'className='btn text-success fs-2 me-2'><FaFastBackward/></Link>
          </div>
          <div ref={previewRef} className='p-5'><Preview resumeData={resumeData}/></div>
        </div>
        <div className="col-lg-2"></div>
      </div> 
    </div>
  )


}

export default ViewResume
