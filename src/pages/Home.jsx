import { Link } from 'react-router-dom'
import ImagePlaceholder from '../components/ImagePlaceholder'
import CTASection from '../components/CTASection'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-ayedos-bluegray overflow-hidden pt-20">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-20">
          <ImagePlaceholder
            width="100%"
            height="100%"
            label="Hero Background"
            className="rounded-none w-full h-full"
            src="/images/05.jpg"
          />
        </div>
        {/* Decorative elements */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-ayedos-green/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-ayedos-green/20 rounded-full text-ayedos-green text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-ayedos-green rounded-full animate-pulse" />
              Catalysing Commerce
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Catalysing Commerce{' '}
              <span className="text-ayedos-green">Through Innovation</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/85 leading-relaxed mb-10 max-w-xl">
              AYEDOS COWRIE reimagines markets and exchanges at the intersection of
              distributed ledger technology, tokenization, securitization, and
              information symmetry.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/mlp"
                className="inline-flex items-center gap-2 px-8 py-4 bg-ayedos-green text-white font-semibold rounded-xl hover:bg-ayedos-green/90 transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                Explore MLP
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                to="/dex"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                Explore DEX
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ayedos-bluegray mb-6">
              About <span className="text-ayedos-green">AYEDOS COWRIE</span>
            </h2>
            <p className="text-lg text-ayedos-charcoal/70 leading-relaxed">
              As long as humans have existed there has always been an inexorable flow of economic value
              from producer to consumer, oftentimes via markets and exchanges. AYEDOS COWRIE reimagines
              markets and exchanges as the intersection of distributed ledger technology (DLT),
              tokenization, securitization and information symmetry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Distributed Ledger Technology',
                description: 'Secure, transparent, and immutable blockchain infrastructure powering all our financial solutions.',
              },
              {
                title: 'Tokenization',
                description: 'Converting real-world assets into digital security tokens for fractional ownership and enhanced liquidity.',
              },
              {
                title: 'Securitization',
                description: 'Pooling financial assets and issuing security tokens backed by diversified revenue streams.',
              },
              {
                title: 'Liquidity Solutions',
                description: 'Innovative platforms that unlock capital and provide instant liquidity across private and public finance.',
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
                <p className="text-sm text-ayedos-charcoal/70 leading-relaxed">{item.description}</p>
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
                Revolutionising{' '}
                <span className="text-ayedos-green">Real Estate Finance</span>
              </h2>
              <p className="text-white/85 leading-relaxed mb-8">
                MLP bridges the gap between developers, landlords and homebuyers by offering a
                transparent technology-driven ecosystem for property acquisition. It makes home
                ownership more accessible through rent-to-own schemes, ordinary mortgages, and
                development finance.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  'Connects Developers',
                  'Connects Homebuyers',
                  'Connects Investors',
                  'Rent-to-Own Solutions',
                  'Mortgage Financing',
                  'Tokenized Real Estate',
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-ayedos-green/20 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-ayedos-green" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
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
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div data-aos="fade-left">
              <ImagePlaceholder height="400px" label="MLP Platform Preview" className="shadow-2xl" src="/images/03.jpg" />
            </div>
          </div>
        </div>
      </section>

      {/* DEX Preview Section */}
      <section className="py-20 lg:py-28 bg-ayedos-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1" data-aos="fade-right">
              <ImagePlaceholder height="400px" label="DEX Platform Preview" className="shadow-xl" src="/images/02.jpg" />
            </div>
            <div className="order-1 lg:order-2" data-aos="fade-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-ayedos-bluegray/20 rounded-full text-ayedos-bluegray text-sm font-medium mb-4">
                Digital Exchange
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-ayedos-bluegray mb-6">
                Powering the{' '}
                <span className="text-ayedos-green">Future of Finance</span>
              </h2>
              <p className="text-ayedos-charcoal/70 leading-relaxed mb-8">
                DEX is a digital exchange that leverages securitization and tokenization to deliver
                liquidity solutions in a secure permissioned blockchain environment. It revolutionizes
                supply chain finance and public finance through instant payments and enhanced liquidity.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  'Blockchain-Powered Exchange',
                  'Supply Chain Finance',
                  'Public Finance Solutions',
                  'Security Tokens',
                  'Liquidity Enhancement',
                  'Instant Payments',
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-ayedos-green/20 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-ayedos-green" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-ayedos-charcoal/80 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/dex"
                className="inline-flex items-center gap-2 px-6 py-3 bg-ayedos-bluegray text-white font-semibold rounded-xl hover:bg-ayedos-bluegray/90 transition-all duration-300 hover:shadow-lg"
              >
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
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
                Investment Vehicle
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-ayedos-bluegray mb-6">
                Cowrie Special{' '}
                <span className="text-ayedos-green">Investment Fund</span>
              </h2>
              <p className="text-ayedos-charcoal/70 leading-relaxed mb-6">
                The Cowrie Special Investment Fund is an investment and financing vehicle designed to support
                innovative projects, housing development, infrastructure, and economic development
                initiatives. It provides capital growth opportunities while driving positive social
                impact.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {['Capital Growth', 'Social Impact', 'Liquidity Support', 'Project Financing'].map((item, index) => (
                  <span key={index} className="px-4 py-2 bg-ayedos-light rounded-lg text-sm font-medium text-ayedos-charcoal">
                    {item}
                  </span>
                ))}
              </div>
              <Link
                to="/special-fund"
                className="inline-flex items-center gap-2 px-6 py-3 bg-ayedos-green text-white font-semibold rounded-xl hover:bg-ayedos-green/90 transition-all duration-300 hover:shadow-lg"
              >
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div data-aos="fade-left">
              <ImagePlaceholder height="400px" label="Cowrie Special Investment Fund Preview" className="shadow-xl" src="/images/06.jpg" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us
      <section className="py-20 lg:py-28 bg-ayedos-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ayedos-bluegray mb-6">
              Why Choose <span className="text-ayedos-green">AYEDOS COWRIE</span>
            </h2>
            <p className="text-lg text-ayedos-charcoal/70">
              We combine cutting-edge blockchain technology with deep financial expertise to deliver
              solutions that are secure, transparent, and efficient.
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
  )
}
