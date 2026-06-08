import { HiLightningBolt, HiShieldCheck, HiChartBar, HiCash, HiTrendingUp, HiCurrencyDollar, HiDocumentText, HiOfficeBuilding } from 'react-icons/hi'
import PageBanner from '../components/PageBanner'
import FeatureCard from '../components/FeatureCard'
import ImagePlaceholder from '../components/ImagePlaceholder'
import CTASection from '../components/CTASection'

const commercialFeatures = [
  {
    icon: <HiLightningBolt size={24} />,
    title: 'Instant Supplier Payments',
    description: 'DEX allows approved invoices to be represented as DexT security tokens, giving suppliers a faster path to liquidity while buyers keep structured settlement terms.',
  },
  {
    icon: <HiCurrencyDollar size={24} />,
    title: 'Invoice Tokenization',
    description: 'Receivables are converted into compliant digital security tokens that can be held, discounted, transferred, or settled through the DEX ecosystem.',
  },
  {
    icon: <HiCash size={24} />,
    title: 'Factoring & Discounting',
    description: 'Suppliers can unlock working capital from invoices without waiting through long payment cycles, improving cash flow across the supply chain.',
  },
  {
    icon: <HiTrendingUp size={24} />,
    title: 'Liquidity Management',
    description: 'Tokenized receivables create a more flexible liquidity layer for suppliers, buyers, investors, and participating financial institutions.',
  },
  {
    icon: <HiChartBar size={24} />,
    title: 'Procurement Efficiency',
    description: 'Digital records, automated workflows, and transparent settlement reduce manual reconciliation and administrative pressure.',
  },
  {
    icon: <HiShieldCheck size={24} />,
    title: 'Trusted Settlement',
    description: 'Permissioned access, KYC, AML controls, and regulated financial institution settlement create a trusted commercial finance environment.',
  },
]

const processSteps = [
  'Supplier submits an approved invoice through the DEX platform.',
  'DEX creates DexT security tokens that match the invoice value and payment terms.',
  'The supplier receives tokens and can hold them, discount them, or use them for downstream payments.',
  'On maturity, the tokens convert to KES through regulated financial institutions.',
]

export default function DEXCommercial() {
  return (
    <>
      <PageBanner
        title="DEX Commercial Finance"
        subtitle="A tokenized supply chain finance solution that helps businesses improve cash flow, supplier confidence, and procurement efficiency."
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
                DEX gives commercial buyers and suppliers a blockchain-based way to manage invoices,
                payment timing, and liquidity. Approved receivables can be securitized into DexT
                tokens, helping suppliers access value earlier while buyers retain predictable
                settlement windows.
              </p>
              <p className="text-ayedos-charcoal/70 leading-relaxed">
                The result is a more transparent working-capital environment where invoice obligations
                are easier to track, finance, and settle across the full value chain.
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
                DEX connects invoice approval, token issuance, liquidity access, and KES settlement
                inside one permissioned environment.
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
                description: 'Improve procurement visibility, reduce payment friction, and strengthen supplier relationships.',
              },
              {
                icon: <HiDocumentText size={24} />,
                title: 'For Suppliers',
                description: 'Access liquidity earlier and reduce dependence on long invoice payment cycles.',
              },
              {
                icon: <HiTrendingUp size={24} />,
                title: 'For Investors',
                description: 'Participate in tokenized receivables backed by real commercial obligations.',
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
        title="Explore DEX for Commercial Finance"
        subtitle="Talk to Cowrie about tokenized supply chain finance for buyers, suppliers, and financial partners."
        buttonText="Contact Us"
        buttonLink="/Contact"
      />
    </>
  )
}
