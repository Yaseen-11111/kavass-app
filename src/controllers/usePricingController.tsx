import { useState } from "react";
import { addonData, dynamicPricingData } from "@/data/content.ts";

export const usePricingController = () => {
    // 1. State
    const [isMonthly, setIsMonthly] = useState<boolean>(false);
    const [selectedTierId, setSelectedTierId] = useState<string | null>(null);
    const [hostingPlan, setHostingPlan] = useState<'none' | 'hosting' | 'maintenance'>('none');
    const [contractTerm, setContractTerm] = useState<1 | 12 | 24>(1);
    const [includeCarePlan, setIncludeCarePlan] = useState<boolean>(false);

    // 2. Data Retrieval
    const selectedTier = dynamicPricingData.find(t => t.id === selectedTierId) || null;
    const hostingBase = Math.round(addonData.find(t => t.id === 'hosting')?.price || 25);
    const maintBase = Math.round(addonData.find(t => t.id === 'maintenance')?.price || 75);

    // 3. Logic & Calculations

    // --- Build Cost Calculation ---
    const getBaseBuildPrice = () => {
        if (!selectedTier || !isMonthly) return 0;
        let price = selectedTier.monthlyPrice;

        // 20% discount if Maintenance enabled
        if (hostingPlan === 'maintenance') price *= 0.8;
        // 30% discount if Care Plan enabled
        if (includeCarePlan) price *= 0.7;

        return Math.round(price);
    };

    // --- Addon Cost Calculation ---
    const getAddonCost = () => {
        if (hostingPlan === 'hosting') return hostingBase;
        if (hostingPlan === 'maintenance') {
            // 25% discount on maintenance if monthly
            return isMonthly ? Math.round(maintBase * 0.75) : maintBase;
        }
        return 0;
    };

    // --- Total Logic ---
    const buildMonthly = getBaseBuildPrice();
    const addonMonthly = getAddonCost();

    // Apply Contract Discounts to the subtotal
    const subtotal = buildMonthly + addonMonthly;
    const contractMultiplier = contractTerm === 12 ? 0.9 : contractTerm === 24 ? 0.8 : 1;
    const totalMonthly = Math.round(subtotal * contractMultiplier);

    // Upfront Logic
    const totalUpfront = !isMonthly && selectedTier
        ? selectedTier.upfrontPrice + selectedTier.onboarding
        : 0;

    // Phased Pricing (Only for Upfront + Maintenance)
    const getPhasedPricing = () => {
        if (isMonthly || hostingPlan !== 'maintenance') return null;
        return {
            months1to3: hostingBase,
            months4to12: Math.round(maintBase * 0.7),
            year2Plus: maintBase
        };
    };

    // --- Helpers ---
    const toggleMaintenanceAndCare = () => {
        const isTurningOn = hostingPlan !== 'maintenance';
        setHostingPlan(isTurningOn ? 'maintenance' : 'none');
        setIncludeCarePlan(isTurningOn);
    };

    return {
        currentMonthlyTotal,
        phasedPricing,
        // State
        isMonthly, setIsMonthly,
        selectedTierId, setSelectedTierId,
        hostingPlan, setHostingPlan,
        contractTerm, setContractTerm,
        includeCarePlan, setIncludeCarePlan,

        // Data & Computed
        selectedTier,
        totalMonthly,
        totalUpfront,

        phasedPricing: getPhasedPricing(),

        // Helper Methods
        toggleMaintenanceAndCare,
        hostingBase,
        maintBase
    };
};