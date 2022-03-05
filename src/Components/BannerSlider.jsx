import React, { Component } from "react";
import Slider from "react-slick";
import styles from 'styled-components';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Carousel from "react-elastic-carousel";
import style from "./Component.module.css";




function MediaControlCard({image}) {
  
  
    return (
        <div style={{width:"100%",}}>
            <img style={{width: "100%",}} src={image} alt=""/>
      </div>
    );
  }

function SmallScroll(){

    


}




   
    

 




export default function BannerSlider(){
     
 
    

    const breakPoints = [
      { width: 1, itemsToShow: 1 },
     
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