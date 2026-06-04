export default function ImagePlaceholder({
  width = '100%',
  height = '300px',
  label = 'Image Placeholder',
  className = '',
}) {
  return (
    <div
      className={`bg-ayedos-light rounded-xl flex items-center justify-center ${className}`}
      style={{ width, height, minHeight: height }}
    >
      <div className="text-center px-6">
        <svg
          className="mx-auto mb-3 text-ayedos-charcoal/30"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21 15 16 10 5 21" />
        </svg>
        <span className="text-ayedos-charcoal/50 text-sm font-medium">{label}</span>
      </div>
    </div>
  )
}
