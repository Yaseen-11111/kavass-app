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

export interface PricingTier {
    id: string;
    name: string;
    target: string;
    upfrontPrice: number;    // Updated to match your data
    monthlyPrice: number;    // Updated to match your data
    features: string[];
    isPopular?: boolean;     // Made optional (?) to handle tiers without this key
    other?: string;          // Made optional (?) to handle tiers without this key
}

export interface AddonData { // Renamed to match your usage
    id: string;
    name: string;
    description: string;
    price: string;
}