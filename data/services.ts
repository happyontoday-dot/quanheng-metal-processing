export interface Service {
    id: string;
    title: string;
    description?: string;
    features?: string[];
    image: string;
    gallery?: string[];
    galleryWithCaptions?: {
        image: string;
        title: string;
        description: string;
    }[];
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
        image: "/image/Custom Sheet Metal Stamping Services.jpg",
        gallery: [
            "/metal stamping/imgi_7_202505081145439144.jpg",
            "/metal stamping/imgi_8_202508071122418465.jpg",
            "/metal stamping/imgi_9_202508071118551457.jpg",
            "/metal stamping/imgi_10_202508071120514777.jpg",
            "/metal stamping/imgi_11_202508071121139649.jpg",
            "/metal stamping/imgi_12_202508071121531124.jpg"
        ]
    },
    {
        id: "metal-cutting",
        title: "Custom Metal Cutting",
        description: "Every part we cut tells a story of precision and reliability. Our clients across the globe rely on us for consistent, high-quality results that fit their needs — no surprises, just performance.",
        image: "/image/Custom Metal Cutting .jpg",
        gallery: [
            "/metal Cutting/imgi_7_202508011450163894.jpg",
            "/metal Cutting/imgi_8_202505041714519841.png",
            "/metal Cutting/imgi_11_202505041714354135.jpg",
            "/metal Cutting/imgi_12_202505081130448781.png",
            "/metal Cutting/imgi_13_202505081130557401.png",
            "/metal Cutting/imgi_14_202505081131067299.png"
        ]
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
        gallery: [
            "/Bending/imgi_7_1012253507_8402.jpg",
            "/Bending/imgi_7_m1113442814_2368.jpg",
            "/Bending/imgi_8_m1154329927_1402.jpg",
            "/Bending/imgi_10_m1040045854_2905.jpg",
            "/Bending/imgi_13_1059045340_4130.jpg",
            "/Bending/imgi_14_m1041059655_8060.jpg"
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
        image: "/image/Surface Finishing Services.jpg",
        galleryWithCaptions: [
            {
                image: "/Surface Finishing/Anodizing Glossy 01.png",
                title: "Anodizing Glossy",
                description: "Anodizing Type I creates a protective oxide layer on aluminum, providing resistance to corrosion and wear."
            },
            {
                image: "/Surface Finishing/Bead Blast BeadblastingMedia BlastingSandblasting.png",
                title: "Bead Blasting",
                description: "A process that uses a stream of air to propel fine media particles to clean, smooth, or texture a surface."
            },
            {
                image: "/Surface Finishing/Black Oxide.png",
                title: "Black Oxidize",
                description: "Black oxide is a conversion coating that offers minimal corrosion protection and is used for appearance."
            },
            {
                image: "/Surface Finishing/Brush.png",
                title: "Brush",
                description: "Brushing creates a satin-like texture on metal surfaces, enhancing their appearance and reducing reflections."
            },
            {
                image: "/Surface Finishing/Anodize Type II (Glossy, Matte).png",
                title: "Anodize Type II (Glossy, Matte)",
                description: "Anodizing Type II creates a protective oxide layer on aluminum, providing resistance to corrosion and wear."
            },
            {
                image: "/Surface Finishing/Gold Chromate.png",
                title: "Gold Chromate",
                description: "Chrome plating provides a bright, mirror-like finish and enhances wear and corrosion resistance."
            },
            {
                image: "/Surface Finishing/Black hard anodized.png",
                title: "Polish + Black Anodize",
                description: "Polishing enhances the surface finish and luster of metals by removing scratches and imperfections."
            },
            {
                image: "/Surface Finishing/Polish Clear Anodize.webp",
                title: "Polish + Clear Anodize",
                description: "Polishing enhances the surface finish and luster of metals by removing scratches and imperfections."
            },
            {
                image: "/Surface Finishing/Vapor Polish.png",
                title: "Vapor Polish",
                description: "Vapor polishing is a technique to improve the transparency and smoothness of plastic components."
            },
            {
                image: "/Surface Finishing/White Powder Coating -Flat.png",
                title: "White Powder Coating - Flat",
                description: "Powder coating provides a durable and high-quality finish that enhances the appearance and corrosion resistance of metals."
            },
            {
                image: "/Surface Finishing/Zinc Plating.png",
                title: "Zinc Plating",
                description: "Zinc plating applies a protective zinc layer to steel or iron, enhancing corrosion resistance."
            }
        ]
    },
    {
        id: "enclosures-housings",
        title: "Custom Enclosures & Housings",
        description: "Quanheng is an expert in metal enclosure manufacturing, delivering custom solutions that typically save 30–60% of costs compared to local fabrication. We offer cold-rolled steel, galvanized steel, stainless steel 304/316, aluminum and other materials.",
        image: "/image/Custom Sheet Metal Enclosures,.jpg"
    }
];
