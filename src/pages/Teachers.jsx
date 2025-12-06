import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Linkedin, Twitter, Mail, Star, Users, ArrowRight, CheckCircle, Search, FileText, UserCheck, Briefcase } from 'lucide-react';

const teachers = [
    {
        id: 1,
        name: 'Sarah Johnson',
        role: 'Mathematics Lead',
        subject: 'Mathematics',
        exp: '12 Years Experience',
        img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80',
        bio: 'Sarah specializes in making complex mathematical concepts accessible to students of all levels. Her students consistently score in the top percentile.',
        color: 'bg-blue-50 text-blue-600'
    },
    {
        id: 2,
        name: 'David Chen',
        role: 'Physics Expert',
        subject: 'Physics',
        exp: '10 Years Experience',
        img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80',
        bio: 'With a PhD in Physics, David brings real-world applications into the classroom, sparking curiosity and scientific inquiry.',
        color: 'bg-emerald-50 text-emerald-600'
    },
    {
        id: 3,
        name: 'Emily Davis',
        role: 'English Literature',
        subject: 'English',
        exp: '8 Years Experience',
        img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
        bio: 'Emily fosters a love for reading and writing. She helps students develop critical thinking and articulate expression.',
        color: 'bg-rose-50 text-rose-600'
    },
    {
        id: 4,
        name: 'Michael Wilson',
        role: 'Chemistry Specialist',
        subject: 'Chemistry',
        exp: '15 Years Experience',
        img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80',
        bio: 'Michael makes chemistry fun and understandable. His interactive teaching style helps students grasp abstract concepts easily.',
        color: 'bg-purple-50 text-purple-600'
    },
    {
        id: 5,
        name: 'Jessica Brown',
        role: 'Biology Mentor',
        subject: 'Biology',
        exp: '9 Years Experience',
        img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=688&q=80',
        bio: 'Jessica brings biology to life. Her passion for nature and life sciences inspires students to explore the living world.',
        color: 'bg-amber-50 text-amber-600'
    },
    {
        id: 6,
        name: 'Robert Taylor',
        role: 'History Guide',
        subject: 'History',
        exp: '11 Years Experience',
        img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
        bio: 'Robert turns history lessons into storytelling sessions. He helps students understand the past to shape the future.',
        color: 'bg-orange-50 text-orange-600'
    }
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

const Teachers = () => {
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
                                Expert Faculty
                            </div>
                            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 mb-6 leading-[1.1] tracking-tight">
                                Meet Our <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 animate-gradient-x">
                                    Inspiring Mentors
                                </span>
                            </h1>
                            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                                Our team of dedicated educators is passionate about guiding students towards academic success and personal growth.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Teachers Grid */}
            <section className="pt-8 pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {teachers.map((teacher) => (
                            <motion.div
                                key={teacher.id}
                                variants={item}
                                className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group hover:-translate-y-1"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={teacher.img}
                                        alt={teacher.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                                        <div className="flex gap-4">
                                            <a href="#" className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-indigo-600 transition-colors"><Twitter className="w-5 h-5" /></a>
                                            <a href="#" className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-indigo-600 transition-colors"><Linkedin className="w-5 h-5" /></a>
                                            <a href="#" className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-indigo-600 transition-colors"><Mail className="w-5 h-5" /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-8">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="text-2xl font-bold text-slate-900 mb-1">{teacher.name}</h3>
                                            <p className="text-indigo-600 font-medium">{teacher.role}</p>
                                        </div>
                                        <span className={`px-3 py-1 ${teacher.color} text-xs font-bold rounded-full uppercase tracking-wide`}>
                                            {teacher.subject}
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
                                        <Award className="w-4 h-4 text-amber-500" />
                                        {teacher.exp}
                                    </div>

                                    <p className="text-slate-600 leading-relaxed mb-6">
                                        {teacher.bio}
                                    </p>

                                    <button className="w-full py-3 px-4 border border-slate-200 hover:border-indigo-600 text-slate-600 hover:text-indigo-600 font-bold rounded-xl transition-all flex items-center justify-center gap-2 group/btn">
                                        View Profile
                                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>



            {/* Why Choose Our Teachers */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Why Our Teachers Are Different</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">We don't just hire teachers; we hire mentors who can inspire and guide.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: GraduationCap, title: 'Subject Experts', desc: 'Masters and PhD holders in their respective fields.' },
                            { icon: Users, title: 'Personalized Attention', desc: 'Focus on individual student needs and learning styles.' },
                            { icon: Star, title: 'Proven Track Record', desc: 'Consistently helping students achieve top grades.' },
                            { icon: Award, title: 'Continuous Training', desc: 'Regular workshops to stay updated with teaching methods.' }
                        ].map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-lg transition-all duration-300"
                            >
                                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 mb-6">
                                    <feature.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                                <p className="text-slate-600">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Selection Process */}
            <section className="py-24 bg-slate-50 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Our Rigorous Selection Process</h2>
                            <p className="text-slate-600 text-lg mb-8">
                                We maintain high standards. Only top 1% of applicants make it to our classrooms.
                            </p>

                            <div className="space-y-6">
                                {[
                                    { icon: FileText, title: 'Application Review', desc: 'Screening for qualifications and experience.' },
                                    { icon: Search, title: 'Subject Knowledge Test', desc: 'In-depth assessment of core concepts.' },
                                    { icon: Users, title: 'Demo Class', desc: 'Evaluating teaching style and student engagement.' },
                                    { icon: UserCheck, title: 'Background Check', desc: 'Ensuring safety and integrity.' },
                                    { icon: Briefcase, title: 'Final Interview', desc: 'Cultural fit and passion assessment.' }
                                ].map((step, idx) => (
                                    <div key={idx} className="flex gap-4">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white border border-indigo-100 flex items-center justify-center text-indigo-600 shadow-sm font-bold">
                                            {idx + 1}
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-slate-900">{step.title}</h4>
                                            <p className="text-slate-600 text-sm">{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-[2rem] rotate-3 opacity-10 blur-2xl" />
                            <img
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
                                alt="Selection Process"
                                className="relative rounded-[2rem] shadow-2xl border-8 border-white"
                            />
                            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-xs hidden md:block">
                                <div className="flex items-center gap-3 mb-2">
                                    <CheckCircle className="w-8 h-8 text-green-500" />
                                    <div>
                                        <div className="text-sm text-slate-500 font-bold uppercase">Selectivity</div>
                                        <div className="text-2xl font-bold text-slate-900">Top 1%</div>
                                    </div>
                                </div>
                                <p className="text-slate-600 text-sm">We choose only the best to ensure quality education.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Join Team CTA */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-br from-indigo-900 to-purple-900 rounded-[3rem] p-8 md:p-16 relative overflow-hidden text-center">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
                        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500/30 rounded-full blur-[120px] pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/30 rounded-full blur-[120px] pointer-events-none" />

                        <div className="relative z-10 max-w-3xl mx-auto">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-indigo-100 text-sm font-bold mb-8">
                                <Users className="w-4 h-4" />
                                Join Our Team
                            </div>
                            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
                                Are You Passionate About Teaching?
                            </h2>
                            <p className="text-indigo-100 text-lg mb-10 leading-relaxed">
                                We are always looking for talented educators to join our mission. If you love teaching and want to make a difference, we'd love to hear from you.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="bg-white text-indigo-900 font-bold py-4 px-10 rounded-xl hover:bg-indigo-50 transition-all shadow-lg transform hover:scale-105">
                                    Apply Now
                                </button>
                                <button className="bg-transparent border-2 border-white text-white font-bold py-4 px-10 rounded-xl hover:bg-white/10 transition-all">
                                    Contact Us
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div >
    );
};

export default Teachers;
