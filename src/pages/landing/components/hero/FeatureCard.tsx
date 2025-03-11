import React from "react";
import experienceIcon from "../../../../assets/img/icons/field_exp.png";
import projectceIcon from "../../../../assets/img/icons/growth_focused.png";
import clientIcon from "../../../../assets/img/icons/cost_effective.png";
import responseIcon from "../../../../assets/img/icons/response_time.png";

const FeatureCard: React.FC = () => {
  const experienceCard = (
    <div className=" flex gap-5 items-center">
      <img className="w-12 md:w-12 h-10 md:h-12" src={experienceIcon} />
      <div>
        <div>
          <p className=" font-semibold">
            <span className="text-lg md:text-2xl">15</span> Years
          </p>
          <p className=" text-blue-700 text-sm md:text-md">
            Industry Expertise
          </p>
        </div>
      </div>
    </div>
  );
  const projectsCard = (
    <div className=" flex items-center gap-5">
      <img className="w-10 md:w-12 h-10 md:h-12" src={projectceIcon} />
      <div>
        <div>
          <p className=" font-semibold">
            <span className=" text-lg md:text-2xl">Growth</span> Focused
            {/* <span className=" text-lg md:text-2xl">10+</span> Projects */}
          </p>
          {/* <p className=" text-blue-700 text-sm md:text-lg">Done Around World</p> */}
          <p className=" text-blue-700 text-sm md:text-md">Strategy</p>
        </div>
      </div>
    </div>
  );
  const satifactionCard = (
    <div className=" flex gap-5 items-center">
      <img className="w-10 md:w-12 h-10 md:h-12" src={clientIcon} />
      <div>
        <div>
          <p className=" font-semibold">
            <span className=" text-lg md:text-2xl">Cost</span> Effective
          </p>
          <p className=" text-blue-700 text-sm md:text-md">Scaling</p>
          {/* <p className=" text-blue-700 text-sm md:text-md">
            Client Satisfaction
          </p> */}
        </div>
      </div>
    </div>
  );
  const responseCard = (
    <div className=" flex gap-5 items-center">
      <img className="w-10 md:w-12 h-10 md:h-12" src={responseIcon} />
      <div>
        <div>
          <p className=" font-semibold">
            <span className=" text-lg md:text-2xl">24/7</span>
          </p>
          <p className=" text-blue-700 text-sm md:text-md">
            Dedicated Support{" "}
          </p>
        </div>
      </div>
    </div>
  );
  return (
    <div className=" grid grid-cols-1 md:grid-cols-4 bg-white items-center gap-4 md:divide-x divide-slate-500">
      <div>{experienceCard}</div>
      <div>{projectsCard}</div>
      <div>{satifactionCard}</div>
      <div>{responseCard}</div>
    </div>
  );
};

export default FeatureCard;
