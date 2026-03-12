import React, { useState } from 'react'
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
const steps = ['Basic Informations', 'Contact Details', 'Education Details','Review & Submit'];
function UserInput() {
    const [activeStep, setActiveStep] = React.useState(0);
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
    console.log(resumeData);
    

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
 
    const renderStepContent = (stepCount) => {
        switch (stepCount) {
            case 0: return (
                <div>
                    <h3>Personal Details</h3>
                    <div className="p-3 row">
                        <TextField onChange={e=>setResumeData({...resumeData,fullName:e.target.value})}
                        id="standard-basic-name" label="Full name" variant="standard" FormControl/>
                        <TextField onChange={e=>setResumeData({...resumeData,location:e.target.value})}
                        id="standard-basic-loc" label="Location" variant="standard" />
                        <FormControl variant="standard"  >
                            <InputLabel id="demo-simple-select-helper-label">Choose Job Title</InputLabel>
                            <Select  onChange={e=>setResumeData({...resumeData,job:e.target.value})} defaultValue={''}
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
                        <TextField onChange={e=>setResumeData({...resumeData,email:e.target.value})}
                        id="standard-basic-email" label="Email" variant="standard" />
                        <TextField id="standard-basic-phone" label="Contact Number" variant="standard" />
                        <TextField id="standard-basic-linkedin" label="LinkedIn Link" variant="standard" />
                        <TextField id="standard-basic-github" label="Github Link" variant="standard" />

                    </div>
                </div>
            )
             case 2: return (
                <div>
                    <h3>Education  Details</h3>
                    <div className="p-3 row">
                        <TextField id="standard-basic-degree" label="Bachelor's Degree" variant="standard" />
                        <TextField id="standard-basic-college" label="College/University" variant="standard" />
                        <TextField id="standard-basic-year" label="Year of Graduation" variant="standard" />
                        <TextField id="standard-basic-github" label="Github Link" variant="standard" />

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
                        All steps completed - you&apos;re finished
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button>Finish</Button>
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
                          <Button>AI Skill & Summary</Button> 
                          :<Button onClick={handleNext}>Next</Button> 
                        }
                    </Box>
                </React.Fragment>
            )}
        </Box>
    );
}

export default UserInput
