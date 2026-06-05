import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    alert('Thank you for your message. We will get back to you shortly.')
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: '',
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-ayedos-charcoal mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            required
            value={formData.fullName}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-ayedos-light bg-white text-ayedos-charcoal placeholder:text-ayedos-charcoal/40 focus:outline-none focus:ring-2 focus:ring-ayedos-green focus:border-transparent transition-all"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-ayedos-charcoal mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-ayedos-light bg-white text-ayedos-charcoal placeholder:text-ayedos-charcoal/40 focus:outline-none focus:ring-2 focus:ring-ayedos-green focus:border-transparent transition-all"
            placeholder="john@example.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-ayedos-charcoal mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-ayedos-light bg-white text-ayedos-charcoal placeholder:text-ayedos-charcoal/40 focus:outline-none focus:ring-2 focus:ring-ayedos-green focus:border-transparent transition-all"
            placeholder="+254 700 000 000"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-ayedos-charcoal mb-2">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-ayedos-light bg-white text-ayedos-charcoal placeholder:text-ayedos-charcoal/40 focus:outline-none focus:ring-2 focus:ring-ayedos-green focus:border-transparent transition-all"
            placeholder="Your Company Ltd"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-ayedos-charcoal mb-2">
          Subject *
        </label>
        <select
          id="subject"
          name="subject"
          required
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-ayedos-light bg-white text-ayedos-charcoal focus:outline-none focus:ring-2 focus:ring-ayedos-green focus:border-transparent transition-all"
        >
          <option value="">Select a subject</option>
          <option value="MLP">Mortgage Liquidity Platform</option>
          <option value="DEX">Digital Exchange</option>
          <option value="Cowrie Special Investment Fund">Cowrie Special Investment Fund</option>
          <option value="Partnership">Partnership Inquiry</option>
          <option value="General">General Inquiry</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-ayedos-charcoal mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-ayedos-light bg-white text-ayedos-charcoal placeholder:text-ayedos-charcoal/40 focus:outline-none focus:ring-2 focus:ring-ayedos-green focus:border-transparent transition-all resize-none"
          placeholder="Tell us about your inquiry..."
        />
      </div>

      <button
        type="submit"
        className="w-full sm:w-auto px-8 py-4 bg-ayedos-green text-white font-semibold rounded-xl hover:bg-ayedos-green/90 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
      >
        Send Message
      </button>
    </form>
  )
}
