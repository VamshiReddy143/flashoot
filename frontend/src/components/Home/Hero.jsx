import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Hero = () => {
  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Animate the hero image
    gsap.fromTo(
      ".hero-image",
      {
        transform: "perspective(800px) rotateX(30deg) scaleY(1.2)", // Tilted effect: shorter top, wider bottom
        transformOrigin: "center bottom", // Pivot from bottom
        y: -450, // Start higher to overlap half of "10 Minutes" text
      },
      {
        transform: "perspective(800px) rotateX(0deg) scaleY(1)", // Normal shape
        y: 50, // Move below the text
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top 80%", // Start when section is 80% in view
          end: "bottom 20%", // End when section bottom is 20% in view
          scrub: 1, // Smoothly animate with scroll
          toggleActions: "play none none reverse", // Reverse on scroll up
        },
      }
    );

    // Cleanup ScrollTrigger on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="flex font-sans flex-col items-center justify-center min-h-screen text-center pt-40 hero-section">
      <div className="leading-[90px]">
        <div className="leading-[30px]">
          <p className="font-sans text-[#C83738] font-[600] text-[16px]">
            WORLD'S FIRST QUICK CONTENT SERVICE
          </p>
          <h3 className="font-sans text-white font-[700] text-[30px]">
            We Shoot • Edit • Deliver Reels in
          </h3>
        </div>

        <div className="relative flex flex-col items-center mt-4">
          <h1 className="font-sans text-[#EE4343] text-[128px] font-[700]">
            10 Minutes*
          </h1>

          <div className="border-12 bg-[#1A1A1A] border-[#1A1A1A] rounded-[30px] hero-image shadow-xl relative">
            {/* iPhone camera-like structure */}
            <div className="absolute top-[-5px] left-1/2 transform -translate-x-1/2">
              <div className="moving-border w-[100px] h-[33px] rounded-b-2xl flex items-center justify-center gap-2">
                <div className="w-[12px] h-[12px] bg-gray-700 rounded-full"></div>
              </div>
            </div>

            <img
              className="h- w-[280px] object-cover object-top  rounded-[20px] shadow-2xl"
              src="/images/hero.png"
              alt="Hero image"
            />
          </div>
        </div>
      </div>

      <div className="mt-16">
        <div className="flex gap-3 items-center">
          <div className="border border-gray-600 bg-[#2D242F] backdrop-blur-3xl rounded-xl py-2 px-4">
            <p>Shot on  iPhone</p>
          </div>
          <div className="border border-gray-600 bg-[#2D242F] backdrop-blur-3xl rounded-xl py-2 px-4">
            <p>Backed by ISB</p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <div className="flex gap-3 items-center hover:cursor-pointer">
          <div className="bg-[#ED4343] backdrop-blur-3xl rounded-xl py-6 px-7 transition-transform duration-300 transform hover:scale-105">
            <p className="text-[16px] font-[600]">Book Now</p>
          </div>
          <div className="bg-white/10 border border-white/20 backdrop-blur-3xl rounded-xl py-6 px-7 cursor-pointer hover:bg-white/15 transition-transform duration-300 transform hover:scale-105">
            <p className="text-[16px] font-[600]">Become a Partner</p>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <div className="flex items-center gap-8">
          <div className="flex flex-col items-center leading-[30px]">
            <h2 className="text-[#EF4343] font-[700] text-[30px]">50,000+</h2>
            <p className="text-[16px] text-gray-500">Reels Delivered</p>
          </div>

          <div className="h-[42px] w-[1px] bg-white/20" />

          <div className="flex flex-col items-center leading-[30px]">
            <h2 className="text-[#EF4343] font-[700] text-[30px]">4.9/5</h2>
            <p className="text-[16px] text-gray-500">Rating</p>
          </div>

          <div className="h-[42px] w-[1px] bg-white/20" />

          <div className="flex flex-col items-center leading-[30px]">
            <h2 className="text-[#EF4343] font-[700] text-[30px]">500+</h2>
            <p className="text-[16px] text-gray-500">Reel-Makers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
