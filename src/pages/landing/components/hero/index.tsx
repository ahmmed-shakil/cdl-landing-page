import React, { useEffect, useRef } from "react";
import LeftContent from "./LeftContent";
import FeatureCard from "./FeatureCard";
import ScrollAnimation from "react-animate-on-scroll";

const LandingHero: React.FC = () => {
  const mobileVideoRef = useRef<HTMLIFrameElement>(null);
  const desktopVideoRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Function to handle user interaction and enable sound
    const enableSound = () => {
      try {
        // Determine if we're on mobile or desktop
        const isMobile = window.innerWidth < 768; // md breakpoint in Tailwind

        // Enable the appropriate video based on screen size
        if (isMobile && mobileVideoRef.current) {
          const src = mobileVideoRef.current.src;
          mobileVideoRef.current.src = src;
        } else if (!isMobile && desktopVideoRef.current) {
          const src = desktopVideoRef.current.src;
          desktopVideoRef.current.src = src;
        }

        // Remove the event listeners once executed
        document.removeEventListener("click", enableSound);
        document.removeEventListener("touchstart", enableSound);
        document.removeEventListener("keydown", enableSound);
      } catch (error) {
        console.error("Error enabling sound:", error);
      }
    };

    // Add event listeners for common user interactions
    document.addEventListener("click", enableSound);
    document.addEventListener("touchstart", enableSound);
    document.addEventListener("keydown", enableSound);

    // Function to handle screen resizing
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;

      // Pause both videos first
      if (mobileVideoRef.current) {
        mobileVideoRef.current.src = mobileVideoRef.current.src.replace(
          "autoplay=1",
          "autoplay=0"
        );
      }
      if (desktopVideoRef.current) {
        desktopVideoRef.current.src = desktopVideoRef.current.src.replace(
          "autoplay=1",
          "autoplay=0"
        );
      }

      // After a short delay, enable the appropriate one
      setTimeout(() => {
        if (isMobile && mobileVideoRef.current) {
          mobileVideoRef.current.src = mobileVideoRef.current.src.replace(
            "autoplay=0",
            "autoplay=1"
          );
        } else if (!isMobile && desktopVideoRef.current) {
          desktopVideoRef.current.src = desktopVideoRef.current.src.replace(
            "autoplay=0",
            "autoplay=1"
          );
        }
      }, 300);
    };

    // Initially set up the correct video state
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up event listeners when component unmounts
    return () => {
      document.removeEventListener("click", enableSound);
      document.removeEventListener("touchstart", enableSound);
      document.removeEventListener("keydown", enableSound);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-gradient-to-r from-blue-50 to-neutral-50 min-h-screen flex items-center md:py-0 pb-10 md:pb-20">
      <div className="max-w-7xl mx-auto px-5 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-2">
          <ScrollAnimation
            animateIn="fadeInDown"
            initiallyVisible
            duration={2}
            className="block md:hidden"
            animateOnce
          >
            <div className="py-10 order-1">
              <iframe
                ref={mobileVideoRef}
                width="100%"
                height="220px"
                className="rounded-md"
                src="https://www.youtube.com/embed/SbP-razlJnc?autoplay=1&mute=0"
                title="Your Software is Killing Your Business! Fix It Before It's Too Late!"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              {/* <p className="text-xs text-gray-500 mt-1">Click anywhere on the page to enable sound</p> */}
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateOnce
            animateIn="fadeInDown"
            initiallyVisible
            duration={2}
          >
            <div>
              <LeftContent />
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateOnce
            animateIn="fadeInDown"
            initiallyVisible
            duration={2}
            className="hidden md:block"
          >
            <div className="py-10 order-1">
              <iframe
                ref={desktopVideoRef}
                width="100%"
                height="346px"
                className="rounded-md"
                src="https://www.youtube.com/embed/SbP-razlJnc?autoplay=1&mute=0"
                title="Your Software is Killing Your Business! Fix It Before It's Too Late!"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              {/* <p className="text-xs text-gray-500 mt-1">Click anywhere on the page to enable sound</p> */}
            </div>
          </ScrollAnimation>
        </div>
        <ScrollAnimation
          animateIn="slideInUp"
          initiallyVisible
          duration={1}
          animateOnce
        >
          <div className="relative mt-5 md:mt-3">
            <ScrollAnimation
              animateIn="slideInUp"
              initiallyVisible
              duration={1}
              animateOnce
            >
              <h5 className="text-xl md:text-4xl font-semibold mt-10 md:mt-0">
                Why Businesses Trust Us{" "}
              </h5>
            </ScrollAnimation>
            <div className="rounded-md p-10 bg-white shadow-md relative z-10 mt-4">
              <FeatureCard />
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default LandingHero;
