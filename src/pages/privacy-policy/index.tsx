"use client";
import { Button, Divider, Layout, Typography } from "antd";
import { Mail, Home, ArrowUp } from "lucide-react";
// import cdl from "../../assets/img/logo/logo_png.png";
import { useNavigate } from "react-router";

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;

export default function PrivacyPolicy() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const sections = [
    {
      key: "1",
      title: "Information We Collect",
      content: (
        <>
          <Paragraph className="text-gray-600 mb-4 text-sm">
            When you interact with our website or services, we may collect the
            following information:
          </Paragraph>
          <ul className="space-y-2 list-disc pl-6 text-sm">
            <li>
              <Text strong>Personal Information</Text>: Name, email address,
              phone number, company name, and other details submitted via
              contact forms.
            </li>
            <li>
              <Text strong>Usage Data</Text>: Information about how you interact
              with our website, collected via cookies and analytics tools such
              as Google Analytics.
            </li>
            <li>
              <Text strong>Technical Data</Text>: IP address, browser type,
              operating system, and other device-related information.
            </li>
          </ul>
        </>
      ),
    },
    {
      key: "2",
      title: "How We Use Your Information",
      content: (
        <>
          <Paragraph className="text-gray-600 mb-4 text-sm">
            We collect and process your information for the following purposes:
          </Paragraph>
          <ul className="space-y-2 list-disc pl-6 text-sm">
            <li>
              To provide and improve our software development and IT solutions
              services.
            </li>
            <li>
              To respond to your inquiries and communicate with you regarding
              our services.
            </li>
            <li>
              To personalize user experience and improve our website
              functionality.
            </li>
            <li>
              To run marketing and advertising campaigns, including lead
              generation efforts.
            </li>
            <li>To comply with legal obligations and protect our rights.</li>
          </ul>
        </>
      ),
    },
    {
      key: "3",
      title: "Sharing of Information",
      content: (
        <>
          <Paragraph className="text-gray-600 mb-4 text-sm">
            We do not sell, rent, or trade your personal information. However,
            we may share your data with:
          </Paragraph>
          <ul className="space-y-2 list-disc pl-6 text-sm">
            <li>
              <Text strong>Third-Party Service Providers</Text>: Such as Google
              Analytics for tracking and analysis.
            </li>
            <li>
              <Text strong>Legal and Regulatory Authorities</Text>: When
              required by law or to protect against fraud and security threats.
            </li>
          </ul>
        </>
      ),
    },
    {
      key: "4",
      title: "Data Retention",
      content: (
        <Paragraph className="text-gray-600 text-sm">
          We retain your personal data for a period of{" "}
          <Text strong>2 years</Text> or as required by applicable laws. After
          this period, your data will be securely deleted unless further
          retention is necessary for legal or regulatory reasons.
        </Paragraph>
      ),
    },
    {
      key: "5",
      title: "Cookies and Tracking Technologies",
      content: (
        <Paragraph className="text-gray-600 text-sm">
          Our website uses cookies and similar technologies to enhance user
          experience and gather analytics. You can manage cookie preferences via
          your browser settings.
        </Paragraph>
      ),
    },
    {
      key: "6",
      title: "Your Rights and Choices",
      content: (
        <>
          <Paragraph className="text-gray-600 mb-4 text-sm">
            You have the right to:
          </Paragraph>
          <ul className="space-y-2 list-disc pl-6 text-sm">
            <li>Request access to your personal data.</li>
            <li>Request correction or deletion of your personal data.</li>
            <li>
              Opt out of marketing communications by emailing{" "}
              <Text strong>info@codedrivenlabs.com</Text>.
            </li>
          </ul>
        </>
      ),
    },
    {
      key: "7",
      title: "Data Security",
      content: (
        <Paragraph className="text-gray-600 text-sm">
          We implement industry-standard security measures to protect your data
          from unauthorized access, misuse, or disclosure. However, no system
          can guarantee absolute security.
        </Paragraph>
      ),
    },
    {
      key: "8",
      title: "Changes to This Privacy Policy",
      content: (
        <Paragraph className="text-gray-600 text-sm">
          We may update this Privacy Policy periodically. Any changes will be
          posted on this page with an updated effective date.
        </Paragraph>
      ),
    },
    {
      key: "9",
      title: "Contact Information",
      content: (
        <div className="space-y-3">
          <Paragraph className="text-gray-600 text-sm">
            For any questions or concerns regarding this Privacy Policy, please
            contact us at:
          </Paragraph>
          <div className="flex items-center gap-2 text-xs sm:text-sm">
            <Mail className="text-blue-600 h-4 w-4" />
            <Text strong className="text-xs sm:text-sm">
              Email:
            </Text>
            <a
              href="mailto:info@codedrivenlabs.com"
              className="text-blue-600 hover:underline text-xs sm:text-sm"
            >
              info@codedrivenlabs.com
            </a>
          </div>
          <div className="flex items-start gap-2 text-xs sm:text-sm">
            <Home className="text-blue-600 h-4 w-4 mt-1 flex-shrink-0" />
            <div>
              <Text strong className="text-xs sm:text-sm">
                Address:
              </Text>
              <Paragraph className="text-gray-600 mt-1 text-xs sm:text-sm">
                UNIT NO 405-411 4TH FLOOR, HITEX BIZNESS SQUARE, Madhapur,
                Shaikpet, Hyderabad- 500081, Telangana, India.
              </Paragraph>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const navigate = useNavigate();

  return (
    <Layout className="min-h-screen bg-white">
      {/* Header - Modified to ensure full width on mobile */}
      {/* <Header className="sticky top-0 z-50 w-full border-b shadow-sm p-0 bg-[#1677ff]">
        <div className="w-full flex h-16 items-center justify-between px-4 md:max-w-6xl md:mx-auto">
          <div className="flex items-center gap-2">
            <img
              src={cdl || "/placeholder.svg"}
              className="w-20 bg-white p-1 rounded"
            />
          </div>
          <Button
            type="primary"
            className="bg-blue-600 hover:bg-blue-700"
            onClick={() =>
              (window.location.href = "mailto:info@codedrivenlabs.com")
            }
          >
            <div className="flex items-center gap-2">
              Contact Us
              <ExternalLink className="h-4 w-4" />
            </div>
          </Button>
        </div>
      </Header> */}

      {/* Main Content - Unchanged */}
      <Content className="flex-1 container max-w-6xl mx-auto py-10 px-4">
        {/* Content remains the same */}
        <div className="">
          <div className="mb-10">
            <Title level={1} className="text-2xl sm:text-3xl font-bold mb-4">
              Privacy Policy
            </Title>
            <Divider className="my-6" />
            <Paragraph className="text-gray-600 ">
              CODE DRIVEN LABS PRIVATE LIMITED ("Company," "we," "our," or "us")
              operates the website{" "}
              <a
                href="https://www.codedrivenlabs.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-blue-600 hover:underline"
              >
                www.codedrivenlabs.com
              </a>{" "}
              (the "Site"). We are committed to protecting your privacy and
              ensuring that your personal data is handled securely and in
              compliance with applicable Indian laws, including the Information
              Technology Act, 2000, and the Information Technology (Reasonable
              Security Practices and Procedures and Sensitive Personal Data or
              Information) Rules, 2011.
            </Paragraph>
            <Paragraph className="text-gray-600 max-w-3xl mt-4">
              By using our Site and services, you consent to the collection,
              use, and disclosure of your information as described in this
              Privacy Policy.
            </Paragraph>
          </div>

          <div className="space-y-10">
            {sections.map((section) => (
              <div
                key={section.key}
                id={`section-${section.key}`}
                className="scroll-mt-20"
              >
                <Title level={2} className="text-xl font-semibold mb-4">
                  {section.key}. {section.title}
                </Title>
                <div className="mt-2">{section.content}</div>
                {section.key !== "9" && <Divider className="mt-10" />}
              </div>
            ))}
          </div>
        </div>
      </Content>

      {/* Footer - Modified to ensure full width on mobile */}
      <footer className="  p-0 w-full">
        <div className="w-full py-10 px-4">
          <div className="flex flex-row justify-between items-center w-full max-w-6xl mx-auto">
            <div className="text-left">
              <h3 className="font-semibold m-0 text-lg md:text-3xl">
                Code Driven Labs
              </h3>
            </div>
            <div className="flex justify-center gap-4">
              <Button
                onClick={() => {
                  navigate("/");
                }}
                type="text"
                className="text-gray-300 hover:text-white text-xs sm:text-sm"
              >
                Home
              </Button>
              <Button
                type="primary"
                className="text-gray-300 hover:text-white text-xs sm:text-sm"
              >
                Privacy Policy
              </Button>
            </div>
          </div>
          <Divider className="my-6 bg-gray-700 md:max-w-6xl md:mx-auto" />
          <div className="text-center text-gray-400 text-xs md:max-w-6xl md:mx-auto">
            © {new Date().getFullYear()} Code Driven Labs. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Back to top button - Unchanged */}
      <div
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 p-3 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-all cursor-pointer"
        aria-label="Back to top"
      >
        <ArrowUp className="h-5 w-5" />
      </div>
    </Layout>
  );
}
