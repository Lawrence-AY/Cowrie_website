/**
 * Loading spinner component for async operations
 */

export default function LoadingSpinner({ 
  size = 'md', 
  text = 'Loading...',
  fullScreen = false 
}) {
  const sizeClasses = {
    sm: 'w-4 h-4 border-2',
    md: 'w-8 h-8 border-3',
    lg: 'w-12 h-12 border-4',
  }

  const spinner = (
    <div className="flex items-center gap-3">
      <div 
        className={`${sizeClasses[size]} border-ayedos-green/30 border-t-ayedos-green rounded-full animate-spin`}
      />
      {text && <span className="text-ayedos-charcoal">{text}</span>}
    </div>
  )

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50">
        {spinner}
      </div>
    )
  }

  return spinner
}
