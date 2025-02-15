import React from "react";
import experienceIcon from "../../../../assets/img/icons/experience.png";
import projectceIcon from "../../../../assets/img/icons/project.png";
import clientIcon from "../../../../assets/img/icons/check.png";
import responseIcon from "../../../../assets/img/icons/response.png";

const FeatureCard: React.FC = () => {
  const experienceCard = (
    <div className=" flex gap-5 items-center">
      <img className="w-10 md:w-16 h-10 md:h-16" src={experienceIcon} />
      <div>
        <div>
          <p className=" font-semibold">
            <span className=" text-2xl">3+</span> Years
          </p>
          <p className=" text-blue-700">Field Experience</p>
        </div>
      </div>
    </div>
  );
  const projectsCard = (
    <div className=" flex items-center gap-5">
      <img className="w-10 md:w-16 h-10 md:h-16" src={projectceIcon} />
      <div>
        <div>
          <p className=" font-semibold">
            <span className=" text-2xl">10+</span> Projects
          </p>
          <p className=" text-blue-700">Done Around World</p>
        </div>
      </div>
    </div>
  );
  const satifactionCard = (
    <div className=" flex gap-5 items-center">
      <img className="w-10 md:w-16 h-10 md:h-16" src={clientIcon} />
      <div>
        <div>
          <p className=" font-semibold">
            <span className=" text-2xl">99%</span>
          </p>
          <p className=" text-blue-700">Client Satisfaction</p>
        </div>
      </div>
    </div>
  );
  const responseCard = (
    <div className=" flex gap-5 items-center">
      <img className="w-10 md:w-16 h-10 md:h-16" src={responseIcon} />
      <div>
        <div>
          <p className=" font-semibold">
            <span className=" text-2xl">2</span> Mins
          </p>
          <p className=" text-blue-700">Response Time</p>
        </div>
      </div>
    </div>
  );
  return (
    <div className=" grid grid-cols-1 md:grid-cols-4 items-center gap-4">
      <div>{experienceCard}</div>
      <div>{projectsCard}</div>
      <div>{satifactionCard}</div>
      <div>{responseCard}</div>
    </div>
  );
};

export default FeatureCard;
