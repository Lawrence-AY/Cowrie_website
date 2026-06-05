export default function StatsSection({
  stats = [],
  bgColor = 'bg-ayedos-bluegray',
}) {
  const valueColor = bgColor.includes('green') ? 'text-white' : 'text-ayedos-green'

  return (
    <section className={`${bgColor} py-16 lg:py-20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className={`text-3xl sm:text-4xl lg:text-5xl font-bold ${valueColor} mb-2`}>
                {stat.value}
              </div>
              <div className="text-sm sm:text-base text-white/70 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
