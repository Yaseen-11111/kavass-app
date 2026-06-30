import React from 'react';
import { dynamicPricingData } from "@/data/content.ts";
import { usePricingController } from "@/hooks/usePricingController";
import { PricingTier } from "@/types/pricing";

import { PricingHeader } from "./PricingHeader";
import { PricingCard } from "./PricingCard";
import { InfrastructureSelection } from "./InfrastructureSelection";
import { PricingEstimator } from "./PricingEstimator";

export const Pricing: React.FC = () => {
    // 1. Initialize Controller
    const {
        isMonthly, setIsMonthly,
        selectedTier, selectedTierId, setSelectedTierId,
        hostingPlan, setHostingPlan,
        contractTerm, setContractTerm,
        totalUpfront,
        rawMonthlyBuild,
        currentAddonCost,
        phasedPricing,
        currentMonthlyTotal,
        baseHostingFee,
        baseHMFee
    } = usePricingController();

    // 2. Render UI
    return (
        <section className="py-24 px-6 w-full bg-gray-50 dark:bg-gray-900 transition-colors font-sans">
            <div className="max-w-7xl mx-auto">

                {/* Header & Toggles */}
                <PricingHeader
                    isMonthly={isMonthly}
                    setIsMonthly={setIsMonthly}
                    contractTerm={contractTerm}
                    setContractTerm={setContractTerm}
                />

                {/* Pricing Cards Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-16 lg:mb-24">
                    {(dynamicPricingData as PricingTier[]).map((tier) => (
                        <PricingCard
                            key={tier.id}
                            tier={tier}
                            isSelected={selectedTierId === tier.id}
                            isMonthly={isMonthly}
                            onSelect={setSelectedTierId}
                        />
                    ))}
                </div>

                {/* Infrastructure & Estimator Layout */}
                <div className="grid lg:grid-cols-12 gap-8 items-start">

                    <InfrastructureSelection
                        hostingPlan={hostingPlan}
                        setHostingPlan={setHostingPlan}
                        baseHostingFee={baseHostingFee}
                        baseHMFee={baseHMFee}
                        isMonthly={isMonthly}
                    />

                    <PricingEstimator
                        selectedTierId={selectedTierId}
                        selectedTier={selectedTier}
                        isMonthly={isMonthly}
                        totalUpfront={totalUpfront}
                        rawMonthlyBuild={rawMonthlyBuild}
                        hostingPlan={hostingPlan}
                        currentAddonCost={currentAddonCost}
                        phasedPricing={phasedPricing}
                        contractTerm={contractTerm}
                        currentMonthlyTotal={currentMonthlyTotal}
                    />

                </div>
            </div>
        </section>
    );
};