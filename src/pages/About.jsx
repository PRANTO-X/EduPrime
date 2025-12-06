import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Users, Trophy, Heart, Star, Shield, Rocket, CheckCircle2, Linkedin, Twitter, Mail } from 'lucide-react';

const stats = [
    { label: 'Students Taught', value: '5000+', icon: Users },
    { label: 'Expert Tutors', value: '50+', icon: Trophy },
    { label: 'Years Experience', value: '10+', icon: Lightbulb },
    { label: 'Success Rate', value: '98%', icon: CheckCircle2 },
];

const values = [
    { icon: Heart, title: 'Passion', desc: 'We love what we do and inspire the same in our students.', color: 'bg-rose-50 text-rose-600' },
    { icon: Shield, title: 'Integrity', desc: 'Honesty and transparency are at the core of our teaching.', color: 'bg-blue-50 text-blue-600' },
    { icon: Star, title: 'Excellence', desc: 'We strive for the highest standards in education.', color: 'bg-amber-50 text-amber-600' },
    { icon: Rocket, title: 'Innovation', desc: 'Constantly evolving our methods for better learning.', color: 'bg-purple-50 text-purple-600' },
];

const team = [
    { name: 'Sarah Johnson', role: 'Mathematics Lead', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80' },
    { name: 'David Chen', role: 'Physics Expert', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80' },
    { name: 'Emily Davis', role: 'English Literature', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80' },
    { name: 'Michael Wilson', role: 'Chemistry Specialist', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80' },
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

const About = () => {
    return (
        <div className="bg-slate-50 overflow-hidden">
            {/* Hero / Intro Section */}
            <section className="relative py-24 lg:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-200 via-slate-50 to-slate-50 opacity-70 pointer-events-none" />
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            variants={container}
                            initial="hidden"
                            animate="show"
                        >
                            <motion.div variants={item} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-indigo-100 text-indigo-700 text-sm font-bold mb-8 shadow-sm">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                                </span>
                                About EduPrime
                            </motion.div>

                            <motion.h1 variants={item} className="text-5xl lg:text-7xl font-bold text-slate-900 mb-6 leading-[1.1] tracking-tight">
                                We Are Shaping the <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 animate-gradient-x">
                                    Future of Learning
                                </span>
                            </motion.h1>

                            <motion.p variants={item} className="text-xl text-slate-600 mb-10 leading-relaxed max-w-lg">
                                Empowering students with the knowledge, skills, and confidence to conquer their academic goals and beyond.
                            </motion.p>

                            <motion.div variants={item} className="grid grid-cols-2 gap-6">
                                {stats.map((stat, index) => (
                                    <div key={index} className="bg-white/60 backdrop-blur-sm p-4 rounded-2xl border border-white/50 shadow-sm">
                                        <div className="flex items-center gap-3 mb-1">
                                            <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600">
                                                <stat.icon className="w-5 h-5" />
                                            </div>
                                            <span className="text-2xl font-bold text-slate-900">{stat.value}</span>
                                        </div>
                                        <div className="text-sm text-slate-500 font-medium ml-1">{stat.label}</div>
                                    </div>
                                ))}
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative lg:h-[600px] flex items-center justify-center"
                        >
                            <div className="relative w-full aspect-square max-w-[500px]">
                                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-[3rem] rotate-6 opacity-20 blur-2xl animate-pulse-slow" />
                                <div className="absolute inset-0 bg-white rounded-[3rem] shadow-2xl border-8 border-white/50 backdrop-blur-xl overflow-hidden rotate-3 hover:rotate-0 transition-all duration-700">
                                    <img
                                        src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80"
                                        alt="Students learning"
                                        className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-1000"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/60 via-transparent to-transparent" />
                                    <div className="absolute bottom-8 left-8 text-white">
                                        <div className="text-sm font-medium opacity-90 mb-1">Established 2015</div>
                                        <div className="text-2xl font-bold">Excellence in Education</div>
                                    </div>
                                </div>

                                {/* Floating Elements */}
                                <motion.div
                                    animate={{ y: [0, -20, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute -top-12 -right-8 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 max-w-[200px]"
                                >
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                                            <Trophy className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="text-xs text-slate-500 font-bold uppercase">Award Winning</div>
                                            <div className="text-sm font-bold text-slate-900">Best Tuition Center</div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Our Story - Visual Timeline Style */}
            <section className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: false }}
                            className="relative order-2 lg:order-1"
                        >
                            <div className="grid grid-cols-2 gap-4">
                                <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" className="rounded-2xl shadow-lg mt-12" alt="Classroom" />
                                <img src="https://images.unsplash.com/photo-1427504746696-ea5abd7dfe5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" className="rounded-2xl shadow-lg" alt="Library" />
                            </div>
                            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-indigo-50/50 rounded-full blur-3xl" />
                        </motion.div>

                        <div className="order-1 lg:order-2">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                            >
                                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Our Journey</h2>
                                <div className="space-y-8 border-l-2 border-indigo-100 pl-8 ml-4 relative">
                                    <div className="relative">
                                        <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white bg-indigo-600 shadow-md" />
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">2015 - The Beginning</h3>
                                        <p className="text-slate-600">Started with a single classroom and a passion for teaching physics. We had just 10 students but a big vision.</p>
                                    </div>
                                    <div className="relative">
                                        <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white bg-indigo-400 shadow-md" />
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">2018 - Expansion</h3>
                                        <p className="text-slate-600">Expanded to a full-fledged center offering Math, Science, and English. Our student base grew to 500+.</p>
                                    </div>
                                    <div className="relative">
                                        <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white bg-indigo-300 shadow-md" />
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">2023 - Digital Transformation</h3>
                                        <p className="text-slate-600">Launched our hybrid learning platform, enabling students to learn from anywhere. Recognized as a top tuition provider.</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values - Bento Grid */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4"
                        >
                            Our Core Values
                        </motion.h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">The principles that guide every lesson, every interaction, and every decision we make.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-100 group"
                            >
                                <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <item.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Meet the Team */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Meet Our Mentors</h2>
                            <p className="text-slate-600 max-w-xl">
                                World-class educators dedicated to unlocking your potential.
                            </p>
                        </div>
                        <button className="text-indigo-600 font-bold hover:text-indigo-700 flex items-center gap-2 group">
                            View All Teachers <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </button>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {team.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: false }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative"
                            >
                                <div className="relative overflow-hidden rounded-[2rem] mb-4 shadow-lg">
                                    <img
                                        src={member.img}
                                        alt={member.name}
                                        className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                                        <div className="flex gap-4">
                                            <a href="#" className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-indigo-600 transition-colors"><Twitter className="w-5 h-5" /></a>
                                            <a href="#" className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-indigo-600 transition-colors"><Linkedin className="w-5 h-5" /></a>
                                            <a href="#" className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-indigo-600 transition-colors"><Mail className="w-5 h-5" /></a>
                                        </div>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
                                <p className="text-indigo-600 font-medium">{member.role}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-indigo-900" />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500/30 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/30 rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                    >
                        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">Ready to Start Your Journey?</h2>
                        <p className="text-indigo-100 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                            Join EduPrime today and experience the difference in your learning journey. Your future starts here.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-white text-indigo-900 font-bold py-4 px-10 rounded-full hover:bg-indigo-50 transition-all transform hover:scale-105 shadow-2xl shadow-indigo-900/50 cursor-pointer">
                                Get Started Now
                            </button>
                            <button className="bg-transparent border-2 border-white text-white font-bold py-4 px-10 rounded-full hover:bg-white/10 transition-all cursor-pointer">
                                Contact Us
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default About;
