import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  HiDocumentText,
  HiMenu,
  HiOutlineAdjustments,
  HiOutlinePhotograph,
} from "react-icons/hi";
import {
  HiInformationCircle,
  HiOutlineShieldCheck,
  HiOutlineChartBar,
  HiOutlineDocumentText,
  HiOutlineComputerDesktop,
} from "react-icons/hi2";
import SEO from '../components/SEO';

function CookiePolicy() {
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
    "What are cookies?",
    "Types of cookies we use",
    "Essential cookies",
    "Functional cookies",
    "Analytical/performance cookies",
    "Advertising/targeting cookies",
    "Third-party cookies",
    "How to manage cookies",
    "Changes to this policy",
    "Contact us",
  ];

  return (
    <div className="info-page-container">
      <SEO
        title="Cookie Policy"
        description="Learn how AYEDOS COWRIE uses cookies and similar technologies to enhance your browsing experience."
        path="/cookie-policy"
        noindex={true}
      />
      <div className="info-hero mb-0">
        <div className="text-4xl font-semibold">Cookies Policy</div>
        <div className="text-xl font-semibold">
          How we use cookies and similar technologies on our website
        </div>
      </div>

      <div
        className={`min-h-screen ${isDark ? "text-white" : "text-gray-900"}`}
      >
        {/* Mobile menu button - only visible on small screens */}
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

        {/* Two-column layout: left fixed sidebar, right main content */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Sidebar - Table of Contents (hidden on mobile, sticky on desktop) */}
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

            {/* Main Content Area - Right side */}
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
                  <span>Effective from 01.01.2023</span>
                </div>

                {/* Introduction */}
                <div className="prose prose-sm sm:prose-base max-w-none dark:prose-invert">
                  <p>
                    This Cookies Policy sets out the basis on which we, AYEDOS
                    COWRIE LIMITED use cookies and similar technologies on or in
                    relation to our website, www.cowriex.io This Cookies
                    Policy is effective from 01.01.2023.
                  </p>
                  <p>
                    'Essential' cookies are automatically placed on your
                    computer or device when you access our website or take
                    certain actions on our website. 'Non-essential' cookies and
                    other technologies are only placed on your computer or
                    device if you have consented to us doing so. For information
                    on the difference between essential and non-essential
                    cookies, see the section below entitled{" "}
                    <strong>About cookies</strong>.
                  </p>
                  <p>
                    For information on how you consent and how you can withdraw
                    your consent to us placing non-essential cookies and other
                    technologies on your computer or device, see the section
                    below entitled{" "}
                    <strong>How to accept or reject cookies</strong>.
                  </p>
                </div>

                {/* Sections */}
                <div className="space-y-8 mt-8">
                  {/* Section 1 - What are cookies? */}
                  <div id="section-1" className="scroll-mt-20">
                    <div className="text-xl font-bold mb-3 flex items-center gap-2">
                      <HiOutlineShieldCheck className="text-[#8cc63f]" /> What are cookies?
                    </div>
                    <div className="prose prose-sm max-w-none dark:prose-invert ml-6">
                      <p>
                        Cookies are small data files sent by a website's server
                        to a web browser, processor memory or hard drive and
                        stored there. They can be used for a range of different
                        purposes, such as customizing a website for a particular
                        user, helping a user navigate a website, improving that
                        user's website experience, and storing that user's
                        preferences and login information.
                      </p>
                      <p>
                        Cookies can be classified as either 'essential' or
                        'non-essential'.
                      </p>
                      <p>
                        If you require further information about cookies in
                        general, please visit{" "}
                        <a
                          href="https://www.allaboutcookies.org"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#8cc63f] hover:underline"
                        >
                          www.allaboutcookies.org
                        </a>
                        .
                      </p>
                      <div className="mt-4">
                        <strong>Legal bases for processing</strong>
                        <p>
                          For essential cookies, our legal basis for processing is
                          our legitimate interests in ensuring our site functions
                          properly and providing you with the online services you
                          have requested.
                        </p>
                        <p>
                          For non-essential cookies and other technologies, our
                          legal basis for processing is your consent which you
                          give by accepting/denying cookie usage in our website.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Section 2 - Types of cookies we use */}
                  <div id="section-2" className="scroll-mt-20">
                    <div className="text-xl font-bold mb-3 flex items-center gap-2">
                      <HiOutlineChartBar className="text-[#8cc63f]" /> Types of cookies we use
                    </div>
                    <div className="prose prose-sm max-w-none dark:prose-invert ml-6">
                      <div className="overflow-x-auto">
                        <table
                          className={`min-w-full border text-sm ${isDark ? "border-gray-700" : "border-gray-200"}`}
                        >
                          <thead>
                            <tr
                              className={isDark ? "bg-gray-700" : "bg-gray-100"}
                            >
                              <th className="border p-2 text-left">
                                Name of Cookie
                              </th>
                              <th className="border p-2 text-left">
                                Essential or Non-essential?
                              </th>
                              <th className="border p-2 text-left">
                                Type of cookie
                              </th>
                              <th className="border p-2 text-left">
                                First or Third party?
                              </th>
                              <th className="border p-2 text-left">
                                Session or Persistent?
                              </th>
                              <th className="border p-2 text-left">
                                Expiry Time
                              </th>
                              <th className="border p-2 text-left">Purpose</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border p-2">_ga</td>
                              <td className="border p-2">Non-essential</td>
                              <td className="border p-2">analytical</td>
                              <td className="border p-2">First party</td>
                              <td className="border p-2">Persistent</td>
                              <td className="border p-2">2 years</td>
                              <td className="border p-2">
                                To distinguish website visitors
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  {/* Section 3 - Essential cookies */}
                  <div id="section-3" className="scroll-mt-20">
                    <div className="text-xl font-bold mb-3 flex items-center gap-2">
                      <HiOutlineShieldCheck className="text-[#8cc63f]" /> Essential cookies
                    </div>
                    <div className="prose prose-sm max-w-none dark:prose-invert ml-6">
                      <p>
                        Essential cookies are those that are either used solely to carry out or facilitate
                        the transmission of communications over a network, or are strictly necessary to
                        provide an online service which you have requested. These cookies are automatically
                        placed on your device when you access our website.
                      </p>
                    </div>
                  </div>

                  {/* Section 4 - Functional cookies */}
                  <div id="section-4" className="scroll-mt-20">
                    <div className="text-xl font-bold mb-3 flex items-center gap-2">
                      <HiOutlineComputerDesktop className="text-[#8cc63f]" /> Functional cookies
                    </div>
                    <div className="prose prose-sm max-w-none dark:prose-invert ml-6">
                      <p>
                        Functional cookies allow our website to remember choices you make and provide
                        enhanced, more personal features. These cookies can remember changes you have made
                        to text size, fonts, and other parts of web pages that you can customize.
                      </p>
                    </div>
                  </div>

                  {/* Section 5 - Analytical/performance cookies */}
                  <div id="section-5" className="scroll-mt-20">
                    <div className="text-xl font-bold mb-3 flex items-center gap-2">
                      <HiOutlineChartBar className="text-[#8cc63f]" /> Analytical/performance cookies
                    </div>
                    <div className="prose prose-sm max-w-none dark:prose-invert ml-6">
                      <p>
                        These cookies collect information about how you use our website, for instance which
                        pages you visit most often, and if you get error messages from web pages. These
                        cookies don't collect information that identifies you. All the information that
                        these cookies collect is aggregated and therefore anonymous.
                      </p>
                    </div>
                  </div>

                  {/* Section 6 - Advertising/targeting cookies */}
                  <div id="section-6" className="scroll-mt-20">
                    <div className="text-xl font-bold mb-3 flex items-center gap-2">
                      <HiOutlinePhotograph className="text-[#8cc63f]" /> Advertising/targeting cookies
                    </div>
                    <div className="prose prose-sm max-w-none dark:prose-invert ml-6">
                      <p>
                        We and any marketing companies we use also embed web
                        beacons in our marketing emails and/or on our website.
                        Web beacons are small GIF image files which enable us to
                        track your receipt of our marketing emails, how often
                        you view our adverts or website pages, your location, IP
                        address and browser information.
                      </p>
                      <p>
                        You can manage and opt out of personalization of
                        advertisements by Google by visiting Google's ad
                        settings page{" "}
                        <a
                          href="https://adssettings.google.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#8cc63f] hover:underline"
                        >
                          here
                        </a>.
                      </p>
                      <p>
                        You can opt out of Google Analytics tracking by
                        installing the browser add-on which is available{" "}
                        <a
                          href="http://tools.google.com/dlpage/gaoptout"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#8cc63f] hover:underline"
                        >
                          here
                        </a>
                        .
                      </p>
                    </div>
                  </div>

                  {/* Section 7 - Third-party cookies */}
                  <div id="section-7" className="scroll-mt-20">
                    <div className="text-xl font-bold mb-3 flex items-center gap-2">
                      <HiOutlineShieldCheck className="text-[#8cc63f]" /> Third-party cookies
                    </div>
                    <div className="prose prose-sm max-w-none dark:prose-invert ml-6">
                      <p>
                        In some special cases we also use cookies provided by trusted third parties. The
                        following section details which third-party cookies you might encounter through
                        this site. Third-party cookies are placed on your device by domains other than
                        our own.
                      </p>
                    </div>
                  </div>

                  {/* Section 8 - How to manage cookies */}
                  <div id="section-8" className="scroll-mt-20">
                    <div className="text-xl font-bold mb-3 flex items-center gap-2">
                      <HiOutlineAdjustments className="text-[#8cc63f]" /> How to manage cookies
                    </div>
                    <div className="prose prose-sm max-w-none dark:prose-invert ml-6">
                      <p>
                        You can accept or reject non-essential cookies by using our cookie
                        management tool. You can also adjust your browser settings to block
                        some or all cookies. If you do not know how to do this, the links below set
                        out information about how to change your browser
                        settings for some of the most commonly used web
                        browsers:
                      </p>
                      <ul>
                        <li>
                          Google Chrome:{" "}
                          <a
                            href="https://support.google.com/chrome/answer/95647?hl=en-GB"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#8cc63f] hover:underline"
                          >
                            Chrome cookie settings
                          </a>
                        </li>
                        <li>
                          Mozilla Firefox:{" "}
                          <a
                            href="https://support.mozilla.org/en-US/kb/delete-browsing-search-download-history-firefox"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#8cc63f] hover:underline"
                          >
                            Firefox cookie settings
                          </a>
                        </li>
                        <li>
                          Microsoft Edge:{" "}
                          <a
                            href="https://support.microsoft.com/en-us/help/278835/how-to-delete-cookie-files-in-internet-explorer"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#8cc63f] hover:underline"
                          >
                            Edge cookie settings
                          </a>
                        </li>
                        <li>
                          Apple Safari:{" "}
                          <a
                            href="https://support.apple.com/kb/PH5042?locale=en_US"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#8cc63f] hover:underline"
                          >
                            Safari cookie settings
                          </a>
                        </li>
                      </ul>
                      <p>
                        To clear cookies that have previously been placed on
                        your browser, you should select the option to clear your
                        browsing history and ensure that the option to delete or
                        clear cookies is included when you do so.
                      </p>
                    </div>
                  </div>

                  {/* Section 9 - Changes to this policy */}
                  <div id="section-9" className="scroll-mt-20">
                    <div className="text-xl font-bold mb-3 flex items-center gap-2">
                      <HiOutlineDocumentText className="text-[#8cc63f]" /> Changes to this policy
                    </div>
                    <div className="prose prose-sm max-w-none dark:prose-invert ml-6">
                      <p>
                        We may update this Cookies Policy from time to time in order to reflect changes
                        to the cookies we use or for other operational, legal, or regulatory reasons.
                        Please re-visit this Cookies Policy regularly to stay informed about our use of
                        cookies and related technologies.
                      </p>
                      <p>
                        This Cookies Policy is based on a template provided by
                        GDPR Privacy Policy. For further information, please
                        visit{" "}
                        <a
                          href="https://gdprprivacypolicy.org"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#8cc63f] hover:underline"
                        >
                          gdprprivacypolicy.org
                        </a>
                        .
                      </p>
                      <p>
                        And Data Protection Act, 2019 (of the Republic of
                        Kenya), please visit:{" "}
                        <a
                          href="https://www.odpc.go.ke/download/kenya-gazette-data-protection-act-2019/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#8cc63f] hover:underline"
                        >
                          ODPC Kenya - Data Protection Act
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Section 10 - Contact us */}
                  <div id="section-10" className="scroll-mt-20">
                    <div className="text-xl font-bold mb-3 flex items-center gap-2">
                      <HiOutlineDocumentText className="text-[#8cc63f]" /> Contact us
                    </div>
                    <div className="prose prose-sm max-w-none dark:prose-invert ml-6">
                      <p>
                        If you have any questions about our use of cookies or this Cookies Policy,
                        please contact us at{" "}
                        <a
                          href="mailto:info@ayedoscowrie.io"
                          className="text-[#8cc63f] hover:underline"
                        >
                          info@ayedoscowrie.io
                        </a>.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Footer note */}
                <div
                  className={`mt-8 pt-6 text-sm border-t ${isDark ? "border-gray-700" : "border-gray-200"}`}
                >
                  <p className={isDark ? "text-gray-400" : "text-gray-500"}>
                    By continuing to use our website, you consent to our use of
                    cookies as described in this Cookies Policy.
                  </p>
                </div>
              </div>

              {/* CTA Section - Contact Support */}
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
                      Have questions about our cookie usage?
                    </div>
                    <p
                      className={`mb-6 ${isDark ? "text-gray-300" : "text-slate-600"}`}
                    >
                      If you need more information about how we use cookies, our
                      support team is ready to help.
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

export default CookiePolicy;
