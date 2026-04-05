import { useRef } from 'react';

const cards = [
  {
    title: "Powered by Your iPhone",
    desc: "No DSLR. No fancy gear. Just your iPhone 13 Pro or newer.",
    img: "/images/iphone.png",
    border: "#142E52",
    from: "#142E52",
  },
  {
    title: "Earn Per Shoot",
    desc: "Get paid instantly for every shoot you complete.",
    img: "/images/community.png",
    border: "#3B123C",
    from: "#3B123C",
  },
  {
    title: "Super Flexible",
    desc: "Choose your own schedule. Work on weekends, evenings, or go full-time.",
    img: "/images/calendar.png",
    border: "#1B4D3E",
    from: "#1B4D3E",
  },
  {
    title: "Global Exposure",
    desc: "Work with influencers, startups, cafes, events, and brands—locally and internationally.",
    img: "/images/creative.png",
    border: "#8B4513",
    from: "#8B4513",
  },
  {
    title: "DreamShoots Partner Kit",
    desc: "Join a network of creators and grow together.",
    img: "/images/community.png",
    border: "#4A2C5F",
    from: "#4A2C5F",
  },
  {
    title: "Creative Community",
    desc: "Join a high-performance creator network. Share ideas. Get inspired. Grow together.",
    img: "/images/events.png",
    border: "#C44536",
    from: "#C44536",
  },
];

const Apply = () => {
  return (
    <div className="min-h-screen max-w-7xl mx-auto mt-20  sm:mt-24 md:mt-28 lg:mt-1 px-4 sm:px-6 md:px-8 lg:px-10">

      {/* Mobile & Tablet: stacked */}
      <div className="flex flex-col gap-8 lg:hidden">
        {/* Header */}
        <div>
          <p className="text-[#868686] text-2xl sm:text-3xl font-semibold">Sponsorship</p>
          <p className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">Opportunities</p>
          <p className="text-2xl sm:text-3xl font-semibold mt-4">
            Why Join - DreamShoots
          </p>
          <p className="text-gray-400 text-base sm:text-lg mt-1">Turn your iPhone into a creative business</p>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-4">
          {cards.map((card, i) => (
            <div
              key={i}
              className="p-4 sm:p-5 rounded-xl flex items-center justify-between gap-3 hover:scale-[1.01] transition-transform duration-300"
              style={{
                border: `1px solid ${card.border}`,
                background: `linear-gradient(to left, ${card.from}, transparent)`,
              }}
            >
              <div className="flex-1 min-w-0">
                <h1 className="font-semibold text-lg sm:text-xl md:text-2xl leading-snug">{card.title}</h1>
                <p className="text-sm sm:text-base text-gray-400 mt-1">{card.desc}</p>
              </div>
              <img
                src={card.img}
                alt={card.title}
                className="h-24 sm:h-32 md:h-40 bg-black px-3 rounded-xl flex-shrink-0 hidden lg:block"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Laptop+: original sticky layout preserved exactly */}
      <div className="hidden lg:flex items-start gap-30 w-full relative">
        {/* Left sticky */}
        <div className="w-[40%] sticky top-32 h-fit" style={{ alignSelf: 'flex-start' }}>
          <p className="text-[#868686] text-[35px] font-semibold">Sponsorship</p>
          <p className="text-[70px] font-bold leading-tight">Opportunities</p>
          <p className="text-[40px] font-semibold mt-5">
            Why Join - DreamShoots
          </p>
          <p className="text-gray-400 text-[20px]">Turn your iPhone into a creative business</p>
        </div>

        {/* Right scrolling cards */}
        <div className="flex flex-col gap-5 w-[60%]">
          {cards.map((card, i) => (
            <div
              key={i}
              className="p-5 rounded-xl flex items-center justify-between hover:scale-[1.02] transition-transform duration-300"
              style={{
                border: `1px solid ${card.border}`,
                background: `linear-gradient(to left, ${card.from}, transparent)`,
              }}
            >
              <div className="w-[60%]">
                <h1 className="font-semibold text-[30px]">{card.title}</h1>
                <p className="text-[20px] text-gray-400">{card.desc}</p>
              </div>
              <img src={card.img} alt="" className="h-60 bg-black px-4 rounded-xl" />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Apply;