import { GoArrowRight } from "react-icons/go";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Working = () => {
  const svgContainerRef = useRef(null);
  const pathRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const svgContainer = svgContainerRef.current;
    const path = pathRef.current;
    const section = sectionRef.current;

    if (!svgContainer || !path || !section) return;

    const pathLength = path.getTotalLength();
    const segmentLength = 60; // Length of the snake segment

    // Set initial stroke properties
    path.style.strokeDasharray = `${segmentLength} ${pathLength}`;
    path.style.strokeDashoffset = pathLength; // Start with snake hidden at top

    // GSAP animation for slower snake effect
    gsap.to(path, {
      strokeDashoffset: 0, // Move to 0 (end of path)
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top 20%",
        end: "bottom 80%",
        scrub: 2, // Increased for slower movement
        markers: false,
        invalidateOnRefresh: true, // Recalculate on resize
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="min-h-[150vh] mt-[10em] px-10 max-w-5xl mx-auto"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="px-4 py-2 rounded-full border border-[#6B191C] w-fit bg-gradient-to-r from-[#531315] to-[#3A0B0D] flex items-center gap-2">
          <GoArrowRight size={17} className="text-[#EF4343]" />
          <p className="text-[14px] font-[500]">How It Works</p>
        </div>
        <div className="text-center">
          <h1 className="text-[36px] font-[700]">
            Your Journey to Becoming a Flashooter
          </h1>
          <p className="text-[18px] font-[400] text-gray-300 mt-2">
            Simple steps to start your creative journey
          </p>
        </div>
      </div>
      <div className="flex mt-10 gap-10 h-[120vh]">
        <div className="w-12 flex flex-col items-start mr-8">
          <div ref={svgContainerRef} className="relative w-12 h-full">
            <svg
              viewBox="0 0 20 800"
              width="20"
              height="100%"
              className="block"
              aria-hidden="true"
              preserveAspectRatio="none"
            >
              {/* Background path (static) - Adjusted coordinates */}
              <path
                d="M 1 0 V 40 l 18 24 V 560 l -18 24 V 800"
                fill="none"
                stroke="#FE002A"
                strokeOpacity="0.2"
                strokeWidth="2"
              />
              {/* Snake path - Adjusted coordinates */}
              <path
                ref={pathRef}
                d="M 1 0 V 40 l 18 24 V 560 l -18 24 V 800"
                fill="none"
                stroke="#FE002A"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
        {/* Your content steps remain the same */}
        <div className="flex flex-col gap-4 w-full">
          <div className="flex items-start gap-4">
            <div className="w-16 aspect-square flex items-center justify-center text-[20px] font-[700] rounded-xl bg-[#801818]/70 hover:bg-[#801818]">
              1
            </div>
            <div className="border border-gray-900 cursor-pointer flex flex-col gap-3 text-gray-100 hover:border-[#EF4343]/20 bg-white/5 p-1.5 sm:p-2 lg:p-4 rounded-lg sm:rounded-xl mb-3 sm:mb-4 transition-colors hover:text-[#EF4343] duration-500 w-full">
              <h1 className="text-[15px] sm:text-[16px] md:text-[17px] lg:text-[22px] font-[600] text-left">Download & Apply</h1>
              <p className="pb-3 sm:pb-4 text-[14px] sm:text-[15px] md:text-[16px] text-gray-400 hover:text-gray-100 leading-[20px] sm:leading-[22px] md:leading-[24px] font-[400]">
                Download the Flashoot Partner App and complete your onboarding
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-16 aspect-square flex items-center justify-center text-[20px] font-[700] rounded-xl bg-[#801818]/70 hover:bg-[#801818]">
              2
            </div>
            <div className="border flex flex-col gap-3 border-gray-900 cursor-pointer text-gray-100 hover:border-[#EF4343]/20 bg-white/5 p-1.5 sm:p-2 lg:p-4 rounded-lg sm:rounded-xl mb-3 sm:mb-4 transition-colors hover:text-[#EF4343] duration-500 w-full">
              <h1 className="text-[15px] sm:text-[16px] md:text-[17px] lg:text-[22px] font-[600] text-left">Partner LMS & Learning Management System</h1>
              <p className="pb-3 sm:pb-4 text-[14px] sm:text-[15px] md:text-[16px] text-gray-400 hover:text-gray-100 leading-[20px] sm:leading-[22px] md:leading-[24px] font-[400]">
                Complete comprehensive learning modules to master reel creation and Flashoot standards
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-16 aspect-square flex items-center justify-center text-[20px] font-[700] rounded-xl bg-[#801818]/70 hover:bg-[#801818]">
              3
            </div>
            <div className="border flex flex-col gap-3 border-gray-900 cursor-pointer text-gray-100 hover:border-[#EF4343]/20 bg-white/5 p-1.5 sm:p-2 lg:p-4 rounded-lg sm:rounded-xl mb-3 sm:mb-4 transition-colors hover:text-[#EF4343] duration-500 w-full">
              <h1 className="text-[15px] sm:text-[16px] md:text-[17px] lg:text-[22px] font-[600] text-left">Demo Shoots</h1>
              <p className="pb-3 sm:pb-4 text-[14px] sm:text-[15px] md:text-[16px] text-gray-400 hover:text-gray-100 leading-[20px] sm:leading-[22px] md:leading-[24px] font-[400]">
                Complete 2 sample shoots with instant editing
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-16 aspect-square flex items-center justify-center text-[20px] font-[700] rounded-xl bg-[#801818]/70 hover:bg-[#801818]">
              4
            </div>
            <div className="border flex flex-col gap-3 border-gray-900 cursor-pointer text-gray-100 hover:border-[#EF4343]/20 bg-white/5 p-1.5 sm:p-2 lg:p-4 rounded-lg sm:rounded-xl mb-3 sm:mb-4 transition-colors hover:text-[#EF4343] duration-500 w-full">
              <h1 className="text-[15px] sm:text-[16px] md:text-[17px] lg:text-[22px] font-[600] text-left">Sign NDA (Non-Disclosure Agreement)</h1>
              <p className="pb-3 sm:pb-4 text-[14px] sm:text-[15px] md:text-[16px] text-gray-400 hover:text-gray-100 leading-[20px] sm:leading-[22px] md:leading-[24px] font-[400]">
                Sign the partner non-disclosure agreement to protect client confidentiality and business standards
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-16 aspect-square flex items-center justify-center text-[20px] font-[700] rounded-xl bg-[#801818]/70 hover:bg-[#801818]">
              5
            </div>
            <div className="border flex flex-col gap-3 border-gray-900 cursor-pointer text-gray-100 hover:border-[#EF4343]/20 bg-white/5 p-1.5 sm:p-2 lg:p-4 rounded-lg sm:rounded-xl mb-3 sm:mb-4 transition-colors hover:text-[#EF4343] duration-500 w-full">
              <h1 className="text-[15px] sm:text-[16px] md:text-[17px] lg:text-[22px] font-[600] text-left">Onboarded</h1>
              <p className="pb-3 sm:pb-4 text-[14px] sm:text-[15px] md:text-[16px] text-gray-400 hover:text-gray-100 leading-[20px] sm:leading-[22px] md:leading-[24px] font-[400]">
                Get app access, partner kit, and start earning
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Working;