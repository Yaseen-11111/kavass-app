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
    onboarding: number;
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
    price: number;
}



// --- SITE CONTENT ---

export const contactInfo = {
    whatsapp: "https://wa.me/447393547563", // Replace with your actual WhatsApp link [cite: 455]
    instagram: "https://instagram.com/kavass.io", // Replace with your actual handle [cite: 455]
    email: "hello@kavass.co.uk"
};

export const techStack = [
    "Bespoke Modular Professional Website Application",
    "Latest technology and security",
    "Expert knowledge on web hosting",
    "SSL Certificates for Security and peace of mide",
    "Artistic with a unique approach",
    "No long processes or hidden fee"
]; // [cite: 458]

export const portfolioData: PortfolioItem[] = [
    {
        id: "p1",
        title: "Luxe Polished Nails",
        client: "Luxe Polished Nails, Fleet",
        category: "Independent Nail Bar",
        imageUrl: "/kavass-app/projects/NailBar.png", // Ensure you add this image to your public folder [cite: 459]
        previewUrl: "/kavass-app/previews/NailBar.html"
    },
    {
        id: "p2",
        title: "Razor & Blade",
        client: "Razor & Blade, Aldershot",
        category: "Independent Barber Shop",
        imageUrl: "/kavass-app/projects/Barber.png", // Ensure you add this image to your public folder [cite: 459]
        previewUrl: "/kavass-app/previews/BarberSite.html"
    },
    {
        id: "p3",
        title: "Apex Builders",
        client: "Apex Builders, Camberley",
        category: "Construction Company",
        imageUrl: "/kavass-app/projects/Builder.png", // Ensure you add this image to your public folder [cite: 459]
        previewUrl: "/kavass-app/previews/BuilderSite.html"
    },
    {
        id: "p4",
        title: "Saffron Indian",
        client: "Saffron Indian, Farnborough",
        category: "Restaurant",
        imageUrl: "/kavass-app/projects/Indian.png", // Ensure you add this image to your public folder [cite: 459]
        previewUrl: "/kavass-app/previews/SaffronKitchen.html"
    },
    {
        id: "p5",
        title: "Vanguard Legal",
        client: "Vanguard Legal, Guildford",
        category: "Legal Firm",
        imageUrl: "/kavass-app/projects/Legal.png", // Ensure you add this image to your public folder [cite: 459]
        previewUrl: "/kavass-app/previews/LawFirm.html"
    },
    {
        id: "p6",
        title: "Velocity Media",
        client: "Velocity Media, Aldershot",
        category: "Retail",
        imageUrl: "/kavass-app/projects/Social.png", // Ensure you add this image to your public folder [cite: 459]
        previewUrl: "/kavass-app/previews/SocialAgency.html"
    }
];

export const dynamicPricingData: PricingTier[] = [
    {
        id: 'standard',
        name: 'Standard',
        target: 'For local businesses',
        onboarding: 129,
        upfrontPrice: 850,
        monthlyPrice: 100,
        features: ['5 Custom Pages', 'Mobile Responsive', 'SEO Optimization', 'Contact Form Integration', 'Upto 1 week'],
        other: 'First month Maintenance included',
    },
    {
        id: 'growth',
        name: 'Growth',
        target: 'For scaling startups',
        onboarding: 129,
        upfrontPrice: 1500,
        monthlyPrice: 180,
        isPopular: true,
        features: ['10 Custom Pages', 'Advanced Animations', 'CMS Integration', 'Analytics Dashboard', 'Priority Support', 'Upto 1-3weeks'],
        other: 'First 3 months of Maintenance included',
    },
    {
        id: 'premium',
        name: 'Premium',
        target: 'For industry leaders',
        onboarding: 129,
        upfrontPrice: 3000,
        monthlyPrice: 350,
        features: ['Unlimited Pages', 'Full E-commerce setup', 'Custom Web App Logic', 'Dedicated Developer', '24/7 Support*when I am awake', 'Upto 2-4 weeks'],
        other: 'First 6 months of Maintenance included',
    }
];

export const addonData: AddonData[] = [
    {
        id: "a1",
        name: "Managed Hosting",
        description: "High-speed, secure UK-based servers with daily backups.",
        price: 25,
    },
    {
        id: "a2",
        name: "Hosting & Maintenance",
        description: "Everything in hosting, plus monthly code updates and plugin management.",
        price: 75,
    }
];
