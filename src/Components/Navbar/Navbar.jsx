import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isDark, setIsDark] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // 1. Theme Toggler Logic
    useEffect(() => {
        const root = window.document.documentElement;
        if (isDark) {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
    }, [isDark]);

    // 2. Scroll Logic for Glassmorphism Effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#mainContainer' },
        { name: 'About', href: '#about-section' },
        { name: 'Skills', href: '#skills-section' },
        { name: 'Resume', href: '#resume-section' },
        { name: 'Projects', href: '#projects-section' },
        { name: 'Contact', href: '#contact-section' },
    ];

    return (
        <nav className={`fixed top-0 w-full z-21 transition-all duration-300 px-6 py-4 ${scrolled ? 'bg-white/10 dark:bg-black/20 backdrop-blur-lg border-b border-white/10 shadow-xl' : 'bg-transparent'
            }`}>
            <div className="max-w-7xl mx-auto flex justify-between items-center">

                {/* Logo */}
                <a href="#mainContainer" className="text-2xl font-protest text-brand tracking-widest">
                    SARITA
                </a>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-bold uppercase tracking-widest hover:text-brand transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}

                    {/* Theme Toggle Button */}
                    <button
                        onClick={() => setIsDark(!isDark)}
                        className="p-3 rounded-xl bg-brand/10 text-brand border border-brand/20 hover:scale-110 active:scale-95 transition-all cursor-pointer"
                    >
                        {isDark ? <FaSun size={18} /> : <FaMoon size={18} />}
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden flex items-center gap-4">
                    <button
                        onClick={() => setIsDark(!isDark)}
                        className="p-2 text-brand"
                    >
                        {isDark ? <FaSun size={20} /> : <FaMoon size={20} />}
                    </button>
                    <button onClick={() => setIsOpen(!isOpen)} className="text-brand text-2xl">
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* Mobile Sidebar */}
            <div className={`fixed inset-0 bg-white dark:bg-black z- flex flex-col items-center justify-center gap-8 transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'
                } md:hidden`}>
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="text-2xl font-bold uppercase tracking-widest hover:text-brand"
                    >
                        {link.name}
                    </a>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;