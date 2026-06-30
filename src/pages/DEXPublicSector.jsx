import {
  HiShieldCheck,
  HiDocumentText,
  HiCurrencyDollar,
  HiOfficeBuilding,
  HiTrendingUp,
  HiUserGroup,
  HiBadgeCheck,
} from "react-icons/hi";
import SEO from "../components/SEO";
import PageBanner from "../components/PageBanner";
import FeatureCard from "../components/FeatureCard";
import ImagePlaceholder from "../components/ImagePlaceholder";
import CTASection from "../components/CTASection";
import { generateProductSchema } from "../lib/seo";

const publicFeatures = [
  {
    icon: <HiOfficeBuilding size={24} />,
    title: "Instant Payments",
    description:
      "CDEX enables government entities to make immediate payments to suppliers using security tokens issued by the platform, namely CDexT. These tokens are matched to the payment terms of submitted invoices, converting to KES (local currency) upon maturity. This feature ensures timely payments, fostering trust and certainty in government payments.",
  },
  {
    icon: <HiUserGroup size={24} />,
    title: "Enhanced Liquidity",
    description:
      "Government Suppliers can achieve liquidity immediately by discounting all or part of their CDexT on the exchange or using them to pay downstream suppliers. This reduces the need for expensive short-term loans and overdrafts, improving cash flows and ultimately benefiting government contracts and costs.",
  },
  {
    icon: <HiDocumentText size={24} />,
    title: "Improved Government Revenue",
    description:
      "CDEX, through timely payments to suppliers, brings forward Value-Added Tax collection and effectively decreases Government pending bills – i.e. outstanding payments to suppliers - by the amount of Value Added Tax. The CDEX symmetrical payment assurance decreases Provisions for Bad Debts / Bad Debt Write-offs by Banks, thus increasing corporation tax revenue. Lastly, timely payment also leads to higher capital turnover, GDP, and therefore, government tax revenue.",
  },
  {
    icon: <HiCurrencyDollar size={24} />,
    title: "Lower Cost of Borrowing for the Government",
    description:
      "The government's short-term marginal cost of borrowing is lower and simpler compared to the traditional issuance of Treasury Bills or Euro Bonds. This is because lending occurs on an as-needed basis, specifically when payment terms mature. Additionally, the government can borrow for specific projects, allowing social impact lenders to target their investments toward specific initiatives.",
  },
  {
    icon: <HiTrendingUp size={24} />,
    title: "A Comprehensive Financial Solution for Governments",
    description:
      "CDex is designed to empower governments with advanced financial tools, ensuring efficient, transparent, and secure financial management. By leveraging our platforms, governments can enhance liquidity, streamline procurement processes, and promote economic growth",
  },
  {
    icon: <HiShieldCheck size={24} />,
    title: "Security and Compliance",
    description:
      "CDEX is a permissioned platform that ensures all participants pass through KYC and AML vetting. Payments or withdrawals are made only through regulated financial institutions, maintaining high security and compliance standards.",
  },
];

const outcomes = [
  "CDEX enables government entities to make immediate payments to suppliers using security tokens issued by the platform, namely CDexT.",
  "Government Suppliers can achieve liquidity immediately by discounting all or part of their CDexT on the exchange or using them to pay downstream suppliers.",
  "CDEX, through timely payments to suppliers, brings forward Value-Added Tax collection and effectively decreases Government pending bills.",
  "The government's short-term marginal cost of borrowing is lower and simpler compared to the traditional issuance of Treasury Bills or Euro Bonds.",
];

export default function CDEXPublicSector() {
  const structuredData = generateProductSchema({
    name: "CDEX Public Sector Finance",
    description:
      "Transparent government procurement finance platform with tokenized payments and blockchain security",
  });

  return (
    <>
      <SEO
        title="CDEX – Cowrie Digital Exchange – Public Finance"
        description="At Ayedos Cowrie, we understand the unique financial needs of government entities. CDEX is designed to support efficient, transparent, and cost-effective financial management."
        path="/dex/public-sector"
        structuredData={structuredData}
      />
      <PageBanner
        title="CDEX – Cowrie Digital Exchange – Public Finance"
        subtitle="Transforming Government Procurement with CDEX"
        bgImage="/images/02.jpg"
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-ayedos-bluegray/10 rounded-full text-ayedos-bluegray text-sm font-medium mb-4">
                Public Sector
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-ayedos-bluegray mb-6">
                Transforming{" "}
                <span className="text-ayedos-green">
                  Government Procurement
                </span>
              </h2>
              <p className="text-ayedos-charcoal/70 leading-relaxed mb-6">
                At Ayedos Cowrie, we understand the unique financial needs of
                government entities. CDex designed to support efficient,
                transparent, and cost-effective financial management. Explore
                how the CDEX platform, can revolutionize public finance and your
                operations.
              </p>
              <p className="text-ayedos-charcoal/70 leading-relaxed">
                Transforming Government Procurement with CDEX
              </p>
            </div>
            <div data-aos="fade-left">
              <ImagePlaceholder
                height="430px"
                label="Public Sector Finance"
                className="shadow-xl"
                src="/images/01.jpg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-ayedos-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="text-center max-w-3xl mx-auto mb-16"
            data-aos="fade-up"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-ayedos-bluegray mb-6">
              Public Sector{" "}
              <span className="text-ayedos-green">Capabilities</span>
            </h2>
            <p className="text-lg text-ayedos-charcoal/70">
              CDEX is designed to support efficient, transparent, and
              cost-effective financial management.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {publicFeatures.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-ayedos-bluegray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <ImagePlaceholder
                height="430px"
                label="Transparent Procurement"
                className=""
                src="/images/04.jpg"
              />
            </div>
            <div data-aos="fade-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-ayedos-green/20 rounded-full text-ayedos-green text-sm font-medium mb-4">
                Outcomes
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                A Comprehensive{" "}
                <span className="text-ayedos-green">
                  Financial Solution for Governments
                </span>
              </h2>
              <p className="text-white/85 leading-relaxed mb-6">
                CDex is designed to empower governments with advanced financial
                tools, ensuring efficient, transparent, and secure financial
                management. By leveraging our platforms, governments can enhance
                liquidity, streamline procurement processes, and promote
                economic growth
              </p>
              <div className="space-y-4">
                {outcomes.map((outcome, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-ayedos-green/20 rounded-full flex items-center justify-center mt-0.5 shrink-0">
                      <HiBadgeCheck className="text-ayedos-green" size={16} />
                    </div>
                    <p className="text-white/85 text-sm leading-relaxed">
                      {outcome}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Get Involved"
        subtitle="Why Get Involved?"
        buttonText="Contact Us"
        buttonLink="/contact"
      />
    </>
  );
}
