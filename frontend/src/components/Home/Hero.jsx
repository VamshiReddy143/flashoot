import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CardCarousel from "../Curosel";

const Hero = () => {
  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Animate the hero image
    gsap.fromTo(
      ".hero-image",
      {
        transform: "perspective(800px) rotateX(30deg) scaleY(1.2)",
        transformOrigin: "center bottom",
        y: -450,
      },
      {
        transform: "perspective(800px) rotateX(0deg) scaleY(1)",
        y: 50,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1,
          toggleActions: "play none none reverse",
        },
      }
    );

    // Cleanup ScrollTrigger on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="flex font-sans flex-col items-center justify-center lg:min-h-screen text-center px-4 sm:px-6 md:px-8 lg:px-10 pt-12 sm:pt-20 md:pt-20 lg:pt-20">
      {/* Top Tagline */}
      <div className="w-full max-w-7xl mx-auto">
        <div className="leading-[20px] sm:leading-[25px] md:leading-[30px]">
          <p className="font-sans text-[#C83738] font-[600] text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px]">
            WORLD'S FIRST QUICK CONTENT SERVICE
          </p>
          <h3 className="font-sans text-white font-[700] text-[18px] sm:text-[22px] md:text-[26px] lg:text-[30px] mt-1 sm:mt-2">
            We Shoot • Edit • Deliver Reels in
          </h3>
        </div>

        {/* 10 Minutes Text */}
        <div className="relative flex flex-col items-center mt-2 sm:mt-3 md:mt-4">
          <h1 className="font-sans leading-[50px] sm:leading-[60px] md:leading-[70px] text-[#EE4343] font-[700] text-[50px] sm:text-[70px] md:text-[100px] lg:text-[128px]">
            10 <span className="text-[40px] sm:text-[50px] md:text-[80px] lg:text-[98px]">Minutes*</span>
          </h1>
        </div>
      </div>

      {/* Card Carousel */}
      <div className="w-full mt-4 sm:mt-6 md:mt-8">
        <CardCarousel />
      </div>

      {/* CTA Buttons */}
      <div className="mt-6 sm:mt-8 md:mt-10">
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center">
          <div className="bg-[#ED4343] backdrop-blur-3xl rounded-xl py-4 sm:py-5 md:py-6 px-5 sm:px-6 md:px-7 transition-transform duration-300 transform hover:scale-105 w-full sm:w-auto">
            <p className="text-[14px] sm:text-[15px] md:text-[16px] font-[600] whitespace-nowrap">Book Now</p>
          </div>
          <div className="bg-white/10 border border-white/20 backdrop-blur-3xl rounded-xl py-4 sm:py-5 md:py-6 px-5 sm:px-6 md:px-7 cursor-pointer hover:bg-white/15 transition-transform duration-300 transform hover:scale-105 w-full sm:w-auto">
            <p className="text-[14px] sm:text-[15px] md:text-[16px] font-[600] whitespace-nowrap">Become a Partner</p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-12 sm:mt-16 md:mt-20 w-full">
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-12">
          {/* Stat 1 */}
          <div className="flex flex-col items-center leading-[20px] sm:leading-[25px] md:leading-[30px]">
            <h2 className="text-[#EF4343] font-[700] text-[24px] sm:text-[26px] md:text-[30px]">500+</h2>
            <p className="text-[12px] sm:text-[14px] md:text-[16px] text-gray-500 leading-tight">Reels Delivered</p>
          </div>

          {/* Divider - Hidden on very small screens */}
          <div className="hidden xs:block h-[30px] sm:h-[36px] md:h-[42px] w-[1px] bg-white/20" />

          {/* Stat 2 */}
          <div className="flex flex-col items-center leading-[20px] sm:leading-[25px] md:leading-[30px]">
            <h2 className="text-[#EF4343] font-[700] text-[24px] sm:text-[26px] md:text-[30px]">4.9/5</h2>
            <p className="text-[12px] sm:text-[14px] md:text-[16px] text-gray-500 leading-tight">Rating</p>
          </div>

          {/* Divider - Hidden on very small screens */}
          <div className="hidden xs:block h-[30px] sm:h-[36px] md:h-[42px] w-[1px] bg-white/20" />

          {/* Stat 3 */}
          <div className="flex flex-col items-center leading-[20px] sm:leading-[25px] md:leading-[30px]">
            <h2 className="text-[#EF4343] font-[700] text-[24px] sm:text-[26px] md:text-[30px]">500+</h2>
            <p className="text-[12px] sm:text-[14px] md:text-[16px] text-gray-500 leading-tight">Reel-Makers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;