import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
    {
        name: 'Sarah Johnson',
        role: 'High School Student',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
        content: "The tutors here are amazing! They explain complex concepts in such a simple way. My math grades went from C to A in just one semester."
    },
    {
        name: 'Michael Chen',
        role: 'Parent',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
        content: "I've seen a remarkable improvement in my son's confidence and academic performance. The personalized attention he gets is worth every penny."
    },
    {
        name: 'Emily Davis',
        role: 'College Student',
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
        content: "The fast-track course helped me prepare for my entrance exams in record time. The study materials are top-notch and very comprehensive."
    }
];

const Testimonials = () => {
    return (
        <section className="py-24 bg-mesh-light overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Student Success Stories</h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Don't just take our word for it. Hear what our students and parents have to say about their experience.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="bg-white/60 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-white/50 relative hover:-translate-y-2 transition-transform duration-300"
                        >
                            <div className="absolute -top-6 -right-6 w-20 h-20 bg-indigo-600/10 rounded-full blur-xl" />
                            <Quote className="absolute top-8 right-8 w-10 h-10 text-indigo-200 rotate-180" />

                            <div className="flex items-center gap-1 text-yellow-400 mb-6">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star key={star} className="w-4 h-4 fill-current" />
                                ))}
                            </div>

                            <p className="text-slate-700 mb-8 leading-relaxed relative z-10 font-medium">
                                "{testimonial.content}"
                            </p>

                            <div className="flex items-center gap-4 border-t border-slate-100 pt-6">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-14 h-14 rounded-full object-cover ring-4 ring-white shadow-md"
                                />
                                <div>
                                    <h4 className="font-bold text-slate-900 text-lg">{testimonial.name}</h4>
                                    <p className="text-sm text-indigo-600 font-medium">{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
