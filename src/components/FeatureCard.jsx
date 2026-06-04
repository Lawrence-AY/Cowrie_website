export default function FeatureCard({
  icon,
  title,
  description,
  bgColor = 'bg-white',
  textColor = 'text-ayedos-charcoal',
  borderColor = 'border-ayedos-light',
}) {
  return (
    <div
      className={`${bgColor} ${borderColor} border rounded-xl p-6 sm:p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group`}
      data-aos="fade-up"
    >
      {icon && (
        <div className="w-14 h-14 bg-ayedos-green/10 rounded-xl flex items-center justify-center mb-5 text-ayedos-green group-hover:bg-ayedos-green group-hover:text-white transition-all duration-300">
          {icon}
        </div>
      )}
      <h3 className={`text-lg font-bold mb-3 ${textColor}`}>{title}</h3>
      <p className="text-sm leading-relaxed">{description}</p>
    </div>
  )
}
