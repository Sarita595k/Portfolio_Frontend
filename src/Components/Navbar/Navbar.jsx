import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isDark, setIsDark] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const root = window.document.documentElement;
        isDark ? root.classList.add('dark') : root.classList.remove('dark');
    }, [isDark]);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    }, [isOpen]);

    const navLinks = [
        { name: 'Home', href: '#mainContainer' },
        { name: 'About', href: '#about-section' },
        { name: 'Skills', href: '#skills-section' },
        { name: 'Resume', href: '#resume-section' },
        { name: 'Projects', href: '#projects-section' },
        { name: 'Contact', href: '#contact-section' },
    ];

    return (
        <nav className={`fixed top-0 left-0 w-full z-48 transition-all duration-300 px-6 py-4 ${scrolled ? 'bg-[var(--bg-main)]/90 backdrop-blur-lg border-b border-[var(--border-subtle)] shadow-xl' : 'bg-transparent'
            }`}>
            <div className="max-w-7xl mx-auto flex justify-between items-center relative z-">

                {/* Logo */}
                <a href="#mainContainer" className="text-2xl font-protest text-brand tracking-widest">
                    SARITA
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8 text-[var(--text-main)]">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="text-sm font-bold uppercase tracking-widest hover:text-brand transition-colors">
                            {link.name}
                        </a>
                    ))}
                    <button onClick={() => setIsDark(!isDark)} className="p-3 rounded-xl bg-brand/10 text-brand border border-brand/20 cursor-pointer">
                        {isDark ? <FaSun size={18} /> : <FaMoon size={18} />}
                    </button>
                </div>

                {/* Mobile Icons */}
                <div className="md:hidden flex items-center gap-4">
                    <button onClick={() => setIsDark(!isDark)} className="p-2 text-brand text-xl cursor-pointer">
                        {isDark ? <FaSun /> : <FaMoon />}
                    </button>
                    {/* The Toggle Button (Hamburger / Cross) */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-brand text-2xl p-2 cursor-pointer relative z-"
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* MOBILE OVERLAY */}
            <div className={`fixed inset-0 w-full h-screen bg-[var(--bg-main)] z- transition-all duration-500 flex flex-col justify-center items-center ${isOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-full opacity-0 invisible'
                } md:hidden`}>

                {/* Links Container */}
                <div className="flex flex-col items-center justify-center gap-8 w-full h-full pt-20">
                    {navLinks.map((link, index) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className={`text-3xl font-bold uppercase tracking-[4px] text-[var(--text-main)] hover:text-brand transition-all duration-300 py-2 w-full text-center active:scale-95 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                }`}
                            style={{
                                transitionDelay: isOpen ? `${index * 100}ms` : '0ms',
                                pointerEvents: isOpen ? 'auto' : 'none'
                            }}
                        >
                            {link.name}
                        </a>
                    ))}

                    {/* Branding in Menu */}
                    <div className="mt-8 flex flex-col items-center">
                        <div className="w-10 h-1 bg-brand rounded-full mb-4"></div>
                        <p className="text-[10px] tracking-[5px] text-slate-500 uppercase font-bold transition-colors">Full Stack Developer</p>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;