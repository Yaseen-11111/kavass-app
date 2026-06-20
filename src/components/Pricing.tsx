import React from 'react';
import { CheckCircle, Shield, Server, Code, ShoppingCart, Info } from 'lucide-react';
import {usePricingController} from "@/controllers/usePricingController.tsx";

// Ensure these are correctly pointing to your data files

export const Pricing = () => {
    // ==========================================
    // 1. STATE MANAGEMENT
    // ==========================================
    const {
        isMonthly,
        setIsMonthly,
        selectedTierId,
        selectedTier,
        setSelectedTierId,
        hostingPlan,
        setHostingPlan,
        includeCarePlan,
        setIncludeCarePlan,
        calculatePrice,
        getAddonMonthlyCost,
        getBuildMonthlyCost,
        dynamicPricingData,
        totalMonthly,
        totalUpfront,
        toggleMaintenanceAndCare,
        hostOnly, hostMaintenance
    } = usePricingController();

    // ==========================================
    // 4. RENDER UI
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

                                <p className={`${tier.isPopular && !isSelected ? 'text-blue-100' : 'text-gray-500 dark:text-gray-400'} mt-2`}>{tier.target}</p>

                                {/* Only show the 'other' text (e.g. Domain fees) if Upfront is selected */}
                                {!isMonthly && (
                                    <p className={`${tier.isPopular && !isSelected ? 'text-green-300' : 'text-green-600 dark:text-green-400'} mt-2 font-medium text-sm`}>
                                        {tier.other}
                                    </p>
                                )}

                                <div className="my-6">
                                    {isMonthly && includeCarePlan && (
                                        <div className="text-sm line-through opacity-50 mb-1">£{tier.monthlyPrice}/mo</div>
                                    )}
                                    <div className="text-4xl font-black">{calculatePrice(tier.monthlyPrice, tier.upfrontPrice)}</div>
                                </div>

                                <ul className={`space-y-4 mb-8 ${tier.isPopular && !isSelected ? 'text-blue-50' : 'text-gray-600 dark:text-gray-300'}`}>
                                    {tier.features.map((feature, index) => (
                                        <li key={index} className="flex gap-2">
                                            <CheckCircle size={20} className={tier.isPopular && !isSelected ? 'text-white' : 'text-blue-500 flex-shrink-0'}/>
                                            <span>{feature}</span>
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

                        {/* Ownership & Hosting Explanation */}
                        <div className="w-full mb-12">
                            <h3 className="text-2xl font-bold text-center mb-10 text-gray-900 dark:text-white">How We Handle Your Setup</h3>
                            <div className="grid md:grid-cols-2 gap-12 text-left">
                                <div>
                                    <div className="flex items-center gap-3 mb-3">
                                        <Shield className="text-blue-600" size={24}/>
                                        <h4 className="text-lg font-bold text-gray-900 dark:text-white">1. Your Domain (Ownership)</h4>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                        You should always hold the "keys" to your digital identity. We guide you through purchasing your domain directly, ensuring you remain the legal owner.
                                    </p>
                                </div>
                                <div>
                                    <div className="flex items-center gap-3 mb-3">
                                        <Server className="text-purple-600" size={24}/>
                                        <h4 className="text-lg font-bold text-gray-900 dark:text-white">2. Your Hosting (Infrastructure)</h4>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                        We handle the technical heavy lifting. Your site lives on our high-performance, secure servers where we manage all speed optimizations and security patches.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <hr className="border-gray-200 dark:border-gray-700 mb-12"/>

                        {/* Customization Selectors */}
                        <div className="w-full">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Customize Your Plan</h3>
                            <div className="grid md:grid-cols-2 gap-6 text-left">

                                {/* Care Plan Toggle */}
                                <div
                                    onClick={toggleMaintenanceAndCare}
                                    className={`cursor-pointer p-6 rounded-2xl border-2 transition-all ${includeCarePlan ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20' : 'border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900'} flex gap-4 h-full`}
                                >
                                    <Shield className={includeCarePlan ? 'text-cyan-600 flex-shrink-0' : 'text-gray-400 flex-shrink-0'} size={32}/>
                                    <div>
                                        <h4 className="font-bold text-gray-900 dark:text-white text-lg">What is maintenance? It is the Kavass Care Plan</h4>
                                        <p className="text-gray-500 dark:text-gray-400 text-sm mt-1 mb-3">
                                            Priority support, unlimited minor edits, and top-tier security.
                                        </p>

                                        <div
                                            className="inline-block bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-xs font-bold px-3 py-1 rounded-full">
                                            Unlocks 30% OFF the monthly fee for the Website, excluding Hosting and
                                            Maintenance. Only on upfront. Domain fees separate.
                                        </div>
                                    </div>
                                </div>

                                {/* Add-on Toggles */}
                                <div className="flex flex-col gap-4">

                                    {/* Managed Hosting (NO DISCOUNT) */}
                                    <div
                                        onClick={() => {
                                            setHostingPlan(hostingPlan === 'hosting' ? 'none' : 'hosting');
                                            setIncludeCarePlan(false); // Deselect Care Plan if they switch to Basic Hosting
                                        }}
                                        className={`cursor-pointer p-4 rounded-xl border-2 transition-all ${hostingPlan === 'hosting' ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20' : 'border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900'} flex justify-between items-center flex-1`}
                                    >
                                        <div className="flex gap-3 items-center">
                                            <Server className={hostingPlan === 'hosting' ? 'text-blue-600' : 'text-gray-400'} size={24}/>
                                            <div>
                                                <h4 className="font-bold text-gray-900 dark:text-white">Managed Hosting</h4>
                                                <p className="text-gray-500 dark:text-gray-400 text-xs">Fast, secure UK servers</p>
                                                {/* Notice: No discount badge rendered here because hostOnly.isDiscounted will always be false */}
                                            </div>
                                        </div>
                                        <span className="font-bold text-gray-900 dark:text-white">+£{hostOnly.price}/mo</span>
                                    </div>

                                    {/* Hosting & Maintenance (DISCOUNT ELIGIBLE) */}
                                    <div
                                        onClick={toggleMaintenanceAndCare}
                                        className={`cursor-pointer p-4 rounded-xl border-2 transition-all ${hostingPlan === 'maintenance' ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20' : 'border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900'} flex justify-between items-center flex-1`}
                                    >
                                        <div className="flex gap-3 items-center">
                                            <Code className={hostingPlan === 'maintenance' ? 'text-blue-600' : 'text-gray-400'} size={24}/>
                                            <div>
                                                <h4 className="font-bold text-gray-900 dark:text-white">Hosting & Maintenance</h4>
                                                <p className="text-gray-500 dark:text-gray-400 text-xs">Hosting + Monthly Code Updates</p>
                                                {hostMaintenance.isDiscounted && (
                                                    <p className="text-blue-600 dark:text-blue-400 text-xs font-bold mt-1">
                                                        Save £{hostMaintenance.originalPrice - hostMaintenance.price}/mo
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                        <span className="font-bold text-gray-900 dark:text-white">+£{hostMaintenance.price}/mo</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* --- 3. LIVE CHECKOUT ESTIMATOR --- */}
                    <div className="w-full bg-gray-900 text-white p-8 md:p-10 rounded-3xl border border-gray-800 shadow-2xl relative overflow-hidden">
                        {/* Decorative Background Element */}
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
                                    {/* Breakdown List */}
                                    <div className="space-y-4 border-b border-gray-700 pb-6">

                                        {/* Core Build Fee */}
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-400">Website Build ({selectedTier?.name})</span>
                                            <span className="font-bold">
                                                {isMonthly ? `£${getBuildMonthlyCost()}/mo` : `£${selectedTier?.upfrontPrice}`}
                                            </span>
                                        </div>

                                        {/* Kavass Care Plan Discount Line */}
                                        {includeCarePlan && (
                                            <div className="flex justify-between items-center text-sm">
                                                <span className="text-cyan-400 flex items-center gap-2">
                                                    <Shield size={16}/> Kavass Care Plan
                                                </span>
                                                <span className="text-cyan-400">
                                                    {isMonthly ? '-30% Build Fee Applied' : 'Selected'}
                                                </span>
                                            </div>
                                        )}

                                        {/* Hosting Line */}
                                        {hostingPlan !== 'none' && (
                                            <div className="flex justify-between items-center text-sm">
                                                <span className="text-gray-400 flex items-center gap-2">
                                                    <Server size={16}/>
                                                    {hostingPlan === 'hosting' ? 'Managed Hosting' : 'Hosting & Maintenance'}
                                                </span>
                                                <span className="font-medium">+£{getAddonMonthlyCost()}/mo</span>
                                            </div>
                                        )}

                                        {/* Display specific tier notes (like "Domain fees separate") only if paying upfront */}
                                        {!isMonthly && selectedTier?.other && (
                                            <div className="flex justify-between items-center text-sm mt-2 pt-2 border-t border-gray-800">
                                                <span className="text-gray-500 flex items-center gap-2">
                                                    <Info size={14}/> Important Note
                                                </span>
                                                <span className="text-gray-500 text-xs">{selectedTier.other}</span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Final Totals */}
                                    <div className="pt-2 space-y-3">
                                        <div className="flex justify-between items-center">
                                            <span className="text-lg text-gray-300">Due Today</span>
                                            <span className="text-2xl font-black text-white">£{totalUpfront}</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-lg text-gray-300">Monthly Recurring</span>
                                            <span className="text-2xl font-black text-blue-400">£{totalMonthly}/mo</span>
                                        </div>
                                    </div>

                                    <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-full font-bold text-lg transition-colors">
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