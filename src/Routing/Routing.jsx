import React from 'react'
import {Routes,Link,Route} from "react-router-dom";
import { BasicModal } from '../Components/Login/Otp';
import  Home  from '../Pages/Home';

export const Routing = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/otp" element={<BasicModal/>}></Route>
    </Routes>
  )
}
