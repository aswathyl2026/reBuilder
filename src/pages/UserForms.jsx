import React from 'react'
import UserInput from '../components/UserInput'
import Preview from '../components/Preview'
function userForms() {
  return (
    <div className='container my-5'>
     <div className="row">
        <div className="col-lg-6">
            <UserInput/>
        </div>
        <div className="col-lg-6">
            <Preview/>
        </div>
      </div>
    </div>
  )
}

export default userForms
