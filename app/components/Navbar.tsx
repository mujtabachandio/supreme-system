'use client';
import React, { useState, useEffect, useMemo } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const router = useRouter();
  const pathname = usePathname(); // Get current route

  // Memoized navItems to prevent unnecessary re-renders
  const navItems = useMemo(
    () => [
      { id: 'home', label: 'Home' },
      { id: 'about', label: 'About' },
      { id: 'skills', label: 'Skills' },
      { id: 'project', label: 'Projects' },
      { id: 'contact', label: 'Contact' }, // Contact is a separate route
    ],
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => {
        const element = document.getElementById(item.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return { id: item.id, top: Math.abs(rect.top) };
        }
        return { id: item.id, top: Infinity };
      });

      const closest = sections.reduce((prev, curr) => (prev.top < curr.top ? prev : curr));

      setActiveSection(closest.id);
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]); // Added navItems to dependencies

  // Handle navigation and scrolling
  const scrollToSection = (id: string) => {
    setIsOpen(false); // Close the mobile menu

    if (id === 'contact') {
      router.push('/Contact');
      return;
    }

    if (pathname !== '/') {
      router.push(`/#${id}`);
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    } else {
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  };

  // Scroll to section on page load if a hash is present
  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash) {
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span style={{ fontFamily: "var(--font-audiowide), sans-serif" }} className="text-2xl font-bold hover:text-white text-gray-300 duration-300">G.M.C</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                style={{ fontFamily: "var(--font-audiowide), sans-serif" }}
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative transition-all duration-200 px-3 py-2 text-2xl ${
                    activeSection === item.id ? 'text-white' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.span layoutId="underline" className="absolute bottom-0 left-0 w-full h-0.5 bg-white" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
            style={{ fontFamily: "var(--font-audiowide), sans-serif" }}
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-600 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
        transition={{ duration: 0.3 }}
        className={`md:hidden bg-black ${isOpen ? 'block' : 'hidden'}`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <button
            style={{ fontFamily: "var(--font-audiowide), sans-serif" }}
              key={item.id}
              onClick={() => {
                setIsOpen(false);
                setTimeout(() => scrollToSection(item.id), 200);
              }}
              className={`block w-full text-left px-3 py-2 text-base font-medium transition-colors duration-200 ${
                activeSection === item.id ? 'text-[#7A0BC0]' : 'text-white hover:text-[#7A0BC0]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
