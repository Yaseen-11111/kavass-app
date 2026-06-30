import React from 'react';
import { Server, Shield } from 'lucide-react';
import { HostingPlanType } from "@/types/pricing";

interface InfrastructureSelectionProps {
    hostingPlan: HostingPlanType;
    setHostingPlan: (plan: HostingPlanType) => void;
    baseHostingFee: number;
    baseHMFee: number;
    isMonthly: boolean;
}

export const InfrastructureSelection: React.FC<InfrastructureSelectionProps> = ({
                                                                                    hostingPlan,
                                                                                    setHostingPlan,
                                                                                    baseHostingFee,
                                                                                    baseHMFee,
                                                                                    isMonthly
                                                                                }) => {
    return (
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
    );
};