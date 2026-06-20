import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';

interface NavbarProps {
    toggleTheme: (theme: string) => void;
    currentTheme: string;
}

export const Navbar: React.FC<NavbarProps> = ({ toggleTheme, currentTheme }) => (
    <nav className="fixed w-full z-50 top-0 bg-nav border-navBorder transition-colors duration-300">
        <div className="text-navText max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <Link to="/" className="text-2xl font-black bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
                KAVASS
            </Link>
            <div className="hidden md:flex gap-8 text-sm font-medium">
                <Link to="/hero" className="hover:text-blue-500 transition-colors">Home</Link>
                <Link to="/about" className="hover:text-blue-500 transition-colors">Questions?</Link>
                <Link to="/portfolio" className="hover:text-blue-500 transition-colors">Showcase</Link>
                <Link to="/pricing" className="hover:text-blue-500 transition-colors">Pricing</Link>
            </div>
            <div className="flex items-center gap-4">
                <button onClick={() => toggleTheme(currentTheme)} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors">
                    {currentTheme === 'light' ? <Sun size={20} className="text-white" /> : <Moon size={20} className="text-gray-900" />}
                </button>
                <Link to="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full font-semibold transition-colors">
                    Let's Talk
                </Link>
            </div>
        </div>
    </nav>
);