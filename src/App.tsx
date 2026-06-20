import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDarkMode } from './hooks/useDarkMode';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { Pricing } from './components/Pricing';
import { Contact } from './components/Contact';


export default function App() {
    const [colorTheme, setTheme] = useDarkMode();

    return (
        <Router basename="/kavass-app">
            <div className="min-h-screen flex flex-col bg-background transition-colors duration-300 font-sans pt-20">
                <Navbar toggleTheme={setTheme} currentTheme={colorTheme} />

                <main className="flex-grow">
                    <Routes >
                        <Route path="/" element={<Hero />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/portfolio" element={<Portfolio />} />
                        <Route path="/pricing" element={<Pricing />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>

                <footer className="py-8 text-center text-gray-500 dark:text-gray-600 border-t border-gray-200 dark:border-gray-800 mt-auto">
                    <p>© 2026 Kavass. Web design without the grid. All rights reserved by Yaseen Rashid</p>
                </footer>
            </div>
        </Router>
    );
}