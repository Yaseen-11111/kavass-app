export interface PricingTier {
    id: string;
    name: string;
    target: string;
    upfrontPrice: number;
    monthlyPrice: number;
    isPopular?: boolean;
    features: string[];
}

export interface Template {
    id: string;
    name: string;
    niche: string;
    previewUrl: string;
    difficultyRating: number;
}