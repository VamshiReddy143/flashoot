import { useRef, useEffect, useState } from 'react';

const HOME_HERO_VIDEOS = [
  { src: '/videos/vg1.mp4', title: 'vg1' },
  { src: '/videos/vg2.mp4', title: 'vg2' },
  { src: '/videos/vgfood3.mp4', title: 'vgfood3' },
  { src: '/videos/vgp3.mp4', title: 'vgp3' },
  { src: '/videos/vgp4.mp4', title: 'vgp4' },
  { src: '/videos/vgp5.mp4', title: 'vgp5' },
  { src: '/videos/vgp6.mp4', title: 'vgp6' },
  { src: '/videos/vg1.mp4', title: 'vg1-2' },

];

const Cylinder3D = ({ size = 'lg' }) => {
  const cylinderRef = useRef(null);
  const rotationRef = useRef(0);
  const videoRefs = useRef([]);
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startRotation, setStartRotation] = useState(0);

  const videos = HOME_HERO_VIDEOS;
  const videoCount = videos.length;

  // Scale config per size prop
  const config = {
    sm: { container: [280, 380], cylinder: [140, 260], cardW: 100, cardH: 200, radius: 120 },
    md: { container: [480, 460], cylinder: [220, 340], cardW: 140, cardH: 280, radius: 170 },
    lg: { container: [800, 600], cylinder: [400, 500], cardW: 200, cardH: 400, radius: 250 },
  }[size];

  useEffect(() => {
    let animationId;
    let lastControlTime = 0;
    const animate = (timestamp) => {
      if (!isDragging) {
        rotationRef.current = (rotationRef.current + 0.15) % 360;
        setRotation(rotationRef.current);
      }

      // Control video play/pause every 200ms to avoid per-frame overhead
      if (timestamp - lastControlTime > 200) {
        lastControlTime = timestamp;
        const n = videoCount;
        videoRefs.current.forEach((videoEl, index) => {
          if (!videoEl) return;
          const cardAngle = (index / n) * 360;
          const worldAngle = ((cardAngle + rotationRef.current) % 360 + 360) % 360;
          const normalized = worldAngle > 180 ? worldAngle - 360 : worldAngle;
          const isFront = Math.abs(normalized) < 80;
          if (isFront && videoEl.paused) {
            videoEl.play().catch(() => {});
          } else if (!isFront && !videoEl.paused) {
            videoEl.pause();
          }
        });
      }

      animationId = requestAnimationFrame(animate);
    };
    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [isDragging, videoCount]);

  useEffect(() => {
    if (cylinderRef.current) {
      cylinderRef.current.style.transform = `rotateY(${rotation}deg)`;
    }
  }, [rotation]);

  const handleMouseDown = (e) => { setIsDragging(true); setStartX(e.clientX); setStartRotation(rotationRef.current); };
  const handleMouseMove = (e) => { if (!isDragging) return; rotationRef.current = (startRotation + (e.clientX - startX) * 0.5) % 360; setRotation(rotationRef.current); };
  const handleMouseUp = () => setIsDragging(false);

  const handleTouchStart = (e) => { setIsDragging(true); setStartX(e.touches[0].clientX); setStartRotation(rotationRef.current); };
  const handleTouchMove = (e) => { if (!isDragging) return; rotationRef.current = (startRotation + (e.touches[0].clientX - startX) * 0.5) % 360; setRotation(rotationRef.current); };
  const handleTouchEnd = () => setIsDragging(false);

  return (
    <div
      className="flex items-center justify-center"
      style={{ width: config.container[0], height: config.container[1], perspective: '1200px', transformStyle: 'preserve-3d' }}
    >
      <div
        className="relative w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing"
        style={{ perspective: '50000px', transformStyle: 'preserve-3d' }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          ref={cylinderRef}
          className="relative"
          style={{
            width: config.cylinder[0],
            height: config.cylinder[1],
            transformStyle: 'preserve-3d',
            transformOrigin: 'center center',
            transition: isDragging ? 'none' : 'transform 0.05s linear'
          }}
        >
          {videos.map((video, index) => {
            const angle = (index / videos.length) * 360;
            return (
              <div
                key={index}
                className="absolute top-1/2 left-1/2 overflow-hidden rounded-2xl shadow-2xl"
                style={{
                  width: config.cardW,
                  height: config.cardH,
                  transform: `translate(-50%, -50%) rotateY(${angle}deg) translateZ(${config.radius}px)`,
                  transformStyle: 'preserve-3d',
                  backfaceVisibility: 'visible',
                  border: '2px solid rgba(255,255,255,0.1)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
                }}
              >
                <video
                  ref={el => videoRefs.current[index] = el}
                  src={video.src}
                  className="w-full h-full object-cover"
                  loop
                  muted
                  playsInline
                  preload="metadata"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};


const Hero = () => {
  return (
    <>
      {/* Mobile */}
      <div className="lg:hidden relative max-w-7xl mx-auto min-h-screen flex flex-col items-center justify-start pt-10 px-4 sm:px-6 md:px-8 gap-8 overflow-hidden">
        <div className="text-center z-10">
          <h1 className="font-semibold text-[64px] sm:text-[90px] md:text-[110px] leading-none">
            Discover <br /> with <span className="text-[#e9302e]">Vibe</span>
          </h1>
          <p className="text-gray-100 font-semibold text-[15px] sm:text-[17px] md:text-[20px] mt-4">
            Explore trending reels from our creators
          </p>
        </div>

        {/* Cylinder centered, scaled for screen */}
        <div className="flex items-center justify-center w-full">
          <div className="scale-[0.6] sm:scale-[0.75] md:scale-90 origin-top">
            <Cylinder3D size="md" />
          </div>
        </div>
      </div>

      {/* Laptop+: original layout preserved exactly */}
      <div className="hidden lg:block relative max-w-7xl mx-auto min-h-screen mt-8 lg:mt-10 px-4 lg:px-7 overflow-visible">
        <div className="absolute bottom-30">
          <h1 className="font-semibold text-[160px] leading-[160px] z-10">
            Discover <br /> with <span className="text-[#e9302e]">Vibe</span>
          </h1>
          <p className="text-gray-100 font-semibold text-[20px] mt-10 ml-3">
            Explore trending reels from our creators
          </p>
        </div>
        <div className="absolute -top-10 -right-10 rotate-15 overflow-visible">
          <Cylinder3D size="lg" />
        </div>
      </div>
    </>
  );
};

export default Hero;