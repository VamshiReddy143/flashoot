import { FaIndianRupeeSign } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";

const PricingPlans = () => {
  return (
    <div className="min-h-screen mt-30 px-10">
      <div className="flex flex-col items-center gap-4">
        <div className="px-4 py-2 rounded-full border border-[#6B191C] w-fit bg-gradient-to-r from-[#531315] to-[#3A0B0D] flex items-center gap-2">
          <FaIndianRupeeSign size={17} className="text-[#EF4343]" />
          <p className="text-[14px] font-[500]">Pricing Plans</p>
        </div>
        <div className="text-center">
          <h1 className="text-[48px] font-[700]">
            Choose Your{" "}
            <span className="bg-gradient-to-r from-[#EF4444] from-[93%] to-[#3A0B0D] bg-clip-text text-transparent">
              Perfect Plan
            </span>
          </h1>
          <p className="text-[18px] font-[400] text-gray-300">
            Professional content creation services tailored to your needs
          </p>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-7">
        <div className="border bg-gradient-to-r from-[#3F090C] to-[#280307] border-[#D1D5DB]/10 rounded-[20px] p-13 flex flex-col">
          <div className="space-y-2 flex-grow">
            <p className="text-[14px] font-[500] tracking-[0.2em] text-[#EF4343]">
              FOR YOUR SPECIAL DAY
            </p>
            <h1 className="text-[36px] font-[700] text-gray-200">
              Wedding Packages
            </h1>
            <p className="text-[18px] font-[400] text-[#9CA3AF] leading-[28px]">
              Professional coverage for your wedding celebrations, specializing
              in traditional and modern Indian ceremonies with elegant, timeless
              captures.
            </p>

            <div className="mt-7 leading-[20px]">
              <p className="text-[#9CA3AF] text-[18px] font-400">Starting from</p>
              <div className="flex items-center">
                <FaIndianRupeeSign className="text-[48px] font-[700] mt-3 text-[#EF4343]" />
                <h1 className="text-[48px] font-[700] text-[#EF4343]">
                  14,999
                  <span className="text-[#9CA3AF] text-[18px] font-[400]">
                    {" "}
                    /package
                  </span>
                </h1>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-4 gap-4">
              <div className="p-4 bg-white/8 rounded-xl border-1 border-[#EF4343]">
                <p className="text-[12px] font-[700] leading-[16px] text-[#FF6A6A] tracking-[0.1em]">
                  SINGLE <br />
                  EVENT
                </p>
                <p className="text-[24px] font-[700] leading-[32px]">Basic</p>
              </div>
              <div className="p-4 bg-white/8 rounded-xl border-1 border-[#EF4343]">
                <p className="text-[12px] font-[700] leading-[16px] text-[#FF6A6A] tracking-[0.1em]">
                  THREE
                  <br />
                  EVENTS
                </p>
                <p className="text-[24px] font-[700] leading-[32px]">Silver</p>
              </div>
              <div className="p-4 bg-white/8 rounded-xl border-1 border-[#EF4343]">
                <p className="text-[12px] font-[700] leading-[16px] text-[#FF6A6A] tracking-[0.1em]">
                  FOUR <br />
                  EVENTS
                </p>
                <p className="text-[24px] font-[700] leading-[32px]">Gold</p>
              </div>
              <div className="p-4 bg-white/8 rounded-xl border-1 border-[#EF4343]">
                <p className="text-[12px] font-[700] leading-[16px] text-[#FF6A6A] tracking-[0.1em]">
                  COMPLETE <br />
                  WEDDING
                </p>
                <p className="text-[24px] font-[700] leading-[32px]">Platinum</p>
              </div>
            </div>
          </div>

          <div className="flex text-[18px] font-[500] leading-[28px] items-center gap-3 mt-6 bg-[#C80021] w-fit px-15 py-3 rounded-xl">
            <p>Know More</p>
            <FaArrowRight />
          </div>
        </div>

        <div className="border bg-gradient-to-r from-[#3F090C] to-[#280307] border-[#D1D5DB]/10 rounded-[20px] p-13 flex flex-col">
          <div className="space-y-2 flex-grow">
            <p className="text-[14px] font-[500] tracking-[0.2em] text-[#EF4343]">
              FOR BUSINESS EVENTS
            </p>
            <h1 className="text-[36px] font-[700] text-gray-200">
              Corporate Package
            </h1>
            <p className="text-[18px] font-[400] text-[#9CA3AF] leading-[28px]">
              Professional coverage for your business events, delivering
              polished content that aligns with your brand identity and
              marketing goals.
            </p>

            <div className="mt-7 leading-[20px]">
              <p className="text-[#9CA3AF] text-[18px] font-400">Starting from</p>
              <div className="flex items-center">
                <FaIndianRupeeSign className="text-[48px] font-[700] mt-3 text-[#EF4343]" />
                <h1 className="text-[48px] font-[700] text-[#EF4343]">
                  9,999
                  <span className="text-[#9CA3AF] text-[18px] font-[400]">
                    {" "}
                    /only
                  </span>
                </h1>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-[18px] font-[600] leading-[28px]">
                Package Inclusions:
              </p>
              <div className="mt-5 flex items-start gap-4">
                <div className="space-y-2 w-[50%]">
                  <div className="group flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#EF4343] transition-transform duration-300 group-hover:scale-125" />
                    <p className="text-[16px] font-[400]">
                      Up to 3 Reels (each up to 60 seconds)
                    </p>
                  </div>
                  <div className="group flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#EF4343] transition-transform duration-300 group-hover:scale-125" />
                    <p className="text-[16px] font-[400]">
                      Up to 6 hours of shoot time
                    </p>
                  </div>
                  <div className="group flex items-center gap-2">
                    <div className="w-3 h-2 rounded-full bg-[#EF4343] transition-transform duration-300 group-hover:scale-125" />
                    <p className="text-[16px] font-[400]">
                      Mobile portrait photos complimentary: up to 15
                    </p>
                  </div>
                  <div className="group flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#EF4343] transition-transform duration-300 group-hover:scale-125" />
                    <p className="text-[16px] font-[400]">
                      Shot on iPhone
                    </p>
                  </div>
                </div>
                <div className="space-y-2 w-[50%]">
                  <div className="group flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#EF4343] transition-transform duration-300 group-hover:scale-125" />
                    <p className="text-[16px] font-[400]">
                      Instant reel delivery
                    </p>
                  </div>
                  <div className="group flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#EF4343] transition-transform duration-300 group-hover:scale-125" />
                    <p className="text-[16px] font-[400]">
                      Flashoot branding included
                    </p>
                  </div>
                  <div className="group flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#EF4343] transition-transform duration-300 group-hover:scale-125" />
                    <p className="text-[16px] font-[400]">
                      Raw footage provided
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex text-[18px] font-[500] leading-[28px] items-center gap-3 mt-6 bg-[#C80021] w-fit px-15 py-3 rounded-xl">
            <p>Know More</p>
            <FaArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;