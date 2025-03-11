import React, { useState, useEffect } from "react";
import { Button, Modal } from "antd";
import LandingHero from "./components/hero";
import Services from "./components/services";
import Industries from "./components/industries";
import Clients from "./components/clients";
import Review from "./components/reviews";
import ContactUs from "./components/contact";
import logo from "../../assets/img/logo/logo_png.png";
import NewsLetterModal from "./components/modal";
// import WhyUs from "./components/why-us";

const LandingPage: React.FC = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isNewsletterModalOpen, setIsNewsletterModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [modalWidth, setModalWidth] = useState("40%");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsNewsletterModalOpen(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setModalWidth("85%");
      } else {
        setModalWidth("40%");
      }
    };

    // Set initial width
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col pb-20">
      {/* Main Content */}
      <div className="flex-1">
        <LandingHero />
        <Services />
        <Industries />
        <Clients />
        {/* <WhyUs /> */}
        <Review />
        <ContactUs />
      </div>

      {/* Sticky Footer */}

      <footer
        className="fixed bottom-0 left-0 w-full bg-gray-100 text-white p-4 shadow-lg py-2"
        // style={{ zIndex: 999999 }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}

          <div className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="h-12 md:h-16 w-auto" />
          </div>

          {/* Book a Demo Button */}
          <Button
            type="primary"
            size="large"
            onClick={() => setIsDemoModalOpen(true)}
          >
            Let’s Talk – Free Strategy Call
          </Button>
        </div>
      </footer>

      {/* Book a Demo Modal */}
      <Modal
        title={<span className="text-lg font-bold text-indigo-600"></span>}
        open={isDemoModalOpen}
        onCancel={() => setIsDemoModalOpen(false)}
        footer={null}
        getContainer={false}
        width={modalWidth}
        style={{ margin: "0 auto" }}
      >
        <iframe
          src="https://calendly.com/anshgarg7/discovery-call?month=2025-02"
          // src="https://calendly.com/anshgarg7/discovery-call?date=2025-02-01"
          className="w-full h-[500px] border-none mt-10"
        ></iframe>
      </Modal>

      {/* Newsletter Subscription Modal */}
      <Modal
        title={<div className="text-lg text-indigo-600 pr-2"></div>}
        open={isNewsletterModalOpen}
        onCancel={() => setIsNewsletterModalOpen(false)}
        footer={null}
        getContainer={false}
        className="rounded-lg "
        width={modalWidth}
        style={{ margin: "0 auto" }}
      >
        <NewsLetterModal
          email={email}
          setEmail={setEmail}
          setIsNewsletterModalOpen={setIsNewsletterModalOpen}
        />
      </Modal>
    </div>
  );
};

export default LandingPage;
