import React from 'react'
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

function Edit() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
                                <TextField id="standard-basic-name" label="Full name" variant="standard" />
                                <TextField id="standard-basic-loc" label="Location" variant="standard" />
                                <FormControl variant="standard"  >
                                    <InputLabel id="demo-simple-select-helper-label">Choose Job Title</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-helper-label"
                                        id="demo-simple-select-helper"
                                        label="Age"
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Ten</MenuItem>
                                    </Select>

                                </FormControl>

                            </div>
                        </div>
                        {/*Contact Details */}
                        <div>
                            <h3>Contact Details</h3>
                            <div className="p-3 row">
                                <TextField id="standard-basic-email" label="Email" variant="standard" />
                                <TextField id="standard-basic-phone" label="Contact Number" variant="standard" />
                                <TextField id="standard-basic-linkedin" label="LinkedIn Link" variant="standard" />
                                <TextField id="standard-basic-github" label="Github Link" variant="standard" />

                            </div>
                        </div>
                        {/*Educational Details */}
                        <div>
                            <h3>Education  Details</h3>
                            <div className="p-3 row">
                                <TextField id="standard-basic-degree" label="Bachelor's Degree" variant="standard" />
                                <TextField id="standard-basic-college" label="College/University" variant="standard" />
                                <TextField id="standard-basic-year" label="Year of Graduation" variant="standard" />
                                <TextField id="standard-basic-github" label="Github Link" variant="standard" />

                            </div>
                        </div>
                        {/*skills */}
                        <div>
                            <h3>Skills</h3>
                            <div className="p-3 row">
                             <div className="p-3 d-flex justify-content-between align-items-center">
                                <input type="text" placeholder='Add Skill' className='form-control' />
                                <Button variant="text">Add</Button>
                             </div>
                             <div className="p-3 d-flex justify-content-between align-items-center">
                                
                                <Button variant="contained">Skill<FaXmark/></Button>
                             </div>
                            </div>
                        </div>
                           {/*Summary */}
                        <div>
                            <h3>Summary</h3>
                            <div className="p-3 row">
                                <TextField id="standard-basic-degree" label="summary" multiline variant="standard" />
                                
                            </div>
                        </div>
                        <button className='btn btn-primary'>Update</button>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}

export default Edit
