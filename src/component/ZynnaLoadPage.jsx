import React, { useEffect, useState } from "react";

const ZynnaLoadPage = ({ onFinish }) => {
  const [showLogo, setShowLogo] = useState(false);
  const [startPop, setStartPop] = useState(false);

  const firstBannerImage =
    "https://res.cloudinary.com/dp5koojwa/image/upload/v1774349304/Classical_Ivory_Royale_ced54w.jpg";

  useEffect(() => {
    // fast white -> black wipe
    const wipeTimer = setTimeout(() => {
      setShowLogo(true);
    }, 380);

    // logo settles, then final pop/zoom out starts
    const popTimer = setTimeout(() => {
      setStartPop(true);
    }, 1750);

    return () => {
      clearTimeout(wipeTimer);
      clearTimeout(popTimer);
    };
  }, []);

  const handleAnimationEnd = (e) => {
    // remove loader exactly when final pop animation ends
    if (e.animationName === "zynnaLogoPopOut") {
      onFinish();
    }
  };

  return (
    <div className="fixed inset-0 z-[99999] overflow-hidden">
      {/* white start */}
      <div className="absolute inset-0 bg-white z-[1]" />

      {/* fast black slide */}
      <div className="zynna-black absolute inset-0 z-[2]" />

      {/* logo */}
      {showLogo && (
        <div className="absolute inset-0 z-[3] flex items-center justify-center px-2 overflow-hidden">
          <h1
            onAnimationEnd={handleAnimationEnd}
            className={`zynna-logo ${startPop ? "zynna-logo-pop" : ""}`}
            style={{
              backgroundImage: `url(${firstBannerImage})`,
            }}
          >
            ZYNNA
          </h1>
        </div>
      )}

      <style>{`
        .zynna-black {
          background: #000;
          transform: scaleX(0);
          transform-origin: left center;
          animation: zynnaWipe 0.38s cubic-bezier(0.77, 0, 0.175, 1) forwards;
        }

        .zynna-logo {
          margin: 0;
          padding: 0;
          font-family: "Poppins", sans-serif;
          font-weight: 700;
          text-transform: uppercase;
          text-align: center;
          line-height: 0.84;
          letter-spacing: 0.05em;
          font-size: clamp(6rem, 26vw, 18rem);

          color: transparent;
          -webkit-text-fill-color: transparent;
          -webkit-background-clip: text;
          background-clip: text;
          background-repeat: no-repeat;
          background-position: center center;
          background-size: cover;

          opacity: 0;
          transform: scale(2.25);
          animation:
            zynnaFadeIn 0.18s ease forwards,
            zynnaSettle 1.05s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: 0s, 0.18s;
          will-change: transform, opacity;
        }

        .zynna-logo-pop {
          animation: zynnaLogoPopOut 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards !important;
        }

        @keyframes zynnaWipe {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }

        @keyframes zynnaFadeIn {
          from {
            opacity: 0;
            transform: scale(2.25);
          }
          to {
            opacity: 1;
            transform: scale(2.25);
          }
        }

        @keyframes zynnaSettle {
          from {
            opacity: 1;
            transform: scale(2.25);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        /* final animation */
        @keyframes zynnaLogoPopOut {
          from {
            opacity: 1;
            transform: scale(1);
          }
          to {
            opacity: 0;
            transform: scale(3.35);
          }
        }

        @media (max-width: 768px) {
          .zynna-logo {
            font-size: clamp(4.6rem, 29vw, 9rem);
            letter-spacing: 0.02em;
            line-height: 0.92;
          }
        }

        @media (max-width: 480px) {
          .zynna-logo {
            font-size: clamp(4rem, 31vw, 7.2rem);
            letter-spacing: 0.01em;
            line-height: 0.95;
          }

          @keyframes zynnaLogoPopOut {
            from {
              opacity: 1;
              transform: scale(1);
            }
            to {
              opacity: 0;
              transform: scale(2.8);
            }
          }
        }
      `}</style>
    </div>
  );
};

export default ZynnaLoadPage;