import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import logo from "./anim.gif"
import { v4 as uuidv4 } from 'uuid';
import {Link, useNavigate} from "react-router-dom"
import styles from './Payment.module.css'
import { useDispatch} from 'react-redux';
import { delete_api } from '../../Redux/Shopping_cart/cart.api';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

export default function PaymentSucess(){
  const [open, setOpen] = React.useState(false);


  
  // const dispatch = useDispatch();
  // const {id,color,discount,quantity,price,productName,image,sizes} = item;

  const history = useNavigate();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    
    history(`/`)
  };

  const { v4: uuidv4 } = require('uuid');
  return (
    <div>
      <Button variant="contained" style={{ background:"#fc6486",width:"100%"}} onClick={handleClickOpen}>
       PAY NOW
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
         
       
        <img style={{width:"30%", margin:"auto"}} src={logo} alt=""/>
        
          <h1 style={{textAlign: "center", color:"#1D6222"}}>Payment Successful</h1>
        <p style={{textAlign: "center", color:""}}>Transition Id : {uuidv4()}</p>
        
          <Button onClick={handleClose}variant="contained" color="success">Sucess</Button>
         
        
      </Dialog>
    </div>
  );

}