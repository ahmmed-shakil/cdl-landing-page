import React from "react";
import experienceIcon from "../../../../assets/img/icons/field_exp.png";
import projectceIcon from "../../../../assets/img/icons/projects_done.png";
import clientIcon from "../../../../assets/img/icons/customer_staisfaction.png";
import responseIcon from "../../../../assets/img/icons/response_time.png";

const FeatureCard: React.FC = () => {
  const experienceCard = (
    <div className=" flex gap-5 items-center">
      <img className="w-10 md:w-12 h-10 md:h-12" src={experienceIcon} />
      <div>
        <div>
          <p className=" font-semibold">
            <span className="text-lg md:text-2xl">3+</span> Years
          </p>
          <p className=" text-blue-700 text-sm md:text-lg">Field Experience</p>
        </div>
      </div>
    </div>
  );
  const projectsCard = (
    <div className=" flex items-center gap-5">
      <img className="w-10 md:w-10 h-10 md:h-12" src={projectceIcon} />
      <div>
        <div>
          <p className=" font-semibold">
            <span className=" text-lg md:text-2xl">10+</span> Projects
          </p>
          <p className=" text-blue-700 text-sm md:text-lg">Done Around World</p>
        </div>
      </div>
    </div>
  );
  const satifactionCard = (
    <div className=" flex gap-5 items-center">
      <img className="w-10 md:w-14 h-10 md:h-12" src={clientIcon} />
      <div>
        <div>
          <p className=" font-semibold">
            <span className=" text-lg md:text-2xl">99%</span>
          </p>
          <p className=" text-blue-700 text-sm md:text-lg">
            Client Satisfaction
          </p>
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
            <span className=" text-lg md:text-2xl">2</span> Mins
          </p>
          <p className=" text-blue-700 text-sm md:text-lg">Response Time</p>
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
