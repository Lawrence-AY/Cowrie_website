import { Link } from 'react-router-dom'
import { HiShieldCheck, HiBadgeCheck, HiOfficeBuilding, HiUserGroup, HiTrendingUp, HiLockClosed, HiDocumentText, HiCurrencyDollar } from 'react-icons/hi'
import SEO from '../components/SEO'
import PageBanner from '../components/PageBanner'
import FeatureCard from '../components/FeatureCard'
import BenefitCard from '../components/BenefitCard'
import CTASection from '../components/CTASection'
import { generateProductSchema } from '../lib/seo'

const supplierJourney = [
  {
    step: '01',
    title: 'Receivables Submitted',
    description: 'Supplier submits receivables to the DEX platform.',
    icon: <HiDocumentText size={20} />,
  },
  {
    step: '02',
    title: 'Token Created',
    description: 'DEX creates security tokens (DexT) matching the receivable payment terms.',
    icon: <HiBadgeCheck size={20} />,
  },
  {
    step: '03',
    title: 'Token Issued',
    description: 'Tokens are issued to the Supplier representing the receivable value.',
    icon: <HiShieldCheck size={20} />,
  },
  {
    step: '04',
    title: 'Liquidity Access',
    description: 'Supplier can discount tokens for instant liquidity or use them for downstream payments.',
    icon: <HiCurrencyDollar size={20} />,
  },
  {
    step: '05',
    title: 'Token Matures',
    description: 'Tokens automatically convert to KES on the maturity date.',
    icon: <HiLockClosed size={20} />,
  },
  {
    step: '06',
    title: 'Settlement',
    description: 'Dex settles the receivable in KES through regulated financial institutions.',
    icon: <HiOfficeBuilding size={20} />,
  },
]

const investorJourney = [
  {
    step: '01',
    title: 'Investor Onboarding',
    description: 'Investor completes digital onboarding, KYC checks, and platform eligibility review.',
    icon: <HiUserGroup size={20} />,
  },
  {
    step: '02',
    title: 'Wallet Funding',
    description: 'Funds are added through regulated channels for investment into tokenized opportunities.',
    icon: <HiCurrencyDollar size={20} />,
  },
  {
    step: '03',
    title: 'Opportunity Selection',
    description: 'Investor reviews available DexT opportunities and selects assets that match their objectives.',
    icon: <HiTrendingUp size={20} />,
  },
  {
    step: '04',
    title: 'Trading',
    description: 'Investor purchases security tokens representing eligible receivables or asset-backed pools.',
    icon: <HiBadgeCheck size={20} />,
  },
  {
    step: '05',
    title: 'Portfolio Tracking',
    description: 'DEX provides visibility into holdings, maturities, returns, and performance metrics.',
    icon: <HiDocumentText size={20} />,
  },
  {
    step: '06',
    title: 'Returns and Redemption',
    description: 'Income is distributed and principal is redeemed through regulated settlement channels.',
    icon: <HiShieldCheck size={20} />,
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

const dexPathways = [
  {
    icon: <HiOfficeBuilding size={26} />,
    title: 'Commercial Finance',
    label: 'Supply Chain',
    description:
      'Tokenized invoice and receivables financing that helps suppliers access liquidity faster while buyers keep predictable settlement terms.',
    link: '/dex/commercial',
    buttonText: 'Explore Commercial Finance',
  },
  {
    icon: <HiShieldCheck size={26} />,
    title: 'Public Sector Finance',
    label: 'Government Procurement',
    description:
      'Transparent procurement finance for public-sector entities, suppliers, investors, and regulated financial partners.',
    link: '/dex/public-sector',
    buttonText: 'Explore Public Sector Finance',
  },
]

const tokenizationConcepts = [
  {
    title: 'Tokenization',
    description: 'The process of converting ownership of real-world assets into digital security tokens that are immutably recorded, stored, traded, and transferred on the blockchain.',
  },
  {
    title: 'Security Tokens',
    description: 'A digital representation of fractional ownership rights in real-world assets such as commercial real estate, mortgage receivables, government bonds, and corporate bonds.',
  },
  {
    title: 'Fractional Ownership',
    description: 'Securitization and tokenization allow large assets to be divided into smaller units, lowering the investment threshold and widening access for investors.',
  },
  {
    title: 'Embedded Compliance',
    description: 'Security Tokens carry compliance rules so sales and transfers can only occur between permitted and verified participants under CMA, KYC/AML, and market rules.',
  },
]

function JourneyTimeline({ title, eyebrow, description, items, accent = 'green', delay = 0 }) {
  const accentClasses =
    accent === 'bluegray'
      ? {
          eyebrow: 'text-ayedos-bluegray bg-white border-ayedos-bluegray/15',
          header: 'bg-ayedos-bluegray text-white',
          icon: 'bg-ayedos-bluegray text-white',
          connector: 'bg-ayedos-bluegray/20',
          step: 'border-ayedos-bluegray/15 hover:border-ayedos-bluegray/35',
          text: 'text-ayedos-bluegray',
        }
      : {
          eyebrow: 'text-ayedos-green bg-white border-ayedos-green/25',
          header: 'bg-ayedos-green text-white',
          icon: 'bg-ayedos-green text-white',
          connector: 'bg-ayedos-green/25',
          step: 'border-ayedos-green/20 hover:border-ayedos-green/45',
          text: 'text-ayedos-green',
        }

  return (
    <div data-aos="fade-up" data-aos-delay={delay}>
      <div className={`${accentClasses.header} rounded-xl p-6   shadow-ayedos-charcoal/10`}>
        <div className={`inline-flex items-center px-3 py-1 rounded-full border text-xs font-semibold mb-5 ${accentClasses.eyebrow}`}>
          {eyebrow}
        </div>
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold mb-3">{title}</h3>
          <p className="text-sm sm:text-base text-white/85 leading-relaxed max-w-xl">{description}</p>
        </div>
      </div>

      <div className="relative mt-6 space-y-4">
        <div className={`absolute left-6 top-6 bottom-6 w-px ${accentClasses.connector}`} />
        {items.map((item) => (
          <div
            key={item.step}
            className={`relative flex gap-4 bg-white border ${accentClasses.step} rounded-xl p-4 sm:p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
          >
            <div className={`relative z-10 w-12 h-12 rounded-xl ${accentClasses.icon} flex items-center justify-center shrink-0 shadow-md shadow-ayedos-charcoal/10`}>
              {item.icon}
            </div>
            <div className="min-w-0">
              <div className={`text-xs font-bold tracking-wide mb-1 ${accentClasses.text}`}>STEP {item.step}</div>
              <h4 className="text-base sm:text-lg font-bold text-ayedos-bluegray mb-1">{item.title}</h4>
              <p className="text-sm text-ayedos-charcoal/70 leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// const dexGalleryImages = [
//   '/images/1.png',
//   '/images/2.png',
//   '/images/3.png',
//   '/images/8.png',
// ]

export default function DEX() {
  const structuredData = generateProductSchema({
    name: 'Cowrie Digital Exchange (DEX)',
    description: 'Blockchain-based digital exchange for tokenized real assets, supply chain finance, and public sector procurement',
  })

  return (
    <>
      <SEO
        title="DEX - Digital Exchange"
        description="DEX is a digital exchange by AYEDOS COWRIE that leverages securitization and tokenization to deliver liquidity solutions in a secure permissioned blockchain environment."
        path="/dex"
        structuredData={structuredData}
      />
      {/* Hero Banner */}
      <PageBanner
        title="DEX - Digital Exchange"
        subtitle="A secure permissioned blockchain exchange by AYEDOS COWRIE for tokenized liquidity solutions across private and public finance."
        bgImage="/images/02.jpg"
      />

      {/* Overview - What is DEX */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div data-aos="fade-right">
              <h2 className="text-3xl sm:text-4xl font-bold text-ayedos-bluegray mb-6">
                What is <span className="text-ayedos-green">DEX?</span>
              </h2>
              <p className="text-lg text-ayedos-charcoal/70 leading-relaxed mb-6">
                DEX is a digital exchange by AYEDOS COWRIE that leverages Securitization and Tokenization to deliver liquidity solutions in a secure permissioned blockchain environment.
              </p>
              <p className="text-lg text-ayedos-charcoal/70 leading-relaxed mb-6">
                By leveraging Tokenization, DEX offers an innovative platform that enhances liquidity and capital efficiency across the economy in both private and public finance.
              </p>
              <div className="mt-8">
                <p className="text-ayedos-green font-semibold text-lg">
                  Learn how DEX can optimize your supply chain with immediate payments and improved liquidity.
                </p>
              </div>
            </div>

            {/* Right side - Image */}
            <div data-aos="fade-left">
              <img
                src="/images/dex1.png"
                alt="DEX Digital Exchange Platform"
                className="w-full h-auto rounded-xl  "
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-ayedos-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-ayedos-bluegray mb-6">
              Tokenization and <span className="text-ayedos-green">Security Tokens</span>
            </h2>
            <p className="text-lg text-ayedos-charcoal/70 leading-relaxed">
              Each Security Token serves as a unique identifier that represents a fraction of the underlying asset. In practice, this preserves regulatory control and investor eligibility requirements within the safety of blockchain infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tokenizationConcepts.map((item, index) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-6 border border-ayedos-light hover:shadow-lg transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="w-12 h-1 bg-ayedos-green rounded-full mb-4" />
                <h3 className="text-lg font-bold text-ayedos-bluegray mb-3">{item.title}</h3>
                <p className="text-sm text-ayedos-charcoal/70 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEX Pathways */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-ayedos-bluegray mb-6">
              Choose Your <span className="text-ayedos-green">DEX Pathway</span>
            </h2>
            <p className="text-lg text-ayedos-charcoal/70">
              DEX applies tokenized liquidity to commercial supply chain finance and public finance workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {dexPathways.map((pathway, index) => (
              <div
                key={pathway.title}
                className="bg-white border border-ayedos-light rounded-xl p-6 sm:p-8   transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-ayedos-green/10 rounded-xl flex items-center justify-center text-ayedos-green shrink-0">
                    {pathway.icon}
                  </div>
                  <div>
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-ayedos-bluegray/10 text-ayedos-bluegray text-xs font-semibold mb-4">
                      {pathway.label}
                    </div>
                    <h3 className="text-2xl font-bold text-ayedos-bluegray mb-3">{pathway.title}</h3>
                    <p className="text-sm sm:text-base text-ayedos-charcoal/70 leading-relaxed mb-6">
                      {pathway.description}
                    </p>
                    <Link
                      to={pathway.link}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-ayedos-green text-white font-semibold text-sm transition-all duration-300 hover:bg-ayedos-green/90 hover:scale-105"
                    >
                      {pathway.buttonText}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
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
      <section className="py-20 lg:py-28 bg-ayedos-light/45">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-ayedos-bluegray mb-6">
              How <span className="text-ayedos-green">DEX Works (Supplier & Investor Journeys)</span>
            </h2>
            <p className="text-lg text-ayedos-charcoal/70">
              A seamless end-to-end process for suppliers and investors from onboarding to settlement.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <JourneyTimeline
              title="Supplier Journey"
              eyebrow="Supplier Flow"
              description="From receivable submission to token issuance, liquidity access, and final KES settlement."
              items={supplierJourney}
            />
            <JourneyTimeline
              title="Investor Journey"
              eyebrow="Investor Flow"
              description="From onboarding and funding to investment selection, portfolio tracking, returns, and redemption."
              items={investorJourney}
              accent="bluegray"
              delay={100}
            />
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
        title="Optimize Your Supply Chain with DEX"
        subtitle="Learn how DEX can optimize your supply chain with immediate payments and improved liquidity."
        buttonText="Contact Us About DEX"
        buttonLink="/contact"
      />
    </>
  )
}
