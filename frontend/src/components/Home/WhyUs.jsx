import { BsStars } from "react-icons/bs";

const WhyUs = () => {
  return (
    <div className="min-h-screen flex flex-col items-center mt-30 px-10">
      <div className="flex flex-col items-center gap-4">
        <div className="px-4 py-2 rounded-full border border-[#6B191C] w-fit bg-gradient-to-r from-[#531315] to-[#3A0B0D] flex items-center gap-2">
          <BsStars size={20} className="text-[#EF4343]" />
          <p className="text-[14px] font-[500]">Why Choose Us</p>
        </div>
        <h1 className="text-[48px] font-[700]">
          Not Just Instant{" "}
          <span className="bg-gradient-to-r from-[#EF4444] from-[90%] to-[#3A0B0D] bg-clip-text text-transparent">
            Delivery, But..
          </span>
        </h1>
      </div>



      <div className="grid grid-cols-2 gap-7 mt-10">
        <div className="bg-white/3 flex items-center px-5 gap-5 border border-white/20 rounded-xl hover:border-[#EF4343] hover:text-[#EF4343] transition-colors duration-500">
            <img className="h-[200px]" src="/images/why1.png" alt="" />
            <div className="space-y-3">
                <h3 className="font-[700] text-[20px] leading-[28px] ">Trained & Certified Reel Makers</h3>
                <p className="text-gray-400 text-[16px] font-[400 leading-[24px]]">Each Partner clears 6 filters to get their certification</p>
            </div>
        </div>
        <div className=" bg-white/3 flex items-center px-5 gap-5 border border-white/20 rounded-xl hover:border-[#EF4343] hover:text-[#EF4343] transition-colors duration-500">
            <img className="h-[200px]" src="/images/why2.png" alt="" />
            <div className="space-y-3">
                <h3 className="font-[700] text-[20px] leading-[28px] ">Easy Booking</h3>
                <p className="text-gray-400 text-[16px] font-[400 leading-[24px]]">Stop strugging with complex booking procedure</p>
            </div>
        </div>
        <div className=" bg-white/3 flex items-center px-5 gap-5 border border-white/20 rounded-xl hover:border-[#EF4343] hover:text-[#EF4343] transition-colors duration-500">
            <img className="h-[200px]" src="/images/why3.png" alt="" />
            <div className="space-y-3">
                <h3 className="font-[700] text-[20px] leading-[28px] ">Unbelievable Pricing</h3>
                <p className="text-gray-400 text-[16px] font-[400 leading-[24px]]">Each Reel starts 1999/-</p>
            </div>
        </div>
        <div className="bg-white/3 flex items-center px-5 gap-5 border border-white/20 rounded-xl hover:border-[#EF4343] hover:text-[#EF4343] transition-colors duration-500">
            <img className="h-[200px]" src="/images/why4.png" alt="" />
            <div className="space-y-3">
                <h3 className="font-[700] text-[20px] leading-[28px] ">Safe & Secure</h3>
                <p className="text-gray-400 text-[16px] font-[400 leading-[24px]]">You & Your data is safe and secured.</p>
            </div>
        </div>
        <div className="bg-white/3 flex items-center px-5 gap-5 border border-white/20 rounded-xl hover:border-[#EF4343] hover:text-[#EF4343] transition-colors duration-500">
            <img className="h-[200px]" src="/images/why5.png" alt="" />
            <div className="space-y-3">
                <h3 className="font-[700] text-[20px] leading-[28px] ">Instant Reels, Instant Editing</h3>
                <p className="text-gray-400 text-[16px] font-[400 leading-[24px]]">No hidden charges! Clients get upfront pricing, secure payment options, and a seamless checkout experience.</p>
            </div>
        </div>
        <div className="bg-white/3 flex items-center px-5 gap-5 border border-white/20 rounded-xl hover:border-[#EF4343] hover:text-[#EF4343] transition-colors duration-500">
            <img className="h-[200px]" src="/images/why6.png" alt="" />
            <div className="space-y-3">
                <h3 className="font-[700] text-[20px] leading-[28px] ">Women Safety</h3>
                <p className="text-gray-400 text-[16px] font-[400 leading-[24px]]">A women can book a female Reel maker</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
