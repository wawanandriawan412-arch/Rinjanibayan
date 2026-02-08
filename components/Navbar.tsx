import React from 'react';
import { Page } from '../types';
import { Calculator, Menu, X } from 'lucide-react';

interface NavbarProps {
  currentPage: Page;
  setPage: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setPage }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = [
    { label: 'Beranda', value: Page.HOME },
 
  ];

  return (
    <nav className="bg-slate-900 border-b border-amber-500/30 sticky top-0 z-40 backdrop-blur-md bg-opacity-90">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            onClick={() => setPage(Page.HOME)}
            className="flex items-center cursor-pointer space-x-2"
          >
            <div className="bg-amber-500 p-2 rounded-lg">
                <Calculator className="text-slate-900" size={24} />
            </div>
            <div>
                <h1 className="font-serif font-bold text-xl text-white leading-none">RINJANI</h1>
                <p className="text-[10px] text-amber-400 font-semibold tracking-wider">SMPN 5 BAYAN</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => setPage(item.value)}
                className={`text-sm font-medium transition-colors hover:text-amber-400 ${
                  currentPage === item.value ? 'text-amber-400 border-b-2 border-amber-400' : 'text-slate-300'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => {
                  setPage(item.value);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                  currentPage === item.value
                    ? 'bg-slate-900 text-amber-400'
                    : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;