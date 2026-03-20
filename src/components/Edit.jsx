import React, { useRef } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { MdEdit } from "react-icons/md"
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import { FaXmark } from "react-icons/fa6"
import jobType from '../assets/jobRole.json'
import { updateResumeApi } from '../services/allResumeService';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    maxHeight: '80vh',
    overflowY: 'auto',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function Edit({resumeData,setResumeData}) {
      
    const skillRef=useRef()
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    console.log(resumeData);
    const removeSkill=(skill)=>{
        setResumeData({...resumeData,skills:resumeData?.skills?.filter(item=>item!=skill)})
    }
    const addSkill=(skill)=>{
       if(skill){
           if(resumeData?.skills?.map(item=>item.toLowerCase())?.includes(skill.toLowerCase())){
                alert("Skill is alredy exist")
           }else{
                setResumeData({...resumeData,skills:[...resumeData.skills,skill]})
           }
           skillRef.current.value=""
       }else{
        alert("enter a valid skill")
       }
    }
    const updateResume=async ()=>{
    const {fullName,location,job,email,phone,linkedin,github,degree,university,passOut,skills,summary}=resumeData
      if(fullName && location && job && email && phone && linkedin && github && degree && university && passOut && skills.length>0 && summary)
        {
            const response= await updateResumeApi(resumeData?.id,resumeData)
           
            if(response.status==200){
                alert("resume added successfully")
                 //console.log(response);
                handleClose()
            }}
    else{
          alert("please fill th form completely")
        }
   
    }

    return (
        <div>
            <Button className='btn text-warning fs-2 me-2' onClick={handleOpen}><MdEdit /></Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Edit Resume Details
                    </Typography>
                    <Box id="modal-modal-description" sx={{ mt: 2 }}>
                        {/*Basic Details */}
                        <div>
                            <h3>Personal Details</h3>
                            <div className="p-3 row">
                        <TextField value={resumeData.fullName} onChange={e=>setResumeData({...resumeData,fullName:e.target.value})}
                        id="standard-basic-name" label="Full name" variant="standard" />
                        <TextField  value={resumeData.location} onChange={e=>setResumeData({...resumeData,location:e.target.value})}
                        id="standard-basic-loc" label="Location" variant="standard" />
                        <FormControl variant="standard"  >
                            <InputLabel id="demo-simple-select-helper-label">Choose Job Title</InputLabel>
                            <Select  onChange={e=>setResumeData({...resumeData,job:e.target.value})} value={resumeData.job} 
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                label="Age"
                            >
                                {
                                    jobType.jobRoles.map(role=>(
                                    <MenuItem key={role} value={role}>{role}</MenuItem>
                                    ))

                                    
                                }
                                
                                
                            </Select>
                           
                        </FormControl>

                    </div>
                        </div>
                        {/*Contact Details */}
                        <div>
                            <h3>Contact Details</h3>
                            <div className="p-3 row">
                                                    <TextField value={resumeData.email} onChange={e=>setResumeData({...resumeData,email:e.target.value})}
                                                    id="standard-basic-email" label="Email" variant="standard" />
                                                    <TextField  value={resumeData.phone} onChange={e=>setResumeData({...resumeData,phone:e.target.value})}
                                                    id="standard-basic-phone" label="Contact Number" variant="standard" />
                                                    <TextField  value={resumeData.linkedin} onChange={e=>setResumeData({...resumeData,linkedin:e.target.value})}
                                                    id="standard-basic-linkedin" label="LinkedIn Link" variant="standard" />
                                                    <TextField  value={resumeData.github} onChange={e=>setResumeData({...resumeData,github:e.target.value})}
                                                    id="standard-basic-github" label="Github Link" variant="standard" />
                            
                                                </div>
                        </div>
                        {/*Educational Details */}
                        <div>
                            <h3>Education  Details</h3>
                            <div className="p-3 row">
                                                    <TextField  value={resumeData.degree} onChange={e=>setResumeData({...resumeData,degree:e.target.value})}
                                                    id="standard-basic-degree" label="Bachelor's Degree" variant="standard" />
                                                    <TextField   value={resumeData.university} onChange={e=>setResumeData({...resumeData,university:e.target.value})}
                                                    id="standard-basic-college" label="College/University" variant="standard" />
                                                    <TextField  value={resumeData.passOut} onChange={e=>setResumeData({...resumeData,passOut:e.target.value})}
                                                    id="standard-basic-year" label="Year of Graduation" variant="standard" />
                                                  
                            
                                                </div>
                        </div>
                        {/*skills */}
                        <div>
                            <h3>Skills</h3>
                            
                             <div className="p-3 d-flex justify-content-between align-items-center">
                                <input  ref={skillRef} type="text" placeholder='Add Skill' className='form-control' />
                                <Button onClick={()=>addSkill(skillRef.current.value)} variant="text">Add </Button>
                             </div>
                             <div className="p-3 d-flex justify-content-between flex-wrap">
                                {
                                    resumeData?.skills?.map(skill=>(
                                       <Button onClick={()=>removeSkill(skill)} key={skill} variant="contained" sx={{backgroundColor:'#cd9d74', color:'white'}} className='my-1'>{skill}<FaXmark/></Button>
                                    ))
                                }
                                
                             </div>
                            
                        </div>
                           {/*Summary */}
                        <div>
                            <h3>Summary</h3>
                            <div className="p-3 row">
                                <TextField value={resumeData.summary}  onChange={e=>setResumeData({...resumeData,summary:e.target.value})}
                                id="standard-basic-degree" label="summary" multiline variant="standard" />
                                
                            </div>
                        </div>
                        <button className='btn btn-primary' onClick={updateResume}>Update</button>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}

export default Edit
