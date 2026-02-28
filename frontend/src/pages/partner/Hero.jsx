import { BsStars } from "react-icons/bs"
import { FaCamera } from "react-icons/fa";

const Hero=()=>{
    return(
        <div className="min-h-screen max-w-7xl mx-auto flex flex-col items-center mt-20 sm:mt-24 md:mt-28 lg:mt-30 px-4 sm:px-6 md:px-8 lg:px-10">
              <div className="flex flex-col items-center gap-3 sm:gap-4">
                <div className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-[#6B191C] w-fit bg-gradient-to-r from-[#531315] to-[#3A0B0D] flex items-center gap-1.5 sm:gap-2">
                  <BsStars size={18} sm:size={20} className="text-[#EF4343]" />
                  <p className="text-[13px] sm:text-[14px] font-[500]">Join as a Flashooter</p>
                </div>
                <h1 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[58px] text-center font-[700] leading-tight sm:leading-snug lg:leading-tight px-2">
                  Turn Your iPhone Into{" "} <br />
                  <span className="bg-[#EF4444]  bg-clip-text text-transparent">
                   an Income Machine
                  </span>
                </h1>

                  <div className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-[#6B191C] w-fit bg-gradient-to-r from-[#531315] to-[#3A0B0D] flex items-center gap-1.5 sm:gap-2">
                  <FaCamera size={18} sm:size={20} className="text-[#EF4343]" />
                  <p className="text-[13px] sm:text-[14px] font-[500]">Who Are Flashooters?</p>
                </div>
              </div>


              <p className="max-w-3xl pt-10 text-[19px]">
                Flashooters are trained iPhone creators who shoot, edit, and deliver professional Instagram reels in just 10 minutes. Whether you're a student, hustler, or creative explorer—Flashoot helps you earn through content creation using nothing but your phone. We're live across India, UAE, USA—and growing fast. Join our expanding network of creators worldwide.
              </p>

        </div>
    )
}

export default Hero