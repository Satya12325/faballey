import React, { useState, useRef } from "react";
import { useEffect } from "react";
import { Lastbuttons } from "./Lastbuttons";
import { Left } from "./Left";
import { Slidingimgs2 } from "./Slidingimg2";
import { Slidingimgs } from "./Slidingimgs";
import Navbar from "../../Navbar/Navbar";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getProductRequest, getProduct } from "../../Redux/Allproduct/action";
import axios from "axios";
import { Box } from "@mui/material";
import { v4 as uuid } from "uuid";

import styles from "./leftright.module.css";
import { FaRupeeSign } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaPinterestP, FaTwitter, FaFacebookF } from "react-icons/fa";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";

const fetchData = (id) => {
  return axios.get(`https://fabaly-product-api.onrender.com/products/${id}`);
};

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
  const [data, setData] = useState(null);
  const { id } = useParams();
  const isMounted = useRef(null);
  const [delever, setDelever] = useState(false);
  const [color, setColor] = useState("");
  const [name, setName] = useState("");
  const [size, setSize] = useState("");
  const [price, setPrice] = useState();
  const [image, setImage] = useState("");
  const [discount, setDiscount] = useState();
  const [qty, setQty] = useState();
  const [background, setBackground] = useState("#fc6486");
  // const id = useSelector((state) => state.app.id);
  const dispatch = useDispatch();
  const history = useNavigate();
  const [sizepick, setSizePick] = useState("");

  const [description, setDescription] = useState(true);
  const [details, setDetails] = useState(false);
  const [shipping, setShipping] = useState(false);
  const [pin, setPin] = useState("");
  const [process, setProcess] = useState(false);
  const descriptionf = () => {
    setDescription(true);
    setDetails(false);
    setShipping(false);
  };
  const detailsf = () => {
    setDescription(false);
    setDetails(true);
    setShipping(false);
  };
  const shippingf = () => {
    setDescription(false);
    setDetails(false);
    setShipping(true);
  };

  const { product, isLooding } = useSelector(
    (state) => state.app,
    shallowEqual
  );
  console.log("id is", id);

  const getProducts = async () => {
    try {
      setIsLoading(true);
      const { data } = await fetchData(id);
      if (!isMounted.current) {
        return;
      }
      setData(data);
      setName(data.productName);
      setSize(data.sizes);
      setPrice(data.price);
      setDiscount(data.discount);
      setImage(data.image[0]);
      setQty(data.quantity);
      setColor(data.color);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
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

  const handleAddCart = () => {
    if(process === true){

      setBackground("green");
      const payload = {
        id: uuid(),
        productName: name,
        price: price,
        sizes: sizepick,
        color: color,
        image: image,
        discount: discount,
        quantity: qty,
      };
      const config = {
        url: "https://fabaly-product-api.onrender.com/cart",
        method: "POST",
        data: payload,
      };
     
      return axios(config),refreshPage();
      
    }
    else{
      alert("please provide your Postal index number...")
       return false;
    }
  };

  useEffect(() => {
    // fetchProductDetail();
    getProducts();
    if (!isMounted.current) {
      isMounted.current = true;
    }
    return () => {
      isMounted.current = false;
    };

    // fetchData();
  }, [id]);

  console.log("Product", data);

  const handleChange = (e) => {
    setSizePick(e.target.value);
  };

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
  console.log("data", data);

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
  let pins = ["756036", "756001", "756032"];
  const hanleChack = () => {
    console.log("pin", pins);
    
      if ( pin) {
        alert("you pin is Deleverable");
        setProcess(true)
      }
     
    
  };

  if (isLoding) return <h3>...Loading</h3>;
  return (
    <>
      <Navbar />
      <div  className={styles.warpperleftright}>
        {/* <img src={data.image[0]} alt = ""/> */}
        <div className={styles.mainDiv}>
          <Left
            image={data.image[1]}
            image2={data.image[0]}
            //  price={data.price}
            //  discount={data.discount}
            //  name={data.productName}
            //  handleCheck={hanleChack}
            //  handleAddCart={handleAddCart}
            //  backColor={background}
          />
        <div>
          <div className={styles.wrapper}>
            <div>
              <section className={styles.titletext}>{name}</section>

              <section
                style={{
                  fontSize: "20px",
                  display: "flex",
                  marginBottom: "6px",
                }}
              >
                <section style={{ textDecoration: "line-through" }}>
                  <FaRupeeSign />
                  {price}
                </section>
                <section style={{ color: "#fc6486" }}>
                  <FaRupeeSign />
                  {discount}
                </section>
                {"   "}
                &nbsp;
                <sup style={{ fontSize: "13px" }}>(70% off)</sup>
              </section>

              <section
                style={{
                  color: "#03bb5c",
                  marginBottom: "6px",
                  fontWeight: "600",
                }}
              >
                Inclusive of all taxes
              </section>
              <section
                className={styles.graytext}
                style={{ fontSize: "12px", fontWeight: "600" }}
              >
                SKU: TOP05055Z
              </section>

              <h4
                className={styles.boldtext}
                style={{ margin: 0, marginTop: "15px" }}
              >
                SIZE:{" "}
              </h4>

              {/* <Button sx={{color:"black",borderColor:"gray",margin:"10px"}} variant="outlined">S</Button>
              <Button sx={{color:"black",borderColor:"gray",margin:"10px"}} variant="outlined">L</Button>
              <Button sx={{color:"black",borderColor:"gray",margin:"10px"}} variant="outlined">M</Button>
              <Button sx={{color:"black",borderColor:"gray",margin:"10px"}} variant="outlined">XL</Button> */}

              <div style={{ marginTop: "20px" }}>
                {/* <Tooltip title="Body measurement:To fit Bust 34, waist 26" placement="top-start" arrow 
              sx={{bgcolor:"white",color:"gray"}}>
              <button className={styles.sizes}>S</button>
              </Tooltip>
              <Tooltip title="Body measurement:To fit Bust 36, waist 28" placement="top-start" arrow >
              <button className={styles.sizes}>M</button>
              </Tooltip>
              <Tooltip title="Body measurement:To fit Bust 38, waist 30" placement="top-start" arrow >
              <button className={styles.sizes}>L</button>
              </Tooltip>
              <Tooltip title="Body measurement:To fit Bust 40, waist 32" placement="top-start" arrow >
              <button className={styles.sizes}>XL</button>
              </Tooltip> */}

                <Select
                  style={{ width: "250px", color: "black" }}
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  value={sizepick}
                  onChange={handleChange}
                >
                  {size?.map((item) => (
                    <MenuItem
                      value={item}
                      style={{ textTransform: "uppercase" }}
                    >
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </div>

              <br />
              {/* <Button sx = {{backgroundColor:"#fc6486",color:"white",width:"175px"}} variant="contained">Add to Bag</Button>
              <Button sx={{color:"black",borderColor:"gray",margin:"10px"}} variant="outlined">Add to wishlist</Button> */}
              <div className={styles.bagbuttonsdiv}>
                <button
                  className={styles.bagbutton}
                  style={{ backgroundColor: background, }}
                  onClick={handleAddCart}
                >
                  ADD TO BAG
                </button>
                <button className={styles.wishlistbutton}>
                  <FaRegHeart />
                  &nbsp;ADD TO WISHLIST
                </button>
              </div>

              <section className={styles.offers}>
                <p className={styles.boldtext}>Offers You Don't Want To Miss</p>
                <hr className={styles.horizontalline} />
                <p className={styles.boldtext}>
                  Get it for <FaRupeeSign />
                  191 use code EXTRA25
                </p>
                <p className={styles.offergray}>
                  Avail 25 % off on orders above <FaRupeeSign />
                  3000
                </p>
                <hr className={styles.horizontalline} />
                <p className={styles.boldtext}>
                  Get it for <FaRupeeSign />
                  217 Use code EXTRA15
                </p>

                <p className={styles.offergray}>
                  Avail 15 % off on orders above <FaRupeeSign />
                  2000
                </p>
              </section>

              <div className={styles.checkpin}>
                <section style={{ fontWeight: "500" }}>
                  Check Pin Code Serviceability
                </section>{" "}
                <br />
                <div className={styles.pinboxDiv}>
                  <input
                    type="number"
                    placeholder="Enter Pin Code"
                    className={styles.pinbox}
                    value={pin}
                    onChange={(e) => setPin(e.target.value)}
                  />
                  <button className={styles.pinboxBtn} onClick={hanleChack}>
                    Check
                  </button>
                </div>
                {/* <TextField fullwidth variant = "outlined" placeholder="Enter your pincode"/> */}
                <p className={styles.checkpintext}>
                  <p className={styles.pindeets}>
                    Enter PIN code to check availability in your area.
                  </p>

                  <p className={styles.pindeets}>Cash on delivery available</p>

                  <p className={styles.pindeets}>
                    {" "}
                    15 days return/exchange on all non-mask products
                  </p>

                  <p className={styles.pindeets}>
                    Return/Exchange not applicable on Masks
                  </p>
                </p>
              </div>

              <div className={styles.lastinright}>
                <div className={styles.buttonstyle}>
                  <button
                    className={styles.buttonb}
                    onClick={() => descriptionf()}
                  >
                    Description
                  </button>
                  <button className={styles.buttonb} onClick={() => detailsf()}>
                    Details
                  </button>
                  <button className={styles.buttonb} onClick={() => shippingf()}>
                    Shipping
                  </button>
                </div>
                <div className={styles.descriptionb}>
                  {description ? (
                    <p>
                      This sexy cut out crop top will define your tiny waist
                      like no other. Featuring full sleeves and an easy throw on
                      wear.
                      <br />
                      <br />
                      Work It - Pair this ravishing piece with a blue midi
                      skirt.
                    </p>
                  ) : details ? (
                    <p>
                      Material: Cotton Jersey
                      <br />
                      Easy Throw On Wear
                      <br />
                      Cut Out Detail
                      <br />
                      Length: 15"
                      <br />
                      <br />
                      Please note that the above measurements are garment
                      measurements and not to-fit, body measurements. Refer to
                      our Size Guide for more details
                      <br />
                      <br />
                      Quantity - 1N
                      <br />
                      Country of Origin : India
                      <br />
                      <p className={styles.boldtextlast}>
                        {" "}
                        Manufactured and Packed by
                      </p>
                      High Street Essentials Private Limited
                      <br />
                      C-11, Sector 7, District Gautam Budh Nagar, Noida 201301,
                      Uttar Pradesh, India
                      <p className={styles.boldtextlast}>For Customer Queries</p>
                      Grievance Redressal Officer
                      <br />
                      C-11, Sector 7, District Gautam Budh Nagar, Noida 201 301,
                      Uttar Pradesh, India
                      <br />
                      Phone : +91-8929987349 / 0120-6850262
                      <br />
                      Email : customercare@faballey.com
                      <br />
                      <br />
                      NOTE: There might be a slight variation in the shade of
                      the actual product and the image shown on the screen, due
                      to the screen resolution and photography effects.
                    </p>
                  ) : shipping ? (
                    <p>
                      Dispatch: Within 48-72 Hours
                      <br />
                      Delivery time within India - 4-6* business days
                      <br />
                      International delivery time - 7-12* business days
                      <br />
                      *Note: Delivery of orders may take longer due to
                      region-wise lockdown and diversion of routes.
                      <br />
                      Return/Exchange: If you are not completely satisfied with
                      your purchase, simply select the option of return/exchange
                      within 15 days of receiving your order from your order
                      details page and we will process your return, no questions
                      asked.
                    </p>
                  ) : (
                    <p>
                      This sexy cut out crop top will define your tiny waist
                      like no other. Featuring full sleeves and an easy throw on
                      wear. Work It - Pair this ravishing piece with a blue midi
                      skirt
                    </p>
                  )}
                </div>
                <div className={styles.socialicons}>
                  <FaPinterestP />
                  &nbsp;
                  <FaTwitter />
                  &nbsp;
                  <FaFacebookF />
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        <Slidingimgs />
        <Slidingimgs2 />
        <Lastbuttons />
      </div>
    </>
  );
};
