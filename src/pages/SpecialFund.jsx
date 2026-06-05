import { HiTrendingUp, HiHeart, HiCash, HiOfficeBuilding, HiShieldCheck, HiChartBar, HiBadgeCheck, HiLightningBolt } from 'react-icons/hi'
import PageBanner from '../components/PageBanner'
import FeatureCard from '../components/FeatureCard'
import StatsSection from '../components/StatsSection'
import ImagePlaceholder from '../components/ImagePlaceholder'
import CTASection from '../components/CTASection'

const fundObjectives = [
  {
    icon: <HiTrendingUp size={24} />,
    title: 'Capital Growth',
    description: 'Generate attractive risk-adjusted returns through strategic investments in high-growth sectors and innovative projects.',
  },
  {
    icon: <HiHeart size={24} />,
    title: 'Social Impact',
    description: 'Drive positive social change by funding affordable housing, infrastructure, and community development initiatives.',
  },
  {
    icon: <HiCash size={24} />,
    title: 'Liquidity Support',
    description: 'Provide liquidity solutions to projects and enterprises, enabling them to achieve their full potential.',
  },
  {
    icon: <HiOfficeBuilding size={24} />,
    title: 'Project Financing',
    description: 'Offer comprehensive financing solutions for housing projects, infrastructure development, and commercial real estate.',
  },
]

const investmentOpportunities = [
  {
    title: 'Housing Projects',
    description: 'Invest in affordable and middle-income housing developments with strong demand fundamentals.',
    label: 'Real Estate',
    image: '/images/9.png',
  },
  {
    title: 'Infrastructure Development',
    description: 'Participate in financing critical infrastructure projects that drive economic growth.',
    label: 'Infrastructure',
    image: '/images/10.png',
  },
  {
    title: 'Sustainable Investments',
    description: 'Support environmentally sustainable projects with long-term value creation potential.',
    label: 'ESG',
    image: '/images/8.png',
  },
  {
    title: 'Commercial Development',
    description: 'Access commercial real estate opportunities with strong income-generating potential.',
    label: 'Commercial',
    image: '/images/04.jpg',
  },
  {
    title: 'Economic Growth',
    description: 'Fund initiatives that stimulate economic development and job creation in key sectors.',
    label: 'Development',
    image: '/images/05.jpg',
  },
  {
    title: 'Innovation Projects',
    description: 'Back innovative financial technology solutions that transform traditional markets.',
    label: 'Fintech',
    image: '/images/06.jpg',
  },
]

const governanceFeatures = [
  {
    icon: <HiShieldCheck size={24} />,
    title: 'Transparency',
    description: 'Full disclosure of fund performance, holdings, and investment strategies to all stakeholders.',
  },
  {
    icon: <HiBadgeCheck size={24} />,
    title: 'Compliance',
    description: 'Strict adherence to regulatory requirements and international best practices in fund management.',
  },
  {
    icon: <HiChartBar size={24} />,
    title: 'Risk Management',
    description: 'Comprehensive risk assessment and mitigation frameworks to protect investor capital.',
  },
  {
    icon: <HiLightningBolt size={24} />,
    title: 'Professional Oversight',
    description: 'Experienced fund management team with deep expertise in finance, real estate, and blockchain technology.',
  },
]

const fundStats = [
  { value: 'KES 5B+', label: 'Fund Target' },
  { value: '15%+', label: 'Target Returns' },
  { value: '500+', label: 'Projects Funded' },
  { value: '5+', label: 'Years Track Record' },
]

export default function SpecialFund() {
  return (
    <>
      {/* Hero Banner */}
      <PageBanner
        title="AYEDOS Special Fund"
        subtitle="An investment and financing vehicle designed to support innovative projects, housing development, infrastructure, and economic development initiatives."
      />

      {/* Overview */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h2 className="text-3xl sm:text-4xl font-bold text-ayedos-bluegray mb-6">
                Driving Growth Through{' '}
                <span className="text-ayedos-green">Strategic Investment</span>
              </h2>
              <p className="text-ayedos-charcoal/70 leading-relaxed mb-6">
                The AYEDOS Special Fund is a purpose-driven investment vehicle that combines
                financial returns with measurable social impact. We invest in projects that
                matter — housing, infrastructure, sustainable development, and innovative
                enterprises that drive economic growth.
              </p>
              <p className="text-ayedos-charcoal/70 leading-relaxed mb-6">
                Our fund leverages the power of blockchain technology, tokenization, and
                securitization to provide investors with unprecedented access to high-quality
                investment opportunities while maintaining the highest standards of transparency
                and security.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Housing', 'Infrastructure', 'Sustainable', 'Commercial', 'Innovation'].map((item, index) => (
                  <span key={index} className="px-4 py-2 bg-ayedos-green/10 text-ayedos-green rounded-lg text-sm font-semibold">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div data-aos="fade-left">
              <ImagePlaceholder height="400px" label="Special Fund Overview" className="shadow-xl" src="/images/ecofriendly-building-modern-city-generative-ai.jpg" />
            </div>
          </div>
        </div>
      </section>

      {/* Fund Objectives */}
      <section className="py-20 lg:py-28 bg-ayedos-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-ayedos-bluegray mb-6">
              Fund <span className="text-ayedos-green">Objectives</span>
            </h2>
            <p className="text-lg text-ayedos-charcoal/70">
              Our strategic objectives guide every investment decision we make.
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
          <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-ayedos-bluegray mb-6">
              Investment <span className="text-ayedos-green">Opportunities</span>
            </h2>
            <p className="text-lg text-ayedos-charcoal/70">
              Diversified investment opportunities across multiple sectors and asset classes.
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
                <ImagePlaceholder height="200px" label={item.title} src={item.image} />
                <div className="p-6 bg-white">
                  <span className="inline-block px-3 py-1 bg-ayedos-green/10 text-ayedos-green text-xs font-semibold rounded-full mb-3">
                    {item.label}
                  </span>
                  <h3 className="text-lg font-bold text-ayedos-bluegray mb-2">{item.title}</h3>
                  <p className="text-sm text-ayedos-charcoal/70">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fund Governance */}
      <section className="py-20 lg:py-28 bg-ayedos-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-ayedos-bluegray mb-6">
              Fund <span className="text-ayedos-green">Governance</span>
            </h2>
            <p className="text-lg text-ayedos-charcoal/70">
              Our commitment to transparency, compliance, and professional management.
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

      {/* Performance Highlights */}
      <StatsSection stats={fundStats} bgColor="bg-ayedos-green" />

      {/* CTA */}
      <CTASection
        title="Invest with AYEDOS Special Fund"
        subtitle="Discover how you can be part of transformative investments that generate both financial returns and positive social impact."
        buttonText="Contact Us About Investment Opportunities"
        buttonLink="/contact"
      />
    </>
  )
}
