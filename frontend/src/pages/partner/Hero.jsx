import { BsStars } from "react-icons/bs";
import { FaCamera } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="lg:min-h-screen max-w-7xl mx-auto flex flex-col items-center mt-20 sm:mt-24 md:mt-28 lg:mt-10 px-4 sm:px-6 md:px-8 lg:px-10">

      {/* Heading */}
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[80px] text-gray-300 font-bold leading-tight">
          Be Part Of
        </h1>

        <img
          src="/images/shotandgo-logo.png"
          alt="Shot&Go"
          className="mx-auto mt-4  sm:w-64 md:w-80 lg:w-auto max-w-full"
        />
      </div>

      {/* Description */}
      <p className="max-w-3xl pt-8 sm:pt-10 text-sm sm:text-base md:text-[17px] lg:text-[19px] text-center sm:text-left leading-relaxed px-2 sm:px-0">
        We are trained iPhone creators who shoot, edit, and deliver
        professional Instagram reels in just 10 minutes. Whether you're a
        student, hustler, or creative explorer—Shot&Go helps you earn through
        content creation using nothing but your phone. We're live across India,
        UAE, USA—and growing fast. Join our expanding network of creators
        worldwide.
      </p>

    </div>
  );
};

export default Hero;