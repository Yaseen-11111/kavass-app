import React from 'react';
import { CheckCircle, Info } from 'lucide-react';
import { PricingTier } from "@/data/content.ts";

interface PricingCardProps {
    tier: PricingTier;
    isSelected: boolean;
    isMonthly: boolean;
    onSelect: (id: string) => void;
}

export const PricingCard: React.FC<PricingCardProps> = ({ tier, isSelected, isMonthly, onSelect }) => {
    return (
        <div
            onClick={() => onSelect(tier.id)}
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
};