export interface Service {
    id: string;
    title: string;
    description?: string;
    features?: string[];
    image: string;
}

export const services: Service[] = [
    {
        id: "custom-stamping",
        title: "Custom Sheet Metal Stamping Services",
        features: [
            "Free evaluation of drawings before order",
            "Flexible order volume: from 10 pcs to 5,000,000 pcs",
            "80–1000 Ton high-speed stamping machines in-house",
            "Factory-direct pricing, no middlemen markups",
            "Fast worldwide delivery – 3000+ global customers served"
        ],
        image: "/image/Custom Sheet Metal Stamping Services.jpg"
    },
    {
        id: "metal-cutting",
        title: "Custom Metal Cutting",
        description: "Every part we cut tells a story of precision and reliability. Our clients across the globe rely on us for consistent, high-quality results that fit their needs — no surprises, just performance.",
        image: "/image/Custom Metal Cutting .jpg"
    },
    {
        id: "fabrication-services",
        title: "Professional Sheet Metal Fabrication Services",
        features: [
            "Rapid Prototyping: Turnaround in as fast as 1 day",
            "Flexible Volumes: From 1 unit to 500,000+ units",
            "Real Factory Prices: Competitive, direct-from-workshop pricing",
            "Trusted by 3,000+ Clients: From automotive to aerospace industries",
            "Global Reach: Efficient delivery to over 30 countries"
        ],
        image: "/image/Professional Sheet Metal Fabrication Services.jpg"
    },
    {
        id: "metal-bending",
        title: "Metal Bending Services",
        features: [
            "Quick Prototyping In 24 Hours",
            "Excellent Quality & Beautiful Surface",
            "Fast Operation & One-Stop Services",
            "Real Factory Quote",
            "1pc - 100,000 Pc High-Volume Processing Capacity"
        ],
        image: "/image/Metal Bending Services.jpg"
    },
    {
        id: "surface-finishing",
        title: "Surface Finishing Services",
        description: "Enhanced durability, perfect aesthetics, and superior protection — upgrade your prototypes, models, and production parts with our expert surface finishing services.",
        features: [
            "Corrosion and Wear Resistance",
            "Beautiful, Customizable Appearance",
            "Improved Functional Performance"
        ],
        image: "/image/Surface Finishing Services.jpg"
    },
    {
        id: "enclosures-housings",
        title: "Custom Enclosures & Housings",
        description: "Quanheng is an expert in metal enclosure manufacturing, delivering custom solutions that typically save 30–60% of costs compared to local fabrication. We offer cold-rolled steel, galvanized steel, stainless steel 304/316, aluminum and other materials.",
        image: "/image/Custom Sheet Metal Enclosures,.jpg"
    }
];
