import React from "react";
import SubHeading from "../../../../components/ui/sub-heading";

const LeftContent: React.FC = () => {
  return (
    <div className=" space-y-6">
      <SubHeading content="Technology That Works for You" />
      <h3 className="text-3xl md:text-6xl font-semibold">
        Reliable IT Solutions for Business Growth.
      </h3>
      <h6 className="text-lg md:text-xl">
        Code Driven Labs delivers scalable, secure IT solutions to keep your
        business ahead in a fast-changing digital world. From startups to
        enterprises, we ensure efficiency, security, and long-term success.
      </h6>
    </div>
  );
};

export default LeftContent;
