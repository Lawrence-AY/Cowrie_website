export default function PageBanner({
  title,
  subtitle,
  bgColor = 'bg-ayedos-bluegray',
  accentColor = 'text-ayedos-green',
}) {
  return (
    <section className={`${bgColor} relative overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-20`}>
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl" data-aos="fade-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          )}
          <div className="w-20 h-1 bg-ayedos-green rounded-full mt-6" />
        </div>
      </div>
    </section>
  )
}
