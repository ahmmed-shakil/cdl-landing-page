import React from "react";
import SubHeading from "../../../../components/ui/sub-heading";
import ScrollAnimation from "react-animate-on-scroll";
import bg1 from "../../../../assets/img/cards/health_rp.png";
// import bg2 from "../../../../assets/img/cards/card_2.png";
import bg3 from "../../../../assets/img/cards/ind_rp.png";
import bg4 from "../../../../assets/img/cards/food_rp.png";
import bg5 from "../../../../assets/img/cards/finance_rp.png";
import bg6 from "../../../../assets/img/cards/cons_rp.png";

const Industries: React.FC = () => {
  const fields = [
    {
      title: "Healthcare",
      bgImage: bg1,
    },
    {
      title: "Finance",
      bgImage: bg5,
    },
    {
      title: "Industries",
      bgImage: bg3,
    },
    {
      title: "Food & Beverages",
      bgImage: bg4,
    },
    {
      title: "Construction",
      bgImage: bg6,
    },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-50 to-neutral-50">
      <div className="max-w-7xl mx-auto space-y-6 py-16 px-6">
        <ScrollAnimation animateIn="fadeInDown" duration={1} animateOnce>
          <SubHeading content="FOCUSING EXCELLENCE" />
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInDown" duration={1} animateOnce>
          <div>
            <h3 className="text-xl md:text-4xl font-semibold">Our Fields</h3>
          </div>
        </ScrollAnimation>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 items-center gap-4">
          {fields.map((field, index) => (
            <ScrollAnimation
              animateIn="zoomIn"
              className="h-full"
              key={index}
              animateOnce
              duration={1}
            >
              <div
                className="p-6 rounded-xl border border-slate-300 text-center text-sm md:text-lg font-medium relative overflow-hidden group"
                style={{
                  backgroundImage: `url(${field.bgImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                {/* <div className="absolute inset-0 group-hover:bg-opacity-30 transition-all duration-300" /> */}
                <span className="relativ z-10">{field.title}</span>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Industries;
