import React, { useState } from 'react';
import { CheckCircle, Shield, Server, Code, ShoppingCart, Info, Calendar } from 'lucide-react';
import { techStack } from "@/data/content.ts"; // Assuming this exists based on your previous code

// NOTE: Since the requested logic changes how prices are calculated entirely,
// the logic has been integrated here so it works immediately. You can refactor
// this back into usePricingController if preferred.

// Mock data structure based on your request (Replace with your actual import from data.ts)
const dynamicPricingData = [
    {
        id: 'tier-1',
        name: 'Starter',
        target: 'For early-stage startups.',
        upfrontPrice: 2500,
        monthlyPrice: 250,
        onboarding: 500,
        features: ['Custom Design', '5 Pages', 'Basic SEO', 'Contact Form'],
        isPopular: false,
        other: 'Domain fees separate.'
    },
    {
        id: 'tier-2',
        name: 'Growth',
        target: 'For scaling businesses.',
        upfrontPrice: 5000,
        monthlyPrice: 450,
        onboarding: 800,
        features: ['Advanced Animations', '10 Pages', 'CMS Integration', 'Analytics Setup'],
        isPopular: true,
        other: 'Domain fees separate.'
    },
    {
        id: 'tier-3',
        name: 'Enterprise',
        target: 'For complex applications.',
        upfrontPrice: 10000,
        monthlyPrice: 850,
        onboarding: 1500,
        features: ['Custom Web App', 'Unlimited Pages', 'API Integrations', 'Priority Support'],
        isPopular: false,
        other: 'Domain fees separate.'
    }
];

export const Pricing = () => {
    // ==========================================
    // 1. STATE MANAGEMENT
    // ==========================================
    const [isMonthly, setIsMonthly] = useState(false);
    const [selectedTierId, setSelectedTierId] = useState<string | null>(null);
    const [hostingPlan, setHostingPlan] = useState<'none' | 'hosting' | 'hm'>('none');

    // Contract Terms: 1 = 1 Month, 12 = 1 Year, 24 = 2 Years
    const [contractTerm, setContractTerm] = useState<1 | 12 | 24>(1);

    // Define base addon prices
    const baseHostingFee = 30; // Pure hosting
    const baseMaintenanceFee = 120; // Pure maintenance (Total H&M = £150)
    const baseHMFee = baseHostingFee + baseMaintenanceFee;

    const selectedTier = dynamicPricingData.find(t => t.id === selectedTierId);

    // ==========================================
    // 2. PRICING LOGIC & CALCULATIONS
    // ==========================================

    // Calculate Upfront Costs
    const totalUpfront = selectedTier ? (
        (isMonthly ? 0 : selectedTier.upfrontPrice) + selectedTier.onboarding
    ) : 0;

    // Calculate Base Monthly Costs
    let rawMonthlyBuild = 0;
    if (selectedTier && isMonthly) {
        rawMonthlyBuild = selectedTier.monthlyPrice;
        // Condition: Monthly cost is 20% less when selecting Hosting & Maintenance for life
        if (hostingPlan === 'hm') {
            rawMonthlyBuild = rawMonthlyBuild * 0.8;
        }
    }

    // Calculate Monthly Addon Costs & Total based on conditions
    let currentMonthlyTotal = 0;
    let currentAddonCost = 0;

    // Phased Pricing for Upfront UI display
    let phasedPricing = null;

    if (!isMonthly) {
        // UPFRONT LOGIC
        if (hostingPlan === 'hosting') {
            currentAddonCost = baseHostingFee;
            currentMonthlyTotal = currentAddonCost;
        } else if (hostingPlan === 'hm') {
            // Condition: 30% off H&M up to 10hrs/mo.
            // First 3 months: Maintenance free (Hosting only).
            // Months 4-12: 30% off total H&M.
            // Year 2+: Full price.
            currentAddonCost = baseHostingFee; // Month 1-3 starts at just hosting cost
            currentMonthlyTotal = currentAddonCost;

            phasedPricing = {
                months1to3: baseHostingFee,
                months4to12: baseHMFee * 0.7,
                year2Plus: baseHMFee
            };
        }
    } else {
        // MONTHLY LOGIC
        if (hostingPlan === 'hosting') {
            currentAddonCost = baseHostingFee;
        } else if (hostingPlan === 'hm') {
            currentAddonCost = baseHMFee;
        }

        let subtotal = rawMonthlyBuild + currentAddonCost;

        // Apply Contract Discounts (10% off altogether for 1yr, 20% off for 2yr)
        if (contractTerm === 12) subtotal = subtotal * 0.9;
        if (contractTerm === 24) subtotal = subtotal * 0.8;

        currentMonthlyTotal = subtotal;
    }

    // ==========================================
    // 3. RENDER UI
    // ==========================================
    return (
        <section className="py-20 px-6 w-full bg-gray-50 dark:bg-gray-900 transition-colors">
            <div className="max-w-7xl mx-auto">

                {/* --- Header & Billing Toggle --- */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Transparent Pricing</h2>
                    <div className="flex justify-center items-center gap-4">
                        <span className={`text-sm font-medium ${!isMonthly ? 'text-gray-900 dark:text-white' : 'text-gray-500'}`}>Pay Upfront</span>
                        <button
                            onClick={() => setIsMonthly(!isMonthly)}
                            className="relative w-16 h-8 rounded-full bg-blue-600 transition-colors focus:outline-none"
                        >
                            <div className={`absolute top-1 w-6 h-6 rounded-full bg-white transition-transform duration-300 ${isMonthly ? 'left-9' : 'left-1'}`}></div>
                        </button>
                        <span className={`text-sm font-medium ${isMonthly ? 'text-gray-900 dark:text-white' : 'text-gray-500'}`}>Pay Monthly</span>
                    </div>

                    {/* Contract Term Selector (Only visible for Monthly) */}
                    {isMonthly && (
                        <div className="mt-8 inline-flex bg-gray-200 dark:bg-gray-800 p-1 rounded-xl">
                            {[
                                { val: 1, label: '1 Month' },
                                { val: 12, label: '1 Year (10% Off)' },
                                { val: 24, label: '2 Years (20% Off)' }
                            ].map((term) => (
                                <button
                                    key={term.val}
                                    onClick={() => setContractTerm(term.val as 1|12|24)}
                                    className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${contractTerm === term.val ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-white shadow-sm' : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'}`}
                                >
                                    {term.label}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* --- 1. PRICING CARDS GRID --- */}
                <div className="grid md:grid-cols-3 gap-8 mb-16 text-left">
                    {dynamicPricingData.map((tier) => {
                        const isSelected = selectedTierId === tier.id;

                        return (
                            <div
                                key={tier.id}
                                onClick={() => setSelectedTierId(tier.id)}
                                className={`cursor-pointer p-8 rounded-3xl transition-all transform ${isSelected ? 'ring-4 ring-blue-500 scale-105 shadow-2xl' : 'hover:-translate-y-2 shadow-lg'} ${tier.isPopular && !isSelected ? 'bg-blue-600 text-white' : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700'}`}
                            >
                                <div className="flex justify-between items-center">
                                    <h3 className="text-2xl font-bold">{tier.name}</h3>
                                    {isSelected && <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full">Selected</span>}
                                </div>

                                <p className={`${tier.isPopular && !isSelected ? 'text-blue-100' : 'text-gray-500 dark:text-gray-400'} mt-2 text-sm`}>{tier.target}</p>

                                <div className="mt-6 mb-4">
                                    <div className="text-4xl font-black mb-1">
                                        £{isMonthly ? tier.monthlyPrice : tier.upfrontPrice}
                                        {isMonthly && <span className="text-lg font-medium text-gray-400">/mo</span>}
                                    </div>
                                    <div className={`text-sm font-medium ${tier.isPopular && !isSelected ? 'text-blue-200' : 'text-gray-500'}`}>
                                        + £{tier.onboarding} Onboarding Fee (One-time)
                                    </div>
                                </div>

                                <ul className={`space-y-4 mb-8 ${tier.isPopular && !isSelected ? 'text-blue-50' : 'text-gray-600 dark:text-gray-300'}`}>
                                    {tier.features.map((feature, index) => (
                                        <li key={index} className="flex gap-2">
                                            <CheckCircle size={20} className={tier.isPopular && !isSelected ? 'text-white' : 'text-blue-500 flex-shrink-0'}/>
                                            <span className="text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button
                                    className={`w-full py-3 rounded-full font-bold transition-colors ${isSelected ? 'bg-blue-600 text-white' : tier.isPopular ? 'bg-white text-blue-600' : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'}`}
                                >
                                    {isSelected ? 'Plan Selected' : `Select ${tier.name}`}
                                </button>
                            </div>
                        );
                    })}
                </div>

                {/* --- 2. LOWER SECTION: SETUP & CUSTOMIZATION --- */}
                <div className="max-w-5xl mx-auto w-full space-y-8">
                    <div className="w-full bg-white dark:bg-gray-800 p-8 md:p-12 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm">

                        <div className="w-full">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Customize Your Infrastructure</h3>
                            <div className="grid md:grid-cols-2 gap-6 text-left">

                                {/* Basic Hosting */}
                                <div
                                    onClick={() => setHostingPlan(hostingPlan === 'hosting' ? 'none' : 'hosting')}
                                    className={`cursor-pointer p-6 rounded-2xl border-2 transition-all ${hostingPlan === 'hosting' ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20' : 'border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900'} flex gap-4 h-full`}
                                >
                                    <Server className={hostingPlan === 'hosting' ? 'text-blue-600 flex-shrink-0' : 'text-gray-400 flex-shrink-0'} size={32}/>
                                    <div>
                                        <h4 className="font-bold text-gray-900 dark:text-white text-lg">Managed Hosting Only</h4>
                                        <p className="text-gray-500 dark:text-gray-400 text-sm mt-1 mb-3">
                                            Fast, secure UK servers. Technical management handled behind the scenes.
                                        </p>
                                        <span className="font-bold text-gray-900 dark:text-white">+£{baseHostingFee}/mo</span>
                                    </div>
                                </div>

                                {/* Hosting & Maintenance */}
                                <div
                                    onClick={() => setHostingPlan(hostingPlan === 'hm' ? 'none' : 'hm')}
                                    className={`cursor-pointer p-6 rounded-2xl border-2 transition-all ${hostingPlan === 'hm' ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20' : 'border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900'} flex gap-4 h-full`}
                                >
                                    <Shield className={hostingPlan === 'hm' ? 'text-cyan-600 flex-shrink-0' : 'text-gray-400 flex-shrink-0'} size={32}/>
                                    <div>
                                        <h4 className="font-bold text-gray-900 dark:text-white text-lg">Hosting & Maintenance</h4>
                                        <p className="text-gray-500 dark:text-gray-400 text-sm mt-1 mb-3">
                                            Hosting plus up to 10hrs/mo of edits, technical support, and updates.
                                        </p>

                                        {/* Dynamic Discount Badges based on Payment Mode */}
                                        {!isMonthly ? (
                                            <div className="inline-block bg-cyan-100 dark:bg-cyan-900/50 text-cyan-800 dark:text-cyan-300 text-xs font-bold px-3 py-2 rounded-lg mt-2">
                                                🎁 1st 3 Months Maintenance FREE<br/>
                                                ⚡ 30% OFF for the rest of Year 1
                                            </div>
                                        ) : (
                                            <div className="inline-block bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 text-xs font-bold px-3 py-2 rounded-lg mt-2">
                                                📉 Unlocks 20% OFF your monthly build fee for life.
                                            </div>
                                        )}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* --- 3. LIVE CHECKOUT ESTIMATOR --- */}
                    <div className="w-full bg-gray-900 text-white p-8 md:p-10 rounded-3xl border border-gray-800 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 -mt-16 -mr-16 text-gray-800 opacity-50">
                            <ShoppingCart size={150} />
                        </div>

                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                                <ShoppingCart className="text-blue-500" />
                                Your Estimate
                            </h3>

                            {selectedTierId ? (
                                <div className="space-y-6">

                                    {/* --- Due Today Section --- */}
                                    <div className="border-b border-gray-700 pb-6 space-y-4">
                                        <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider">Due Today</h4>

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
                                        <div className="flex justify-between items-center pt-2">
                                            <span className="text-lg text-gray-300">Total Upfront</span>
                                            <span className="text-2xl font-black text-white">£{totalUpfront}</span>
                                        </div>
                                    </div>

                                    {/* --- Monthly Recurring Section --- */}
                                    <div className="pb-6 space-y-4">
                                        <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider">Monthly Recurring</h4>

                                        {/* Monthly Build Fee */}
                                        {isMonthly && (
                                            <div className="flex justify-between items-center text-sm">
                                                <span className="text-gray-300 flex items-center gap-2">
                                                    <Code size={16}/> Website Build (Monthly)
                                                </span>
                                                <div className="text-right">
                                                    {hostingPlan === 'hm' && (
                                                        <span className="line-through text-gray-600 text-xs mr-2">£{selectedTier?.monthlyPrice}</span>
                                                    )}
                                                    <span className="font-bold">£{rawMonthlyBuild}</span>
                                                </div>
                                            </div>
                                        )}

                                        {/* Infrastructure Fee & Phased Pricing Details */}
                                        {hostingPlan !== 'none' && (
                                            <>
                                                <div className="flex justify-between items-center text-sm">
                                                    <span className="text-gray-300 flex items-center gap-2">
                                                        <Server size={16}/>
                                                        {hostingPlan === 'hosting' ? 'Managed Hosting' : 'Hosting & Maintenance'}
                                                    </span>
                                                    <span className="font-medium">+£{currentAddonCost}</span>
                                                </div>

                                                {/* Details for Upfront + H&M Phased Discounts */}
                                                {!isMonthly && hostingPlan === 'hm' && phasedPricing && (
                                                    <div className="bg-gray-800/50 p-4 rounded-xl mt-2 space-y-2 border border-gray-700">
                                                        <p className="text-xs text-cyan-400 font-bold mb-2">🎁 Upfront Maintenance Discount Schedule:</p>
                                                        <div className="flex justify-between text-xs text-gray-400">
                                                            <span>Months 1-3 (Hosting Only)</span>
                                                            <span className="text-white">£{phasedPricing.months1to3}/mo</span>
                                                        </div>
                                                        <div className="flex justify-between text-xs text-gray-400">
                                                            <span>Months 4-12 (30% Off)</span>
                                                            <span className="text-white">£{phasedPricing.months4to12}/mo</span>
                                                        </div>
                                                        <div className="flex justify-between text-xs text-gray-400">
                                                            <span>Year 2+ (Standard Rate)</span>
                                                            <span className="text-white">£{phasedPricing.year2Plus}/mo</span>
                                                        </div>
                                                    </div>
                                                )}
                                            </>
                                        )}

                                        {/* Contract Term Display & Breakout Notice */}
                                        {isMonthly && (
                                            <>
                                                <div className="flex justify-between items-center text-sm border-t border-gray-800 pt-4">
                                                    <span className="text-blue-400 flex items-center gap-2">
                                                        <Calendar size={16}/> {contractTerm === 1 ? '1 Month' : contractTerm === 12 ? '1 Year' : '2 Year'} Contract
                                                    </span>
                                                    {contractTerm !== 1 && (
                                                        <span className="text-blue-400 font-bold">-{contractTerm === 12 ? '10%' : '20%'} Bundle Applied</span>
                                                    )}
                                                </div>
                                                <p className="text-xs text-gray-500 italic mt-1">
                                                    *Breakout fees apply if cancelled before contract term ends (equal to the remaining fees for that month).
                                                </p>
                                            </>
                                        )}

                                        {/* Final Monthly Total Calculation */}
                                        <div className="flex justify-between items-center pt-4 border-t border-gray-800">
                                            <span className="text-lg text-gray-300">
                                                {!isMonthly && hostingPlan === 'hm' ? 'Starting Monthly' : 'Total Monthly'}
                                            </span>
                                            <span className="text-2xl font-black text-blue-400">£{currentMonthlyTotal}/mo</span>
                                        </div>
                                    </div>

                                    <button className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-full font-bold text-lg transition-colors">
                                        Start Your Project
                                    </button>
                                </div>
                            ) : (
                                <div className="text-center py-8">
                                    <p className="text-gray-400 text-lg">Please select a build plan above to see your estimate.</p>
                                </div>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};