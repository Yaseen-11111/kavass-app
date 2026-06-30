import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {ArrowRight, Layers, Minus, Plus, Star, Target, Zap} from 'lucide-react';
import {FaqsData} from '@/data/content.ts';

export const About = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <section className="py-20 px-6 max-w-6xl mx-auto text-text">

            {/* Main Header */}
            <div className="mb-16 max-w-3xl">
                <h1 className="text-5xl font-extrabold mb-6 text-text tracking-tight">
                    Why Kavass exists.
                </h1>
                <p className="text-xl leading-relaxed text-text">
                    The agency world is broken. Founders are forced to choose between
                    overpriced, slow-moving agencies or rigid "drag-and-drop" builders
                    that leave their brand looking exactly like everyone else's.
                </p>
            </div>

            {/* Philosophy & Story */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-24">
                <div className="space-y-6 text-lg leading-relaxed">
                    <p>
                        I built <strong>Kavass</strong> to bridge that gap. We focus on
                        high-performance architecture that is tailored to your unique
                        business goals, not just a set of recycled templates.
                    </p>
                    <p>
                        We don't just build websites; we build scalable digital systems
                        that grow alongside your startup. We treat your digital presence
                        as an engine for growth, prioritizing speed, accessibility, and
                        conversion-focused design.
                    </p>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-3xl border border-blue-100 dark:border-blue-800 shadow-sm relative overflow-hidden">
                    <div className="absolute -right-6 -top-6 w-24 h-24 bg-blue-200 dark:bg-blue-800 rounded-full opacity-20 blur-2xl"></div>
                    <h3 className="text-xl font-bold text-text mb-4 relative z-10">
                        The Philosophy
                    </h3>
                    <blockquote className="text-lg italic text-text relative z-10 leading-relaxed">
                        "Your website should be the strongest asset in your company,
                        not a checkbox on a to-do list. I work with founders who understand
                        that design is not just how it looks, but how it works and converts."
                    </blockquote>
                </div>
            </div>

            {/* Facts & Metrics Banner */}
            <div className="bg-gray-900 dark:bg-gray-800 text-white rounded-3xl p-10 mb-24 grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-700">
                <div className="px-4">
                    <p className="text-4xl font-extrabold text-blue-400 mb-2">99<span className="text-2xl">%</span></p>
                    <p className="text-sm text-gray-400 font-medium">Avg. Performance Score</p>
                </div>
                <div className="px-4">
                    <p className="text-4xl font-extrabold text-blue-400 mb-2">2.4<span className="text-2xl">x</span></p>
                    <p className="text-sm text-gray-400 font-medium">Avg. Conversion Increase</p>
                </div>
                <div className="px-4">
                    <p className="text-4xl font-extrabold text-blue-400 mb-2">&lt;1<span className="text-2xl">s</span></p>
                    <p className="text-sm text-gray-400 font-medium">Page Load Time</p>
                </div>
                <div className="px-4 border-none">
                    <p className="text-4xl font-extrabold text-blue-400 mb-2">40<span className="text-2xl">+</span></p>
                    <p className="text-sm text-gray-400 font-medium">Startups Scaled</p>
                </div>
            </div>

            {/* The Kavass Standard */}
            <div className="mb-24">
                <h2 className="text-3xl font-bold text-text mb-10">
                    The Kavass Standard
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-8 bg-white dark:bg-gray-800/50 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800">
                        <Zap className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-6" />
                        <h3 className="text-xl font-bold text-text mb-3">High Performance</h3>
                        <p className="text-text leading-relaxed">
                            Blazing fast load times and optimized codebases that rank higher on search engines and keep users engaged.
                        </p>
                    </div>

                    <div className="p-8 bg-white dark:bg-gray-800/50 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800">
                        <Target className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-6" />
                        <h3 className="text-xl font-bold text-text mb-3">Conversion-First</h3>
                        <p className="text-text leading-relaxed">
                            Every pixel is engineered with intent, guiding your users naturally toward the actions that drive revenue.
                        </p>
                    </div>

                    <div className="p-8 bg-white dark:bg-gray-800/50 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800">
                        <Layers className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-6" />
                        <h3 className="text-xl font-bold text-text mb-3">Scalable Systems</h3>
                        <p className="text-text leading-relaxed">
                            Modular architecture built on modern tech stacks, ensuring your platform evolves seamlessly as you grow.
                        </p>
                    </div>
                </div>
            </div>

            {/* Reviews / Testimonials */}
            <div className="mb-24">
                <h2 className="text-3xl font-bold text-text mb-10">
                    Don't just take my word for it.
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-text">
                    <div className="p-8 bg-gray-50 dark:bg-gray-800/30 rounded-3xl">
                        <div className="flex gap-1 mb-4 text-yellow-400">
                            {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                        </div>
                        <p className="text-text mb-6 italic leading-relaxed">
                            "Kavass didn't just redesign our site; they rebuilt our entire digital acquisition funnel. Our lead volume doubled within the first month of launch just from the speed improvements alone."
                        </p>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-700 dark:text-blue-300 font-bold">JD</div>
                            <div>
                                <p className="font-bold text-sm text-text">James D.</p>
                                <p className="text-xs text-text">SaaS Founder</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-8 bg-gray-50 dark:bg-gray-800/30 rounded-3xl">
                        <div className="flex gap-1 mb-4 text-yellow-400">
                            {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                        </div>
                        <p className="text-text mb-6 italic leading-relaxed">
                            "Finally, a dev partner who actually understands business logic. They ditched the slow page builders and gave us a custom stack that our team can easily manage. Highly recommend."
                        </p>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-700 dark:text-blue-300 font-bold">SL</div>
                            <div>
                                <p className="font-bold text-sm text-text">Sarah L.</p>
                                <p className="text-xs text-text">CMO, TechLogistics</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-8 bg-gray-50 dark:bg-gray-800/30 rounded-3xl">
                        <div className="flex gap-1 mb-4 text-yellow-400">
                            {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                        </div>
                        <p className="text-text mb-6 italic leading-relaxed">
                            "We had outgrown our old template site and it was hurting our brand credibility. Kavass delivered a premium, incredibly fast website that immediately positioned us as enterprise-ready."
                        </p>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-700 dark:text-blue-300 font-bold">MR</div>
                            <div>
                                <p className="font-bold text-sm text-text">Marcus R.</p>
                                <p className="text-xs text-text">CEO, FinScale</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-24 max-w-3xl mx-auto">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-text mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-text">
                        Everything you need to know about how we work.
                    </p>
                </div>

                <div className="space-y-4">
                    {FaqsData.map((faq, index: number) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-800/50 rounded-2xl transition-all duration-200"
                        >
                            <button
                                onClick={() => toggleFaq(index)}
                                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                            >
                                <span className="font-bold text-text pr-4">
                                    {faq.question}
                                </span>
                                {openFaq === index ? (
                                    <Minus className="w-5 h-5 text-blue-600 flex-shrink-0" />
                                ) : (
                                    <Plus className="w-5 h-5 text-gray-400 flex-shrink-0" />
                                )}
                            </button>

                            <div
                                /*
                                  Added specific classes to hide the scrollbar across all browsers:
                                  [&::-webkit-scrollbar]:hidden (Chrome/Safari)
                                  [-ms-overflow-style:none] (IE/Edge)
                                  [scrollbar-width:none] (Firefox)
                                */
                                className={`px-6 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] transition-all duration-300 ease-in-out ${
                                    openFaq === index ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"
                                }`}
                            >
                                <p className="text-text/70 leading-relaxed">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Final CTA */}
            <div
                className="bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-[2.5rem] p-12 md:p-16 text-center">
                <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
                    Ready to stop compromising?
                </h2>
                <p className="text-lg text-gray-400 dark:text-gray-600 mb-10 max-w-2xl mx-auto">
                    Partner with us to engineer a digital presence that actually moves the needle for your business. If you have more questions, please do not hesitate to call or message on the contact provided below.
                </p>
                <div className="p-1">
                    <Link
                        to="/contact"
                        className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold bg-blue-600 hover:bg-blue-500 dark:bg-blue-600 dark:hover:bg-blue-700 text-white rounded-full transition-all duration-200 ease-in-out hover:scale-105"
                    >
                        Let's talk about your project
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
                <div className="p-1">
                    <Link
                        to="/pricing"
                        className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold bg-blue-600 hover:bg-blue-500 dark:bg-blue-600 dark:hover:bg-blue-700 text-white rounded-full transition-all duration-200 ease-in-out hover:scale-105"
                    >
                        How much is it?
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>

        </section>
    );
};