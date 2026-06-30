import React from 'react';
import { CheckCircle, Shield, Server, Code, ShoppingCart, Info, Calendar, ArrowRight } from 'lucide-react';
import { dynamicPricingData } from "@/data/content.ts";
import { usePricingController } from "@/controllers/usePricingController.tsx";

export const Pricing = () => {

    // ==========================================
    // 2. PRICING LOGIC & CALCULATIONS
    // ==========================================
    const pricing = usePricingController();

    // Destructuring all needed variables from the single hook instance
    const {
        isMonthly,
        setIsMonthly,
        selectedTier,
        selectedTierId,
        setSelectedTierId,
        hostingPlan,
        setHostingPlan,
        contractTerm,
        setContractTerm,
        totalUpfront,
        rawMonthlyBuild,
        currentAddonCost,
        phasedPricing,
        currentMonthlyTotal,
        baseHostingFee,
        baseHMFee
    } = pricing;

    // ==========================================
    // 3. RENDER UI
    // ==========================================
    return (
        <section className="py-24 px-6 w-full bg-gray-50 dark:bg-gray-900 transition-colors font-sans">
            <div className="max-w-7xl mx-auto">

                {/* --- Header & Billing Toggle --- */}
                <div className="text-center mb-16 space-y-6">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                        Transparent, predictable pricing.
                    </h2>
                    <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                        Choose how you want to pay for your build, then select the infrastructure that best supports your growth.
                    </p>

                    <div className="flex flex-col items-center gap-6 mt-8">
                        <div className="flex justify-center items-center gap-4 bg-white dark:bg-gray-800 p-2 rounded-full border border-gray-200 dark:border-gray-700 shadow-sm">
                            <span className={`text-sm font-semibold px-4 py-2 rounded-full cursor-pointer transition-colors ${!isMonthly ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white' : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'}`} onClick={() => setIsMonthly(false)}>
                                Pay Upfront
                            </span>
                            <button
                                onClick={() => setIsMonthly(!isMonthly)}
                                className="relative w-14 h-7 rounded-full bg-blue-600 transition-colors focus:outline-none"
                            >
                                <div className={`absolute top-1 w-5 h-5 rounded-full bg-white transition-transform duration-300 shadow-sm ${isMonthly ? 'left-8' : 'left-1'}`}></div>
                            </button>
                            <span className={`text-sm font-semibold px-4 py-2 rounded-full cursor-pointer transition-colors ${isMonthly ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white' : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'}`} onClick={() => setIsMonthly(true)}>
                                Pay Monthly
                            </span>
                        </div>

                        {/* Contract Term Selector (Animated rendering) */}
                        <div className={`overflow-hidden transition-all duration-300 ${isMonthly ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}`}>
                            <div className="inline-flex bg-gray-200 dark:bg-gray-800 p-1 rounded-xl shadow-inner">
                                {[
                                    { val: 1, label: '1 Month' },
                                    { val: 12, label: '1 Year (10% Off)' },
                                    { val: 24, label: '2 Years (20% Off)' }
                                ].map((term) => (
                                    <button
                                        key={term.val}
                                        onClick={() => setContractTerm(term.val as 1|12|24)}
                                        className={`px-5 py-2.5 rounded-lg text-sm font-bold transition-all ${contractTerm === term.val ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-white shadow-sm' : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'}`}
                                    >
                                        {term.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- 1. PRICING CARDS GRID --- */}
                <div className="grid md:grid-cols-3 gap-8 mb-16 lg:mb-24">
                    {dynamicPricingData.map((tier) => {
                        const isSelected = selectedTierId === tier.id;

                        return (
                            <div
                                key={tier.id}
                                onClick={() => setSelectedTierId(tier.id)}
                                className={`group cursor-pointer p-8 rounded-3xl transition-all duration-300 transform flex flex-col h-full ${
                                    isSelected
                                        ? 'ring-4 ring-blue-500 scale-105 shadow-2xl bg-white dark:bg-gray-800'
                                        : 'hover:-translate-y-2 shadow-lg hover:shadow-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700'
                                }`}
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{tier.name}</h3>
                                        <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">{tier.target}</p>
                                    </div>
                                    {isSelected && <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full shrink-0">Selected</span>}
                                    {tier.isPopular && !isSelected && <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-full shrink-0 shadow-sm">Popular</span>}
                                </div>

                                <div className="my-6">
                                    <div className="flex items-end gap-1">
                                        <span className="text-4xl font-black text-gray-900 dark:text-white">
                                            £{isMonthly ? tier.monthlyPrice : tier.upfrontPrice}
                                        </span>
                                        {isMonthly && <span className="text-lg font-medium text-gray-400 mb-1">/mo</span>}
                                    </div>
                                    <div className="text-sm font-medium text-gray-500 mt-2 flex items-center gap-1">
                                        <Info size={14} /> + £{tier.onboarding} Onboarding (One-time)
                                    </div>
                                </div>

                                <ul className="space-y-4 mb-8 flex-grow">
                                    {tier.features.map((feature, index) => (
                                        <li key={index} className="flex gap-3 text-gray-600 dark:text-gray-300">
                                            <CheckCircle size={20} className="text-blue-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-sm leading-relaxed">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button
                                    className={`w-full py-3.5 rounded-full font-bold transition-all duration-300 ${
                                        isSelected
                                            ? 'bg-blue-600 text-white shadow-md hover:bg-blue-700'
                                            : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white group-hover:bg-blue-50 dark:group-hover:bg-gray-600'
                                    }`}
                                >
                                    {isSelected ? 'Plan Selected' : `Select ${tier.name}`}
                                </button>
                            </div>
                        );
                    })}
                </div>

                {/* --- 2. SIDE-BY-SIDE: INFRASTRUCTURE & ESTIMATOR --- */}
                <div className="grid lg:grid-cols-12 gap-8 items-start">

                    {/* LEFT COLUMN: Customization */}
                    <div className="lg:col-span-7 bg-white dark:bg-gray-800 p-8 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Step 2: Infrastructure & Support</h3>
                        <p className="text-gray-500 dark:text-gray-400 mb-8 text-sm">Choose the environment to host your new build. You can upgrade or downgrade this at any time.</p>

                        <div className="space-y-4">
                            {/* Managed Hosting */}
                            <div
                                onClick={() => setHostingPlan(hostingPlan === 'hosting' ? 'none' : 'hosting')}
                                className={`group cursor-pointer p-6 rounded-2xl border-2 transition-all ${hostingPlan === 'hosting' ? 'border-blue-600 bg-blue-50/50 dark:bg-blue-900/10 shadow-sm' : 'border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 hover:border-blue-300'} flex items-start gap-5`}
                            >
                                <div className={`p-3 rounded-xl transition-colors ${hostingPlan === 'hosting' ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-600' : 'bg-gray-200 dark:bg-gray-800 text-gray-400 group-hover:text-blue-400'}`}>
                                    <Server size={24}/>
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-center mb-1">
                                        <h4 className="font-bold text-gray-900 dark:text-white text-lg">Managed Hosting Only</h4>
                                        <span className="font-bold text-gray-900 dark:text-white bg-white dark:bg-gray-800 px-3 py-1 rounded-full text-sm border border-gray-200 dark:border-gray-700">+£{baseHostingFee}/mo</span>
                                    </div>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                                        Fast, secure UK servers with SSL. Technical management handled behind the scenes.
                                    </p>
                                </div>
                            </div>

                            {/* Hosting & Maintenance */}
                            <div
                                onClick={() => setHostingPlan(hostingPlan === 'hm' ? 'none' : 'hm')}
                                className={`group cursor-pointer p-6 rounded-2xl border-2 transition-all ${hostingPlan === 'hm' ? 'border-cyan-500 bg-cyan-50/50 dark:bg-cyan-900/10 shadow-sm' : 'border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 hover:border-cyan-300'} flex items-start gap-5`}
                            >
                                <div className={`p-3 rounded-xl transition-colors ${hostingPlan === 'hm' ? 'bg-cyan-100 dark:bg-cyan-900/50 text-cyan-600' : 'bg-gray-200 dark:bg-gray-800 text-gray-400 group-hover:text-cyan-400'}`}>
                                    <Shield size={24}/>
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-center mb-1">
                                        <h4 className="font-bold text-gray-900 dark:text-white text-lg">Hosting & Maintenance</h4>
                                        <span className="font-bold text-gray-900 dark:text-white bg-white dark:bg-gray-800 px-3 py-1 rounded-full text-sm border border-gray-200 dark:border-gray-700">+£{baseHMFee}/mo</span>
                                    </div>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                                        Hosting plus up to 10hrs/mo of edits, technical support, and updates.
                                    </p>

                                    {/* Dynamic Discount Badges */}
                                    {!isMonthly ? (
                                        <div className="flex flex-col gap-2">
                                            <div className="inline-flex items-center gap-2 bg-cyan-100 dark:bg-cyan-900/50 text-cyan-800 dark:text-cyan-300 text-xs font-bold px-3 py-2 rounded-lg">
                                                <span>🎁</span> 1st 3 Months Maintenance FREE
                                            </div>
                                            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 text-xs font-bold px-3 py-2 rounded-lg">
                                                <span>⚡</span> 30% OFF for the rest of Year 1
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 text-xs font-bold px-3 py-2 rounded-lg">
                                            <span>📉</span> Unlocks 20% OFF your monthly build fee for life
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Live Checkout Estimator */}
                    <div className="lg:col-span-5 w-full bg-gray-900 text-white p-8 rounded-3xl border border-gray-800 shadow-2xl relative overflow-hidden lg:sticky lg:top-8">
                        {/* Decorative Background Icon */}
                        <div className="absolute top-0 right-0 -mt-8 -mr-8 text-gray-800 opacity-30 pointer-events-none">
                            <ShoppingCart size={180} strokeWidth={1} />
                        </div>

                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                                <ShoppingCart className="text-blue-400" />
                                Your Estimate
                            </h3>

                            {selectedTierId ? (
                                <div className="space-y-6">
                                    {/* --- Due Today Section --- */}
                                    <div className="bg-gray-800/50 p-5 rounded-2xl border border-gray-700/50 space-y-3">
                                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Due Today</h4>
                                        {!isMonthly && (
                                            <div className="flex justify-between items-center text-sm">
                                                <span className="text-gray-300">Website Build ({selectedTier?.name})</span>
                                                <span className="font-bold">£{selectedTier?.upfrontPrice}</span>
                                            </div>
                                        )}
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-gray-300">Onboarding Fee (One-time)</span>
                                            <span className="font-bold">£{selectedTier?.onboarding}</span>
                                        </div>
                                        <div className="flex justify-between items-center pt-3 mt-3 border-t border-gray-700">
                                            <span className="text-sm text-gray-300">Total Upfront</span>
                                            <span className="text-xl font-black text-white">£{totalUpfront}</span>
                                        </div>
                                    </div>

                                    {/* --- Monthly Recurring Section --- */}
                                    <div className="bg-gray-800/50 p-5 rounded-2xl border border-gray-700/50 space-y-3">
                                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Monthly Recurring</h4>

                                        {isMonthly && (
                                            <div className="flex justify-between items-center text-sm">
                                                <span className="text-gray-300 flex items-center gap-2">
                                                    <Code size={14} className="text-blue-400"/> Website Build
                                                </span>
                                                <div className="text-right">
                                                    {hostingPlan === 'hm' && (
                                                        <span className="line-through text-gray-500 text-xs mr-2">£{selectedTier?.monthlyPrice}</span>
                                                    )}
                                                    <span className="font-bold">£{rawMonthlyBuild}</span>
                                                </div>
                                            </div>
                                        )}

                                        {hostingPlan !== 'none' && (
                                            <div className="flex justify-between items-center text-sm">
                                                <span className="text-gray-300 flex items-center gap-2">
                                                    <Server size={14} className="text-blue-400"/>
                                                    {hostingPlan === 'hosting' ? 'Managed Hosting' : 'Hosting & Maintenance'}
                                                </span>
                                                <span className="font-medium">+£{currentAddonCost}</span>
                                            </div>
                                        )}

                                        {/* Upfront Phased HM Details */}
                                        {!isMonthly && hostingPlan === 'hm' && phasedPricing && (
                                            <div className="bg-gray-900 p-3 rounded-xl mt-3 border border-gray-700 space-y-1.5">
                                                <p className="text-[11px] text-cyan-400 font-bold mb-1">🎁 Maintenance Discount Schedule:</p>
                                                <div className="flex justify-between text-xs text-gray-400">
                                                    <span>Months 1-3 <span className="italic">(Hosting Only)</span></span>
                                                    <span className="text-white">£{phasedPricing.months1to3}/mo</span>
                                                </div>
                                                <div className="flex justify-between text-xs text-gray-400">
                                                    <span>Months 4-12 <span className="italic">(30% Off)</span></span>
                                                    <span className="text-white">£{phasedPricing.months4to12}/mo</span>
                                                </div>
                                                <div className="flex justify-between text-xs text-gray-400">
                                                    <span>Year 2+ <span className="italic">(Standard)</span></span>
                                                    <span className="text-white">£{phasedPricing.year2Plus}/mo</span>
                                                </div>
                                            </div>
                                        )}

                                        {/* Contract Note */}
                                        {isMonthly && (
                                            <div className="flex justify-between items-center text-xs pt-3 border-t border-gray-700 mt-3">
                                                <span className="text-blue-400 flex items-center gap-1.5">
                                                    <Calendar size={14}/> {contractTerm === 1 ? '1 Mo.' : contractTerm === 12 ? '1 Yr.' : '2 Yr.'} Contract
                                                </span>
                                                {contractTerm !== 1 && (
                                                    <span className="text-blue-400 font-bold">-{contractTerm === 12 ? '10%' : '20%'} Bundle Savings</span>
                                                )}
                                            </div>
                                        )}

                                        {/* Final Monthly Calculation */}
                                        <div className="flex justify-between items-center pt-3 mt-3 border-t border-gray-700">
                                            <span className="text-sm text-gray-300">
                                                {!isMonthly && hostingPlan === 'hm' ? 'Starting Monthly' : 'Total Monthly'}
                                            </span>
                                            <span className="text-2xl font-black text-blue-400">£{currentMonthlyTotal}<span className="text-sm font-medium text-gray-400">/mo</span></span>
                                        </div>
                                    </div>

                                    {isMonthly && (
                                        <p className="text-[11px] text-gray-500 italic text-center px-4">
                                            *Breakout fees apply if cancelled before contract term ends.
                                        </p>
                                    )}

                                    <button className="w-full bg-blue-600 hover:bg-blue-500 text-white py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-blue-600/25 flex justify-center items-center gap-2 group">
                                        Start Your Project
                                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            ) : (
                                <div className="text-center py-12 px-6 bg-gray-800/50 rounded-2xl border border-gray-700 border-dashed">
                                    <ShoppingCart size={48} className="mx-auto text-gray-600 mb-4" />
                                    <p className="text-gray-400 font-medium">Select a build plan above to generate your live estimate.</p>
                                </div>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};