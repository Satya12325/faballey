import React from 'react'
import {Routes,Link,Route} from "react-router-dom";
import { BasicModal } from '../Components/Login/Otp';
import  Home  from '../Pages/Home';
import Products from "../Components/Allproduct/Product"

export const Routing = () => {
  return (
   

    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/otp" element={<BasicModal/>}></Route>
        <Route path="/product" element={<Products/>}></Route>
    </Routes>
  )
}
