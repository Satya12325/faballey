import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styles from "./login.module.css";
import { useNavigate } from 'react-router-dom';
import { BasicModal } from "./Otp";
import {useState} from "react";
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'white',
/*  border: '1px solid black',*/
  borderRadius : "5px",
  boxShadow: 24,
  p: 4,
};

export  function LoginModal({name}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  

  const [openOtp, setOpenOtp] = React.useState(false);
  const handleOpenOtp = () => setOpenOtp(true);
  const handleCloseOtp = () =>{
     setOpenOtp(false)
     setuserNum("")
   
    }
const [usernum,setuserNum] = useState("");

  return (
    <div>
      <div onClick={handleOpen}>{name}</div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <p className={styles.cut} onClick={handleClose}>X</p>
         
           <h4>LOGIN OR SIGNUP</h4> 
        
       
            <p className={styles.quicker}>  for a quicker checkout.</p>
         
          <input type="text" placeholder="Enter Mobile/Email" value={usernum} onChange={(e)=>setuserNum(e.target.value)}/>
          <br/>
          <br/>
          <button className={styles.btn} onClick={()=>{
            if(usernum){
              handleOpenOtp();
              handleClose()
            }
            else{
              alert("Please fill the required fields")
            }
           }}>CONTINUE
         
          </button>
          <br/>
          <br/>
          <div className={styles.line}>
          <p >Or continue with</p>
          </div>
          <div className={styles.btn_box}>
            <div className={styles.fblogo_div} >
            <img src="/Images/fblogo.png" className={styles.img} />
            <button>Facebbok</button>
            </div>
          <div className={styles.googlelogo_div}>
          <img src="/Images/google_logo.png" className={styles.img} />
          <button>Google</button>
          </div>
         
          </div>
          <p className={styles.skip}>Skip</p>
        </Box>
      </Modal>
      <BasicModal openOtp={openOtp} handleCloseOtp={handleCloseOtp}  usernum={usernum}/>
    </div>
   
  );
}
