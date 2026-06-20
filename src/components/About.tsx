import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Target, Layers, Star, Plus, Minus } from 'lucide-react';

export const About = () => {
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const faqs = [
        {
            question: "Do you use templates or is everything custom?",
            answer: "Everything is custom. We build from the ground up tailored specifically to your brand and business goals. Templates create bloat, slow down load times, and make " +
                "your brand look like your competitors. We engineer bespoke architecture for maximum performance."
        },
        {
            question: "How long does a typical website project take?",
            answer: "Most custom builds take between 1 to 8 weeks, depending on complexity, page count, and custom features. We establish a strict timeline during our discovery phase " +
                "and stick to it, ensuring you launch on time without sacrificing quality."
        },
        {
            question: "Will my team be able to update content without a developer?",
            answer: "Yes. While the frontend architecture is highly customized, we integrate intuitive, modern Content Management Systems (like Sanity or custom dashboard solutions) so your marketing " +
                "team can easily update copy, swap images, and publish blogs without touching a single line of code."
        },
        {
            question: "How do you ensure the website will actually generate leads?",
            answer: "We don't just design for aesthetics; we design for conversion. Every decision—from user flow to button placement and site speed—is based on data and UX best practices aimed at reducing friction and guiding users " +
                "naturally toward your core call-to-action. Furthermore, all website come with complementary advertisement which we can discuss to help boost advisability in addition to SEO optimisation to help your website stand out."
        },
        {
            question: "What are hosting and a domain?",
            answer: "Think of your website like a digital storefront: your domain is your address, and hosting is the land it sits on. I ensure you retain 100% ownership of both. " +
                "I handle the technical setup of your domain (your .com address) and professional business email, and deploy your site on high-performance servers that keep your business online, secure, and running 24/7."
        },
        {
            question: "Why does my hosting/maintenance fee go through Kavass?",
            answer: "Think of me as your dedicated digital operations manager. While you could technically manage hosting yourself, it often involves complex technical maintenance, security monitoring, " +
                "and troubleshooting that pulls you away from running your business. By bundling hosting with my management service, I handle the 'heavy lifting'—server optimizations, " +
                "security patches, automatic backups, and performance updates—ensuring your site remains fast, secure, and online 24/7. " +
                "You get the benefits of enterprise-grade infrastructure without ever needing to look at a technical dashboard. However, as always, this completely upto you, if you would like to host it yourself."
        },
        // Add these to your 'faqs' array
        {
            question: "How is your pricing structured?",
            answer: "I work on a value-based, flat-fee project model. Unlike hourly billing, which can be unpredictable and reward slow work, a flat fee ensures that my incentives are perfectly aligned with yours: delivering a high-quality, high-converting product as efficiently as possible. We’ll define the scope clearly upfront so there are no surprises."
        },
        {
            question: "What if my requirements change during the project?",
            answer: "Agility is one of the benefits of working with Kavass. If your needs evolve, we’ll assess the impact on the timeline and budget, and I’ll provide a clear 'change order' so we’re always on the same page. My goal is to ensure the final product hits your business objectives, even if those objectives shift slightly during development."
        },
        {
            question: "Is your pricing set in stone?",
            answer: "Every business has unique needs, and I understand that 'one size fits all' pricing rarely works for startups. The figures you see are benchmarks for standard projects, but I am very open to discussing flexible scopes or phased approaches if you have a specific budget in mind. My priority is building a long-term partnership, so let's chat about what your business needs right now—we can often find a way to get started without compromising on quality."
        },
        {
            question: "What if I have a very limited budget starting out?",
            answer: "I love working with early-stage founders. If you're just starting, we can focus on a 'Minimum Viable Presence'—a high-performance, beautiful landing page that converts, with the architecture already built to scale. As your business grows and your budget increases, we can easily build out additional features, sections, and systems. You don't need the 'everything' package to get a world-class foundation."
        },
        {
            question: "Do you offer ongoing support after launch?",
            answer: "Yes. I view a launch as the beginning of our relationship, not the end. I offer flexible maintenance packages that cover everything from security updates and performance tuning to ongoing design tweaks, so you can focus on growth while I handle the technical health of your digital asset."
        },
        {
            question: "How do we communicate during the project?",
            answer: "I believe in radical transparency. We’ll have a shared Slack or project dashboard where you can see real-time progress, provide feedback, and track milestones. You’ll never have to wonder what’s happening—I provide regular updates so you always have full visibility into the build process."
        }
    ];

    return (
        <section className="py-20 px-6 max-w-6xl mx-auto text-gray-800 dark:text-gray-200">

            {/* Main Header */}
            <div className="mb-16 max-w-3xl">
                <h1 className="text-5xl font-extrabold mb-6 text-gray-900 dark:text-white tracking-tight">
                    Why Kavass exists.
                </h1>
                <p className="text-xl leading-relaxed text-gray-600 dark:text-gray-300">
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
                    <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-4 relative z-10">
                        The Philosophy
                    </h3>
                    <blockquote className="text-lg italic text-blue-800 dark:text-blue-200 relative z-10 leading-relaxed">
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
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10">
                    The Kavass Standard
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-8 bg-white dark:bg-gray-800/50 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800">
                        <Zap className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-6" />
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">High Performance</h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            Blazing fast load times and optimized codebases that rank higher on search engines and keep users engaged.
                        </p>
                    </div>

                    <div className="p-8 bg-white dark:bg-gray-800/50 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800">
                        <Target className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-6" />
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Conversion-First</h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            Every pixel is engineered with intent, guiding your users naturally toward the actions that drive revenue.
                        </p>
                    </div>

                    <div className="p-8 bg-white dark:bg-gray-800/50 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800">
                        <Layers className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-6" />
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Scalable Systems</h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            Modular architecture built on modern tech stacks, ensuring your platform evolves seamlessly as you grow.
                        </p>
                    </div>
                </div>
            </div>

            {/* Reviews / Testimonials */}
            <div className="mb-24">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10">
                    Don't just take my word for it.
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-8 bg-gray-50 dark:bg-gray-800/30 rounded-3xl border border-gray-100 dark:border-gray-800">
                        <div className="flex gap-1 mb-4 text-yellow-400">
                            {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 mb-6 italic leading-relaxed">
                            "Kavass didn't just redesign our site; they rebuilt our entire digital acquisition funnel. Our lead volume doubled within the first month of launch just from the speed improvements alone."
                        </p>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-700 dark:text-blue-300 font-bold">JD</div>
                            <div>
                                <p className="font-bold text-sm text-gray-900 dark:text-white">James D.</p>
                                <p className="text-xs text-gray-500">SaaS Founder</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-8 bg-gray-50 dark:bg-gray-800/30 rounded-3xl border border-gray-100 dark:border-gray-800">
                        <div className="flex gap-1 mb-4 text-yellow-400">
                            {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 mb-6 italic leading-relaxed">
                            "Finally, a dev partner who actually understands business logic. They ditched the slow page builders and gave us a custom stack that our team can easily manage. Highly recommend."
                        </p>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-700 dark:text-blue-300 font-bold">SL</div>
                            <div>
                                <p className="font-bold text-sm text-gray-900 dark:text-white">Sarah L.</p>
                                <p className="text-xs text-gray-500">CMO, TechLogistics</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-8 bg-gray-50 dark:bg-gray-800/30 rounded-3xl border border-gray-100 dark:border-gray-800">
                        <div className="flex gap-1 mb-4 text-yellow-400">
                            {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 mb-6 italic leading-relaxed">
                            "We had outgrown our old template site and it was hurting our brand credibility. Kavass delivered a premium, incredibly fast website that immediately positioned us as enterprise-ready."
                        </p>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-700 dark:text-blue-300 font-bold">MR</div>
                            <div>
                                <p className="font-bold text-sm text-gray-900 dark:text-white">Marcus R.</p>
                                <p className="text-xs text-gray-500">CEO, FinScale</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-24 max-w-3xl mx-auto">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                        Everything you need to know about how we work.
                    </p>
                </div>

                <div className="space-y-4 ">
                    {faqs.map((faq, index:number) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 rounded-2xl   transition-all duration-200"
                        >
                            <button
                                onClick={() => toggleFaq(index)}
                                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none "
                            >
                                <span className="font-bold text-gray-900 dark:text-white pr-4 ">
                                    {faq.question}
                                </span>
                                {openFaq === index ? (
                                    <Minus className="w-5 h-5 text-blue-600 flex-shrink-0" />
                                ) : (
                                    <Plus className="w-5 h-5 text-gray-400 flex-shrink-0" />
                                )}
                            </button>

                            <div
                                className={`px-6 overflow-y-auto transition-all duration-300 ease-in-out ${
                                    openFaq === index ? "max-h-48 pb-6 opacity-100" : "max-h-0 opacity-0"
                                }`}
                            >
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed ">
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
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"/>
                    </Link>
                </div>
                <div className="p-1">
                    <Link
                        to="/pricing"
                        className="group inline-flex items-center justify-center  px-8 py-4 text-lg font-semibold bg-blue-600 hover:bg-blue-500 dark:bg-blue-600 dark:hover:bg-blue-700 text-white rounded-full transition-all duration-200 ease-in-out hover:scale-105"
                    >
                        How much is it?
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"/>
                    </Link>
                </div>
            </div>

        </section>
    );
};