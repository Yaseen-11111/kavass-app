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