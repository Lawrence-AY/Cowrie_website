import { HiLocationMarker, HiPhone, HiMail, HiClock } from 'react-icons/hi'
import PageBanner from '../components/PageBanner'
import ContactForm from '../components/ContactForm'
import FAQAccordion from '../components/FAQAccordion'
import CTASection from '../components/CTASection'

const contactInfo = [
  {
    icon: <HiLocationMarker size={24} />,
    title: 'Our Address',
    content: ['Africa Reit House, 1st Floor', 'Africa Reit Lane, Nairobi, Kenya'],
  },
  {
    icon: <HiPhone size={24} />,
    title: 'Phone Number',
    content: '+254 733 556127',
    href: 'tel:+254733556127',
  },
  {
    icon: <HiMail size={24} />,
    title: 'Email Address',
    content: 'info@cowriex.io',
    href: 'mailto:info@cowriex.io',
  },
  {
    icon: <HiClock size={24} />,
    title: 'Business Hours',
    content: 'Mon - Fri: 8:00 AM - 5:00 PM',
  },
]

const faqItems = [
  {
    question: 'What is AYEDOS COWRIE?',
    answer: 'AYEDOS COWRIE is a financial technology platform that leverages blockchain technology, tokenization, and securitization to deliver innovative liquidity solutions across private and public finance. We operate the Mortgage Liquidity Platform (MLP) and Digital Exchange (DEX).',
  },
  {
    question: 'What is the Mortgage Liquidity Platform (MLP)?',
    answer: 'MLP is a platform that connects developers, homebuyers, and investors in the real estate sector. It offers rent-to-own schemes, mortgage financing, development finance, and tokenized real estate investments, making home ownership more accessible.',
  },
  {
    question: 'What is the Digital Exchange (DEX)?',
    answer: 'DEX is a blockchain-based digital exchange that facilitates instant payments to suppliers by securitizing receivables and providing liquidity. It revolutionizes supply chain finance and public finance through tokenization and security tokens.',
  },
  {
    question: 'How does tokenization work?',
    answer: 'Tokenization is the process of converting ownership of real-world assets into digital security tokens. These tokens are immutably recorded, stored, traded, and transferred on the blockchain, allowing for fractional ownership and enhanced liquidity.',
  },
  {
    question: 'Is the platform regulated?',
    answer: 'Yes, DEX is a permissioned platform where all participants must pass through KYC and AML vetting. Security Tokens are embedded with compliance rules, and all transactions comply with CMA regulations and securities laws.',
  },
  {
    question: 'How can I invest in the Cowrie Special Investment Fund?',
    answer: 'You can contact us through our website form, email, or phone to learn about investment opportunities in the Cowrie Special Investment Fund. Our team will provide you with detailed information about fund objectives, performance, and investment process.',
  },
  {
    question: 'Who can use the MLP platform?',
    answer: 'MLP serves three main groups: Developers looking for project financing and offtake guarantees, Homebuyers seeking flexible financing options including rent-to-own, and Investors interested in diversified real estate portfolios through tokenized investments.',
  },
]

export default function Contact() {
  return (
    <>
      {/* Hero Banner */}
      <PageBanner
        title="Get In Touch"
        subtitle="We are eager to hear from you! Whether you are interested in our services or have a business proposal, please reach out to us."
        bgImage="/images/2.png"
      />

      {/* Contact Form + Info */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3" data-aos="fade-right">
              <h2 className="text-2xl sm:text-3xl font-bold text-ayedos-bluegray mb-2">
                Send Us a <span className="text-ayedos-green">Message</span>
              </h2>
              <p className="text-ayedos-charcoal/70 mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2" data-aos="fade-left">
              <h2 className="text-2xl sm:text-3xl font-bold text-ayedos-bluegray mb-2">
                Contact <span className="text-ayedos-green">Information</span>
              </h2>
              <p className="text-ayedos-charcoal/70 mb-8">
                Reach out to us through any of the following channels.
              </p>

              <div className="space-y-6 mb-10">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-5 bg-ayedos-light/50 rounded-xl border border-ayedos-light">
                    <div className="w-12 h-12 bg-ayedos-green/10 rounded-xl flex items-center justify-center text-ayedos-green shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-ayedos-bluegray text-sm mb-1">{item.title}</h3>
                      {item.href ? (
                        <a href={item.href} className="text-ayedos-charcoal/70 hover:text-ayedos-green text-sm transition-colors">
                          {item.content}
                        </a>
                      ) : Array.isArray(item.content) ? (
                        <p className="text-ayedos-charcoal/70 text-sm">
                          {item.content.map((line) => (
                            <span key={line} className="block">
                              {line}
                            </span>
                          ))}
                        </p>
                      ) : (
                        <p className="text-ayedos-charcoal/70 text-sm">{item.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Location Map */}
              <div className="rounded-xl overflow-hidden border border-ayedos-light bg-ayedos-light/40">
                <iframe
                  title="AYEDOS COWRIE location map"
                  src="https://www.google.com/maps?q=AYEDOS%20GROUP%20LIMITED%2C%20Africa%20Reit%20House%2C%201st%20Floor%20Africa%20Reit%20Lane%2C%20Nairobi%2C%20Kenya&output=embed"
                  className="h-[250px] w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-28 bg-ayedos-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-ayedos-bluegray mb-6">
              Frequently Asked <span className="text-ayedos-green">Questions</span>
            </h2>
            <p className="text-lg text-ayedos-charcoal/70">
              Find answers to common questions about AYEDOS COWRIE and our platforms.
            </p>
          </div>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* CTA Banner */}
      <CTASection
        title="Let's Start a Conversation"
        subtitle="Your ideas and feedback are invaluable as we strive to catalyze commerce and drive economic growth."
        buttonText="Call Us Today"
        buttonLink="tel:+254700000000"
      />
    </>
  )
}
