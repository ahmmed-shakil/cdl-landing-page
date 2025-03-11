"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import client1 from "../../../../assets/img/clients/arora.png";
import client2 from "../../../../assets/img/clients/ribango.png";
import client3 from "../../../../assets/img/clients/trading.png";
import client4 from "../../../../assets/img/clients/udak.png";
import client5 from "../../../../assets/img/clients/usa_tax.png";
import client6 from "../../../../assets/img/clients/pog.png";
import client7 from "../../../../assets/img/clients/perfo.png";
import client8 from "../../../../assets/img/clients/mw.png";
import client9 from "../../../../assets/img/clients/guru_nanak.png";

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
  const [isAutoRotating, setIsAutoRotating] = useState(true);

  // Auto-rotate featured client
  useEffect(() => {
    let interval: number;

    if (isAutoRotating) {
      interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % clients.length);
      }, 8000);
    }

    return () => clearInterval(interval);
  }, [clients.length, isAutoRotating]);

  // Pause auto-rotation when user interacts
  const handleClientClick = (index: number) => {
    // Don't do anything if clicking the sun
    if (index === activeIndex) return;

    setIsAutoRotating(false);
    setActiveIndex(index);

    // Resume auto-rotation after 15 seconds of inactivity
    const timer = setTimeout(() => {
      setIsAutoRotating(true);
    }, 15000);

    return () => clearTimeout(timer);
  };

  // Get array of client indices excluding the active one
  const getOrbitingClientIndices = () => {
    return clients
      .map((_, index) => index)
      .filter((index) => index !== activeIndex);
  };

  return (
    <div className="max-w-7xl mx-auto py-16 px-2 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <h3 className="text-xl md:text-4xl font-semibold text-slate-800">
          Trusted By Renowned Brands
        </h3>
      </motion.div>

      {/* Mobile Layout - Solar System */}
      <div className="md:hidden relative h-96 mb-16">
        {/* Orbital System Container - Centered */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Single Orbital Path */}
          <motion.div
            className="absolute rounded-full border border-slate-200"
            style={{
              width: 280,
              height: 280,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
          />

          {/* Center Sun (Active Client) */}
          <motion.div
            // className="absolute z-30"
            className="absolute"
            animate={{ scale: [0.95, 1.05, 0.95] }}
            transition={{
              scale: { repeat: Number.POSITIVE_INFINITY, duration: 3 },
            }}
          >
            <motion.div
              className="bg-white border border-blue-500 shadow-lg mt-12 ml-1 rounded-full w-32 h-32 flex items-center justify-center"
              initial={false}
              animate={{
                boxShadow: [
                  "0 0 10px rgba(0, 0, 255, 0.5)",
                  "0 0 20px rgba(0, 0, 255, 0.7)",
                  "0 0 10px rgba(0, 0, 255, 0.5)",
                ],
              }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
            >
              <img
                src={clients[activeIndex].img || "/placeholder.svg"}
                className="w-24 h-24 object-contain"
                alt={`${clients[activeIndex].name} logo`}
              />
            </motion.div>
          </motion.div>

          {/* Planetary Orbit System */}
          <div className="absolute right-5 w-full h-full">
            {/* Orbiting Planets (Other Clients) */}
            {/* <AnimatePresence> */}
            {getOrbitingClientIndices().map((clientIndex, i) => {
              // Calculate position on orbit
              const orbitingClients = getOrbitingClientIndices().length;
              const angleStep = (2 * Math.PI) / orbitingClients;
              const angle = i * angleStep;
              const orbitRadius = 140; // Orbit radius (half of the 280px circle)

              // Calculate position (start from top, go clockwise)
              const x = orbitRadius * Math.sin(angle);
              const y = -orbitRadius * Math.cos(angle);

              return (
                <motion.div
                  key={`planet-${clientIndex}`}
                  // className="absolute z-20"
                  className="absolute"
                  style={{
                    left: "50%",
                    top: "50%",
                    marginLeft: "-20px", // Half of the width of the orbiting item
                    marginTop: "-20px", // Half of the height of the orbiting item
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    x,
                    y,
                  }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{
                    type: "spring",
                    damping: 15,
                    stiffness: 100,
                  }}
                  onClick={() => handleClientClick(clientIndex)}
                >
                  <motion.div
                    className="bg-white border border-slate-200 rounded-full shadow-md w-20 h-20 flex items-center justify-center cursor-pointer"
                    whileHover={{
                      scale: 1.2,
                      boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <img
                      src={clients[clientIndex].img || "/placeholder.svg"}
                      className="w-10 h-10 object-contain"
                      alt={`${clients[clientIndex].name} logo`}
                    />
                  </motion.div>
                </motion.div>
              );
            })}
            {/* </AnimatePresence> */}
          </div>

          {/* Rotating Orbit Animation */}
          <motion.div
            className="absolute w-full h-full pointer-events-none"
            animate={{ rotate: 360 }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 30,
              ease: "linear",
            }}
          />
        </div>

        {/* Mobile Navigation Dots */}
        <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {clients.map((_, i) => (
            <motion.div
              key={i}
              onClick={() => handleClientClick(i)}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                i === activeIndex ? "bg-blue-500" : "bg-slate-300"
              }`}
              animate={{
                width: i === activeIndex ? 16 : 8,
              }}
              transition={{ duration: 0.2 }}
              aria-label={`View client ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Tablet Layout (3x3 Grid) */}
      <div className="hidden md:grid lg:hidden md:grid-cols-3 gap-6">
        {clients.map((client, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: i * 0.1,
              type: "spring",
              stiffness: 100,
            }}
            className="bg-white border border-slate-200 p-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group"
          >
            <div className="overflow-hidden">
              <motion.img
                src={client.img || "/placeholder.svg"}
                className="w-full h-20 object-contain"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                alt={`${client.name} logo`}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Desktop Layout (Staggered Grid) */}
      <div className="hidden lg:grid grid-cols-5 gap-6">
        {/* Row 1 - 3 logos */}
        <div className="col-span-1"></div>
        {clients.slice(0, 3).map((client, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: i * 0.15,
              type: "spring",
            }}
            className="bg-white border border-slate-200 p-6 rounded-lg shadow-md hover:shadow-xl hover:border-blue-200 transition-all duration-300"
            whileHover={{ y: -5 }}
          >
            <img
              src={client.img || "/placeholder.svg"}
              className="w-full h-24 object-contain"
              alt={`${client.name} logo`}
            />
          </motion.div>
        ))}
        <div className="col-span-1"></div>

        {/* Row 2 - All 5 logos */}
        {clients.slice(3, 8).map((client, i) => (
          <motion.div
            key={i + 3}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.3 + i * 0.1,
              type: "spring",
            }}
            className="bg-white border border-slate-200 p-6 rounded-lg shadow-md hover:shadow-xl hover:border-blue-200 transition-all duration-300"
            whileHover={{ y: -5 }}
          >
            <img
              src={client.img || "/placeholder.svg"}
              className="w-full h-24 object-contain"
              alt={`${client.name} logo`}
            />
          </motion.div>
        ))}

        {/* Row 3 - 1 logo centered */}
        <div className="col-span-2"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.8,
            type: "spring",
          }}
          className="bg-white border border-slate-200 p-6 rounded-lg shadow-md hover:shadow-xl hover:border-blue-200 transition-all duration-300"
          whileHover={{ y: -5 }}
        >
          <img
            src={clients[8].img || "/placeholder.svg"}
            className="w-full h-24 object-contain"
            alt={`${clients[8].name} logo`}
          />
        </motion.div>
        <div className="col-span-2"></div>
      </div>
    </div>
  );
};

export default Clients;
