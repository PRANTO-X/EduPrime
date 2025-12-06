import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Clock, Award, Zap, Monitor } from 'lucide-react';

const features = [
    {
        icon: <Users className="w-6 h-6" />,
        title: 'Expert Tutors',
        description: 'Learn from qualified professionals with years of teaching experience.',
        color: 'bg-blue-500',
        gradient: 'from-blue-500 to-cyan-500'
    },
    {
        icon: <Monitor className="w-6 h-6" />,
        title: 'Modern Labs',
        description: 'Access to state-of-the-art computer labs and learning resources.',
        color: 'bg-purple-500',
        gradient: 'from-purple-500 to-pink-500'
    },
    {
        icon: <Clock className="w-6 h-6" />,
        title: 'Flexible Timing',
        description: 'Choose batches that fit your schedule. Weekend and evening classes available.',
        color: 'bg-green-500',
        gradient: 'from-green-500 to-emerald-500'
    },
    {
        icon: <BookOpen className="w-6 h-6" />,
        title: 'Comprehensive Material',
        description: 'Get access to curated study materials, notes, and practice papers.',
        color: 'bg-orange-500',
        gradient: 'from-orange-500 to-amber-500'
    },
    {
        icon: <Zap className="w-6 h-6" />,
        title: 'Fast-Track Courses',
        description: 'Intensive courses designed to help you master subjects quickly.',
        color: 'bg-yellow-500',
        gradient: 'from-yellow-500 to-orange-500'
    },
    {
        icon: <Award className="w-6 h-6" />,
        title: 'Proven Results',
        description: 'Our students consistently achieve top grades and excel in exams.',
        color: 'bg-red-500',
        gradient: 'from-red-500 to-rose-500'
    }
];

const Features = () => {
    return (
        <section id="features" className="py-24 bg-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-slate-50 rounded-full blur-3xl opacity-50" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        className="text-indigo-600 font-bold tracking-wider uppercase text-sm mb-2 block"
                    >
                        Why Choose Us
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6"
                    >
                        Experience the <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">EduPrime Difference</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-slate-600 max-w-2xl mx-auto"
                    >
                        We provide a holistic learning environment designed to help students thrive academically and personally.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative p-8 rounded-3xl bg-white border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                        >
                            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.gradient} opacity-10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500`} />

                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} text-white flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                                {feature.icon}
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                                {feature.title}
                            </h3>

                            <p className="text-slate-600 leading-relaxed relative z-10">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
