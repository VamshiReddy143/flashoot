import { MdOutlineFileDownload } from "react-icons/md";
import { TbShoppingBagDiscount } from "react-icons/tb";
const Download = () => {
  return (
    <div className="min-h-screen mt-10 flex items-center gap-7 px-10">
      <div className="w-[50%]">
        <div className="px-4 mb-6 py-2 rounded-full border border-[#6B191C] w-fit bg-gradient-to-r from-[#531315] to-[#3A0B0D] flex items-center gap-2">
          <MdOutlineFileDownload size={25} className="text-[#EF4343]" />
          <p className="text-[14px] font-[500]"> Download Now</p>
        </div>

        <h1 className="text-[48px] font-[700] leading-[50px]">
          Download The <br />
          <span className="bg-gradient-to-r from-[#EF4444] from-[90%] to-[#3A0B0D] bg-clip-text text-transparent">
            Flashoot App{" "}
          </span>
          Now
        </h1>
          <p className="text-[18px] text-gray-400 mt-5">
          Book a Reel-Maker, as easy as booking an Cab.
        </p>


       <div className="mt-10 space-y-3">

  {/* Card 1 */}
  <div className="bg-white/6 border border-white/5 hover:border-[#EF4444] hover:bg-gradient-to-r from-[#EF4444]/30 from-[80%] to-white/5 transition-all duration-500 ease-in-out flex items-center gap-3 rounded-xl p-7 hover:text-white">
    <div className="bg-[#EF4444]/10 p-4 border border-[#EF4444] rounded-xl">
      <TbShoppingBagDiscount className="text-[#EF4444]" size={35} />
    </div>
    <div>
      <h1 className="text-[20px] font-[600]">Get Upto 50% Discount</h1>
      <p className="text-[18px] font-[400] text-gray-300 group-hover:text-white">On Your First Booking</p>
    </div>
  </div>

  {/* Card 2 */}
  <div className="bg-white/6 border border-white/5 hover:border-[#EF4444] hover:bg-gradient-to-r from-[#EF4444]/30 from-[80%] to-white/5 transition-all duration-500 ease-in-out rounded-xl p-7 hover:text-white">
    <h1 className="text-[20px] font-[600]">Get The App</h1>
    
    <div className="flex items-center gap-2 text-gray-300 hover:text-gray-100 transition-all duration-500 ease-in-out">
      <MdOutlineFileDownload size={20} />
      <p>Download on the App Store</p>
    </div>
    
    <div className="flex items-center gap-2 text-gray-300 hover:text-gray-100 transition-all duration-500 ease-in-out">
      <MdOutlineFileDownload size={20} />
      <p>Get it on Google Play</p>
    </div>
  </div>

</div>

      </div>


      <div className="w-[50%]">
         <img src="/images/dw.png" alt="" />
      </div>
    </div>
  );
};

export default Download;
