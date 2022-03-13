import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import style from "./Shipping.module.css"
import Typography from "@mui/material/Typography";
import { useTheme } from '@mui/material/styles';
import CardMedia from '@mui/material/CardMedia';
import {CartHeader} from "./CartHeader"
import CartFooter from "./Cartfooter"
import { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { cartapi } from '../../Redux/Shopping_cart/cart.api';
import {useNavigate} from "react-router-dom"


function MediaControlCard({image, title,quantity,price}) {
    const theme = useTheme();
    
    




    return (
        <Box style={{background: "white",padding:"10px"}}>
      <Box sx={{ display: 'flex', maxWidth:"350px",height: "100px"}}>
           <CardMedia
          component="img"
          sx={{ width: "80px",height:"80px" ,}}
          image={image}
          alt="Live from space album cover"
        />
        <Box sx={{ display: 'flex', flexDirection: 'column',padding:"0 10px" }}>
        <Typography  style={{fontSize:"10px"}}>
             {title}</Typography>
             <Typography  style={{fontSize:"10px"}}>
             Qty: {quantity}</Typography>
             <Typography  style={{fontSize:"10px"}}>
             Price: ₹ {price}</Typography>
        </Box>
       
      </Box>
      </Box>
    );
  }


export default function Shipping(){
    
  const dispatch = useDispatch();
  const neviget = useNavigate();
  useEffect(()=>{
    dispatch(cartapi())
  },[])
    // <option value="22"></option><option value="22"></option><option value="3"></option>
    // <option value="13">Belgium</option><option value="7">Australia</option>
   
  const {isLoading,isError,cart} = useSelector((state)=>state.shoppingCart)
  const total_sum = cart.reduce((acc,current)=>{
    return(
      acc+current.discount *current.quantity
    )
  
  },0)
const currencies = [
    {
      value: 'India',
      label: 'India',
    },
    {
      value: '',
      label: 'Select',
    },
    {
      value: 'Guyana',
      label: 'Guyana',
    },
    {
      value: 'Greece',
      label: 'Greece',
    },
    {
        value: 'Germany',
        label: 'Germany',
      },
      {
        value: 'France',
        label: 'France',
      },
      {
        value: 'Fiji',
        label: 'Fiji',
      },
      {
        value: 'China',
        label: 'China',
      },
      {
        value: 'Canada',
        label: 'Canada',
      },
     {
        value: 'Canada',
        label: 'Canada',
     }


  ];

  const [currency, setCurrency] = React.useState('EUR');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
   
  const handleDeliver = ()=>{
    neviget("/payment")
  }
   
    return(
        <>
        <CartHeader/>
        <div className={style.mainContainer}>
        <div className={style.Leftdiv}>
        <Typography
          variant="h5"
          style={{ }}
        >
          Where do you want us to deliver?
        </Typography>
         <Box
         className={style.boxes}
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
        border: "1px solid rgb(221, 219, 219)"
      }}
      noValidate
      autoComplete="off"
    >
      <TextField style={{width:"300px"}} id="outlined-basic" label="Full name" variant="outlined" />
      <TextField
      style={{width:"300px"}}
          id="outlined-number"
          label="Mobile number*"
          type="number"
          variant="outlined"
        />
         <TextField
         style={{width:"300px"}}
          id="outlined-number"
          label="Pin code"
          type="number"
          variant="outlined"
        />
        <TextField
        style={{width:"300px"}}
          id="outlined-select-currency"
          select
          label="Select"
          value={currency}
          onChange={handleChange}
          helperText="Please select your country"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
       < div>
            Address
            <TextareaAutosize
      aria-label="empty textarea"
      className={style.textarea}
      // style={{ maxWidth: "600px",height: "200px" }}
    />
    </div>
    <TextField style={{width:"300px"}} id="outlined-basic" label="Citey" variant="outlined" />
    <TextField style={{width:"300px"}} id="outlined-basic" label="State" variant="outlined" />
    <button
    style={{height:"40px",width:"200px",border:"0",backgroundColor:"#FC6486",color:"#FFFFFF",padding:"5px 20px"}}
    onClick={handleDeliver}
    
    >Deliver to this Address</button>
    </Box>
    </div>
    <div>

    </div>
        <div className={style.Rightdiv}>
        <Typography
          variant="h5"
          style={{ }}
        >
          Product Details
        </Typography>
        <Box>
            {cart.map((item)=>{
              return(
                
                <MediaControlCard
                image={item.image}
                    title={item.productName}
                    quantity={item.quantity}
                    price=  {item.discount}
               />
               
              )
            })
             
            }
        </Box>
        <Typography
          variant="h5"
          style={{ }}
        >
        Price Details
        </Typography>
        <Box className={style.price}>
            <div className={style.Total}>
            <Typography
         
          style={{ }}
        >
        Sub Total
        </Typography>
        <Typography
          
          style={{ }}
        >
            ₹ {total_sum}
        </Typography>
            </div>
            <div className={style.Total}>
            <Typography
          
          style={{ }}
        >
        Total
        </Typography>
        <Typography
          
          style={{ }}
        >
            ₹ {total_sum}
        </Typography>
            </div>
        </Box>
        </div>


    </div>
    <CartFooter/>
        </>
    )
}