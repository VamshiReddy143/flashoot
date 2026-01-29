import { useState, useEffect } from "react";
import { BiHomeAlt } from "react-icons/bi";
import { FaRegCompass } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import { IoIosTimer } from "react-icons/io";
import { CiMobile2 } from "react-icons/ci";
import { MdKeyboardArrowRight } from "react-icons/md";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`sticky top-0 z-50 flex items-center justify-between text-white w-full px-4 sm:px-6 md:px-8 lg:max-w-7xl lg:mx-auto py-3 ${
        isScrolled ? "bg-white/0 backdrop-blur-lg" : ""
      }`}
    >
      {/* Logo */}
      <img 
        src="/images/logo.png" 
        alt="logo" 
        className="h-[35px] w-[90px] sm:h-[40px] sm:w-[100px]" 
      />

      {/* Hamburger Icon for Mobile/Tablet */}
      <button
        className="lg:hidden text-white/70 hover:text-white focus:outline-none"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? (
          <HiX size={28} className="sm:size-30" />
        ) : (
          <div className="bg-white/10 p-1.5 sm:p-2 hover:bg-white/15 rounded-lg hover:cursor-pointer text-white">
            <HiMenuAlt3 size={26} className="sm:size-30" />
          </div>
        )}
      </button>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center gap-8 xl:gap-40 w-full justify-end">
        <div 
          className={`flex items-center gap-4 p-3 ${
            isScrolled ? "bg-white/7 backdrop-blur-2xl rounded-xl" : ""
          }`}
        >
          <div className="hover:bg-white/15 p-2 rounded-lg hover:cursor-pointer transition-colors duration-200">
            <BiHomeAlt size={20} className="text-white/70" />
          </div>
          <div className="h-[20px] w-[2px] bg-white/40" />
          <div className="hover:bg-white/15 p-2 rounded-lg hover:cursor-pointer transition-colors duration-200">
            <FaRegCompass size={20} className="text-white/70" />
          </div>
          <div className="h-[20px] w-[2px] bg-white/40" />
          <div className="hover:bg-white/15 p-2 rounded-lg hover:cursor-pointer transition-colors duration-200">
            <BsStars size={20} className="text-white/70" />
          </div>
          <div className="h-[20px] w-[2px] bg-white/40" />
          <div className="hover:bg-white/15 p-2 rounded-lg hover:cursor-pointer transition-colors duration-200">
            <IoIosTimer size={20} className="text-white/70" />
          </div>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <div className="flex gap-2 items-center text-[16px] bg-white/10 backdrop-blur-3xl px-4 xl:px-6 py-2 xl:py-3 rounded-xl cursor-pointer hover:bg-white/20 transition-colors duration-200">
            <CiMobile2 size={21} className=" font-bold" />
            <p className="text-[15px] xl:text-[16px] font-[400] leading-[24px]">Get the App</p>
            <MdKeyboardArrowRight size={20} className="" />
          </div>
          <button className="bg-[#FE002A] px-4 xl:px-6 py-2 xl:py-2 rounded-xl font-[500] leading-[26px] xl:leading-[28px] text-[16px] xl:text-[18px] hover:cursor-pointer hover:bg-[#FE002A]/90 transition-colors duration-200">
            Contact Us
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Sidebar Menu */}
      {/* <div
        className={`fixed top-0 right-0 h-full w-64 sm:w-72 bg-gray-900/95 backdrop-blur-lg text-white transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden z-50 p-6`}
      >
        <button
          className="absolute top-4 right-4 text-white focus:outline-none hover:text-white/80 transition-colors duration-200"
          onClick={toggleMenu}
          aria-label="Close menu"
        >
          <HiX size={30} />
        </button>
        <div className="flex flex-col gap-6 mt-16">
          <div className="flex items-center gap-3 hover:bg-white/15 p-2 rounded-lg cursor-pointer transition-colors duration-200">
            <BiHomeAlt size={25} className="text-white/70" />
            <span className="text-[16px] sm:text-[17px]">Home</span>
          </div>
          <div className="flex items-center gap-3 hover:bg-white/15 p-2 rounded-lg cursor-pointer transition-colors duration-200">
            <FaRegCompass size={25} className="text-white/70" />
            <span className="text-[16px] sm:text-[17px]">Explore</span>
          </div>
          <div className="flex items-center gap-3 hover:bg-white/15 p-2 rounded-lg cursor-pointer transition-colors duration-200">
            <BsStars size={25} className="text-white/70" />
            <span className="text-[16px] sm:text-[17px]">Trending</span>
          </div>
          <div className="flex items-center gap-3 hover:bg-white/15 p-2 rounded-lg cursor-pointer transition-colors duration-200">
            <IoIosTimer size={25} className="text-white/70" />
            <span className="text-[16px] sm:text-[17px]">Recent</span>
          </div>
          <div className="h-[1px] w-full bg-white/40" />
          <div className="flex gap-2 items-center text-[16px] bg-white/10 backdrop-blur-3xl px-4 py-3 rounded-xl cursor-pointer hover:bg-white/20 transition-colors duration-200">
            <CiMobile2 size={23} className="font-bold" />
            <p className="text-[16px] font-[400] leading-[24px]">Get the App</p>
            <MdKeyboardArrowRight size={22} />
          </div>
          <button className="bg-[#FE002A] px-4 py-3 rounded-xl font-[500] text-[16px] hover:cursor-pointer hover:bg-[#FE002A]/90 transition-colors duration-200">
            Contact Us
          </button>
        </div>
      </div> */}

      {/* Overlay for Mobile/Tablet Menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm lg:hidden z-40"
          onClick={toggleMenu}
        ></div>
      )}
    </div>
  );
};

export default Navbar;