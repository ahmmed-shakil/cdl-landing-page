import React from "react";
import SubHeading from "../../../../components/ui/sub-heading";
import web from "../../../../assets/img/icons/web_dev.png";
import soft from "../../../../assets/img/icons/software_1.png";
import cloud from "../../../../assets/img/icons/cloud.png";
import digital from "../../../../assets/img/icons/digital_marketing_1.png";
import it from "../../../../assets/img/icons/it_consult_1.png";
import branding from "../../../../assets/img/icons/branding_1.png";
import ScrollAnimation from "react-animate-on-scroll";

const Services: React.FC = () => {
  const services = [
    {
      title: "Web Development",
      desc: "Creating interactive and engaging digital experiences through code and design.",
      icon: web,
    },
    {
      title: "Software Solutions",
      desc: "Developing innovative software solutions to address complex challenges and enhance user experiences.",
      icon: soft,
    },
    {
      title: "Cloud Computing",
      desc: "Delivering on-demand computing resources and services over thea internet to enable scalable and flexible IT solutions.",
      icon: cloud,
    },
    {
      title: "Digital Marketing",
      desc: "Boost your online presence and drive results with our tailored digital marketing solutions.",
      icon: digital,
    },
    {
      title: "IT Consultation",
      desc: "Providing expert guidance to optimize technology strategies and solutions for business success.",
      icon: it,
    },
    {
      title: "Branding",
      desc: "Providing expert guidance to optimize technology strategies and solutions for business success.",
      icon: branding,
    },
  ];
  return (
    <div className=" space-y-6 max-w-7xl mx-auto px-5 w-full py-16">
      <ScrollAnimation animateIn="fadeInDown" duration={2} animateOnce>
        <SubHeading content="WHAT WE’RE OFFERING" />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeInDown" duration={2} animateOnce>
        <div>
          <h3 className=" text-xl md:text-4xl font-semibold">
            Dealing in all professional IT services.
          </h3>
        </div>
      </ScrollAnimation>
      <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center gap-4">
        {services?.map((s, i) => (
          <ScrollAnimation
            animateIn="zoomIn"
            // className=" h-full"
            key={i}
            animateOnce
            duration={1}
          >
            <div className="p-2 md:pt-4 rounded-md  flex flex-col items-center mt-5 h-full hover:bg-gray-200 transition-all duration-150 ease-in-out ">
              <div className=" w-14 h-14">
                <img src={s?.icon} />
              </div>
              <div>
                <h5 className=" pt-3 pb-0 mb-0 text-sm md:text-lg">
                  {s?.title}
                </h5>
              </div>
            </div>
            {/* <div className=" bg-white p-4 rounded-md  border border-slate-100 flex flex-col items-start mt-5 h-full hover:bg-gray-200 transition-all duration-150 ease-in-out shadow-md">
              <div className=" w-14 h-14 mb-3 pt-3">
                <img src={s?.icon} />
              </div>
              <div>
                <h5 className=" py-2 text-md md:text-lg font-semibold">
                  {s?.title}
                </h5>
                <p>{s?.desc}</p>
              </div>
            </div> */}
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default Services;
