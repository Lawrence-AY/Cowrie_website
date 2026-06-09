import { HiHome, HiUserGroup, HiTrendingUp, HiCurrencyDollar, HiDocumentText, HiCalendar, HiShieldCheck, HiOfficeBuilding } from 'react-icons/hi'
import PageBanner from '../components/PageBanner'
import FeatureCard from '../components/FeatureCard'
import BenefitCard from '../components/BenefitCard'
import ImagePlaceholder from '../components/ImagePlaceholder'
import CTASection from '../components/CTASection'

const keyFeatures = [
  {
    icon: <HiHome size={24} />,
    title: 'Rent-to-Own',
    description: 'Innovative rent-to-own credit plans that empower homebuyers to achieve the dream of owning a home through flexible payment structures.',
  },
  {
    icon: <HiCurrencyDollar size={24} />,
    title: 'Mortgage Financing',
    description: 'Streamlined mortgage application process with faster approvals and competitive rates for qualified homebuyers.',
  },
  {
    icon: <HiOfficeBuilding size={24} />,
    title: 'Development Finance',
    description: 'Project funding for developers to construct quality housing units with offtake guarantees and third-party financing options.',
  },
  {
    icon: <HiTrendingUp size={24} />,
    title: 'Tokenized Real Estate',
    description: 'Tokenized investments backed by real-world assets, providing investors with detailed performance metrics and progress updates.',
  },
  {
    icon: <HiCalendar size={24} />,
    title: 'Online Reservations',
    description: 'Browse available housing units, explore financing options, and make reservations online with ease.',
  },
  {
    icon: <HiDocumentText size={24} />,
    title: 'Digital Documentation',
    description: 'Contracts and offer letters prepared and availed by our legal team on the platform for seamless processing.',
  },
]

const homebuyerBenefits = [
  'Easier home ownership through flexible financing',
  'Innovative rent-to-own credit plans',
  'Faster loan approvals and processing',
  'Online browsing and reservation system',
  'Transparent pricing and terms',
  'Dedicated support throughout the process',
]

const developerBenefits = [
  'Offtake guarantees for completed units',
  'Project financing for construction',
  'Faster sales through qualified buyer pool',
  'Streamlined project management tools',
  'Reduced marketing and sales costs',
  'Access to institutional investment',
]

const investorBenefits = [
  'Diversified real estate portfolios',
  'Asset-backed investment security',
  'Tokenized investment opportunities',
  'Detailed performance metrics',
  'Enhanced liquidity in real estate',
  'Transparent investment processes',
]

// const galleryImages = [
//   '/images/01.jpg',
//   '/images/02.jpg',
//   '/images/03.jpg',
//   '/images/04.jpg',
//   '/images/05.jpg',
//   '/images/06.jpg',
// ]

export default function MLP() {
  return (
    <>
      {/* Hero Banner */}
      <PageBanner
        title="Mortgage Liquidity Platform (MLP)"
        subtitle="The Cowrie Mortgage Liquidity Platform (MLP) is a real estate marketplace bringing together developers, homebuyers, financiers and investors in a coherent technology-driven ecosystem."
      />

      {/* Overview */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h2 className="text-3xl sm:text-4xl font-bold text-ayedos-bluegray mb-6">
                Mortgage Liquidity{' '}
                <span className="text-ayedos-green">Platform</span>
              </h2>
              <p className="text-ayedos-charcoal/70 leading-relaxed mb-6">
                MLP integrates market search, KYC/AML compliance, sales processes, credit
                assessment, homebuyer finance, loan consolidation, equity release, and
                project financing into a simple, efficient platform.
              </p>
              <p className="text-ayedos-charcoal/70 leading-relaxed mb-6">
                MLP makes home ownership more accessible through rent-to-own schemes,
                ordinary mortgages, and development finance. It also adds a liquidity
                premium to the real estate sector through tokenization and distribution of
                tokens for commercial real estate, mortgage receivables, and project
                development finance bonds.
              </p>
              <div className="flex flex-wrap gap-4">
                {['Developers', 'Homebuyers', 'Financiers', 'Investors'].map((item, index) => (
                  <span key={index} className="px-4 py-2 bg-ayedos-green/10 text-ayedos-green rounded-lg text-sm font-semibold">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div data-aos="fade-left">
              <ImagePlaceholder height="400px" label="MLP Overview" className="" src="/images/03.jpg" />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 lg:py-28 bg-ayedos-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-ayedos-bluegray mb-6">
              Key <span className="text-ayedos-green">Features</span>
            </h2>
            <p className="text-lg text-ayedos-charcoal/70">
              Discover the comprehensive features that make MLP the premier platform for real estate finance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyFeatures.map((feature, index) => (
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

      {/* Benefits */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-ayedos-bluegray mb-6">
              Benefits for <span className="text-ayedos-green">Everyone</span>
            </h2>
            <p className="text-lg text-ayedos-charcoal/70">
              MLP creates value for all stakeholders in the real estate ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <BenefitCard
              icon={<HiHome size={24} />}
              title="For Homebuyers"
              items={homebuyerBenefits}
              borderColor="border-ayedos-green/20"
            />
            <BenefitCard
              icon={<HiUserGroup size={24} />}
              title="For Developers"
              items={developerBenefits}
              borderColor="border-ayedos-green/20"
            />
            <BenefitCard
              icon={<HiTrendingUp size={24} />}
              title="For Investors"
              items={investorBenefits}
              borderColor="border-ayedos-green/20"
            />
          </div>
        </div>
      </section>

      {/* Affordable Housing */}
      <section className="py-20 lg:py-28 bg-ayedos-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-ayedos-green/20 rounded-full text-ayedos-green text-sm font-medium mb-4">
                Social Impact
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                MLP for{' '}
                <span className="text-ayedos-green">Affordable Housing</span>
              </h2>
              <p className="text-white/85 leading-relaxed mb-6">
                MLP offers an integrated solution for financing affordable housing projects. Through
                innovative rent-to-own schemes, ordinary mortgages, and development finance, MLP
                addresses housing shortages and promotes sustainable urban development.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  {
                    title: 'Government Partnerships',
                    description: 'MLP can become the official off-taker on behalf of the Government, freeing capital for the next project while providing homebuyers with financing.',
                  },
                  {
                    title: 'Faster Onboarding',
                    description: 'Advanced systems capable of onboarding thousands of homebuyers weekly with integrated KYC, AML, and credit checks.',
                  },
                  {
                    title: 'Sustainable Urban Development',
                    description: 'Promoting safe, affordable, and sustainable housing solutions accessible to all through technology and collaboration.',
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-ayedos-green/20 rounded-lg flex items-center justify-center shrink-0 mt-1">
                      <HiShieldCheck className="text-ayedos-green" size={16} />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                      <p className="text-white/80 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div data-aos="fade-left">
              <ImagePlaceholder height="450px" label="Affordable Housing" className="" src="/images/AHK.jpg" /> 
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Placeholder
      <section className="py-20 lg:py-28 bg-ayedos-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-ayedos-bluegray mb-6">
              Project <span className="text-ayedos-green">Gallery</span>
            </h2>
            <p className="text-lg text-ayedos-charcoal/70">
              Explore our portfolio of developments and projects.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((src, i) => (
              <div key={i} data-aos="fade-up" data-aos-delay={(i % 3) * 100}>
                <ImagePlaceholder height="250px" label={`Project ${i + 1}`} className="shadow-md" src={src} />
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA */}
      <CTASection
        title="Ready to Transform Real Estate Finance?"
        subtitle="Discover how MLP can help you own your dream home, complete your rental project, or invest in a diversified property portfolio with innovative financing devices."
        buttonText="Contact Us About MLP"
        buttonLink="/contact"
      />
    </>
  )
}
