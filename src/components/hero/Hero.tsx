import React from 'react';
import { Link } from 'react-router-dom';
import { techStack } from "@/data/content";
import { CheckCircle, ArrowRight, ShieldCheck } from "lucide-react";

export const Hero = () => {
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const element = document.getElementById('how-it-works');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <section className="relative w-full overflow-hidden transition-colors">
            {/* Ambient Background */}
            <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none -z-10"></div>

            {/* --- TOP: HERO CORE --- */}
            <div className="pt-24 pb-16 px-6 text-center max-w-5xl mx-auto">
                {/* 30-Day Trial Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 font-medium text-sm mb-8 animate-fade-in-up">
                    <ShieldCheck size={18} />
                    <span>New clients: Try our services with a <strong>30-day risk-free trial</strong></span>
                </div>

                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-text leading-tight">
                    Bespoke web design and SaaS.<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
                        Without the BS.
                    </span>
                </h1>
                
                <p className="text-xl text-text/70 max-w-2xl mx-auto mb-10 leading-relaxed">
                    We build high-performance, custom websites for brands that refuse to blend in. 
                    No templates, no bloated agency timelines. Experience the difference for a full month.
                </p>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
                    <Link to="/contact" className="group flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-600 transition-all hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5">
                        Start Your 30-Day Trial
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link to="/portfolio" className="px-8 py-4 rounded-full font-bold text-lg bg-gray-100 dark:bg-gray-800/50 text-gray-900 dark:text-white border border-transparent hover:border-gray-300 dark:hover:border-gray-700 transition-all">
                        View Our Work
                    </Link>
                </div>
            </div>

            {/* --- MIDDLE: STATS & SOCIAL PROOF --- */}
            <div className="border-y border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/20 backdrop-blur-sm py-10">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="flex justify-center gap-10 md:gap-16 w-full md:w-1/2">
                        <div className="text-center">
                            <div className="text-4xl font-black text-text mb-1">99<span className="text-primary text-2xl">/100</span></div>
                            <div className="text-sm font-medium text-text/60">Lighthouse Score</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-black text-text mb-1">2x</div>
                            <div className="text-sm font-medium text-text/60">Conversion Lift</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-black text-text mb-1">48<span className="text-primary text-2xl">hrs</span></div>
                            <div className="text-sm font-medium text-text/60">Prototyping</div>
                        </div>
                    </div>
                    
                    <div className="w-full md:w-1/2 md:border-l md:border-gray-200 dark:md:border-gray-800 md:pl-12 flex flex-col items-center md:items-start">
                        <p className="text-xs font-bold text-text/50 uppercase tracking-widest mb-4">Trusted by innovative brands</p>
                        <div className="flex gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                            <span className="text-xl font-black tracking-tighter">BrandOne</span>
                            <span className="text-xl font-black tracking-tighter">TechFlow</span>
                            <span className="text-xl font-black tracking-tighter">DesignCo</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- BOTTOM: GRID LAYOUT (Problem/Solution + Tech) --- */}
            <div className="max-w-7xl mx-auto px-6 py-24">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Left Column: Copy & Niches */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-text">
                            Stop choosing between custom design and site speed.
                        </h2>
                        <p className="text-lg text-text/70 mb-8 leading-relaxed">
                            Most website builders force you into rigid templates that degrade your SEO and brand identity. 
                            We bridge the gap between bespoke engineering and intuitive management.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-8">
                            <span className="text-sm font-medium text-text/70 py-2 mr-2">Specializing in:</span>
                            {['SaaS', 'E-commerce', 'Creative Studios', 'Consultancies'].map((industry) => (
                                <span key={industry} className="text-sm font-medium px-4 py-2 text-text bg-gray-100 dark:bg-gray-800/80 rounded-full border border-gray-200 dark:border-gray-700">
                                    {industry}
                                </span>
                            ))}
                        </div>
                        <a href="#how-it-works" onClick={handleScroll} className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all cursor-pointer">
                            See our process <ArrowRight size={18} />
                        </a>
                    </div>

                    {/* Right Column: Engineering Arsenal Bento Box */}
                    <div className="bg-gray-100 dark:bg-gray-800/40 border border-gray-200 dark:border-gray-800 rounded-3xl p-8">
                        <h3 className="text-xl font-bold text-text mb-6 flex items-center gap-2">
                            <ShieldCheck className="text-primary" size={24} /> 
                            Engineering Arsenal
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                            {techStack?.length > 0 ? techStack.map((tech, index) => (
                                <div key={index} className="bg-white dark:bg-gray-900 p-4 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 flex items-center gap-3">
                                    <CheckCircle className="text-blue-500 shrink-0" size={18} />
                                    <span className="font-semibold text-text">{tech}</span>
                                </div>
                            )) : (
                                /* Fallback if techStack is empty during testing */
                                ['React', 'Tailwind CSS', 'TypeScript', 'Next.js'].map((tech, index) => (
                                    <div key={index} className="bg-white dark:bg-gray-900 p-4 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 flex items-center gap-3">
                                        <CheckCircle className="text-blue-500 shrink-0" size={18} />
                                        <span className="font-semibold text-text">{tech}</span>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* --- FOOTER OF HERO: HOW IT WORKS --- */}
            <div id="how-it-works" className="max-w-7xl mx-auto px-6 pb-24">
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { step: "01", title: "Strategy", desc: "We define your brand goals and user journey.", feature: "Bespoke Design" },
                        { step: "02", title: "Architect", desc: "Clean, modular code structures built for performance.", feature: "Lightning Fast" },
                        { step: "03", title: "Deploy", desc: "You get a site that scales without the technical debt.", feature: "No Bloat" }
                    ].map((item) => (
                        <div key={item.step} className="group p-8 rounded-3xl bg-gray-50 hover:bg-gray-100 dark:bg-gray-800/20 dark:hover:bg-gray-800/40 border border-gray-200 dark:border-gray-800 transition-colors">
                            <div className="text-5xl font-black text-gray-200 dark:text-gray-800 mb-4 group-hover:text-primary/20 transition-colors">{item.step}</div>
                            <h3 className="font-bold text-2xl mb-2 text-text">{item.title}</h3>
                            <p className="text-text/70 mb-4">{item.desc}</p>
                            <div className="inline-block px-3 py-1 bg-white dark:bg-gray-900 rounded-lg text-xs font-bold text-primary border border-gray-100 dark:border-gray-800 shadow-sm">
                                {item.feature}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
