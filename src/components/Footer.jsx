import { Link } from 'react-router-dom'
import { HiLocationMarker, HiPhone, HiMail } from 'react-icons/hi'
import { FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-ayedos-bluegray text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="inline-flex items-center gap-3">
              <img 
                src="/icon-dark-landscape.png" 
                alt="Ayedos Cowrie Logo" 
                className="h-8 sm:h-10 md:h-12 w-auto max-w-full object-contain" 
              />
            </Link>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <HiLocationMarker className="text-ayedos-green mt-0.5 shrink-0" size={18} />
                <div className="flex flex-col">

                <span className="text-white/75 text-sm">
                  1st Floor Africa Reit House, Karen
                </span>
                 <span className="text-white/75 text-sm">
                   Africa Reit Lane, Karen
                  </span>
                <span className="text-white/75 text-sm">
                   Nairobi, Kenya
                  </span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <HiPhone className="text-ayedos-green shrink-0" size={18} />
                <a href="tel:+254733556127" className="text-white/75 hover:text-ayedos-green text-sm transition-colors">
                  +254 733 556 127
                </a>
              </li>
              <li className="flex items-center gap-3">
                <HiMail className="text-ayedos-green shrink-0" size={18} />
                <a href="mailto:info@cowriex.io" className="text-white/75 hover:text-ayedos-green text-sm transition-colors">
                  info@cowriex.io
                </a>
              </li>
            </ul>
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
            <div className="flex flex-col sm:flex-row gap-6 md:gap-12 lg:gap-20">
              <div className="flex-1">
                <ul className="space-y-3">
                  {[
                    { name: 'Home', path: '/' },
                    { name: 'MLP', path: '/mlp' },
                    { name: 'DEX', path: '/dex' },
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
              <div className="flex-1">
                <ul className="space-y-3">
                  {[
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
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm text-center sm:text-left">
              &copy; {new Date().getFullYear()} AYEDOS COWRIE. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/cookie-policy" className="text-white/40 hover:text-white text-xs transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-and-conditions" className="text-white/40 hover:text-white text-xs transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}