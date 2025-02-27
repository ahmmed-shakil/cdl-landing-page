import React, { useState, useEffect } from "react";
import client1 from "../../../../assets/img/clients/arora.png";
import client2 from "../../../../assets/img/clients/ribango.png";
import client3 from "../../../../assets/img/clients/trading.png";
import client4 from "../../../../assets/img/clients/udak.png";
import client5 from "../../../../assets/img/clients/usa_tax.png";
import client6 from "../../../../assets/img/clients/pog.png";
import client7 from "../../../../assets/img/clients/perfo.png";
import client8 from "../../../../assets/img/clients/mw.png";
import client9 from "../../../../assets/img/clients/guru_nanak.png";
import ScrollAnimation from "react-animate-on-scroll";

const Clients: React.FC = () => {
  // Include all 9 clients
  const clients = [
    { img: client1, name: "Arora" },
    { img: client2, name: "Ribango" },
    { img: client3, name: "Trading" },
    { img: client4, name: "Udak" },
    { img: client5, name: "USA Tax" },
    { img: client6, name: "POG" },
    { img: client7, name: "Perfo" },
    { img: client8, name: "MW" },
    { img: client9, name: "Guru Nanak" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate featured client on mobile
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % clients.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [clients.length]);

  // Animation variants for different positions in mobile carousel
  const getMobileAnimClass = (index: number) => {
    const position = (index - activeIndex + clients.length) % clients.length;
    console.log("🚀 ~ getMobileAnimClass ~ position:", position);

    if (position === 0) return "fadeInUp"; // Center featured
    if (position === 1 || position === clients.length - 1) return "fadeInRight"; // Adjacent right/left
    if (position === 2 || position === clients.length - 2) return "fadeInDown"; // Secondary right/left
    if (position === 3 || position === clients.length - 3) return "fadeInLeft"; // Far right/left
    if (position === 4 || position === clients.length - 4) return "fadeInDown"; // Top right/left positions
    return "fadeIn"; // Others
  };

  return (
    <div className="max-w-7xl mx-auto py-16 px-6 overflow-hidden">
      <ScrollAnimation animateIn="fadeInDown" duration={1} animateOnce>
        <div className="mb-12 text-center">
          <h3 className="text-xl md:text-4xl font-semibold text-slate-800">
            Trusted by Industry Leaders
          </h3>
        </div>
      </ScrollAnimation>

      {/* Mobile Layout - Improved Orbit System */}
      <div className="md:hidden relative h-80 mb-8">
        {/* Center (Featured) Client */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
          <ScrollAnimation
            animateIn="pulse"
            duration={1}
            initiallyVisible={true}
          >
            <div className="bg-white border-2 border-blue-400 p-5 rounded-lg shadow-xl w-32 h-32 flex items-center justify-center">
              <img
                src={clients[activeIndex].img || "/placeholder.svg"}
                className="w-full h-full object-contain"
                alt={`${clients[activeIndex].name} logo`}
              />
            </div>
          </ScrollAnimation>
        </div>

        {/* Orbiting Clients - Enhanced with top positions */}
        {clients.map(
          (client, i) =>
            i !== activeIndex && (
              <div
                key={i}
                className={`absolute transition-all duration-500 ease-in-out ${
                  // Dynamic positioning with top positions added
                  i === (activeIndex + 1) % clients.length
                    ? "top-1/4 right-4 z-10" // right
                    : i === (activeIndex + 2) % clients.length
                    ? "top-1/2 right-0 z-0" // far right
                    : i === (activeIndex + clients.length - 1) % clients.length
                    ? "top-1/4 left-4 z-10" // left
                    : i === (activeIndex + clients.length - 2) % clients.length
                    ? "top-1/2 left-0 z-0" // far left
                    : i === (activeIndex + 3) % clients.length
                    ? "bottom-4 right-1/4 z-0" // bottom right
                    : i === (activeIndex + clients.length - 3) % clients.length
                    ? "bottom-4 left-1/4 z-0" // bottom left
                    : i === (activeIndex + 4) % clients.length
                    ? "top-0 right-1/4 z-10" // top right
                    : i === (activeIndex + clients.length - 4) % clients.length
                    ? "top-0 left-1/4 z-10" // top left
                    : "opacity-0 scale-50" // others hidden
                }`}
              >
                <ScrollAnimation
                  animateIn={getMobileAnimClass(i)}
                  duration={1}
                  initiallyVisible={true}
                >
                  <div
                    className={`bg-slate-50 border border-slate-200 p-3 rounded-md shadow-md w-16 h-16 flex items-center justify-center opacity-80 hover:opacity-100 cursor-pointer transform hover:scale-110 transition-all`}
                    onClick={() => setActiveIndex(i)}
                  >
                    <img
                      src={client.img || "/placeholder.svg"}
                      className="w-full h-full object-contain"
                      alt={`${client.name} logo`}
                    />
                  </div>
                </ScrollAnimation>
              </div>
            )
        )}

        {/* Mobile Navigation Dots - Improved spacing */}
        <div className="absolute bottom-[-24px] left-1/2 transform -translate-x-1/2 flex space-x-2 mt-4">
          {clients.map((_, i) => (
            <div
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === activeIndex ? "bg-blue-500 w-4" : "bg-slate-300"
              }`}
              aria-label={`View client ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Tablet Layout (3x3 Grid) */}
      <div className="hidden md:grid lg:hidden md:grid-cols-3 gap-6">
        {clients.map((client, i) => (
          <ScrollAnimation
            key={i}
            animateIn={
              i % 3 === 0
                ? "fadeInLeft"
                : i % 3 === 2
                ? "fadeInRight"
                : "fadeInUp"
            }
            delay={i * 100}
            duration={1}
            animateOnce
          >
            <div className="bg-white border border-slate-200 p-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group">
              <div className="overflow-hidden">
                <img
                  src={client.img || "/placeholder.svg"}
                  className="w-full h-20 object-contain transform group-hover:scale-110 transition-transform duration-300"
                  alt={`${client.name} logo`}
                />
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>

      {/* Desktop Layout (Staggered Grid) */}
      <div className="hidden lg:grid grid-cols-5 gap-6">
        {/* Row 1 - 3 logos */}
        <div className="col-span-1"></div>
        {clients.slice(0, 3).map((client, i) => (
          <ScrollAnimation
            key={i}
            animateIn="fadeInDown"
            delay={i * 150}
            duration={1}
            animateOnce
          >
            <div className="bg-white border border-slate-200 p-6 rounded-lg shadow-md hover:shadow-xl hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-1">
              <img
                src={client.img || "/placeholder.svg"}
                className="w-full h-24 object-contain"
                alt={`${client.name} logo`}
              />
            </div>
          </ScrollAnimation>
        ))}
        <div className="col-span-1"></div>

        {/* Row 2 - All 5 logos */}
        {clients.slice(3, 8).map((client, i) => (
          <ScrollAnimation
            key={i + 3}
            animateIn={i % 2 === 0 ? "fadeInLeft" : "fadeInRight"}
            delay={300 + i * 100}
            duration={1}
            animateOnce
          >
            <div className="bg-white border border-slate-200 p-6 rounded-lg shadow-md hover:shadow-xl hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-1">
              <img
                src={client.img || "/placeholder.svg"}
                className="w-full h-24 object-contain"
                alt={`${client.name} logo`}
              />
            </div>
          </ScrollAnimation>
        ))}

        {/* Row 3 - 1 logo centered */}
        <div className="col-span-2"></div>
        <ScrollAnimation
          animateIn="fadeInUp"
          delay={800}
          duration={1}
          animateOnce
        >
          <div className="bg-white border border-slate-200 p-6 rounded-lg shadow-md hover:shadow-xl hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-1">
            <img
              src={clients[8].img || "/placeholder.svg"}
              className="w-full h-24 object-contain"
              alt={`${clients[8].name} logo`}
            />
          </div>
        </ScrollAnimation>
        <div className="col-span-2"></div>
      </div>
    </div>
  );
};

export default Clients;
