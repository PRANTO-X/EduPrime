import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Calculator, Beaker, Globe, Code, PenTool, CheckCircle2, ArrowRight, Star, Users, Target, Zap, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

const courses = [
    {
        id: 1,
        title: 'Mathematics Mastery',
        grade: 'Grades 6-12',
        icon: Calculator,
        color: 'bg-blue-50 text-blue-600',
        description: 'From Algebra to Calculus, we make numbers make sense. Our comprehensive curriculum ensures a strong foundation.',
        features: ['Algebra & Geometry', 'Calculus Prep', 'Problem Solving', 'Competitive Math']
    },
    {
        id: 2,
        title: 'Science Explorer',
        grade: 'Grades 6-12',
        icon: Beaker,
        color: 'bg-emerald-50 text-emerald-600',
        description: 'Discover the wonders of Physics, Chemistry, and Biology through interactive experiments and theory.',
        features: ['Physics & Chemistry', 'Biology', 'Lab Experiments', 'Scientific Method']
    },
    {
        id: 3,
        title: 'English Excellence',
        grade: 'Grades 1-12',
        icon: BookOpen,
        color: 'bg-rose-50 text-rose-600',
        description: 'Master the art of communication. We focus on grammar, literature, creative writing, and public speaking.',
        features: ['Creative Writing', 'Literature Analysis', 'Grammar Mastery', 'Public Speaking']
    },
    {
        id: 4,
        title: 'Computer Science',
        grade: 'Grades 8-12',
        icon: Code,
        color: 'bg-purple-50 text-purple-600',
        description: 'Step into the future with coding and computational thinking. Learn Python, Java, and Web Development.',
        features: ['Python & Java', 'Web Development', 'Algorithms', 'App Building']
    },
    {
        id: 5,
        title: 'Social Studies',
        grade: 'Grades 6-10',
        icon: Globe,
        color: 'bg-amber-50 text-amber-600',
        description: 'Understand the world around us. History, Geography, and Civics taught with engaging storytelling.',
        features: ['World History', 'Geography', 'Civics', 'Current Events']
    },
    {
        id: 6,
        title: 'Creative Arts',
        grade: 'Grades 1-8',
        icon: PenTool,
        color: 'bg-pink-50 text-pink-600',
        description: 'Unleash creativity through drawing, painting, and digital art. Fostering imagination and expression.',
        features: ['Drawing & Painting', 'Digital Art', 'Art History', 'Portfolio Building']
    }
];

const methodologies = [
    {
        icon: Users,
        title: 'Small Batch Size',
        desc: 'We maintain a low student-teacher ratio to ensure every student gets personalized attention and guidance.'
    },
    {
        icon: Target,
        title: 'Goal-Oriented Learning',
        desc: 'Customized study plans aligned with school curriculum and competitive exam requirements.'
    },
    {
        icon: Zap,
        title: 'Interactive Sessions',
        desc: 'Engaging lessons with visual aids, real-world examples, and regular doubt-clearing sessions.'
    }
];

const faqs = [
    {
        question: 'What is the maximum class size?',
        answer: 'We maintain a strict limit of 12 students per batch to ensure personalized attention and effective learning.'
    },
    {
        question: 'Do you provide study materials?',
        answer: 'Yes, comprehensive study materials, worksheets, and practice tests are included in the course fee.'
    },
    {
        question: 'Are there regular assessments?',
        answer: 'We conduct weekly tests and monthly comprehensive assessments to track progress and identify areas for improvement.'
    },
    {
        question: 'Can I switch batches if the timing doesn\'t work?',
        answer: 'Yes, we offer flexible scheduling options and allow batch changes subject to availability.'
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

const Courses = () => {
    const [openFaq, setOpenFaq] = useState(null);

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
                                World-Class Curriculum
                            </div>
                            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 mb-6 leading-[1.1] tracking-tight">
                                Explore Our <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 animate-gradient-x">
                                    Premium Courses
                                </span>
                            </h1>
                            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                                Designed to inspire curiosity and foster academic excellence. Choose from our wide range of specialized programs.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Courses Grid */}
            <section className="pt-8 pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {courses.map((course) => (
                            <motion.div
                                key={course.id}
                                variants={item}
                                className="bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group hover:-translate-y-1"
                            >
                                <div className="flex justify-between items-start mb-6">
                                    <div className={`w-14 h-14 ${course.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                        <course.icon className="w-7 h-7" />
                                    </div>
                                    <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-full uppercase tracking-wide">
                                        {course.grade}
                                    </span>
                                </div>

                                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                                    {course.title}
                                </h3>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    {course.description}
                                </p>

                                <div className="space-y-3 mb-8">
                                    {course.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-2 text-sm text-slate-500">
                                            <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                                            {feature}
                                        </div>
                                    ))}
                                </div>

                                <button className="w-full py-3 px-4 bg-slate-50 hover:bg-indigo-50 text-slate-900 hover:text-indigo-600 font-bold rounded-xl transition-colors flex items-center justify-center gap-2 group/btn">
                                    View Details
                                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                </button>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Teaching Methodology */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Our Teaching Methodology</h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            We believe in a holistic approach to education that goes beyond textbooks.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {methodologies.map((method, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-slate-50 rounded-[2rem] p-8 text-center hover:bg-indigo-50 transition-colors duration-300"
                            >
                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm text-indigo-600">
                                    <method.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{method.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{method.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Feature Highlight */}
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-indigo-900 rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
                        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500/30 rounded-full blur-[120px] pointer-events-none" />

                        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                                    Personalized Learning Path
                                </h2>
                                <p className="text-indigo-100 text-lg mb-8 leading-relaxed">
                                    Every student is unique. We tailor our teaching methods to match individual learning styles, ensuring maximum retention and understanding.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <button className="bg-white text-indigo-900 font-bold py-4 px-8 rounded-xl hover:bg-indigo-50 transition-all shadow-lg">
                                        Book a Free Assessment
                                    </button>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                                    <Star className="w-8 h-8 text-yellow-400 mb-4" />
                                    <div className="text-3xl font-bold text-white mb-1">4.9/5</div>
                                    <div className="text-indigo-200 text-sm">Student Rating</div>
                                </div>
                                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 mt-8">
                                    <CheckCircle2 className="w-8 h-8 text-green-400 mb-4" />
                                    <div className="text-3xl font-bold text-white mb-1">98%</div>
                                    <div className="text-indigo-200 text-sm">Success Rate</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-white">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 text-indigo-700 text-sm font-bold mb-6">
                            <HelpCircle className="w-4 h-4" />
                            Common Questions
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                    </div>
                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="border border-slate-200 rounded-2xl overflow-hidden">
                                <button
                                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                    className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-slate-50 transition-colors"
                                >
                                    <span className="font-bold text-slate-900 text-lg">{faq.question}</span>
                                    {openFaq === idx ? (
                                        <ChevronUp className="w-5 h-5 text-indigo-600" />
                                    ) : (
                                        <ChevronDown className="w-5 h-5 text-slate-400" />
                                    )}
                                </button>
                                <AnimatePresence>
                                    {openFaq === idx && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="p-6 pt-0 text-slate-600 leading-relaxed">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Courses;
