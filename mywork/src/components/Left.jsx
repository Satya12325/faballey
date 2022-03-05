import React from 'react'
import styles from "./left.module.css";
import {Box} from "@mui/material"
import { Right } from './Right';

export const Left = ({items}) => {
  return (
    <div className= {styles.mainwrapper}>
      <div className = {styles.leftwrapper}>
        {items.map((item) => (
            <Box  className = {styles.imgwrapper} sx={{
                display: 'grid',
                columnGap: 1,
                rowGap: 4,
                gridTemplateColumns: 'repeat(2, 1fr)',
              }}>
                  <img src={item.image1} alt = "image1" className={styles.image}></img>
                  <img src={item.image2} alt = "image2" className={styles.image}></img>
                  <img src={item.image3} alt = "image3" className={styles.image}></img>
                  <img src={item.image4} alt = "image4" className={styles.image}></img>
                  <img src={item.image1} alt = "image5" className={styles.image}></img>

            </Box>
        ))}
        </div>
        <div>
        <Right items={items}/>
        
        </div>
        
    </div>
  )
}
