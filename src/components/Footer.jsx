import { Link } from 'react-router-dom'
import { HiLocationMarker, HiPhone, HiMail } from 'react-icons/hi'
import { FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-ayedos-bluegray text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-ayedos-green rounded-lg flex items-center justify-center text-white font-bold">
                AC
              </div>
              <div>
                <div className="text-white font-bold text-lg">AYEDOS</div>
                <div className="text-ayedos-green font-bold text-lg -mt-1">COWRIE</div>
              </div>
            </Link>
            <p className="text-white/75 text-sm leading-relaxed">
              Catalysing commerce through innovative financial solutions powered by
              blockchain technology, tokenization, and securitization.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3 pt-2">
              <a href="#" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-ayedos-green transition-colors" aria-label="LinkedIn">
                <FaLinkedin size={16} />
              </a>
              <a href="#" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-ayedos-green transition-colors" aria-label="Twitter">
                <FaTwitter size={16} />
              </a>
              <a href="#" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-ayedos-green transition-colors" aria-label="Facebook">
                <FaFacebook size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'MLP', path: '/mlp' },
                { name: 'DEX', path: '/dex' },
                { name: 'Investment Fund', path: '/special-fund' },
                { name: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/75 hover:text-ayedos-green text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">
              Solutions
            </h3>
            <ul className="space-y-3">
              {[
                'Mortgage Liquidity Platform',
                'Digital Exchange',
                'Cowrie Special Investment Fund',
                'Tokenization',
                'Securitization',
              ].map((item) => (
                <li key={item}>
                  <span className="text-white/75 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <HiLocationMarker className="text-ayedos-green mt-0.5 shrink-0" size={18} />
                <span className="text-white/75 text-sm">
                  Nairobi, Kenya
                </span>
              </li>
              <li className="flex items-center gap-3">
                <HiPhone className="text-ayedos-green shrink-0" size={18} />
                <a href="tel:+254733 556127" className="text-white/75 hover:text-ayedos-green text-sm transition-colors">
                  +254 733 556127
                </a>
              </li>
              <li className="flex items-center gap-3">
                <HiMail className="text-ayedos-green shrink-0" size={18} />
                <a href="mailto:info@ayedoscowrie.com" className="text-white/75 hover:text-ayedos-green text-sm transition-colors">
                  info@ayedoscowrie.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm">
              &copy; {new Date().getFullYear()} AYEDOS COWRIE. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-white/40 hover:text-white text-xs transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/40 hover:text-white text-xs transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
