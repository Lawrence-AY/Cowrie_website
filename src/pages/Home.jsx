import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import ImagePlaceholder from "../components/ImagePlaceholder";
import CTASection from "../components/CTASection";
import { generateOrganizationSchema } from "../lib/seo";

export default function Home() {
  const partners = [
    { name: "KCB", logo: "/images/kcb.png" },
    { name: "Nomyx", logo: "/images/nomyx.png" },
    { name: "Ondato", logo: "/images/ondato.png" },
    { name: "Proximic", logo: "/images/proximic.jpg" },
    { name: "UBA", logo: "/images/UBA.png" },
    { name: "USI", logo: "/images/USI.jpg" },
    { name: "Mohammed Muigai Advocates", logo:"/images/Mohammed.png" },
    { name: "Moronge Obonyo & Co. Advocates", logo: "/images/Moronge.png" },
  ];

  const organizationSchema = generateOrganizationSchema();

  return (
    <>
      <SEO
        title="AYEDOS COWRIE | Catalysing Commerce"
        description="Innovative financial solutions combining capital growth, social impact, and blockchain technology. Explore MLP, DEX, and investment opportunities."
        path="/"
        structuredData={organizationSchema}
      />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-ayedos-bluegray overflow-hidden pt-20">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-20">
          <ImagePlaceholder
            width="100%"
            height="100%"
            label="Hero Background"
            alt="Background image for AYEDOS COWRIE home page"
            className="rounded-none w-full h-full"
            src="/images/05.jpg"
          />
        </div>
        {/* Decorative elements */}
        <div className="absolute top-1/4 right-0 w-125 h-125 bg-ayedos-green/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-100 h-100 bg-white/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl" data-aos="fade-up">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              AYEDOS COWRIE{" "}
              <span className="text-ayedos-green">Catalysing Commerce</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/85 leading-relaxed mb-10 max-w-xl">
              Welcome to AYEDOS COWRIE, innovative financial solutions. <span className="text-ayedos-green font-semibold">
                Cowrie
                </span>
                ,
              the ancient symbol of fertility, prosperity, a store of value, and
              a means of exchange.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/mlp"
                className="inline-flex items-center gap-2 px-8 py-4 bg-ayedos-green text-white font-semibold rounded-xl hover:bg-ayedos-green/90 transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                Explore MLP
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
              <Link
                to="/dex"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                Explore DEX
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="text-center max-w-3xl mx-auto mb-16"
            data-aos="fade-up"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ayedos-bluegray mb-6">
              About <span className="text-ayedos-green">AYEDOS COWRIE</span>
            </h2>
            <p className="text-lg text-ayedos-charcoal/70 leading-relaxed">
              As long as humans have existed, there has always been an
              inexorable flow of economic value from producer to consumer,
              oftentimes via markets and exchanges. AYEDOS COWRIE reimagines
              markets and exchanges as the intersection of distributed ledger
              technology (DLT), tokenization, securitization, and information
              symmetry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Distributed Ledger Technology",
                description:
                  "Secure, transparent, and immutable blockchain infrastructure powering all our financial solutions.",
              },
              {
                title: "Tokenization",
                description:
                  "Converting real-world assets into digital security tokens for fractional ownership and enhanced liquidity.",
              },
              {
                title: "Securitization",
                description:
                  "Pooling financial assets and issuing security tokens backed by diversified revenue streams.",
              },
              {
                title: "Liquidity Solutions",
                description:
                  "Innovative platforms that unlock capital and provide instant liquidity across private and public finance.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-ayedos-light/50 rounded-xl p-6 border border-ayedos-light hover:shadow-lg transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="w-12 h-1 bg-ayedos-green rounded-full mb-4" />
                <h3 className="text-lg font-bold text-ayedos-bluegray mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-ayedos-charcoal/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MLP Preview Section */}
      <section className="py-20 lg:py-28 bg-ayedos-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-ayedos-green/20 rounded-full text-ayedos-green text-sm font-medium mb-4">
                Mortgage Liquidity Platform
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Mortgage Liquidity{" "}
                <span className="text-ayedos-green">Platform</span>
              </h2>
              <p className="text-white/85 leading-relaxed mb-8">
                The Cowrie Mortgage Liquidity Platform (MLP) is a real estate
                marketplace bringing together developers, homebuyers,
                financiers, and investors in a coherent technology-driven
                ecosystem. MLP integrates market search, KYC/AML compliance,
                sales processes, credit assessment, homebuyer finance, loan
                consolidation, equity release, and project financing into a
                simple, efficient platform.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                MLP makes home ownership more accessible through rent-to-own schemes,
                ordinary mortgages, and development finance. It also adds a liquidity
                premium to the real estate sector through tokenization and distribution of
                tokens for commercial real estate, mortgage receivables, and project
                development finance bonds.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  "Market Search",
                  "KYC/AML Compliance",
                  "Sales Processes",
                  "Credit Assessment",
                  "Homebuyer Finance",
                  "Project Financing",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-ayedos-green/20 rounded-full flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-ayedos-green"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-white/90 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/mlp"
                className="inline-flex items-center gap-2 px-6 py-3 bg-ayedos-green text-white font-semibold rounded-xl hover:bg-ayedos-green/90 transition-all duration-300 hover:shadow-lg"
              >
                Learn More
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
            <div data-aos="fade-left">
              <ImagePlaceholder
                height="400px"
                label="MLP Platform Preview"
                className="shadow-none"
                src="/images/03.jpg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* DEX Preview Section */}
      <section className="py-20 lg:py-28 bg-ayedos-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1" data-aos="fade-right">
              <ImagePlaceholder
                height="400px"
                label="DEX Platform Preview"
                className=""
                src="/images/02.jpg"
              />
            </div>
            <div className="order-1 lg:order-2" data-aos="fade-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-ayedos-bluegray/20 rounded-full text-ayedos-bluegray text-sm font-medium mb-4">
                Digital Exchange
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-ayedos-bluegray mb-6">
                Digital <span className="text-ayedos-green">Exchange</span>
              </h2>
              <p className="text-ayedos-charcoal/70 leading-relaxed mb-8">
                DEX is a digital exchange that leverages securitization and
                tokenization in a secure, permissioned blockchain environment to
                deliver liquidity across the economy in both private and public
                finance.
              </p>
              <p className="text-ayedos-charcoal/70 leading-relaxed mb-8">
                Whether the objective is to bring forward receivables or defer payables,
                raise funds for a project, obtain liquidity for commercial real estate,
                homebuyer finance, or residential project development finance, DEX provides
                an innovative solution. It also supports government payment needs, VAT
                collections, on-time supplier payments, and public borrowing optimization.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  "Receivables Finance",
                  "Payables Solutions",
                  "Project Funding",
                  "Commercial Real Estate",
                  "Homebuyer Finance",
                  "Public Finance",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-ayedos-green/20 rounded-full flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-ayedos-green"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-ayedos-charcoal/80 text-sm">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
              <Link
                to="/dex"
                className="inline-flex items-center gap-2 px-6 py-3 bg-ayedos-bluegray text-white font-semibold rounded-xl hover:bg-ayedos-bluegray/90 transition-all duration-300 hover:shadow-lg"
              >
                Learn More
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Cowrie Special Investment Fund Preview */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-ayedos-green/20 rounded-full text-ayedos-green text-sm font-medium mb-4">
                Investment Fund
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-ayedos-bluegray mb-6">
                Cowrie Special{" "}
                <span className="text-ayedos-green">Investment Fund</span>
              </h2>
              <p className="text-ayedos-charcoal/70 leading-relaxed mb-6">
                AYEDOS COWRIE presents its new, innovative, and trusted Special
                Fund. This is a professionally managed investment opportunity
                designed for investors looking for growth opportunities through
                strategic investments.
              </p>
              <p className="text-ayedos-charcoal/70 leading-relaxed mb-6">
                The Fund is regulated by the Capital Markets Authority (CMA), and focuses on
                preserving your capital while earning competitive returns through a diversified
                portfolio across carefully vetted and monitored asset classes.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  "Capital Preservation",
                  "Competitive Returns",
                  "Diversified Portfolio",
                  "Professional Management",
                ].map((item, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-ayedos-light rounded-lg text-sm font-medium text-ayedos-charcoal"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <Link
                to="/special-fund"
                className="inline-flex items-center gap-2 px-6 py-3 bg-ayedos-green text-white font-semibold rounded-xl hover:bg-ayedos-green/90 transition-all duration-300 hover:shadow-lg"
              >
                Learn More
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
            <div data-aos="fade-left">
              <ImagePlaceholder
                height="400px"
                label="Cowrie Special Investment Fund Preview"
                className="shadow-none"
                src="/images/06.jpg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 lg:py-20 bg-ayedos-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="text-center max-w-3xl mx-auto mb-12"
            data-aos="fade-up"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-ayedos-bluegray/10 rounded-full text-ayedos-bluegray text-sm font-medium mb-4">
              Our Partners
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-ayedos-bluegray mb-4">
              Built With{" "}
              <span className="text-ayedos-green">Trusted Partners</span>
            </h2>
            <p className="text-ayedos-charcoal/70 leading-relaxed">
              We collaborate with financial institutions, technology providers,
              and ecosystem partners to deliver secure, compliant, and scalable
              market infrastructure.
            </p>
          </div>

          <div className="partners-carousel overflow-hidden">
            <div className="partners-carousel-track flex w-max gap-4">
              {[...partners, ...partners].map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className=" h-28 w-52 shrink-0 bg-white border border-ayedos-bluegray/10 rounded-xl px-5 py-6 flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300"
                  data-aos="fade-up"
                  data-aos-delay={(index % partners.length) * 75}
                >
                  {partner.logo ? (
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="max-h-14 max-w-full object-contain mb-1"
                    />
                  ) : (
                    <span className="text-center text-sm font-bold leading-snug text-ayedos-bluegray">
                      {partner.name}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us
      <section className="py-20 lg:py-28 bg-ayedos-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="text-center max-w-3xl mx-auto mb-16"
            data-aos="fade-up"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ayedos-bluegray mb-6">
              Why Choose{" "}
              <span className="text-ayedos-green">AYEDOS COWRIE</span>
            </h2>
            <p className="text-lg text-ayedos-charcoal/70">
              We combine cutting-edge blockchain technology with deep financial
              expertise to deliver solutions that are secure, transparent, and
              efficient.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <FeatureCard
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <CTASection
        title="Ready to Transform Your Financial Future?"
        subtitle="Partner with AYEDOS COWRIE and discover how our innovative blockchain-powered solutions can unlock new opportunities for your business."
        buttonText="Get In Touch"
        buttonLink="/contact"
      />
    </>
  );
}
