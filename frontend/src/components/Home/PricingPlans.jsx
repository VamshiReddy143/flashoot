import { FaIndianRupeeSign } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import Meter from "../Meter";

const PricingPlans = () => {
  return (
    <div className="min-h-screen mt-20 sm:mt-24 md:mt-28 lg:mt-30 px-4 sm:px-6 md:px-8 lg:px-10">
      <div className="flex flex-col items-center gap-3 sm:gap-4 max-w-7xl mx-auto">
        <div className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-[#6B191C] w-fit bg-gradient-to-r from-[#531315] to-[#3A0B0D] flex items-center gap-1.5 sm:gap-2">
          <FaIndianRupeeSign size={16} sm:size={17} className="text-[#EF4343]" />
          <p className="text-[13px] sm:text-[14px] font-[500]">Pricing Plans</p>
        </div>
        <div className="text-center px-2">
          <h1 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px] font-[700] leading-tight sm:leading-snug lg:leading-normal">
            Choose Your{" "}
            <span className="bg-gradient-to-r from-[#EF4444] from-[93%] to-[#3A0B0D] bg-clip-text text-transparent">
              Perfect Plan
            </span>
          </h1>
          <p className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] font-[400] text-gray-300 mt-2">
            Professional content creation services tailored to your needs
          </p>
        </div>
      </div>

     

      <div className="mt-8 sm:mt-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 md:gap-7">
          {/* Wedding Package Card */}
          <div className="border bg-gradient-to-r from-[#3F090C] to-[#280307] border-[#D1D5DB]/10 rounded-[16px] sm:rounded-[18px] md:rounded-[20px] p-6 sm:p-8 md:p-10 lg:p-13 flex flex-col">
            <div className="space-y-2 sm:space-y-3 flex-grow">
              <p className="text-[12px] sm:text-[13px] md:text-[14px] font-[500] tracking-[0.15em] sm:tracking-[0.2em] text-[#EF4343]">
                FOR YOUR SPECIAL DAY
              </p>
              <h1 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-[700] text-gray-200">
                Wedding Packages
              </h1>
              <p className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] font-[400] text-[#9CA3AF] leading-[22px] sm:leading-[24px] md:leading-[26px] lg:leading-[28px]">
                Professional coverage for your wedding celebrations, specializing
                in traditional and modern Indian ceremonies with elegant, timeless
                captures.
              </p>

              <div className="mt-5 sm:mt-7 leading-[18px] sm:leading-[20px]">
                <p className="text-[#9CA3AF] text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] font-400">Starting from</p>
                <div className="flex items-center">
                  <FaIndianRupeeSign className="text-[32px] sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[48px] font-[700] mt-2 sm:mt-3 text-[#EF4343]" />
                  <h1 className="text-[32px] sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[48px] font-[700] text-[#EF4343]">
                    14,999
                    <span className="text-[#9CA3AF] text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] font-[400]">
                      {" "}
                      /package
                    </span>
                  </h1>
                </div>
              </div>

              <div className="mt-5 sm:mt-6">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                  <div className="p-3 sm:p-4 bg-white/8 rounded-xl border border-[#EF4343]">
                    <p className="text-[10px] sm:text-[11px] md:text-[12px] font-[700] leading-[14px] sm:leading-[16px] text-[#FF6A6A] tracking-[0.08em] sm:tracking-[0.1em]">
                      SINGLE <br />
                      EVENT
                    </p>
                    <p className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-[700] leading-[24px] sm:leading-[26px] md:leading-[28px] lg:leading-[32px]">Basic</p>
                  </div>
                  <div className="p-3 sm:p-4 bg-white/8 rounded-xl border border-[#EF4343]">
                    <p className="text-[10px] sm:text-[11px] md:text-[12px] font-[700] leading-[14px] sm:leading-[16px] text-[#FF6A6A] tracking-[0.08em] sm:tracking-[0.1em]">
                      THREE
                      <br />
                      EVENTS
                    </p>
                    <p className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-[700] leading-[24px] sm:leading-[26px] md:leading-[28px] lg:leading-[32px]">Silver</p>
                  </div>
                  <div className="p-3 sm:p-4 bg-white/8 rounded-xl border border-[#EF4343]">
                    <p className="text-[10px] sm:text-[11px] md:text-[12px] font-[700] leading-[14px] sm:leading-[16px] text-[#FF6A6A] tracking-[0.08em] sm:tracking-[0.1em]">
                      FOUR <br />
                      EVENTS
                    </p>
                    <p className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-[700] leading-[24px] sm:leading-[26px] md:leading-[28px] lg:leading-[32px]">Gold</p>
                  </div>
                  <div className="p-3 sm:p-4 bg-white/8 rounded-xl border border-[#EF4343]">
                    <p className="text-[10px] sm:text-[11px] md:text-[12px] font-[700] leading-[14px] sm:leading-[16px] text-[#FF6A6A] tracking-[0.08em] sm:tracking-[0.1em]">
                      COMPLETE <br />
                      WEDDING
                    </p>
                    <p className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-[700] leading-[24px] sm:leading-[26px] md:leading-[28px] lg:leading-[32px]">Platinum</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] font-[500] leading-[22px] sm:leading-[24px] md:leading-[26px] lg:leading-[28px] items-center gap-2 sm:gap-3 mt-5 sm:mt-6 bg-[#C80021] w-full sm:w-fit justify-center sm:justify-start px-6 sm:px-10 md:px-12 lg:px-15 py-2.5 sm:py-3 rounded-xl hover:bg-[#C80021]/90 transition-colors duration-300 cursor-pointer">
              <p>Know More</p>
              <FaArrowRight />
            </div>
          </div>

          {/* Corporate Package Card */}
          <div className="border bg-gradient-to-r from-[#3F090C] to-[#280307] border-[#D1D5DB]/10 rounded-[16px] sm:rounded-[18px] md:rounded-[20px] p-6 sm:p-8 md:p-10 lg:p-13 flex flex-col">
            <div className="space-y-2 sm:space-y-3 flex-grow">
              <p className="text-[12px] sm:text-[13px] md:text-[14px] font-[500] tracking-[0.15em] sm:tracking-[0.2em] text-[#EF4343]">
                FOR BUSINESS EVENTS
              </p>
              <h1 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-[700] text-gray-200">
                Corporate Package
              </h1>
              <p className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] font-[400] text-[#9CA3AF] leading-[22px] sm:leading-[24px] md:leading-[26px] lg:leading-[28px]">
                Professional coverage for your business events, delivering
                polished content that aligns with your brand identity and
                marketing goals.
              </p>

              <div className="mt-5 sm:mt-7 leading-[18px] sm:leading-[20px]">
                <p className="text-[#9CA3AF] text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] font-400">Starting from</p>
                <div className="flex items-center">
                  <FaIndianRupeeSign className="text-[32px] sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[48px] font-[700] mt-2 sm:mt-3 text-[#EF4343]" />
                  <h1 className="text-[32px] sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[48px] font-[700] text-[#EF4343]">
                    9,999
                    <span className="text-[#9CA3AF] text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] font-[400]">
                      {" "}
                      /only
                    </span>
                  </h1>
                </div>
              </div>

              <div className="mt-5 sm:mt-6">
                <p className="text-[16px] sm:text-[17px] md:text-[18px] font-[600] leading-[24px] sm:leading-[26px] md:leading-[28px]">
                  Package Inclusions:
                </p>
                <div className="mt-4 sm:mt-5 flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                  <div className="space-y-2 sm:space-y-3 w-full sm:w-1/2">
                    <div className="group flex items-start sm:items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#EF4343] transition-transform duration-300 group-hover:scale-125 flex-shrink-0 mt-1 sm:mt-0" />
                      <p className="text-[14px] sm:text-[15px] md:text-[16px] font-[400]">
                        Up to 3 Reels (each up to 60 seconds)
                      </p>
                    </div>
                    <div className="group flex items-start sm:items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#EF4343] transition-transform duration-300 group-hover:scale-125 flex-shrink-0 mt-1 sm:mt-0" />
                      <p className="text-[14px] sm:text-[15px] md:text-[16px] font-[400]">
                        Up to 6 hours of shoot time
                      </p>
                    </div>
                    <div className="group flex items-start sm:items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#EF4343] transition-transform duration-300 group-hover:scale-125 flex-shrink-0 mt-1 sm:mt-0" />
                      <p className="text-[14px] sm:text-[15px] md:text-[16px] font-[400]">
                        Mobile portrait photos complimentary: up to 15
                      </p>
                    </div>
                    <div className="group flex items-start sm:items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#EF4343] transition-transform duration-300 group-hover:scale-125 flex-shrink-0 mt-1 sm:mt-0" />
                      <p className="text-[14px] sm:text-[15px] md:text-[16px] font-[400]">
                        Shot on iPhone
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2 sm:space-y-3 w-full sm:w-1/2">
                    <div className="group flex items-start sm:items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#EF4343] transition-transform duration-300 group-hover:scale-125 flex-shrink-0 mt-1 sm:mt-0" />
                      <p className="text-[14px] sm:text-[15px] md:text-[16px] font-[400]">
                        Instant reel delivery
                      </p>
                    </div>
                    <div className="group flex items-start sm:items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#EF4343] transition-transform duration-300 group-hover:scale-125 flex-shrink-0 mt-1 sm:mt-0" />
                      <p className="text-[14px] sm:text-[15px] md:text-[16px] font-[400]">
                        Shot&Go branding included
                      </p>
                    </div>
                    <div className="group flex items-start sm:items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#EF4343] transition-transform duration-300 group-hover:scale-125 flex-shrink-0 mt-1 sm:mt-0" />
                      <p className="text-[14px] sm:text-[15px] md:text-[16px] font-[400]">
                        Raw footage provided
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] font-[500] leading-[22px] sm:leading-[24px] md:leading-[26px] lg:leading-[28px] items-center gap-2 sm:gap-3 mt-5 sm:mt-6 bg-[#C80021] w-full sm:w-fit justify-center sm:justify-start px-6 sm:px-10 md:px-12 lg:px-15 py-2.5 sm:py-3 rounded-xl hover:bg-[#C80021]/90 transition-colors duration-300 cursor-pointer">
              <p>Know More</p>
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;