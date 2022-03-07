import React from 'react'
import Cartfooter from './Cartfooter'
import { CartHeader } from './CartHeader'
import styles from './Payment.module.css'
import { useDispatch,useSelector } from 'react-redux'
import { cartapi ,delete_api} from '../../Redux/Shopping_cart/cart.api';
import {useNavigate} from "react-router-dom"
import { useEffect } from 'react'
import PaymentSucess from "./PaymentSucess"


export const Payment = () => {

      
  const dispatch = useDispatch();
  const neviget = useNavigate();
  useEffect(()=>{
    dispatch(cartapi())
  },[])

  const {isLoading,isError,cart} = useSelector((state)=>state.shoppingCart)
  const total_sum = cart.reduce((acc,current)=>{
    return(
      acc+current.discount *current.quantity
    )
  
  },0)

//   const handlePay = ()=>{

//     alert("payment sucessfully received")
//     dispatch(delete_api(cart.id))
//     neviget("/")
//   }
    return (
        <div>
            <CartHeader />
            <div className={styles.paymentcontainer}>
                <div className={styles.paymenttitleleft}>
                    <div className={styles.paymentheading}>
                        <p>Choose Payment Mode</p>
                    </div>
                    {/* ----------------- */}
                    <div className={styles.paymentmethodlist}>
                        <button type="button" className={styles.active}>
                            CREDIT/DEBIT CARD
                        </button>
                        <button type="button" className={styles.btnmethod}>
                            UPI
                        </button>
                        <button type="button" className={styles.btnmethod}>
                            NET BANKING
                        </button>
                        <button type="button" className={styles.btnmethod}>
                            MOBILE WALLETS
                        </button>
                        <button type="button" className={styles.btnmethod}>
                            CASH ON DELIVERY
                        </button>
                    </div>
                    {/* -------------- */}
                    <div className={styles.paymentform}>
                        <h3>CREDIT/DEBIT CARD</h3>
                        <div className={styles.paymentcreditsection}>
                            <input
                                type="text"
                                placeholder="XXXX  XXXX  XXXX  XXXX"
                                className={styles.cardnumber}

                            />
                            <input
                                type="text"
                                placeholder="Cardholder Name"
                                className={styles.cardname}

                            />

                            <div className={styles.carddetails}>
                                <div className={styles.cardmonthitem}>
                                    <input type="text" placeholder="MM" className={styles.cardmonth}



                                    />
                                </div>
                                <div className={styles.cardyearitem}>
                                    <input type="text" placeholder="YY" className={styles.cardyear}



                                    />
                                </div>
                                <div className={styles.cardcvvitem}>
                                    <input type="text" placeholder="CVV" className={styles.cardcvv}



                                    />
                                </div>
                            </div>
                        </div>

                        <PaymentSucess/>
                        {/* <button type="submit" className={styles.btnpayment} 
                            onClick={handlePay}
                        >
                            Pay Now
                        </button> */}
                    </div>

                </div>
                {/* ------------------------------right section------------------------------------------- */}
               

                <div className={styles.productdetails}>
                    <h3>1 product(s) in Bag</h3>

                    <div className={styles.optionBox}>
                        <div className={styles.przdlmain}>
                            <div className={styles.prizeDetailbox}>
                                <div className={styles.prizeDetail}>
                                    <p>Sub Total</p>
                                    <span>
                                        &#8377;  {total_sum}
                                    </span>
                                </div>
                                <div className={styles.prizeDetail} style={{ display: "none" }}>
                                    <p className={styles.bagdislbl}>Bank Discount</p>
                                    <span className={styles.bagdislbl}>-
                                        &#8377;
                                        <span >0</span></span>
                                </div><div className={styles.prizeDetail} >
                                    <p>Shipping</p><span>&#8377;50</span>
                                </div>
                                <div className={styles.prizeDetail} style={{ display: "none" }}><p>COD</p>
                                    <span>&#8377;
                                        <span > 0</span>
                                    </span></div>
                                <div className={styles.orderTotal}><p>Total payable</p>
                                    <span>&#8377;
                                        <span  > {total_sum + 50} </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ----------------middle-section------------------ */}

                    <div className={styles.ptmchngeAdrs}>
                        <h3 >Deliver To</h3>
                        <p >
                            <a href="#a">Change Address</a>
                        </p>
                    </div>

                    <div className={styles.deliverAddres}>
                        <div className={styles.dlveAdrsbox}>
                            <p>Prasad <br />
                                Basaweshwara Nagar B bLock, Haveri, Karnataka
                                <br /> India - 581110
                            </p>
                            <p>Mobile
                                <b>9066008928</b>
                            </p>
                        </div>
                    </div>

                    {/*------------------------------bottom-section-------------- */}
                    <p className={styles.shipdays}>Estimated Delivery Time
                        <br /><br /> India : 4-6 business days.<br />
                        International: 7-12 business days.</p>
                </div>
                <div className={styles.bagftsecure}>
                    <div className={styles.securessl}>
                        <p>
                            <i class="fal fa-lock-alt"></i> Secure SSL Encryption</p>
                        <p>
                            <i class="fal fa-shield-check"></i> Guaranteed Safe Checkout</p>
                    </div>
                    <img src="https://img.faballey.com/images/pmticonswebdesk.png" alt="image"/>

                </div>


            </div>
            <Cartfooter />
        </div>
    )
}