import React from "react";

type TSubHeadingProp = {
  content: string;
};

const SubHeading: React.FC<TSubHeadingProp> = ({ content }) => {
  return (
    <div>
      <p
        className=" text-blue-700 text-xs font-semibold"
        style={{ letterSpacing: "10px", textTransform: "uppercase" }}
      >
        {content}
      </p>
    </div>
  );
};

export default SubHeading;
