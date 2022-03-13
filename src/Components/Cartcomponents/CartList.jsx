import React from 'react'
import styles from "./cart.module.css";
import { MdDelete} from 'react-icons/md';
import { useDispatch} from 'react-redux';
import { delete_api } from '../../Redux/Shopping_cart/cart.api';
export const CartList = ({item}) => {

  const dispatch = useDispatch();
  const {id,color,discount,quantity,price,productName,image,sizes} = item;

  return (
    <>
  <div >
    <div >
        <div className={styles.left_main}>
            <img className={styles.img} src={image} />

         <div className={styles.left_box1}>
           <div className={styles.title}>
           <p>{productName}</p>
           
            <div style={{display : "flex", gap : "1vh",alignItems:"center"}}>
              <span>₹</span>
              <p  className={styles.price}>{price}</p>
              <p className={styles.discount}>{discount}</p>
            </div>
           </div>
            
            <div className={styles.left_box2}>
              <p style={{textTransform: "uppercase"}}>{` Size: ${(sizes[0])}`}</p>
              <p>{`Qty: ${quantity}`}</p>
              <p>{`Color: ${color}`}</p>
            </div>
            <p>SKU CODE : {id}</p>
            <div className={styles.left_box3}>
              <span style={{display : "flex", gap: "2vh"}}>
              <p>Edit Item</p>
              <p>Move to Wishlist</p>
                </span>
            
              <span onClick={()=>dispatch(delete_api(id))}>< MdDelete/></span>
            </div>
        </div>
        </div>
  </div>
 
  </div>
  
    </>
  )
}