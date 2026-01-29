import { useState, useEffect, useRef } from "react";
import { BsStars } from "react-icons/bs";
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa";
import { gsap } from "gsap";

const cardData = [
  {
    heading: "Live Tracting",
    description: "Discover amazing functionality with our first feature.",
    image: "/images/fe1.png",
  },
  {
    heading: "Customer Support",
    description: "Enhance your experience with this powerful tool.",
    image: "/images/fe2.png",
  },
  {
    heading: "Female Reel-Maker",
    description: "Seamless integration for all your needs.",
    image: "/images/fe3.png",
  },
  {
    heading: "Pick a Partner",
    description: "Boost productivity with this feature.",
    image: "/images/fe4.png",
  },
  {
    heading: "Content Storage",
    description: "Simplify tasks with our intuitive design.",
    image: "/images/fe5.png",
  },
  {
    heading: "Instant Booking",
    description: "Advanced analytics at your fingertips.",
    image: "/images/fe6.png",
  },
];

const Features = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [cardsPerView, setCardsPerView] = useState(4);
  const [isInitialAnimationDone, setIsInitialAnimationDone] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const containerRef = useRef(null);
  const carouselRef = useRef(null);
  const cardRefs = useRef([]);
  cardRefs.current = [];

  // Handle responsive cards per view
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) { // Mobile
        setCardsPerView(1);
        setIsMobile(true);
      } else if (width < 1024) { // Tablet
        setCardsPerView(2);
        setIsMobile(false);
      } else { // Desktop
        setCardsPerView(4);
        setIsMobile(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Create extended card data based on cards per view
  const extendedCardData = [...cardData, ...cardData.slice(0, cardsPerView)];

  // Animation on scroll into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const validCards = cardRefs.current.slice(0, cardsPerView).filter(Boolean);

          gsap.from(validCards, {
            y: 50,
            opacity: 0,
            duration: 0.6,
            stagger: 0.2,
            ease: "power2.out",
            onComplete: () => setIsInitialAnimationDone(true),
          });

          observer.disconnect(); // Run once
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [cardsPerView]);

  // Auto-scroll after animation
  useEffect(() => {
    if (!isInitialAnimationDone || isMobile) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex >= cardData.length) {
          setIsTransitioning(false);
          setTimeout(() => setIsTransitioning(true), 50);
          return 0;
        }
        return prevIndex + 1;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [isInitialAnimationDone, isMobile, cardData.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        setIsTransitioning(false);
        const newIndex = cardData.length;
        setTimeout(() => setIsTransitioning(true), 50);
        return newIndex;
      }
      return prevIndex - 1;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex >= cardData.length) {
        setIsTransitioning(false);
        setTimeout(() => setIsTransitioning(true), 50);
        return 0;
      }
      return prevIndex + 1;
    });
  };

  // Calculate active dot index
  const activeDotIndex = currentIndex % cardData.length;

  return (
    <div className="min-h-screen mt-20 sm:mt-24 md:mt-28 lg:mt-30 font-sans px-4 sm:px-6 md:px-8 lg:px-10" ref={containerRef}>
      <div className="flex flex-col items-center gap-3 sm:gap-4 max-w-7xl mx-auto">
        <div className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-[#6B191C] w-fit bg-gradient-to-r from-[#531315] to-[#3A0B0D] flex items-center gap-1.5 sm:gap-2">
          <BsStars size={18} sm:size={20} className="text-[#EF4343]" />
          <p className="text-[13px] sm:text-[14px] font-[500]">Get to know Flashoot</p>
        </div>
        <h1 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px] font-[700] text-center leading-tight sm:leading-snug lg:leading-normal px-2">
          Features That Make Us{" "}
          <span className="bg-gradient-to-r from-[#EF4444] from-[93%] to-[#3A0B0D] bg-clip-text text-transparent">
            Stand Out
          </span>
        </h1>
      </div>

      <div className="relative max-w-7xl mx-auto mt-8 sm:mt-10 md:mt-12">
        <button
          onClick={handlePrev}
          className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 bg-black/80 border border-gray-600 text-white p-3 sm:p-4 rounded-full hover:bg-[#3A0B0D] transition-colors z-10"
          aria-label="Previous slide"
        >
          <FaChevronLeft size={13} sm:size={15} />
        </button>

        <div className="overflow-hidden px-2 sm:px-4">
          <div
            className={`flex ${
              isTransitioning
                ? "transition-transform duration-500 ease-in-out"
                : ""
            }`}
            ref={carouselRef}
            style={{
              transform: `translateX(-${(currentIndex * 100) / cardsPerView}%)`,
            }}
          >
            {extendedCardData.map((card, index) => (
              <div
                key={index}
                className={`${
                  cardsPerView === 1 ? "w-full" :
                  cardsPerView === 2 ? "w-1/2" :
                  "w-1/4"
                } flex-shrink-0 p-2 sm:p-3 md:p-4`}
                ref={(el) => (cardRefs.current[index] = el)}
              >
                <div className="group bg-gradient-to-r from-[#3F090C] to-[#280307] rounded-[20px] sm:rounded-[25px] md:rounded-[30px] shadow-lg overflow-hidden border border-transparent transition-all duration-500 hover:border-[#EF4343] h-full">

                  <div className="p-4 sm:p-5 md:p-6">
                    <h2 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-[700] text-white mb-2 transition-colors duration-500 group-hover:text-[#EF4343]">
                      {card.heading}
                    </h2>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px] leading-[20px] sm:leading-[22px] md:leading-[24px] font-[400] text-gray-400 transition-colors duration-500 group-hover:text-gray-300">
                      {card.description}
                    </p>
                  </div>

                  <div className="flex justify-center items-center py-3 sm:py-4 pb-6 sm:pb-8 md:pb-10 group">
                    <img
                      src={card.image}
                      alt={card.heading}
                      className="w-[120px] sm:w-[140px] md:w-[160px] lg:w-[180px] xl:w-[200px] h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={handleNext}
          className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 bg-black/80 border border-gray-600 text-white p-3 sm:p-4 rounded-full hover:bg-[#3A0B0D] transition-colors z-10"
          aria-label="Next slide"
        >
          <FaChevronRight size={13} sm:size={15} />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-1.5 sm:gap-2 mt-4 sm:mt-6 max-w-7xl mx-auto">
        {cardData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`${
              index === activeDotIndex 
                ? "bg-[#EF4343] w-8 sm:w-10" 
                : "bg-gray-600 w-6 sm:w-8"
            } h-1 sm:h-1.5 rounded-full transition-all duration-300`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Features;