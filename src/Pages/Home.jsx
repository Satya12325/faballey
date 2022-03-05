import BannerSlider from "../Components/BannerSlider";
import DressesSection from "../Components/DressesSection";
import { Navbar } from '../Components/Navbar'




export default function Home(){
    return(
        <div>
             <Navbar/>
            <BannerSlider/>
            <DressesSection/>
        </div>
    )
}



