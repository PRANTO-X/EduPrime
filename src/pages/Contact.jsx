import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, User, AtSign } from 'lucide-react';

const Contact = () => {
    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-24 pb-8 lg:pt-32 lg:pb-12 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-200 via-slate-50 to-slate-50 opacity-70 pointer-events-none" />
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="text-center max-w-3xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-indigo-100 text-indigo-700 text-sm font-bold mb-8 shadow-sm">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                                </span>
                                Get in Touch
                            </div>
                            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 mb-6 leading-[1.1] tracking-tight">
                                We'd Love to <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 animate-gradient-x">
                                    Hear From You
                                </span>
                            </h1>
                            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                                Have questions about our courses or want to schedule a visit? Reach out to us and we'll get back to you shortly.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Contact Info & Form */}
            <section className="pt-8 pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-1 space-y-8"
                        >
                            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
                                <h3 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h3>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-indigo-50 rounded-xl text-indigo-600">
                                            <MapPin className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1">Our Location</h4>
                                            <p className="text-slate-600">123 Education Lane, Knowledge City, ST 12345</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-purple-50 rounded-xl text-purple-600">
                                            <Phone className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1">Phone Number</h4>
                                            <p className="text-slate-600">+1 (555) 123-4567</p>
                                            <p className="text-slate-600">+1 (555) 987-6543</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-pink-50 rounded-xl text-pink-600">
                                            <Mail className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1">Email Address</h4>
                                            <p className="text-slate-600">hello@eduprime.com</p>
                                            <p className="text-slate-600">admissions@eduprime.com</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-amber-50 rounded-xl text-amber-600">
                                            <Clock className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1">Office Hours</h4>
                                            <p className="text-slate-600">Mon - Fri: 9:00 AM - 6:00 PM</p>
                                            <p className="text-slate-600">Sat: 10:00 AM - 4:00 PM</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-2"
                        >
                            <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-xl border border-slate-100">
                                <h3 className="text-2xl font-bold text-slate-900 mb-8">Send us a Message</h3>
                                <form className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-slate-700 ml-1">Your Name</label>
                                            <div className="relative">
                                                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                                <input
                                                    type="text"
                                                    placeholder="John Doe"
                                                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-medium text-slate-900 placeholder:text-slate-400"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                                            <div className="relative">
                                                <AtSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                                <input
                                                    type="email"
                                                    placeholder="john@example.com"
                                                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-medium text-slate-900 placeholder:text-slate-400"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700 ml-1">Subject</label>
                                        <div className="relative">
                                            <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                            <input
                                                type="text"
                                                placeholder="How can we help you?"
                                                className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-medium text-slate-900 placeholder:text-slate-400"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700 ml-1">Message</label>
                                        <textarea
                                            rows="5"
                                            placeholder="Tell us more about your inquiry..."
                                            className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-medium text-slate-900 placeholder:text-slate-400 resize-none"
                                        ></textarea>
                                    </div>
                                    <button className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-indigo-600/20 flex items-center justify-center gap-2 group cursor-pointer">
                                        Send Message
                                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="h-[400px] w-full bg-slate-200 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-slate-500 font-medium flex items-center gap-2">
                        <MapPin className="w-5 h-5" />
                        Map Integration would go here
                    </p>
                </div>
                {/* In a real app, you would embed a Google Map iframe here */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-50 to-transparent pointer-events-none" />
            </section>
        </div>
    );
};

export default Contact;
