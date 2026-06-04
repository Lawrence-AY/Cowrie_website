import { Link } from 'react-router-dom'

export default function CTASection({
  title,
  subtitle,
  buttonText = 'Contact Us',
  buttonLink = '/contact',
  bgColor = 'bg-ayedos-green',
  dark = false,
}) {
  return (
    <section className={`${bgColor} py-16 lg:py-20 relative overflow-hidden`}>
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div data-aos="fade-up">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight ${
            dark ? 'text-white' : 'text-white'
          }`}>
            {title}
          </h2>
          {subtitle && (
            <p className={`text-lg sm:text-xl mb-10 max-w-2xl mx-auto leading-relaxed ${
              dark ? 'text-white/80' : 'text-white/80'
            }`}>
              {subtitle}
            </p>
          )}
          <Link
            to={buttonLink}
            className={`inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 hover:scale-105 ${
              dark
                ? 'bg-white text-ayedos-green hover:bg-white/90'
                : 'bg-white text-ayedos-green hover:bg-white/90'
            }`}
          >
            {buttonText}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
