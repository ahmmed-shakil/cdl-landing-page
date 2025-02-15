import React from "react";
import SubHeading from "../../../../components/ui/sub-heading";
import ScrollAnimation from "react-animate-on-scroll";
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
        <ScrollAnimation animateIn="fadeInDown" duration={1}>
          <SubHeading content="FOCUSING EXCELLENCE" />
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInDown" duration={1}>
          <div>
            <h3 className="text-xl md:text-4xl font-semibold">Our Fields</h3>
          </div>
        </ScrollAnimation>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 items-center gap-4">
          {fields.map((field, index) => (
            <ScrollAnimation
              animateIn="zoomIn"
              className=" h-full"
              key={index}
              duration={2}
            >
              <div
                className={`p-6 rounded-xl shadow-md text-center text-sm md:text-lg font-medium ${field.bgColor}`}
              >
                {field.title}
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Industries;
