import { useState } from 'react';

const Videos = () => {
  const [activeTab, setActiveTab] = useState('All');

  const tabs = [
    'All',
    'Events & Weddings',
    'Celebrities',
    'Outfit Shoots',
    'Concerts',
    'Collaborations',
    'Decors & Interiors',
    'Caterers'
  ];

  const videoData = {
    'All': [
      { id: 1, src: "/videos/vg1.mp4", title: "Big Buck Bunny", category: "Events" },
      { id: 2, src: "/videos/vg2.mp4", title: "Elephant's Dream", category: "Weddings" },
      { id: 3, src: "/videos/vgfood3.mp4", title: "For Bigger Blazes", category: "Celebrities" },
      { id: 4, src: "/videos/vgp3.mp4", title: "For Bigger Escapes", category: "Outfit" },
      { id: 5, src: "/videos/vgp4.mp4", title: "For Bigger Fun", category: "Concerts" },
      { id: 6, src: "/videos/vgp5.mp4", title: "For Bigger Joyrides", category: "Collaborations" },
      { id: 7, src: "/videos/vgp6.mp4", title: "For Bigger Meltdowns", category: "Decors" },
      { id: 8, src: "/videos/vg1.mp4", title: "Sintel", category: "Caterers" },
      { id: 9, src: "/videos/vg2.mp4", title: "Subaru Outback", category: "Events" }
    ],
    'Events & Weddings': [
      { id: 1, src: "/videos/vg1.mp4", title: "Wedding Ceremony", category: "Weddings" },
      { id: 2, src: "/videos/vg2.mp4", title: "Corporate Event", category: "Events" },
      { id: 3, src: "/videos/vgfood3.mp4", title: "Wedding Reception", category: "Weddings" }
    ],
    'Celebrities': [
      { id: 1, src: "/videos/vgp3.mp4", title: "Celebrity Interview", category: "Celebrities" },
      { id: 2, src: "/videos/vgp4.mp4", title: "Red Carpet Event", category: "Celebrities" },
      { id: 3, src: "/videos/vgp5.mp4", title: "Celebrity Photoshoot", category: "Celebrities" }
    ],
    'Outfit Shoots': [
      { id: 1, src: "/videos/vgp6.mp4", title: "Fashion Shoot", category: "Outfit" },
      { id: 2, src: "/videos/vg1.mp4", title: "Lookbook Video", category: "Outfit" },
      { id: 3, src: "/videos/vg2.mp4", title: "Style Reel", category: "Outfit" }
    ],
    'Concerts': [
      { id: 1, src: "/videos/vgfood3.mp4", title: "Live Concert", category: "Concerts" },
      { id: 2, src: "/videos/vgp3.mp4", title: "Music Festival", category: "Concerts" },
      { id: 3, src: "/videos/vgp4.mp4", title: "Backstage Moments", category: "Concerts" }
    ],
    'Collaborations': [
      { id: 1, src: "/videos/vgp5.mp4", title: "Brand Collaboration", category: "Collaborations" },
      { id: 2, src: "/videos/vg1.mp4", title: "Artist Partnership", category: "Collaborations" },
      { id: 3, src: "/videos/vg2.mp4", title: "Creative Collaboration", category: "Collaborations" }
    ],
    'Decors & Interiors': [
      { id: 1, src: "/videos/vgfood3.mp4", title: "Interior Design", category: "Decors" },
      { id: 2, src: "/videos/vgp3.mp4", title: "Decoration Setup", category: "Decors" },
      { id: 3, src: "/videos/vgp4.mp4", title: "Event Decor", category: "Decors" }
    ],
    'Caterers': [
      { id: 1, src: "/videos/vgp5.mp4", title: "Food Presentation", category: "Caterers" },
      { id: 2, src: "/videos/vgp6.mp4", title: "Catering Service", category: "Caterers" },
      { id: 3, src: "/videos/vg1.mp4", title: "Chef Special", category: "Caterers" }
    ]
  };

  const currentVideos = videoData[activeTab] || [];

  return (
    <div className="relative max-w-7xl mx-auto min-h-screen  sm:mt-10 lg:mt-10 flex flex-col items-center justify-start px-4 sm:px-6 md:px-8 lg:px-7">

      {/* Tabs — horizontal scroll on mobile, wrap on desktop */}
      <div className="w-full mb-6 sm:mb-8">
        {/* Mobile: horizontally scrollable single row */}
        <div className="flex lg:hidden overflow-x-auto gap-2 pb-2 scrollbar-hide snap-x snap-mandatory">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                flex-shrink-0 snap-start text-white border px-4 py-1.5 rounded-full text-sm cursor-pointer
                transition-all duration-300 whitespace-nowrap
                ${activeTab === tab
                  ? 'bg-red-500 border-red-500 shadow-lg shadow-red-500/30'
                  : 'bg-white/10 border-white/20 hover:border-red-500 hover:bg-white/20'
                }
              `}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Laptop+: wrap as before */}
        <div className="hidden lg:flex flex-wrap items-center justify-center gap-3">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                text-white border px-5 py-2 rounded-full cursor-pointer backdrop-blur-md
                transition-all duration-300 ease-in-out
                ${activeTab === tab
                  ? 'bg-red-500 border-red-500 scale-105 shadow-lg shadow-red-500/30'
                  : 'bg-white/10 border-white/20 hover:border-red-500 hover:bg-white/20'
                }
              `}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Videos Grid */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
        {currentVideos.map((video) => (
          <div
            key={video.id}
            className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-red-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-red-500/20"
          >
            {/* Category badge */}
            <div className="absolute top-3 left-3 z-10">
              <span className="bg-black/60 backdrop-blur-sm text-white text-[11px] sm:text-xs font-medium px-2.5 py-1 rounded-full border border-white/10">
                {video.category}
              </span>
            </div>

            {/* Video */}
            <div className="relative h-[300px] sm:h-[400px] md:h-[480px] lg:h-[600px] overflow-hidden">
              <video
                src={video.src}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                autoPlay
                loop
                muted
                playsInline
              />

              {/* Gradient overlay — always visible at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/70 to-transparent" />

              {/* Title at bottom */}
              {/* <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-semibold text-sm sm:text-base truncate">{video.title}</p>
              </div> */}

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-500 rounded-full flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-xl">
                  <svg className="w-5 h-5 sm:w-8 sm:h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {currentVideos.length === 0 && (
        <div className="text-center py-20">
          <p className="text-gray-400 text-lg">No videos available in this category</p>
        </div>
      )}

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default Videos;