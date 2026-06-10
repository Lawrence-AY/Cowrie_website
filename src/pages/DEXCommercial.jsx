import { HiLightningBolt, HiShieldCheck, HiChartBar, HiCash, HiTrendingUp, HiCurrencyDollar, HiDocumentText, HiOfficeBuilding } from 'react-icons/hi'
import SEO from '../components/SEO'
import PageBanner from '../components/PageBanner'
import FeatureCard from '../components/FeatureCard'
import ImagePlaceholder from '../components/ImagePlaceholder'
import CTASection from '../components/CTASection'
import { generateProductSchema } from '../lib/seo'

const commercialFeatures = [
  {
    icon: <HiLightningBolt size={24} />,
    title: 'Instant Payments',
    description: 'Buyers can make immediate payments to suppliers using DexT security tokens issued by DEX and matched to negotiated invoice payment terms.',
  },
  {
    icon: <HiCurrencyDollar size={24} />,
    title: 'KES Conversion',
    description: 'DexT automatically converts to Kenyan Shillings on maturity, while suppliers can access liquidity earlier by discounting all or part of their tokens.',
  },
  {
    icon: <HiCash size={24} />,
    title: 'Enhanced Liquidity',
    description: 'Suppliers can trade, convert, or use tokens to pay downstream suppliers under the same terms, creating a more liquid value chain.',
  },
  {
    icon: <HiTrendingUp size={24} />,
    title: 'Blockchain-Age Factoring',
    description: 'DEX reimagines factoring and invoice discounting, reducing the need for expensive overdrafts and short-term bank loans.',
  },
  {
    icon: <HiChartBar size={24} />,
    title: 'Value Chain Efficiency',
    description: 'Automated, transparent financial transactions reduce administrative overhead, improve cash flow management, and support a fluid commercial environment.',
  },
  {
    icon: <HiShieldCheck size={24} />,
    title: 'Permissioned Trust',
    description: 'All participants pass KYC and AML vetting, and payments or withdrawals move only through regulated financial institutions.',
  },
]

const processSteps = [
  'Buyer and supplier agree invoice payment terms through the procurement lifecycle.',
  'DEX issues DexT security tokens matched to the submitted invoice terms.',
  'The supplier can hold DexT to maturity, discount all or part of it, or use it for downstream payments.',
  'On maturity, DexT automatically converts to KES through regulated financial institutions.',
]

export default function DEXCommercial() {
  const structuredData = generateProductSchema({
    name: 'DEX Commercial Finance',
    description: 'Blockchain-based supply chain finance platform with tokenized invoices and receivables financing',
  })

  return (
    <>
      <SEO
        title="DEX Commercial Finance"
        description="Supply chain finance platform using blockchain tokenization for instant payments and enhanced liquidity. Designed for commercial enterprises."
        path="/dex/commercial"
        structuredData={structuredData}
      />
      <PageBanner
        title="DEX Commercial Finance"
        subtitle="A blockchain-based supply chain finance platform that streamlines supplier payments, securitizes receivables, and enhances efficiency across the value chain."
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-ayedos-green/10 rounded-full text-ayedos-green text-sm font-medium mb-4">
                Commercial
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-ayedos-bluegray mb-6">
                Supply Chain <span className="text-ayedos-green">Finance</span>
              </h2>
              <p className="text-ayedos-charcoal/70 leading-relaxed mb-6">
                DEX is an innovative blockchain-based platform designed to streamline supply chain
                finance. It facilitates instant payments to suppliers by securitizing receivables
                and providing liquidity, enhancing efficiency across the entire value chain.
              </p>
              <p className="text-ayedos-charcoal/70 leading-relaxed">
                DEX reimagines traditional factoring and invoice discounting services, eliminating
                the need for expensive overdrafts and short-term bank loans to pay suppliers.
              </p>
            </div>
            <div data-aos="fade-left">
              <ImagePlaceholder height="430px" label="Commercial Finance" className="" src="/images/02.jpg" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-ayedos-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-ayedos-bluegray mb-6">
              Commercial <span className="text-ayedos-green">Capabilities</span>
            </h2>
            <p className="text-lg text-ayedos-charcoal/70">
              Core features designed for reliable supplier payments, liquidity access, and efficient procurement.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {commercialFeatures.map((feature, index) => (
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
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                From Invoice to <span className="text-ayedos-green">Settlement</span>
              </h2>
              <p className="text-white/85 leading-relaxed">
                DEX covers every stage of the procurement lifecycle, embedding trust and automation
                into financial transactions between buyers and suppliers.
              </p>
            </div>
            <div className="space-y-4" data-aos="fade-left">
              {processSteps.map((step, index) => (
                <div key={index} className="flex items-start gap-4 bg-white/10 border border-white/10 rounded-xl p-5">
                  <div className="w-9 h-9 rounded-lg bg-ayedos-green text-white flex items-center justify-center text-sm font-bold shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-white/85 text-sm leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <HiOfficeBuilding size={24} />,
                title: 'For Buyers',
                description: 'Enhance procurement transparency, speed up payments, reduce administrative burdens, and reduce dependence on overdrafts.',
              },
              {
                icon: <HiDocumentText size={24} />,
                title: 'For Suppliers',
                description: 'Achieve better liquidity, streamline factoring and discounting, access short-term investment opportunities, and benefit from instant payments.',
              },
              {
                icon: <HiTrendingUp size={24} />,
                title: 'For Investors and Financial Institutions',
                description: 'Access high-yield, lower-risk investments backed by government and large buyers in a secure, innovative financial ecosystem.',
              },
            ].map((item, index) => (
              <FeatureCard
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
                borderColor="border-ayedos-green/20"
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Get Involved with DEX"
        subtitle="Explore how DEX can transform procurement with efficiency, transparency, security, and blockchain-powered supply chain finance."
        buttonText="Contact Us"
        buttonLink="/contact"
      />
    </>
  )
}
