import React from 'react';

const CHARACTERS = [
  {
    name: 'Vamshi',
    role: 'Managing Director',
    img: 'https://raw.githubusercontent.com/cbolson/assets/refs/heads/main/codepen/star-trek/kirk.png',
  },
  {
    name: 'Suneel',

    role: 'Director - Expansion',

    img: 'https://raw.githubusercontent.com/cbolson/assets/refs/heads/main/codepen/star-trek/spock-2.png',
  },
  {
    name: 'Ajay',
    role: 'Director - Expansion',
    img: 'https://raw.githubusercontent.com/cbolson/assets/refs/heads/main/codepen/star-trek/mccoy.png?v=1',
  },
  {
    name: 'Venky',
    role: 'Director - Tech and Design',
    img: 'https://raw.githubusercontent.com/cbolson/assets/refs/heads/main/codepen/star-trek/scotty.png?v=1',
  },
  {
    name: 'Rahul',
    role: 'Communications Officer',
    img: 'https://raw.githubusercontent.com/cbolson/assets/refs/heads/main/codepen/star-trek/uhura.png',
  },
  {
    name: 'Pawan',
    role: 'Cameraman',
    img: 'https://raw.githubusercontent.com/cbolson/assets/refs/heads/main/codepen/star-trek/sulu.png',
  },
  {
    name: 'Charan',
    role: 'Videographer',
    img: 'https://raw.githubusercontent.com/cbolson/assets/refs/heads/main/codepen/star-trek/chekov.png',
  },
];

const TOTAL = CHARACTERS.length;

const Hero = () => {
  return (
    <div
      className="relative min-h-[700vh]   pt-10"
      style={{
        fontFamily: "'Inconsolata', monospace",
        backgroundColor: '',
      }}
    >
      {/* Import fonts */}
      <link
        rel="stylesheet"
        href="https://fonts.bunny.net/css?family=big-shoulders-text:400,700|inconsolata:400"
      />

      {/* Global styles & keyframes */}
      <style>{`
        @property --focus {
          syntax: "<number>";
          inherits: true;
          initial-value: 0;
        }
        @property --angle {
          syntax: "<angle>";
          initial-value: 0deg;
          inherits: false;
        }
        @property --info-scale-x {
          syntax: "<number>";
          inherits: true;
          initial-value: 0;
        }

        @keyframes fade-in {
          0%, 100% { opacity: 0; }
          15%, 75% { opacity: 1; translate: 0 -27vh; }
        }

        @keyframes --item-focus {
          0%   { --focus: 0; --info-scale-x: 0; }
          20%  { --info-scale-x: 0; }
          30%  { --focus: 1; --info-scale-x: 1; }
          70%  { --focus: 1; --info-scale-x: 1; }
          80%  { --info-scale-x: 0; }
          100% { --focus: 0; --info-scale-x: 0; }
        }

        @keyframes --mouse-anim {
          75% { opacity: 1; }
          100% { opacity: 0; }
        }

        @keyframes --mouse-move {
          50% { translate: -25px 20px; }
        }

        /* character intro */
        .st-character {
          @starting-style {
            filter: sepia(1) blur(80px) hue-rotate(80deg);
          }
        }
      `}</style>

      {/* Space background overlay */}
      <div
        className="fixed inset-0 -z-10 opacity-20"
        style={{
          backgroundImage: `radial-gradient(rgb(0 184 219), transparent), url("https://raw.githubusercontent.com/cbolson/assets/refs/heads/main/codepen/star-trek/space.webp")`,
          backgroundSize: 'cover',
        }}
      />

      {/* Logo */}
      <div className="mx-auto my-[1vh]" style={{ width: 'min(80vw, 1000px)' }}>
        <img
          className="w-full object-cover"
          src="/images/shotandgo-logo.png"
          alt="Star Trek Logo"
          style={{
            filter: 'drop-shadow(2px 0 0 rgb(0 184 219))',
          }}
        />
      </div>

      {/* Names (fixed, scroll-driven) */}
      <div className="fixed inset-0 m-auto w-screen grid place-content-center pointer-events-none mt-20">
        {CHARACTERS.map((char, idx) => {
          const i = idx + 1;
          const itemSlot = 100 / TOTAL;
          const itemEntry = (i - 1) * itemSlot;
          const itemExit = itemEntry + itemSlot * 2.5 - 22;

          return (
            <h2
              key={char.name}
              className="text-center uppercase italic"
              style={{
                gridArea: '1/1',
                fontFamily: "'Big Shoulders Text', display",
                fontSize: 'clamp(3rem, 15.5vw + .35rem, 16rem)',
                color: 'rgb(255, 210, 48)',
                filter: 'drop-shadow(2px 0 0 rgb(0 184 219))',
                animationName: 'fade-in',
                animationDuration: '1ms',
                animationDelay: '.2ms',
                animationTimeline: 'scroll()',
                animationRange: `${itemEntry}% ${itemExit}%`,
                animationFillMode: 'both',
              }}
            >
              {char.name}
            </h2>
          );
        })}
      </div>

      {/* Characters wrapper (fixed, scroll-driven) */}
      <div
        className="fixed inset-0 m-auto text-white grid place-content-center"
        style={{
          width: 'min(80vw, 900px)',
          height: '30vh',
          containerType: 'size',
        }}
      >
        {/* Floor line */}
        <div
          className="absolute left-1/2 -z-10"
          style={{
            top: '90cqh',
            translate: '-50% 0',
            background: 'linear-gradient(90deg, transparent, rgb(0 184 219), transparent)',
            height: '1px',
            width: '90vw',
          }}
        />

        {CHARACTERS.map((char, idx) => {
          const i = idx + 1;
          const itemSlot = 100 / TOTAL;
          const itemEntry = (i - 1) * itemSlot;
          const itemExit = itemEntry + itemSlot * 2.5 - 22;

          return (
            <div
              key={char.name}
              className="st-character"
              style={{
                '--i': i,
                '--total': TOTAL,
                '--focus': 0,
                '--item-x': `calc((${i} - (${TOTAL} + 1) / 2) * (100cqw / ${TOTAL}) * (1 - var(--focus)))`,
                gridArea: '1/1',
                placeSelf: 'end',
                width: '100%',
                display: 'grid',
                isolation: 'isolate',
                transition:
                  'scale 300ms ease-in-out, translate 300ms ease-in-out, z-index 300ms ease-in-out, filter 500ms ease-in-out',
                scale: 'calc(0.5 + var(--focus) * 0.5)',
                zIndex: 'calc(1 + var(--focus) * 100)',
                translate: 'var(--item-x) 0',
                filter: 'sepia(calc(1 - var(--focus))) blur(0px) hue-rotate(0deg)',
                animationName: '--item-focus',
                animationTimeline: 'scroll()',
                animationRange: `${itemEntry}% ${itemExit}%`,
                animationFillMode: 'both',
              }}
            >
              <img
                className="w-full h-auto object-cover"
                src={char.img}
                alt={char.fullName}
                width={300}
                style={{ maxHeight: '100vh' }}
              />

              {/* Data card */}
              <div
                className="absolute rounded-[10px] p-4"
                style={{
                  inset: 'auto 5% 10%',
                  transition: 'scale 150ms ease-in-out',
                  scale: 'var(--info-scale-x) 1',
                  backfaceVisibility: 'hidden',
                  border: '#EA0127 1px solid',
                  backgroundColor: '#280409',
                  backdropFilter: 'sepia(1) brightness(20%)',
                  display: 'grid',
                  gap: '1rem 2rem',
                  gridTemplateColumns: '1fr 1fr',
                  gridTemplateAreas: `'title title' 'info info' 'notes notes'`,
                }}
              >
                <h3
                  className="m-0 text-[27px] text-red-300 leading-none"
                  style={{
                    gridArea: 'title',
                    fontFamily: "'Big Shoulders Text', display",
                    
                  }}
                >
                  {char.name}
                </h3>

                <div
                  className="flex items-center gap-2"
                  style={{
                    gridArea: 'info',
                    gridTemplateColumns: '.5fr 1fr',
                  }}
                >
               

                  <label
                    className="opacity-70 text-[18px]"
                    
                  >
                    Role:
                  </label>
                  <p className='text-[15px]'>
                    {char.role}
                  </p>

                  {/* <label
                    className="opacity-70"
                    style={{ fontSize: 'clamp(.7rem, 1.25vw + .045rem, .85rem)', lineHeight: 1.3, margin: 0 }}
                  >
                    Known for:
                  </label>
                  <p style={{ fontSize: 'clamp(.7rem, 1.25vw + .045rem, .85rem)', lineHeight: 1.3, margin: 0 }}>
                    {char.knownFor}
                  </p> */}
                </div>

                {/* <p
                  className="text-center"
                  style={{
                    gridArea: 'notes',
                    placeSelf: 'center',
                    textWrap: 'pretty',
                    fontSize: 'clamp(.7rem, 1.25vw + .045rem, .85rem)',
                    lineHeight: 1.3,
                    margin: 0,
                  }}
                >
                  {char.notes}
                </p> */}
              </div>
            </div>
          );
        })}
      </div>

      {/* Scroll indicator mouse */}
      <div
        className="fixed left-1/2"
        style={{
          bottom: '4rem',
          translate: '-50% 0',
          rotate: '180deg',
          width: '50px',
          height: '50px',
          color: 'rgb(255 255 255 / .1)',
          animationName: '--mouse-anim, --mouse-move',
          animationDuration: '1ms, 1.5s',
          animationTimingFunction: 'linear, ease-in-out',
          animationFillMode: 'forwards, both',
          animationIterationCount: '1, infinite',
          animationTimeline: 'scroll(), auto',
        }}
      >
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,48.000000) scale(0.100000,-0.100000)"
            fill="currentColor"
            stroke="none"
          >
            <path d="M195 471 c-44 -20 -70 -60 -70 -111 0 -42 5 -54 33 -82 37 -39 42 -76 12 -103 -20 -18 -20 -17 -20 23 0 31 -4 42 -15 42 -12 0 -15 -20 -15 -120 0 -100 3 -120 15 -120 11 0 15 12 15 46 0 31 7 56 22 77 l22 31 6 -24 c5 -21 12 -25 40 -25 28 0 35 4 40 25 l6 24 22 -31 c15 -21 22 -46 22 -77 0 -34 4 -46 15 -46 13 0 15 20 15 120 0 100 -2 120 -15 120 -11 0 -15 -11 -15 -40 0 -41 -7 -49 -28 -28 -23 23 -14 70 21 106 27 28 32 40 32 82 0 42 -5 54 -31 81 -33 33 -92 46 -129 30z m59 -283 c-4 -29 -8 -55 -10 -57 -7 -8 -11 4 -18 57 -6 48 -5 52 14 52 19 0 20 -4 14 -52z" />
          </g>
        </svg>
      </div>

      {/* Browser support warning */}
      <noscript>
        <p className="fixed top-4 left-1/2 -translate-x-1/2 text-xs text-red-500">
          Sorry, your browser doesn't support animation-timeline
        </p>
      </noscript>
    </div>
  );
};

export default Hero;