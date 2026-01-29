import { FaArrowRightLong } from "react-icons/fa6";
import { FaRupeeSign } from "react-icons/fa";

const BestSellers = () => {
  return (
    <div className="mt-20 sm:mt-24 md:mt-28 lg:mt-30 min-h-screen flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-10">
      <h1 className="text-white text-[32px] sm:text-[36px] md:text-[40px] lg:text-[48px] font-[700] text-center">
        Bestsellers
      </h1>

      <div className="mt-8 sm:mt-10 w-full max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-5 sm:gap-6 md:gap-7">
          {/* Hourly Plan Card */}
          <div className="border bg-black/15 backdrop-blur-3xl border-white/10 text-center rounded-2xl p-5 sm:p-6 md:p-7 w-full max-w-[350px] sm:max-w-[380px] md:max-w-[450px] hover:scale-[1.02] sm:hover:scale-105 hover:shadow-[0_0_15px_2px_rgba(239,67,67,0.5)] transition-all duration-500 ease-in-out">
            <div className="space-y-2 mt-5 sm:mt-7">
              <h1 className="text-[24px] sm:text-[26px] md:text-[28px] lg:text-[30px] font-[700] leading-[28px] sm:leading-[30px] md:leading-[34px] lg:leading-[36px]">
                Hourly Plan
              </h1>
              <p className="text-[12px] sm:text-[13px] md:text-[14px] text-[#C83839] font-[600] leading-[18px] sm:leading-[20px]">
                Quickest Content
              </p>
              <p className="text-[14px] sm:text-[15px] md:text-[16px] text-gray-400 font-[400] w-full sm:w-[90%] mx-auto">
                Perfect for anyone who want a single, fast, high-quality reel.
              </p>
              <h1
                className="text-[36px] sm:text-[40px] md:text-[44px] lg:text-[48px] font-[700] leading-[36px] sm:leading-[40px] md:leading-[44px] lg:leading-[48px] mt-3 
                bg-[length:400%_100%] bg-clip-text text-transparent 
                animate-gradient-sweep custom-gradient"
              >
                ₹1,999
              </h1>

              <p className="text-[11px] sm:text-[12px] font-[400] text-gray-400">+ GST</p>
            </div>

            <div className="w-full h-[0.7px] bg-gradient-to-r from-pink-600 via-[#C83839] to-orange-500 mt-5 sm:mt-7" />
            
            <p className="text-[11px] sm:text-[12px] font-[400] mt-3 text-[#C83839]">
              WHAT'S INCLUDED
            </p>

            <div className="space-y-2 mt-2">
              <div className="flex items-center gap-3 sm:gap-4 text-[14px] sm:text-[15px] md:text-[16px] font-[400]">
                <p className="text-[#EE4343]">✓</p>
                <p className="text-left">1 Hour Shoot</p>
              </div>
              <div className="flex items-center gap-3 sm:gap-4 text-[14px] sm:text-[15px] md:text-[16px] font-[400]">
                <p className="text-[#EE4343]">✓</p>
                <p className="text-left">1 Edited Reel Delivered</p>
              </div>
              <div className="flex items-center gap-3 sm:gap-4 text-[14px] sm:text-[15px] md:text-[16px] font-[400]">
                <p className="text-[#EE4343]">✓</p>
                <p className="text-left">Shot on Latest iPhone</p>
              </div>
              <div className="flex items-center gap-3 sm:gap-4 text-[14px] sm:text-[15px] md:text-[16px] font-[400]">
                <p className="text-[#EE4343]">✓</p>
                <p className="text-left">Fast Delivery (10 mins post shoot)</p>
              </div>
              <div className="flex items-center gap-3 sm:gap-4 text-[14px] sm:text-[15px] md:text-[16px] font-[400]">
                <p className="text-[#EE4343]">✓</p>
                <p className="text-left">Trained and Certified Reel Maker</p>
              </div>
              <div className="flex items-center gap-3 sm:gap-4 text-[14px] sm:text-[15px] md:text-[16px] font-[400]">
                <p className="text-[#EE4343]">✓</p>
                <p className="text-left">Flashoot Branding Included</p>
              </div>
            </div>

            <div className="flex font-[500] items-center justify-center gap-3 sm:gap-4 bg-[#DD0024] py-3 sm:py-4 px-4 sm:px-5 w-full rounded-xl text-white mt-5 sm:mt-7 hover:bg-[#DD0024]/90 transition-colors duration-300">
              <FaRupeeSign className="text-[16px] sm:text-[17px] lg:text-[18px]" />
              <p className="text-[16px] sm:text-[17px] lg:text-[18px] font-medium">Book Now</p>
              <FaArrowRightLong className="text-[16px] sm:text-[17px] lg:text-[18px]" />
            </div>
          </div>

          {/* Half-Day Plan Card */}
          <div className="border bg-black/15 backdrop-blur-3xl border-white/10 text-center rounded-2xl p-5 sm:p-6 md:p-7 w-full max-w-[350px] sm:max-w-[380px] md:max-w-[450px] hover:scale-[1.02] sm:hover:scale-105 hover:shadow-[0_0_15px_2px_rgba(239,67,67,0.5)] transition-all duration-500 ease-in-out">
            <div className="w-full flex justify-end">
              <div
                className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full 
                bg-gradient-to-r from-[#C73E35] via-[#C2830F] to-[#C2830F] 
                text-white text-[8px] sm:text-[9px] font-[700]"
              >
                <p>MOST POPULAR</p>
              </div>
            </div>

            <div className="space-y-2 text-center flex flex-col items-center mt-5 sm:mt-7">
              <h1 className="text-[24px] sm:text-[26px] md:text-[28px] lg:text-[30px] font-[700] leading-[28px] sm:leading-[30px] md:leading-[34px] lg:leading-[36px]">
                Half-Day Plan
              </h1>
              <p className="text-[12px] sm:text-[13px] md:text-[14px] text-[#FACC15] font-[600] leading-[18px] sm:leading-[20px]">
                Event Essential
              </p>
              <p className="text-[14px] sm:text-[15px] md:text-[16px] text-gray-400 font-[400]">
                Ideal for events and creators who need more time and more content.
              </p>
              <h1
                className="text-[36px] sm:text-[40px] md:text-[44px] lg:text-[48px] font-[700] leading-[36px] sm:leading-[40px] md:leading-[44px] lg:leading-[48px] mt-3 
                bg-[length:400%_100%] bg-clip-text text-transparent 
                animate-gradient-sweep custom-gradient"
              >
                ₹4,999
              </h1>

              <p className="text-[11px] sm:text-[12px] font-[400] text-gray-400">+ GST</p>
            </div>

            <div className="w-full h-[0.7px] bg-gradient-to-r from-pink-600 via-[#C83839] to-orange-500 mt-5 sm:mt-7" />
            <p className="text-[11px] sm:text-[12px] font-[400] mt-3 text-[#C83839]">
              WHAT'S INCLUDED
            </p>

            <div className="space-y-2 mt-2">
              <div className="flex items-center gap-3 sm:gap-4 text-[14px] sm:text-[15px] md:text-[16px] font-[400]">
                <p className="text-[#EE4343]">✓</p>
                <p className="text-left">Up to 3 Hours Shoot</p>
              </div>
              <div className="flex items-center gap-3 sm:gap-4 text-[14px] sm:text-[15px] md:text-[16px] font-[400]">
                <p className="text-[#EE4343]">✓</p>
                <p className="text-left">2 Edited reels</p>
              </div>
              <div className="flex items-center gap-3 sm:gap-4 text-[14px] sm:text-[15px] md:text-[16px] font-[400]">
                <p className="text-[#EE4343]">✓</p>
                <p className="text-left">Shot on Latest iPhone</p>
              </div>
              <div className="flex items-center gap-3 sm:gap-4 text-[14px] sm:text-[15px] md:text-[16px] font-[400]">
                <p className="text-[#EE4343]">✓</p>
                <p className="text-left">Fast Delivery (10 mins post shoot)</p>
              </div>
              <div className="flex items-center gap-3 sm:gap-4 text-[14px] sm:text-[15px] md:text-[16px] font-[400]">
                <p className="text-[#EE4343]">✓</p>
                <p className="text-left">Trained and Certified Reel Maker</p>
              </div>
              <div className="flex items-center gap-3 sm:gap-4 text-[14px] sm:text-[15px] md:text-[16px] font-[400]">
                <p className="text-[#EE4343]">✓</p>
                <p className="text-left">Flashoot Branding Included</p>
              </div>
            </div>

            <div className="flex font-[500] items-center justify-center gap-3 sm:gap-4 bg-[#DD0024] py-3 sm:py-4 px-4 sm:px-5 w-full rounded-xl text-white mt-5 sm:mt-7 hover:bg-[#DD0024]/90 transition-colors duration-300">
              <FaRupeeSign className="text-[16px] sm:text-[17px] lg:text-[18px]" />
              <p className="text-[16px] sm:text-[17px] lg:text-[18px] font-medium">Book Now</p>
              <FaArrowRightLong className="text-[16px] sm:text-[17px] lg:text-[18px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSellers;