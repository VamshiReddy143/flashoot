import { FaInstagram } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs";
import { useState } from "react";

const Footer = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="bg-white/10 mt-10 sm:mt-16 lg:mt-20 w-full">

      {/* Mobile: completely redesigned */}
      <div className="flex flex-col sm:hidden px-5 py-8 gap-8">

        {/* Logo + tagline */}
        <div className="flex flex-col items-center gap-3">
          <img src="/images/a.png" alt="Shot&Go Logo" className="h-16 w-auto" />
          <p className="text-gray-500 text-xs text-center">
            Turn moments into memories — India · UAE · USA
          </p>
        </div>

        {/* Social icons row */}
        <div className="flex items-center justify-center gap-4">
          <div className="bg-[#282321] border-t border-gray-500 p-3 rounded-full cursor-pointer hover:bg-red-500/20 hover:border-red-500 transition-all duration-300">
            <FaInstagram size={18} />
          </div>
          <div className="bg-[#282321] border-t border-gray-500 p-3 rounded-full cursor-pointer hover:bg-blue-500/20 hover:border-blue-500 transition-all duration-300">
            <FiFacebook size={18} />
          </div>
          <div className="bg-[#282321] border-t border-gray-500 p-3 rounded-full cursor-pointer hover:bg-sky-500/20 hover:border-sky-500 transition-all duration-300">
            <BsTwitterX size={18} />
          </div>
        </div>

        {/* Links — 2 col grid, clean and compact */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-6 border-t border-white/10 pt-6">
          {/* Company */}
          <div>
            <h1 className="font-bold text-sm text-white mb-2 uppercase tracking-wider">Company</h1>
            <div className="flex flex-col gap-2">
              {["About", "Contact us", "Help desk"].map((l) => (
                <p key={l} className="text-gray-400 text-sm font-medium hover:text-white transition-colors cursor-pointer">{l}</p>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <h1 className="font-bold text-sm text-white mb-2 uppercase tracking-wider">Product</h1>
            <div className="flex flex-col gap-2">
              {["For creators", "For fans"].map((l) => (
                <p key={l} className="text-gray-400 text-sm font-medium hover:text-white transition-colors cursor-pointer">{l}</p>
              ))}
            </div>
          </div>

          {/* Partners */}
          <div>
            <h1 className="font-bold text-sm text-white mb-2 uppercase tracking-wider">Partners</h1>
            <p className="text-gray-400 text-sm font-medium hover:text-white transition-colors cursor-pointer">Sponsors</p>
          </div>

          {/* Legal */}
          <div>
            <h1 className="font-bold text-sm text-white mb-2 uppercase tracking-wider">Legal</h1>
            <div className="flex flex-col gap-2">
              {["Privacy Policy", "Terms of Use", "Creator Terms", "Copyright", "DMCA Notice"].map((l) => (
                <p key={l} className="text-gray-400 text-sm font-medium hover:text-white transition-colors cursor-pointer">{l}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-5 flex flex-col items-center gap-1.5">
          <p className="text-gray-500 text-xs text-center">© Copyright 2026. All rights reserved</p>
          <p className="text-gray-500 text-xs text-center">
            A product of{" "}
            <span className="font-bold text-gray-400 hover:text-white cursor-pointer transition-colors">Kryons Studios</span>
          </p>
        </div>
      </div>

      {/* Tablet & Laptop: original layout preserved exactly */}
      <div className="hidden sm:flex flex-col lg:flex-row items-start justify-between p-8 md:p-10 lg:px-20 max-w-9xl mx-auto">

        {/* Logo */}
        <div className="w-full lg:w-auto flex justify-center lg:justify-start mb-8 lg:mb-0">
          <div
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              src="/images/a.png"
              alt="Shot&Go Logo"
              className={`h-24 md:h-28 lg:h-[500px] w-auto transition-all duration-300 ${isHovered ? 'animate-jelly' : ''} hover:cursor-pointer`}
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-[60%]">
          <div className="grid grid-cols-3 md:grid-cols-4 gap-8 md:gap-10">
            <div className="flex flex-col items-start">
              <h1 className="font-bold text-[18px] lg:text-[20px] font-sans mb-4 text-white">Company</h1>
              <div className="flex flex-col gap-2">
                {["About", "Contact us", "Help desk"].map((l) => (
                  <p key={l} className="text-[15px] lg:text-[16px] font-semibold hover:underline cursor-pointer text-gray-300 hover:text-white transition-colors">{l}</p>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-start">
              <h1 className="font-bold text-[18px] lg:text-[20px] font-sans mb-4 text-white">Product</h1>
              <div className="flex flex-col gap-2">
                {["For creators", "For fans"].map((l) => (
                  <p key={l} className="text-[15px] lg:text-[16px] font-semibold hover:underline cursor-pointer text-gray-300 hover:text-white transition-colors">{l}</p>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-start">
              <h1 className="font-bold text-[18px] lg:text-[20px] font-sans mb-4 text-white">Partners</h1>
              <p className="text-[15px] lg:text-[16px] font-semibold hover:underline cursor-pointer text-gray-300 hover:text-white transition-colors">Sponsors</p>
            </div>

            <div className="flex flex-col items-start col-span-3 sm:col-span-1">
              <h1 className="font-bold text-[18px] lg:text-[20px] font-sans mb-4 text-white">Legal</h1>
              <div className="flex flex-col gap-2">
                {["Privacy Policy", "Terms of Use", "Creator Terms", "Copyright", "DMCA Notice"].map((l) => (
                  <p key={l} className="text-[15px] lg:text-[16px] font-semibold hover:underline cursor-pointer text-gray-300 hover:text-white transition-colors">{l}</p>
                ))}
              </div>
            </div>
          </div>

          {/* Socials */}
          <div className="flex items-center justify-center sm:justify-start gap-4 mt-10">
            <div className="bg-[#282321] border-t border-gray-500 p-4 rounded-full cursor-pointer hover:scale-110 transition-transform duration-300 hover:bg-red-500/20 hover:border-red-500">
              <FaInstagram size={18} />
            </div>
            <div className="bg-[#282321] border-t border-gray-500 p-4 rounded-full cursor-pointer hover:scale-110 transition-transform duration-300 hover:bg-blue-500/20 hover:border-blue-500">
              <FiFacebook size={18} />
            </div>
            <div className="bg-[#282321] border-t border-gray-500 p-4 rounded-full cursor-pointer hover:scale-110 transition-transform duration-300 hover:bg-sky-500/20 hover:border-sky-500">
              <BsTwitterX size={18} />
            </div>
          </div>

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0 mt-10 w-full">
            <p className="text-gray-500 text-[13px] lg:text-[14px] font-semibold text-center sm:text-left order-2 sm:order-1">
              © Copyright 2026. All rights reserved
            </p>
            <p className="text-gray-500 text-[13px] lg:text-[14px] font-semibold text-center sm:text-right order-1 sm:order-2">
              A product of{" "}
              <span className="font-bold hover:underline cursor-pointer text-gray-400 hover:text-white transition-colors">
                Kryons Studios
              </span>
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Footer;