import { FaArrowRightLong } from "react-icons/fa6";
import { FaRupeeSign } from "react-icons/fa";

const BestSellers = () => {
  return (
    <div className="mt-30 min-h-screen flex flex-col items-center">
      <h1 className="text-white text-[48px] font-[700]">Bestsellers</h1>

      <div className="mt-10 flex gap-7">
        <div className="border bg-black/15 backdrop-blur-3xl border-white/10 text-center rounded-2xl p-7 w-[400px] hover:scale-105 hover:shadow-[0_0_15px_2px_rgba(239,67,67,0.5)] transition-all duration-1000 ease-in-out">
          <div className="space-y-2 mt-7">
            <h1 className="text-[30px] font-[700] leading-[36px]">
              Hourly Plan
            </h1>
            <p className="text-[14px] text-[#C83839] font-[600] leading-[20px]">
              Quickest Content
            </p>
            <p className="text-[16px] text-gray-400 font-[400] w-[90%] mx-auto">
              Perfect for anyone who want a single, fast, high-quality reel.
            </p>
            <h1
              className="text-[48px] font-[700] leading-[48px] mt-3 
              bg-[length:400%_100%] bg-clip-text text-transparent 
              animate-gradient-sweep custom-gradient"
            >
              ₹1,999
            </h1>

            <p className="text-[12px] font-[400] text-gray-400">+ GST</p>
          </div>

          <div className="w-full h-[0.7px] bg-gradient-to-r from-pink-600 via-[#C83839] to-orange-500 mt-7" />
          
          <p className="text-[12px] font-[400] mt-3 text-[#C83839]">
            WHAT'S INCLUDED
          </p>

          <div className="space-y-2 mt-2">
            <div className="flex items-center gap-4 text-[16px] font-[400]">
              <p className="text-[#EE4343]">✓</p>
              <p>1 Hour Shoot</p>
            </div>
            <div className="flex items-center gap-4 text-[16px] font-[400]">
              <p className="text-[#EE4343]">✓</p>
              <p>1 Edited Reel Delivered</p>
            </div>
            <div className="flex items-center gap-4 text-[16px] font-[400]">
              <p className="text-[#EE4343]">✓</p>
              <p>Shot on Latest iPhone</p>
            </div>
            <div className="flex items-center gap-4 text-[16px] font-[400]">
              <p className="text-[#EE4343]">✓</p>
              <p>Fast Delivery (10 mins post shoot)</p>
            </div>
            <div className="flex items-center gap-4 text-[16px] font-[400]">
              <p className="text-[#EE4343]">✓</p>
              <p>Trained and Certified Reel Maker</p>
            </div>
            <div className="flex items-center gap-4 text-[16px] font-[400]">
              <p className="text-[#EE4343]">✓</p>
              <p>Flashoot Branding Included</p>
            </div>
          </div>

          <div className="flex font-[500] items-center justify-center gap-4 bg-[#DD0024] py-4 px-5 w-full rounded-xl text-white mt-7">
            <FaRupeeSign className="text-[18px]" />
            <p className="text-[18px] font-medium">Book Now</p>
            <FaArrowRightLong className="text-[18px]" />
          </div>
        </div>

        <div className="border-1 bg-black/15 backdrop-blur-3xl border-white/10 text-center rounded-2xl p-7 w-[400px] hover:scale-105 hover:shadow-[0_0_15px_2px_rgba(239,67,67,0.5)] transition-all duration-1000 ease-in-out">
          <div className="w-full flex justify-end">
            <div
              className="px-3 py-1 rounded-full 
              bg-gradient-to-r from-[#C73E35] via-[#C2830F] to-[#C2830F] 
              text-white text-[9px] font-[700]"
            >
              <p>MOST POPULAR</p>
            </div>
          </div>

          <div className="space-y-2 text-center flex flex-col items-center">
            <h1 className="text-[30px] font-[700] leading-[36px]">
              Half-Day Plan
            </h1>
            <p className="text-[14px] text-[#FACC15] font-[600] leading-[20px]">
              Event Essential
            </p>
            <p className="text-[16px] text-gray-400 font-[400]">
              Ideal for events and creators who need more time and more content.
            </p>
            <h1
              className="text-[48px] font-[700] leading-[48px] mt-3 
              bg-[length:400%_100%] bg-clip-text text-transparent 
              animate-gradient-sweep custom-gradient"
            >
              ₹4,999
            </h1>

            <p className="text-[12px] font-[400] text-gray-400">+ GST</p>
          </div>

          <div className="w-full h-[0.7px] bg-gradient-to-r from-pink-600 via-[#C83839] to-orange-500 mt-7" />
          <p className="text-[12px] font-[400] mt-3 text-[#C83839]">
            WHAT'S INCLUDED
          </p>

          <div className="space-y-2 mt-2">
            <div className="flex items-center gap-4 text-[16px] font-[400]">
              <p className="text-[#EE4343]">✓</p>
              <p>Up to 3 Hours Shoot</p>
            </div>
            <div className="flex items-center gap-4 text-[16px] font-[400]">
              <p className="text-[#EE4343]">✓</p>
              <p>2 Edited reels</p>
            </div>
            <div className="flex items-center gap-4 text-[16px] font-[400]">
              <p className="text-[#EE4343]">✓</p>
              <p>Shot on Latest iPhone</p>
            </div>
            <div className="flex items-center gap-4 text-[16px] font-[400]">
              <p className="text-[#EE4343]">✓</p>
              <p>Fast Delivery (10 mins post shoot)</p>
            </div>
            <div className="flex items-center gap-4 text-[16px] font-[400]">
              <p className="text-[#EE4343]">✓</p>
              <p>Trained and Certified Reel Maker</p>
            </div>
            <div className="flex items-center gap-4 text-[16px] font-[400]">
              <p className="text-[#EE4343]">✓</p>
              <p>Flashoot Branding Included</p>
            </div>
          </div>

          <div className="flex font-[500] items-center justify-center gap-4 bg-[#DD0024] py-4 px-5 w-full rounded-xl text-white mt-7">
            <FaRupeeSign className="text-[18px]" />
            <p className="text-[18px] font-medium">Book Now</p>
            <FaArrowRightLong className="text-[18px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSellers;