import React, { useState} from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import jobType from '../assets/jobRole.json'
import skillJson from '../assets/jobSkills.json'
import summaryJson from '../assets/summaries.json'
import { addResumeApi } from '../services/allResumeService';
import { useNavigate } from 'react-router-dom';
const steps = ['Basic Informations', 'Contact Details', 'Education Details','Review & Submit'];


function UserInput({resumeData,setResumeData}) {
    const navigate=useNavigate()
    const [activeStep, setActiveStep] = React.useState(0);

    console.log(resumeData);
    

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
   
    const generateAI=()=>{
   setResumeData({...resumeData,
    skills:skillJson[resumeData.job],
    summary:summaryJson[resumeData.job]
   })
   handleNext()
    }
 
    const renderStepContent = (stepCount) => {
        switch (stepCount) {
            case 0: return (
                <div>
                    <h3>Personal Details</h3>
                    <div className="p-3 row">
                        <TextField value={resumeData.fullName} onChange={e=>setResumeData({...resumeData,fullName:e.target.value})}
                        id="standard-basic-name" label="Full name" variant="standard" />
                        <TextField  value={resumeData.location} onChange={e=>setResumeData({...resumeData,location:e.target.value})}
                        id="standard-basic-loc" label="Location" variant="standard" />
                        <FormControl variant="standard"  >
                            <InputLabel id="demo-simple-select-helper-label">Choose Job Title</InputLabel>
                            <Select  onChange={e=>setResumeData({...resumeData,job:e.target.value})} value={resumeData.job} defaultValue=''
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
            )
            case 1: return (
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
            )
             case 2: return (
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
            )
           
            case 3: return(
                <div>
                    <h6>Our AI will generate Skills and Summary according your Job Title. Click the <b>AI Skill & Summary</b> to proceed</h6>
                </div>
            )
            default: return null
        }
    }
     const handleAddResume=async()=>{
       const {fullName,location,job,email,phone,linkedin,github,degree,university,passOut,skills,summary}=resumeData
      if(fullName && location && job && email && phone && linkedin && github && degree && university && passOut && skills.length>0 && summary)
        {
            const response= await addResumeApi(resumeData)
           
            if(response.status==201){
                alert("resume added successfully")
                 console.log(response);
                const resumeId=response.data.id
                navigate(`/resume/${resumeId}/view`)
            }}
    else{
          alert("please fill th form completely")
        }
            
           
    }

    return (
        <Box sx={{ width: '100%' }}>
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};
                  
                  
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>

            {activeStep === steps.length ? (
                <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1 }}>
                        All steps completed 
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button onClick={handleAddResume}>Finish</Button>
                    </Box>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    {/*rendering forms according to the activeStep*/}
                    <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
                    <Box>{
                        renderStepContent(activeStep)
                    }
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Button
                            color="inherit"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            sx={{ mr: 1 }}
                        >
                            Back
                        </Button>
                        <Box sx={{ flex: '1 1 auto' }} />
                        
                        
                        {
                          activeStep === steps.length - 1 ? 
                          <Button onClick={generateAI}>AI Skill & Summary</Button> 
                          :<Button onClick={handleNext}>Next</Button> 
                        }
                    </Box>
                </React.Fragment>
            )}
        </Box>
    );
}

export default UserInput
