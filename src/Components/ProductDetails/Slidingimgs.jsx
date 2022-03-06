import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styles from "./slidingimgs.module.css"
import { FaRupeeSign} from 'react-icons/fa';

export const Slidingimgs = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 6
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2
        }
      };
  return (
    <div >
        <div className={styles.wrapper}>
        <p style={{textAlign:"center",fontWeight:"500",fontSize:"25px"}}>SIMILAR PRODUCTS</p>
        <Carousel responsive={responsive} 
        infinite={true}  
        containerClass="carousel-container"
         itemClass="carousel-item-padding-40-px"
         focusOnSelect={true}
         autoPlay={false}
         autoPlaySpeed={10000}
         >
             <div className={styles.imgslide}><img style={{width: '100%', height: '100%'}} src="https://img.faballey.com/images/Product/FCO00076Z/1.jpg"/>
             <p className={styles.productname}>Black Top and Pant Set</p>
             <p className={styles.productprice}><FaRupeeSign/>1444</p></div>
            <div className={styles.imgslide}><img style={{width: '100%', height: '100%'}} src="https://img.faballey.com/images/Product/FCO00016Z/1.jpg"/>
            <p className={styles.productname}>Black Crop Top</p>
            <p className={styles.productprice}><FaRupeeSign/>567</p></div>
            <div className={styles.imgslide}><img style={{width: '100%', height: '100%'}} src="https://img.faballey.com/images/Product/CTP00625D/1.jpg"/>
            <p className={styles.productname}>CURVE Floral Lace Top</p>
            <p className={styles.productprice}><FaRupeeSign/>1299</p></div>
            <div className={styles.imgslide}><img style={{width: '100%', height: '100%'}} src="https://img.faballey.com/images/Product/TOP05792Z/1.jpg"/>
            <p className={styles.productname}>Floral Garden Top</p>
            <p className={styles.productprice}><FaRupeeSign/>999</p></div>
            <div className={styles.imgslide}><img style={{width: '100%', height: '100%'}} src="https://img.faballey.com/images/Product/DRS04752Z/1.jpg"/>
            <p className={styles.productname}>Rainbow Dress</p>
            <p className={styles.productprice}><FaRupeeSign/>1444</p></div>
            <div className={styles.imgslide}><img style={{width: '100%', height: '100%'}} src="https://img.faballey.com/images/Product/TOP05768Z/1.jpg"/>
            <p className={styles.productname}>Floral Purple Top</p>
            <p className={styles.productprice}><FaRupeeSign/>799</p></div>
            
            <div className={styles.imgslide}><img style={{width: '100%', height: '100%'}} src="https://img.faballey.com/images/Product/TOP05773Z/1.jpg"/>
            <p className={styles.productname}>Green Top With Straps</p>
            <p className={styles.productprice}><FaRupeeSign/>899</p></div>
            <div className={styles.imgslide}><img style={{width: '100%', height: '100%'}} src="https://img.faballey.com/images/Product/DRS04878Z/1.jpg"/>
            <p className={styles.productname}>Black Dress</p>
            <p className={styles.productprice}><FaRupeeSign/>1195</p></div>
        </Carousel>;
        </div>    
    </div>
  )
}