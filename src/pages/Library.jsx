import { Link } from 'react-router-dom'
import { HiBookOpen, HiDocumentText, HiScale, HiShieldCheck, HiArrowRight } from 'react-icons/hi'
import SEO from '../components/SEO'
import PageBanner from '../components/PageBanner'

const resources = [
  {
    icon: <HiShieldCheck size={28} />,
    title: 'Cookie Policy',
    description: 'Learn how we use cookies and similar technologies on our website to enhance your browsing experience.',
    link: '/cookie-policy',
    label: 'Privacy',
  },
  {
    icon: <HiScale size={28} />,
    title: 'Terms & Conditions',
    description: 'Understand the terms and conditions governing the use of our website and services.',
    link: '/terms-and-conditions',
    label: 'Legal',
  },
  {
    icon: <HiDocumentText size={28} />,
    title: 'DEX Whitepaper',
    description: 'Explore the technical details of the Cowrie Digital Exchange, including tokenization and securitization mechanisms.',
    link: '#',
    label: 'Coming Soon',
  },
  {
    icon: <HiDocumentText size={28} />,
    title: 'MLP Overview',
    description: 'A comprehensive guide to the Mortgage Liquidity Platform and its role in real estate finance.',
    link: '#',
    label: 'Coming Soon',
  },
  {
    icon: <HiDocumentText size={28} />,
    title: 'Investment Fund Prospectus',
    description: 'Detailed information about the Cowrie Special Investment Fund, investment strategies, and governance.',
    link: '#',
    label: 'Coming Soon',
  },
  {
    icon: <HiBookOpen size={28} />,
    title: 'Knowledge Base',
    description: 'Access our collection of articles, guides, and FAQs about blockchain, tokenization, and digital finance.',
    link: '#',
    label: 'Coming Soon',
  },
]

export default function Library() {
  return (
    <>
      <SEO
        title="Resource Library"
        description="Access whitepapers, documentation, and legal policies for AYEDOS COWRIE platforms including MLP, DEX, and more."
        path="/library"
      />

      <PageBanner
        title="Library"
        subtitle="Access resources, documentation, and legal policies related to AYEDOS COWRIE and our platforms."
      />

      {/* Resource Grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <div
                key={resource.title}
                className="group bg-ayedos-light/50 border border-ayedos-light rounded-xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="w-14 h-14 bg-ayedos-green/10 rounded-xl flex items-center justify-center text-ayedos-green mb-5 group-hover:bg-ayedos-green group-hover:text-white transition-all duration-300">
                  {resource.icon}
                </div>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-ayedos-bluegray/10 text-ayedos-bluegray text-xs font-semibold mb-4">
                  {resource.label}
                </div>
                <h3 className="text-xl font-bold text-ayedos-bluegray mb-3">{resource.title}</h3>
                <p className="text-sm text-ayedos-charcoal/70 leading-relaxed mb-6">
                  {resource.description}
                </p>
                {resource.link !== '#' ? (
                  <Link
                    to={resource.link}
                    className="inline-flex items-center gap-2 text-ayedos-green font-semibold text-sm hover:gap-3 transition-all"
                  >
                    Read More
                    <HiArrowRight size={16} />
                  </Link>
                ) : (
                  <span className="inline-flex items-center gap-2 text-ayedos-charcoal/40 font-semibold text-sm">
                    Coming Soon
                    <HiArrowRight size={16} />
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-ayedos-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-ayedos-bluegray mb-6" data-aos="fade-up">
            Can't Find What You're <span className="text-ayedos-green">Looking For?</span>
          </h2>
          <p className="text-lg text-ayedos-charcoal/70 mb-8" data-aos="fade-up" data-aos-delay="100">
            Our team is ready to assist you with any questions about our platforms, products, or documentation.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-ayedos-green text-white font-semibold rounded-xl hover:bg-ayedos-green/90 transition-all duration-300 hover:shadow-xl"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Contact Us
            <HiArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  )
}
