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
    specifications?: string[];
    process?: {
        title: string;
        description: string;
    }[];
    types?: {
        title: string;
        description: string;
    }[];
}

export const services: Service[] = [
    {
        id: "custom-stamping",
        title: "Custom Sheet Metal Stamping Services",
        description: "Our advanced stamping technology and experienced team ensure precision and reliability in every project, whether it's for small or large production runs. Our services are adaptable to various materials, including aluminum, stainless steel, copper, brass, nickel and more. From custom die design to specific material requirements, we can accommodate various customization requests to align with your project’s unique needs.",
        specifications: [
            "Maximum 400 Tons Press Rating",
            "0.004\" ~ 0.47\" (0.1mm ~ 12mm) Metal Thickness",
            "±0.01\" (0.25mm) Tight Tolerance",
            "Custom Dies & Punches for Your Designs"
        ],
        features: [
            "Free evaluation of drawings before order",
            "Flexible order volume: from 10 pcs to 5,000,000 pcs",
            "80–1000 Ton high-speed stamping machines in-house",
            "Factory-direct pricing, no middlemen markups",
            "Fast worldwide delivery – 3000+ global customers served"
        ],
        process: [
            {
                title: "Send Your Drawings",
                description: "Begin by providing detailed drawings or CAD files of the part you need to be stamped. This helps us accurately understand the design and requirements."
            },
            {
                title: "Design & Engineering Support",
                description: "Our engineering team reviews the drawings, and provides feedback. Then, specialized tools and dies are created based on the final proven design."
            },
            {
                title: "Sheet Metal Preparation",
                description: "Prepare the sheet metal for stamping by cutting it into the appropriate size and ensuring it is free of defects."
            },
            {
                title: "Stamping Press",
                description: "Applying force to the metal to form the desired shape. It can include processes such as blanking, punching, bending, or coining."
            },
            {
                title: "Post-Processing",
                description: "After stamping, the parts may require additional processing, such as trimming excess material, deburring, or adjusting dimensions to ensure they meet specifications."
            },
            {
                title: "Surface Finishing",
                description: "Finally, the stamped parts are finished with surface treatments like painting, plating, or coating to enhance durability, appearance, or corrosion resistance."
            }
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
        id: "metal-punching",
        title: "Custom Metal Punching",
        description: "We specialize in high-precision metal punching services, delivering customized solutions for a wide range of applications. Equipped with advanced CNC turret punching machines, we handle various metals including aluminum, stainless steel, galvanized steel, titanium, brass, bronze, and copper. Our capabilities include punching holes in diverse shapes and sizes, tailored to meet exact customer specifications.",
        specifications: [
            "Single & Turret Punching",
            "Precision CNC Punching",
            "Support Almost All Metals",
            "Custom Hole Shape & Size",
            "Rapid Prototyping & Mass Production"
        ],
        features: [
            "Precision: High precision in punching patterns, holes, and cut-outs",
            "Automation: CNC-controlled for automated and rapid production",
            "Variety of Shapes: Circles, squares, rectangles, and custom designs",
            "Efficiency: Suitable for medium to high-volume production runs"
        ],
        process: [
            {
                title: "CNC Turret Punching Technique",
                description: "Our CNC punching machine consists of a rotating turret loaded with a variety of punch tools that correspond to different shapes and sizes."
            },
            {
                title: "Precision Punching Process",
                description: "When the sheet metal is fed into the press, the turret selects the appropriate punch tool to make precise holes according to the programmed design."
            }
        ],
        image: "/image/Custom-Metal-Punching.jpg",
        gallery: [
            "/punching/imgi_9_Round-Hole-Metal-Sheets.jpg",
            "/punching/imgi_10_Square-Hole-Metal-Sheets.jpg",
            "/punching/imgi_11_Hexagon-Hole-Metal-Sheets.jpg",
            "/punching/imgi_12_Rectangle-Hole-Metal-Sheets.jpg",
            "/punching/imgi_13_Oval-Hole-Metal-Sheets.jpg",
            "/punching/imgi_14_Heart-Hole-Metal-Sheets.jpg"
        ]
    },
    {
        id: "metal-cutting",
        title: "Custom Metal Cutting",
        description: "Sheet metal cutting is a subtractive process, where material is removed to create parts with desired shapes and dimensions. Our cutting ability ranges from mechanical cutting to thermal and waterjet cutting, suitable for various metal sheets and plates, with following post-cutting process and strict quality controls.",
        specifications: [
            "Various Cutting Methods",
            "High Quality Post-cutting Process",
            "Strict Quality Controls",
            "Suitable for Almost All Metals"
        ],
        features: [
            "Laser Cutting: Best for thin to medium materials (20mm max), clean edges, extremely precise with 0.1~0.3mm kerf",
            "Plasma Cutting: Best for thick metal plates (50mm max), moderate precision with 1~3mm kerf",
            "Waterjet Cutting: Best for thick (>200mm) or heat-sensitive metals, smooth edge, high precision with 0.5~1mm kerf"
        ],
        process: [
            {
                title: "Material Inspection",
                description: "Ensure that the sheet metal material matches the specified type, grade, and thickness. Check for defects such as warping, cracks, or surface contamination before cutting."
            },
            {
                title: "Dimensional Accuracy",
                description: "Verify the cut dimensions align with design specifications using micrometers and CMMs. Maintain tolerances according to industry standards like ISO 2768 or custom specifications."
            },
            {
                title: "Equipment Calibration",
                description: "Calibrate cutting equipment, such as CNC laser cutters and plasma cutters to ensure precision. Perform trial cuts to confirm equipment settings before large-scale production."
            }
        ],
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
        id: "metal-bending",
        title: "Metal Bending Services",
        description: "Sheet metal bending is an essential process in metal fabrication, the goal is to change the geometry of the metal sheet by applying force, creating angular or curved features. We specialize in bending metal sheets and plates into V, U, Z and custom shapes using a range of advanced bending techniques with minimized springback and optimized bend radius.",
        specifications: [
            "Various Bending Techniques",
            "Strict Quality Control Processes",
            "Maximum 60mm Bending Thickness",
            "Maximum 1000 Tons Bending Capacity",
            "±0.01\" (0.25mm) Linear Tolerance",
            "±1 Degree Angular Tolerance"
        ],
        features: [
            "Press Brake: High precision bending with die and punch setup, capable of bending up to 12mm or more",
            "Roll Bender: Creates large radius bends and curves, ideal for pipes, tubes, and coils",
            "Air Bending: Highly versatile, achieving different bend angles with the same tooling",
            "Bottom Bending: Accurate and consistent bends with tighter angle control"
        ],
        process: [
            {
                title: "V Bending",
                description: "The sheet is pressed into the die, creating a precise V-shape. High precision and repeatability. Commonly used for brackets, channels, and enclosures."
            },
            {
                title: "U Bending",
                description: "The sheet is bent over a U-shaped die. Provides consistent bend radius. Used for parts requiring strong structural integrity."
            },
            {
                title: "Z Bending",
                description: "Bending the sheet into a zigzag pattern. Allows for multiple bends. Used in architectural components and decorative panels."
            },
            {
                title: "Roll Bending",
                description: "Feeding sheet metal through rollers to achieve curved shapes. Ideal for large-radius bends, cylindrical shapes, and curved panels."
            }
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
