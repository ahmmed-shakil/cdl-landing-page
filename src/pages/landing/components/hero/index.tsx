import React from "react";
import LeftContent from "./LeftContent";
import FeatureCard from "./FeatureCard";
import ScrollAnimation from "react-animate-on-scroll";

const LandingHero: React.FC = () => {
  return (
    <div className=" bg-gradient-to-r from-blue-50 to-neutral-50 min-h-screen flex items-center md:py-0 pb-10 md:pb-20">
      <div className=" max-w-7xl mx-auto px-5 w-full">
        <div className=" grid grid-cols-1 md:grid-cols-2 items-center gap-2">
          <ScrollAnimation
            animateIn="fadeInDown"
            initiallyVisible
            duration={2}
            className=" block md:hidden"
            animateOnce
          >
            <div className=" py-10 order-1">
              <iframe
                width="100%"
                height="220px"
                className="rounded-md"
                src="https://www.youtube.com/embed/rsV8ZB-DnAM"
                title="Harley-Davidson Breakout Sunset Ride | Pure Engine Sound"
                // frameborder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                // referrerpolicy="strict-origin-when-cross-origin"
                // allowfullscreen
                allowFullScreen
              ></iframe>
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
            className=" hidden md:block"
          >
            <div className=" py-10 order-1">
              <iframe
                width="100%"
                height="350px"
                className="rounded-md"
                src="https://www.youtube.com/embed/rsV8ZB-DnAM"
                title="Harley-Davidson Breakout Sunset Ride | Pure Engine Sound"
                // frameborder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                // referrerpolicy="strict-origin-when-cross-origin"
                // allowfullscreen
                allowFullScreen
              ></iframe>
            </div>
          </ScrollAnimation>
        </div>
        {/* <div className=" bg-gradient-to-r from-blue-700 to-neutral-50 mt-10"> */}
        <ScrollAnimation
          animateIn="slideInUp"
          initiallyVisible
          duration={1}
          animateOnce
        >
          <div className="relative mt-5 md:mt-3  ">
            {/* Badge */}
            {/* <div className="absolute left-1/2 -translate-x-1/2 -top-3 z-20 block md:hidden">
            <div className="relative">
              <div className="absolute -left-4 top-2 h-10 w-4 bg-blue-700 skew-y-[135deg] origin-top z-0"></div>

              <div className="absolute -right-4 top-2 h-10 w-4 bg-blue-700 -skew-y-[135deg] origin-top z-0"></div>

              <div className="relative bg-blue-700 text-white px-8 py-2 text-center z-30 rounded-md shadow-black">
                <div className="font-bold text-sm md:text-lg sm:text-xl">
                  Our Specialities
                </div>
              </div>
            </div>
          </div> */}
            {/* Content */}
            <h5 className=" mb-2 font-semibold text-md md:text-lg">
              Why Businesses Trust Us{" "}
            </h5>
            <p>
              Startups and enterprises face constant challenges—scalability,
              security, and cost efficiency. CDL provides IT and marketing
              solutions designed to{" "}
              <span className=" font-semibold">remove roadblocks</span>,
              <span className=" font-semibold">accelerate growth</span>, and{" "}
              <span className=" font-semibold">ensure long-term stability</span>
              .
            </p>
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
