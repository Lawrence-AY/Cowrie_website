import { HiShieldCheck, HiDocumentText, HiCurrencyDollar, HiOfficeBuilding, HiTrendingUp, HiUserGroup, HiBadgeCheck } from 'react-icons/hi'
import SEO from '../components/SEO'
import PageBanner from '../components/PageBanner'
import FeatureCard from '../components/FeatureCard'
import ImagePlaceholder from '../components/ImagePlaceholder'
import CTASection from '../components/CTASection'
import { generateProductSchema } from '../lib/seo'

const publicFeatures = [
  {
    icon: <HiOfficeBuilding size={24} />,
    title: 'Instant Payments',
    description: 'Government entities can make immediate supplier payments using DexT security tokens matched to submitted invoice payment terms.',
  },
  {
    icon: <HiUserGroup size={24} />,
    title: 'Enhanced Liquidity',
    description: 'Government suppliers can discount all or part of their DexT on the exchange or use tokens to pay downstream suppliers.',
  },
  {
    icon: <HiDocumentText size={24} />,
    title: 'Improved Government Revenue',
    description: 'Timely supplier payments can bring forward VAT collection, decrease pending bills, and support higher capital turnover and tax revenue.',
  },
  {
    icon: <HiCurrencyDollar size={24} />,
    title: 'Lower Cost of Borrowing',
    description: 'DEX can support simpler short-term borrowing on an as-needed basis when payment terms mature, including financing tied to specific projects.',
  },
  {
    icon: <HiTrendingUp size={24} />,
    title: 'Targeted Impact Finance',
    description: 'Project-specific borrowing allows social impact lenders to target investments toward specific government initiatives.',
  },
  {
    icon: <HiShieldCheck size={24} />,
    title: 'Security and Compliance',
    description: 'DEX is permissioned, requires KYC and AML vetting, and routes payments or withdrawals only through regulated financial institutions.',
  },
]

const outcomes = [
  'Timely supplier payments foster trust and certainty in government payments.',
  'Immediate liquidity reduces reliance on expensive short-term loans and overdrafts.',
  'Reduced pending bills and bad debt provisions can improve government revenue outcomes.',
  'Transparent, secure financial management supports more efficient procurement workflows.',
]

export default function DEXPublicSector() {
  const structuredData = generateProductSchema({
    name: 'DEX Public Sector Finance',
    description: 'Transparent government procurement finance platform with tokenized payments and blockchain security',
  })

  return (
    <>
      <SEO
        title="DEX Public Sector Finance"
        description="Government procurement finance platform with transparent payments and blockchain security. Designed for public sector entities and suppliers."
        path="/dex/public-sector"
        structuredData={structuredData}
      />
      <PageBanner
        title="DEX Public Sector Finance"
        subtitle="A transparent, efficient, and cost-effective financial management platform for government entities and public procurement workflows."
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-ayedos-bluegray/10 rounded-full text-ayedos-bluegray text-sm font-medium mb-4">
                Public Sector
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-ayedos-bluegray mb-6">
                Transforming <span className="text-ayedos-green">Government Procurement</span>
              </h2>
              <p className="text-ayedos-charcoal/70 leading-relaxed mb-6">
                At Ayedos Cowrie, we understand the unique financial needs of government entities.
                DEX is designed to support efficient, transparent, and cost-effective financial
                management for public finance and government operations.
              </p>
              <p className="text-ayedos-charcoal/70 leading-relaxed">
                By leveraging security tokens, regulated settlement, and permissioned blockchain
                infrastructure, DEX can revolutionize public finance and government procurement.
              </p>
            </div>
            <div data-aos="fade-left">
              <ImagePlaceholder height="430px" label="Public Sector Finance" className="shadow-xl" src="/images/01.jpg" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-ayedos-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-ayedos-bluegray mb-6">
              Public Sector <span className="text-ayedos-green">Capabilities</span>
            </h2>
            <p className="text-lg text-ayedos-charcoal/70">
              Tools for supplier liquidity, government revenue improvement, lower borrowing costs, and accountable settlement.
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
              <ImagePlaceholder height="430px" label="Transparent Procurement" className="" src="/images/04.jpg" />
            </div>
            <div data-aos="fade-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-ayedos-green/20 rounded-full text-ayedos-green text-sm font-medium mb-4">
                Outcomes
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                A Comprehensive <span className="text-ayedos-green">Financial Solution</span>
              </h2>
              <div className="space-y-4">
                {outcomes.map((outcome, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-ayedos-green/20 rounded-full flex items-center justify-center mt-0.5 shrink-0">
                      <HiBadgeCheck className="text-ayedos-green" size={16} />
                    </div>
                    <p className="text-white/85 text-sm leading-relaxed">{outcome}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Explore DEX for Public Sector Finance"
        subtitle="DEX empowers governments with advanced financial tools to enhance liquidity, streamline procurement, and promote economic growth."
        buttonText="Contact Us"
        buttonLink="/contact"
      />
    </>
  )
}
