import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiDocumentText, HiInformationCircle, HiMenu } from "react-icons/hi";
import {
  HiOutlineLightBulb,
  HiOutlineEye,
  HiOutlineFlag,
  HiOutlineHeart,
  HiOutlineClock,
  HiOutlineCheckCircle,
  HiOutlineShieldCheck,
  HiOutlineUserGroup,
} from "react-icons/hi2";

function CustomerCharter() {
  const [theme, setTheme] = useState(() => {
    return document.documentElement.getAttribute("data-theme") || "light";
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const newTheme =
        document.documentElement.getAttribute("data-theme") || "light";
      setTheme(newTheme);
    });
    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  const isDark = theme === "dark";

  // Table of contents items
  const tocItems = [
    "Purpose",
    "Vision",
    "Mission",
    "Our Commitment to You",
    "Our Core Service Principles",
    "Service Standards",
    "Customer Responsibilities",
    "Data Protection & Confidentiality",
    "Accessibility & Inclusion",
    "Feedback & Contact",
  ];

  return (
    <div className="info-page-container">
      {/* Hero Section */}
      <div className="info-hero mb-0">
        <div className="text-4xl font-semibold">Customer Service Charter</div>
        <div className="text-xl font-semibold">
          Our commitment to delivering outstanding service to every customer
        </div>
        shad
      </div>

      <div
        className={`min-h-screen ${isDark ? "text-white" : "text-gray-900"}`}
      >
        {/* Mobile menu button */}
        <div className="lg:hidden px-4 pt-4">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg border ${
              isDark
                ? "border-gray-700 bg-gray-800 text-white"
                : "border-gray-200 bg-white text-gray-900"
            }`}
          >
            <HiMenu /> Table of Contents
          </button>
        </div>

        {/* Two-column layout */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Sidebar - Table of Contents */}
            <aside
              className={`
                lg:block lg:w-80 lg:shrink-0
                ${mobileMenuOpen ? "block" : "hidden"}
                ${isDark ? "bg-gray-900/60" : "bg-gray-50"}
                rounded-xl p-5 sticky top-24 self-start
                transition-all duration-300
              `}
            >
              <div className="text-lg font-bold mb-3 flex items-center gap-2">
                <HiDocumentText className="text-[#8cc63f]" /> Contents
              </div>
              <div className="space-y-1 text-sm max-h-[70vh] overflow-y-auto pr-2">
                {tocItems.map((item, idx) => (
                  <a
                    key={idx}
                    href={`#section-${idx + 1}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block py-1.5 hover:text-[#8cc63f] transition-colors ${
                      isDark ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {idx + 1}. {item}
                  </a>
                ))}
              </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 min-w-0">
              <div
                className={`rounded-2xl border p-6 md:p-8 ${
                  isDark
                    ? "bg-gray-800/70 border-gray-700"
                    : "bg-white border-gray-200 shadow-sm"
                }`}
              >
                {/* Effective date notice */}
                <div className="mb-6 flex items-center gap-2 text-sm text-[#8cc63f]">
                  <HiInformationCircle />
                  <span>Effective from 01.01.2026</span>
                </div>

                {/* Introduction */}
                <div className="prose prose-sm sm:prose-base max-w-none dark:prose-invert">
                  <p>
                    This Customer Service Charter outlines AYEDOS COWRIE GROUP
                    LIMITED'S commitment to delivering high-quality,
                    transparent, and reliable financial services to all our
                    customers. It also outlines our service standards, customer
                    rights, and our commitment to excellence in all interactions
                    with you. The effective date of this Service Charter is
                    01.01.2026.
                  </p>
                </div>

                {/* Sections */}
                <div className="space-y-8 mt-8">
                  {/* Section 1 - Purpose */}
                  <div id="section-1" className="scroll-mt-20">
                    <div className="text-xl font-bold mb-3 flex items-center gap-2">
                      <HiOutlineLightBulb className="text-[#8cc63f]" /> Purpose
                    </div>
                    <div className="prose prose-sm max-w-none dark:prose-invert ml-6">
                      <p>
                        To expand access to transparent, efficient, and
                        inclusive financial systems by unlocking liquidity in
                        traditionally illiquid assets and empowering individuals
                        and institutions to participate in modern capital
                        markets through Digital Exchange platforms.
                      </p>
                    </div>
                  </div>

                  {/* Section 2 - Vision */}
                  <div id="section-2" className="scroll-mt-20">
                    <div className="text-xl font-bold mb-3 flex items-center gap-2">
                      <HiOutlineEye className="text-[#8cc63f]" /> Vision
                    </div>
                    <div className="prose prose-sm max-w-none dark:prose-invert ml-6">
                      <p>
                        To become a leading digital financial infrastructure
                        provider in Africa, through secure, innovative, and
                        compliant technology.
                      </p>
                    </div>
                  </div>

                  {/* Section 3 - Mission */}
                  <div id="section-3" className="scroll-mt-20">
                    <div className="text-xl font-bold mb-3 flex items-center gap-2">
                      <HiOutlineFlag className="text-[#8cc63f]" /> Mission
                    </div>
                    <div className="prose prose-sm max-w-none dark:prose-invert ml-6">
                      <p>
                        To design and operate trusted financial platforms that:
                      </p>
                      <ul>
                        <li>
                          1. Enable seamless access to investment and credit
                          opportunities
                        </li>
                        <li>
                          2. Digitize and tokenize real-world assets, starting
                          with mortgages and fixed income instruments
                        </li>
                        <li>
                          3. Deliver secure, compliant, and user-friendly
                          financial solutions
                        </li>
                        <li>
                          4. Provide financial inclusion by lowering barriers to
                          entry for individuals and institutions
                        </li>
                        <li>
                          5. Partner with regulators, financial institutions,
                          and technology providers to build a resilient
                          financial ecosystem
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Section 4 - Our Commitment to You */}
                  <div id="section-4" className="scroll-mt-20">
                    <div className="text-xl font-bold mb-3 flex items-center gap-2">
                      <HiOutlineHeart className="text-[#8cc63f]" /> Our
                      Commitment to You
                    </div>
                    <div className="prose prose-sm max-w-none dark:prose-invert ml-6">
                      <p>We are dedicated to:</p>
                      <ul>
                        <li>
                          Providing efficient, professional, and courteous
                          service at all times
                        </li>
                        <li>
                          Ensuring transparency in all our products, pricing,
                          and processes
                        </li>
                        <li>
                          Safeguarding customer data in compliance with
                          applicable data protection laws
                        </li>
                        <li>
                          Continuously improving our services through innovation
                          and feedback
                        </li>
                        <li>
                          Delivering fair, inclusive, and accessible financial
                          solutions
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Section 5 - Our Core Service Principles */}
                  <div id="section-5" className="scroll-mt-20">
                    <div className="text-xl font-bold mb-3 flex items-center gap-2">
                      <HiOutlineCheckCircle className="text-[#8cc63f]" /> Our
                      Core Service Principles
                    </div>
                    <div className="prose prose-sm max-w-none dark:prose-invert ml-6">
                      <p>
                        Our service delivery is guided by the following
                        principles:
                      </p>
                      <ul>
                        <li>
                          <strong>Integrity</strong> – We act honestly and
                          ethically
                        </li>
                        <li>
                          <strong>Accountability</strong> – We take
                          responsibility for our actions
                        </li>
                        <li>
                          <strong>Customer-Centricity</strong> – Our customers
                          are at the heart of everything we do
                        </li>
                        <li>
                          <strong>Efficiency</strong> – We strive for timely and
                          effective service delivery
                        </li>
                        <li>
                          <strong>Confidentiality</strong> – We protect your
                          personal and financial information
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Section 6 - Service Standards */}
                  <div id="section-6" className="scroll-mt-20">
                    <div className="text-xl font-bold mb-3 flex items-center gap-2">
                      <HiOutlineClock className="text-[#8cc63f]" /> Service
                      Standards
                    </div>
                    <div className="prose prose-sm max-w-none dark:prose-invert ml-6">
                      <p>
                        We are committed to meeting the following service
                        standards to ensure you receive prompt and efficient
                        support:
                      </p>

                      <div className="overflow-x-auto mt-4">
                        <table
                          className={`min-w-full border text-sm ${isDark ? "border-gray-700" : "border-gray-200"}`}
                        >
                          <thead>
                            <tr
                              className={isDark ? "bg-gray-700" : "bg-gray-100"}
                            >
                              <th className="border p-3 text-left font-semibold">
                                Service Area
                              </th>
                              <th className="border p-3 text-left font-semibold">
                                Turnaround Time
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr
                              className={
                                isDark ? "border-gray-700" : "border-gray-200"
                              }
                            >
                              <td className="border p-3">
                                Customer inquiries (email/phone)
                              </td>
                              <td className="border p-3">
                                Enquiries that do not require follow-up will be
                                resolved in the course of your visit. Phone and
                                emails will be answered and replied to within
                                the shortest reasonable time.
                              </td>
                            </tr>
                            <tr
                              className={
                                isDark ? "border-gray-700" : "border-gray-200"
                              }
                            >
                              <td className="border p-3">
                                Social Media Queries
                              </td>
                              <td className="border p-3">Within 1 hour</td>
                            </tr>
                            <tr
                              className={
                                isDark ? "border-gray-700" : "border-gray-200"
                              }
                            >
                              <td className="border p-3">
                                Resolution of general complaints
                              </td>
                              <td className="border p-3">
                                General complaints will be responded to within
                                24 hours and resolved within 5 working days.
                              </td>
                            </tr>
                            <tr
                              className={
                                isDark ? "border-gray-700" : "border-gray-200"
                              }
                            >
                              <td className="border p-3">
                                Complex issue resolution
                              </td>
                              <td className="border p-3">
                                Within 7 working days
                              </td>
                            </tr>
                            <tr
                              className={
                                isDark ? "border-gray-700" : "border-gray-200"
                              }
                            >
                              <td className="border p-3">
                                Loan application processing
                              </td>
                              <td className="border p-3">
                                Within 5 working days
                              </td>
                            </tr>
                            <tr
                              className={
                                isDark ? "border-gray-700" : "border-gray-200"
                              }
                            >
                              <td className="border p-3">
                                Account opening / onboarding
                              </td>
                              <td className="border p-3">Within 24 hours</td>
                            </tr>
                            <tr
                              className={
                                isDark ? "border-gray-700" : "border-gray-200"
                              }
                            >
                              <td className="border p-3">
                                Platform support issues
                              </td>
                              <td className="border p-3">
                                Within 5 working days
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <p className="mt-4">
                        These turnaround times are our commitment to you. In
                        cases where exceptional circumstances arise, we will
                        communicate any delays and keep you informed throughout
                        the process.
                      </p>
                    </div>
                  </div>

                  {/* Section 7 - Customer Responsibilities */}
                  <div id="section-7" className="scroll-mt-20">
                    <div className="text-xl font-bold mb-3 flex items-center gap-2">
                      <HiOutlineUserGroup className="text-[#8cc63f]" /> Customer
                      Responsibilities
                    </div>
                    <div className="prose prose-sm max-w-none dark:prose-invert ml-6">
                      <p>To help us serve you better, we ask that you:</p>
                      <ul>
                        <li>Provide accurate and complete information</li>
                        <li>
                          Comply with applicable terms, policies, and
                          regulations
                        </li>
                        <li>
                          Safeguard your account credentials and personal
                          information
                        </li>
                        <li>Communicate respectfully with our staff</li>
                        <li>
                          Promptly notify us of any discrepancies or concerns
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Section 8 - Data Protection & Confidentiality */}
                  <div id="section-8" className="scroll-mt-20">
                    <div className="text-xl font-bold mb-3 flex items-center gap-2">
                      <HiOutlineShieldCheck className="text-[#8cc63f]" /> Data
                      Protection & Confidentiality
                    </div>
                    <div className="prose prose-sm max-w-none dark:prose-invert ml-6">
                      <p>
                        We adhere to all applicable data protection regulations.
                        Your personal and financial information will be:
                      </p>
                      <ul>
                        <li>Collected and processed lawfully</li>
                        <li>Securely stored</li>
                        <li>
                          Not shared without your consent unless required by law
                        </li>
                      </ul>
                      <p>
                        For more detailed information about how we handle your
                        data, please refer to our{" "}
                        <Link
                          to="/privacy-policy"
                          className="text-[#8cc63f] hover:underline"
                        >
                          Privacy Policy
                        </Link>
                        .
                      </p>
                    </div>
                  </div>

                  {/* Section 9 - Accessibility & Inclusion */}
                  <div id="section-9" className="scroll-mt-20">
                    <div className="text-xl font-bold mb-3 flex items-center gap-2">
                      <HiOutlineUserGroup className="text-[#8cc63f]" />{" "}
                      Accessibility & Inclusion
                    </div>
                    <div className="prose prose-sm max-w-none dark:prose-invert ml-6">
                      <p>
                        We are committed to ensuring our services are accessible
                        to all customers, including persons with disabilities
                        and digitally excluded individuals. Our platforms and
                        services are designed with inclusivity in mind, and we
                        continuously work to remove barriers that may prevent
                        anyone from accessing and benefiting from our financial
                        solutions.
                      </p>
                    </div>
                  </div>

                  {/* Section 10 - Feedback & Contact */}
                  <div id="section-10" className="scroll-mt-20">
                    <div className="text-xl font-bold mb-3 flex items-center gap-2">
                      <HiOutlineHeart className="text-[#8cc63f]" /> Feedback &
                      Contact
                    </div>
                    <div className="prose prose-sm max-w-none dark:prose-invert ml-6">
                      <p>
                        Your feedback helps us improve. You can share
                        suggestions or compliments via:
                      </p>
                      <ul>
                        <li>
                          Email:{" "}
                          <a
                            href="mailto:info@cowriex.io"
                            className="text-[#8cc63f] hover:underline"
                          >
                            info@cowriex.io
                          </a>
                        </li>
                      </ul>
                      <p>
                        We value every interaction with our customers and are
                        committed to using your feedback to enhance our services
                        and deliver a better experience for everyone.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Footer note */}
                <div
                  className={`mt-8 pt-6 text-sm border-t ${isDark ? "border-gray-700" : "border-gray-200"}`}
                >
                  <p className={isDark ? "text-gray-400" : "text-gray-500"}>
                    This Customer Service Charter reflects our ongoing
                    commitment to excellence. We review and update our standards
                    regularly to ensure we continue to meet and exceed your
                    expectations.
                  </p>
                </div>
              </div>

              {/* CTA Section */}
              <div className="py-8 mb-15">
                <div className="max-w-4xl mx-auto px-4 text-center">
                  <div
                    className={`rounded-3xl p-10 text-center transition-all duration-300 hover:-translate-y-1 ${
                      isDark
                        ? "bg-linear-to-r from-[#8cc63f]/20 to-transparent border border-[#8cc63f]/30"
                        : "bg-linear-to-r from-[#8cc63f]/10 to-transparent border border-[#8cc63f]/20"
                    }`}
                  >
                    <div
                      className={`text-2xl font-bold mb-2 ${isDark ? "text-white" : "text-slate-900"}`}
                    >
                      Have questions or feedback?
                    </div>
                    <p
                      className={`mb-6 ${isDark ? "text-gray-300" : "text-slate-600"}`}
                    >
                      We'd love to hear from you. Reach out to our support team
                      for any inquiries about our services or this charter.
                    </p>
                    <Link
                      to="/contact"
                      className="px-6 py-3 rounded-xl font-semibold bg-[#8cc63f] hover:bg-[#9fd858] text-slate-900 transition-all duration-300 hover:-translate-y-1 shadow-lg inline-block"
                    >
                      Contact Support
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerCharter;
