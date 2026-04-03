import Join from "../../pages/partner/Join"
import Cylinder3D from "../Cylinder3D"
import Footer from "../Footer/Footer"
import Meter from "../Meter"
import BestSellers from "./BestSellers"
import Download from "./Download"
import Features from "./Features"
import ForWhom from "./ForWhom"
import Hero from "./Hero"
import PricingPlans from "./PricingPlans"
import Questions from "./Questions"
import Reviews from "./Reviews"
import WhyUs from "./WhyUs"

const Home =()=>{
    return(
        <div>
       
            
            <Hero/>
            {/* <WhyUs/> */}
            <Join/>
            <BestSellers/>
            {/* <Features/> */}
            <ForWhom/>
            <PricingPlans/>
            {/* <Reviews/> */}
            <Questions/>
            {/* <Download/> */}
        
            {/* <Meter/> */}
        </div>
    )
}

export default Home