export interface ProjectFile {
    name: string;
    language: string;
    content: string;
}

export interface Client {
    id: string;
    name: string;
    niche: string;
    status: 'Live' | 'Building' | 'Onboarding';
    monthlyRevenue: number;
    legalFees: number;
    buildFees: number;
    contractSigned: boolean;
    buildProgress: number; // 0-100
    servicesBought: string[];
    isOnMonthlyPlan: boolean;
    domainLink: string;
    files: ProjectFile[];
}

// --- TYPES & INTERFACES ---
export interface PortfolioItem {
    id: string;
    title: string;
    client: string;
    category: string;
    imageUrl: string;
    previewUrl: string; // Added to match your data
}

export interface PricingTier {
    id: string;
    name: string;
    target: string;
    isPopular?: boolean;
    monthlyPrice: number;
    upfrontPrice: number;
    onboarding: number;
    features: string[];
    other: string;
}

export interface PhasedPricing {
    months1to3: number;
    months4to12: number;
    year2Plus: number;
}

export type HostingPlanType = 'none' | 'hosting' | 'hm';
export type ContractTermType = 1 | 12 | 24;

export interface AddonData { // Renamed to match your usage
    id: string;
    name: string;
    description: string;
    price: number;
}

export interface FaqsData {
    question: string;
    answer: string;
}
