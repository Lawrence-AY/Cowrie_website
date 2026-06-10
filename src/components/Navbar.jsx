import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenu, HiX, HiChevronDown } from 'react-icons/hi';

// navItems now includes children for both DEX and MLP
const navItems = [
  { name: 'Home', path: '/' },
  {
    name: 'MLP',
    path: '/mlp',
    tooltip: 'Cowrie Mortgage Liquidity Platform',
  },
  {
    name: 'DEX',
    path: '/dex',
    label: 'Cowrie Digital Exchange',
    children: [
      { name: 'Commercial', path: '/dex/commercial' },
      { name: 'Public Sector', path: '/dex/public-sector' },
    ],
  },
  {
    name: 'SIF',
    path: '/special-fund',
    tooltip: 'Cowrie Special Investment Fund',
  },
  { name: 'Contact', path: '/contact' },
];

const extendedNames = {
  DEX: 'Cowrie Digital Exchange',
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(null);
  const location = useLocation();
  const isFirstRender = useRef(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes (but not on first render)
  useEffect(() => {
    if (!isFirstRender.current) {
      setIsOpen(false);
      setMobileSubmenuOpen(null);
    }
    isFirstRender.current = false;
  }, [location.pathname]);

  const isActive = (item) => {
    if (item.path === location.pathname) return true;
    if (item.children?.length > 0) {
      return item.children.some((child) => child.path === location.pathname);
    }
    return false;
  };

  const toggleMobileSubmenu = (name) => {
    setMobileSubmenuOpen(mobileSubmenuOpen === name ? null : name);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-ayedos-bluegray shadow-lg py-2'
          : 'bg-ayedos-bluegray/95 py-4'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group" aria-label="AYEDOS COWRIE Home">
            <img
              src="/icon-dark-landscape.png"
              alt="Ayedos Cowrie Logo"
              className="h-8 sm:h-10 md:h-12 w-auto max-w-45 sm:max-w-[220px] md:max-w-full object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => {
              const active = isActive(item);
              const hasChildren = !!item.children?.length;

              if (hasChildren) {
                return (
                  <div key={item.path} className="relative group">
                    <Link
                      to={item.path}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 inline-flex items-center gap-1 ${
                        active
                          ? 'text-ayedos-green bg-white/10'
                          : 'text-white/80 hover:text-white hover:bg-white/5'
                      }`}
                      aria-expanded="false"
                      aria-haspopup="true"
                    >
                      {item.name}
                      <HiChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
                    </Link>
                    <div 
                      className="absolute left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50"
                      role="menu"
                    >
                      <div className="bg-ayedos-bluegray border border-white/10 rounded-lg shadow-lg py-2">
                        <div className="px-4 py-2 text-xs font-bold text-ayedos-green tracking-wide border-b border-white/10 mb-1">
                          {item.label}
                        </div>
                        {item.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className={`block px-4 py-2 text-sm transition-colors ${
                              location.pathname === child.path
                                ? 'text-ayedos-green bg-white/10'
                                : 'text-white/70 hover:text-white hover:bg-white/5'
                            }`}
                            role="menuitem"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              // Item with tooltip only (MLP, SIF) – show extended name on hover
              if (item.tooltip) {
                return (
                  <div key={item.path} className="relative group">
                    <Link
                      to={item.path}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        active
                          ? 'text-ayedos-green bg-white/10'
                          : 'text-white/80 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {item.name}
                    </Link>
                    <div className="absolute left-1/2 -translate-x-1/2 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 whitespace-nowrap">
                      <div className="bg-gray-900 border border-white/10 rounded-lg shadow-lg px-4 py-2 text-xs text-ayedos-green font-semibold tracking-wide">
                        {item.tooltip}
                      </div>
                    </div>
                  </div>
                );
              }

              // Regular link (e.g., Home, Contact)
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    active
                      ? 'text-ayedos-green bg-white/10'
                      : 'text-white/80 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-ayedos-bluegray border-t border-white/10 px-4 py-2 space-y-1">
          {navItems.map((item) => {
            const active = isActive(item);
            const hasChildren = !!item.children?.length;

            if (hasChildren) {
              const isSubmenuOpen = mobileSubmenuOpen === item.name;
              return (
                <div key={item.path} className="space-y-1">
                  <button
                    onClick={() => toggleMobileSubmenu(item.name)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                      active
                        ? 'text-ayedos-green bg-white/10'
                        : 'text-white/70 hover:text-white hover:bg-white/5'
                    }`}
                    aria-expanded={isSubmenuOpen}
                    aria-controls={`submenu-${item.name}`}
                  >
                    <span>{item.name}</span>
                    <HiChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isSubmenuOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                  <div
                    id={`submenu-${item.name}`}
                    className={`pl-4 space-y-1 overflow-hidden transition-all duration-300 ${
                      isSubmenuOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                    role="menu"
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        className={`block px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                          location.pathname === child.path
                            ? 'text-ayedos-green bg-white/10'
                            : 'text-white/70 hover:text-white hover:bg-white/5'
                        }`}
                        role="menuitem"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  active
                    ? 'text-ayedos-green bg-white/10'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
