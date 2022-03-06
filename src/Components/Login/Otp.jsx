import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styles from "./otp.module.css";
import {useState} from "react";
import {useDispatch} from "react-redux";
import { loginApi } from '../../Redux/Auth/loginApi';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'white',

  boxShadow: 24,
  p: 4,
};

export  function BasicModal({openOtp,handleCloseOtp,usernum}) {
 
  

  const [inp1,setInp1] = useState("");
  const [inp2,setInp2] = useState("");
  const [inp3,setInp3] = useState("");
  const [inp4,setInp4] = useState("");
  const dispatch = useDispatch();

  const handleLogin = ()=>{
    dispatch(loginApi("123445"));
    handleCloseOtp()
  }
  return (
    <div>
     
      <Modal
        open={openOtp}
       /* onClose={handleClose}*/
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <p className={styles.cut} onClick={()=>handleCloseOtp()}>X</p>
         
            GET OTP
       
        
            <p className={styles.otp_sent}>A 4-digit OTP has been sent to</p>
        
          <div className={styles.box_no}>
            <h6>{usernum}</h6>
            <p>Change Number</p>

          </div>
          <div className={styles.otp_input}>
            <input type="text" value={inp1} onChange={(e)=>setInp1(e.target.value)}/>
            <input type="text" value={inp2} onChange={(e)=>setInp2(e.target.value)}/>
            <input type="text" value={inp3} onChange={(e)=>setInp3(e.target.value)}/>
            <input type="text" value={inp4} onChange={(e)=>setInp4(e.target.value)}/>
          </div>

          <button className={styles.continue_btn} onClick={handleLogin}>Continue</button>
     <div className={styles.box2} >
     <p>Waiting for OTP...</p>
     <h6>Resend OTP</h6>

     </div>
     <p className={styles.p_last}>Login using Email</p>
      
        </Box>
      </Modal>
    </div>
  );
}
