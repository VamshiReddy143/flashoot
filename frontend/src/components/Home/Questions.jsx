import { useState } from "react";
import { BsStars } from "react-icons/bs";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "What is a Flashooter?",
    answer: "A Flashooter is a skilled content creator who uses the Flashoot platform to offer professional reel-making services for events, businesses, or personal projects."
  },
  {
    question: "How do I become a Flashooter?",
    answer: "Sign up on the Flashoot platform, complete your profile with your skills and portfolio, pass the verification process, and start accepting bookings."
  },
  {
    question: "What skills do I need to be a Flashooter?",
    answer: "You should have experience in video editing, storytelling, and using tools like Adobe Premiere, Final Cut Pro, or mobile editing apps. Creativity and reliability are key!"
  },
  {
    question: "How much can I earn as a Flashooter?",
    answer: "Earnings depend on the number of bookings and your pricing. Flashoot allows you to set your rates, with top Flashooters earning competitive income for high-quality reels."
  },
  {
    question: "Do I need my own equipment?",
    answer: "Yes, Flashooters typically provide their own cameras, smartphones, or editing software to create professional-grade reels for clients."
  },
  {
    question: "How does booking work on Flashoot?",
    answer: "Clients book you through the platform by selecting your profile, choosing a time slot, and specifying their needs. You’ll receive notifications and can manage bookings directly."
  },
  {
    question: "Is there a fee to join Flashoot?",
    answer: "There’s no upfront fee to join, but Flashoot takes a small commission on each booking to cover platform maintenance and support."
  },
  {
    question: "Can I work part-time as a Flashooter?",
    answer: "Absolutely! Flashoot offers flexible scheduling, so you can take bookings that fit your availability, whether part-time or full-time."
  },
  {
    question: "How do I get paid for my work?",
    answer: "Payments are processed securely through the Flashoot platform after completing a booking. You’ll receive funds directly to your linked bank account or payment method."
  },
  {
    question: "What support does Flashoot offer creators?",
    answer: "Flashoot provides resources like tutorials, community forums, and customer support to help you succeed, plus tools to manage bookings and showcase your work."
  },
];

const Questions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen mt-20 px-10">
      <div className="flex flex-col items-center gap-4">
        <div className="px-4 py-2 rounded-full border border-[#6B191C] w-fit bg-gradient-to-r from-[#531315] to-[#3A0B0D] flex items-center gap-2">
          <BsStars size={17} className="text-[#EF4343]" />
          <p className="text-[14px] font-[500]">Frequently Asked Questions</p>
        </div>
        <div className="text-center">
          <h1 className="text-[48px] font-[700]">
            Got Questions?
          </h1>
          <p className="text-[18px] font-[400] text-gray-300">
            Everything you need to know about becoming a Flashooter
          </p>
        </div>
      </div>

      {/* Accordion */}
      <div className="max-w-3xl mx-auto mt-12">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-900 cursor-pointer text-gray-100 hover:border-[#EF4343]/20 bg-white/5 p-2 rounded-xl mb-4 transition-colors  hover:text-[#EF4343] duration-500"
          >
            <button
              className="w-full flex justify-between items-center py-4 px-6 text-left"
              onClick={() => toggleAccordion(index)}
            >
              <span className="text-[18px] font-[600] ">
                {faq.question}
              </span>
              {openIndex === index ? (
                <FaChevronUp size={14} className="text-[#EF4343]" />
              ) : (
                <FaChevronDown size={14} className="text-gray-500 transition-colors duration-500 hover:text-[#EF4343]" />
              )}
            </button>
            <div
              className={`overflow-hidden transition-all duration-700 ease-in-out ${
                openIndex === index ? "max-h-40" : "max-h-0"
              }`}
            >
              <p className="px-6 pb-4 text-[16px] text-gray-300 hover:text-gray-100 leading-[24px] font-[400]">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Questions;