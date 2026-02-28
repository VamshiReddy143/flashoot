import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { LuLinkedin } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-black mt-8 sm:mt-10 lg:mt-10 py-8 sm:py-10 px-4 sm:px-6 md:px-8 lg:px-10">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row  lg:items-center justify-between gap-6 sm:gap-8 lg:gap-0">
        {/* Company Info */}
        <div className="flex flex-col gap-1 text-center lg:text-left">
          <p className="text-[12px] sm:text-[13px] md:text-[14px] text-white/50">
            © 2025 shot&go
          </p>
          <p className="text-[12px] sm:text-[13px] md:text-[14px] text-white/50">
            A product of Kryons Private Limited
          </p>
        </div>

        {/* Certifications */}
        <div className="flex justify-center gap-4 sm:gap-5 items-start order-first lg:order-none">
          <img
            src="/svgs/protect.svg"
            alt="Protection certified"
            className="h-16 sm:h-18 md:h-20 w-auto"
          />
          <img
            src="/svgs/iso.svg"
            alt="ISO certified"
            className="h-16 sm:h-18 md:h-20 w-auto"
          />
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-center lg:items-end gap-2 sm:gap-3 md:gap-4">
          <p className="text-[14px] sm:text-[15px] md:text-[16px] text-white/80">
            Follow Us
          </p>
          <div className="flex items-center gap-2 sm:gap-3">
            <FiFacebook
              size={20}
              sm:size={22}
              md:size={25}
              className="text-white/70 hover:text-white cursor-pointer transition-colors duration-300"
            />
            <FaInstagram
              size={20}
              sm:size={22}
              md:size={25}
              className="text-white/70 hover:text-white cursor-pointer transition-colors duration-300"
            />
            <LuLinkedin
              size={20}
              sm:size={22}
              md:size={25}
              className="text-white/70 hover:text-white cursor-pointer transition-colors duration-300"
            />
            <FaXTwitter
              size={20}
              sm:size={22}
              md:size={25}
              className="text-white/70 hover:text-white cursor-pointer transition-colors duration-300"
            />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-[1px] bg-white/40 my-6 sm:my-8 md:my-10" />

      {/* Links Section */}
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
        <p className="text-white/50 text-[12px] sm:text-[13px] md:text-[14px] hover:text-white cursor-pointer transition-colors duration-300 whitespace-nowrap">
          Press & Blog
        </p>
        <p className="text-white/50 text-[12px] sm:text-[13px] md:text-[14px] hover:text-white cursor-pointer transition-colors duration-300 whitespace-nowrap">
          Patent
        </p>
        <p className="text-white/50 text-[12px] sm:text-[13px] md:text-[14px] hover:text-white cursor-pointer transition-colors duration-300 whitespace-nowrap">
          Privacy
        </p>
        <p className="text-white/50 text-[12px] sm:text-[13px] md:text-[14px] hover:text-white cursor-pointer transition-colors duration-300 whitespace-nowrap">
          Terms
        </p>
        <p className="text-white/50 text-[12px] sm:text-[13px] md:text-[14px] hover:text-white cursor-pointer transition-colors duration-300 whitespace-nowrap">
          Cookies
        </p>
        <p className="text-white/50 text-[12px] sm:text-[13px] md:text-[14px] hover:text-white cursor-pointer transition-colors duration-300 whitespace-nowrap">
          Contact
        </p>
        <p className="text-white/50 text-[12px] sm:text-[13px] md:text-[14px] hover:text-white cursor-pointer transition-colors duration-300 whitespace-nowrap">
          Careers
        </p>
        <p className="text-white/50 text-[12px] sm:text-[13px] md:text-[14px] hover:text-white cursor-pointer transition-colors duration-300 whitespace-nowrap">
          Verify Certificate
        </p>
      </div>
    </div>
  );
};

export default Footer;
