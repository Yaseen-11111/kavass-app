import React from 'react';
import { ShoppingCart, Code, Server, Calendar, ArrowRight } from 'lucide-react';
import { PricingTier, HostingPlanType, ContractTermType, PhasedPricing } from "@/data/content.ts";

interface PricingEstimatorProps {
    selectedTierId: string | null;
    selectedTier: PricingTier | null;
    isMonthly: boolean;
    totalUpfront: number;
    rawMonthlyBuild: number;
    hostingPlan: HostingPlanType;
    currentAddonCost: number;
    phasedPricing: PhasedPricing | null;
    contractTerm: ContractTermType;
    currentMonthlyTotal: number;
}

export const PricingEstimator: React.FC<PricingEstimatorProps> = ({
                                                                      selectedTierId,
                                                                      selectedTier,
                                                                      isMonthly,
                                                                      totalUpfront,
                                                                      rawMonthlyBuild,
                                                                      hostingPlan,
                                                                      currentAddonCost,
                                                                      phasedPricing,
                                                                      contractTerm,
                                                                      currentMonthlyTotal
                                                                  }) => {
    return (
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
                                        <span>Year 1+ <span className="italic">(Standard)</span></span>
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
                                        <span className="text-blue-400 font-bold">-{contractTerm === 12 ? '10%' : '20%'} Savings</span>
                                    )}
                                </div>
                            )}

                            {/* Final Monthly Calculation */}
                            <div className="flex justify-between items-center pt-3 mt-3 border-t border-gray-700">
                                <span className="text-sm text-gray-300">
                                    {!isMonthly && hostingPlan === 'hm' ? 'Starting Monthly' : 'Total Monthly'}
                                </span>
                                <span className="text-2xl font-black text-blue-400">
                                    {!isMonthly && hostingPlan === 'hm' ? 'Starting Monthly' : 'Total Monthly'}
                                    £{currentMonthlyTotal}<span className="text-sm font-medium text-gray-400">/mo</span>
                                </span>
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
    );
};