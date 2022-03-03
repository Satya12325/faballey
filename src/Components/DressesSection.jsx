import style from "./Component.module.css"
import Typography from '@mui/material/Typography';





export default function DressesSection(){




    return(
        <>
         <div>
        <img  style={{width: "100%",margin: "15px 0"}} src="https://img.faballey.com/images/banner/e4e8f5f6-e1d0-4cd7-88e2-d260f9bc5b72.gif" alt="" />
        </div>   
        <div>
            <Typography variant="h5" style={{textAlign: "center",fontWeight: "bold"}}>WHAT WE'RE CRUSHING ON</Typography>
            <div className={style.cardContainer}>
                <img className={style.card} src="https://img.faballey.com/images/banner/55bc9323-4b3b-4bae-ab00-ef274db7df8e.jpg" alt=""/>
                <img className={style.card} src="https://img.faballey.com/images/banner/a3b25b47-3511-4917-9249-326ff6db48ff.jpg" alt=""/>
                <img className={style.card} src="https://img.faballey.com/images/banner/5400c02c-4b46-4963-aaa7-5510ed07ae2c.jpg" alt=""/>
            </div>

            <div className={style.YellowSection}>
            <Typography variant="h5" style={{textAlign: "center",fontWeight: "bold",padding:"10px"}}>
            HOT RIGHT NOW 
            </Typography>
           <img style={{width:"100%"}} src="https://img.faballey.com/images/banner/f99d3815-2cd1-4c19-a7f5-24f288b58fd2.jpg" alt=""/>
            </div>


            <div className={style.YellowSection}>
            <Typography variant="h5" style={{textAlign: "center",fontWeight: "bold",padding:"10px"}}>
            HOT RIGHT NOW 
            </Typography>
           <img style={{width:"100%"}} src="https://img.faballey.com/images/banner/9a8c73d9-e7c3-46d1-aec1-d1a1cb71fb78.jpg" alt=""/>
            </div>
        
        </div>
        </>
    )
}