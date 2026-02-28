import React from 'react';

const Meter = ({ text = "We are Shot&Go", hue = 33, duration = 10, bgLight = 0.1, scale = 1 }) => {
  const safeScale = Math.min(scale, 1);
  return (
    <>
      {/* Font import */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Teko:wght@300;400;500&display=swap"
      />

      <style>{`
        @keyframes ledSlide {
          to {
            translate: -50% 0;
          }
        }
      `}</style>

      <div
        className="relative block w-full max-w-full overflow-hidden"
        style={{
          border: '2px solid hsl(0 0% 16%)',
          borderRadius: '4px',
          boxSizing: 'border-box',
          transform: `scale(${safeScale})`,
          transformOrigin: 'center',
        }}
      >
        {/* Gloss overlay (::after equivalent) */}
        <div
          className="absolute inset-[2px] z-[3] pointer-events-none"
          style={{
            background:
              'linear-gradient(-68deg, transparent 63% 69.5%, #fff 70% 80%, transparent 80.5% 82.5%, #fff 82% 86.5%, transparent 87% 100%)',
            opacity: 0.12,
            mixBlendMode: 'plus-lighter',
          }}
        />

        {/* Rivets */}
        {/* <div className="absolute inset-0 z-[4]">
          {[
            { left: 'calc(100% + 4px)', bottom: 'calc(100% + 4px)' },
            { right: 'calc(100% + 4px)', bottom: 'calc(100% + 4px)' },
            { right: 'calc(100% + 4px)', top: 'calc(100% + 4px)' },
            { left: 'calc(100% + 4px)', top: 'calc(100% + 4px)' },
          ].map((pos, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                background: 'hsl(0 0% 10%)',
                width: '10px',
                aspectRatio: '1',
                boxShadow: '0.5px 0.5px 0px hsl(0 0% 100% / 0.2) inset',
                ...pos,
              }}
            >
            
              <div
                className="absolute rounded-[10px]"
                style={{
                  height: '2px',
                  width: '80%',
                  background: 'hsl(0 0% 0%)',
                  top: '50%',
                  left: '50%',
                  translate: '-50% -50%',
                  boxShadow: '0 -1px hsl(0 0% 100% / 0.2) inset',
                  rotate: '-30deg',
                }}
              />
            </div>
          ))}
        </div> */}

        {/* Board */}
        <div
          className="relative overflow-hidden"
          style={{
            '--size': '4px',
            '--hue': hue,
            '--bg-lightness': bgLight,
            '--duration': duration,
            fontFamily: "'Teko', sans-serif",
            fontSize: '100px',
            fontWeight: 300,
            letterSpacing: '0.035em',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
            width: '100%',
            paddingBlock: '1rem',
            lineHeight: 1,
            containerType: 'inline-size',
            background: `oklch(0.5 0.18 ${hue} / ${bgLight})`,
            filter: 'contrast(2) brightness(1.5) saturate(2)',
            transform: 'translateZ(0)',
          }}
        >
          {/* Dot grid overlay (::before equivalent) */}
          <div
            className="absolute inset-0 z-[2] pointer-events-none"
            style={{
              mixBlendMode: 'plus-lighter',
              filter: 'brightness(1.1)',
              background:
                'radial-gradient(circle at center, hsl(0 0% 20%) 1px, transparent 4px) 50% 50% / 4px 4px',
              transform: 'translateZ(0)',
            }}
          />

          {/* Board content with dot mask */}
          <div
            className="h-full w-full"
            style={{
              filter: 'blur(1px) contrast(1.2) brightness(1) saturate(1.6)',
              color: `oklch(1 0.2393 ${hue})`,
              mask: 'radial-gradient(circle at center, #000 1px, #0000 1px) 50% 50% / 4px 4px',
              transform: 'translateZ(0)',
            }}
          >
            {/* Scrolling text track */}
            <div
              className="relative flex w-fit"
              style={{
                animation: `ledSlide ${duration}s infinite linear`,
                color: `oklch(1 0.2883 ${hue})`,
                filter:
                  'blur(1px) contrast(1) saturate(1) hue-rotate(0deg) brightness(1)',
                transform: 'translateZ(0)',
              }}
            >
              {/* Original text */}
              <div
                style={{
                  paddingInline: '4rem',
                  width: 'fit-content',
                  filter: `blur(2px) drop-shadow(0 0 2px oklch(0.1 0.4383 ${hue} / 0.8)) contrast(3) brightness(1.4)`,
                  minWidth: '100cqi',
                  textAlign: 'center',
                  textShadow: '0 0 2px white',
                  transform: 'translateZ(0)',
                }}
              >
                {text}
              </div>
              {/* Clone for seamless loop */}
              <div
                style={{
                  paddingInline: '4rem',
                  width: 'fit-content',
                  filter: `blur(2px) drop-shadow(0 0 2px oklch(0.1 0.4383 ${hue} / 0.8)) contrast(3) brightness(1.4)`,
                  minWidth: '100cqi',
                  textAlign: 'center',
                  textShadow: '0 0 2px white',
                  transform: 'translateZ(0)',
                }}
              >
                {text}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Meter;
