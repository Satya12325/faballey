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
import Slide from '@mui/material/Slide';
import {useState} from "react";
import HoverDiv from "./HoverDiv";
import styles from "styled-components"

// function HideOnScroll(props) {
//     const { children, window } = props;
//     // Note that you normally won't need to set the window ref as useScrollTrigger
//     // will default to window.
//     // This is only being set here because the demo is in an iframe.
//     const trigger = useScrollTrigger({
//       target: window ? window() : undefined,
//     });
  
//     return (
//       <Slide appear={false} direction="down" in={!trigger}>
//         {children}
//       </Slide>
//     );
//   }

//   HideOnScroll.propTypes = {
//     children: PropTypes.element.isRequired,
//     /**
//      * Injected by the documentation to work in an iframe.
//      * You won't need it on your project.
//      */
//     window: PropTypes.func,
//   };
  

  

export default function BottomNav(){

    const [display,setDisplay]=useState("block")


    window.addEventListener('scroll',() =>{
        var scrollTop = document.documentElement.scrollTop;
        if(scrollTop >= 10){
            setDisplay("none");
        }
        else if(scrollTop < 100){
            setDisplay("block");
        }
    })



    return(

        <>
        
        <div style={{display:"flex",justifyContent:"space-between"}}>
        <div style={{display:display,}} >
                <div>                  
                    <img style={{height:"39px",width:"150px",padding:"5px 5px"}} src="https://static.faballey.com/images/logo.png?v=11.8" alt="" />
                </div>
        </div>            
        <div component="div" style={{fontSize:"10px",width:"250px",display:"flex",justifyContent:"space-between",margin:"10px"}}>
           <HoverDiv/>
        </div>
       
     </div>
    
         
        </>

    )
}