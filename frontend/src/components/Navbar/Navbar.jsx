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
      className={`sticky top-0 z-50 flex items-center justify-between text-white max-w-7xl mx-auto px-4 sm:px-10 py-3 ${
        isScrolled ? "bg-white/0 backdrop-blur-lg" : ""
      }`}
    >
      {/* Logo */}
      <img src="/images/logo.png" alt="logo" className="h-[40px] w-[100px]" />

      {/* Hamburger Icon for Mobile/Tablet */}
      <button
        className="lg:hidden text-white/70 hover:text-white focus:outline-none"
        onClick={toggleMenu}
      >
        {isMenuOpen ? (
          <HiX size={30} />
        ) : (
          <div className="bg-white/10 p-2 hover:bg-white/15 rounded-lg hover:cursor-pointer text-white">
            <HiMenuAlt3 size={30} />
          </div>
        )}
      </button>

      {/* Desktop Navigation */}
     <div className="flex items-center gap-40">
       <div className={`hidden  lg:flex items-center gap-4 p-3 ${
        isScrolled ? "bg-white/7 backdrop-blur-2xl  rounded-xl " : ""
      }`}  >
        <div className="hover:bg-white/15 p-2 rounded-lg hover:cursor-pointer">
          <BiHomeAlt size={20} className="text-white/70" />
        </div>
        <div className="h-[20px] w-[2px] bg-white/40" />
        <div className="hover:bg-white/15 p-2 rounded-lg hover:cursor-pointer">
          <FaRegCompass size={20} className="text-white/70" />
        </div>
        <div className="h-[20px] w-[2px] bg-white/40" />
        <div className="hover:bg-white/15 p-2 rounded-lg hover:cursor-pointer">
          <BsStars size={20} className="text-white/70" />
        </div>
        <div className="h-[20px] w-[2px] bg-white/40" />
        <div className="hover:bg-white/15 p-2 rounded-lg hover:cursor-pointer">
          <IoIosTimer size={20} className="text-white/70" />
        </div>
      </div>

      {/* Desktop Buttons */}
      <div className="hidden lg:flex items-center gap-3">
        <div className="flex gap-2 items-center text-[16px] bg-white/10 backdrop-blur-3xl px-6 py-3 rounded-xl cursor-pointer hover:bg-white/20">
          <CiMobile2 size={23} className="font-bold" />
          <p className="text-[16px] font-[400] leading-[24px]">Get the App</p>
          <MdKeyboardArrowRight size={22} />
        </div>
        <button className="bg-[#FE002A] px-6 py-2 rounded-xl font-[500] leading-[28px] text-[18px] hover:cursor-pointer">
          Contact Us
        </button>
      </div>
     </div>

      {/* Mobile/Tablet Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900/95 text-white transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden z-50 p-6`}
      >
        <button
          className="absolute top-4 right-4 text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <HiX size={30} />
        </button>
        <div className="flex flex-col gap-6 mt-16">
          <div className="flex items-center gap-3 hover:bg-white/15 p-2 rounded-lg cursor-pointer">
            <BiHomeAlt size={25} className="text-white/70" />
            <span className="text-[16px]">Home</span>
          </div>
          <div className="flex items-center gap-3 hover:bg-white/15 p-2 rounded-lg cursor-pointer">
            <FaRegCompass size={25} className="text-white/70" />
            <span className="text-[16px]">Explore</span>
          </div>
          <div className="flex items-center gap-3 hover:bg-white/15 p-2 rounded-lg cursor-pointer">
            <BsStars size={25} className="text-white/70" />
            <span className="text-[16px]">Trending</span>
          </div>
          <div className="flex items-center gap-3 hover:bg-white/15 p-2 rounded-lg cursor-pointer">
            <IoIosTimer size={25} className="text-white/70" />
            <span className="text-[16px]">Recent</span>
          </div>
          <div className="h-[1px] w-full bg-white/40" />
          <div className="flex gap-2 items-center text-[16px] bg-white/10 backdrop-blur-3xl px-4 py-2 rounded-xl cursor-pointer hover:bg-white/20">
            <CiMobile2 size={23} className="font-bold" />
            <p className="text-[16px] font-[400] leading-[24px]">Get the App</p>
            <MdKeyboardArrowRight size={22} />
          </div>
          <button className="bg-[#FE002A] px-4 py-2 rounded-xl font-[500] text-[16px] hover:cursor-pointer">
            Contact Us
          </button>
        </div>
      </div>

      {/* Overlay for Mobile/Tablet Menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 lg:hidden z-40"
          onClick={toggleMenu}
        ></div>
      )}
    </div>
  );
};

export default Navbar;