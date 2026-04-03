const Join = () => {
  return (
    <div className="min-h-screen max-w-7xl mx-auto flex flex-col items-center mt-35 sm:mt-24 md:mt-28 lg:mt-30 px-4 sm:px-6 md:px-8 lg:px-10">

      {/* Header */}
      <div className="text-center">
        <h1 className="text-[#908A86] font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[50px]">
          Why People
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-5 text-5xl sm:text-6xl md:text-7xl lg:text-[90px] font-bold">
          <p>Choose</p>
          <div className="flex items-center gap-2 sm:gap-3">
            <p>Shot</p>
            <img
              src="/images/a.png"
              alt=""
              className="h-10 sm:h-14 md:h-16 lg:h-20 bg-black p-2 sm:p-3 md:p-4 rounded-xl border-t border-r"
            />
            <p>Go</p>
          </div>
        </div>
        <p className="font-semibold text-sm sm:text-base md:text-lg lg:text-[20px] text-gray-400">
          Turn your special moments into memories that last forever.
        </p>
      </div>

      {/* ── MOBILE: single column stack ── */}
      <div className="flex flex-col gap-4 mt-12 w-full md:hidden">
        <div className="border-3 border-gray-400 rounded-xl flex flex-col items-center text-center bg-black px-4">
          <h1 className="p-4 text-xl text-gray-300 font-semibold">Instant Reels, <br /> Instant Editing</h1>
          <img src="/images/why2.png" alt="" className="h-36" />
        </div>
        <div className="border-3 border-gray-400 rounded-xl flex flex-col items-center text-center bg-black px-4">
          <h1 className="p-4 text-xl text-gray-300 font-semibold">Unbelievable <br /> Pricing</h1>
          <img src="/images/a1.png" alt="" className="h-36" />
        </div>
        <div className="border-3 border-gray-400 rounded-xl p-5 flex flex-col items-end justify-end bg-gradient-to-br from-[#F1312F] to-[#000]">
          <p className="text-base font-semibold text-gray-100 mb-3 text-center">
            Shot&Go is the destination for people looking to capture their most special moments — from weddings and birthdays to parties and celebrations.
          </p>
          <p className="text-base font-semibold text-gray-100 text-center">
            But we're not just about bookings. We connect you with skilled photographers and videographers who turn your events into unforgettable memories.
          </p>
        </div>
        <div className="border-3 border-gray-400 rounded-xl flex flex-col items-center text-center bg-black px-4">
          <h1 className="p-4 text-xl text-gray-300 font-semibold">Trained & Certified Reel Makers</h1>
          <img src="/images/a3.png" alt="" className="h-36" />
        </div>
        <div className="border-3 border-gray-400 rounded-xl flex flex-col items-center text-center bg-black px-4">
          <h1 className="p-4 text-xl text-gray-300 font-semibold">Safe & <br /> Secure</h1>
          <img src="/images/why4.png" alt="" className="h-36" />
        </div>
      </div>

      {/* ── TABLET (md): intentional 2-col layout ── */}
      <div className="hidden md:grid lg:hidden grid-cols-2 gap-4 mt-16 w-full">

        {/* Top row: 2 feature cards side by side */}
        <div className="border-3 border-gray-400 rounded-xl flex flex-col items-center text-center bg-black px-4">
          <h1 className="p-5 text-2xl text-gray-300 font-semibold">Instant Reels, <br /> Instant Editing</h1>
          <img src="/images/why2.png" alt="" className="h-44" />
        </div>
        <div className="border-3 border-gray-400 rounded-xl flex flex-col items-center text-center bg-black px-4">
          <h1 className="p-5 text-2xl text-gray-300 font-semibold">Unbelievable <br /> Pricing</h1>
          <img src="/images/a1.png" alt="" className="h-44" />
        </div>

        {/* Middle row: center promo card — full width */}
        <div className="col-span-2 border-3 border-gray-400 rounded-xl p-6 flex flex-col items-center justify-center text-center bg-gradient-to-br from-[#F1312F] to-[#000] gap-4">
          <p className="text-lg font-semibold text-gray-100">
            Shot&Go is the destination for people looking to capture their most special moments — from weddings and birthdays to parties and celebrations.
          </p>
          <p className="text-lg font-semibold text-gray-100">
            But we're not just about bookings. We connect you with skilled photographers and videographers who turn your events into unforgettable memories.
          </p>
        </div>

        {/* Bottom row: 2 more feature cards side by side */}
        <div className="border-3 border-gray-400 rounded-xl flex flex-col items-center text-center bg-black px-4">
          <h1 className="p-5 text-2xl text-gray-300 font-semibold">Trained & Certified Reel Makers</h1>
          <img src="/images/a3.png" alt="" className="h-44" />
        </div>
        <div className="border-3 border-gray-400 rounded-xl flex flex-col items-center text-center bg-black px-4">
          <h1 className="p-5 text-2xl text-gray-300 font-semibold">Safe & <br /> Secure</h1>
          <img src="/images/why4.png" alt="" className="h-44" />
        </div>
      </div>

      {/* ── LAPTOP+: original 3-col layout preserved exactly ── */}
      <div className="hidden lg:grid grid-cols-3 gap-4 mt-30 w-full">

        <div className="flex flex-col gap-4">
          <div className="border-3 border-gray-400 rounded-xl flex flex-col items-center text-center bg-black px-4">
            <h1 className="p-5 text-[30px] text-gray-300 font-semibold">Instant Reels, <br /> Instant Editing</h1>
            <img src="/images/why2.png" alt="" className="h-50" />
          </div>
          <div className="border-3 border-gray-400 rounded-xl flex flex-col items-center text-center bg-black px-4">
            <h1 className="p-5 text-[30px] text-gray-300 font-semibold">Unbelievable <br /> Pricing</h1>
            <img src="/images/a1.png" alt="" className="h-50" />
          </div>
        </div>

        <div className="border-3 text-center relative border-gray-400 rounded-xl p-5 flex flex-col items-end justify-end mt-20 bg-gradient-to-br from-[#F1312F] to-[#000]">
          <img src="/images/a.png" alt="" className="h-20 bg-black p-4 rounded-xl border absolute -top-10 left-[40%]" />
          <p className="text-[25px] font-semibold text-gray-100 mb-3">
            Shot&Go is the destination for people looking to capture their most special moments — from weddings and birthdays to parties and celebrations.
          </p>
          <p className="text-[25px] font-semibold text-gray-100">
            But we're not just about bookings. We connect you with skilled photographers and videographers who turn your events into unforgettable memories.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="border-3 border-gray-400 rounded-xl flex flex-col items-center text-center bg-black px-4">
            <h1 className="p-5 text-[30px] text-gray-300 font-semibold">Trained & Certified Reel Makers</h1>
            <img src="/images/a3.png" alt="" className="h-50" />
          </div>
          <div className="border-3 border-gray-400 rounded-xl flex flex-col items-center text-center bg-black px-4">
            <h1 className="p-5 text-[30px] text-gray-300 font-semibold">Safe & <br /> Secure</h1>
            <img src="/images/why4.png" alt="" className="h-50" />
          </div>
        </div>

      </div>

    </div>
  );
};

export default Join;