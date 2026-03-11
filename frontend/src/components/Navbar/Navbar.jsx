import { useState, useEffect } from "react";
import { CiMobile2 } from "react-icons/ci";
import { MdKeyboardArrowRight } from "react-icons/md";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

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
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/explore", label: "Discover" },
    { path: "/partner", label: "Partner" },
    { path: "/about", label: "About" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "py-5 bg-white/[0.03] backdrop-blur-xl"
          : "py-5"
      }`}
    >
      <div className="flex items-center justify-between w-full px-4 sm:px-6 md:px-8 lg:max-w-7xl lg:mx-auto">
        {/* Logo */}
        <Link to="/" onClick={closeMenu} className="relative z-10">
          <img
            src="/images/shotandgo-logo.png"
            alt="logo"
            className="h-[35px] w-[90px] sm:h-[40px] sm:w-[100px] transition-transform duration-300 hover:scale-105"
          />
        </Link>

        {/* Center Pill Navigation - Desktop */}
        <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2">
          <div className="flex items-center gap-1 bg-white/[0.06] border border-white/[0.08] rounded-full px-2 py-1.5 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative px-5 py-2 text-[14px] font-medium tracking-wide transition-colors duration-300"
                >
                  {isActive && (
                    <motion.span
                      layoutId="navbar-active"
                      className="absolute inset-0 bg-white/[0.12] rounded-full shadow-[0_0_20px_rgba(255,255,255,0.08)]"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span
                    className={`relative z-10 transition-colors duration-300 ${
                      isActive ? "text-white" : "text-white/50 hover:text-white/80"
                    }`}
                  >
                    {link.label}
                  </span>
                  {isActive && (
                    <motion.span
                      layoutId="navbar-glow"
                      className="absolute -bottom-[1px] left-1/2 -translate-x-1/2 w-8 h-[2px] rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.9),0_0_30px_rgba(255,255,255,0.4),0_0_50px_rgba(255,255,255,0.1)]"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Right Side Buttons - Desktop */}
        <div className="hidden lg:flex items-center gap-3 relative z-10">
          {/* <Link
            to="/get-app"
            className="group flex gap-2 items-center text-[14px] font-medium bg-white/[0.06] border border-white/[0.08] backdrop-blur-md px-5 py-2.5 rounded-full cursor-pointer hover:bg-white/[0.12] hover:border-white/[0.15] transition-all duration-300"
          >
            <CiMobile2 size={18} className="text-white/70 group-hover:text-white transition-colors" />
            <span className="text-white/80 group-hover:text-white transition-colors">Get App</span>
            <MdKeyboardArrowRight size={18} className="text-white/50 group-hover:translate-x-0.5 transition-all" />
          </Link> */}
          <Link
            to="/contact"
            className="relative px-6 py-2.5 rounded-full font-medium text-[14px] text-white overflow-hidden group transition-all duration-300"
          >
            <span className="absolute inset-0 bg-[#C83738] group-hover:opacity-90 transition-opacity" />
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[inset_0_0_20px_rgba(255,255,255,0.1)]" />
            <span className="relative z-10">Contact Us</span>
          </Link>
        </div>

        {/* Hamburger Icon - Mobile/Tablet */}
        <button
          className="lg:hidden relative z-10 text-white/70 hover:text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <HiX size={28} />
          ) : (
            <div className="bg-white/[0.08] border border-white/[0.1] p-2 rounded-xl hover:bg-white/[0.15] transition-all duration-300">
              <HiMenuAlt3 size={24} />
            </div>
          )}
        </button>
      </div>

      {/* Mobile/Tablet Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm lg:hidden z-40"
              onClick={toggleMenu}
            />

            {/* Slide-out Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-72 bg-black/80 backdrop-blur-2xl border-l border-white/[0.08] z-50 lg:hidden"
            >
              <div className="flex flex-col p-6 pt-20">
                {/* Close button */}
                <button
                  onClick={closeMenu}
                  className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors"
                  aria-label="Close menu"
                >
                  <HiX size={24} />
                </button>

                {/* Mobile Navigation Links */}
                <div className="flex flex-col gap-1">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08, duration: 0.3 }}
                    >
                      <Link
                        to={link.path}
                        onClick={closeMenu}
                        className={`block px-4 py-3 rounded-xl text-[15px] font-medium tracking-wide transition-all duration-300 ${
                          location.pathname === link.path
                            ? "bg-white/[0.1] text-white border border-white/[0.1]"
                            : "text-white/50 hover:text-white hover:bg-white/[0.05]"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <div className="h-[1px] bg-gradient-to-r from-transparent via-white/[0.15] to-transparent my-6" />

                {/* Mobile Buttons */}
                <div className="flex flex-col gap-3">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                  >
                    <Link
                      to="/get-app"
                      onClick={closeMenu}
                      className="flex items-center justify-between gap-2 text-[15px] bg-white/[0.06] border border-white/[0.08] backdrop-blur-md px-4 py-3.5 rounded-xl hover:bg-white/[0.12] transition-all duration-300"
                    >
                      <div className="flex items-center gap-2">
                        <CiMobile2 size={20} className="text-white/70" />
                        <span className="text-white/80 font-medium">Get the App</span>
                      </div>
                      <MdKeyboardArrowRight size={20} className="text-white/50" />
                    </Link>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Link
                      to="/contact"
                      onClick={closeMenu}
                      className="block bg-[#C83738] px-4 py-3.5 rounded-xl font-medium text-center text-[15px] hover:opacity-90 transition-opacity duration-300"
                    >
                      Contact Us
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;