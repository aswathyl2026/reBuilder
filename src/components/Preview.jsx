import React from 'react'
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button'
function Preview({resumeData}) {
  return (
    <div className='w-100'>
   <h2>{resumeData?.fullName}</h2>
   <p className='fs-6'>Phone No : {resumeData?.phone}</p>
   <p className='fs-6'>Email : {resumeData?.email}</p>
   <p className='fs-6'>LinkedIn : <a href="">{resumeData?.linkedin}</a></p>
   <p className='fs-6'>GitHUb : <a href="">{resumeData?.github}</a></p>
   <p className='fs-6'>Location : {resumeData?.location}</p>
   <Divider className='bg-dark my-3'/>
   <h4>Professional Summary</h4>
   <p>{resumeData?.summary}</p>
   <Divider className='bg-dark my-3'/>
    <h4>Tecnical Skills</h4>
   {/*duplicate acoording to user skill*/}
   {
    resumeData?.skills?.map((item,index)=>(
      <>
      <Button key={index} variant="text" className='text-dark  m-1' >{item}</Button>
      {','}</>
    ))
   }
   <Divider className='bg-dark my-3'/>
   <h4>Education </h4>
   <p className='fs-6'>Degree in <b>{resumeData?.degree}</b></p>
   <p className='fs-6'>College/University : {resumeData?.university}</p>
   <p className='fs-6'>Yeaar of Graduation : {resumeData?.passOut}</p>
   <Divider className='bg-dark my-3'/>
    </div>
  )
}

export default Preview
