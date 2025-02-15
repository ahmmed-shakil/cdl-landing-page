import React from "react";
import LeftContent from "./LeftContent";
import video from "../../../../assets/video/hero.mp4";
import FeatureCard from "./FeatureCard";

const LandingHero: React.FC = () => {
  return (
    <div className=" bg-gradient-to-r from-blue-50 to-neutral-50 min-h-screen flex items-center py-10 md:py-0">
      <div className=" max-w-7xl mx-auto px-5 w-full">
        <div className=" grid grid-cols-1 md:grid-cols-2 items-center gap-2">
          <div>
            <LeftContent />
          </div>
          <div>
            <video
              src={video}
              autoPlay
              controls
              loop
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
        {/* <div className=" bg-gradient-to-r from-blue-700 to-neutral-50 mt-10"> */}

        <div className="relative mt-8 md:mt-10 ">
          {/* Badge */}
          <div className="absolute left-1/2 -translate-x-1/2 -top-3 z-20 block md:hidden">
            <div className="relative">
              {/* <div className="absolute -left-4 top-2 h-10 w-4 bg-blue-700 skew-y-[135deg] origin-top z-0"></div> */}

              {/* <div className="absolute -right-4 top-2 h-10 w-4 bg-blue-700 -skew-y-[135deg] origin-top z-0"></div> */}

              <div className="relative bg-blue-700 text-white px-8 py-2 text-center z-30 rounded-md shadow-black">
                <div className="font-bold text-sm md:text-lg sm:text-xl">
                  Our Specialities
                </div>
              </div>
            </div>
          </div>
          {/* Content */}
          <div className="rounded-md p-10 bg-slate-50 shadow-2xl relative z-10">
            <FeatureCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingHero;
