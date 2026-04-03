import { useState, useEffect } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

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
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          isScrolled
            ? "py-3 sm:py-4 lg:py-5 bg-black/60 backdrop-blur-xl"
            : "py-3 sm:py-4 lg:py-5"
        }`}
      >
        <div className="flex items-center justify-between w-full px-4 sm:px-6 md:px-8 lg:max-w-7xl lg:mx-auto">
          {/* Logo */}
          <Link to="/" onClick={closeMenu}>
            <img
              src="/images/shotandgo-logo.png"
              alt="logo"
              className="h-[30px] sm:h-[35px] lg:h-[40px] w-auto transition-transform duration-300 hover:scale-105"
            />
          </Link>

          {/* Center Pill — desktop only */}
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
                        className="absolute inset-0 bg-white/[0.12] rounded-full"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className={`relative z-10 transition-colors duration-300 ${isActive ? "text-white" : "text-white/50 hover:text-white/80"}`}>
                      {link.label}
                    </span>
                    {isActive && (
                      <motion.span
                        layoutId="navbar-glow"
                        className="absolute -bottom-[1px] left-1/2 -translate-x-1/2 w-8 h-[2px] rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.9)]"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Contact — desktop only */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/contact"
              className="relative px-6 py-2.5 rounded-full font-medium text-[14px] text-white overflow-hidden group transition-all duration-300"
            >
              <span className="absolute inset-0 bg-[#C83738] group-hover:opacity-90 transition-opacity" />
              <span className="relative z-10">Contact Us</span>
            </Link>
          </div>

          {/* Hamburger — mobile only, always shows open icon */}
          <button
            className="lg:hidden text-white/70 hover:text-white focus:outline-none z-[100]"
            onClick={toggleMenu}
            aria-label="Open menu"
          >
            <div className="bg-white/[0.08] border border-white/[0.1] p-2 rounded-xl hover:bg-white/[0.15] transition-all duration-300">
              <HiMenuAlt3 size={24} />
            </div>
          </button>
        </div>
      </motion.nav>

      {/* Mobile drawer — always rendered outside nav stacking context */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[200] lg:hidden"
              onClick={closeMenu}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 220 }}
              className="fixed top-0 right-0 h-full w-full sm:w-96 bg-[#0a0a0a] border-l border-white/[0.08] z-[300] lg:hidden overflow-y-auto"
            >
              {/* ✕ Close button — pinned inside drawer, always visible */}
              <button
                onClick={closeMenu}
                aria-label="Close menu"
                className="absolute top-5 right-5 z-[310] flex items-center justify-center w-10 h-10 rounded-xl bg-white/[0.08] border border-white/[0.1] text-white hover:bg-white/[0.15] hover:text-white transition-all duration-300"
              >
                <HiX size={22} />
              </button>

              <div className="flex flex-col p-6 pt-20 min-h-full">

                {/* Logo */}
                <div className="mb-8">
                  <img src="/images/shotandgo-logo.png" alt="logo" className="h-[36px] w-auto" />
                </div>

                {/* Nav links */}
                <div className="flex flex-col gap-2 mb-8">
                  <h3 className="text-white/40 text-xs font-medium uppercase tracking-wider mb-2">Navigation</h3>
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.07, duration: 0.3 }}
                    >
                      <Link
                        to={link.path}
                        onClick={closeMenu}
                        className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-[16px] font-medium tracking-wide transition-all duration-300 ${
                          location.pathname === link.path
                            ? "bg-white/[0.1] text-white border border-white/[0.1]"
                            : "text-white/60 hover:text-white hover:bg-white/[0.05]"
                        }`}
                      >
                        <span>{link.label}</span>
                        {location.pathname === link.path && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C83738]" />
                        )}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-white/[0.12] to-transparent" />

                {/* Contact CTA */}
                <motion.div
                  className="mt-6"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                >
                  <Link
                    to="/contact"
                    onClick={closeMenu}
                    className="relative flex items-center justify-center w-full px-4 py-4 rounded-xl font-semibold text-[16px] text-white overflow-hidden group"
                  >
                    <span className="absolute inset-0 bg-[#C83738] group-hover:opacity-90 transition-opacity" />
                    <span className="relative z-10">Contact Us</span>
                  </Link>
                </motion.div>

                {/* Footer */}
                <div className="mt-auto pt-8 text-center">
                  <p className="text-white/20 text-xs">© 2025 Shot&Go. All rights reserved.</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;