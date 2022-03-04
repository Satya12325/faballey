import React, { Component } from "react";
import Slider from "react-slick";
import styles from 'styled-components';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Carousel from "react-elastic-carousel";


function MediaControlCard({image,title,price,discount}) {
  
  
    return (
        <div style={{width:"100%",}}>
            <img style={{width: "100%", height: "400px"}} src={image} alt=""/>
            <div>{title}</div>
            <div>
            {price}
            {discount}
            </div>
      </div>
    );
  }

function SmallScroll(){

    


}




   
    

 




export default function BannerSlider(){
     
 
    

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 },
      ];


    return(
        <>
      
   <Carousel breakPoints={breakPoints} style={{backgroundColor:"black",marginTop:"80px"}}>
    <MediaControlCard
            image="https://img.faballey.com/images/banner/4678df20-49d5-4dc0-8645-3eacb584054d.jpg"
            

        />
        <MediaControlCard
            image="https://img.faballey.com/images/banner/66a79736-ed09-4f82-83bd-a2e6099f160e.jpg"
            

        />
       <MediaControlCard
            image="https://img.faballey.com/images/banner/4678df20-49d5-4dc0-8645-3eacb584054d.jpg"
            

        />
        
    </Carousel>


        
        </>
    )
}



