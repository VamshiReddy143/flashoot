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
    <div className="h-full  w-full flex items-center justify-center">
      <style jsx>{`
        @keyframes ry {
          to {
            transform: rotateY(1turn);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .carousel-rotate {
            animation-duration: 128s !important;
          }
        }
      `}</style>

      <div
        className="scene"
        style={{
          perspective: "40em",
          mask: "linear-gradient(90deg, transparent, red 20% 80%, transparent)",
          width: "100%",
          height: "100%",
        }}
      >
        <div
          className="a3d carousel-rotate grid place-self-center"
          style={{
            "--n": N,
            transformStyle: "preserve-3d",
            animation: "ry 32s linear infinite",
          }}
        >
          {DATA.map((file, index) => (
            <video
              key={file}
              className="card row-start-1 col-start-1"
              src={`/videos/${file}`}
              autoPlay
              muted
              loop
              playsInline
              style={{
                "--i": index,
                "--w": "17.5em",
                "--ba": `calc(1turn / ${N})`,
                width: "var(--w)",
                aspectRatio: "7/10",
                objectFit: "cover",
                borderRadius: "1.5em",
                backfaceVisibility: "hidden",
                transform: `
                  rotateY(calc(var(--i) * var(--ba)))
                  translateZ(calc(-1 * (0.5 * var(--w) + 0.5em) / tan(0.5 * var(--ba))))
                `,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardCarousel;
