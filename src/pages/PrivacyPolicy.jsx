import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiDocumentText, HiInformationCircle, HiMenu } from "react-icons/hi";
import {
  HiOutlineShieldCheck,
  HiOutlineLockClosed,
  HiOutlineGlobeAlt,
  HiOutlineScale,
  HiOutlineUserGroup,
  HiOutlineClock,
  HiNoSymbol as HiOutlineBan,
  HiOutlineExclamationTriangle,
  HiPencil as HiOutlinePencilAlt,
  HiOutlineDocumentText,
} from "react-icons/hi2";

function PrivacyPolicy() {
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
    "Summary",
    "Our details",
    "How we collect or obtain information about you",
    "How we use your information",
    "How long we retain your information",
    "How we secure your information",
    "Transfers of your information to other countries",
    "Your rights in relation to your information",
    "Your right to object to processing",
    "Consequences of not providing your information",
    "Sensitive Personal Information",
    "Changes to our Privacy Policy",
    "Children's Privacy",
    "Copyright, credit and logo",
  ];

  return (
    <div className="info-page-container">
      {/* Hero Section */}
      <div className="info-hero mb-0">
        <div className="text-4xl font-semibold">Privacy Policy</div>
        <div className="text-xl font-semibold">
          How we collect, store, and use your personal information
        </div>
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
                    This Privacy Policy sets out how we, AYEDOS COWRIE GROUP
                    LIMITED, obtain, store and use your information when you use
                    or interact with our website, www.cowriex.io, or where we
                    otherwise obtain or collect your information. The effective
                    date of this Privacy Policy is 01.01.2026.
                  </p>
                </div>

                {/* Sections */}
                <div className="space-y-8 mt-8">
                  {/* Section 1 - Summary */}
                  <div id="section-1" className="scroll-mt-20">
                    <div className="text-xl font-bold mb-3 flex items-center gap-2">
                      <HiOutlineDocumentText className="text-[#8cc63f]" />{" "}
                      Summary
                    </div>
                    <div className="prose prose-sm max-w-none dark:prose-invert ml-6">
                      <p>
                        This section summarizes how we obtain, store and use
                        information about you. It is intended to provide a very
                        general overview only. It is not complete in and of
                        itself and it must be read in conjunction with the
                        corresponding full sections of this Privacy Policy.
                      </p>
                      <p>
                        <strong>Data controller:</strong> AYEDOS COWRIE GROUP
                        LIMITED.
                      </p>
                      <p>
                        <strong>
                          How we collect or obtain information about you:
                        </strong>
                      </p>
                      <ul>
                        <li>
                          When you provide it to us (e.g., by contacting us,
                          placing an order on our website or signing up to our
                          e-newsletter).
                        </li>
                        <li>
                          From your use of our website, using cookies and
                          similar technologies.
                        </li>
                        <li>Occasionally from third parties.</li>
                      </ul>
                      <p>
                        <strong>Information we collect:</strong> Name, Email
                        Address, Location, Payment information from your
                        credit/debit card details, IP address, information from
                        cookies, information about your device (device and
                        browser type), information about how you use our website
                        (e.g., which pages you have viewed, the time you have
                        viewed them and what you clicked on), the geographical
                        location from which you access our website based on your
                        IP address and company/business name.
                      </p>
                      <p>
                        <strong>How we use your information:</strong> For
                        administrative and business purposes (particularly to
                        contact you and process orders you place on our
                        website), to improve our business and website, to fulfil
                        our contractual obligations, to advertise our goods and
                        services, to analyse your use of our website, and in
                        connection with our legal rights and obligations.
                      </p>
                      <p>
                        <strong>
                          Disclosure of your information to third parties:
                        </strong>{" "}
                        Only to the extent necessary to run our business, to our
                        service providers, to fulfil any contracts we enter into
                        with you, where required by law or to enforce our legal
                        rights.
                      </p>
                      <p>
                        <strong>
                          Do we sell your information to third parties (other
                          than in the course of a business sale or purchase or
                          similar event):
                        </strong>{" "}
                        No
                      </p>
                      <p>
                        <strong>How long we retain your information:</strong>{" "}
                        For no longer than necessary, taking into account any
                        legal obligations we have (e.g., to maintain records for
                        tax purposes), any other legal basis we have for using
                        your information (e.g., your consent, performance of a
                        contract with you or our legitimate interests as a
                        business). For specific retention periods in relation to
                        certain information which we collect from you, please
                        see the main section below entitled How long we retain
                        your information.
                      </p>
                      <p>
                        <strong>How we secure your information:</strong> Using
                        appropriate technical and organisational measures such
                        as storing your information on secure servers,
                        encrypting transfers of data to or from our servers
                        using Secure Sockets Layer (SSL) technology, encrypting
                        payments you make on or via our website using Secure
                        Sockets Layer (SSL) technology, only granting access to
                        your information where necessary and encryption of
                        personal data, encrypted email, pseudonymisation and/or
                        anonymisation of information.
                      </p>
                      <p>
                        <strong>Use of cookies:</strong> We use cookies and
                        similar information-gathering technologies such as web
                        beacons on our website including essential, functional,
                        analytical and targeting cookies. For more information,
                        please visit our cookies policy.
                      </p>
                      <p>
                        <strong>
                          Use of automated decision making and profiling:
                        </strong>{" "}
                        we use automated decision making and/or profiling. The
                        use of web analytics, cookies, web beacons or server
                        logs analysis tools (profiling) or use targeting cookies
                        to display advertisements to people who visit our
                        website on other websites around the internet (e.g.,
                        using the Google AdSense network) (automated decision
                        making).
                      </p>
                      <p>
                        <strong>
                          Your rights in relation to your information:
                        </strong>
                      </p>
                      <ul>
                        <li>
                          to access your information and to receive information
                          about its use
                        </li>
                        <li>
                          to have your information corrected and/or completed
                        </li>
                        <li>to have your information deleted</li>
                        <li>to restrict the use of your information</li>
                        <li>
                          to receive your information in a portable format
                        </li>
                        <li>to object to the use of your information</li>
                        <li>
                          to withdraw your consent to the use of your
                          information
                        </li>
                        <li>
                          not to have significant decisions made about you based
                          solely on automated processing of your information,
                          including profiling
                        </li>
                        <li>to complain to a supervisory authority</li>
                      </ul>
                      <p>
                        <strong>Sensitive information:</strong> we do not
                        knowingly or intentionally collect what is commonly
                        referred to as 'sensitive information'. Please do not
                        submit sensitive information about you to us. For more
                        information, please see the main section below entitled
                        Sensitive Information.
                      </p>
                    </div>
                  </div>

                  {/* Section 2 - Our details */}
                  <div id="section-2" className="scroll-mt-20">
                    <div className="text-xl font-bold mb-3 flex items-center gap-2">
                      <HiOutlineShieldCheck className="text-[#8cc63f]" /> Our
                      details
                    </div>
                    <div className="prose prose-sm max-w-none dark:prose-invert ml-6">
                      <p>
                        The data controller in respect of our website is AYEDOS
                        COWRIE GROUP LIMITED, Reg. No. PVT- of www.cowriex.io.
                        The data controller is the person which determines the
                        purposes and means of processing your information. You
                        can contact the data controller by writing to AYEDOS
                        COWRIE GROUP LTD, 1st Floor Africa Reit Hse, Africa Reit
                        Lane, Karen, 43072-00100, Nairobi Kenya or sending an
                        email to{" "}
                        <a
                          href="mailto:info@cowriex.io"
                          className="text-[#8cc63f] hover:underline"
                        >
                          info@cowriex.io
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Section 3 - How we collect information */}
                  <div id="section-3" className="scroll-mt-20">
                    <div className="text-xl font-bold mb-3 flex items-center gap-2">
                      <HiOutlineUserGroup className="text-[#8cc63f]" /> How we
                      collect or obtain information about you
                    </div>
                    <div className="prose prose-sm max-w-none dark:prose-invert ml-6">
                      <h3 className="text-lg font-semibold">
                        Information collected from you
                      </h3>
                      <p>
                        We collect information about you when you provide it to
                        us, such as through your use of our website and its
                        features, when you contact us directly by email, phone,
                        in writing, or via social media, when you order goods
                        and services, when you use any of our other websites or
                        applications or any other means by which you provide
                        information to us. The type of information we collect
                        about you includes information such as:
                      </p>
                      <ul>
                        <li>Your name;</li>
                        <li>Your email address;</li>
                        <li>Your address;</li>
                        <li>Your phone number;</li>
                        <li>
                          Your payment information (e.g., your credit or debit
                          card details);
                        </li>
                        <li>Your IP address;</li>
                        <li>
                          Information about your device (e.g., device and
                          browser type);
                        </li>
                        <li>
                          Information about how you use our website (e.g., which
                          pages you have viewed, the time you viewed them and
                          what you clicked on);
                        </li>
                        <li>Cookies and similar technologies;</li>
                        <li>
                          Information about your mobile device (such as your
                          geographical location);
                        </li>
                      </ul>

                      <h3 className="text-lg font-semibold mt-6">
                        Our use of cookies and similar technologies
                      </h3>
                      <p>
                        Cookies are data files which are sent from a website to
                        a browser to record information about users of a
                        website. We use cookies and similar technologies on or
                        via our website. For further information on how we use
                        cookies and similar technologies, including the
                        information we collect through our use of cookies and
                        similar technologies, please see our cookies policy. You
                        can reject some or all of the cookies we use on or via
                        our website by changing your browser settings, but doing
                        so may impair your ability to use our website or some or
                        all of its features. For further information about
                        cookies, including how to change your browser settings,
                        please visit{" "}
                        <a
                          href="https://www.allaboutcookies.org"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#8cc63f] hover:underline"
                        >
                          www.allaboutcookies.org
                        </a>
                      </p>
                      <p>
                        We use Google Analytics on our website to understand how
                        you engage and interact with it. For information on how
                        Google Analytics collects and processes data using
                        cookies, please visit{" "}
                        <a
                          href="https://www.google.com/policies/privacy/partners"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#8cc63f] hover:underline"
                        >
                          www.google.com/policies/privacy/partners
                        </a>
                        . You can opt out of Google Analytics tracking by
                        visiting:{" "}
                        <a
                          href="http://tools.google.com/dlpage/gaoptout"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#8cc63f] hover:underline"
                        >
                          tools.google.com/dlpage/gaoptout
                        </a>
                        .
                      </p>
                      <p>
                        We use web beacons in our marketing emails and/or on our
                        website. Some (but not all) browsers enable you to
                        restrict the use of web beacons by either preventing
                        them from sending information back to their source
                        (e.g., when you choose browser settings which block
                        cookies and trackers) or by not accessing the images
                        containing them (e.g., if you select a "do not display
                        images (in emails)" setting in your email server).
                      </p>
                      <p>
                        We use Facebook Pixel on our website to monitor and
                        measure the success of our advertisements. For
                        information on how Facebook collects and processes data
                        using Facebook Pixel, please visit{" "}
                        <a
                          href="https://www.facebook.com/about/privacy"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#8cc63f] hover:underline"
                        >
                          www.facebook.com/about/privacy
                        </a>
                        . You can block Facebook Pixel by visiting{" "}
                        <a
                          href="http://www.youronlinechoices.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#8cc63f] hover:underline"
                        >
                          www.youronlinechoices.com
                        </a>
                        , selecting your country, clicking "Your Ad Choices",
                        then locating Facebook and selecting the "Off" option.
                      </p>

                      <h3 className="text-lg font-semibold mt-6">
                        Information received about you from third parties
                      </h3>
                      <p>
                        Generally, we do not receive information about you from
                        third parties. It is also possible that third parties
                        with whom we have had no prior contact may provide us
                        with information about you. Information we obtain from
                        third parties will generally be your name and contact
                        details but will include any additional information
                        about you which they provide to us.
                      </p>

                      <h3 className="text-lg font-semibold mt-6">
                        Legal bases for processing
                      </h3>
                      <p>
                        Where a third party has passed on information about you
                        to us (such as your name and email address) in order for
                        us to provide services to you, we will process your
                        information in order to take steps at your request to
                        enter into a contract with you and perform a contract
                        with you (as the case may be).
                      </p>
                      <p>
                        Where you have asked that a third party to share
                        information about you with us and the purpose of sharing
                        that information is not related to the performance of a
                        contract or services by us to you, we will process your
                        information on the basis of your consent, which you give
                        by asking the third party in question to pass on your
                        information to us.
                      </p>
                      <p>
                        Where a third party has shared information about you
                        with us and you have not consented to the sharing of
                        that information, we will have a legitimate interest in
                        processing that information in certain circumstances.
                        For example, we would have a legitimate interest in
                        processing your information to perform our obligations
                        under a sub-contract with the third party, where the
                        third party has the main contract with you. Similarly,
                        third parties may pass on information about you to us if
                        you have infringed or potentially infringed any of our
                        legal rights.
                      </p>

                      <h3 className="text-lg font-semibold mt-6">
                        Information obtained by us from third parties
                      </h3>
                      <p>
                        In certain circumstances (for example, to verify the
                        information we hold about you or obtain missing
                        information we require to provide you with a service) we
                        will obtain information about you from certain publicly
                        accessible sources, such as the electoral register,
                        Companies House, online customer databases, business
                        directories, media publications, social media, and
                        websites (including your own website if you have one).
                      </p>

                      <h3 className="text-lg font-semibold mt-6">
                        Legal bases for processing
                      </h3>
                      <p>
                        Where you have entered into a contract or requested that
                        we enter into a contract with you, in certain
                        circumstances, we will obtain information about you from
                        public sources in order to enable us to understand your
                        business and provide services to you or services to a
                        sufficient standard. In certain circumstances, we will
                        have a legitimate interest in obtaining information
                        about you from public and private sources. For example,
                        if you have infringed or we suspect that you have
                        infringed any of our legal rights, we will have a
                        legitimate interest in obtaining and processing
                        information about you from such sources in order to
                        investigate and pursue any suspected or potential
                        infringement.
                      </p>
                    </div>
                  </div>

                  {/* Section 4 - How we use your information */}
                  <div id="section-4" className="scroll-mt-20">
                    <div className="text-xl font-bold mb-3 flex items-center gap-2">
                      <HiOutlineScale className="text-[#8cc63f]" /> How we use
                      your information
                    </div>
                    <div className="prose prose-sm max-w-none dark:prose-invert ml-6">
                      <p>
                        We will use your information for one or more of the
                        following purposes. The legal basis on which we use your
                        information is set out and explained after each purpose:
                      </p>

                      <h3 className="text-lg font-semibold">
                        Administrative and business purposes
                      </h3>
                      <p>
                        <strong>Improving our website and business</strong>,
                        including personalising our website and services for you
                        and other customers. This is necessary for our
                        legitimate interest of better understanding our other
                        customers' and potential customers' preferences and
                        tailoring our website, products and services to their
                        needs, preferences and desires.
                      </p>
                      <p>
                        <strong>Communicating directly with you</strong> with
                        information, updates and changes to our website and in
                        response to enquiries we receive from you. This is
                        necessary for our legitimate interests of informing you
                        about changes to our business, website and privacy
                        policy and responding to enquiries we receive from you.
                      </p>
                      <p>
                        <strong>
                          Protecting our business and our business interests
                        </strong>
                        , including for the purposes of credit and background
                        checks, fraud and website misuse prevention and debt
                        recovery. This is necessary for our legitimate interests
                        of preventing criminal activity such as fraud or money
                        laundering, for ensuring that our website and services
                        are not misused.
                      </p>
                      <p>
                        <strong>
                          Communicating with our business advisors and legal
                          representatives
                        </strong>
                        . This is necessary for our legitimate interests of
                        obtaining legal or professional business advice. In such
                        circumstances, we will only share your information where
                        it is necessary to do so, to the minimum extent
                        necessary, subject to appropriate confidentiality
                        restrictions and on an anonymised basis wherever
                        possible.
                      </p>
                      <p>
                        <strong>Within our corporate group</strong> from time to
                        time for internal administrative purposes, including
                        client, customer and employee information. This will be
                        necessary for our legitimate interest of running and
                        managing our business.
                      </p>
                      <p>
                        <strong>
                          Sharing your information with third parties
                        </strong>{" "}
                        which are either related to or associated with the
                        running of our business such as our business partners,
                        insurers, affiliates, associates, suppliers, independent
                        contractors, email providers, IT, web development
                        service providers and other financial institutions. We
                        will share your information with these third parties
                        where it is necessary for our legitimate interest of
                        running and managing our business effectively,
                        fulfilling our contractual obligations or for our own
                        direct marketing purposes.
                      </p>
                      <p>
                        <strong>
                          Processing or passing on your information to third
                          parties, such as payment service providers
                        </strong>
                        , including PayPal, Banks and Mobile Money Companies, in
                        order to process your payments for goods and services
                        you order from us. This is necessary for us to perform a
                        contract we have entered into with you.
                      </p>
                      <p>
                        <strong>
                          Ensuring physical, network and information security
                          and integrity
                        </strong>
                        . This is necessary for our legitimate interest of
                        ensuring that our IT systems and networks are secure and
                        uncompromised, including, for example, preventing
                        malware, viruses, bugs or other harmful code, preventing
                        unauthorised access to our systems, and any form of
                        attack on, or damage to, our IT systems and networks.
                      </p>
                      <p>
                        <strong>
                          In connection with disclosure requests and in the case
                          of a business or share sale
                        </strong>{" "}
                        or sale or purchase of a business and/or assets, whether
                        actual or potential. This is necessary for our
                        legitimate interests of selling and/or ensuring and
                        promoting the success of our business.
                      </p>
                      <p>
                        <strong>To send you marketing communications</strong>.
                        This is necessary for our legitimate interest of direct
                        marketing and promoting our business. Where we are
                        required by law to obtain your consent to market to you,
                        however, the legal basis on which we process your
                        information will be your consent rather than our
                        legitimate interests.
                      </p>

                      <h3 className="text-lg font-semibold mt-6">
                        Advertising and analytical purposes
                      </h3>
                      <p>
                        <strong>
                          Providing statistical information to third parties
                        </strong>{" "}
                        such as Google Analytics. This is necessary for our and
                        third parties' legitimate interests of processing
                        information for research purposes, including market
                        research, better understanding our respective customers,
                        and tailoring our respective products and services to
                        their needs. Your information will only be shared with
                        such parties on an anonymised basis.
                      </p>
                      <p>
                        <strong>
                          Displaying advertisements to you and analysing the
                          information we receive
                        </strong>{" "}
                        in relation to those advertisements. This is necessary
                        for our own and for third parties' legitimate interests
                        in direct marketing and advertising our and their
                        products and services respectively, and for market
                        research purposes.
                      </p>

                      <h3 className="text-lg font-semibold mt-6">
                        Legal and enforcement of legal rights
                      </h3>
                      <p>
                        <strong>Enforcing our legal rights</strong>. This is
                        necessary for our legitimate interest of protecting our
                        business and enforcing our contractual and other legal
                        rights.
                      </p>
                      <p>
                        <strong>
                          Indicating possible criminal acts or threats to public
                          security
                        </strong>{" "}
                        to a competent authority. This is necessary for our
                        legitimate interest of promoting the success of our
                        business, preventing crime, for compliance with a legal
                        obligation to which we are subject.
                      </p>
                      <p>
                        <strong>
                          In connection with any legal or potential legal
                          dispute or proceedings
                        </strong>
                        . This is necessary for our legitimate interest of
                        promoting and ensuring the success of our business,
                        resolving disputes and making such disclosures as are
                        required by law.
                      </p>
                      <p>
                        <strong>
                          Complying with laws, regulations and other legal
                          requirements
                        </strong>
                        . We may need to use and process your information in
                        order to comply with legal obligations to which we are
                        subject. For example, we may require your information
                        pursuant to a statutory obligation to conduct
                        anti-money-laundering checks or to disclose your
                        information to a court following receipt of a court
                        order or subpoena.
                      </p>

                      <h3 className="text-lg font-semibold mt-6">
                        Use of your information only where we have your consent
                      </h3>
                      <p>
                        Where we process your information on the basis of your
                        consent, you can withdraw your consent to such
                        processing at any time by emailing us at{" "}
                        <a
                          href="mailto:info@cowriex.io"
                          className="text-[#8cc63f] hover:underline"
                        >
                          info@cowriex.io
                        </a>{" "}
                        or writing to us at www.cowriex.io
                      </p>

                      <h3 className="text-lg font-semibold mt-6">
                        Our use of automated decision-making, including
                        profiling
                      </h3>
                      <p>
                        We automate some of our decision-making and profiling
                        functions in order to improve the efficiency of our
                        business, to expedite the delivery of any orders placed
                        by you, to improve the consistency with which we deliver
                        our products or services, to reduce our administrative
                        costs, to update our records, to organize our customer
                        database to improve the services we offer you, to
                        monitor your interaction with our business and to
                        evaluate the viability of any orders placed by you.
                      </p>
                      <p>
                        This is important because it means that many actions and
                        decisions we take (such as whether we enter into a
                        contract with you, the amount of any credit we are able
                        to offer you, or the storage, use and transfer of your
                        information, as well as specific communications that we
                        may send you) are performed automatically by machines
                        and algorithms rather than humans.
                      </p>
                      <p>
                        Your information will be used by these systems to
                        determine how we interact with you, and also to collect
                        aggregate anonymized data relating to our collective
                        customer base. You have the right to request that we do
                        not use automated decision-making in relation to your
                        information by emailing us at{" "}
                        <a
                          href="mailto:info@cowriex.io"
                          className="text-[#8cc63f] hover:underline"
                        >
                          info@cowriex.io
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Section 5 - How long we retain your information */}
                  <div id="section-5" className="scroll-mt-20">
                    <div className="text-xl font-bold mb-3 flex items-center gap-2">
                      <HiOutlineClock className="text-[#8cc63f]" /> How long we
                      retain your information
                    </div>
                    <div className="prose prose-sm max-w-none dark:prose-invert ml-6">
                      <p>
                        This section sets out how long we retain your
                        information. We have set out specific retention periods
                        where possible. Where that has not been possible, we
                        have set out the criteria we use to determine the
                        retention period.
                      </p>

                      <h3 className="text-lg font-semibold">
                        Retention periods
                      </h3>
                      <ul>
                        <li>
                          <strong>Server log information:</strong> we retain
                          information on our server logs only for the duration
                          at which you interact with our site.
                        </li>
                        <li>
                          <strong>Order information:</strong> when you place an
                          order for goods and services, we retain that
                          information for six years following the end of the
                          financial year in which you placed your order, in
                          accordance with our legal obligation to keep records
                          for tax purposes.
                        </li>
                        <li>
                          <strong>Correspondence and enquiries:</strong> when
                          you make an enquiry or correspond with us for any
                          reason, whether by email or via our contact form or by
                          phone, we will retain your information for as long as
                          it takes to respond to and resolve your enquiry, and
                          for a further few months, after which, we will delete
                          your information.
                        </li>
                        <li>
                          <strong>E-Newsletter:</strong> we retain the
                          information you used to sign up for our e-newsletter
                          for as long as you remain subscribed (i.e., you do not
                          unsubscribe) or if we decide to cancel our
                          e-newsletter service, whichever comes earlier.
                        </li>
                      </ul>

                      <h3 className="text-lg font-semibold mt-6">
                        Criteria for determining retention periods
                      </h3>
                      <p>
                        In any other circumstances, we will retain your
                        information for no longer than necessary, taking into
                        account the following:
                      </p>
                      <ul>
                        <li>
                          the purpose(s) and use of your information both now
                          and in the future;
                        </li>
                        <li>
                          whether we have any legal obligation to continue to
                          process your information;
                        </li>
                        <li>
                          whether we have any legal basis to continue to process
                          your information (such as your consent);
                        </li>
                        <li>
                          how valuable your information is (both now and in the
                          future);
                        </li>
                        <li>
                          any relevant agreed industry practices on how long
                          information should be retained;
                        </li>
                        <li>
                          the levels of risk, cost and liability involved with
                          us continuing to hold the information;
                        </li>
                        <li>
                          how hard it is to ensure that the information can be
                          kept up to date and accurate; and
                        </li>
                        <li>
                          any relevant surrounding circumstances (such as the
                          nature and status of our relationship with you).
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Section 6 - How we secure your information */}
                  <div id="section-6" className="scroll-mt-20">
                    <div className="text-xl font-bold mb-3 flex items-center gap-2">
                      <HiOutlineLockClosed className="text-[#8cc63f]" /> How we
                      secure your information
                    </div>
                    <div className="prose prose-sm max-w-none dark:prose-invert ml-6">
                      <p>
                        We take appropriate technical and organizational
                        measures to secure your information and to protect it
                        against unauthorized or unlawful use and accidental loss
                        or destruction, including:
                      </p>
                      <ul>
                        <li>
                          only sharing and providing access to your information
                          to the minimum extent necessary, subject to
                          confidentiality restrictions where appropriate, and on
                          an anonymised basis wherever possible;
                        </li>
                        <li>using secure servers to store your information;</li>
                        <li>
                          verifying the identity of any individual who requests
                          access to information prior to granting them access to
                          information;
                        </li>
                        <li>
                          using Secure Sockets Layer (SSL) software to encrypt
                          any information you submit to us via any forms on our
                          website and any payment transactions you make on or
                          via our website;
                        </li>
                        <li>
                          only transferring your information via closed system
                          or end to end encrypted data transfers.
                        </li>
                      </ul>

                      <h3 className="text-lg font-semibold mt-6">
                        Transmission of information to us by email
                      </h3>
                      <p>
                        Transmission of information over the internet is not
                        entirely secure, and if you submit any information to us
                        over the internet (whether by email, via our website or
                        any other means), you do so entirely at your own risk.
                        We cannot be responsible for any costs, expenses, loss
                        of profits, harm to reputation, damages, liabilities or
                        any other form of loss or damage suffered by you as a
                        result of your decision to transmit information to us by
                        such means.
                      </p>
                    </div>
                  </div>

                  {/* Section 7 - Transfers of your information */}
                  <div id="section-7" className="scroll-mt-20">
                    <div className="text-xl font-bold mb-3 flex items-center gap-2">
                      <HiOutlineGlobeAlt className="text-[#8cc63f]" /> Transfers
                      of your information to other countries
                    </div>
                    <div className="prose prose-sm max-w-none dark:prose-invert ml-6">
                      <p>
                        We may need to transfer your information outside of the
                        country in which we collected or obtained it, including
                        outside the Kenyan Economic Area or to an international
                        organization from time to time. Where we transfer your
                        information outside the Republic of Kenya Economic Area,
                        the country to which it is transferred will either be
                        subject to an adequacy decision by the office of Data
                        Protection Commissioner, or if not (or if we transfer
                        your information to an international organization), we
                        will ensure that the transfer takes place on the basis
                        of one or more of the following safeguards:
                      </p>
                      <ul>
                        <li>
                          Data protection policies adhered to by the data
                          controller and other companies and entities within our
                          corporate group from time to time, which comply with
                          applicable laws, known as the "Data Protection Act,
                          2019"
                        </li>
                        <li>
                          Standard data protection clauses adopted by the Data
                          Protection Commission or adopted by the Communication
                          Authority of Kenya and approved by the office of Data
                          Protection Commissioner in accordance with relevant
                          law;
                        </li>
                        <li>
                          A code or codes of conduct produced by an association
                          or other body approved by the Commissioner's Office;
                        </li>
                        <li>An approved certification mechanism; or</li>
                        <li>
                          Where authorised by the Data Protection Commissioner's
                          Office, contractual clauses between the data
                          controller or processor and the data controller,
                          processor or recipient of the information in the third
                          country or international organisation.
                        </li>
                      </ul>
                      <p>
                        You can access these safeguards at www.cowriex.io,
                        emailing{" "}
                        <a
                          href="mailto:info@cowriex.io"
                          className="text-[#8cc63f] hover:underline"
                        >
                          info@cowriex.io
                        </a>{" "}
                        or writing to AYEDOS COWRIE GROUP LTD, 1st Floor Africa
                        Reit Hse, Africa Reit Lane, Karen, 43072-00100, Nairobi
                        Kenya.
                      </p>
                    </div>
                  </div>

                  {/* Section 8 - Your rights */}
                  <div id="section-8" className="scroll-mt-20">
                    <div className="text-xl font-bold mb-3 flex items-center gap-2">
                      <HiOutlineScale className="text-[#8cc63f]" /> Your rights
                      in relation to your information
                    </div>
                    <div className="prose prose-sm max-w-none dark:prose-invert ml-6">
                      <p>
                        Subject to certain limitations on certain rights, you
                        have the following rights in relation to your
                        information, which you can exercise by writing to AYEDOS
                        COWRIE GROUP LTD, 1st Floor Africa Reit Hse, Africa Reit
                        Lane, Karen, 43072-00100, Nairobi Kenya, or sending an
                        email to{" "}
                        <a
                          href="mailto:info@cowriex.io"
                          className="text-[#8cc63f] hover:underline"
                        >
                          info@cowriex.io
                        </a>
                        :
                      </p>
                      <ul>
                        <li>
                          to request access to your information and information
                          related to our use and processing of your information;
                        </li>
                        <li>
                          to request the correction or deletion of your
                          information;
                        </li>
                        <li>
                          to request that we restrict our use of your
                          information;
                        </li>
                        <li>
                          to receive information which you have provided to us
                          in a structured, commonly used and machine-readable
                          format (e.g., a CSV file) and the right to have that
                          information transferred to another data controller
                          (including a third-party data controller);
                        </li>
                        <li>
                          to object to the processing of your information for
                          certain purposes;
                        </li>
                        <li>
                          to withdraw your consent to our use of your
                          information at any time where we rely on your consent
                          to use or process that information. Please note that
                          if you withdraw your consent, this will not affect the
                          lawfulness of our use and processing of your
                          information on the basis of your consent before the
                          point in time when you withdraw your consent;
                        </li>
                        <li>
                          the right not to be subject to a decision based solely
                          on automated processing, including profiling which
                          produces legal effects concerning you or similarly
                          significantly affects you;
                        </li>
                        <li>
                          the right to lodge a complaint with a supervisory
                          authority, in particular in the Member State of your
                          habitual residence, place of work or of an alleged
                          infringement of the General Data Protection
                          Regulation.
                        </li>
                      </ul>
                      <p>
                        For the purposes of the Republic of Kenya, the
                        supervisory authority is the Communication Authority of
                        Kenya, the contact details of which are available here:{" "}
                        <a
                          href="https://www.ca.go.ke/contact-us"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#8cc63f] hover:underline"
                        >
                          www.ca.go.ke/contact-us
                        </a>
                        .
                      </p>
                      <p>
                        Further information on your rights in relation to your
                        personal data as an individual: You can also find out
                        further information about your rights, as well as
                        information on any limitations which apply to those
                        rights, by reading the underlying legislation contained
                        in the Data Protection Act, which is available here:{" "}
                        <a
                          href="https://www.odpc.go.ke/download/kenya-gazette-data-protection-act-2019/?wpdmdl=3235&refresh=6513c9d0099c01695795664"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#8cc63f] hover:underline"
                        >
                          ODPC Kenya - Data Protection Act
                        </a>
                        .
                      </p>

                      <h3 className="text-lg font-semibold mt-6">
                        Verifying your identity where you request access to your
                        information
                      </h3>
                      <p>
                        Where you request access to your information, we are
                        required by law to use all reasonable measures to verify
                        your identity before doing so. These measures are
                        designed to protect your information and to reduce the
                        risk of identity fraud, identity theft or general
                        unauthorized access to your information.
                      </p>
                      <p>
                        Where we possess appropriate information about you on
                        file, we will attempt to verify your identity using that
                        information. If it is not possible to identify you from
                        such information, or if we have insufficient information
                        about you, we may require original or certified copies
                        of certain documentation in order to be able to verify
                        your identity before we are able to provide you with
                        access to your information.
                      </p>
                    </div>
                  </div>

                  {/* Section 9 - Right to object */}
                  <div id="section-9" className="scroll-mt-20">
                    <div className="text-xl font-bold mb-3 flex items-center gap-2">
                      <HiOutlineBan className="text-[#8cc63f]" /> Your right to
                      object to processing
                    </div>
                    <div className="prose prose-sm max-w-none dark:prose-invert ml-6">
                      <p>
                        You have the following rights in relation to your
                        information, which you may exercise by writing to AYEDOS
                        COWRIE GROUP LTD, 1st Floor Africa Reit Hse, Africa Reit
                        Lane, Karen, 43072-00100, Nairobi Kenya, or sending an
                        email to{" "}
                        <a
                          href="mailto:info@cowriex.io"
                          className="text-[#8cc63f] hover:underline"
                        >
                          info@cowriex.io
                        </a>
                        :
                      </p>
                      <ul>
                        <li>
                          to object to us using or processing your information
                          where we use or process it in order to carry out a
                          task in the public interest or for our legitimate
                          interests, including 'profiling' (i.e. analysing or
                          predicting your behaviour based on your information)
                          based on any of these purposes; and
                        </li>
                        <li>
                          to object to us using or processing your information
                          for direct marketing purposes (including any profiling
                          we engage in that is related to such direct
                          marketing).
                        </li>
                      </ul>
                      <p>
                        You may also exercise your right to object to us using
                        or processing your information for direct marketing
                        purposes by:
                      </p>
                      <ul>
                        <li>
                          clicking the unsubscribe link contained at the bottom
                          of any marketing email we send to you and following
                          the instructions which appear in your browser
                          following your clicking on that link;
                        </li>
                        <li>
                          sending an SMS message containing only the words "OPT
                          OUT" in reply to any marketing communication we send
                          by text message; or
                        </li>
                        <li>
                          sending an email to{" "}
                          <a
                            href="mailto:info@cowriex.io"
                            className="text-[#8cc63f] hover:underline"
                          >
                            info@cowriex.io
                          </a>{" "}
                          asking that we stop sending you marketing
                          communications or by including the words "OPT OUT".
                        </li>
                      </ul>
                      <p>
                        For more information on how to object to our use of
                        information collected from cookies and similar
                        technologies, please see the section entitled How to
                        accept or reject cookies in our cookies policy.
                      </p>
                    </div>
                  </div>

                  {/* Section 10 - Consequences of not providing information */}
                  <div id="section-10" className="scroll-mt-20">
                    <div className="text-xl font-bold mb-3 flex items-center gap-2">
                      <HiOutlineExclamationTriangle className="text-[#8cc63f]" />{" "}
                      Consequences of not providing your information
                    </div>
                    <div className="prose prose-sm max-w-none dark:prose-invert ml-6">
                      <p>
                        Where you wish to purchase products or services from us,
                        we require your information in order to enter into a
                        contract with you. We may also require your information
                        pursuant to a statutory obligation (in order to be able
                        to send you an invoice for products and services you
                        wish to order from us, for example). If you do not
                        provide your information, we will not be able to enter
                        into a contract with you or to provide you with those
                        products or services.
                      </p>
                    </div>
                  </div>

                  {/* Section 11 - Sensitive Personal Information */}
                  <div id="section-11" className="scroll-mt-20">
                    <div className="text-xl font-bold mb-3 flex items-center gap-2">
                      <HiOutlineShieldCheck className="text-[#8cc63f]" />{" "}
                      Sensitive Personal Information
                    </div>
                    <div className="prose prose-sm max-w-none dark:prose-invert ml-6">
                      <p>
                        'Sensitive personal information' is information about an
                        individual that reveals their racial or ethnic origin,
                        political opinions, religious or philosophical beliefs,
                        or trade union membership, genetic information,
                        biometric information for the purpose of uniquely
                        identifying an individual, information concerning health
                        or information concerning a natural person's sex life or
                        sexual orientation.
                      </p>
                      <p>
                        We do not knowingly or intentionally collect sensitive
                        personal information from individuals, and you must not
                        submit sensitive personal information to us. If,
                        however, you inadvertently or intentionally transmit
                        sensitive personal information to us, you will be
                        considered to have explicitly consented to us processing
                        that sensitive personal information under Article
                        9(2)(a) of the General Data Protection Regulation. We
                        will use and process your sensitive personal information
                        for the purposes of deleting it.
                      </p>
                    </div>
                  </div>

                  {/* Section 12 - Changes to our Privacy Policy */}
                  <div id="section-12" className="scroll-mt-20">
                    <div className="text-xl font-bold mb-3 flex items-center gap-2">
                      <HiOutlinePencilAlt className="text-[#8cc63f]" /> Changes
                      to our Privacy Policy
                    </div>
                    <div className="prose prose-sm max-w-none dark:prose-invert ml-6">
                      <p>
                        We update and amend our Privacy Policy from time to
                        time.
                      </p>
                      <p>
                        <strong>Minor changes:</strong> Where we make minor
                        changes to our Privacy Policy, we will update our
                        Privacy Policy with a new effective date stated at the
                        beginning of it. Our processing of your information will
                        be governed by the practices set out in that new version
                        of the Privacy Policy from its effective date onwards.
                      </p>
                      <p>
                        <strong>Major changes:</strong> Where we make major
                        changes to our Privacy Policy or intend to use your
                        information for a new purpose or a different purpose
                        than the purposes for which we originally collected it,
                        we will notify you by email (where possible) or by
                        posting a notice on our website. We will provide you
                        with the information about the change in question and
                        the purpose and any other relevant information before we
                        use your information for that new purpose. Wherever
                        required, we will obtain your prior consent before using
                        your information for a purpose that is different from
                        the purposes for which we originally collected it.
                      </p>
                    </div>
                  </div>

                  {/* Section 13 - Children's Privacy */}
                  <div id="section-13" className="scroll-mt-20">
                    <div className="text-xl font-bold mb-3 flex items-center gap-2">
                      <HiOutlineUserGroup className="text-[#8cc63f]" />{" "}
                      Children's Privacy
                    </div>
                    <div className="prose prose-sm max-w-none dark:prose-invert ml-6">
                      <p>
                        Because we care about the safety and privacy of children
                        online, we comply with the Children's Online Privacy
                        Protection Act of 1998 (COPPA). COPPA and its
                        accompanying regulations protect the privacy of children
                        using the internet. We do not knowingly contact or
                        collect information from persons under the age of 18.
                        The website is not intended to solicit information of
                        any kind from persons under the age of 18.
                      </p>
                      <p>
                        It is possible that we could receive information
                        pertaining to persons under the age of 18 by the fraud
                        or deception of a third party. If we are notified of
                        this, as soon as we verify the information, we will,
                        where required by law to do so, immediately obtain the
                        appropriate parental consent to use that information or,
                        if we are unable to obtain such parental consent, we
                        will delete the information from our servers. If you
                        would like to notify us of our receipt of information
                        about persons under the age of 18, please do so by
                        sending an email to{" "}
                        <a
                          href="mailto:info@ayedosgroup.com"
                          className="text-[#8cc63f] hover:underline"
                        >
                          info@ayedosgroup.com
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Section 14 - Copyright */}
                  <div id="section-14" className="scroll-mt-20">
                    <div className="text-xl font-bold mb-3 flex items-center gap-2">
                      <HiOutlineDocumentText className="text-[#8cc63f]" />{" "}
                      Copyright, credit and logo
                    </div>
                    <div className="prose prose-sm max-w-none dark:prose-invert ml-6">
                      <p>
                        This Privacy Policy is based on a General Data
                        Protection Regulation (Regulation (EU) 2016/769) (GDPR)
                        compliant template provided by GDPR Privacy Policy. For
                        further information, please visit{" "}
                        <a
                          href="https://gdprprivacypolicy.org"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#8cc63f] hover:underline"
                        >
                          gdprprivacypolicy.org
                        </a>{" "}
                        and for the Republic of Kenya visit:{" "}
                        <a
                          href="https://www.odpc.go.ke/download/kenya-gazette-data-protection-act-2019/?wpdmdl=3235&refresh=6513c9d0099c01695795664"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#8cc63f] hover:underline"
                        >
                          ODPC Kenya - Data Protection Act
                        </a>
                        .
                      </p>
                      <p>
                        The copyright in this Privacy Policy is either owned by,
                        or licensed to, us and is protected by copyright laws
                        around the world and copyright protection software. All
                        intellectual property rights in this document are
                        reserved. Where we display the GDPR Privacy Policy logo
                        on our website, this is used to indicate that we have
                        adopted a privacy policy template provided by GDPR
                        Privacy Policy as the basis for this Privacy Policy.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Footer note */}
                <div
                  className={`mt-8 pt-6 text-sm border-t ${isDark ? "border-gray-700" : "border-gray-200"}`}
                >
                  <p className={isDark ? "text-gray-400" : "text-gray-500"}>
                    By continuing to use our website, you acknowledge that you
                    have read and understood this Privacy Policy and consent to
                    the collection and use of your information as described
                    herein.
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
                      Have questions about our Privacy Policy?
                    </div>
                    <p
                      className={`mb-6 ${isDark ? "text-gray-300" : "text-slate-600"}`}
                    >
                      If you need clarification about how we handle your data,
                      our support team is ready to help.
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

export default PrivacyPolicy;
