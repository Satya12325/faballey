import style from "./Component.module.css";
import Typography from "@mui/material/Typography";
import Offerzone from "./Offerzone";
import SmallCradScroll from "./smallCradScroll";
import JustSun from "./JustSun";
import {Link} from "react-router-dom"




export default function DressesSection() {
  var cards = [
    "https://img.faballey.com/images/banner/37369e38-fad0-4f5c-89c9-3d13ecb999b8.jpg",
    "https://img.faballey.com/images/banner/bdfee54c-81be-4c4a-a395-56adeab23f04.jpg",
    "https://img.faballey.com/images/banner/e077c281-2cb0-49e8-afcd-e051390a8e1a.jpg",
    "https://img.faballey.com/images/banner/0ed30794-19fd-4996-b8a9-91e7edeab5c1.jpg",
    "https://img.faballey.com/images/banner/0ae6d270-9456-43dc-b674-ed1d07a8b165.jpg",
    "https://img.faballey.com/images/banner/7978d72b-cf8a-45ef-a238-c92c73bd4fbc.jpg",
  ];


  var Explore = [
      "https://img.faballey.com/images/banner/51e57ebb-5463-4961-9ed5-ae8a9029a5ac.jpg",
      "https://img.faballey.com/images/banner/77ebc812-8bb6-430b-bdaa-79546165a9c7.jpg",
      "https://img.faballey.com/images/banner/14108478-df0c-481d-bcde-ddb1d9c48d6f.jpg",
      "https://img.faballey.com/images/banner/353d0caa-d54a-4085-8966-deec464bc847.jpg"
  ]

  return (
    <>
      <div>
        <img
          style={{ width: "100%", margin: "15px 0" }}
          src="https://img.faballey.com/images/banner/e4e8f5f6-e1d0-4cd7-88e2-d260f9bc5b72.gif"
          alt=""
        />
      </div>
      <div>
        <Typography
          variant="h5"
          style={{ textAlign: "center", fontWeight: "bold" }}
        >
          WHAT WE'RE CRUSHING ON
        </Typography>
        <Link to={"/product"}><div className={style.cardContainer}>
          <img
            className={style.card}
            src="https://img.faballey.com/images/banner/55bc9323-4b3b-4bae-ab00-ef274db7df8e.jpg"
            alt=""
          />
          <img
            className={style.card}
            src="https://img.faballey.com/images/banner/a3b25b47-3511-4917-9249-326ff6db48ff.jpg"
            alt=""
          />
          <img
            className={style.card}
            src="https://img.faballey.com/images/banner/5400c02c-4b46-4963-aaa7-5510ed07ae2c.jpg"
            alt=""
          />
        </div></Link>

        <div className={style.YellowSection}>
          <Typography
            variant="h5"
            style={{ textAlign: "center", fontWeight: "bold", padding: "10px" }}
          >
            HOT RIGHT NOW
          </Typography>
          <img
            style={{ width: "100%" }}
            src="https://img.faballey.com/images/banner/f99d3815-2cd1-4c19-a7f5-24f288b58fd2.jpg"
            alt=""
          />
        </div>

        <div className={style.YellowSection}>
          <Typography
            variant="h5"
            style={{ textAlign: "center", fontWeight: "bold", padding: "10px" }}
          >
            HOT RIGHT NOW
          </Typography>
          <img
            style={{ width: "100%" }}
            src="https://img.faballey.com/images/banner/9a8c73d9-e7c3-46d1-aec1-d1a1cb71fb78.jpg"
            alt=""
          />
        </div>
        <div>
          
        </div>
        <div>
          <Typography
            variant="h5"
            style={{ textAlign: "center", fontWeight: "bold", padding: "10px" }}
          >
            DEALS YOU DON'T WANT TO MISS
          </Typography>
          <SmallCradScroll />
        </div>
        
        <div>
        <Typography
            variant="h5"
            style={{ textAlign: "center", fontWeight: "bold", padding: "10px",marginTop:"10px" }}
          >
            IN THE SPOTLIGHT
          </Typography>
        <div className={style.Spotlight}>
            {
                cards.map((item)=>{
                    return <img style={{width:"150px",margin:"10px"}} src={item} alt=""/>
            })
            }
        </div>
        </div>


        <div className={style.YellowSection}>          
          <img
            style={{ width: "100%" }}
            src="https://img.faballey.com/images/banner/331a573a-5291-4169-91ce-4a25129daf5f.jpg"
            alt=""
          />
        </div>
        <div style={{backgroundColor:"#FBFBFB"}} className={style.YellowSection}>
          <Typography
            variant="h5"
            style={{ textAlign: "center", fontWeight: "bold", padding: "10px" }}
          >
            SHOP MY CART
          </Typography>
          <Offerzone />
          <img
            style={{ width: "100%" }}
            src="https://img.faballey.com/images/banner/9a8c73d9-e7c3-46d1-aec1-d1a1cb71fb78.jpg"
            alt=""
          />
        </div>
        <div>
            <JustSun/>
        </div>
        <div>

        </div>

        <div>
        <Typography
            variant="h5"
            style={{ textAlign: "center", fontWeight: "bold",marginTop:"10px" }}
          >
            IN THE SPOTLIGHT
          </Typography>
        <div className={style.Explore}>
            {
               Explore.map((item)=>{
                    return <img style={{width:"290px",margin:"10px"}} src={item} alt=""/>
            })
            }
        </div>
        </div>



      </div>
    </>
  );
}
