import {
  HiTrendingUp,
  HiHeart,
  HiCash,
  HiOfficeBuilding,
  HiShieldCheck,
  HiChartBar,
  HiBadgeCheck,
  HiLightningBolt,
} from "react-icons/hi";
import PageBanner from "../components/PageBanner";
import FeatureCard from "../components/FeatureCard";
import ImagePlaceholder from "../components/ImagePlaceholder";
import CTASection from "../components/CTASection";

const fundObjectives = [
  {
    icon: <HiTrendingUp size={24} />,
    title: "Capital Preservation",
    description:
      "Preserve investor capital while earning competitive returns through a diversified portfolio.",
  },
  {
    icon: <HiHeart size={24} />,
    title: "Wealth Creation",
    description:
      "Support investors whose goals include wealth creation, long-term financial security, and access to exclusive opportunities.",
  },
  {
    icon: <HiCash size={24} />,
    title: "Portfolio Diversification",
    description:
      "Invest across carefully vetted and monitored asset classes to diversify sophisticated investor portfolios.",
  },
  {
    icon: <HiOfficeBuilding size={24} />,
    title: "Professional Management",
    description:
      "Benefit from a flexible and professionally managed solution supported by a dedicated investment team.",
  },
];

const investmentOpportunities = [
  {
    title: "Real Estate Developments",
    description:
      "Invest in carefully vetted real estate developments through the AYEDOS COWRIE Special Investment Fund.",
    label: "Real Estate",
    image: "/images/9.png",
  },
  {
    title: "Infrastructure Projects",
    description:
      "Participate in monitored infrastructure projects approved within the fund investment mandate.",
    label: "Infrastructure",
    image: "/images/10.png",
  },
  {
    title: "Public Private Partnerships",
    description:
      "Access opportunities in Public Private Partnerships (PPPs) that meet the fund approval criteria.",
    label: "PPPs",
    image: "/images/8.png",
  },
  {
    title: "Virtual Assets",
    description:
      "Explore virtual asset opportunities approved by the Capital Market Authority.",
    label: "Virtual Assets",
    image: "/images/04.jpg",
  },
  {
    title: "High Investment Opportunities",
    description:
      "Access other high investment opportunities that have been carefully vetted and monitored.",
    label: "Growth",
    image: "/images/05.jpg",
  },
  {
    title: "CMA-Approved Opportunities",
    description:
      "Invest in opportunities approved by the Capital Market Authority through a regulated fund structure.",
    label: "Regulated",
    image: "/images/06.jpg",
  },
];

const governanceFeatures = [
  {
    icon: <HiShieldCheck size={24} />,
    title: "Transparency",
    description:
      "Investors can conveniently monitor their investments through the mobile app or web portal at any time.",
  },
  {
    icon: <HiBadgeCheck size={24} />,
    title: "CMA Regulation",
    description:
      "The fund is regulated by the Capital Markets Authority (CMA) and follows approved investment opportunities.",
  },
  {
    icon: <HiChartBar size={24} />,
    title: "Integrity",
    description:
      "A dedicated investment team ensures integrity throughout the investor journey.",
  },
  {
    icon: <HiLightningBolt size={24} />,
    title: "Round-the-Clock Support",
    description:
      "Investors receive round-the-clock support throughout their investment journey.",
  },
];

export default function SpecialFund() {
  return (
    <>
      {/* Hero Banner */}
      <PageBanner
        title="SIF - AYEDOS COWRIE Special Investment Fund"
        subtitle="A new, innovative, and trusted Special Fund for investors looking for growth opportunities through strategic investments."
      />

      {/* Overview */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h2 className="text-3xl sm:text-4xl font-bold text-ayedos-bluegray mb-6">
                SIF - AYEDOS COWRIE Special{" "}
                <span className="text-ayedos-green">Investment Fund</span>
              </h2>
              <p className="text-ayedos-charcoal/70 leading-relaxed mb-6">
                AYEDOS COWRIE presents its new, innovative, and trusted Special
                Fund. This is a professionally managed investment opportunity
                designed for investors looking for growth opportunities through
                strategic investments. Our Fund is regulated by the Capital
                Markets Authority (CMA), and focuses on preserving your capital
                while earning you competitive returns through a diversified
                portfolio.
              </p>
              <p className="text-ayedos-charcoal/70 leading-relaxed mb-6">
                The Cowrie Special Investment Fund operates similarly to a Money
                Market Fund (MMF) but with a distinct mandate - it is a Special
                Fund designed to channel institutional and retail capital into
                high-impact, transformative projects. Like an MMF, it
                prioritizes capital preservation and liquidity, but goes further
                by targeting sectors that generate both competitive financial
                returns and measurable social outcomes.
              </p>
              <p className="text-ayedos-charcoal/70 leading-relaxed mb-6">
                Our fund leverages the power of blockchain technology,
                tokenization, and securitization to provide investors with
                unprecedented access to high-quality investment opportunities
                while maintaining the highest standards of transparency and
                security.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  "Real Estate",
                  "Infrastructure",
                  "PPPs",
                  "Virtual Assets",
                  "CMA Regulated",
                ].map((item, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-ayedos-green/10 text-ayedos-green rounded-lg text-sm font-semibold"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div data-aos="fade-left">
              <ImagePlaceholder
                height="400px"
                label="Cowrie Special Investment Fund Overview"
                className=""
                src="/images/ecofriendly-building-modern-city-generative-ai.jpg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Fund Objectives */}
      <section className="py-20 lg:py-28 bg-ayedos-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="text-center max-w-3xl mx-auto mb-16"
            data-aos="fade-up"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-ayedos-bluegray mb-6">
              Fund <span className="text-ayedos-green">Objectives</span>
            </h2>
            <p className="text-lg text-ayedos-charcoal/70">
              The Special Fund is tailored to sophisticated investors seeking
              growth, diversification, and long-term financial security.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {fundObjectives.map((objective, index) => (
              <FeatureCard
                key={index}
                icon={objective.icon}
                title={objective.title}
                description={objective.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Investment Opportunities */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="text-center max-w-3xl mx-auto mb-16"
            data-aos="fade-up"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-ayedos-bluegray mb-6">
              Investment{" "}
              <span className="text-ayedos-green">Opportunities</span>
            </h2>
            <p className="text-lg text-ayedos-charcoal/70">
              Carefully vetted and monitored asset classes approved by the
              Capital Market Authority.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {investmentOpportunities.map((item, index) => (
              <div
                key={index}
                className="group relative rounded-xl overflow-hidden border border-ayedos-light hover:shadow-xl transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={(index % 3) * 100}
              >
                <ImagePlaceholder
                  height="200px"
                  label={item.title}
                  src={item.image}
                />
                <div className="p-6 bg-white">
                  <span className="inline-block px-3 py-1 bg-ayedos-green/10 text-ayedos-green text-xs font-semibold rounded-full mb-3">
                    {item.label}
                  </span>
                  <h3 className="text-lg font-bold text-ayedos-bluegray mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-ayedos-charcoal/70">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fund Governance */}
      <section className="py-20 lg:py-28 bg-ayedos-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="text-center max-w-3xl mx-auto mb-16"
            data-aos="fade-up"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-ayedos-bluegray mb-6">
              Fund <span className="text-ayedos-green">Governance</span>
            </h2>
            <p className="text-lg text-ayedos-charcoal/70">
              Our commitment to transparency, integrity, regulation, and
              investor support.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {governanceFeatures.map((feature, index) => (
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

      {/* CTA */}
      <CTASection
        title="Invest with AYEDOS COWRIE Special Fund"
        subtitle="Access a flexible and professionally managed solution tailored to sophisticated investors."
        buttonText="Contact Us About Investment Opportunities"
        buttonLink="/contact"
      />
    </>
  );
}
