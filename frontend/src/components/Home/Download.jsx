import { MdOutlineFileDownload } from "react-icons/md";
import { TbShoppingBagDiscount } from "react-icons/tb";

const Download = () => {
  return (
    <div className="min-h-screen mt-8 sm:mt-10 lg:mt-10 flex flex-col lg:flex-row items-center gap-5 sm:gap-6 md:gap-7 px-4 sm:px-6 md:px-8 lg:px-10 ">
      {/* Left Content */}
      <div className="w-full lg:w-[50%] order-2 lg:order-1">
        <div className="px-3 sm:px-4 mb-4 sm:mb-6 py-1.5 sm:py-2 rounded-full border border-[#6B191C] w-fit bg-gradient-to-r from-[#531315] to-[#3A0B0D] flex items-center gap-1.5 sm:gap-2">
          <MdOutlineFileDownload size={22} sm:size={25} className="text-[#EF4343]" />
          <p className="text-[13px] sm:text-[14px] font-[500]"> Download Now</p>
        </div>

        <h1 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px] font-[700] leading-[32px] sm:leading-[36px] md:leading-[40px] lg:leading-[44px] xl:leading-[50px]">
          Download The <br />
          <span className="bg-gradient-to-r from-[#EF4444] from-[90%] to-[#3A0B0D] bg-clip-text text-transparent">
            Flashoot App{" "}
          </span>
          Now
        </h1>
        
        <p className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] text-gray-400 mt-3 sm:mt-4 md:mt-5">
          Book a Reel-Maker, as easy as booking an Cab.
        </p>

        <div className="mt-6 sm:mt-8 md:mt-10 space-y-3 sm:space-y-4">
          {/* Card 1 */}
          <div className="bg-white/6 border border-white/5 hover:border-[#EF4444] hover:bg-gradient-to-r from-[#EF4444]/30 from-[80%] to-white/5 transition-all duration-500 ease-in-out flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 lg:p-7 hover:text-white group">
            <div className="bg-[#EF4444]/10 p-3 sm:p-4 border border-[#EF4444] rounded-lg sm:rounded-xl flex-shrink-0">
              <TbShoppingBagDiscount className="text-[#EF4444]" size={28} sm:size={32} md:size={35} />
            </div>
            <div>
              <h1 className="text-[16px] sm:text-[18px] md:text-[20px] font-[600]">Get Upto 50% Discount</h1>
              <p className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] font-[400] text-gray-300 group-hover:text-white">On Your First Booking</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white/6 border border-white/5 hover:border-[#EF4444] hover:bg-gradient-to-r from-[#EF4444]/30 from-[80%] to-white/5 transition-all duration-500 ease-in-out rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 lg:p-7 hover:text-white group">
            <h1 className="text-[16px] sm:text-[18px] md:text-[20px] font-[600] mb-2 sm:mb-3">Get The App</h1>
            
            <div className="flex items-center gap-2 text-gray-300 hover:text-gray-100 transition-all duration-500 ease-in-out cursor-pointer mb-2 sm:mb-3">
              <MdOutlineFileDownload size={18} sm:size={20} />
              <p className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px]">Download on the App Store</p>
            </div>
            
            <div className="flex items-center gap-2 text-gray-300 hover:text-gray-100 transition-all duration-500 ease-in-out cursor-pointer">
              <MdOutlineFileDownload size={18} sm:size={20} />
              <p className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px]">Get it on Google Play</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full lg:w-[50%] order-1 lg:order-2 flex justify-center lg:justify-end mb-6 sm:mb-8 lg:mb-0">
        <img 
          src="/images/dw.png" 
          alt="Flashoot App Download" 
          className="w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-[600px] h-auto"
        />
      </div>
    </div>
  );
};

export default Download;