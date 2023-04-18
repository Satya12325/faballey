import { NavLink,Link } from "react-router-dom"
import { useEffect, useState } from "react"
import styles from"./Products.module.css";
import { Sidebar } from "./Sidebar";
import Navbar from "../../Navbar/Navbar";
import {useSelector,useDispatch,shallowEqual} from "react-redux";

import {getProductRequest,getProduct} from "../../Redux/Allproduct/action";
import Footer from '../Footer'

export default function  Products(){

    const dispatch = useDispatch();

    const {product,isLooding} = useSelector(
        (state) => state.app,
        shallowEqual
        );
 




const [data,setData]= useState([])
// const [images,setImages]=useState(true)
const [state,setState] =useState([])
// useEffect(()=>{
// pro1()
// },[])



const getProducts = ()=>{
    const requestAction = getProductRequest();
    dispatch(requestAction);
    return fetch(`https://fabaly-product-api.onrender.com/products`)
    .then((response) => response.json())
    .then((response) => {
        console.log(response)
        const successAction = getProduct(response)
        dispatch(successAction);
        setData(response)
        setState(response)
    })
    .catch((error) => {
        console.log(error);
    })
};

useEffect(() => {
    getProducts();
},[]);






    // const pro1 =async()=>{
    //       let user = await fetch("http://localhost:3000/products")
    //       let bali =await user.json();
    //       setData(bali)
    //       setState(bali)
    // }


    // const changeStatus=(id)=>{
    //     const updateList = data.map((e)=>{
    //         if(e.id===id){
    //             e.images=!e.images
    //              }
    //              return e
    //     })
    //     setImages(updateList)
    //    }


       const handleHightoLow = (e)=>{

           const option=e.target.value;
           if(option==="hightolow"){
            const updatelist =    [...data].sort((a,b)=>  +(b.price-b.discount) - +(a.price-a.discount))
            setState(updatelist)
           }
           if(option==="lowtohigh"){
            const updatelist =    [...data].sort((a,b)=>  +(a.price-a.discount) - +(b.price-b.discount))
            setState(updatelist)
           }
        }

        const sizeadjust =(e)=>{
            const option=e.target.value;
            if(option == "l"){
                const updatelist = data.filter((ev)=>ev.size===option )
                setState(updatelist)
            }
            if(option == "m"){
                const updatelist = data.filter((ev)=>ev.size===option )
                setState(updatelist)
            }
            if(option == "s"){
                const updatelist = data.filter((ev)=>ev.size===option )
                setState(updatelist)
            }
            if(option == "xl"){
                const updatelist = data.filter((ev)=>ev.size===option )
                setState(updatelist)
            }
            if(option == "xxl"){
                const updatelist = data.filter((ev)=>ev.size===option )
                setState(updatelist)
            }

        }

        const colorsAll = (e)=>{

            const option=e.target.value;

                  if(option==="blue"){
                 const updatelist = data.filter((ev)=>ev.color===option )
                  setState(updatelist)

                  }

                  if(option==="pink"){
                    const updatelist = data.filter((ev)=>ev.color===option )
                    setState(updatelist)

                     }

                if(option==="red"){
                        const updatelist = data.filter((ev)=>ev.color===option )
                        setState(updatelist)
                         }

                if(option==="green"){
                            const updatelist = data.filter((ev)=>ev.color===option )
                            setState(updatelist)
                             }

                 if(option==="yellow"){
                                const updatelist = data.filter((ev)=>ev.color===option )
                                setState(updatelist)
                                 }
                if(option==="maroon"){
                                    const updatelist = data.filter((ev)=>ev.color===option )
                                     setState(updatelist)
                                     }


         }


        const handlePricesort=(e)=>{
            const option=e.target.value;

            if(option==="fivehundred"){
                const updatelist = data.filter((ev)=>ev.price-ev.discount>500 && ev.price-ev.discount <=1000)
                 setState(updatelist)
                 }

                 if(option==="onethousandone"){
                    const updatelist = data.filter((ev)=>ev.price-ev.discount>1001 && ev.price-ev.discount <=1500)
                     setState(updatelist)
                     }

                     if(option==="fifteenhundred"){
                        const updatelist = data.filter((ev)=>ev.price-ev.discount>1501 && ev.price-ev.discount <=2000)
                         setState(updatelist)
                         }

                         if(option==="twothousand"){
                            const updatelist = data.filter((ev)=>ev.price-ev.discount>2001 && ev.price-ev.discount <=3000)
                             setState(updatelist)
                             }
        }


         const handleDiscount=(e)=>{
             const option=e.target.value;
            if(option==="ten"){
                const updatelist = data.filter((ev)=>(ev.discount/ev.price)*100 <=20 && (ev.discount/ev.price)*100>10 )
                 setState(updatelist)
                 }

        if(option==="twenty"){
         const updatelist = data.filter((ev)=>(ev.discount/ev.price)*100 <=30 && (ev.discount/ev.price)*100>21 )
          setState(updatelist)
          }

          if(option==="thirty"){
            const updatelist = data.filter((ev)=>(ev.discount/ev.price)*100 <=40 && (ev.discount/ev.price)*100>31 )
             setState(updatelist)
             }

             if(option==="forty"){
                const updatelist = data.filter((ev)=>(ev.discount/ev.price)*100 <=50 && (ev.discount/ev.price)*100>41 )
                 setState(updatelist)
                 }
         }


      const handleImages=(id)=>{

            const updatelist = state.map((e)=>{
                if(e.id===id){
                 e.status=!e.status
                }
                return e

            })
            setState(updatelist)
         }





    return(

  <>
  {/* <BothNavbar></BothNavbar> */}
        <Navbar/>

   <div className={styles.belowcolms3div}>
      Home | Clothing
   </div>


   <div className={styles.mainproductpage}>


        <div className={styles.sidebar}>
         {/* <h1>CLOTHING</h1>
         <hr></hr>
         <h3 id="for-color-clothing">CLOTHING</h3>
         <hr></hr>
         <h3>EXCLUSIVES</h3>
         <hr></hr>
         <h3>ACCESSORIES</h3>
         <hr></hr>
         <h3>CURVE</h3>
         <hr></hr>
         <h3>#TRENDING</h3>
         <hr></hr> */}
        <Sidebar />
        </div>






    <div className={styles.filtroContainer}>
        <div className={styles.below2ndnavbardiv} >
                <select className={styles.forsizefilter} onChange={sizeadjust}>
                   <option value="size">Size</option>
                   <option value="m">M</option>
                   <option value="s">S</option>
                   <option value="l">L</option>
                   <option value="xl">XL</option>
                   <option value="xxl">XXL</option>
                </select>
               <select className={styles.forcolorsfilter}onChange={colorsAll}>
                   <option value="all"> Colour</option>
                   <option value="red">Red</option>
                   <option value="green">Green</option>
                   <option value="blue">Blue</option>
                   <option value="pink">Pink</option>
                   <option value="maroon">Maroon</option>
                   <option value="yellow">Yellow</option>
               </select>
               {/* Occasional wear */}
               <select className={styles.forsizefilter}>
                   <option value="size">Occasion</option>
                   <option value="m">Casual Wear</option>
                   <option value="s">Party Wear</option>
                   <option value="l">Work Wear</option>
               </select>
               <select className={styles.forsizefilter}>
                   <option value="size">Fabric</option>
                   <option value="m">Georgette</option>
                   <option value="s">Crepe</option>
                   <option value="l">Poly Lycra</option>
               </select>
               <select className={styles.forsizefilter}>
                   <option value="size">Pattern</option>
                   <option value="m">Solid</option>
                   <option value="s">Floral</option>
                   <option value="l">Striped</option>
               </select>
               <select className={styles.forsizefilter}>
                   <option value="size">Trend</option>
                   <option value="m">Off Shoulder</option>
                   <option value="s">Bell Sleeves</option>
                   <option value="l">Ruffles</option>
               </select>
               <select className={styles.forsizefilter}>
                   <option value="size">Fit</option>
                   <option value="m">Skinny</option>
                   <option value="s">Slim</option>
                   <option value="l">Flared</option>
               </select>
               <select className={styles.fordiscountfilter} onChange={handleDiscount}>
                   <option value="discount"> Discount</option>
                   <option value="ten">10% - 20%</option>
                   <option value="twenty">21% - 30%</option>
                   <option value="thirty">31% - 40%</option>
                   <option value="forty">41% - 50%</option>
                   <option value="fifty">51% and above </option>

               </select>

               <select className={styles.forpricfilter} onChange={handlePricesort}>
                   <option value="price"> Price</option>
                   <option value="fivehundred">₹500 - ₹1000</option>
                   <option value="onethousandone">₹1001- ₹1500</option>
                   <option value="fifteenhundred">₹1501- ₹2000</option>
                   <option value="twothousand">₹2001- ₹3000</option>


               </select>

                 <div className={styles.forsortinglowtohighdiv}>
                 <div className={styles.view}><span> CLOTHING </span> <span className="for-line-color">|</span> <span> 1655 STYLES FOUND </span> <span >|</span>  <span> VIEW 201 </span></div>

                    <span className={styles.rightsortby}>
                    SORTBY :
                    <select onChange={handleHightoLow}>
                       <option value="newandpopular">New and Popular</option>
                       <option value="lowtohigh">Low To High</option>
                       <option value="hightolow">High To Low</option>
                    </select>
                    </span>
                </div>

         </div>


        <div className={styles.productshowingdiv}>
         {

             state.map((e)=>(

               <div className={styles.particularproduct} key={e.id}>
                <Link to={`/product/${e.id}`} style={{textDecoration:"none",color:"black"}}><div className={styles.background}
                style={{background:`url(${e.image[1]})`,width:"100%",height:"350px",
                backgroundSize: "250px 350px",
                backgroundRepeat: "no-repeat",
                }}
                 >
               
               <img className={styles.changeImg} src={e.image[0]} alt="image" />
               </div></Link>
              
               <p  className={styles.fontofproductname}>{e.productName}</p>
               <p  className={styles.fontofproductnamecolor}>₹ {e.price-e.discount} <span> ₹</span><span className={styles.forlinethrough}> {e.price}</span> </p>

               </div>
             ))
         }
        </div>
        </div>
        </div>
        <Footer/>
        </>
    )
}
