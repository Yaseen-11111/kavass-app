import { useState, useMemo } from "react";
import { addonData, dynamicPricingData } from "@/data/content.ts";
import { HostingPlanType, ContractTermType, PhasedPricing, PricingTier } from "@/data/content.ts";

export const usePricingController = () => {
    // 1. State
    const [isMonthly, setIsMonthly] = useState<boolean>(false);
    const [selectedTierId, setSelectedTierId] = useState<string | null>(null);
    const [hostingPlan, setHostingPlan] = useState<HostingPlanType>('none');
    const [contractTerm, setContractTerm] = useState<ContractTermType>(1);
    const [includeCarePlan, setIncludeCarePlan] = useState<boolean>(false);

    // 2. Data Retrieval
    const selectedTier = useMemo<PricingTier | null>(() =>
            (dynamicPricingData as PricingTier[]).find(t => t.id === selectedTierId) || null,
        [selectedTierId]);

    const hostingBase = Math.round(addonData.find(t => t.id === 'hosting')?.price || 25);
    const hmBase = Math.round(addonData.find(t => t.id === 'maintenance')?.price || 75);

    // 3. Logic & Calculations
    const rawMonthlyBuild = useMemo(() => {
        if (!selectedTier || !isMonthly) return 0;
        let price = selectedTier.monthlyPrice;

        if (hostingPlan === 'hm') price *= 0.8;
        if (includeCarePlan) price *= 0.7;

        return Math.round(price);
    }, [selectedTier, isMonthly, hostingPlan, includeCarePlan]);

    const currentAddonCost = useMemo(() => {
        if (hostingPlan === 'hosting') return hostingBase;
        if (hostingPlan === 'hm') {
            return isMonthly ? Math.round(hmBase * 0.75) : hmBase;
        }
        return 0;
    }, [hostingPlan, isMonthly, hostingBase, hmBase]);

    const totalMonthly = useMemo(() => {
        const subtotal = rawMonthlyBuild + currentAddonCost;
        const contractMultiplier = contractTerm === 12 ? 0.9 : contractTerm === 24 ? 0.8 : 1;
        if (!isMonthly) return (
            Math.round(hostingBase)
        )
        return Math.round(subtotal*contractMultiplier);
    }, [rawMonthlyBuild, currentAddonCost, contractTerm]);

    const totalUpfront = useMemo(() => {
        return !isMonthly && selectedTier
            ? selectedTier.upfrontPrice + selectedTier.onboarding
            : 0;
    }, [isMonthly, selectedTier]);

    const phasedPricing = useMemo<PhasedPricing | null>(() => {
        if (isMonthly || hostingPlan !== 'hm') return null;
        return {
            months1to3: hostingBase,
            months4to12: Math.round(hmBase * 0.7),
            year2Plus: hmBase
        };
    }, [isMonthly, hostingPlan, hostingBase, hmBase]);

    return {
        // State Variables
        isMonthly, setIsMonthly,
        selectedTierId, setSelectedTierId,
        hostingPlan, setHostingPlan,
        contractTerm, setContractTerm,
        includeCarePlan, setIncludeCarePlan,

        // Computed Values
        selectedTier,
        totalMonthly,
        currentMonthlyTotal: totalMonthly,
        totalUpfront,
        rawMonthlyBuild,
        currentAddonCost,
        phasedPricing,
        baseHostingFee: hostingBase,
        baseHMFee: hmBase
    };
};