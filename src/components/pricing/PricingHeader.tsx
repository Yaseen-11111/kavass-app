import React from 'react';
import { ContractTermType } from "@/data/content";

interface PricingHeaderProps {
    isMonthly: boolean;
    setIsMonthly: (isMonthly: boolean) => void;
    contractTerm: ContractTermType;
    setContractTerm: (term: ContractTermType) => void;
}

export const PricingHeader: React.FC<PricingHeaderProps> = ({
                                                                isMonthly,
                                                                setIsMonthly,
                                                                contractTerm,
                                                                setContractTerm
                                                            }) => {
    return (
        <div className="text-center mb-16 space-y-6">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                Transparent, predictable pricing.
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                Choose how you want to pay for your build, then select the infrastructure that best supports your growth.
            </p>

            <div className="flex flex-col items-center gap-6 mt-8">
                {/* Billing Toggle */}
                <div className="flex justify-center items-center gap-4 bg-white dark:bg-gray-800 p-2 rounded-full border border-gray-200 dark:border-gray-700 shadow-sm">
                    <span
                        className={`text-sm font-semibold px-4 py-2 rounded-full cursor-pointer transition-colors ${!isMonthly ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white' : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'}`}
                        onClick={() => setIsMonthly(false)}
                    >
                        Pay Upfront
                    </span>
                    <button
                        onClick={() => setIsMonthly(!isMonthly)}
                        className="relative w-14 h-7 rounded-full bg-blue-600 transition-colors focus:outline-none"
                    >
                        <div className={`absolute top-1 w-5 h-5 rounded-full bg-white transition-transform duration-300 shadow-sm ${isMonthly ? 'left-8' : 'left-1'}`}></div>
                    </button>
                    <span
                        className={`text-sm font-semibold px-4 py-2 rounded-full cursor-pointer transition-colors ${isMonthly ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white' : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'}`}
                        onClick={() => setIsMonthly(true)}
                    >
                        Pay Monthly
                    </span>
                </div>

                {/* Contract Term Selector */}
                <div className={`overflow-hidden transition-all duration-300 ${isMonthly ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="inline-flex bg-gray-200 dark:bg-gray-800 p-1 rounded-xl shadow-inner">
                        {[
                            { val: 1 as ContractTermType, label: '1 Month' },
                            { val: 12 as ContractTermType, label: '1 Year (10% Off)' },
                            { val: 24 as ContractTermType, label: '2 Years (20% Off)' }
                        ].map((term) => (
                            <button
                                key={term.val}
                                onClick={() => setContractTerm(term.val)}
                                className={`px-5 py-2.5 rounded-lg text-sm font-bold transition-all ${contractTerm === term.val ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-white shadow-sm' : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'}`}
                            >
                                {term.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};