import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Star, Sparkles } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-mesh">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[100px] animate-[pulse_4s_ease-in-out_infinite]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-[120px] animate-[pulse_6s_ease-in-out_infinite]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-md border border-white/50 text-indigo-600 text-sm font-bold mb-8 shadow-sm"
                        >
                            <Sparkles className="w-4 h-4" />
                            <span>New Batches Starting Soon</span>
                        </motion.div>

                        <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-8 tracking-tight">
                            Unlock Your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                                True Potential
                            </span>
                        </h1>

                        <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-lg font-medium">
                            Personalized learning for students of all ages. Master your subjects with our dedicated tutors and proven teaching methods.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-5 mb-12">
                            <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-300 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full hover:shadow-lg hover:shadow-indigo-500/40 hover:-translate-y-1 active:scale-95 cursor-pointer">
                                Book a Free Trial
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </button>
                            <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-slate-700 transition-all duration-300 bg-white border border-slate-200 rounded-full hover:bg-slate-50 hover:border-indigo-200 hover:text-indigo-600 hover:shadow-md hover:-translate-y-1 cursor-pointer">
                                View Courses
                            </button>
                        </div>

                        <div className="flex items-center gap-8 text-sm font-semibold text-slate-500">
                            <div className="flex items-center gap-2">
                                <div className="p-1 rounded-full bg-green-100 text-green-600">
                                    <CheckCircle className="w-4 h-4" />
                                </div>
                                <span>Expert Tutors</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="p-1 rounded-full bg-green-100 text-green-600">
                                    <CheckCircle className="w-4 h-4" />
                                </div>
                                <span>Flexible Timing</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Image/Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white/50 rotate-2 hover:rotate-0 transition-transform duration-500">
                            <img
                                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80"
                                alt="Students learning"
                                className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-700"
                            />

                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 to-transparent pointer-events-none" />
                        </div>

                        {/* Floating Card */}
                        <motion.div
                            initial={{ y: 40, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 1, duration: 0.8, type: "spring" }}
                            className="absolute -bottom-10 -left-10 z-20 bg-white/90 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-white/60 max-w-xs animate-[float_6s_ease-in-out_infinite]"
                        >
                            <div className="flex items-center gap-4 mb-3">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="w-10 h-10 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center overflow-hidden">
                                            <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="" className="w-full h-full object-cover" />
                                        </div>
                                    ))}
                                </div>
                                <div className="flex flex-col">
                                    <div className="flex text-yellow-400 text-xs">
                                        {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
                                    </div>
                                    <span className="text-xs font-bold text-slate-900 mt-0.5">4.9/5 Rating</span>
                                </div>
                            </div>
                            <p className="text-sm font-medium text-slate-700 leading-snug">
                                "My grades improved significantly after joining EduPrime!"
                            </p>
                        </motion.div>

                        {/* Decorative Elements */}
                        <div className="absolute -z-10 top-10 -right-10 w-32 h-32 bg-yellow-400/20 rounded-full blur-2xl" />
                        <div className="absolute -z-10 -bottom-10 -left-10 w-40 h-40 bg-indigo-600/20 rounded-full blur-2xl" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
