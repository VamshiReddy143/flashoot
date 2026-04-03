const ForWhom = () => {
  return (
    <div className="relative max-w-7xl mx-auto lg:min-h-screen mt-8 sm:mt-10 lg:mt-10 flex flex-col items-center justify-start px-4 sm:px-6 md:px-8 lg:px-7 overflow-visible">

      {/* Mobile only: stacked */}
      <div className="w-full flex flex-col md:hidden gap-6">
        <div>
          <h1 className="text-3xl sm:text-4xl font-semibold leading-tight">
            Capture every moment <br /> with Shot<span className="text-red-500">&</span>Go
          </h1>
          <p className="mt-4 font-semibold text-gray-300 text-sm sm:text-base max-w-xl">
            Easily book photographers and videographers for weddings,
            birthdays, parties, and special events. Your memories deserve
            to be captured perfectly.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <img src="/images/fw1.webp" alt="" className="rounded-xl border-4 border-white/40 w-full object-cover aspect-[3/4]" />
          <img src="/images/fw4.webp" alt="" className="rounded-xl border-4 border-white/40 w-full object-cover aspect-[3/4]" />
          <img src="/images/fw2.webp" alt="" className="rounded-xl border-4 border-white/40 w-full object-cover aspect-[3/4]" />
          <img src="/images/fw3.webp" alt="" className="rounded-xl border-4 border-white/40 w-full object-cover aspect-[3/4]" />
        </div>
      </div>

      {/* Tablet (md–lg): side by side — text left, 2-col image grid right */}
      <div className="hidden md:flex lg:hidden items-start gap-6 w-full">
        {/* Left: text */}
        <div className="w-[45%] sticky top-10">
          <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
            Capture every moment <br /> with Shot<span className="text-red-500">&</span>Go
          </h1>
          <p className="mt-4 font-semibold text-gray-300 text-sm md:text-base">
            Easily book photographers and videographers for weddings,
            birthdays, parties, and special events. Your memories deserve
            to be captured perfectly.
          </p>
        </div>

        {/* Right: 2x2 image grid */}
        <div className="w-[55%] grid grid-cols-2 gap-3">
          <img src="/images/fw1.webp" alt="" className="rounded-xl border-4 border-white/40 w-full object-cover aspect-[3/4]" />
          <img src="/images/fw4.webp" alt="" className="rounded-xl border-4 border-white/40 w-full object-cover aspect-[3/4]" />
          <img src="/images/fw2.webp" alt="" className="rounded-xl border-4 border-white/40 w-full object-cover aspect-[3/4]" />
          <img src="/images/fw3.webp" alt="" className="rounded-xl border-4 border-white/40 w-full object-cover aspect-[3/4]" />
        </div>
      </div>

      {/* Laptop+: original layout preserved exactly */}
      <div className="hidden lg:flex items-start gap-5">
        <div>
          <h1 className="text-[60px] font-semibold leading-tight">
            Capture every moment <br /> with Shot<span className="text-red-500">&</span>Go
          </h1>
          <p className="mt-5 font-semibold text-gray-300 text-[17px] w-[700px]">
            Easily book photographers and videographers for weddings,
            birthdays, parties, and special events. Your memories deserve
            to be captured perfectly.
          </p>
          <div className="mt-7 flex items-start gap-5">
            <img src="/images/fw1.webp" alt="" className="rounded-xl border-4 border-white/40 h-80" />
            <img src="/images/fw2.webp" alt="" className="rounded-xl border-4 border-white/40 h-40" />
            <img src="/images/fw3.webp" alt="" className="rounded-xl border-4 border-white/40 h-120" />
          </div>
        </div>
        <img src="/images/fw4.webp" alt="" className="rounded-xl border-4 border-white/40 h-120" />
      </div>

    </div>
  );
};

export default ForWhom;