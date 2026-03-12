import React from 'react'
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button'
function Preview() {
  return (
    <div className='w-100'>
   <h2>Full name</h2>
   <p className='fs-6'>Phone No : 54601486</p>
   <p className='fs-6'>Email : email</p>
   <p className='fs-6'>LinkedIn : <a href="">url</a></p>
   <p className='fs-6'>GitHUb : <a href="">url</a></p>
   <p className='fs-6'>Location : location</p>
   <Divider className='bg-dark my-3'/>
   <h4>Professional Summary</h4>
   <p>Summary</p>
   <Divider className='bg-dark my-3'/>
    <h4>Tecnical Skills</h4>
   <Button variant="text">Skills</Button>{/*duplicate acoording to user skill*/}
   <Divider className='bg-dark my-3'/>
   <h4>Education </h4>
   <p className='fs-6'>Degree in <b>degree</b></p>
   <p className='fs-6'>College/University : college</p>
   <p className='fs-6'>Yeaar of Graduation : year</p>
   <Divider className='bg-dark my-3'/>
    </div>
  )
}

export default Preview
