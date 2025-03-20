import { Button, Form, Input, message } from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  FacebookFilled,
  InstagramFilled,
  LinkedinFilled,
} from "@ant-design/icons";
import SubHeading from "../../../../components/ui/sub-heading";
// import { FcCustomerSupport } from "react-icons/fc";
// import { FaMapLocation } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import ScrollAnimation from "react-animate-on-scroll";
import { useState } from "react";
import axios from "axios";

const ContactUs = () => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onFinish = async (values: any) => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://api.codedrivenlabs.com/api/contact-form",
        values
      );
      // console.log("🚀 ~ onFinish ~ response:", response);
      if (response?.statusText == "OK") {
        message.success(
          "Thank you for subscribing! We'll contact you shortly."
        );
      } else {
        message.error(
          response?.data?.message || "Something went wrong. Please try again."
        );
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      message.error("Failed to submit the form. Please try again later.");
    } finally {
      setLoading(false);
      form.resetFields();
    }
  };
  return (
    <div className="max-w-7xl mx-auto px-4 pt-12 pb-16 grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Left: Contact Form */}
      <ScrollAnimation
        className="md:col-span-2"
        animateIn="slideInUp"
        animateOnce
      >
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
          <Form layout="vertical" onFinish={onFinish} form={form}>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <Form.Item
                name="firstName"
                rules={[{ required: true, message: "First Name is required" }]}
              >
                <Input placeholder="First Name" className="h-12" />
              </Form.Item>
              <Form.Item
                name="lastName"
                rules={[{ required: true, message: "Last Name is required" }]}
              >
                <Input placeholder="Last Name" className="h-12" />
              </Form.Item>
            </div>
            <Form.Item
              name="email"
              rules={[
                {
                  type: "email",
                  required: true,
                  message: "Enter a valid email",
                },
              ]}
            >
              <Input placeholder="Your Email" className="h-12" />
            </Form.Item>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <Form.Item
                name="phone"
                rules={[
                  { required: true, message: "Phone number is required" },
                ]}
              >
                <Input placeholder="Your Number" className="h-12" />
              </Form.Item>
              <Form.Item name="country">
                <Input placeholder="Your Country" className="h-12" />
              </Form.Item>
            </div>
            <Form.Item
              name="message"
              rules={[{ required: true, message: "Message is required" }]}
            >
              <Input.TextArea placeholder="Leave us a message..." rows={4} />
            </Form.Item>
            {/* <Form.Item
              name="terms"
              valuePropName="checked"
              rules={[{ required: true, message: "You must accept the terms" }]}
            >
              <Checkbox className="text-gray-500">
                You agree to our{" "}
                <a href="#" className="text-blue-600">
                  terms and conditions
                </a>
              </Checkbox>
            </Form.Item> */}
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              className="w-full h-12 text-lg"
              loading={loading}
              disabled={loading}
            >
              Get Started
            </Button>
          </Form>
        </div>
      </ScrollAnimation>

      {/* Middle: Stats Section */}
      {/* <ScrollAnimation animateIn="slideInUp" duration={1} animateOnce>
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
      </ScrollAnimation> */}
      <ScrollAnimation
        animateIn="slideInUp"
        className=" h-full"
        duration={1}
        animateOnce
      >
        {/* Right: Contact Info */}
        <div className="bg-gray-50 shadow-md rounded-lg p-8 ">
          {/* <FcCustomerSupport size={50} /> */}
          <h4 className="text-lg mt-1 md:text-xl font-semibold">
            Contact Info
          </h4>
          <div className="mt-4 space-y-4 border-b border-slate-200 pb-6">
            <p className="flex items-center text-gray-600">
              <PhoneOutlined className="mr-2 text-blue-600" /> +91 9889298078
            </p>
            {/* <p className="flex items-center text-gray-600">
              <PhoneOutlined className="mr-2 text-blue-600" /> +91 7799388158
            </p> */}
            <p className="flex items-center text-gray-600">
              <MailOutlined className="mr-2 text-blue-600" />{" "}
              info@codedrivenlabs.com
            </p>
          </div>

          {/* <FaMapLocation size={50} className=" text-blue-700 mt-5" /> */}
          <h4 className="mt-6 text-lg font-semibold">Visit Our Offce</h4>
          <p className="text-gray-600 mt-2 flex items-start gap-1">
            <EnvironmentOutlined className="mt-1 text-blue-600" />
            <span>Unit No. 405-411, 4th Floor</span>
          </p>
          <p className="text-gray-600 mt-2 flex items-start gap-3">
            {/* <EnvironmentOutlined className="mt-1 text-blue-600 hidden" /> */}
            <span className=" ml-[20px]">HITEX Business Square</span>
          </p>
          <p className="text-gray-600 mt-2 flex items-start gap-3 border-b border-slate-200 pb-6">
            {/* <EnvironmentOutlined className="mt-1 text-blue-600" /> */}
            <span className=" ml-[20px]"> Hyderabad 500081.</span>
          </p>

          {/* Social Icons */}
          <p className="mt-6 text-gray-600 mb-3 flex items-start gap-4">
            <span>Social Media</span>
          </p>
          <div className="flex flex-col space-y-3 text-blue-600 text-2xl">
            <a
              href="https://www.instagram.com/codedrivenlabs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2"
            >
              <InstagramFilled className="cursor-pointer" />
              <span className="text-sm text-black ml-2">Instagram</span>
            </a>
            <a
              href="https://www.facebook.com/codedrivenlabs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2"
            >
              <FacebookFilled className="cursor-pointer" />
              <span className="text-sm text-black ml-2">Facebook</span>
            </a>
            <a
              href="https://www.linkedin.com/company/codedrivenlabs?originalSubdomain=in"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2"
            >
              <LinkedinFilled className="cursor-pointer" />
              <span className="text-sm text-black ml-2">LinkedIn</span>
            </a>
            <a
              href="https://x.com/CodeDrivenLabs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2"
            >
              <BsTwitterX className="cursor-pointer mt-1" />
              <span className="text-sm text-black ml-2">X.com</span>
            </a>
          </div>

          {/* <div style={{ height: "92px" }}></div> */}
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default ContactUs;
