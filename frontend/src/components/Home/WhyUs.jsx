import { FaArrowRightLong } from "react-icons/fa6";

const WhyUs = () => {
  return (
    <div className="min-h-screen flex flex-col  mt-20 sm:mt-24 md:mt-28 lg:mt-30 px-4 sm:px-6 md:px-8 lg:px-10">
      <div className="flex flex-col  gap-3 sm:gap-4">
        {/* <div className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-[#6B191C] w-fit bg-gradient-to-r from-[#531315] to-[#3A0B0D] flex items-center gap-1.5 sm:gap-2">
          <BsStars size={18} sm:size={20} className="text-[#EF4343]" />
          <p className="text-[13px] sm:text-[14px] font-[500]">Why Choose Us</p>
        </div> */}
        <div className="text-start leading-[130px]">
          <h1 className="text-[130px] font-extrabold uppercase">WHY</h1>
         <div className="flex items-center justify-between">
           <h1 className="text-[130px] font-extrabold uppercase bg-gradient-to-r from-[#EF4444] from-[93%] to-[#3A0B0D] bg-clip-text text-transparent">CHOOSE</h1>
              <div className="flex items-center justify-end gap-3 sm:gap-4">
            <div className="bg-[#FE002A] px-8 py-8 rounded-full font-[500] leading-[26px] xl:leading-[28px] text-[16px] xl:text-[18px] hover:cursor-pointer hover:bg-[#FE002A]/90 transition-colors duration-200 flex items-center gap-2">
              <FaArrowRightLong size={40} />
            </div>
            <h1
              className="text-[130px] font-extrabold uppercase text-transparent"
              style={{ WebkitTextStroke: "2px white" }}
            >
              US
            </h1>
          </div>
         </div>
        </div>
       
      </div>

      <div className="mt-7 flex gap-4  justify-center">
        <div className="flex flex-col gap-4">
          <div className="bg-white/3 flex flex-col sm:flex-row items-center px-4 sm:px-5  gap-4 border border-white/20 rounded-xl hover:border-[#EF4343] hover:text-[#EF4343] transition-colors duration-500">
            <img
              className="h-[140px] sm:h-[160px] md:h-[180px] lg:h-[200px] w-auto"
              src="/images/a3.png"
              alt="Trained & Certified Reel Makers"
            />
            <div className="space-y-2 sm:space-y-3 text-center sm:text-left">
              <h3 className="font-[700] text-[18px] sm:text-[19px] lg:text-[25px] leading-[26px] sm:leading-[27px] lg:leading-[28px]">
                Trained & Certified Reel Makers
              </h3>
              <p className="text-gray-400 text-[14px] sm:text-[15px] lg:text-[17px] font-[400] leading-[22px] sm:leading-[23px] lg:leading-[24px]">
                Each Partner clears 6 filters to get their certification
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
              <div className="bg-white/3 w-[50%]  flex flex-col sm:flex-row items-center px-4 sm:px-5  gap-4 border border-white/20 rounded-xl hover:border-[#EF4343] hover:text-[#EF4343] transition-colors duration-500">
            <img
              className="h-[140px] sm:h-[160px] md:h-[180px] lg:h-[200px] w-auto"
              src="/images/a2.png"
              alt="Trained & Certified Reel Makers"
            />
            <div className="space-y-2 sm:space-y-3 text-center sm:text-left">
              <h3 className="font-[700] text-[18px] sm:text-[19px] lg:text-[25px] leading-[26px] sm:leading-[27px] lg:leading-[28px]">
                
Easy Booking
              </h3>
              <p className="text-gray-400 text-[14px] sm:text-[15px] lg:text-[17px] font-[400] leading-[22px] sm:leading-[23px] lg:leading-[24px]">
               Stop strugging with complex booking procedure
              </p>
            </div>
          </div>
            <div className="bg-white/3 w-[50%] flex flex-col sm:flex-row items-center px-4 sm:px-5  gap-4 border border-white/20 rounded-xl hover:border-[#EF4343] hover:text-[#EF4343] transition-colors duration-500">
            <img
              className="h-[140px] sm:h-[160px] md:h-[180px] lg:h-[200px] w-auto"
              src="/images/a1.png"
              alt="Trained & Certified Reel Makers"
            />
            <div className="space-y-2 sm:space-y-3 text-center sm:text-left">
              <h3 className="font-[700] text-[18px] sm:text-[19px] lg:text-[25px] leading-[26px] sm:leading-[27px] lg:leading-[28px]">
                Instant Reels, Instant Editing
              </h3>
              <p className="text-gray-400 text-[14px] sm:text-[15px] lg:text-[17px] font-[400] leading-[22px] sm:leading-[23px] lg:leading-[24px]">
               No hidden charges! Clients get upfront pricing, secure payment options, and a seamless checkout experience.
              </p>
            </div>
          </div>
          </div>
        </div>



            <div className="bg-white/3  w-[40%] flex flex-col  items-center px-4 sm:px-5  gap-4 border border-white/20 rounded-xl hover:border-[#EF4343] hover:text-[#EF4343] transition-colors duration-500">
            <img
              className="h-[140px] sm:h-[160px] md:h-[180px] lg:h-[200px] w-auto"
              src="/images/why4.png"
              alt="Trained & Certified Reel Makers"
            />
            <div className="space-y-2 sm:space-y-3 text-center ">
              <h3 className="font-[700] text-[18px] sm:text-[19px] lg:text-[25px] leading-[26px] sm:leading-[27px] lg:leading-[28px]">
                Safe & Secure
              </h3>
              <p className="text-gray-400 text-[14px] sm:text-[15px] lg:text-[17px] font-[400] leading-[22px] sm:leading-[23px] lg:leading-[24px]">
                You & Your data is safe and secured.
              </p>
            </div>
          </div>




      </div>

      {/* 
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-7 mt-8 sm:mt-10 w-full">
        <div className="bg-white/3 flex flex-col sm:flex-row items-center px-4 sm:px-5 py-4 gap-4 border border-white/20 rounded-xl hover:border-[#EF4343] hover:text-[#EF4343] transition-colors duration-500">
            <img className="h-[140px] sm:h-[160px] md:h-[180px] lg:h-[200px] w-auto" src="/images/why1.png" alt="Trained & Certified Reel Makers" />
            <div className="space-y-2 sm:space-y-3 text-center sm:text-left">
                <h3 className="font-[700] text-[18px] sm:text-[19px] lg:text-[20px] leading-[26px] sm:leading-[27px] lg:leading-[28px]">Trained & Certified Reel Makers</h3>
                <p className="text-gray-400 text-[14px] sm:text-[15px] lg:text-[16px] font-[400] leading-[22px] sm:leading-[23px] lg:leading-[24px]">Each Partner clears 6 filters to get their certification</p>
            </div>
        </div>
        <div className="bg-white/3 flex flex-col sm:flex-row items-center px-4 sm:px-5 py-4 gap-4 border border-white/20 rounded-xl hover:border-[#EF4343] hover:text-[#EF4343] transition-colors duration-500">
            <img className="h-[140px] sm:h-[160px] md:h-[180px] lg:h-[200px] w-auto" src="/images/why2.png" alt="Easy Booking" />
            <div className="space-y-2 sm:space-y-3 text-center sm:text-left">
                <h3 className="font-[700] text-[18px] sm:text-[19px] lg:text-[20px] leading-[26px] sm:leading-[27px] lg:leading-[28px]">Easy Booking</h3>
                <p className="text-gray-400 text-[14px] sm:text-[15px] lg:text-[16px] font-[400] leading-[22px] sm:leading-[23px] lg:leading-[24px]">Stop struggling with complex booking procedure</p>
            </div>
        </div>
        <div className="bg-white/3 flex flex-col sm:flex-row items-center px-4 sm:px-5 py-4 gap-4 border border-white/20 rounded-xl hover:border-[#EF4343] hover:text-[#EF4343] transition-colors duration-500">
            <img className="h-[140px] sm:h-[160px] md:h-[180px] lg:h-[200px] w-auto" src="/images/why3.png" alt="Unbelievable Pricing" />
            <div className="space-y-2 sm:space-y-3 text-center sm:text-left">
                <h3 className="font-[700] text-[18px] sm:text-[19px] lg:text-[20px] leading-[26px] sm:leading-[27px] lg:leading-[28px]">Unbelievable Pricing</h3>
                <p className="text-gray-400 text-[14px] sm:text-[15px] lg:text-[16px] font-[400] leading-[22px] sm:leading-[23px] lg:leading-[24px]">Each Reel starts 1999/-</p>
            </div>
        </div>
        <div className="bg-white/3 flex flex-col sm:flex-row items-center px-4 sm:px-5 py-4 gap-4 border border-white/20 rounded-xl hover:border-[#EF4343] hover:text-[#EF4343] transition-colors duration-500">
            <img className="h-[140px] sm:h-[160px] md:h-[180px] lg:h-[200px] w-auto" src="/images/why4.png" alt="Safe & Secure" />
            <div className="space-y-2 sm:space-y-3 text-center sm:text-left">
                <h3 className="font-[700] text-[18px] sm:text-[19px] lg:text-[20px] leading-[26px] sm:leading-[27px] lg:leading-[28px]">Safe & Secure</h3>
                <p className="text-gray-400 text-[14px] sm:text-[15px] lg:text-[16px] font-[400] leading-[22px] sm:leading-[23px] lg:leading-[24px]">You & Your data is safe and secured.</p>
            </div>
        </div>
        <div className="bg-white/3 flex flex-col sm:flex-row items-center px-4 sm:px-5 py-4 gap-4 border border-white/20 rounded-xl hover:border-[#EF4343] hover:text-[#EF4343] transition-colors duration-500">
            <img className="h-[140px] sm:h-[160px] md:h-[180px] lg:h-[200px] w-auto" src="/images/why5.png" alt="Instant Reels, Instant Editing" />
            <div className="space-y-2 sm:space-y-3 text-center sm:text-left">
                <h3 className="font-[700] text-[18px] sm:text-[19px] lg:text-[20px] leading-[26px] sm:leading-[27px] lg:leading-[28px]">Instant Reels, Instant Editing</h3>
                <p className="text-gray-400 text-[14px] sm:text-[15px] lg:text-[16px] font-[400] leading-[22px] sm:leading-[23px] lg:leading-[24px]">No hidden charges! Clients get upfront pricing, secure payment options, and a seamless checkout experience.</p>
            </div>
        </div>
        <div className="bg-white/3 flex flex-col sm:flex-row items-center px-4 sm:px-5 py-4 gap-4 border border-white/20 rounded-xl hover:border-[#EF4343] hover:text-[#EF4343] transition-colors duration-500">
            <img className="h-[140px] sm:h-[160px] md:h-[180px] lg:h-[200px] w-auto" src="/images/why6.png" alt="Women Safety" />
            <div className="space-y-2 sm:space-y-3 text-center sm:text-left">
                <h3 className="font-[700] text-[18px] sm:text-[19px] lg:text-[20px] leading-[26px] sm:leading-[27px] lg:leading-[28px]">Women Safety</h3>
                <p className="text-gray-400 text-[14px] sm:text-[15px] lg:text-[16px] font-[400] leading-[22px] sm:leading-[23px] lg:leading-[24px]">A women can book a female Reel maker</p>
            </div>
        </div>
      </div> */}
    </div>
  );
};

export default WhyUs;
