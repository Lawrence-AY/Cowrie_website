import { useState } from 'react'
import { HiChevronDown } from 'react-icons/hi'

export default function FAQAccordion({ items = [] }) {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="border border-ayedos-light rounded-xl overflow-hidden transition-all duration-300"
        >
          <button
            onClick={() => toggle(index)}
            className={`w-full flex items-center justify-between px-6 py-5 text-left transition-colors ${
              openIndex === index ? 'bg-ayedos-green/5' : 'bg-white hover:bg-ayedos-light/50'
            }`}
          >
            <span className="font-semibold text-ayedos-charcoal pr-4">{item.question}</span>
            <HiChevronDown
              className={`text-ayedos-green shrink-0 transition-transform duration-300 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
              size={20}
            />
          </button>
          <div
            className={`transition-all duration-300 overflow-hidden ${
              openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="px-6 pb-5 pt-2 text-sm text-ayedos-charcoal/70 leading-relaxed border-t border-ayedos-light">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
