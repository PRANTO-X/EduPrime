import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, User, Mail, BookOpen, Phone, Calendar, Star } from 'lucide-react';

const steps = [
    {
        number: '01',
        title: 'Online Registration',
        desc: 'Fill out the simple form below to express your interest.'
    },
    {
        number: '02',
        title: 'Free Assessment',
        desc: 'We evaluate the student\'s current level to tailor the learning path.'
    },
    {
        number: '03',
        title: 'Trial Class',
        desc: 'Experience our teaching method with a complimentary session.'
    },
    {
        number: '04',
        title: 'Enrollment',
        desc: 'Finalize the schedule and start your journey to success.'
    }
];

const GetStarted = () => {
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
                                Admissions Open
                            </div>
                            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 mb-6 leading-[1.1] tracking-tight">
                                Begin Your <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 animate-gradient-x">
                                    Academic Journey
                                </span>
                            </h1>
                            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                                Join a community of learners dedicated to excellence. Take the first step towards a brighter future today.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Steps Section */}
            <section className="pt-8 pb-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-4 gap-8">
                        {steps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="relative"
                            >
                                <div className="text-6xl font-bold text-slate-100 mb-4">{step.number}</div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2 relative z-10">{step.title}</h3>
                                <p className="text-slate-600 text-sm relative z-10">{step.desc}</p>
                                {idx < steps.length - 1 && (
                                    <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-slate-100 -z-0" />
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Application Form Section */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-5 gap-12">
                        {/* Form Side */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-3"
                        >
                            <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-xl border border-slate-100">
                                <h3 className="text-2xl font-bold text-slate-900 mb-8">Student Registration Form</h3>
                                <form className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-slate-700 ml-1">Student Name</label>
                                            <div className="relative">
                                                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                                <input
                                                    type="text"
                                                    placeholder="Enter student's name"
                                                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-medium text-slate-900 placeholder:text-slate-400"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-slate-700 ml-1">Grade / Class</label>
                                            <div className="relative">
                                                <BookOpen className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                                <select className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-medium text-slate-900">
                                                    <option>Select Grade</option>
                                                    <option>Grade 6</option>
                                                    <option>Grade 7</option>
                                                    <option>Grade 8</option>
                                                    <option>Grade 9</option>
                                                    <option>Grade 10</option>
                                                    <option>Grade 11</option>
                                                    <option>Grade 12</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-slate-700 ml-1">Parent's Name</label>
                                            <div className="relative">
                                                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                                <input
                                                    type="text"
                                                    placeholder="Enter parent's name"
                                                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-medium text-slate-900 placeholder:text-slate-400"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-slate-700 ml-1">Phone Number</label>
                                            <div className="relative">
                                                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                                <input
                                                    type="tel"
                                                    placeholder="(555) 123-4567"
                                                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-medium text-slate-900 placeholder:text-slate-400"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                                        <div className="relative">
                                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                            <input
                                                type="email"
                                                placeholder="john@example.com"
                                                className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-medium text-slate-900 placeholder:text-slate-400"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700 ml-1">Interested Subjects</label>
                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                            {['Mathematics', 'Physics', 'Chemistry', 'Biology', 'English', 'Computer Science'].map((subject) => (
                                                <label key={subject} className="flex items-center gap-2 p-3 bg-slate-50 rounded-xl cursor-pointer hover:bg-indigo-50 transition-colors border border-slate-200 hover:border-indigo-200">
                                                    <input type="checkbox" className="w-4 h-4 text-indigo-600 rounded focus:ring-indigo-500" />
                                                    <span className="text-sm font-medium text-slate-700">{subject}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    <button className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-indigo-600/20 flex items-center justify-center gap-2 group cursor-pointer">
                                        Submit Application
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </form>
                            </div>
                        </motion.div>

                        {/* Benefits Side */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-2 space-y-8"
                        >
                            <div className="bg-indigo-900 p-8 rounded-[2rem] text-white relative overflow-hidden">
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
                                <h3 className="text-2xl font-bold mb-6 relative z-10">Why Enroll Now?</h3>
                                <ul className="space-y-4 relative z-10">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0" />
                                        <span className="text-indigo-100">Early bird discount on first month fees</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0" />
                                        <span className="text-indigo-100">Priority scheduling for preferred slots</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0" />
                                        <span className="text-indigo-100">Free study material kit worth $100</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0" />
                                        <span className="text-indigo-100">Complimentary career counseling session</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 bg-amber-50 rounded-full text-amber-500">
                                        <Star className="w-6 h-6 fill-current" />
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-slate-900">4.9/5</div>
                                        <div className="text-sm text-slate-500">Parent Satisfaction</div>
                                    </div>
                                </div>
                                <p className="text-slate-600 italic">
                                    "The best decision we made for our child's education. The improvement in grades and confidence is remarkable."
                                </p>
                                <div className="mt-4 font-bold text-slate-900">- Jennifer M.</div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GetStarted;
