import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sun, Moon, Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
    toggleTheme: (theme: string) => void;
    currentTheme: string;
}

export const Navbar: React.FC<NavbarProps> = ({ toggleTheme, currentTheme }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="fixed w-full z-50 top-0">
            {/* Sales Promotional Banner */}
            <div className="w-full bg-red-600 text-white px-4 py-2 shadow-sm transition-colors">
                <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 text-center">
                    <span className="flex h-2 w-2 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-200 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                    </span>
                    <p className="text-xs sm:text-sm font-medium tracking-wide">
                        Special Launch Offer: <strong className="font-bold underline">Start Your 30-Day Free Trial Today</strong>
                    </p>
                    <Link
                        to="/contact"
                        className="hidden sm:inline-flex items-center gap-1 bg-white text-red-600 hover:bg-red-50 px-3 py-1 rounded-full text-xs font-bold transition-all shadow-sm"
                    >
                        Claim Offer <ArrowRight size={12} />
                    </Link>
                </div>
            </div>

            {/* Main Navigation */}
            <nav className="bg-nav-bg transition-colors duration-300 border-b border-black/5 dark:border-white/5 shadow-sm">
                <div className="text-nav-text max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="text-2xl font-black bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
                        KAVASS
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex gap-8 text-sm font-medium">
                        <Link to="/" className="hover:text-blue-500 transition-colors">Home</Link>
                        <Link to="/about" className="hover:text-blue-500 transition-colors">Questions?</Link>
                        <Link to="/portfolio" className="hover:text-blue-500 transition-colors">Showcase</Link>
                        <Link to="/pricing" className="hover:text-blue-500 transition-colors">Pricing</Link>
                    </div>

                    {/* Actions & Mobile Toggle */}
                    <div className="flex items-center gap-4">
                        <button onClick={() => toggleTheme(currentTheme)} className="p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors">
                            {currentTheme === 'light' ? <Sun size={20} /> : <Moon size={20} />}
                        </button>

                        <Link to="/contact" className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full font-semibold transition-colors">
                            Let's Talk
                        </Link>

                        {/* Mobile Hamburger Button */}
                        <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Dropdown Menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-nav-bg border-t border-nav-border p-6 flex flex-col gap-4 text-nav-text animate-in fade-in slide-in-from-top-4 duration-300">
                        <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
                        <Link to="/about" onClick={() => setIsMenuOpen(false)}>Questions?</Link>
                        <Link to="/portfolio" onClick={() => setIsMenuOpen(false)}>Showcase</Link>
                        <Link to="/pricing" onClick={() => setIsMenuOpen(false)}>Pricing</Link>
                        <Link to="/contact" className="bg-blue-600 text-white px-5 py-2 rounded-full text-center" onClick={() => setIsMenuOpen(false)}>
                            Let's Talk
                        </Link>
                    </div>
                )}
            </nav>
        </div>
    );
};
