import { Button, Checkbox, Input } from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  FacebookFilled,
  InstagramFilled,
  LinkedinFilled,
} from "@ant-design/icons";
import SubHeading from "../../../../components/ui/sub-heading";
import { FcCustomerSupport } from "react-icons/fc";
import { FaMapLocation } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import ScrollAnimation from "react-animate-on-scroll";

const ContactUs = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 pt-12 pb-16 grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Left: Contact Form */}
      <ScrollAnimation animateIn="slideInUp">
        <div className="bg-gray-50 shadow-md rounded-lg p-8 space-y-3">
          <SubHeading content="CONTACT" />
          <div>
            <h3 className="text-xl md:text-4xl font-semibold">
              Let's get in touch
            </h3>
          </div>
          <p className="text-gray-500 mt-2">
            You can reach us anytime via{" "}
            <a href="mailto:info@codedrivenlabs.com" className="text-blue-600">
              info@codedrivenlabs.com
            </a>
          </p>

          {/* Form */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input placeholder="First Name" className="h-12" />
            <Input placeholder="Last Name" className="h-12" />
          </div>
          <div className="mt-4">
            <Input placeholder="Your Email" className="h-12" />
          </div>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input placeholder="Your Number" className="h-12" />
            <Input placeholder="Your Country" className="h-12" />
          </div>
          <div className="mt-4">
            <Input.TextArea placeholder="Leave us a message..." rows={4} />
          </div>

          <div className="mt-4 flex items-start">
            <Checkbox className="text-gray-500">
              You agree to our{" "}
              <a href="#" className="text-blue-600">
                terms and conditions
              </a>
            </Checkbox>
          </div>

          <Button
            type="primary"
            size="large"
            className="w-full mt-2 h-12 text-lg"
          >
            Get Started
          </Button>
        </div>
      </ScrollAnimation>

      {/* Middle: Stats Section */}
      <ScrollAnimation animateIn="slideInUp" duration={1}>
        <div className="bg-gray-50 shadow-md rounded-lg p-8 md:pb-14">
          <div className="space-y-6">
            <div className="border-b border-gray-200 py-8">
              <h3 className="text-xl font-bold">3+ Years</h3>
              <p className="text-blue-600">Field Experience</p>
            </div>
            <div className="border-b border-gray-200 pb-8">
              <h3 className="text-xl font-bold">10+ Projects</h3>
              <p className="text-blue-600">Done Around World</p>
            </div>
            <div className="border-b border-gray-200 pb-8">
              <h3 className="text-xl font-bold">99%</h3>
              <p className="text-blue-600">Client Satisfaction</p>
            </div>
            <div className="border-b border-gray-200 pb-8">
              <h3 className="text-xl font-bold">2023</h3>
              <p className="text-blue-600">Established On</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">2 Mins</h3>
              <p className="text-blue-600">Response Time</p>
            </div>
          </div>
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn="slideInUp" duration={2}>
        {/* Right: Contact Info */}
        <div className="bg-gray-50 shadow-md rounded-lg p-8 ">
          <FcCustomerSupport size={50} />
          <h4 className="text-lg mt-6 md:text-xl font-semibold">
            Contact Info
          </h4>
          <div className="mt-4 space-y-4 border-b border-slate-200 pb-6">
            <p className="flex items-center text-gray-600">
              <PhoneOutlined className="mr-2 text-blue-600" /> +91 9889298078
            </p>
            <p className="flex items-center text-gray-600">
              <PhoneOutlined className="mr-2 text-blue-600" /> +91 7799388158
            </p>
            <p className="flex items-center text-gray-600">
              <MailOutlined className="mr-2 text-blue-600" />{" "}
              info@codedrivenlabs.com
            </p>
          </div>

          <FaMapLocation size={50} className=" text-blue-700 mt-5" />
          <h4 className="mt-6 text-lg font-semibold">Visit Our Office</h4>
          <p className="text-gray-600 mt-2 flex items-start gap-4">
            <EnvironmentOutlined className="mt-1 text-blue-600" />
            <span>Unit No. 405-411, 4th Floor</span>
          </p>
          <p className="text-gray-600 mt-2 flex items-start gap-4">
            <EnvironmentOutlined className="mt-1 text-blue-600" />
            <span>HITEX Business Square</span>
          </p>
          <p className="text-gray-600 mt-2 flex items-start gap-4 border-b border-slate-200 pb-6">
            <EnvironmentOutlined className="mt-1 text-blue-600" />
            <span> Hyderabad 500081.</span>
          </p>

          {/* Social Icons */}
          <div className="mt-6 flex space-x-4 text-blue-600 text-xl">
            <a
              href="https://www.instagram.com/codedrivenlabs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramFilled className="cursor-pointer" />
            </a>
            <a
              href="https://www.facebook.com/codedrivenlabs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookFilled className="cursor-pointer" />
            </a>
            <a
              href="https://www.linkedin.com/company/codedrivenlabs?originalSubdomain=in"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinFilled className="cursor-pointer" />
            </a>
            <a
              href="https://x.com/CodeDrivenLabs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsTwitterX className="cursor-pointer mt-1" />
            </a>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default ContactUs;
