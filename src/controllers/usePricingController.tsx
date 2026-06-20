import {useState} from "react";
import {addonData, dynamicPricingData} from "@/data/content.ts";

export const usePricingController =() => {
    const [isMonthly, setIsMonthly] = useState<boolean>(false);
    const [selectedTierId, setSelectedTierId] = useState<string | null>(null);
    // REMOVED: selectedDataId (It was causing the 0 price bug)
    const [hostingPlan, setHostingPlan] = useState<'none' | 'hosting' | 'maintenance'>('none');
    const [includeCarePlan, setIncludeCarePlan] = useState<boolean>(false);

    // ==========================================
    // 2. PRICING & DISCOUNT LOGIC
    // ==========================================

    // Calculates the base Website Build fee
    const calculatePrice = (baseMonthly: number, baseUpfront: number) => {
        if (!isMonthly) return `£${baseUpfront}`;

        // Applies a 30% discount (multiply by 0.70) if Monthly AND Care Plan are active
        const finalMonthly = Math.round(includeCarePlan ? baseMonthly * 0.70 : baseMonthly);
        return `£${finalMonthly}/mo`;
    };

    // Helper to calculate add-on prices.
    const getAddonPrice = (basePrice: number, isEligibleForDiscount: boolean) => {
        // Only apply the 25% discount if Monthly is toggled AND the plan allows it
        const hasDiscount = isMonthly && isEligibleForDiscount;
        const discountedPrice = Math.round(basePrice * 0.75);

        return {
            price: hasDiscount ? discountedPrice : basePrice,
            isDiscounted: hasDiscount,
            originalPrice: basePrice
        };
    };

    // NEW LOGIC: Find specific addon prices from your data file securely
    // (Added fallbacks to 25 and 75 just in case the data file takes a second to load)
    const hostingBasePrice = addonData.find(t => t.id === 'hosting')?.price || 25;
    const maintenanceBasePrice = addonData.find(t => t.id === 'maintenance')?.price || 75;

    // Pre-calculate our specific add-on tiers
    const hostOnly = getAddonPrice(hostingBasePrice, false);      // FALSE = No discount ever
    const hostMaintenance = getAddonPrice(maintenanceBasePrice, true); // TRUE = Gets 25% off when Monthly is selected

    // ==========================================
    // 3. CHECKOUT & TOGGLE HELPERS
    // ==========================================

    // Find the full data object for the selected tier
    const selectedTier = dynamicPricingData.find(t => t.id === selectedTierId);

    // Calculate exact build cost for the checkout panel
    const getBuildMonthlyCost = () => {
        if (!selectedTier || !isMonthly) return 0;
        return Math.round(includeCarePlan ? selectedTier.monthlyPrice * 0.70 : selectedTier.monthlyPrice);
    };

    // Calculate exact add-on cost for the checkout panel
    const getAddonMonthlyCost = () => {
        if (hostingPlan === 'hosting') return hostOnly.price;
        if (hostingPlan === 'maintenance') return hostMaintenance.price;
        return 0;
    };

    // Two-way sync: Clicking Care Plan toggles Maintenance, and vice versa
    const toggleMaintenanceAndCare = () => {
        const isTurningOn = hostingPlan !== 'maintenance';
        setHostingPlan(isTurningOn ? 'maintenance' : 'none');
        setIncludeCarePlan(isTurningOn);
    };

    // Totals for the bottom summary
    const totalUpfront = !isMonthly && selectedTier ? selectedTier.upfrontPrice : 0;
    const totalMonthly = getBuildMonthlyCost() + getAddonMonthlyCost();

    return {
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
        getAddonPrice,
        getAddonMonthlyCost,
        getBuildMonthlyCost,
        addonData,
        dynamicPricingData,
        totalMonthly,
        totalUpfront,
        toggleMaintenanceAndCare,
        hostOnly, hostingBasePrice, hostMaintenance
    };
}