import { useState, useEffect } from "react";
import { BiHomeAlt } from "react-icons/bi";
import { FaRegCompass } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import { IoIosTimer } from "react-icons/io";
import { CiMobile2 } from "react-icons/ci";
import { MdKeyboardArrowRight } from "react-icons/md";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  const navLinks = [
    { path: "/", icon: <BiHomeAlt size={20} className="text-white/70" />, label: "Home" },
    { path: "/explore", icon: <FaRegCompass size={20} className="text-white/70" />, label: "Explore" },
    { path: "/partner", icon: <BsStars size={20} className="text-white/70" />, label: "Partner" },
    { path: "/about", icon: <IoIosTimer size={20} className="text-white/70" />, label: "About" },
  ];

  return (
    <div
      className={`sticky top-0 z-50 flex items-center justify-between text-white w-full px-4 sm:px-6 md:px-8 lg:max-w-7xl lg:mx-auto py-3 ${
        isScrolled ? "bg-white/0 backdrop-blur-lg" : ""
      }`}
    >
      {/* Logo with Link to Home */}
      <Link to="/" onClick={closeMenu}>
        <img 
          src="/images/shotandgo-logo.png" 
          alt="logo" 
          className="h-[35px] w-[90px] sm:h-[40px] sm:w-[100px]" 
        />
      </Link>

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
          {navLinks.map((link, index) => (
            <div key={link.path} className="flex items-center gap-4">
              <Link 
                to={link.path}
                className={`hover:bg-white/15 p-2 rounded-lg hover:cursor-pointer transition-colors duration-200 ${
                  location.pathname === link.path ? "bg-white/20" : ""
                }`}
              >
                {link.icon}
              </Link>
              {index < navLinks.length - 1 && (
                <div className="h-[20px] w-[2px] bg-white/40" />
              )}
            </div>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <Link 
            to="/get-app"
            className="flex gap-2 items-center text-[16px] bg-white/10 backdrop-blur-3xl px-4 xl:px-6 py-2 xl:py-3 rounded-xl cursor-pointer hover:bg-white/20 transition-colors duration-200"
          >
            <CiMobile2 size={21} className="font-bold" />
            <p className="text-[15px] xl:text-[16px] font-[400] leading-[24px]">Get the App</p>
            <MdKeyboardArrowRight size={20} />
          </Link>
          <Link 
            to="/contact"
            className="bg-[#FE002A] px-4 xl:px-6 py-2 xl:py-2 rounded-xl font-[500] leading-[26px] xl:leading-[28px] text-[16px] xl:text-[18px] hover:cursor-pointer hover:bg-[#FE002A]/90 transition-colors duration-200"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Mobile/Tablet Menu */}
      {isMenuOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm lg:hidden z-40"
            onClick={toggleMenu}
          />
          
          {/* Slide-out Menu */}
          <div className="fixed top-0 right-0 h-full w-64 bg-black/90 backdrop-blur-xl z-50 lg:hidden animate-slide-in">
            <div className="flex flex-col p-6 pt-20">
              {/* Mobile Navigation Links */}
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={closeMenu}
                    className={`flex items-center gap-3 p-3 rounded-lg transition-colors duration-200 ${
                      location.pathname === link.path 
                        ? "bg-white/20 text-white" 
                        : "text-white/70 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {link.icon}
                    <span className="text-[16px] font-[400]">{link.label}</span>
                  </Link>
                ))}
              </div>

              <div className="h-[1px] bg-white/20 my-6" />

              {/* Mobile Buttons */}
              <div className="flex flex-col gap-3">
                <Link
                  to="/get-app"
                  onClick={closeMenu}
                  className="flex items-center justify-between gap-2 text-[16px] bg-white/10 backdrop-blur-3xl px-4 py-3 rounded-xl hover:bg-white/20 transition-colors duration-200"
                >
                  <div className="flex items-center gap-2">
                    <CiMobile2 size={21} className="font-bold" />
                    <p className="text-[15px] font-[400]">Get the App</p>
                  </div>
                  <MdKeyboardArrowRight size={20} />
                </Link>
                <Link
                  to="/contact"
                  onClick={closeMenu}
                  className="bg-[#FE002A] px-4 py-3 rounded-xl font-[500] text-center text-[16px] hover:bg-[#FE002A]/90 transition-colors duration-200"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;