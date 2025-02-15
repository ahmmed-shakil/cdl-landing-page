import React from "react";
import SubHeading from "../../../../components/ui/sub-heading";

const Industries: React.FC = () => {
  const fields = [
    {
      title: "Healthcare",
      bgColor: "bg-blue-200",
    },
    {
      title: "Finance",
      bgColor: "bg-green-200",
    },
    {
      title: "Industries",
      bgColor: "bg-yellow-200",
    },
    {
      title: "Food & Beverages",
      bgColor: "bg-red-200",
    },
    {
      title: "Construction",
      bgColor: "bg-gray-200",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-50 to-neutral-50">
      <div className="max-w-7xl mx-auto space-y-6 py-16 px-6">
        <SubHeading content="FOCUSING EXCELLENCE" />
        <div>
          <h3 className="text-xl md:text-4xl font-semibold">Our Fields</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 items-center gap-4">
          {fields.map((field, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl shadow-md text-center text-sm md:text-lg font-medium ${field.bgColor}`}
            >
              {field.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Industries;
