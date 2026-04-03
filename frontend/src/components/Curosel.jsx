import React from "react";

const DATA = [
  "vg1.mp4",
  "vg2.mp4",
  "vgfood3.mp4",
  "vgp3.mp4",
  "vgp4.mp4",
  "vgp5.mp4",
  "vgp6.mp4",
  "vg1.mp4",
  "vg2.mp4",
  "vgp6.mp4",
  "vgp4.mp4",
];

const N = DATA.length;

const CardCarousel = () => {
  return (
    <div className="h-full w-full flex items-center justify-center overflow-hidden">
      <style>{`
        @keyframes ry {
          to { transform: rotateY(1turn); }
        }

        @media (prefers-reduced-motion: reduce) {
          .carousel-rotate {
            animation-duration: 128s !important;
          }
        }

        /* Base: large screens */
        .carousel-card {
          --w: 17.5rem;
          --ba: calc(1turn / ${N});
          width: var(--w);
          aspect-ratio: 7/10;
          object-fit: cover;
          border-radius: 1.5rem;
          backface-visibility: hidden;
          transform:
            rotateY(calc(var(--i) * var(--ba)))
            translateZ(calc(-1 * (0.5 * var(--w) + 0.5em) / tan(0.5 * var(--ba))));
        }

        /* Tablet ~768-1024px */
        @media (max-width: 1024px) {
          .carousel-card {
            --w: 11rem;
            border-radius: 1.1rem;
          }
        }

        /* Mobile ~480-768px */
        @media (max-width: 768px) {
          .carousel-card {
            --w: 7.5rem;
            border-radius: 0.85rem;
          }
        }

        /* Small mobile <480px */
        @media (max-width: 480px) {
          .carousel-card {
            --w: 5.5rem;
            border-radius: 0.7rem;
          }
        }

        .carousel-scene {
          perspective: 40em;
          mask: linear-gradient(90deg, transparent, red 20% 80%, transparent);
          -webkit-mask: linear-gradient(90deg, transparent, red 20% 80%, transparent);
          width: 100%;
          height: 100%;
        }

        @media (max-width: 1024px) {
          .carousel-scene { perspective: 28em; }
        }

        @media (max-width: 768px) {
          .carousel-scene {
            perspective: 20em;
            mask: linear-gradient(90deg, transparent, red 10% 90%, transparent);
            -webkit-mask: linear-gradient(90deg, transparent, red 10% 90%, transparent);
          }
        }

        @media (max-width: 480px) {
          .carousel-scene {
            perspective: 14em;
            mask: linear-gradient(90deg, transparent, red 5% 95%, transparent);
            -webkit-mask: linear-gradient(90deg, transparent, red 5% 95%, transparent);
          }
        }

        .carousel-3d {
          transform-style: preserve-3d;
          animation: ry 32s linear infinite;
        }
      `}</style>

      <div className="carousel-scene">
        <div
          className="carousel-3d carousel-rotate grid place-self-center"
          style={{ "--n": N }}
        >
          {DATA.map((file, index) => (
            <video
              key={`${file}-${index}`}
              className="carousel-card row-start-1 col-start-1"
              src={`/videos/${file}`}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              style={{ "--i": index }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardCarousel;