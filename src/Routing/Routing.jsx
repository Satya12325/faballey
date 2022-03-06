import React from 'react'
import {Routes,Link,Route} from "react-router-dom";
import { Cart_page } from '../Pages/Cart_page';
import  Home  from '../Pages/Home';

export const Routing = () => {
  return (
   

    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/cart" element={<Cart_page/>}/>
    </Routes>
  )
}
