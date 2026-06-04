export default function BenefitCard({
  icon,
  title,
  items = [],
  bgColor = 'bg-white',
  borderColor = 'border-ayedos-light',
}) {
  return (
    <div
      className={`${bgColor} ${borderColor} border rounded-xl p-6 sm:p-8 transition-all duration-300 hover:shadow-lg`}
      data-aos="fade-up"
    >
      {icon && (
        <div className="w-14 h-14 bg-ayedos-green/10 rounded-xl flex items-center justify-center mb-5 text-ayedos-green">
          {icon}
        </div>
      )}
      <h3 className="text-lg font-bold text-ayedos-charcoal mb-4">{title}</h3>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className="w-5 h-5 bg-ayedos-green/20 rounded-full flex items-center justify-center mt-0.5 shrink-0">
              <svg className="w-3 h-3 text-ayedos-green" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="text-sm text-ayedos-charcoal/80">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
