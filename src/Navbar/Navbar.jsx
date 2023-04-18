import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Badge from '@mui/material/Badge';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import style from "./Navbar.module.css";
import BottomNav from './BottomNav';
import {useState} from "react"
import styles from "styled-components";
import { LoginModal } from '../Components/Login/Login'
import {Link} from "react-router-dom";
import { useEffect } from "react"
import {useSelector,useDispatch,shallowEqual} from "react-redux";
import {getProductRequest,getProduct} from "../Redux/Allproduct/action";
import MenuIcon from '@mui/icons-material/Menu';

import {logoutApi} from "../Redux/Auth/loginApi"






function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }
  
  ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };





  export default function Navbar(props) {
  const [display,setDisplay]=useState("block")
  const[Height,setHeight] = useState("150px")

  const dispatch = useDispatch();

  const {product,isLooding} = useSelector(
      (state) => state.app,
      shallowEqual
      );

      const [data,setData]= useState([])

    const no = product.length;
    console.log(no,"cart no")
const getProducts = ()=>{
  const requestAction = getProductRequest();
  dispatch(requestAction);
  return fetch(`https://fabaly-product-api.onrender.com/cart`)
  .then((response) => response.json())
  .then((response) => {
      console.log(response)
      const successAction = getProduct(response)
      dispatch(successAction);
      setData(response)
      
  })
  .catch((error) => {
      console.log(error);
  })
};

useEffect(() => {
  getProducts();
},[no]);



  window.addEventListener('scroll',() =>{
      var scrollTop = document.documentElement.scrollTop;
      if(scrollTop >= 10){
          setDisplay("none");
          setHeight("")
      }
      else if(scrollTop < 100){
          setDisplay("block");
          setHeight("150px")
      }
  })

  const Bages = styles.div`
  width:100%;
  display:flex;
  height: 20px;
 
  `
  // const Menu = styles.div`
  //  display:none;
  //   @media screen and (max-width:550px){
  //   display: block;
  //   }
  // `


return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar style={{backgroundColor:"white",color:"black",height:"",cursor: "pointer"}}>
        <div className= {style.sale}>
           <Link to={"/product"} style={{textDecoration:"none"}}> <Typography component="div" className={style.Nav} style={{fontSize:"10px",marginTop:"10px",color:"red"}}>
             SALE | UPTO 65% off. <span style={{color:"black"}}>Shop Now <ArrowForwardIosIcon style={{fontSize:"10px"}}/></span>
            </Typography></Link>
           <Link to={"/"}> <div className={style.images} style={{display:"flex"}}>
                <div>                  
                    <img style={{height:"39px",width:"150px",backgroundColor:"black",padding:"10px 20px"}} src="https://static.faballey.com/images/indya/fabwht.png?v=11.8" alt="" />
                </div>
                <div>
                    <img style={{height:"39px",width:"100px",padding:"10px 20px"}} src="https://static.faballey.com/images/indya/indblk.png?v=11.8" alt=""/>
                </div>
            </div></Link>
            <div component="div" className={style.cart} style={{fontSize:"10px",width:"250px",}}>
            <div className={style.Right}>Track Order</div>
            <div className={style.Right}>Gift Card</div>
            <div className={style.Right}><LoginModal name={"Login"}/></div>
            <div className={style.Right} onClick={()=>{dispatch(logoutApi())}}>Log Out</div>
            <Link to={"/cart"}> <div>
            <Badge color="secondary" 
            sx={{
              "& .MuiBadge-badge": {
                color: "#fff",
                backgroundColor: "#fc6486",
                marginTop:1,
                width:2.5,
                height:15,
               
              }
            }}

            badgeContent={no} showZero>
          <WorkOutlineIcon/>
        </Badge>
       
            </div></Link>
            
            </div>
            
          </div>
          <Toolbar>
            <BottomNav/>
          </Toolbar>
          
          <div style={{display:display}} >
                <Bages>                  
                   <div style={{textAlign: "center",width:"33.33%",backgroundColor:"#FFE9E5",padding:"10px 0",fontSize:"12px",height:"30px"}}>
                            Spring Summer'22
                   </div>
                   <div style={{textAlign: "center",width:"33.33%",backgroundColor:"#F8C9C8",padding:"10px 0",fontSize:"12px",height:"30px"}}>
                            SALE | UPTO 65% off
                   </div>
                   <div style={{textAlign: "center",width:"33.33%",backgroundColor:"#FFE9E5",padding:"10px 0",fontSize:"12px",height:"30px"}}>
                            Back to Work
                   </div>
                </Bages>
        </div>
        
        </AppBar>
       
      </ElevationScroll>
      <Toolbar />      
    </React.Fragment>
  );

}