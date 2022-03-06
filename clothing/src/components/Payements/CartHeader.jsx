import React from 'react'
import Cartfooter from './Cartfooter'
import styles from "./CartHeader.module.css"
export const CartHeader = () => {
    return (
        <div className={styles.chkHeadmain}>
            <div className={styles.ulbagMain}>
                <div className={styles.checkoutLogo}>

                    <img src='https://www.faballey.com/images/logo.png' />
                </div>
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
                        <i class="fa fa-credit-card" style={{color:"#fc6486"}}></i>
                        Payment
                    </div>

                </div>
                <div className={styles.secureBox}><i class="fa fa-user" style={{color:"#adadad"}}></i>&nbsp;Guest</div>
            </div>


        </div>
    )
}
