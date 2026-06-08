import { HiShieldCheck, HiDocumentText, HiCurrencyDollar, HiOfficeBuilding, HiTrendingUp, HiUserGroup, HiBadgeCheck } from 'react-icons/hi'
import PageBanner from '../components/PageBanner'
import FeatureCard from '../components/FeatureCard'
import ImagePlaceholder from '../components/ImagePlaceholder'
import CTASection from '../components/CTASection'

const publicFeatures = [
  {
    icon: <HiOfficeBuilding size={24} />,
    title: 'Government Procurement',
    description: 'DEX supports structured procurement finance by enabling approved supplier obligations to be represented and settled digitally.',
  },
  {
    icon: <HiUserGroup size={24} />,
    title: 'Faster Supplier Payments',
    description: 'Suppliers can access liquidity sooner through token discounting or downstream token use, reducing pressure from delayed payments.',
  },
  {
    icon: <HiDocumentText size={24} />,
    title: 'Transparent Audit Trail',
    description: 'Immutable blockchain records make procurement and settlement activity easier to verify, reconcile, and audit.',
  },
  {
    icon: <HiCurrencyDollar size={24} />,
    title: 'Revenue Optimization',
    description: 'Timely supplier payments can bring forward VAT collection and help reduce the impact of pending bills.',
  },
  {
    icon: <HiTrendingUp size={24} />,
    title: 'Lower Financing Pressure',
    description: 'Efficient tokenized payment structures can reduce reliance on more expensive short-term public borrowing channels.',
  },
  {
    icon: <HiShieldCheck size={24} />,
    title: 'Compliance Controls',
    description: 'KYC, AML, permissioned access, and regulated settlement support public-sector accountability and trust.',
  },
]

const outcomes = [
  'Fewer supplier payment conflicts through clear digital records.',
  'Better visibility into obligations, maturities, and settlement status.',
  'Improved confidence for suppliers serving public-sector entities.',
  'More efficient movement from procurement approval to final KES settlement.',
]

export default function DEXPublicSector() {
  return (
    <>
      <PageBanner
        title="DEX Public Sector Finance"
        subtitle="A transparent procurement finance model for government entities, suppliers, investors, and regulated financial partners."
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
                DEX can help public-sector entities manage approved procurement obligations through
                tokenized payment instruments. Suppliers gain faster access to liquidity, while
                government buyers benefit from transparent records and more predictable settlement.
              </p>
              <p className="text-ayedos-charcoal/70 leading-relaxed">
                This creates a clearer financial workflow from supplier service delivery to invoice
                approval, token issuance, liquidity access, and final KES settlement.
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
              Tools for supplier liquidity, procurement transparency, revenue optimization, and accountable settlement.
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
                Clearer Payments, <span className="text-ayedos-green">Stronger Trust</span>
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
        subtitle="Talk to Cowrie about transparent tokenized procurement finance for public-sector payment workflows."
        buttonText="Contact Us"
        buttonLink="/Contact"
      />
    </>
  )
}
