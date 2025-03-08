import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { ChefHat } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'About', to: 'about' },
    { name: 'Process', to: 'process' },
    { name: 'Menu', to: 'menu' },
    { name: 'Testimonials', to: 'testimonials' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="flex items-center gap-2 cursor-pointer"
          >
            <ChefHat size={32} className="text-orange-500" />
            <span className={`font-bold text-xl ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
              Hands on Food
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {menuItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                duration={500}
                className={`cursor-pointer font-medium hover:text-orange-500 transition-colors ${
                  isScrolled ? 'text-gray-600' : 'text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;