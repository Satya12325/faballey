import React from 'react'
import styles from "./left.module.css";
import {Box} from "@mui/material"
import { Right } from './Right';

export const Left = ({image,price,size,discount,name,image2,handleCheck,handleAddCart,backColor}) => {
  return (
    <div className= {styles.mainwrapper}>
      <div className = {styles.leftwrapper}>
        
            <Box  className = {styles.imgwrapper} sx={{
                display: 'grid',
                columnGap: 3,
                rowGap: 3,
                gridTemplateColumns: 'repeat(2, 1fr)',
              }}>
                  <img src={image} alt = "image1" className={styles.image}></img>
                  <img src={image2} alt = "image2" className={styles.image}></img>
                  <img src={image} alt = "image3" className={styles.image}></img>
                  <img src={image2} alt = "image4" className={styles.image}></img>
                  <img src={image} alt = "image5" className={styles.image}></img>

            </Box>
      
        </div>
        <div>
        {/* <Right
        price={price}
        size={size}
        discount={discount}
        name={name}
        handleCheck={handleCheck}
        handleAddCart={handleAddCart}
        backColor={backColor}
        />
         */}
        </div>
        
    </div>
  )
}