import React from 'react'
import {Routes,Link,Route} from "react-router-dom";
import { BasicModal } from '../Components/Login/Otp';
import  Home  from '../Pages/Home';
import Products from "../Components/Allproduct/Product";
import Shipping from "../Components/Cartcomponents/Shipping";
import {ProductDetails} from "../Components/ProductDetails/ProductDetails";
import { Cart_page } from '../Pages/CartPAge';
import { Payment} from "../Components/Cartcomponents/Payment"



export const Routing = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/otp" element={<BasicModal/>}></Route>
        <Route path="/product" element={<Products/>}></Route>
        <Route path="/shipping" element={<Shipping/>}></Route>
        <Route path="/product/:id" element={<ProductDetails/>}></Route>
        <Route path="/cart" element={<Cart_page/>}/>
        <Route path="/payment" element={<Payment/>}/>
    </Routes>
  )
}
