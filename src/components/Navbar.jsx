import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenu, HiX, HiChevronDown } from 'react-icons/hi';

// navItems now includes children for both DEX and MLP
const navItems = [
  { name: 'Home', path: '/' },
  {
    name: 'MLP',
    path: '/mlp',
    children: [
      { },    
      
    ],
  },
  {
    name: 'DEX',
    path: '/dex',
    children: [
      { name: 'Commercial', path: '/dex/commercial' },
      { name: 'PublicSector', path: '/dex/public-sector' },
    ],
  },
  { name: 'SIF', path: '/special-fund' ,
    children: [
      { },    
      
    ],
  },
 
  { name: 'Contact', path: '/contact' },
];

// Extended names shown as headers inside the dropdowns
const extendedNames = {
  MLP: 'Cowrie Mortgage Liquidity Platform',
  DEX: 'Cowrie Digital Exchange',
  SIF:'Cowrie Special Investment Fund'
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (item) => {
    if (item.path === location.pathname) return true;
    if (item.children) {
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
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/icon-dark-landscape.png"
              alt="Ayedos Cowrie Logo"
              className="h-8 sm:h-10 md:h-12 w-auto max-w-[180px] sm:max-w-[220px] md:max-w-full object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => {
              const active = isActive(item);
              const hasChildren = !!item.children?.length;

              // For any item with children (MLP or DEX) – show dropdown with header
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
                    >
                      {item.name}
                      <HiChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
                    </Link>
                    <div className="absolute left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="bg-ayedos-bluegray border border-white/10 rounded-lg shadow-lg py-2">
                        {/* Header with extended name */}
                        <div className="px-4 py-2 text-xs font-bold text-ayedos-green tracking-wide border-b border-white/10 mb-1">
                          {extendedNames[item.name]}
                        </div>
                        {item.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className={`block px-4 py-2 text-sm ${
                              location.pathname === child.path
                                ? 'text-ayedos-green bg-white/10'
                                : 'text-white/70 hover:text-white hover:bg-white/5'
                            }`}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              // Regular link (e.g., Home, Investment Fund, Contact)
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
            aria-label="Toggle menu"
          >
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-[calc(100vh-4rem)] opacity-100' : 'max-h-0 opacity-0'
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
                  >
                    <span>{item.name}</span>
                    <HiChevronDown
                      className={`w-4 h-4 transition-transform ${
                        isSubmenuOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`pl-4 space-y-1 overflow-hidden transition-all duration-200 ${
                      isSubmenuOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        onClick={() => {
                          setIsOpen(false);
                          setMobileSubmenuOpen(null);
                        }}
                        className={`block px-4 py-2 rounded-lg text-sm font-medium ${
                          location.pathname === child.path
                            ? 'text-ayedos-green bg-white/10'
                            : 'text-white/70 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            // Regular mobile link
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
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
