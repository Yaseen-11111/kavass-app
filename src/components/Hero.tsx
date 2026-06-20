import React from 'react';
import { Link } from 'react-router-dom';
import {techStack} from "@/data/content.ts";
import {CheckCircle} from "lucide-react";

export const Hero = () => (
    <section className="pt-40 pb-20 px-6 text-center text-gray-900 dark:text-white transition-colors">
        <div className="relative pt-40 pb-20 px-6 text-center transition-colors">
            {/* Background Blur */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"></div>

            {/* Use text-text instead of text-gray-900 */}
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-text">
                Bespoke web design.<br/>Without the BS.
            </h1>
            {/* Using opacity (text-text/70) effectively replaces the gray-600 look */}
            <p className="text-xl text-text/70 max-w-2xl mx-auto mb-10">
                We build high-performance, custom websites for brands that refuse to blend in.
                No templates, no bloated agency timelines.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/contact"

                      className="bg-primary text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-blue-700 transition-transform hover:-translate-y-1">
                Request a Free Demo
            </Link>
            <Link to="/portfolio"
                  className="bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition-transform hover:-translate-y-1">
                View Our Work
            </Link>
            <a href="#how-it-works"
               className="text-gray-500 font-medium hover:text-primary transition-colors flex items-center gap-2">
                See how it works<span>↓</span>
            </a>
            </div>
        </div>

        <div className="flex justify-center gap-12 mt-10 mb-16 text-center">
            <div>
                <div className="text-3xl font-bold text-primary">99/100</div>
                <div className="text-sm text-gray-500">Google Lighthouse Score</div>
            </div>
            <div>
                <div className="text-3xl font-bold text-primary">2x</div>
                <div className="text-sm text-gray-500">Average Conversion Lift</div>
            </div>
            <div>
                <div className="text-3xl font-bold text-primary">48hrs</div>
                <div className="text-sm text-gray-500">Prototype Turnaround</div>
            </div>
        </div>

        <div className="py-20 px-6 transition-colors ">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-text mb-12">Our Engineering
                    Arsenal</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
                    {techStack.map((tech, index) => (
                        <div key={index}

                             className="bg-gray-800 dark:bg-white p-6 rounded-xl shadow-sm border border-gray-700 dark:border-gray-200 flex items-center gap-4 hover:scale-105 transition-transform">
                            <CheckCircle className="text-blue-500" size={24}/>
                            <span className="font-semibold text-lg text-white">{tech}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <div id="how-it-works" className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto py-20">
            {[
                {step: "01", title: "Strategy", desc: "We define your brand goals and user journey."},
                {step: "02", title: "Architect", desc: "I build clean, custom code structures."},
                {step: "03", title: "Deploy", desc: "You get a site that scales without the technical debt."}

            ].map((item) => (
                <div key={item.step} className="relative">
                    <div className="text-4xl font-black   mb-2">{item.step}</div>
                    <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
                </div>
            ))}
        </div>
        <div className="py-20 ">
            <div className="max-w-3xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold mb-6">Stop choosing between custom design and site speed.</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                    Most website builders force you into rigid templates that degrade your SEO and brand identity.
                    We bridge the gap between bespoke engineering and intuitive management.
                </p>
            </div>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-2">
            <span className="text-sm text-gray-500">We specialize in:</span>
            {['SaaS', 'E-commerce', 'Creative Studios', 'Consultancies'].map((industry) => (
                <span key={industry} className="text-sm px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">
            {industry}
        </span>
            ))}
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-16 text-left ">
            {[
                {title: "Bespoke Design", desc: "Every pixel is custom-coded for your brand."},
                {title: "Lightning Fast", desc: "Optimized for core web vitals and speed."},
                {title: "No Bloat", desc: "No unnecessary plugins or legacy code."},
            ].map((feature) => (
                <div key={feature.title} className="p-6  rounded-2xl">
                    <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{feature.desc}</p>
                </div>
            ))}
        </div>
        {/* New Social Proof Section */}
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
            <p className="text-sm text-gray-500 uppercase tracking-widest mb-6">Trusted by innovative brands</p>
            <div className="flex justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all">
                {/* Replace with your clients' logos */}
                <span className="text-xl font-bold">BrandOne</span>
                <span className="text-xl font-bold">TechFlow</span>
                <span className="text-xl font-bold">DesignCo</span>
            </div>
        </div>
    </section>
);