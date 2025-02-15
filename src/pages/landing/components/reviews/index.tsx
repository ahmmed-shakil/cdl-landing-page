import { Card, Carousel, ConfigProvider } from "antd";
import React from "react";
import SubHeading from "../../../../components/ui/sub-heading";
import user1 from "../../../../assets/img/reviews/udak.png";
import user2 from "../../../../assets/img/reviews/user-1.jpeg";
import user3 from "../../../../assets/img/reviews/user-2.jpeg";
import ScrollAnimation from "react-animate-on-scroll";

const people = [
  {
    id: 1,
    name: "Akhil Bansal",
    job: "US Tax Gurus",
    image: user3,
    text: "It's professional, user-friendly, and perfectly represents my services. I'm impressed with their work and highly recommend them for any web development project. Thanks for boosting my online presence!",
    heading: "Code Driven Labs created an outstanding CPA website for me",
  },
  {
    id: 2,
    name: "Sanjeev Sharma ",
    job: "Udak",
    image: user1,
    text: "It's not just a website; it's an elegant shopping destination. Their work has elevated my business, and I wholeheartedly recommend them for e-commerce solutions. Thank you for making my online presence shine!",
    heading:
      "These people have truly impressed me with the creation of my e-commerce store for premium products.",
  },
  {
    id: 3,
    name: "Balwant Singh",
    job: "Ribango",
    image: user2,
    text: "Their support is top-notch. I wholeheartedly recommend them to anyone in the travel industry. Thank you for making my business better!",
    heading:
      "CDL has truly transformed my travel business with their outstanding travel booking software. The customized solution is user-friendly, efficient, and highly reliable.",
  },
];

const Review: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-neutral-50">
      <div className="max-w-7xl mx-auto py-16 space-y-6 px-6">
        <ScrollAnimation animateIn="fadeInDown" duration={2}>
          <SubHeading content="TESTIMONIALS" />
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInDown" duration={2}>
          <div>
            <h3 className="text-xl md:text-4xl font-semibold">
              What Clients Say About Us.
            </h3>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="zoomIn">
          <ConfigProvider
            theme={{
              components: {
                Carousel: {
                  dotActiveWidth: 16,
                  dotWidth: 12,
                  colorPrimary: "#1677ff",
                  arrowSize: 20,
                  arrowOffset: 20,
                },
              },
            }}
          >
            <Carousel autoplay={false} arrows>
              {people.map(({ id, name, job, image, text, heading }) => (
                <Card
                  key={id}
                  className="relative bg-white overflow-hidden h-[500px] md:h-[400px] flex flex-col"
                >
                  <div className="p-6 md:px-20 flex flex-col justify-between h-full">
                    {/* Content */}
                    <div className="space-y-4 flex-grow">
                      <h3 className="text-xl md:text-3xl font-semibold leading-tight text-gray-900">
                        {heading}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-md md:text-xl">
                        {text}
                      </p>
                    </div>
                    {/* Header with image and quote icon */}
                    <div className="flex items-center justify-between mt-6">
                      <div className="flex items-center space-x-4">
                        <div className="relative">
                          <img
                            src={image}
                            alt={name}
                            className="w-20 h-20 rounded-full object-cover border-2 border-blue-500"
                          />
                          <div className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full p-2">
                            <svg
                              className="w-4 h-4 text-white"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                            </svg>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg">{name}</h4>
                          <p className="text-sm text-gray-600">{job}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 -mt-6 -mr-6 w-24 h-24 bg-blue-500/10 rounded-full" />
                  <div className="absolute bottom-0 left-0 -mb-6 -ml-6 w-24 h-24 bg-blue-500/10 rounded-full" />
                </Card>
              ))}
            </Carousel>
          </ConfigProvider>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default Review;
