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

const extendedCardData = [...cardData, ...cardData.slice(0, 4)];

const Features = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const cardsPerView = 4;
  const resetIndex = cardData.length;
  const [isInitialAnimationDone, setIsInitialAnimationDone] = useState(false);

  const containerRef = useRef(null);
  const cardRefs = useRef([]);
  cardRefs.current = [];

  // Animation on scroll into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const validCards = cardRefs.current.slice(0, 4).filter(Boolean);

          gsap.from(validCards, {
            y: 100,
            opacity: 0,
            duration: 0.6,
            stagger: 0.2,
            ease: "power2.out",
            onComplete: () => setIsInitialAnimationDone(true),
          });

          observer.disconnect(); // Run once
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Auto-scroll after animation
  useEffect(() => {
    if (!isInitialAnimationDone) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex >= resetIndex) {
          setIsTransitioning(false);
          setTimeout(() => setIsTransitioning(true), 0);
          return 0;
        }
        return prevIndex + 1;
      });
    }, 2500);

    return () => clearInterval(interval);
  }, [isInitialAnimationDone, resetIndex]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        setIsTransitioning(false);
        const newIndex = resetIndex;
        setTimeout(() => setIsTransitioning(true), 0);
        return newIndex;
      }
      return prevIndex - 1;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex >= resetIndex) {
        setIsTransitioning(false);
        setTimeout(() => setIsTransitioning(true), 0);
        return 0;
      }
      return prevIndex + 1;
    });
  };

  // Calculate active dot index (maps currentIndex to cardData length)
  const activeDotIndex = currentIndex % cardData.length;

  return (
    <div className="min-h-screen mt-30 font-sans px-10" ref={containerRef}>
      <div className="flex flex-col items-center gap-4">
        <div className="px-4 py-2 rounded-full border border-[#6B191C] w-fit bg-gradient-to-r from-[#531315] to-[#3A0B0D] flex items-center gap-2">
          <BsStars size={20} className="text-[#EF4343]" />
          <p className="text-[14px] font-[500]">Get to know Flashoot</p>
        </div>
        <h1 className="text-[48px] font-[700]">
          Features That Make Us{" "}
          <span className="bg-gradient-to-r from-[#EF4444] from-[93%] to-[#3A0B0D] bg-clip-text text-transparent">
            Stand Out
          </span>
        </h1>
      </div>

      <div className="relative max-w-7xl mx-auto mt-12">
        <button
          onClick={handlePrev}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-black border-1 border-gray-600 text-white p-4 rounded-full hover:bg-[#3A0B0D] transition-colors z-10"
        >
          <FaChevronLeft size={15} />
        </button>

        <div className="overflow-hidden">
          <div
            className={`flex ${
              isTransitioning
                ? "transition-transform duration-500 ease-in-out"
                : ""
            }`}
            style={{
              transform: `translateX(-${(currentIndex * 100) / cardsPerView}%)`,
            }}
          >
            {extendedCardData.map((card, index) => (
              <div
                key={index}
                className="w-1/4 flex-shrink-0 p-4"
                ref={(el) => (cardRefs.current[index] = el)}
              >
              <div className="group bg-gradient-to-r from-[#3F090C]  to-[#280307] rounded-[30px] shadow-lg overflow-hidden border border-transparent transition-all duration-500 hover:border-[#EF4343]">

                  <div className="p-6">
                    <h2 className="text-[24px] font-[700] text-white mb-2 transition-colors duration-500 group-hover:text-[#EF4343]">
                      {card.heading}
                    </h2>
                    <p className="text-[16px] leading-[24px] font-[400] text-gray-400 transition-colors duration-500 group-hover:text-gray-300">
                      {card.description}
                    </p>
                  </div>

                  <div className="flex justify-center items-center py-4 pb-10 group">
                    <img
                      src={card.image}
                      alt={card.heading}
                      className="w-[200px] h-auto object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={handleNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-black border-1 border-gray-600 text-white p-4 rounded-full hover:bg-[#3A0B0D] transition-colors z-10"
        >
          <FaChevronRight size={15} />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {cardData.map((_, index) => (
          <div
            key={index}
            className={`w-8 h-1 rounded-full ${
              index === activeDotIndex ? "bg-[#EF4343]" : "bg-gray-600"
            } transition-colors duration-300`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Features;