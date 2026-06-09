/**
 * Reusable section layout component to reduce duplication
 * Handles common section patterns: title, subtitle, content grid
 */

export default function SectionLayout({
  title,
  subtitle,
  highlightedWord,
  children,
  bgColor = 'bg-white',
  maxWidth = 'max-w-7xl',
  spacing = 'py-20 lg:py-28',
  titleSize = 'text-3xl sm:text-4xl',
  centered = true,
  animate = true,
  contentMaxWidth = 'max-w-3xl',
}) {
  return (
    <section className={`${spacing} ${bgColor}`}>
      <div className={`${maxWidth} mx-auto px-4 sm:px-6 lg:px-8`}>
        {/* Section Header */}
        {(title || subtitle) && (
          <div 
            className={`${centered ? 'text-center' : ''} ${centered ? contentMaxWidth : ''} ${centered ? 'mx-auto' : ''} mb-16`}
            data-aos={animate ? 'fade-up' : ''}
          >
            {title && (
              <h2 className={`${titleSize} font-bold text-ayedos-bluegray mb-6`}>
                {highlightedWord ? (
                  <>
                    {title.split(highlightedWord)[0]}
                    <span className="text-ayedos-green">{highlightedWord}</span>
                    {title.split(highlightedWord)[1]}
                  </>
                ) : (
                  title
                )}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-ayedos-charcoal/70">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* Section Content */}
        {children}
      </div>
    </section>
  )
}
