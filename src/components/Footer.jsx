import React from 'react';
import { BookOpen, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 pt-20 pb-10 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-indigo-950/30 pointer-events-none" />
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <div className="bg-gradient-to-br from-indigo-600 to-purple-600 p-2 rounded-lg shadow-lg shadow-indigo-500/20">
                                <BookOpen className="w-6 h-6 text-white" />
                            </div>
                            <span className="font-bold text-2xl text-white tracking-tight">EduPrime</span>
                        </div>
                        <p className="text-slate-400 mb-8 leading-relaxed">
                            Empowering students to achieve their academic goals through personalized tuition and expert guidance.
                        </p>
                        <div className="flex space-x-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="text-slate-400 hover:text-white transition-all bg-slate-800/50 p-3 rounded-full hover:bg-indigo-600 hover:scale-110 hover:shadow-lg hover:shadow-indigo-500/30">
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-8">Quick Links</h3>
                        <ul className="space-y-4">
                            {['Home', 'About Us', 'Courses', 'Teachers', 'Success Stories', 'Contact'].map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors flex items-center gap-2 group">
                                        <ArrowRight className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-8">Contact Us</h3>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4 group">
                                <div className="p-2 bg-slate-800/50 rounded-lg group-hover:bg-indigo-500/20 group-hover:text-indigo-400 transition-colors">
                                    <MapPin className="w-5 h-5 flex-shrink-0" />
                                </div>
                                <span className="leading-relaxed">123 Education Lane, Knowledge City, ST 12345</span>
                            </li>
                            <li className="flex items-center gap-4 group">
                                <div className="p-2 bg-slate-800/50 rounded-lg group-hover:bg-indigo-500/20 group-hover:text-indigo-400 transition-colors">
                                    <Phone className="w-5 h-5 flex-shrink-0" />
                                </div>
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center gap-4 group">
                                <div className="p-2 bg-slate-800/50 rounded-lg group-hover:bg-indigo-500/20 group-hover:text-indigo-400 transition-colors">
                                    <Mail className="w-5 h-5 flex-shrink-0" />
                                </div>
                                <span>info@eduprime.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-8">Newsletter</h3>
                        <p className="text-slate-400 mb-6">Subscribe to get updates on new courses and special offers.</p>
                        <form className="space-y-4">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="w-full px-4 py-3.5 rounded-xl bg-slate-800/50 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                            />
                            <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold py-3.5 rounded-xl transition-all shadow-lg shadow-indigo-900/20 hover:shadow-indigo-600/30 hover:-translate-y-0.5 cursor-pointer">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-slate-800/50 pt-8 text-center">
                    <p className="text-slate-500 text-sm">
                        &copy; {new Date().getFullYear()} EduPrime Tuition Center. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
