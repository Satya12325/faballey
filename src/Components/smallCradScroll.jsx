import React, { Component } from "react";
import Slider from "react-slick";
import styles from "styled-components";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Carousel from "react-elastic-carousel";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import { useEffect } from "react";
import { getProductRequest, getProduct } from "../Redux/Allproduct/action";

function MediaControlCard({ image}) {
  return (
    <div style={{ fontSize: "13px", textAlign: "start", fontWeight: "bold" , margin:"10px"}}>
      <img style={{ width: "100%", height: "300px" }} src={image} alt="" />
     
    </div>
  );
}

function SmallScroll() {}

export default function SmallCradScroll() {


    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 4 },
        { width: 768, itemsToShow: 5 },
        { width: 1200, itemsToShow: 6 },
      ];
  var cards = [
    "https://img.faballey.com/images/banner/540d16c6-9019-4c25-9329-fca7d3bb26fc.jpg",
    "https://img.faballey.com/images/banner/4e26867c-9466-4bee-b67c-9092e22fe0f9.jpg",
    "https://img.faballey.com/images/banner/03ee9818-e0e9-44a6-a903-d9150fddeaba.jpg",
    "https://img.faballey.com/images/banner/66fded3d-247a-4ef6-bac0-4f36b4fb7a20.jpg",
    "https://img.faballey.com/images/banner/35773160-955b-47cf-a403-a75ba77fdca6.jpg",
    "https://img.faballey.com/images/banner/56d49908-58ad-4900-96dd-7f867925fd2c.jpg",
  ];
  return (
    <>
      <div></div>
      <Carousel breakPoints={breakPoints} style={{ marginTop: "10px" }}>
        {cards.map((item) => {
         return <MediaControlCard
           
            image={item}
            
          />
          console.log(item)
})}
      </Carousel>
    </>
  );
}
