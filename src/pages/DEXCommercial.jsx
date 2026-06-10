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
    description: 'DEX enables Buyers to make immediate payments to suppliers using security tokens (DexT) issued by the platform. The Token maturation is matched to the payment terms of the submitted invoices, as negotiated between the Buyer and Supplier.',
  },
  {
    icon: <HiCurrencyDollar size={24} />,
    title: 'KES Conversion',
    description: 'The Tokens automatically convert to Kenyan Shillings (KES) on maturity – but most importantly, the supplier – beneficiary – can get instant liquidity, before maturity, by discounting all or part of their DexT.',
  },
  {
    icon: <HiCash size={24} />,
    title: 'Enhanced Liquidity',
    description: 'Suppliers can also achieve liquidity by engaging with the integrated Exchange, where tokens can be traded or converted. Additionally, tokens can be used to pay downstream suppliers under the same terms and conditions, fostering a more liquid and efficient value chain.',
  },
  {
    icon: <HiTrendingUp size={24} />,
    title: 'Efficiency Across the Value Chain',
    description: 'DEX brings traditional factoring and invoice discounting services into the Blockchain age and eliminates the need for expensive overdraft and short-term working capital bank loans. This streamlined approach reduces administrative overhead, improves cash flow management, and promotes a fluid economic environment for all participants.',
  },
  {
    icon: <HiChartBar size={24} />,
    title: 'Symmetrical Guarantee',
    description: 'DEX provides a de-facto symmetrical guarantee to Buyers, Supplier and Bankers, that Buyers will meet their obligations on the due dates. This adds a trust premium and catalyst to commerce.',
  },
  {
    icon: <HiShieldCheck size={24} />,
    title: 'Permissioned',
    description: 'DEX is a permissioned platform, which means all participants must pass through Know your Customer (KYC) and Anti-Money Laundering (AML) vetting. Furthermore, payments or withdrawals are only through regulated financial institutions.',
  },
]

const processSteps = [
  'Buyer and supplier agree invoice payment terms through the procurement lifecycle.',
  'DEX issues DexT security tokens matched to the submitted invoice terms.',
  'The supplier can hold DexT to maturity, discount all or part of it, or use it for downstream payments.',
  'On maturity, DexT automatically converts to KES through regulated financial institutions.',
]

const whyGetInvolved = [
  {
    icon: <HiOfficeBuilding size={24} />,
    title: 'For Buyers',
    description: 'Enhance your procurement process with improved transparency, faster payments, and reduced administrative burdens. Reduce dependence on overdrafts and eliminate conflict with suppliers over late payments.',
  },
  {
    icon: <HiDocumentText size={24} />,
    title: 'For Suppliers',
    description: 'Achieve better liquidity, streamlined factoring and discounting, access short-term investment opportunities, eliminate or reduce dependence on overdrafts, and benefit from instant payments.',
  },
  {
    icon: <HiTrendingUp size={24} />,
    title: 'For Investors and Financial Institutions',
    description: 'Access high-yield, low-risk investments that are backed and secured by the government and large buyers, and participate in a secure, innovative financial ecosystem.',
  },
]

const howToGetInvolved = [
  {
    title: 'Buyers',
    description: 'Partner with us to implement DEX in your procurement systems and experience the future of transparent and efficient financial management.',
  },
  {
    title: 'Suppliers and Subcontractors',
    description: 'After the implementation, sign up to be part of our platform and start receiving payments in security tokens, improving your cash flow and operational efficiency.',
  },
  {
    title: 'Investors and Banks',
    description: 'Join our Exchange to engage in higher-yield investments backed by the government, trade tokens, and support the financial infrastructure that underpins modern government procurement.',
  },
]

export default function DEXCommercial() {
  const structuredData = generateProductSchema({
    name: 'DEX Commercial Finance',
    description: 'Blockchain-based supply chain finance platform with tokenized invoices and receivables financing',
  })

  return (
    <>
      <SEO
        title="DEX – Digital Exchange - Commercial"
        description="Welcome to DEX, a cutting-edge platform that revolutionizes supply chain finance through the power of blockchain technology."
        path="/dex/commercial"
        structuredData={structuredData}
      />
      <PageBanner
        title="DEX – Digital Exchange - Commercial"
        subtitle="Supply Chain Finance"
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
                Welcome to DEX, a cutting-edge platform that revolutionizes supply chain finance through the power of blockchain technology.
              </p>
              <p className="text-ayedos-charcoal/70 leading-relaxed mb-6">
                DEX is an innovative blockchain-based platform designed to streamline supply chain finance. It facilitates instant payments to suppliers by securitizing receivables and providing liquidity and thus enhancing efficiency across the entire value chain, re-imagining traditional factoring and invoice discounting services and eliminating the need for expensive overdraft and short-term bank loans to pay suppliers.
              </p>
              <p className="text-ayedos-charcoal/70 leading-relaxed mb-6">
                DEX is permissioned and covers every stage of the procurement lifecycle, offering unparalleled efficiency, transparency, and security.
              </p>
              <p className="text-ayedos-charcoal/70 leading-relaxed">
                DEX transforms supply chain management by embedding trust and automation into financial transactions between buyers and suppliers.
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
              DEX covers every stage of the procurement lifecycle, offering unparalleled efficiency, transparency, and security.
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
          <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-ayedos-bluegray mb-6">
              Get <span className="text-ayedos-green">Involved</span>
            </h2>
            <p className="text-lg text-ayedos-charcoal/70">
              Join us in transforming government procurement with DEX- where technology meets efficiency, transparency, and security. By integrating blockchain technology into the procurement processes, we are paving the way for a more streamlined, accountable, and effective system.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-ayedos-bluegray mb-8 text-center">
            Why Get Involved?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyGetInvolved.map((item, index) => (
              <FeatureCard
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
                borderColor="border-ayedos-green/20"
              />
            ))}
          </div>

          <h3 className="text-2xl font-bold text-ayedos-bluegray mt-16 mb-8 text-center">
            How to Get Involved
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {howToGetInvolved.map((item, index) => (
              <FeatureCard
                key={index}
                title={item.title}
                description={item.description}
                borderColor="border-ayedos-green/20"
              />
            ))}
          </div>

          <p className="text-center text-ayedos-charcoal/70 leading-relaxed mt-12 max-w-4xl mx-auto">
            Explore the possibilities with DEX and be a part of the revolution in government procurement. Contact us today to learn more and get started on this transformative journey.
          </p>
        </div>
      </section>

      <CTASection
        title="Get Involved"
        subtitle="Contact us today to learn more and get started on this transformative journey."
        buttonText="Contact Us"
        buttonLink="/contact"
      />
    </>
  )
}
