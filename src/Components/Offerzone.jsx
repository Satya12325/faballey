import React, { Component } from "react";
import Slider from "react-slick";
import styles from 'styled-components';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Carousel from "react-elastic-carousel";
import {useSelector,useDispatch,shallowEqual} from "react-redux";
import {Link} from "react-router-dom"
import {useEffect} from "react";
import {getProductRequest,getProduct} from "../Redux/Allproduct/action";





function MediaControlCard({image,productName,price,discount}) {
  
  
    return (
         <Link to={"/cart"}><div style={{fontSize: "13px",textAlign:"start",fontWeight:"bold",margin:"10px"}}>
            <img style={{width: "100%", height: "300px"}} src={image} alt=""/>
            <div >{productName}</div>
            <div style={{color:"red"}}>
           ₹ {price}             
            </div>
      </div></Link>
    );
  }

function SmallScroll(){

    


}




   
    

 




export default function Offerzone(){
    const dispatch = useDispatch();

    const {product,isLooding} = useSelector(
        (state) => state.app,
        shallowEqual
        );
 
   
    const getProducts = ()=>{
        const requestAction = getProductRequest();
        dispatch(requestAction);
        return fetch(`https://fabaly-product-api.onrender.com/cart`)
        .then((response) => response.json())
        .then((response) => {
            console.log(response)
            const successAction = getProduct(response)
            dispatch(successAction);
        })
        .catch((error) => {
            console.log(error);
        })
    };

    useEffect(() => {
        getProducts();
    },[]);





    const breakPoints = [
        { width: 1200, itemsToShow: 1 },
        { width: 550, itemsToShow: 5 },
        { width: 768, itemsToShow: 5 },
        { width: 1200, itemsToShow: 6 },
      ];


    return(
        <>
      <div>
      
      </div>
   <Carousel breakPoints={breakPoints}>
   {
       product?.map((item) => (
           <MediaControlCard
           key={item.id}
            image={item.image}
            productName={item.productName}
           price={item.price}
           discount={item.discount}
           />
       ))
   }
        
    </Carousel>


        
        </>
    )
}



