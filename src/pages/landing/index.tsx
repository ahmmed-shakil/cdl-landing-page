import React, { useState, useEffect } from "react";
import { Button, Modal, Input } from "antd";
import LandingHero from "./components/hero";
import Services from "./components/services";
import Industries from "./components/industries";
import Clients from "./components/clients";
import Review from "./components/reviews";
import ContactUs from "./components/contact";
import logo from "../../assets/img/logo/logo_png.png";

const LandingPage: React.FC = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isNewsletterModalOpen, setIsNewsletterModalOpen] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsNewsletterModalOpen(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col pb-20">
      {/* Main Content */}
      <div className="flex-1">
        <LandingHero />
        <Services />
        <Industries />
        <Clients />
        <Review />
        <ContactUs />
      </div>

      {/* Sticky Footer */}

      <footer className="fixed bottom-0 left-0 w-full bg-gray-100 text-white p-4 shadow-lg py-2">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}

          <div className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="h-16 w-auto" />
          </div>

          {/* Book a Demo Button */}
          <Button
            type="primary"
            size="large"
            onClick={() => setIsDemoModalOpen(true)}
          >
            Book a Demo
          </Button>
        </div>
      </footer>

      {/* Book a Demo Modal */}
      <Modal
        title={
          <span className="text-lg font-bold text-indigo-600">Book A Demo</span>
        }
        open={isDemoModalOpen}
        onCancel={() => setIsDemoModalOpen(false)}
        footer={null}
        getContainer={false}
      >
        <iframe
          src="https://calendly.com/anshgarg7/discovery-call?month=2025-02"
          className="w-full h-[500px] border-none"
        ></iframe>
      </Modal>

      {/* Newsletter Subscription Modal */}
      <Modal
        title={
          <span className="text-lg font-bold text-indigo-600">
            Subscribe to our Newsletter
          </span>
        }
        open={isNewsletterModalOpen}
        onCancel={() => setIsNewsletterModalOpen(false)}
        footer={null}
        getContainer={false}
        className="rounded-lg"
      >
        <div className="flex flex-col gap-4 p-6 text-center">
          <Input
            type="email"
            placeholder="Enter your email"
            size="large"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
          />
          <Button
            type="primary"
            className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold py-2 rounded-md shadow-md hover:opacity-90 transition-all"
            onClick={() => {
              console.log("Subscribed with:", email);
              setIsNewsletterModalOpen(false);
            }}
            size="large"
          >
            Subscribe
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default LandingPage;
