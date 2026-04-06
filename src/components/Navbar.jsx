import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: isHomePage ? '#' : '/' },
    { name: 'Plans', href: isHomePage ? '#plans' : '/#plans' },
    { name: 'Trainers', href: isHomePage ? '#trainers' : '/#trainers' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav
      className={clsx(
        'fixed top-0 w-full z-50 transition-all duration-300 border-b',
        isScrolled ? 'bg-black/80 backdrop-blur-md border-white/5 py-4' : 'bg-transparent border-transparent py-6'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold tracking-tighter uppercase">Hivnk<span className="text-red-600">.</span></Link>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-[#a1a1a1] hover:text-white transition-colors text-sm font-medium uppercase tracking-wider">
                {link.name}
              </a>
            ))}
            <Link to="/join" className="bg-white text-black px-6 py-2 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-gray-200 transition-colors">
              Join Now
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0a0a] border-b border-white/5 absolute w-full left-0 top-full">
          <div className="px-2 pt-2 pb-6 space-y-1 sm:px-3 flex flex-col items-center">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-3 text-base font-medium text-[#a1a1a1] hover:text-white uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
            <Link to="/join" onClick={() => setMobileMenuOpen(false)} className="w-11/12 mt-4 bg-white text-black px-6 py-3 rounded-full font-bold uppercase tracking-wider text-sm text-center">
              Join Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
