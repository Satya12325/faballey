import React,{useState,useRef} from 'react'
import { useEffect } from 'react'
import { Lastbuttons } from './Lastbuttons'
import { Left } from './Left';
import styles from "./leftright.module.css"
import { Slidingimgs2 } from './Slidingimg2'
import { Slidingimgs } from './Slidingimgs'
import Navbar from "../../Navbar/Navbar";
import {useSelector,useDispatch,shallowEqual} from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import {getProductRequest,getProduct} from "../../Redux/Allproduct/action";
import axios from "axios";
import {Box} from "@mui/material"
import {v4 as uuid} from "uuid";



const fetchData = (id) => {
    return axios.get(`http://localhost:3000/products/${id}`)
}


// const Lefto = ({image}) => {
//     return (
//       <div className= {styles.mainwrapper}>
//         <div className = {styles.leftwrapper}>
          
//               <Box  className = {styles.imgwrapper} sx={{
//                   display: 'grid',
//                   columnGap: 3,
//                   rowGap: 3,
//                   gridTemplateColumns: 'repeat(2, 1fr)',
//                 }}>
//                     <img src={image} alt = "image1" className={styles.image}></img>
//                     <img src={image} alt = "image2" className={styles.image}></img>
//                     <img src={image} alt = "image3" className={styles.image}></img>
//                     <img src={image} alt = "image4" className={styles.image}></img>
//                     <img src={image} alt = "image5" className={styles.image}></img>
  
//               </Box>
        
//           </div>
//           <div>
//           {/* <Right/> */}
          
//           </div>
          
//       </div>
//     )
//   }


export const ProductDetails = () => {
    const [isLoding, setIsLoading] = useState(true);
    const [data,setData] = useState(null);
    const {id} =  useParams();
    const isMounted = useRef(null);
    const [delever,setDelever] = useState(false)
    const [color, setColor] = useState('');
    const [name,setName] = useState("");
    const [size,setSize]=useState("");
    const [price,setPrice] = useState();
    const [image,setImage] = useState("");
    const [discount,setDiscount] = useState();
    const [qty,setQty] = useState();
    const [background,setBackground] = useState("tomato");
    // const id = useSelector((state) => state.app.id);
    const dispatch = useDispatch();
    const history = useNavigate();






    const {product,isLooding} = useSelector(
        (state) => state.app,
        shallowEqual
        );
        console.log("id is" , id)
      
       const getProducts = async()=>{
        
            try {
                setIsLoading(true);
                const {data} = await fetchData(id);
                if(!isMounted.current){
                    return;
                }
                setData(data)
                setName(data.productName)
                setSize(data.sizes)
                setPrice(data.price)
                setDiscount(data.discount)
                setImage(data.image[0])
                setQty(data.quantity)
                setColor(data.color)
                setIsLoading(false);  
            }
            catch (error) {
                console.error(error);
            }
        }
        //     const requestAction = getProductRequest();
        //     dispatch(requestAction);
        //     return fetch(`http://localhost:3000/products/${id}`)
        //     .then((response) => response.json())
        //     .then((response) => {
        //         console.log(response)
        //         const successAction = getProduct(response)
        //         dispatch(successAction);
        //         setData(response)
                
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     })
        // };
        
        // const fetchProductDetail = async () => {
        //     const response = await axios
        //       .get(`http://localhost:3000/products/${id}`)
        //       .catch((err) => {
        //         console.log("Err: ", err);
        //       });
        //       setData(response.data)
        //     dispatch(getProduct(response.data));
        //   };
        function refreshPage() {
          window.location.reload(false);
        }

          const handleAddCart = ()=>{
            setBackground("green")
              const payload = {
                id:uuid(),
                productName: name,
                price: price,
                sizes: size,
                color: color,
                image: image,
                discount: discount,
                quantity: qty,

              }
              const config = {
                url: "http://localhost:3000/cart",
                method: "POST",
                data: payload
              }
              refreshPage()
              return axios(config)
          }
          



        useEffect(() => {
          // fetchProductDetail();
       getProducts()
          if(!isMounted.current){
            isMounted.current = true;
        }
        return () => {
            isMounted.current = false;
        };
           
          // fetchData();
        },[id]);
        
        console.log("Product",data);





    // const handleGetUsers = async () => {
    //     try {
    //         setIsLoading(true);
    //         const {data} = await getUsersById(id);
    //         console.log("sdss",data)
    //         setData(data);            
    //         setIsLoading(false);
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };
    console.log("data",data)

    // useEffect(()=>{
    //    // handleGetUsers();
    //     axios.get(`http://localhost:3000/products/61bae728f4c625615cb302dd`)
    //     .then((response)=>{
    //         console.log("response",response)
    //     })
    //     .catch((error)=>{
    //         console.log("error",error)
    //     })
    // },[id]);
        let pins= ["756036","756001","756032"]
        const hanleChack=(pin) => {
          console.log("pin",pin)
          for(let i=0;i<pin.length;i++){
            if(pins[i] === pin){
              
              alert("you pin is Deleverable")
            }
            
          }

        }



    if(isLoding) return <h3>...Loading</h3>
  return (
    <>
    
    < Navbar
      no={0}
    />
        <div className={styles.warpperleftright}>
       {/* <img src={data.image[0]} alt = ""/> */}
       <Left
       image={data.image[1]}
       image2={data.image[0]}
       price={data.price}
       discount={data.discount}
       name={data.productName}
       handleCheck={hanleChack}
       handleAddCart={handleAddCart}
       backColor={background}
       />
        <Slidingimgs/>
        <Slidingimgs2/>
       <Lastbuttons/>

        </div>
        
    </>
  )
}