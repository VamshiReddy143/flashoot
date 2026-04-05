import { useState } from "react";
import { BsStars } from "react-icons/bs";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "What is a DreamShoots member?",
    answer: "A DreamShoots member is a skilled content creator who uses the DreamShoots platform to offer professional reel-making services for events, businesses, or personal projects."
  },
  {
    question: "How do I become a DreamShoots member?",
    answer: "Sign up on the DreamShoots platform, complete your profile with your skills and portfolio, pass the verification process, and start accepting bookings."
  },
  {
    question: "What skills do I need to be a DreamShoots member?",
    answer: "You should have experience in video editing, storytelling, and using tools like Adobe Premiere, Final Cut Pro, or mobile editing apps. Creativity and reliability are key!"
  },
  {
    question: "How much can I earn as a DreamShoots member?",
    answer: "Earnings depend on the number of bookings and your pricing. DreamShoots allows you to set your rates, with top DreamShoots members earning competitive income for high-quality reels."
  },
  {
    question: "Do I need my own equipment?",
    answer: "Yes, DreamShoots members typically provide their own cameras, smartphones, or editing software to create professional-grade reels for clients."
  },
  {
    question: "How does booking work on DreamShoots?",
    answer: "Clients book you through the platform by selecting your profile, choosing a time slot, and specifying their needs. You'll receive notifications and can manage bookings directly."
  },
  {
    question: "Is there a fee to join DreamShoots?",
    answer: "There's no upfront fee to join, but DreamShoots takes a small commission on each booking to cover platform maintenance and support."
  },
  {
    question: "Can I work part-time as a DreamShoots member?",
    answer: "Absolutely! DreamShoots offers flexible scheduling, so you can take bookings that fit your availability, whether part-time or full-time."
  },
  {
    question: "How do I get paid for my work?",
    answer: "Payments are processed securely through the DreamShoots platform after completing a booking. You'll receive funds directly to your linked bank account or payment method."
  },
  {
    question: "What support does DreamShoots offer creators?",
    answer: "DreamShoots provides resources like tutorials, community forums, and customer support to help you succeed, plus tools to manage bookings and showcase your work."
  },
];

const Questions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen max-w-7xl mx-auto mt-20 sm:mt-24 md:mt-28 lg:mt-30 px-4 sm:px-6 md:px-8 lg:px-10">

      {/* Mobile & Tablet: stacked */}
      <div className="flex flex-col gap-8 lg:hidden">
        <div className="text-start">
          <h1 className="text-[28px] sm:text-[36px] md:text-[40px] font-[700] leading-tight">
            Got <span className="text-[#EF4343]">Questions?</span>
          </h1>
          <p className="text-[14px] sm:text-[15px] md:text-[16px] font-[400] text-gray-300 mt-2">
            Everything you need to know about becoming a DreamShoots member
          </p>
        </div>

        <div className="w-full">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-900 cursor-pointer text-gray-100 hover:border-[#EF4343]/20 bg-black p-1.5 sm:p-2 rounded-lg sm:rounded-xl mb-3 sm:mb-4 transition-colors hover:text-[#EF4343] duration-500"
            >
              <button
                className="w-full flex justify-between items-center py-3 sm:py-4 px-4 sm:px-6 text-left"
                onClick={() => toggleAccordion(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-mobile-${index}`}
              >
                <span className="text-[14px] sm:text-[15px] md:text-[17px] font-[600] text-left">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <FaChevronUp size={13} className="text-[#EF4343] flex-shrink-0 ml-2" />
                ) : (
                  <FaChevronDown size={13} className="text-gray-500 flex-shrink-0 ml-2" />
                )}
              </button>
              <div
                id={`faq-answer-mobile-${index}`}
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-56" : "max-h-0"
                }`}
              >
                <p className="px-4 sm:px-6 pb-3 sm:pb-4 text-[13px] sm:text-[14px] md:text-[15px] text-gray-300 leading-[22px] font-[400]">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Laptop+: original side-by-side layout preserved exactly */}
      <div className="hidden lg:flex items-start justify-between gap-10">
        <div className="flex flex-col items-center gap-3">
          <div className="text-start px-2">
            <h1 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px] font-[700] leading-tight sm:leading-snug lg:leading-normal">
              Got <span className="text-[#EF4343]"> Questions?</span>
            </h1>
            <p className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] font-[400] text-gray-300 mt-2">
              Everything you need to know about <br /> becoming a DreamShoots member
            </p>
          </div>
        </div>

        <div className="w-[50%]">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-900 cursor-pointer text-gray-100 hover:border-[#EF4343]/20 bg-black p-1.5 sm:p-2 rounded-lg sm:rounded-xl mb-3 sm:mb-4 transition-colors hover:text-[#EF4343] duration-500"
            >
              <button
                className="w-full flex justify-between items-center py-3 sm:py-4 px-4 sm:px-6 text-left"
                onClick={() => toggleAccordion(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] font-[600] text-left">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <FaChevronUp size={13} className="text-[#EF4343] flex-shrink-0 ml-2" />
                ) : (
                  <FaChevronDown size={13} className="text-gray-500 transition-colors duration-500 hover:text-[#EF4343] flex-shrink-0 ml-2" />
                )}
              </button>
              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-40 sm:max-h-48 md:max-h-56" : "max-h-0"
                }`}
              >
                <p className="px-4 sm:px-6 pb-3 sm:pb-4 text-[14px] sm:text-[15px] md:text-[16px] text-gray-300 hover:text-gray-100 leading-[20px] sm:leading-[22px] md:leading-[24px] font-[400]">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Questions;