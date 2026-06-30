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

export interface FaqsData {
    question: string;
    answer: string;
}



// --- SITE CONTENT ---

export const contactInfo = {
    whatsapp: "https://wa.me/447393547563", // Replace with your actual WhatsApp link [cite: 455]
    instagram: "https://instagram.com/kavass.io", // Replace with your actual handle [cite: 455]
    email: "hello@kavass.co.uk"
};

export const FaqsData = [
    {
        question: "Do you use templates or is everything custom?",
        answer: "Everything is custom. We build from the ground up tailored specifically to your brand and business goals. Templates create bloat, slow down load times, and make " +
            "your brand look like your competitors. We engineer bespoke architecture for maximum performance."
    },
    {
        question: "How long does a typical website project take?",
        answer: "Most custom builds take between 1 to 8 weeks, depending on complexity, page count, and custom features. We establish a strict timeline during our discovery phase " +
            "and stick to it, ensuring you launch on time without sacrificing quality."
    },
    {
        question: "Will my team be able to update content without a developer?",
        answer: "Yes. While the frontend architecture is highly customized, we integrate intuitive, modern Content Management Systems (like Sanity or custom dashboard solutions) so your marketing " +
            "team can easily update copy, swap images, and publish blogs without touching a single line of code."
    },
    {
        question: "How do you ensure the website will actually generate leads?",
        answer: "We don't just design for aesthetics; we design for conversion. Every decision—from user flow to button placement and site speed—is based on data and UX best practices aimed at reducing friction and guiding users " +
            "naturally toward your core call-to-action. Furthermore, all website come with complementary advertisement which we can discuss to help boost advisability in addition to SEO optimisation to help your website stand out."
    },
    {
        question: "What are hosting and a domain?",
        answer: "Think of your website like a digital storefront: your domain is your address, and hosting is the land it sits on. I ensure you retain 100% ownership of both. " +
            "I handle the technical setup of your domain (your .com address) and professional business email, and deploy your site on high-performance servers that keep your business online, secure, and running 24/7."
    },
    {
        question: "Why does my hosting/maintenance fee go through Kavass?",
        answer: "Think of me as your dedicated digital operations manager. While you could technically manage hosting yourself, it often involves complex technical maintenance, security monitoring, " +
            "and troubleshooting that pulls you away from running your business. By bundling hosting with my management service, I handle the 'heavy lifting'—server optimizations, " +
            "security patches, automatic backups, and performance updates—ensuring your site remains fast, secure, and online 24/7. " +
            "You get the benefits of enterprise-grade infrastructure without ever needing to look at a technical dashboard. However, as always, this completely upto you, if you would like to host it yourself."
    },
    {
        question: "How is your pricing structured?",
        answer: "I work on a value-based, flat-fee project model. Unlike hourly billing, which can be unpredictable and reward slow work, a flat fee ensures that my incentives are perfectly aligned with yours: delivering a high-quality, high-converting product as efficiently as possible. We’ll define the scope clearly upfront so there are no surprises."
    },
    {
        question: "What if my requirements change during the project?",
        answer: "Agility is one of the benefits of working with Kavass. If your needs evolve, we’ll assess the impact on the timeline and budget, and I’ll provide a clear 'change order' so we’re always on the same page. My goal is to ensure the final product hits your business objectives, even if those objectives shift slightly during development."
    },
    {
        question: "Is your pricing set in stone?",
        answer: "Every business has unique needs, and I understand that 'one size fits all' pricing rarely works for startups. The figures you see are benchmarks for standard projects, but I am very open to discussing flexible scopes or phased approaches if you have a specific budget in mind. My priority is building a long-term partnership, so let's chat about what your business needs right now—we can often find a way to get started without compromising on quality."
    },
    {
        question: "What if I have a very limited budget starting out?",
        answer: "I love working with early-stage founders. If you're just starting, we can focus on a 'Minimum Viable Presence'—a high-performance, beautiful landing page that converts, with the architecture already built to scale. As your business grows and your budget increases, we can easily build out additional features, sections, and systems. You don't need the 'everything' package to get a world-class foundation."
    },
    {
        question: "Do you offer ongoing support after launch?",
        answer: "Yes. I view a launch as the beginning of our relationship, not the end. I offer flexible maintenance packages that cover everything from security updates and performance tuning to ongoing design tweaks, so you can focus on growth while I handle the technical health of your digital asset."
    },
    {
        question: "How do we communicate during the project?",
        answer: "I believe in radical transparency. We’ll have a shared Slack or project dashboard where you can see real-time progress, provide feedback, and track milestones. You’ll never have to wonder what’s happening—I provide regular updates so you always have full visibility into the build process."
    }
];



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
        isPopular: false,
    },
    {
        id: 'growth',
        name: 'Growth',
        target: 'For scaling startups',
        onboarding: 129,
        upfrontPrice: 1500,
        monthlyPrice: 180,
        features: ['10 Custom Pages', 'Advanced Animations', 'CMS Integration', 'Analytics Dashboard', 'Priority Support', 'Upto 1-3weeks'],
        other: 'First 3 months of Maintenance included',
        isPopular: true,
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
        isPopular: false,
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
