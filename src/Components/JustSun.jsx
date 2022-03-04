import style from "./Component.module.css";
import Typography from "@mui/material/Typography";







export default function JustSun(){




    return(
        <div className={style.JustSun}>
            
                <img className={style.SunImg} src="https://img.faballey.com/images/banner/c2bed1cd-c021-4dc5-b699-357f75904db1.jpg" alt="" />
            
            <div>
                <div className={style.JustSunText}>
            <Typography
          variant="h3"
          style={{ textAlign: "start",marginTop:"-10px" }}
        >
          WHAT WE'RE CRUSHING ON
        </Typography>
        <div style={{height:"5px",background:"black",width:"300px",margin:"20px 0"}}></div>
            <div>
            <Typography
          
          style={{ fontWeight: "bold",textAlign:"start",lineHeight:"2" }}
        >
         Sun-soaked days, al fresco dates, feel-good styles, and never-ending vacay vibes – we’re toasting to the upcoming chill times dressed in cheery shades, of-the-moment prints, and darling details. Presenting our Spring Summer ’22 drop.
        </Typography>
            </div>
            <div
            style={{background: "black",width:"300px",padding: "10px",borderRadius:"20px",color:"white",marginTop:"50px"}}
            >SHOP THE COLLECTIONS</div>
            </div>
        </div>




        </div>
    )
}