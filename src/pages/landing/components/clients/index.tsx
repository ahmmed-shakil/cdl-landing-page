import type React from "react";
import client1 from "../../../../assets/img/clients/arora.png";
import client2 from "../../../../assets/img/clients/ribango.png";
import client3 from "../../../../assets/img/clients/trading.png";
import client4 from "../../../../assets/img/clients/udak.png";
import client5 from "../../../../assets/img/clients/usa_tax.png";
import ScrollAnimation from "react-animate-on-scroll";

const Clients: React.FC = () => {
  const clients = [client1, client2, client3, client4, client5];

  return (
    <div className="max-w-7xl mx-auto py-16 px-6">
      {/* <ScrollAnimation animateIn="fadeInDown" duration={1} animateOnce>
        <div>
          <h3 className="text-xl md:text-4xl font-semibold">Our Clients</h3>
        </div>
      </ScrollAnimation> */}

      {/* Mobile Layout (1-3-1) */}
      <div className="grid gap-4 md:hidden">
        {/* First row - 1 item */}
        <ScrollAnimation animateIn="fadeInDown" duration={1} animateOnce>
          <div className="flex justify-center">
            <div className="bg-slate-50 border border-slate-200 p-4 rounded-md shadow-lg w-28">
              <img
                src={clients[0] || "/placeholder.svg"}
                className="w-full h-16 object-contain"
                alt="Client logo 1"
              />
            </div>
          </div>
        </ScrollAnimation>

        {/* Second row - 3 items */}
        <div className="grid grid-cols-3 gap-2">
          {clients.slice(1, 4).map((img, i) => (
            <ScrollAnimation
              key={i}
              animateIn="fadeInDown"
              duration={1}
              animateOnce
            >
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-md shadow-lg">
                <img
                  src={img || "/placeholder.svg"}
                  className="w-full h-16 object-contain"
                  alt={`Client logo ${i + 2}`}
                />
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* Third row - 1 item */}
        <ScrollAnimation animateIn="fadeInDown" duration={1} animateOnce>
          <div className="flex justify-center">
            <div className="bg-slate-50 border border-slate-200 p-4 rounded-md shadow-lg w-28">
              <img
                src={clients[4] || "/placeholder.svg"}
                className="w-full h-16 object-contain"
                alt="Client logo 5"
              />
            </div>
          </div>
        </ScrollAnimation>
      </div>

      {/* Tablet and Desktop Layout (Regular Grid) */}
      <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-6">
        {clients.map((img, i) => (
          <div
            key={i}
            className="bg-slate-50 border border-slate-200 p-4 rounded-md shadow-lg flex items-center justify-center"
          >
            <img
              src={img || "/placeholder.svg"}
              className="w-32 lg:w-40 h-20 lg:h-24 object-contain"
              alt={`Client logo ${i + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
