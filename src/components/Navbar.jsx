import React, { useState, useEffect } from 'react';
import { Menu, X, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Courses', path: '/courses' },
        { name: 'Teachers', path: '/teachers' },
        { name: 'Contact', path: '/contact' },
    ];

    // Check if we are on the home page for transparent navbar logic
    const isHome = location.pathname === '/';

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`rounded-2xl transition-all duration-300 ${scrolled
                    ? 'bg-white/80 backdrop-blur-xl shadow-lg border border-white/20 px-6 py-3'
                    : isHome ? 'bg-transparent px-0 py-2' : 'bg-white/80 backdrop-blur-xl shadow-lg border border-white/20 px-6 py-3'
                    }`}>
                    <div className="flex justify-between items-center">
                        {/* Logo */}
                        <Link to="/" className="flex-shrink-0 flex items-center gap-2 cursor-pointer group">
                            <div className="bg-gradient-to-br from-indigo-600 to-purple-600 p-2 rounded-lg shadow-lg shadow-indigo-500/30 group-hover:shadow-indigo-500/50 transition-all duration-300">
                                <BookOpen className="w-5 h-5 text-white" />
                            </div>
                            <span className={`font-bold text-xl tracking-tight transition-colors ${scrolled || !isHome ? 'text-slate-900 group-hover:text-indigo-600' : 'text-white'
                                }`}>
                                EduPrime
                            </span>
                        </Link>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-1">
                            {navLinks.map((link) => {
                                const isActive = location.pathname === link.path;
                                return link.path.startsWith('#') ? (
                                    <a
                                        key={link.name}
                                        href={link.path}
                                        className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${scrolled || !isHome
                                            ? 'text-slate-600 hover:text-indigo-600 hover:bg-indigo-50'
                                            : 'text-slate-200 hover:text-white hover:bg-white/10'
                                            }`}
                                    >
                                        {link.name}
                                    </a>
                                ) : (
                                    <Link
                                        key={link.name}
                                        to={link.path}
                                        className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${isActive
                                            ? (scrolled || !isHome ? 'bg-indigo-50 text-indigo-600' : 'bg-white/20 text-white')
                                            : (scrolled || !isHome ? 'text-slate-600 hover:text-indigo-600 hover:bg-indigo-50' : 'text-slate-200 hover:text-white hover:bg-white/10')
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                );
                            })}
                            <Link to="/get-started" className={`ml-4 px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 shadow-lg hover:-translate-y-0.5 cursor-pointer inline-block ${scrolled || !isHome
                                ? 'bg-slate-900 hover:bg-indigo-600 text-white hover:shadow-indigo-500/30'
                                : 'bg-white text-indigo-600 hover:bg-indigo-50 shadow-black/20'
                                }`}>
                                Get Started
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className={`focus:outline-none p-2 rounded-lg transition-colors cursor-pointer ${scrolled || !isHome
                                    ? 'text-slate-600 hover:text-indigo-600 hover:bg-slate-100'
                                    : 'text-white hover:bg-white/10'
                                    }`}
                            >
                                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden absolute top-full left-0 right-0 px-4 mt-2"
                    >
                        <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 overflow-hidden">
                            <div className="p-4 space-y-2">
                                {navLinks.map((link) => {
                                    const isActive = location.pathname === link.path;
                                    return link.path.startsWith('#') ? (
                                        <a
                                            key={link.name}
                                            href={link.path}
                                            className="block px-4 py-3 rounded-xl text-base font-medium text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 transition-all"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {link.name}
                                        </a>
                                    ) : (
                                        <Link
                                            key={link.name}
                                            to={link.path}
                                            className={`block px-4 py-3 rounded-xl text-base font-medium transition-all ${isActive
                                                ? 'bg-indigo-50 text-indigo-600'
                                                : 'text-slate-600 hover:text-indigo-600 hover:bg-indigo-50'
                                                }`}
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {link.name}
                                        </Link>
                                    );
                                })}
                                <div className="pt-4 mt-2 border-t border-slate-100">
                                    <Link to="/get-started" className="block w-full text-center bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-xl font-medium transition-all duration-200 shadow-lg shadow-indigo-600/20 cursor-pointer" onClick={() => setIsOpen(false)}>
                                        Get Started
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
