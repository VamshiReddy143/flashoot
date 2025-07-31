import { useEffect, useState } from "react";
import { PiQuotes } from "react-icons/pi";

const reviews = [
  { id: 1, name: "Alice", image: "/images/user1.jpg", review: "Flashoot made booking a reel maker super easy! Great service, skilled creators, and stunning reels. Highly recommend!" },
  { id: 2, name: "Bob", image: "/images/user2.jpg", review: "Flashoot is a game-changer! Quick booking, talented reel makers, and amazing event coverage. Loved the experience!" },
  { id: 3, name: "Charlie", image: "/images/user4.jpg", review: "Seamless booking, professional creators, and stunning reels! Flashoot made capturing memories effortless and fun." },
  { id: 4, name: "Diana", image: "/images/user6.jpg", review: "Highly impressed with Flashoot! Easy to use, top-notch reel makers, and fantastic results. Will book again!" },
  { id: 5, name: "Ethan", image: "/images/user8.jpg", review: "Flashoot delivered exactly what I needed—professional reels, hassle-free booking, and great service. Totally worth it!" },
  { id: 6, name: "Fiona", image: "/images/user3.jpg", review: "Capturing moments has never been easier! Flashoot connects you with skilled reel makers for perfect event videos." },
  { id: 7, name: "George", image: "/images/user5.jpg", review: "Flashoot truly changed the game! Unlike traditional videographers, they delivered stunning reels instantly after my event." },
  { id: 8, name: "Hannah", image: "/images/user7.jpg", review: "The team was super professional and creative! Our reels turned out stylish, high-quality, and way beyond our expectations." },
];

const extendedReviews = [...reviews, ...reviews.slice(0, 3)];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const cardsPerView = 3;
  const resetIndex = reviews.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex >= resetIndex) {
          setIsTransitioning(false);
          setTimeout(() => setIsTransitioning(true), 0);
          return 0;
        }
        return prevIndex + 1;
      });
    }, 5000); // Slow scroll every 5 seconds

    return () => clearInterval(interval);
  }, [resetIndex]);

  const activeDotIndex = currentIndex % reviews.length;

  return (
    <div className="min-h-screen mt-30 px-10 text-white">
      <div className="text-center mb-10">
        <h1 className="text-[36px] font-[700]">
          What Our{" "}
          <span className="bg-gradient-to-r from-[#EF4444] from-[93%] to-[#3A0B0D] bg-clip-text text-transparent">
            Loving Customers Say
          </span>
        </h1>
        <p className="text-[18px] text-gray-400">
          Join thousands of satisfied customers who trust Flashoot
        </p>
      </div>

      {/* Carousel Wrapper */}
      <div className="overflow-hidden relative">
        <div
          className={`flex ${
            isTransitioning ? "transition-transform duration-1000 ease-in-out" : ""
          }`}
          style={{
            transform: `translateX(-${(currentIndex * 100) / cardsPerView}%)`,
          }}
        >
          {extendedReviews.map((review, index) => (
            <div
              key={`${review.id}-${index}`}
              className="w-[370px] flex-shrink-0 px-3"
              style={{ width: `${100 / cardsPerView}%` }}
            >
              <div className="relative min-h-[250px] bg-black/20 backdrop-blur-3xl rounded-2xl p-6 shadow-lg border border-[#D1D5DB]/10 flex mt-5 flex-col">
                {/* Top-left icon */}
                <div className="absolute -top-4 left-6 border border-[#EF4343]/20 bg-[#EF4343]/20 w-10 h-10 rounded-xl flex items-center justify-center shadow-md z-10">
                  <PiQuotes size={20} className="text-[#EF4343]" />
                </div>

                {/* Review content */}
                <p className="text-[18px] text-gray-300 leading-[28px] font-[400] flex-grow mt-4">
                  {review.review}
                </p>

                {/* Name and image aligned at bottom */}
                <div className="flex items-center gap-4 pt-6">
                  <img
                    src={review.image}
                    className="w-10 h-10 rounded-full object-cover"
                    alt={review.name}
                  />
                  <p className="font-[600] text-white leading-[28px] text-[18px]">
                    {review.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {reviews.map((_, index) => (
          <div
            key={index}
            className={`h-2 rounded-full transition-all duration-500 ${
              index === activeDotIndex ? "w-8 bg-[#EF4343]" : "w-3 bg-gray-600"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Reviews;