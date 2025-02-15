import { Carousel } from "antd";
import React, { useEffect, useState } from "react";
import client1 from "../../../../assets/img/clients/arora.png";
import client2 from "../../../../assets/img/clients/ribango.png";
import client3 from "../../../../assets/img/clients/trading.png";
import client4 from "../../../../assets/img/clients/udak.png";
import client5 from "../../../../assets/img/clients/usa_tax.png";

const Clients: React.FC = () => {
  const [slidesToShow, setSlidesToShow] = useState(5);

  useEffect(() => {
    const updateSlidesToShow = () => {
      setSlidesToShow(window.innerWidth <= 768 ? 2 : 5);
    };

    updateSlidesToShow(); // Initial check
    window.addEventListener("resize", updateSlidesToShow);

    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

  const clients = [client1, client2, client3, client4, client5];

  return (
    <div className="max-w-7xl mx-auto py-16 space-y-6 px-6">
      <Carousel autoplay dots={false} slidesToShow={slidesToShow} infinite>
        {clients.map((img, i) => (
          <div key={i} className="flex justify-end">
            <img
              src={img}
              className="w-2/3 h-24 rounded-md"
              alt={`client-${i}`}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Clients;
