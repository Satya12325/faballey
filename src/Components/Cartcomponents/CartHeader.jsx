import React from 'react'
import Cartfooter from './Cartfooter'
import styles from "./CartHeader.module.css"
import {Link} from "react-router-dom"
export const CartHeader = () => {
    return (
        <div className={styles.chkHeadmain}>
            <div className={styles.ulbagMain}>
                <Link to={`/`}><div className={styles.checkoutLogo}>

                    <img src='https://www.faballey.com/images/logo.png' />
                </div></Link>
                <div className={styles.shopingStep}>
                <div className={styles.stepActive}>
                        <i class="fa fa-shopping-cart"style={{color:"#adadad"}} ></i>
                        Bag
                    </div>
                    <div>
                        <i class="fa fa-sign-in" style={{color:"#adadad"}}></i>
                        Login
                    </div>

                    <div>
                        <i class="fa fa-truck" style={{color:"#adadad"}}></i>
                        Shipping
                    </div>
                    <div className={styles.paymentPink}>
                        <i class="fa fa-credit-card" ></i>
                        Payment
                    </div>

                </div>
                <div className={styles.secureBox}><i class="fa fa-user" style={{color:"#adadad"}}></i>&nbsp;Guest</div>
            </div>


        </div>
    )
}