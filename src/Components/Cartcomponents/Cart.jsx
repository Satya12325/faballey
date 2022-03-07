import React from 'react'
import { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { cartapi } from '../../Redux/Shopping_cart/cart.api';
import { CartList } from './CartList';
import styles from "./cart.module.css"
import { AiFillPlusCircle } from 'react-icons/ai';
import { MdArrowLeft } from 'react-icons/md';
import {useNavigate} from "react-router-dom"
import {CartHeader} from "./CartHeader";
import Cartfooter from "./Cartfooter";
import { LoginModal } from '../Login/Login'


export const Cart = () => {
  const dispatch = useDispatch();
  const neviget = useNavigate();
  useEffect(()=>{
    dispatch(cartapi())
  },[])
  
  const {isLoading,isError,cart} = useSelector((state)=>state.shoppingCart)
  const {isLogin} = useSelector((state)=>state.auth)
  const total_sum = cart.reduce((acc,current)=>{
    return(
      acc+current.discount *current.quantity
    )
  
  },0)
  console.log(cart,"cart")

  const handleClick = ()=>{
    neviget("/shipping")
  }


  return (
      <>
     
       <CartHeader/>
       {isLogin ?( <div  className={styles.main}> 
         <div className={styles.left}>
         <h2 className={styles.coloer}>My Shopping Bag<span >({cart.length})</span></h2>
        <div>
        
          {cart.map((item)=>{
            return(
              <CartList key={item.id} item={item}/>
            )
          })}
        </div>
        <div className={styles.continue_shop}>
           <p onClick={()=>{neviget("/product")}}><MdArrowLeft/>Continue Shopping</p>
           <p>Add more from wishlist</p>
         </div>
         </div>

         <div className={styles.right}>
           <h3 className={styles.coloer}>Price Details</h3>
           <div className={styles.right_main}>
             <div  style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
             <h4 style={{marginBottom:"0"}}>Donation</h4>
             <input className={styles.donation_input} type="checkbox"/>
             </div>
          
             <p style={{marginTop:"0"}}>Extra ₹ 10(This donation is towards NGO Ssrishti that is providing food and hygiene essesntials to migrant labors during the COVID-19 lockdown)</p>
          <div className={styles.coupon_btn}>
          <AiFillPlusCircle/> <h5>Apply Coupon</h5>
           </div>

           <div className={styles.redeem_btn}>
           <AiFillPlusCircle/> <h5>Redeem Gift Card</h5>
           </div>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",borderTop: "1px solid lightgray",
    borderBottom: "1px solid lightgray"}}>
        <h5 className={styles.subtotal_box}>Sub Total</h5>
        <h5 className={styles.subtotal_box}>₹{total_sum}</h5>
        </div>
        
           <div style={{display:"flex",justifyContent:"space-between",alignItems:"center", borderTop: "1px solid lightgray",
    borderBottom: "1px solid lightgray"}}>
           <h5 className={styles.total_box}>Total</h5> 
           <h5 className={styles.total_box}>₹{total_sum}</h5>
           </div>
          
          
           <button className={styles.placeorder_btn} onClick={handleClick}>Place Order</button>
         
           </div>
           <div className={styles.estimated}>
           <p>Estimated Delivery Time</p>
          <p>India 4-6 business days.<br/>
          International 7-12 business days</p>
           </div>
           

         </div>
       
       </div>) : (
        <div className={styles.notlogindiv}>
          <p className={styles.continue_shopping} onClick={() => neviget("/product")}><MdArrowLeft/>Continue Shopping</p>
        
          <img className={styles.bag_logo} src="/Images/emtbag.png"  alt="cart"/>
          <p className={styles.noproduct}>There are no products in your bag.</p>
          <span className={styles.login1}><LoginModal name ={"Login to your product"}/></span>
          
        </div>
       )
     
       }
     <Cartfooter/>
      </>
   
  )
}