import { Link } from 'react-router-dom'
import { HiLightningBolt, HiShieldCheck, HiChartBar, HiCash, HiBadgeCheck, HiOfficeBuilding, HiUserGroup, HiTrendingUp, HiLockClosed, HiDocumentText, HiCurrencyDollar } from 'react-icons/hi'
import PageBanner from '../components/PageBanner'
import FeatureCard from '../components/FeatureCard'
import BenefitCard from '../components/BenefitCard'
import ImagePlaceholder from '../components/ImagePlaceholder'
import CTASection from '../components/CTASection'

const howDexWorks = [
  {
    step: '01',
    title: 'Invoice Submitted',
    description: 'Supplier submits invoice to Buyer through the DEX platform.',
  },
  {
    step: '02',
    title: 'Token Created',
    description: 'DEX creates security tokens (DexT) matching the invoice payment terms.',
  },
  {
    step: '03',
    title: 'Token Issued',
    description: 'Tokens are issued to the Supplier representing the invoice value.',
  },
  {
    step: '04',
    title: 'Liquidity Access',
    description: 'Supplier can discount tokens for instant liquidity or use them for downstream payments.',
  },
  {
    step: '05',
    title: 'Token Matures',
    description: 'Tokens automatically convert to KES on the maturity date.',
  },
  {
    step: '06',
    title: 'KES Settlement',
    description: 'Buyer settles the invoice in KES through regulated financial institutions.',
  },
]

const securityFeatures = [
  {
    icon: <HiBadgeCheck size={24} />,
    title: 'KYC Compliance',
    description: 'All participants must pass through Know Your Customer (KYC) vetting before accessing the platform.',
  },
  {
    icon: <HiShieldCheck size={24} />,
    title: 'AML Vetting',
    description: 'Comprehensive Anti-Money Laundering checks ensure all transactions are compliant with regulations.',
  },
  {
    icon: <HiLockClosed size={24} />,
    title: 'Permissioned Network',
    description: 'Only verified participants can access the platform, ensuring a secure and trusted environment.',
  },
  {
    icon: <HiDocumentText size={24} />,
    title: 'Regulatory Compliance',
    description: 'Full compliance with CMA regulations, securities laws, and international financial standards.',
  },
]

// const dexGalleryImages = [
//   '/images/1.png',
//   '/images/2.png',
//   '/images/3.png',
//   '/images/8.png',
// ]

export default function DEX() {
  return (
    <>
      {/* Hero Banner */}
      <PageBanner
        title="Digital Exchange (DEX)"
        subtitle="DEX is a digital exchange that leverages securitization and tokenization to deliver liquidity solutions in a secure permissioned blockchain environment."
      />

      {/* Overview */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-ayedos-bluegray mb-6">
              Understanding <span className="text-ayedos-green">DEX</span>
            </h2>
            <p className="text-lg text-ayedos-charcoal/70 leading-relaxed">
              Tokenization is the process of converting ownership of real-world assets into digital
              security tokens which are then immutably recorded, stored, traded and transferred on
              the blockchain. Security Tokens are a digital representation of fractional ownership
              rights in real-world assets such as commercial real estate, mortgage receivables,
              government bonds and corporate bonds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Security Tokens',
                description: 'Digital representation of fractional ownership rights in real-world assets, embedded with compliance rules and regulations.',
              },
              {
                title: 'Tokenization',
                description: 'Converting real-world assets into digital tokens that are immutably recorded, stored, traded and transferred on the blockchain.',
              },
              {
                title: 'Securitization',
                description: 'Pooling financial assets and issuing security tokens backed by diversified revenue streams for broader investor access.',
              },
              {
                title: 'Blockchain Infrastructure',
                description: 'Secure permissioned blockchain environment ensuring transparency, immutability, and regulatory compliance.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-ayedos-light/50 rounded-xl p-6 border border-ayedos-light hover:shadow-lg transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="w-12 h-1 bg-ayedos-green rounded-full mb-4" />
                <h3 className="text-lg font-bold text-ayedos-bluegray mb-3">{item.title}</h3>
                <p className="text-sm text-ayedos-charcoal/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supply Chain Finance */}
      <section className="py-20 lg:py-28 bg-ayedos-bluegray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-ayedos-green/20 rounded-full text-ayedos-green text-sm font-medium mb-4">
              Commercial
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Supply Chain <span className="text-ayedos-green">Finance</span>
            </h2>
            <p className="text-lg text-white/85 leading-relaxed">
              DEX is an innovative blockchain-based platform designed to streamline supply chain
              finance. It facilitates instant payments to suppliers by securitizing receivables and
              providing liquidity, enhancing efficiency across the entire value chain.
            </p>
            <Link
              to="/DEX/Commercial"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-ayedos-green text-white font-semibold text-sm transition-all duration-300 hover:bg-ayedos-green/90 hover:scale-105"
            >
              Explore Commercial Finance
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <HiLightningBolt size={24} />,
                title: 'Instant Payments',
                description: 'Buyers make immediate payments using security tokens (DexT) that automatically convert to KES on maturity.',
              },
              {
                icon: <HiCurrencyDollar size={24} />,
                title: 'Invoice Tokenization',
                description: 'Invoices are converted into security tokens, enabling efficient trading and liquidity management.',
              },
              {
                icon: <HiCash size={24} />,
                title: 'Factoring',
                description: 'Traditional factoring and invoice discounting services reimagined for the blockchain age.',
              },
              {
                icon: <HiTrendingUp size={24} />,
                title: 'Enhanced Liquidity',
                description: 'Suppliers achieve liquidity by discounting tokens or trading them on the integrated Exchange.',
              },
              {
                icon: <HiChartBar size={24} />,
                title: 'Procurement Efficiency',
                description: 'Streamlined approach reduces administrative overhead and improves cash flow management.',
              },
              {
                icon: <HiShieldCheck size={24} />,
                title: 'Trust Premium',
                description: 'Symmetrical guarantee to Buyers, Suppliers and Bankers that obligations will be met on due dates.',
              },
            ].map((item, index) => (
              <FeatureCard
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
                bgColor="bg-white/10"
                textColor="text-white"
                borderColor="border-white/10"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Public Finance */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div data-aos="fade-right">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-ayedos-bluegray/20 rounded-full text-ayedos-bluegray text-sm font-medium mb-4">
                Public Sector
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-ayedos-bluegray mb-6">
                Transforming{' '}
                <span className="text-ayedos-green">Government Procurement</span>
              </h2>
              <p className="text-ayedos-charcoal/70 leading-relaxed mb-6">
                DEX supports efficient, transparent, and cost-effective financial management for
                government entities. By leveraging blockchain technology, DEX revolutionizes
                government procurement processes.
              </p>
              <Link
                to="/DEX/PublicSector"
                className="mb-6 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-ayedos-green text-white font-semibold text-sm transition-all duration-300 hover:bg-ayedos-green/90 hover:scale-105"
              >
                Explore Public Sector Finance
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <div className="space-y-4">
                {[
                  {
                    title: 'Government Procurement',
                    description: 'Instant payments to suppliers using security tokens, ensuring timely payments and fostering trust.',
                  },
                  {
                    title: 'Faster Supplier Payments',
                    description: 'Suppliers can achieve liquidity immediately by discounting tokens or using them for downstream payments.',
                  },
                  {
                    title: 'Increased Transparency',
                    description: 'Every transaction is recorded immutably on the blockchain, providing complete auditability.',
                  },
                  {
                    title: 'Revenue Optimization',
                    description: 'Timely payments bring forward VAT collection and decrease government pending bills.',
                  },
                  {
                    title: 'Reduced Borrowing Costs',
                    description: 'Lower short-term marginal cost of borrowing compared to traditional Treasury Bills or Euro Bonds.',
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-ayedos-green/20 rounded-full flex items-center justify-center mt-0.5 shrink-0">
                      <svg className="w-3 h-3 text-ayedos-green" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-ayedos-bluegray text-sm">{item.title}</h4>
                      <p className="text-xs text-ayedos-charcoal/70 mt-1">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div data-aos="fade-left">
              <ImagePlaceholder height="450px" label="Public Finance" className="shadow-xl" src="/images/01.jpg" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 lg:py-28 bg-ayedos-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-ayedos-bluegray mb-6">
              Benefits for <span className="text-ayedos-green">All Participants</span>
            </h2>
            <p className="text-lg text-ayedos-charcoal/70">
              DEX creates value across the entire financial ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <BenefitCard
              icon={<HiOfficeBuilding size={24} />}
              title="For Buyers"
              items={[
                'Enhanced procurement transparency',
                'Faster payment processing',
                'Reduced administrative burdens',
                'Eliminate supplier payment conflicts',
                'Reduced overdraft dependence',
              ]}
            />
            <BenefitCard
              icon={<HiUserGroup size={24} />}
              title="For Suppliers"
              items={[
                'Better liquidity management',
                'Streamlined factoring services',
                'Access to short-term investments',
                'Reduced overdraft dependence',
                'Instant payment capabilities',
              ]}
            />
            <BenefitCard
              icon={<HiTrendingUp size={24} />}
              title="For Investors"
              items={[
                'High-yield, low-risk investments',
                'Government-backed securities',
                'Secure financial ecosystem',
                'Tokenized asset opportunities',
                'Diversified portfolio options',
              ]}
            />
            <BenefitCard
              icon={<HiCurrencyDollar size={24} />}
              title="For Financial Institutions"
              items={[
                'Reduced bad debt provisions',
                'Increased corporation tax revenue',
                'New investment products',
                'Lower operational risks',
                'Enhanced regulatory compliance',
              ]}
            />
          </div>
        </div>
      </section>

      {/* How DEX Works */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-ayedos-bluegray mb-6">
              How <span className="text-ayedos-green">DEX Works</span>
            </h2>
            <p className="text-lg text-ayedos-charcoal/70">
              A seamless end-to-end process from invoice submission to settlement.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-ayedos-light -translate-x-1/2" />

            <div className="space-y-12 lg:space-y-0">
              {howDexWorks.map((item, index) => (
                <div
                  key={index}
                  className={`relative lg:flex items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                  data-aos="fade-up"
                >
                  {/* Content */}
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:pl-12'}`}>
                    <div className={`bg-ayedos-light/50 rounded-xl p-6 border border-ayedos-light inline-block max-w-md ${
                      index % 2 === 0 ? 'lg:ml-auto' : ''
                    }`}>
                      <div className="text-ayedos-green font-bold text-sm mb-1">Step {item.step}</div>
                      <h3 className="text-lg font-bold text-ayedos-bluegray mb-2">{item.title}</h3>
                      <p className="text-sm text-ayedos-charcoal/70">{item.description}</p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-ayedos-green rounded-full items-center justify-center text-white text-xs font-bold z-10">
                    {item.step}
                  </div>

                  {/* Spacer */}
                  <div className="lg:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-20 lg:py-28 bg-ayedos-bluegray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Security & <span className="text-ayedos-green">Compliance</span>
            </h2>
            <p className="text-lg text-white/85">
              DEX is a permissioned platform ensuring the highest standards of security and regulatory compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityFeatures.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                bgColor="bg-white/10"
                textColor="text-white"
                borderColor="border-white/10"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Placeholders
      <section className="py-20 lg:py-28 bg-ayedos-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-ayedos-bluegray mb-6">
              Platform <span className="text-ayedos-green">Gallery</span>
            </h2>
            <p className="text-lg text-ayedos-charcoal/70">
              Visual overview of the DEX platform and ecosystem.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {dexGalleryImages.map((src, i) => (
              <div key={i} data-aos="fade-up" data-aos-delay={(i % 4) * 100}>
                <ImagePlaceholder height="200px" label={`DEX Gallery ${i + 1}`} className="shadow-md" src={src} />
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA */}
      <CTASection
        title="Ready to Transform Your Financial Operations?"
        subtitle="Join us in transforming commerce with DEX - where technology meets efficiency, transparency, and security."
        buttonText="Contact Us About DEX"
        buttonLink="/Contact"
      />
    </>
  )
}
