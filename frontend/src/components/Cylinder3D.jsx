import { useRef, useEffect, useState } from 'react';

const Cylinder3D = () => {
  const cylinderRef = useRef(null);
  const rotationRef = useRef(0);
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startRotation, setStartRotation] = useState(0);

  // Video sources - replace these with your actual video paths
  const videos = [
    {
      src: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      title: "Big Buck Bunny"
    },
    {
      src: "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      title: "Elephant's Dream"
    },
    {
      src: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      title: "For Bigger Blazes"
    },
    {
      src: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      title: "For Bigger Escapes"
    },
    {
      src: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
      title: "For Bigger Fun"
    },
    {
      src: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
      title: "For Bigger Joyrides"
    },
    {
      src: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
      title: "For Bigger Meltdowns"
    },
    {
      src: "https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
      title: "Sintel"
    }
  ];

  // Continuous rotation animation
  useEffect(() => {
    let animationId;
    
    const animate = () => {
      if (!isDragging) {
        // Increment rotation continuously
        rotationRef.current = (rotationRef.current + 0.15) % 360;
        setRotation(rotationRef.current);
      }
      animationId = requestAnimationFrame(animate);
    };
    
    animationId = requestAnimationFrame(animate);
    
    return () => cancelAnimationFrame(animationId);
  }, [isDragging]); // Only depend on isDragging

  // Update cylinder transform when rotation changes
  useEffect(() => {
    if (cylinderRef.current) {
      cylinderRef.current.style.transform = `rotateY(${rotation}deg)`;
    }
  }, [rotation]);

  // Handle mouse drag for manual rotation
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setStartRotation(rotationRef.current);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    
    const deltaX = e.clientX - startX;
    const newRotation = startRotation + deltaX * 0.5;
    rotationRef.current = newRotation % 360;
    setRotation(rotationRef.current);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <div 
      className="w-[800px] h-[600px] flex items-center justify-center"
      style={{
        perspective: '1200px',
        transformStyle: 'preserve-3d'
      }}
    >
      {/* Main container with 3D perspective */}
      <div 
        className="relative w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing"
        style={{
          perspective: '50000px',
          transformStyle: 'preserve-3d'
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        {/* Cylinder container */}
        <div
          ref={cylinderRef}
          className="relative"
          style={{
            width: '400px',
            height: '500px',
            transformStyle: 'preserve-3d',
            transformOrigin: 'center center',
            transition: isDragging ? 'none' : 'transform 0.05s linear'
          }}
        >
          {/* Video panels */}
          {videos.map((video, index) => {
            const angle = (index / videos.length) * 360;
            const radius = 250;
            
            return (
              <div
                key={index}
                className="absolute top-1/2 left-1/2 overflow-hidden rounded-2xl shadow-2xl group"
                style={{
                  width: '200px',
                  height: '400px',
                  transform: `translate(-50%, -50%) rotateY(${angle}deg) translateZ(${radius}px)`,
                  transformStyle: 'preserve-3d',
                  backfaceVisibility: 'visible',
                  border: '2px solid rgba(255,255,255,0.1)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
                }}
              >
                {/* Video element - removed hover scale to prevent stopping */}
                <video
                  src={video.src}
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cylinder3D;