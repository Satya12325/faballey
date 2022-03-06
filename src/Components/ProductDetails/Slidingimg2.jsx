import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styles from "./slidingimgs.module.css"
import { FaRupeeSign} from 'react-icons/fa';

export const Slidingimgs2 = () => {
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
        <p style={{textAlign:"center",fontWeight:"500",fontSize:"25px"}}>YOU MAY ALSO LIKE</p>
        <Carousel responsive={responsive} 
        infinite={true}  
        containerClass="carousel-container"
         itemClass="carousel-item-padding-40-px"
         focusOnSelect={true}
         autoPlay={false}
         autoPlaySpeed={10000}
         >
             <div className={styles.imgslide}><img style={{width: '100%', height: '100%'}} src="https://img.faballey.com/images/Product/DRS04733Z/1.jpg"/>
             <p className={styles.productname}>Yellow Summer Dresss</p>
             <p className={styles.productprice}><FaRupeeSign/>1444</p></div>
            <div className={styles.imgslide}><img style={{width: '100%', height: '100%'}} src="https://img.faballey.com/images/Product/TOP05745Z/1.jpg"/>
            <p className={styles.productname}>White Satin Strappy Textured Top</p>
            <p className={styles.productprice}><FaRupeeSign/>567</p></div>
            <div className={styles.imgslide}><img style={{width: '100%', height: '100%'}} src="https://img.faballey.com/images/Product/TOP05590Z/1.jpg"/>
            <p className={styles.productname}>Black Embellished Cutout Top</p>
            <p className={styles.productprice}><FaRupeeSign/>1299</p></div>
            <div className={styles.imgslide}><img style={{width: '100%', height: '100%'}} src="https://img.faballey.com/images/Product/DRS04820Z/1.jpg"/>
            <p className={styles.productname}>Multi Color Poplin Dress</p>
            <p className={styles.productprice}><FaRupeeSign/>999</p></div>
            <div className={styles.imgslide}><img style={{width: '100%', height: '100%'}} src="https://img.faballey.com/images/Product/DRS04857Z/1.jpg"/>
            <p className={styles.productname}>Pink Floral Jumpsuit</p>
            <p className={styles.productprice}><FaRupeeSign/>1444</p></div>
            <div className={styles.imgslide}><img style={{width: '100%', height: '100%'}} src="https://img.faballey.com/images/Product/DRS04837Z/1.jpg"/>
            <p className={styles.productname}>Pink Smocky Dress</p>
            <p className={styles.productprice}><FaRupeeSign/>799</p></div>
            <div className={styles.imgslide}><img style={{width: '100%', height: '100%'}} src="https://img.faballey.com/images/Product/BOT00601A/1.jpg"/>
            <p className={styles.productname}>Wine Skinny Leggins</p>
            <p className={styles.productprice}><FaRupeeSign/>1199</p></div>
            <div className={styles.imgslide}><img style={{width: '100%', height: '100%'}} src="https://img.faballey.com/images/Product/DRS04856Z/1.jpg"/>
            <p className={styles.productname}>Blue Floral Satin Jumpsuit</p>
            <p className={styles.productprice}><FaRupeeSign/>899</p></div>
            <div className={styles.imgslide}><img style={{width: '100%', height: '100%'}} src="https://img.faballey.com/images/Product/DRS04878Z/1.jpg"/>
            <p className={styles.productname}>Black Pleated Dress</p>
            <p className={styles.productprice}><FaRupeeSign/>1195</p></div>
        </Carousel>;
        </div>    
    </div>
  )
}