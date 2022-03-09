import React,{useState} from 'react'
import styles from "./right.module.css"
import { FaRupeeSign} from 'react-icons/fa';
import {Button} from "@mui/material";
import {FaRegHeart} from 'react-icons/fa';
import {FaPinterestP,FaTwitter,FaFacebookF} from 'react-icons/fa'
import Tooltip from '@mui/material/Tooltip';
import {TextField} from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export const Right = ({name,price,discount,size,handleCheck,handleAddCart,backColor}) => {
const [description,setDescription] = useState(true)
const [details,setDetails] = useState(false)
const [shipping,setShipping] = useState(false);
const [pin,setPin]=useState("")

const descriptionf = () => {
  setDescription(true)
  setDetails(false)
  setShipping(false)
}
const detailsf = () => {
  setDescription(false)
  setDetails(true)
  setShipping(false)
}
const shippingf = () => {
  setDescription(false)
  setDetails(false)
  setShipping(true)
}

  return (
    <div>
       <div className={styles.wrapper}>
         
           <div>
             <section className={styles.titletext}>{name}</section>
            
            <section style={{fontSize:"20px",display:"flex",marginBottom:"6px"}}><section style={{textDecoration:"line-through"}}><FaRupeeSign/>{price}</section>
                <section style={{color:"#fc6486"}}>
                    <FaRupeeSign/>{discount}
                </section>
                {"   "}
                &nbsp;
                <sup style={{fontSize:"13px"}}>(70% off)</sup>
            </section>
            
            <section style={{color:'#03bb5c',marginBottom:'6px',fontWeight:'600'}}>Inclusive of all taxes</section>
            <section className={styles.graytext} style={{fontSize:"12px",fontWeight:'600'}}>SKU: TOP05055Z</section>
             
             <h4 className={styles.boldtext} style={{margin:0,marginTop:"15px"}}>SIZE:{size} </h4>
            
            
            
              {/* <Button sx={{color:"black",borderColor:"gray",margin:"10px"}} variant="outlined">S</Button>
              <Button sx={{color:"black",borderColor:"gray",margin:"10px"}} variant="outlined">L</Button>
              <Button sx={{color:"black",borderColor:"gray",margin:"10px"}} variant="outlined">M</Button>
              <Button sx={{color:"black",borderColor:"gray",margin:"10px"}} variant="outlined">XL</Button> */}



              <div style={{marginTop:"20px"}}>
              {/* <Tooltip title="Body measurement:To fit Bust 34, waist 26" placement="top-start" arrow 
              sx={{bgcolor:"white",color:"gray"}}>
              <button className={styles.sizes}>S</button>
              </Tooltip>
              <Tooltip title="Body measurement:To fit Bust 36, waist 28" placement="top-start" arrow >
              <button className={styles.sizes}>M</button>
              </Tooltip>
              <Tooltip title="Body measurement:To fit Bust 38, waist 30" placement="top-start" arrow >
              <button className={styles.sizes}>L</button>
              </Tooltip>
              <Tooltip title="Body measurement:To fit Bust 40, waist 32" placement="top-start" arrow >
              <button className={styles.sizes}>XL</button>
              </Tooltip> */}

            {/* <Select
              style={{background:"tomato"}}
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={sizes}
              onChange={handleChange}
              >


            </Select> */}



                </div>



                <br/>
              {/* <Button sx = {{backgroundColor:"#fc6486",color:"white",width:"175px"}} variant="contained">Add to Bag</Button>
              <Button sx={{color:"black",borderColor:"gray",margin:"10px"}} variant="outlined">Add to wishlist</Button> */}
              <div className={styles.bagbuttonsdiv}>
              <button className={styles.bagbutton} style={{backgroundColor:{backColor}}} onClick={handleAddCart}>ADD TO BAG</button>
              <button className={styles.wishlistbutton}><FaRegHeart/>&nbsp;ADD TO WISHLIST</button>
              </div>


              <section className={styles.offers}>
                <p className={styles.boldtext}>Offers You Don't Want To Miss</p>
                <hr className={styles.horizontalline}/>
                <p className={styles.boldtext}>Get it for <FaRupeeSign/>191 use code EXTRA25</p>
                <p className={styles.offergray}>Avail 25 % off on orders above <FaRupeeSign/>3000</p>
                <hr className={styles.horizontalline}/>
                <p className={styles.boldtext}>Get it for <FaRupeeSign/>217 Use code EXTRA15</p>
               
                <p className={styles.offergray}>Avail 15 % off on orders above <FaRupeeSign/>2000</p>
                

              </section>

              <div className={styles.checkpin}>
                <section style={{fontWeight:"500"}}>Check Pin Code Serviceability</section>  <br/>
               <div className={styles.pinboxDiv}>
                <input type = "number" placeholder="Enter Pin Code" className={styles.pinbox} value={pin} onChange={(e)=>setPin(e.target.value)}/>
                <button className={styles.pinboxBtn}
                  onClick={(pin)=>handleCheck(pin)}
                >Check</button>
               </div>
                {/* <TextField fullwidth variant = "outlined" placeholder="Enter your pincode"/> */}
                <p className={styles.checkpintext}>
                
                  <p className={styles.pindeets}>Enter PIN code to check availability in your area.</p>
                  

                 <p className={styles.pindeets}>Cash on delivery available</p> 

                   <p className={styles.pindeets}> 15 days return/exchange on all non-mask products</p>

                  <p className={styles.pindeets}>Return/Exchange not applicable on Masks</p> 
                  </p>

              </div>
            
              <div className={styles.lastinright}>
                <div className={styles.buttonstyle}>
              <button className={styles.buttonb} onClick={() => descriptionf()}>Description</button>
              <button className={styles.buttonb} onClick={() => detailsf()}>Details</button>
              <button className={styles.buttonb} onClick={() => shippingf()}>Shipping</button>
              </div>
              <div className={styles.descriptionb}>
                {description ? 
                <p >
                  This sexy cut out crop top will define your tiny waist like no other. Featuring full 
                  sleeves and an easy throw on wear.<br/><br/>
                   Work It - Pair this ravishing piece with a blue midi skirt.
                </p> : details ? 
                <p>
                  Material: Cotton Jersey<br/>
                  Easy Throw On Wear<br/>
                  Cut Out Detail<br/>
                  Length: 15"<br/><br/>
                  
                  Please note that the above measurements are garment measurements and not to-fit, body measurements. 
                    Refer to our Size Guide for more details<br/><br/>
                    Quantity - 1N<br/>
                    Country of Origin : India<br/>
                   <p className={styles.boldtextlast}> Manufactured and Packed by</p>
                    High Street Essentials Private Limited<br/>
                    C-11, Sector 7, District Gautam Budh Nagar, Noida 201301, Uttar Pradesh, India
                    <p className={styles.boldtextlast}>For Customer Queries</p>
                    Grievance Redressal Officer<br/>
                    C-11, Sector 7, District Gautam Budh Nagar, Noida 201 301, Uttar Pradesh, India<br/>
                    Phone : +91-8929987349 / 0120-6850262<br/>
                    Email : customercare@faballey.com<br/><br/>


                    NOTE: There might be a slight variation in the shade of the actual product 
                    and the image shown on the screen, due to the screen resolution and photography effects.</p> : shipping? 
                    <p>Dispatch: Within 48-72 Hours<br/>
                    Delivery time within India - 4-6* business days<br/>
                    International delivery time - 7-12* business days<br/>
                    *Note: Delivery of orders may take longer due to region-wise lockdown and diversion of routes.<br/>
                    Return/Exchange: If you are not completely satisfied with your purchase, simply select the option of return/exchange within 
                    15 days of receiving your order from your order details page and we will process your return, no questions asked.</p> 
                    :<p>
                    This sexy cut out crop top will define your tiny waist like no other. Featuring full sleeves and an easy throw on wear.

                    Work It - Pair this ravishing piece with a blue midi skirt</p>}
               
              </div>
              <div className={styles.socialicons}><FaPinterestP/>&nbsp;<FaTwitter/>&nbsp;<FaFacebookF/></div>
              </div>
              

           </div>
         

       </div>
    </div>
  )
}