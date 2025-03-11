/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Input, Select, Form, message } from "antd";
import axios from "axios";
import React, { useState } from "react";

interface NewsLetterModalProps {
  email: string;
  setEmail: (email: string) => void;
  setIsNewsletterModalOpen: (isOpen: boolean) => void;
}

const { Option } = Select;

const services = [
  "Web Development",
  "Software Solutions",
  "Cloud Computing",
  "Digital Marketing",
  "IT Consultation",
  "Cybersecurity",
  "App Development",
  "AI & Automation",
  "Others",
];

const NewsLetterModal: React.FC<NewsLetterModalProps> = ({
  email,
  setEmail,
  setIsNewsletterModalOpen,
}) => {
  const [selectedService, setSelectedService] = useState<string | undefined>(
    undefined
  );
  const [form] = Form.useForm();

  const onFinish = async (values: any) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/contact",
        values
      );
      if (response.data.success) {
        message.success(
          "Thank you for subscribing! We'll contact you shortly."
        );
        setIsNewsletterModalOpen(false);
      } else {
        message.error(
          response.data.message || "Something went wrong. Please try again."
        );
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      message.error("Failed to submit the form. Please try again later.");
    }
  };

  return (
    <div className=" md:p-6 rounded-xl mt-5">
      <div className="mb-6 mt-6 md:mt-0 text-justify md:text-center bg-gradient-to-br from-white to-indigo-50 py-3 px-2 rounded-xl">
        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
          Let’s Talk!
        </h3>
        <p className=" text-gray-600 mt-2 leading-relaxed max-w-lg mx-auto">
          Want a Smarter, More Scalable Software Solution?
        </p>
        <p className="text-gray-600 mt-2 leading-relaxed max-w-lg mx-auto">
          Join <span className="font-bold text-indigo-600">100+</span>{" "}
          businesses that have streamlined their operations with our custom
          software solutions.
        </p>
        <div className="bg-indigo-100 text-indigo-800 font-medium py-2 px-4 rounded-full inline-block mt-2 animate-pulse">
          FREE 30-Minute Consultation
        </div>
      </div>

      <div className="flex flex-col gap-2 border-t border-indigo-100 pt-4">
        <Form
          form={form}
          layout="vertical"
          className="flex flex-col  gap-1"
          onFinish={onFinish}
          initialValues={{ email }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
            <Form.Item
              label={<span className="text-gray-700 font-medium">Name</span>}
              name="name"
              rules={[{ required: true, message: "Please enter your name" }]}
            >
              <Input
                placeholder="Enter your name"
                size="large"
                className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 hover:border-indigo-400 transition-colors"
                prefix={<span className="text-indigo-400">👤</span>}
              />
            </Form.Item>

            <Form.Item
              label={<span className="text-gray-700 font-medium">Email</span>}
              name="email"
              rules={[
                { required: true, message: "Please enter your email" },
                { type: "email", message: "Please enter a valid email" },
              ]}
            >
              <Input
                type="email"
                placeholder="Enter your email"
                size="large"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 hover:border-indigo-400 transition-colors"
                prefix={<span className="text-indigo-400">✉️</span>}
              />
            </Form.Item>
          </div>

          <Form.Item
            label={
              <span className="text-gray-700 font-medium">
                What do you need help with?
              </span>
            }
            name="service"
            rules={[{ required: true, message: "Please select a service" }]}
          >
            <Select
              placeholder="Select a service"
              size="large"
              className="w-full"
              value={selectedService}
              onChange={setSelectedService}
              dropdownClassName="bg-white rounded-md shadow-lg"
            >
              {services.map((service) => (
                <Option key={service} value={service}>
                  {service}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            label={
              <span className="text-gray-700 font-medium">
                Share a challenge you're facing
              </span>
            }
            name="challenge"
          >
            <Input.TextArea
              placeholder="Describe your challenge"
              rows={3}
              className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 hover:border-indigo-400 transition-colors resize-none"
            />
          </Form.Item>

          <Form.Item className="mb-0 mt-4">
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-md shadow-md hover:shadow-lg hover:-translate-y-1 transition-all w-full text-base"
            >
              Get Your Free Consultation Now
            </Button>
          </Form.Item>
        </Form>

        {/* <div className="mt-1 bg-white p-4 rounded-lg shadow-sm border border-indigo-100"> */}
        <div className=" bg-white rounded-lg">
          <div className="flex flex-col space-y-1">
            <div className="flex items-center">
              <span className="bg-green-100 text-green-600 p-1 rounded-full mr-2">
                ✓
              </span>
              <span className="font-medium">Trusted by global businesses</span>
            </div>
            <div className="flex items-center">
              <span className="bg-green-100 text-green-600 p-1 rounded-full mr-2">
                ✓
              </span>
              <span className="font-medium">
                No spam, no commitment – just expert insights
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetterModal;
