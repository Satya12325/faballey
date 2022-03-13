import styles from "styled-components"
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import style from "./Navbar.module.css"
import {Link} from "react-router-dom"
import MenuIcon from '@mui/icons-material/Menu';




const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: 'transparent',
    color: 'black',    
    fontSize: theme.typography.pxToRem(12),
    border: '0px solid #dadde9',
  },
}));

const Clothing = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} placement="bottom-start" />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: 'transparent',
    color: 'black',    
    fontSize: theme.typography.pxToRem(12),
    border: '0px solid #dadde9',
    marginLeft:"-250px",
    
  },
}));
const Tops = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} placement="bottom-start" />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: 'transparent',
    color: 'black',    
    fontSize: theme.typography.pxToRem(12),
    border: '0px solid #dadde9',
    marginLeft:"-290px",
    
  },
}));

const Dresses = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} placement="bottom-start" />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: 'transparent',
    color: 'black',    
    fontSize: theme.typography.pxToRem(12),
    border: '0px solid #dadde9',
    marginLeft:"-340px",
    
  },
}));

export default function HoverDiv(){

    
    const FlexDiv = styles.div`
        display: flex;
        width: 1000px;
        justify-content: space-between;

    `
    const PooperDiv = styles.div`         
           width: 1100px;
           background: white;
           margin-top: -18px;
          border-top: 1px solid gray;
    `  
    const PoperContener = styles.div`
          width:80%;
          margin: auto;
          display: flex;
          justify-content: space-between;
          padding:30px;

    `


    return(

        <FlexDiv>
          
          <HtmlTooltip
        title={
          <React.Fragment>
            <PooperDiv>
              <PoperContener>
              <div>
                <p>Clothing</p>
                <p>Curve</p>
                <p>Accessories</p>
                <p>Bestselling</p>
              </div>
              <div>
                <img src="https://img.faballey.com/images/newindrpdnnv2.jpg" alt=""/>
              </div>
              </PoperContener>
            </PooperDiv>
          </React.Fragment>
        }
      >
        <div className={style.btn}  style={{width:"60px"}}>NEW IN</div>
      </HtmlTooltip>
      <div style={{color: 'red',width:"100px"}} className={style.btn}>
        SUMMER' 22
      </div>

      <Clothing
        title={
          <React.Fragment>
            <PooperDiv>
              <PoperContener>
              <div>
                <p>Tops</p>
                <p>Dresses</p>
                <p>Skirts</p>
                <p>Bottoms</p>
                <p>Jeans</p>
                <p>Basics</p>
                <p>Classics</p>
                <p>Back To Work</p>
                <Typography variant="h6">
                SUMMER '22
                LOUNGEWEAR
                </Typography>
              </div>
              <div>
              <Typography variant="h6">
              SHOP BY OCCASION
                </Typography>
                <p>Party</p>
                <p>Vacation</p>
                <p>Work</p>
                <p>Loungewear</p>
                <Typography variant="h6">
                CURVE

                </Typography>
                <p>Tops</p>
                <p>Dresses</p>
                </div>
              <div>
                <img src="https://img.faballey.com/images/clothingdrpdnnv2.jpg" alt=""/>
              </div>
              </PoperContener>
            </PooperDiv>
          </React.Fragment>
        }
      >
        <div className={style.btn}><Link to={"/product"} style={{textDecoration:"none",color:"black"}}>CLOTHING</Link></div>
      </Clothing>

      <Tops
        title={
          <React.Fragment>
            <PooperDiv>
              <PoperContener>
              <div>
              <Typography variant="h6">
              SHOP BY STYLE
              </Typography>
                <p>Crop Tops </p>
                <p>Tank Tops</p>
                <p>T-Shirts</p>
                <p>Shirts</p>
                <p>Blouses</p>
                <p>Maxi Tops</p>
                <p>Peplum Tops</p>
                <p>Wrap Tops</p>
               
              </div>
              <div>
              <Typography variant="h6">
              SHOP BY TRENDS
              </Typography>
               <p> Floral Tops</p>
                <p>Striped Tops</p>
               <p>Polka Tops</p> 
               <p>Ruffled Tops</p> 
               <p> Lace Tops</p>
               <p>Embroidered Tops</p> 
               <p>Embellished Tops</p>         
                
               </div>
               <div>
              <Typography variant="h6">
              SHOP BY OCCASION
                </Typography>
                <p>Csual Top</p>
                <p>Party Top</p>               
                <p>Work Top</p>
               
               
                </div>
              <div>
                <img style={{width:"200px"}} src="https://img.faballey.com/images/topsdrpdnnv2.jpg" alt=""/>
              </div>
              </PoperContener>
            </PooperDiv>
          </React.Fragment>
        }
      >
        <div className={style.btn}>TOPS</div>
      </Tops>


      <Dresses
        title={
          <React.Fragment>
            <PooperDiv>
              <PoperContener>
              <div>
              <Typography variant="h6">
              SHOP BY STYLE
              </Typography>
                <p>Crop Tops </p>
                <p>Tank Tops</p>
                <p>T-Shirts</p>
                <p>Shirts</p>
                <p>Blouses</p>
                <p>Maxi Tops</p>
                <p>Peplum Tops</p>
                <p>Wrap Tops</p>
               
              </div>
              <div>
              <Typography variant="h6">
              SHOP BY TRENDS
              </Typography>
               <p> Floral Tops</p>
                <p>Striped Tops</p>
               <p>Polka Tops</p> 
               <p>Ruffled Tops</p> 
               <p> Lace Tops</p>
               <p>Embroidered Tops</p> 
               <p>Embellished Tops</p>         
                
               </div>
               <div>
              <Typography variant="h6">
              SHOP BY OCCASION
                </Typography>
                <p>Csual Top</p>
                <p>Party Top</p>               
                <p>Work Top</p>
               
               
                </div>
              <div>
                <img style={{width:"200px"}} src="https://img.faballey.com/images/dressesdrpdnnv2.jpg" alt=""/>
              </div>
              </PoperContener>
            </PooperDiv>
          </React.Fragment>
        }
      >
        <div className={style.btn}>DRESSES</div>
      </Dresses>
      <div style={{color: 'black',width:"100px"}} className={style.btn}>
        LOUNGEWEAR
      </div>
      <div style={{color: 'black',width:"100px"}} className={style.btn}>
        CURVE
      </div>
      <div style={{color: 'black',width:"100px"}} className={style.btn}>
        TRENDS
      </div>
      <div style={{color: 'black',width:"100px"}} className={style.btn}>
        LOOKS BOOKS
      </div>
      <div style={{color: 'black',width:"100px"}} className={style.btn}>
        SALE
      </div>
      <div style={{color: 'black',width:"120px"}} className={style.btn}>
        2 DRESS AT₹1800
      </div>
      <div style={{color: 'black',width:"100px"}} className={style.btn}>
        2 TOPS AT₹999
      </div>
        </FlexDiv>
    )
}



// style={{display: "flex", background:"white",width:"1000px",justifyContent:"space-between"}}