import Footer from "../Footer/Footer"
import BestSellers from "./BestSellers"
import Download from "./Download"
import Features from "./Features"
import Hero from "./Hero"
import PricingPlans from "./PricingPlans"
import Questions from "./Questions"
import Reviews from "./Reviews"
import WhyUs from "./WhyUs"

const Home =()=>{
    return(
        <div>
            <Hero/>
            <WhyUs/>
            <BestSellers/>
            <Features/>
            <PricingPlans/>
            <Reviews/>
            <Questions/>
            <Download/>
            <Footer/>
        </div>
    )
}

export default Home