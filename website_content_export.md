
# File: C:\Users\Administrator\Downloads\quanheng-metal-processing\data\services.ts
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
    sections?: {
        title: string;
        description?: string;
        items: {
            title: string;
            description: string;
            image?: string;
        }[];
    }[];
    guidelines?: {
        title: string;
        description: string;
        data: {
            element: string;
            suggestions: string;
            benefits: string;
        }[];
    };
}

export const services: Service[] = [
    {
        id: "3d-printing-service",
        title: "Industrial Metal 3D Printing",
        description: "Unlock impossible geometries and accelerate engineering with our direct metal laser melting (SLM/DMLS) services. We print high-performance, fully dense metal parts in Titanium, Aluminum, Stainless Steel, and Tool Steel for aerospace, medical, and advanced tooling applications without the need for fixed tooling.",
        features: [
            "High Precision: Tolerances down to ±0.05mm",
            "Materials: Ti6Al4V, AlSi10Mg, 316L, 17-4PH, Maraging Steel",
            "Density: 99.9% relative density for forged-like strength",
            "Post-Processing: Heat treatment, CNC machining, and surface finishing",
            "Conformal Cooling Channels: Dramatically improve mold cooling cycles",
            "Topology Optimization: Reduce weight up to 60% maintaining strength",
            "Part Consolidation: Combine complex assemblies into a single printed part",
            "Rapid Scaling: From functional prototypes to end-use metal components"
        ],
        process: [
            {
                title: "DFM Optimization",
                description: "Engineering review to optimize part orientation, support structures, and minimize material stress."
            },
            {
                title: "SLM/DMLS Printing",
                description: "High-power lasers selectively melt metal powder layer-by-layer to build complex fully dense parts."
            },
            {
                title: "Stress Relief & Heat Treatment",
                description: "Thermal processing to relieve internal stresses and achieve optimal mechanical properties."
            },
            {
                title: "Precision Post-Machining",
                description: "CNC milling and turning to achieve critical tolerances (±0.01mm) and flawless surface finishes on critical mating surfaces."
            }
        ],
        image: "/Core Competencies/3d printing.jpeg"
    },
    {
        id: "custom-stamping",
        title: "Custom Sheet Metal Stamping Services",
        description: "Our advanced stamping technology and experienced team ensure precision and reliability in every project, whether it's for small or large production runs. Our services are adaptable to various materials, including aluminum, stainless steel, copper, brass, nickel and more. From custom die design to specific material requirements, we can accommodate various customization requests to align with your project’s unique needs.",
        features: [
            "Maximum 400 Tons Press Rating",
            "0.004\" ~ 0.47\" (0.1mm ~ 12mm) Metal Thickness",
            "±0.01\" (0.25mm) Tight Tolerance",
            "Custom Dies & Punches for Your Designs",
            "Free evaluation of drawings before order",
            "Flexible order volume: from 10 pcs to 5,000,000 pcs",
            "80–1000 Ton high-speed stamping machines in-house",
            "Factory-direct pricing, no middlemen markups",
            "Fast worldwide delivery – 200+ global customers served"
        ],
        sections: [
            {
                title: "Our Stamping Types",
                items: [
                    {
                        title: "Progressive Die Stamping",
                        description: "It involves a series of stations on a single die, the material progresses through each station with each press cycle. Allows for intricate designs, making it perfect for components requiring multiple operations in a single pass.",
                        image: "/metal stamping/imgi_9_Progressive-Die-Stamping.jpg"
                    },
                    {
                        title: "Transfer Die Stamping",
                        description: "The transfer system transports the partially processed material between dies from one station to another. Particularly useful for large or irregularly shaped parts that require multiple stages of stamping.",
                        image: "/metal stamping/imgi_10_Transfer-Die-Stamping.jpg"
                    },
                    {
                        title: "Compound Die Stamping",
                        description: "It involves a single die with multiple operations (e.g., cutting and bending) performed in one stroke. Highly efficient for creating components with simple designs, delivering consistent quality and fast turnaround times.",
                        image: "/metal stamping/imgi_22_Compound-Die-Stamping-300x200.jpg"
                    }
                ]
            }
        ],
        guidelines: {
            title: "Custom Metal Stamping Parts Design Guideline",
            description: "These guidelines offer industry standard values for custom metal stamping parts. Follow these suggestions to achieve efficient forming, minimize tool wear, and optimize part quality while ensuring structural integrity and dimensional accuracy.",
            data: [
                { "element": "Material Thickness", "suggestions": "Recommended range: 0.2 - 6 mm (typical: 0.5 - 3 mm)", "benefits": "Ensures efficient forming, reduces tool wear, and optimizes part quality." },
                { "element": "Corner Radii", "suggestions": "Minimum radius ≥ 0.5 - 1x material thickness", "benefits": "Prevents cracking, reduces stress concentration, and improves durability." },
                { "element": "Minimum Hole Diameter", "suggestions": "Minimum diameter ≥ 1.2x material thickness", "benefits": "Prevents tool damage, distortion, and ensures reliable stamping operations." },
                { "element": "Hole Spacing", "suggestions": "Minimum spacing ≥ 2x material thickness", "benefits": "Maintains structural integrity, avoids deformation or distortion." },
                { "element": "Edge-to-Hole Distance", "suggestions": "Minimum distance ≥ 1.5 - 2x material thickness", "benefits": "Prevents edge deformation, tearing, and ensures dimensional accuracy." },
                { "element": "Bend Radius", "suggestions": "Minimum bend radius ≥ 1x material thickness", "benefits": "Reduces the risk of cracking, ensures consistent forming, and improves strength." },
                { "element": "Bend-to-Hole Distance", "suggestions": "Minimum distance ≥ 2x material thickness", "benefits": "Prevents hole deformation during bending, ensuring dimensional accuracy." },
                { "element": "Flange Width", "suggestions": "Minimum flange width ≥ 2.5 - 3x material thickness", "benefits": "Ensures adequate support and stable forming, reducing tooling issues." },
                { "element": "Tolerances", "suggestions": "Typical dimensional tolerance: ±0.1 - 0.25 mm", "benefits": "Achievable stamping accuracy, balancing precision, quality, and cost." },
                { "element": "Draft Angles", "suggestions": "Typically 0.5° - 1° per side (if applicable)", "benefits": "Facilitates part ejection from die, reduces tooling wear, improves productivity." },
                { "element": "Deep Draw Depth", "suggestions": "Maximum depth ≤ 2.5x part diameter per draw", "benefits": "Prevents excessive material thinning, tearing, or wrinkling during drawing operations." },
                { "element": "Relief Cuts", "suggestions": "Use relief cuts near complex bends or corners", "benefits": "Reduces stress concentration, tearing risks, and facilitates smooth forming." },
                { "element": "Text and Logos", "suggestions": "Minimum height ≥ 1.5 - 2 mm, positioned on flat areas", "benefits": "Ensures clear, legible text without distortion due to stamping operations." }
            ]
        },
        image: "/image/Custom Sheet Metal Stamping Services.jpg",
        gallery: [
            "/metal stamping/imgi_43_Custom-Metal-Stamping.jpg",
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
        features: [
            "Tolerance: ±0.1 mm",
            "Sheet Thickness: 0.5 – 12 mm",
            "Max Sheet Size: 2500 × 1250 mm",
            "Hole Diameter: ≥ 1× Sheet Thickness",
            "Turret Stations: Up to 72 Tool Stations",
            "Production: Prototype to Mass Run",
            "Single & Turret CNC Punching",
            "Precision CNC Punching: ±0.1mm tolerance",
            "Supports All Common Sheet Metals",
            "Custom Hole Shape & Size",
            "Rapid Prototyping & Mass Production",
            "Integrated Deburring & QC Inspection"
        ],
        sections: [
            {
                title: "Supported Hole Shapes",
                description: "Our CNC turret punching machines are capable of producing a comprehensive range of hole profiles. Whether standard or fully custom, we deliver consistent quality at scale.",
                items: [
                    {
                        title: "Round Holes",
                        description: "The most common perforation type, ideal for ventilation, filtration, and cable routing. Punched with high-speed repeatability using standard circular tooling.",
                        image: "/punching/imgi_9_Round-Hole-Metal-Sheets.jpg"
                    },
                    {
                        title: "Square Holes",
                        description: "Used in industrial enclosures and architectural panels. Provides maximum open area per perforation unit compared to round holes of equivalent size.",
                        image: "/punching/imgi_10_Square-Hole-Metal-Sheets.jpg"
                    },
                    {
                        title: "Hexagonal Holes",
                        description: "Offers exceptional open area and structural integrity. Widely used for speaker grilles, air filters, and decorative façade panels.",
                        image: "/punching/imgi_11_Hexagon-Hole-Metal-Sheets.jpg"
                    },
                    {
                        title: "Rectangular Holes",
                        description: "Used for electronics ventilation slots, architectural louvres, and cable management systems with precise length-to-width ratio control.",
                        image: "/punching/imgi_12_Rectangle-Hole-Metal-Sheets.jpg"
                    },
                    {
                        title: "Oval Holes",
                        description: "Common in automotive and agricultural equipment for drainage and airflow. Punch-formed in a single stroke for efficiency.",
                        image: "/punching/imgi_13_Oval-Hole-Metal-Sheets.jpg"
                    },
                    {
                        title: "Custom Profiles",
                        description: "Star, heart, pentagon, and fully customer-defined shapes are achievable using bespoke tooling. Minimum quantity requirements apply for custom die fabrication.",
                        image: "/punching/imgi_15_Star-Hole-Metal-Sheets.jpg"
                    }
                ]
            }
        ],
        process: [
            {
                title: "Engineering Review",
                description: "Upload your DXF/DWG files or CAD model. Our engineers review material, thickness, hole layout, and edge distances before confirming design-for-manufacturability (DFM) recommendations."
            },
            {
                title: "Tooling & Nesting",
                description: "CNC nesting software optimizes material utilization. The turret is loaded with the appropriate punch-and-die sets, and the program is generated and verified on-screen."
            },
            {
                title: "CNC Turret Punching",
                description: "The CNC turret press feeds the sheet metal under the selected tool. The rotating turret automatically indexes through tools to punch every hole in sequence at up to 1,000 strokes/min."
            },
            {
                title: "Deburring & QC",
                description: "All punched parts go through automated deburring and 100% dimension inspection. Critical features are spot-checked with CMM or gauge pin sets before packing and shipping."
            }
        ],
        guidelines: {
            title: "Custom Metal Punching Design Guidelines",
            description: "Following these industry-standard design rules ensures consistent quality, minimizes tooling strain, and reduces per-part cost. Our engineering team reviews all incoming drawings against these parameters.",
            data: [
                {
                    element: "Minimum Hole Diameter",
                    suggestions: "≥ 1× material thickness (round); ≥ 1.2× for square or slot",
                    benefits: "Prevents punch-tip breakage and ensures clean slug ejection without tearing."
                },
                {
                    element: "Hole-to-Edge Distance",
                    suggestions: "≥ 1.5× material thickness",
                    benefits: "Prevents edge deformation, burring, and workpiece distortion near the sheet perimeter."
                },
                {
                    element: "Hole-to-Hole Spacing",
                    suggestions: "≥ 2× material thickness (center-to-center minus hole size ≥ 1× thickness)",
                    benefits: "Maintains material web strength; prevents material from fracturing between adjacent holes."
                },
                {
                    element: "Sheet Thickness Range",
                    suggestions: "0.5 mm – 12 mm (steel); 0.5 mm – 8 mm (aluminum/copper)",
                    benefits: "Ensures punch force is within equipment capacity; thicker material may need pre-clearance adjustment."
                },
                {
                    element: "Countersink / Dimple",
                    suggestions: "Countersink angle ≤ 120°; dimple height ≤ 0.5× sheet thickness",
                    benefits: "Prevents surface fractures and ensures accurate screw/rivet seating for flush assemblies."
                },
                {
                    element: "Tolerances",
                    suggestions: "Hole position: ±0.1 mm; hole diameter: ±0.05 mm",
                    benefits: "Achievable with standard CNC turret punching; tighter tolerances may require secondary reaming."
                },
                {
                    element: "Corner Radii",
                    suggestions: "Internal corner radius ≥ 0.5× material thickness",
                    benefits: "Sharp internal corners cause stress concentration; a minimum radius reduces tear-out risk."
                }
            ]
        },
        image: "/punching/imgi_40_CNC-Metal-Punching.jpg"
    },
    {
        id: "metal-cutting",
        title: "Custom Metal Cutting",
        description: "Sheet metal cutting is a subtractive manufacturing process that removes material to create precise shapes and dimensions. Our multi-method cutting capabilities — from high-speed laser cutting to heavy-duty plasma and cold waterjet cutting — ensure the perfect process is matched to your material, thickness, and tolerance requirements. We serve industries from electronics to heavy machinery with scalable solutions from prototype to mass production.",

        features: [
            "Laser Cutting: Focused laser beam for clean edges, minimal post-processing, extremely precise with 0.1~0.3mm kerf",
            "Plasma Cutting: High-energy plasma for thick plates up to 50mm, fast throughput for production runs",
            "Waterjet Cutting: Cold-cutting process ideal for heat-sensitive metals, composites, and ultra-thick material with no HAZ",
            "Post-Cut Deburring & Edge Treatment: All cut parts go through deburring, edge smoothing, and surface inspection"
        ],
        sections: [
            {
                title: "Our Cutting Techniques",
                description: "We match the right cutting technology to your material and specification for optimal quality, speed, and cost.",
                items: [
                    {
                        title: "Laser Cutting",
                        description: "Utilizes a focused, high-energy laser beam to melt and vaporize material with extreme precision. Best for thin to medium materials (up to 20mm), delivering clean edges with minimal post-processing and a narrow kerf of 0.1~0.3mm.",
                        image: "/metal Cutting/imgi_8_Sheet-Metal-Laser-Cutting.jpg"
                    },
                    {
                        title: "Plasma Cutting",
                        description: "Ionized plasma gas melts and blasts through heavy metal plates up to 50mm thick at high speed. Ideal for structural steel and thick aluminum, with moderate precision (1~3mm kerf) and fast cycle times for production runs.",
                        image: "/metal Cutting/imgi_9_Sheet-Metal-Plasma-Cutting.jpg"
                    },
                    {
                        title: "Waterjet Cutting",
                        description: "A high-pressure abrasive waterjet slices through virtually any material without generating heat, eliminating heat-affected zones (HAZ). Perfect for heat-sensitive metals, composites, and ultra-thick plates (>200mm) requiring smooth, burr-free edges.",
                        image: "/metal Cutting/imgi_10_Sheet-Metal-Waterjet-Cutting.jpg"
                    }
                ]
            },
            {
                title: "Post-Cutting Quality Controls",
                description: "Our rigorous quality control workflow ensures every cut part meets your precise specifications before delivery.",
                items: [
                    {
                        title: "Material Inspection",
                        description: "We verify the metal material matches the specified type, grade, and thickness prior to production. Every sheet is inspected for surface defects, warping, cracks, or contamination.",
                        image: "/metal Cutting/imgi_11_Sheet-Metal-Material-Inspection.jpg"
                    },
                    {
                        title: "Dimensional Accuracy",
                        description: "Cut dimensions are verified against design specifications using digital calipers, micrometers, and CMMs. Tolerances are maintained to ISO 2768 or custom specifications as required.",
                        image: "/metal Cutting/imgi_12_Sheet-Metal-Cutting-Parts-Tolerances-Check.jpg"
                    },
                    {
                        title: "Equipment Calibration",
                        description: "All cutting machines are regularly calibrated and validated with trial cuts before large-scale production runs, ensuring repeatability and eliminating drift over long production cycles.",
                        image: "/metal Cutting/imgi_13_Laser-Cutting-Machine-Calibration.jpg"
                    },
                    {
                        title: "Deburring & Edge Treatment",
                        description: "Cut parts undergo controlled deburring, edge rounding, and surface finishing to remove sharp edges and micro-burrs, ensuring safe handling and compatibility with downstream assembly.",
                        image: "/metal Cutting/imgi_14_Sheet-Metal-Deburring.jpg"
                    }
                ]
            },
            {
                title: "Supported Sheet Metal Materials",
                description: "We cut virtually all engineering metals. Our process parameters are optimized per material for best edge quality.",
                items: [
                    {
                        title: "Aluminum",
                        description: "Lightweight and highly machinable. Laser cutting is preferred for clean edges and minimal oxide layer. Ideal for aerospace and electronics enclosures.",
                        image: "/metal Cutting/imgi_17_Aluminum-Sheet.jpg"
                    },
                    {
                        title: "Stainless Steel",
                        description: "High corrosion resistance with excellent surface finish after laser cutting. Nitrogen assist gas prevents oxidation for bright, clean cuts.",
                        image: "/metal Cutting/imgi_18_Stainless-Steel-Sheet.jpg"
                    },
                    {
                        title: "Galvanized Steel",
                        description: "Zinc-coated for corrosion protection. Plasma or laser cutting used depending on thickness. Suitable for construction, HVAC, and automotive enclosures.",
                        image: "/metal Cutting/imgi_19_Galvanized-Steel-Sheet.jpg"
                    },
                    {
                        title: "Titanium",
                        description: "Exceptionally strong and corrosion-resistant. Laser cutting with inert gas prevents oxidation. Used in aerospace, medical, and high-performance applications.",
                        image: "/metal Cutting/imgi_20_Titanium-Sheet.jpg"
                    },
                    {
                        title: "Brass",
                        description: "Excellent machinability and surface finish. Laser cutting delivers precise, clean edges with minimal waste. Common in electrical components and decorative parts.",
                        image: "/metal Cutting/imgi_21_Brass-Sheet.jpg"
                    },
                    {
                        title: "Copper",
                        description: "High thermal and electrical conductivity. Waterjet cutting is recommended to avoid heat-affected zones during cutting, maintaining conductivity and dimensional accuracy.",
                        image: "/metal Cutting/imgi_23_Copper-Sheet.jpg"
                    }
                ]
            }
        ],
        guidelines: {
            title: "Custom Laser Cutting Parts Design Guideline",
            description: "These guidelines offer industry standard values to achieve optimal precision, clean cuts, and efficient processing in custom laser cutting parts. Following these standards minimizes waste, reduces processing time, and ensures high-quality, accurate production.",
            data: [
                { "element": "Material Thickness", "suggestions": "Recommended range: 0.5 - 20 mm (ideal: depends on material type)", "benefits": "Ensures optimal precision, quality cuts, and reduces processing time and cost." },
                { "element": "Hole Diameter", "suggestions": "Minimum hole diameter ≥ 0.5x material thickness", "benefits": "Prevents deformation, ensures accuracy, and maintains hole roundness." },
                { "element": "Hole Spacing", "suggestions": "Minimum spacing between holes ≥ material thickness", "benefits": "Maintains structural integrity, prevents warping or distortion." },
                { "element": "Minimum Feature Size", "suggestions": "Typically ≥ 0.5 mm width", "benefits": "Ensures accurate, clean cuts and avoids deformation of intricate details." },
                { "element": "Corner Radii", "suggestions": "Minimum recommended radii ≥ 0.3 - 0.5 mm", "benefits": "Reduces stress concentration, prevents cracking, and improves part durability." },
                { "element": "Kerf Width (cut width)", "suggestions": "Typical laser kerf: 0.1 - 0.3 mm", "benefits": "Accounts for material removed during cutting, ensuring dimensional accuracy." },
                { "element": "Text and Logos", "suggestions": "Minimum height ≥ 2 - 3 mm", "benefits": "Ensures readability, clarity, and clean edges, suitable for laser precision." },
                { "element": "Tolerances", "suggestions": "Typical dimensional tolerance: ±0.05 - 0.2 mm", "benefits": "Provides high precision cutting suitable for detailed mechanical and decorative applications." },
                { "element": "Sheet Size/Part Nesting", "suggestions": "Optimize nesting; spacing between parts: ≥ 1 mm", "benefits": "Maximizes material utilization, reduces waste, and lowers production costs." },
                { "element": "Edge Quality", "suggestions": "Standard edge roughness: Ra 3.2 - 6.3 µm", "benefits": "Achieves smooth edges, reducing post-processing requirements." },
                { "element": "Tabs and Bridges", "suggestions": "Width ≥ 1 - 3 mm, if required", "benefits": "Keeps small parts connected during cutting, preventing loss or damage during handling." },
                { "element": "Sharp Corners", "suggestions": "Add small radius or relief cuts if corners are critical", "benefits": "Reduces thermal stress, warping, and improves longevity of cut edges." },
                { "element": "Engraving Depth", "suggestions": "Recommended depth ≤ 0.2 mm", "benefits": "Provides clear, precise engraving without compromising material strength or appearance." }
            ]
        },
        gallery: [
            "/metal Cutting/imgi_61_Custom-Sheet-Metal-Cutting.jpg",
            "/metal Cutting/imgi_7_202508011450163894.jpg",
            "/metal Cutting/imgi_8_202505041714519841.png",
            "/metal Cutting/imgi_11_202505041714354135.jpg",
            "/metal Cutting/imgi_12_202505081130448781.png",
            "/metal Cutting/imgi_14_202505081131067299.png"
        ],
        image: "/image/Custom Metal Cutting .jpg"
    },
    {
        id: "metal-bending",
        title: "Metal Bending Services",
        description: "Sheet metal bending is a fundamental fabrication process that transforms flat metal sheets into complex 3D shapes through the precise application of force. Our facility is equipped with high-tonnage CNC press brakes and universal bending tools, allowing us to achieve tight tolerances and consistent results across a wide range of materials and thicknesses. From simple brackets to complex multi-bend enclosures, we provide scalable solutions for both rapid prototyping and high-volume production.",
        features: [
            "Maximum Bending Thickness: 20mm (Steel) / 12mm (Stainless)",
            "Maximum Bending Length: 4000mm",
            "Bending Force: Up to 1000 Tons",
            "Precision: Linear ±0.1mm / Angular ±0.5°",
            "Material Support: Aluminum, Stainless Steel, Carbon Steel, Copper, Brass",
            "High Precision: CNC-controlled multi-axis backgauging for repeatable accuracy",
            "Material Versatility: Optimized bending parameters for various alloys and tempers",
            "Complex Geometries: Ability to perform multi-stage bending for intricate parts",
            "Zero Tooling Cost: Standard V-dies and punches available for common radii",
            "Fast Turnaround: Streamlined setup and automated nesting for rapid delivery"
        ],
        sections: [
            {
                title: "Our Bending Tools",
                description: "We utilize industry-leading machinery to ensure the highest quality and precision for every bend.",
                items: [
                    {
                        title: "CNC Press Brake",
                        description: "High-precision machines using sophisticated die and punch setups to create accurate bends at any angle in sheets up to 12mm thick.",
                        image: "/Bending/imgi_27_Press-Brakes-768x509.jpg"
                    },
                    {
                        title: "Roll Bender",
                        description: "Utilizes rotating rollers to gradually form metal sheets into smooth curves, cylinders, or large-radius arcs, ideal for tanks and pipes.",
                        image: "/Bending/imgi_29_Roll-Benders-768x509.jpg"
                    },
                    {
                        title: "Handheld Bender",
                        description: "Portable precision tools for quick, manual small-radius bends, frequently used for architectural accents and small structural components.",
                        image: "/Bending/imgi_30_Handheld-Bender-300x199.jpg"
                    }
                ]
            },
            {
                title: "Bending Techniques",
                description: "Choosing the right technique is critical for achieving the desired mechanical properties and surface finish.",
                items: [
                    {
                        title: "Air Bending",
                        description: "The punch doesn't touch the bottom of the die, allowing for high versatility and multiple angles with a single tool set.",
                        image: "/Bending/Sheet-Metal-Air-Bending.jpg"
                    },
                    {
                        title: "Bottom Bending",
                        description: "Presses the sheet into the bottom of the die for superior accuracy and minimal springback, perfect for tight tolerance projects.",
                        image: "/Bending/Sheet-Metal-Bottom-Bending.jpg"
                    },
                    {
                        title: "Hem Bending",
                        description: "Folding the metal edge onto itself to create a safe, smooth, and reinforced edge, essential for enclosures and medical products.",
                        image: "/Bending/Sheet-Metal-Hemming.jpg"
                    },
                    {
                        title: "Large Radius Bending",
                        description: "Achieves sweeping curves and controlled radii that exceed standard die limits. This technique is specialized for structural designs requiring smooth transitions or when processing high-strength, thick metal components.",
                        image: "/Bending/Sheet-Metal-Large-Radius-Bending.jpg"
                    }
                ]
            },
            {
                title: "Standard Shapes",
                description: "Our capabilities extend to a variety of standard and custom profiles.",
                items: [
                    {
                        title: "V Bending",
                        description: "The most common bending method, creating precise V-profiles for brackets, supports, and structural frames.",
                        image: "/Bending/imgi_36_Sheet-Metal-V-Bending-300x200.jpg"
                    },
                    {
                        title: "U Bending",
                        description: "Forming channels and tracks with consistent radii, providing high structural integrity for industrial chassis.",
                        image: "/Bending/imgi_37_Sheet-Metal-U-Bending-300x200.jpg"
                    },
                    {
                        title: "Z Bending",
                        description: "Creating offset bends or 'zigzag' patterns, ideal for complex mounting solutions and aesthetic architectural panels.",
                        image: "/Bending/imgi_17_Sheet-Metal-Z-Bending.jpg"
                    },
                    {
                        title: "Roll Bending",
                        description: "Feeding material through rollers to create curved panels and cylindrical shapes with precision and uniformity.",
                        image: "/Bending/imgi_18_Sheet-Metal-Roll-Bending.jpg"
                    }
                ]
            }
        ],
        guidelines: {
            title: "Custom Metal Bending Parts Design Guideline",
            description: "These guidelines present industry standard values for custom metal bending parts. Following these recommendations improves bend accuracy, reduces tool wear, minimizes deformation, and ensures robust, precise, and durable parts for enhanced production quality and cost-effectiveness.",
            data: [
                { "element": "Material Thickness", "suggestions": "Recommended range: 0.5 - 12 mm (typical: 1 - 6 mm)", "benefits": "Ensures optimal bend accuracy, reduces tool wear, and minimizes defects." },
                { "element": "Minimum Bend Radius", "suggestions": "Minimum radius ≥ 1x to 1.5x material thickness", "benefits": "Reduces cracking risk, maintains structural integrity, and prevents distortion." },
                { "element": "Bend Allowance", "suggestions": "Calculate based on material thickness and bend radius", "benefits": "Ensures dimensional accuracy after bending, compensating for material stretch/compression." },
                { "element": "Minimum Flange Length", "suggestions": "≥ 4x material thickness (ideal ≥ 6x thickness)", "benefits": "Provides adequate surface area for proper bending and stable tooling." },
                { "element": "Hole Distance from Bend Line", "suggestions": "Minimum distance ≥ 2 - 3x material thickness", "benefits": "Prevents hole deformation or stretching during bending." },
                { "element": "Hole Diameter", "suggestions": "Hole diameter ≥ material thickness", "benefits": "Prevents hole distortion, maintains accuracy, and preserves structural integrity." },
                { "element": "Bend Angles", "suggestions": "Typical angles ≤ 120° without special tooling", "benefits": "Ensures high accuracy and consistent quality, reducing special tool requirements." },
                { "element": "Edge-to-Bend Distance", "suggestions": "Minimum ≥ 2x material thickness", "benefits": "Prevents edge deformation, maintains part stability, and ensures high-quality bends." },
                { "element": "Tolerances", "suggestions": "Typical linear tolerance: ±0.2 - 0.5 mm", "benefits": "Reflects achievable accuracy in bending, balancing precision and cost-effectiveness." },
                { "element": "Relief Cuts", "suggestions": "Use relief cuts near complex bends", "benefits": "Reduces material stress, prevents tearing/cracking, and allows complex shapes." },
                { "element": "Material Grain Direction", "suggestions": "Bend perpendicular (90°) to grain when possible", "benefits": "Minimizes cracking, improves bend quality, and ensures long-term durability." },
                { "element": "U-shaped Channel Width", "suggestions": "Width ≥ 2x depth recommended", "benefits": "Ensures proper bending tool clearance, avoids deformation, and maintains accuracy." },
                { "element": "Text and Logos", "suggestions": "Locate text away from bend areas by ≥ 3 mm", "benefits": "Prevents distortion of engraved or laser-marked text during bending." }
            ]
        },
        gallery: [
            "/Bending/imgi_62_Custom-Sheet-Metal-Bending.jpg",
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

    // ... (other services remain unchanged, I will use a precise TargetContent for the interface and the enclosures item)
    {
        id: "enclosures-housings",
        title: "Custom Enclosures & Housings",
        description: "Quanheng is an expert in metal enclosure manufacturing, delivering custom solutions that typically save 30–60% of costs compared to local fabrication. We offer comprehensive solutions from design to assembly for various industries.",
        image: "/enclosures/imgi_77_Metal-Enclosure-Manufacturer.jpg",
        sections: [
            {
                title: "By Materials",
                description: "We work with a wide range of materials to ensure your enclosure meets specific environmental and structural requirements.",
                items: [
                    {
                        title: "Aluminum Enclosure",
                        description: "Lightweight and corrosion-resistant, aluminum enclosures are ideal for outdoor applications, offering excellent thermal conductivity and customization options for electronic uses.",
                        image: "/enclosures/imgi_8_Aluminum-Enclosure.jpg"
                    },
                    {
                        title: "304 Stainless Steel Enclosure",
                        description: "304 stainless steel enclosures provide outstanding corrosion resistance and strength, suitable for hygienic environments, such as food and pharmaceutical applications.",
                        image: "/enclosures/imgi_9_304-Stainless-Steel-Enclosure.jpg"
                    },
                    {
                        title: "316 Stainless Steel Enclosure",
                        description: "With superior corrosion resistance, 316 stainless steel enclosures excel in harsh chemicals, saltwater, and extreme environments, ensuring long-lasting performance.",
                        image: "/enclosures/imgi_10_316-Stainless-Steel-Enclosure.jpg"
                    },
                    {
                        title: "Mild Steel Enclosure",
                        description: "Cost-effective and versatile, mild steel enclosures are widely used for indoor applications where extreme corrosion resistance is not required.",
                        image: "/enclosures/imgi_11_Mild-Steel-Enclosure.jpg"
                    },
                    {
                        title: "Galvanized Steel Enclosure",
                        description: "Zinc-coated for enhanced corrosion protection, making it a durable choice for outdoor or humid environments.",
                        image: "/enclosures/imgi_12_Galvanized-Steel-Enclosure.jpg"
                    },
                    {
                        title: "Carbon Steel Enclosure",
                        description: "Strong and durable, carbon steel is suitable for heavy-duty industrial applications requiring high structural integrity.",
                        image: "/enclosures/imgi_13_Carbon-Steel-Enclosure.jpg"
                    }
                ]
            },
            {
                title: "By Installation Methods",
                items: [
                    {
                        title: "Free Standing Enclosure",
                        description: "Large, standalone units tailored for housing complex control systems and heavy equipment.",
                        image: "/enclosures/imgi_14_Free-Standing-Enclosure.jpg"
                    },
                    {
                        title: "Wall Mount Enclosure",
                        description: "Space-saving designed to be securely mounted on walls, ideal for limited floor space.",
                        image: "/enclosures/imgi_15_Wall-Mount-Enclosure.jpg"
                    },
                    {
                        title: "Flush Mount Enclosure",
                        description: "Recessed into the wall for a clean, low-profile appearance.",
                        image: "/enclosures/imgi_16_Flush-Mount-Enclosure.jpg"
                    },
                    {
                        title: "Rack Mount Enclosure",
                        description: "Standardized enclosures designed to fit into 19-inch racks for server and networking equipment.",
                        image: "/enclosures/imgi_17_Rack-Mount-Enclosure.jpg"
                    }
                ]
            },
            {
                title: "By Applications",
                items: [
                    {
                        title: "Metal Junction Box",
                        description: "Securely houses electrical connections, protecting them from environmental factors.",
                        image: "/enclosures/imgi_21_Metal-Junction-Box.jpg"
                    },
                    {
                        title: "Electrical Cabinet",
                        description: "Robust cabinets for industrial control panels, switchgear, and automation components.",
                        image: "/enclosures/imgi_24_Electrical-Cabinet.jpg"
                    },
                    {
                        title: "Battery Enclosure",
                        description: "Durable and ventilated enclosures for batteries, designed to provide safety and thermal management.",
                        image: "/enclosures/imgi_25_Battery-Enclosure.jpg"
                    },
                    {
                        title: "Generators Enclosure",
                        description: "Heavy-duty housings that reduce noise and protect backup generators from weather elements.",
                        image: "/enclosures/imgi_20_Metal-Generator-Enclosure.jpg"
                    },
                    {
                        title: "Metal Socket Box",
                        description: "Durable metal boxes for power outlets and switches.",
                        image: "/enclosures/imgi_18_Metal-Socket-Box.jpg"
                    },
                    {
                        title: "Metal Adaptable Box",
                        description: "Versatile enclosures for various electrical connections and terminations.",
                        image: "/enclosures/imgi_19_Metal-Adaptable-Box.jpg"
                    },
                    {
                        title: "Busbar Panel Box",
                        description: "Specialized enclosures for housing busbar distribution systems.",
                        image: "/enclosures/imgi_22_Busbar-Panel-Box.jpg"
                    },
                    {
                        title: "MCB Metal Box",
                        description: "Enclosures protecting Miniature Circuit Breakers in distribution boards.",
                        image: "/enclosures/imgi_23_MCB-Metal-Box.jpg"
                    }
                ]
            },
            {
                title: "By Manufacturing Process",
                items: [
                    {
                        title: "Sheet Metal Fabricated",
                        description: "Created by cutting, bending, and assembling metal sheets. Highly customizable.",
                        image: "/enclosures/imgi_30_Sheet-Metal-Enclosure.jpg"
                    },
                    {
                        title: "Extruded Enclosures",
                        description: "Aluminum pushed through a mold to form continuous profiles. Ideal for PCBs.",
                        image: "/enclosures/imgi_31_Extruded-Aluminium-Enclosure.jpg"
                    },
                    {
                        title: "Die Casted Enclosures",
                        description: "Made from aluminum or zinc alloys. Excellent for complex shapes.",
                        image: "/enclosures/imgi_32_Die-Cast-Enclosure.jpg"
                    }
                ]
            },
            {
                title: "By IP Ratings",
                description: "We manufacture enclosures to meet various Ingress Protection (IP) ratings for dust and water resistance.",
                items: [
                    {
                        title: "IP65 Metal Enclosure",
                        description: "Dust-tight and protected against water jets. Suitable for general outdoor use.",
                        image: "/enclosures/imgi_26_IP65-Metal-Enclosure.jpg"
                    },
                    {
                        title: "IP66 Metal Enclosure",
                        description: "Dust-tight and protected against heavy seas or powerful jets of water.",
                        image: "/enclosures/imgi_27_IP66-Metal-Enclosure.jpg"
                    },
                    {
                        title: "IP67 Metal Enclosure",
                        description: "Protected against the effects of temporary immersion in water.",
                        image: "/enclosures/imgi_28_IP67-Metal-Enclosure.jpg"
                    },
                    {
                        title: "IP68 Metal Enclosure",
                        description: "Protected against the effects of continuous immersion in water.",
                        image: "/enclosures/imgi_29_IP68-Metal-Enclosure.jpg"
                    }
                ]
            }
        ]
    },
    {
        id: "cnc-turning",
        title: "Precision CNC Turning Service",
        description: "Specialized precision CNC turning services for metals and plastics. Utilizing advanced vertical and horizontal turning centers to deliver high accuracy for both small and large workpieces.",
        image: "/CNC Turning Service/imgi_49_CNC-Turning-Service.jpg",
        features: [
            "Vertical & Horizontal Turning Centers",
            "Y, C, 4, and 5-Axis Turning Ability",
            "Quality Metal & Plastic Materials",
            "ISO 2768 Tolerance Standard"
        ]
    },
    {
        id: "cnc-milling",
        title: "Advanced CNC Milling Service",
        description: "Specialized CNC milling services featuring 3, 4, and 5-axis capabilities. We deliver high-precision parts with complex geometries using advanced vertical and horizontal milling centers.",
        image: "/cnc-milling/imgi_46_Custom-CNC-Milling.jpg",
        features: [
            "3, 4, and 5-Axis Milling Centers",
            "Vertical (VMC) & Horizontal (HMC)",
            "Complex 3D Contouring",
            "Rapid Prototyping & Production"
        ]
    },
    {
        id: "metal-welding",
        title: "Professional Metal Welding Services",
        description: "High-quality welding and assembly services for critical industrial components. We provide precision TIG, MIG, and spot welding for structural integrity, airtight seals, and cosmetic finishing across various metal alloys.",
        features: [
            "TIG & MIG Welding for Aluminum & Stainless Steel",
            "Spot Welding for High-Speed Sheet Metal Assembly",
            "Pressure Vessel & Airtight Sealing Capabilities",
            "Post-Weld Grinding & Surface Blending"
        ],
        image: "/Core Competencies/metal welding .jpeg",
        sections: [
            {
                title: "Welding Defects & Solutions",
                description: "At Quanheng, we implement rigorous control over welding parameters to prevent common defects and ensure the structural integrity of every joint.",
                items: [
                    {
                        title: "Porosity",
                        description: "Small gas pockets trapped in the weld bead, often caused by surface contaminants or improper shielding gas flow. We solve this through meticulous pre-weld cleaning and gas flow optimization.",
                        image: "/welding/Porosity-in-Welding.jpg"
                    },
                    {
                        title: "Undercutting",
                        description: "A groove formed at the weld edge due to excessive heat or travel speed. Our technicians use precision amperage control and weaving techniques to ensure a perfectly filled joint.",
                        image: "/welding/Undercut-in-Welding.jpg"
                    },
                    {
                        title: "Welding Cracks",
                        description: "Structural fractures caused by internal stress or rapid cooling. We prevent cracking through scientific preheating protocols and controlled slow-cooling using thermal blankets.",
                        image: "/welding/Welding-Cracks.jpg"
                    },
                    {
                        title: "Distortion",
                        description: "Warping caused by uneven heat distribution. We manage thermal stress using balanced welding sequences (back-stepping) and robust heavy-duty jigs and fixtures.",
                        image: "/welding/Distortion-in-Welding.jpg"
                    }
                ]
            }
        ]
    }
];



# File: C:\Users\Administrator\Downloads\quanheng-metal-processing\data\blogPosts.ts
import { BlogPost } from '../types';

export const blogPosts: BlogPost[] = [
   {
      id: 'steel-prices-2025-12-28',
      title: 'Steel Sheet Price Analysis - December 28, 2025',
      excerpt: 'Latest market prices and trends for cold rolled, hot rolled, galvanized, and stainless steel sheets.',
      category: 'Market Trends',
      author: 'Quanheng Metal',
      date: 'December 28, 2025',
      content: `
# Steel Sheet Price Analysis - December 28, 2025

## Market Overview

The steel sheet market is maintaining stable operations today, with minor price fluctuations across different varieties. Influenced by both raw material costs and market demand, different types of steel sheets are showing varying price trends.

---

## Main Steel Sheet Varieties & Prices

### 1. Cold Rolled Steel Sheet

**Today's Reference Price:** $680 - $730 per ton

Cold rolled steel sheet is produced through cold rolling processes, featuring smooth surfaces, high dimensional accuracy, and excellent mechanical properties.

**Price Highlights:**
- **SPCC Standard Cold Rolled:** $680-$695 per ton
- **SPCD Deep Drawing Cold Rolled:** $710-$730 per ton
- **Specifications:** 0.8-3.0mm thickness
- **Market Trend:** Prices increased slightly from last week, up by $4-7 per ton

**Applications:** Automotive manufacturing, home appliance casings, precision instruments, electronic equipment

---

### 2. Hot Rolled Steel Sheet

**Today's Reference Price:** $590 - $625 per ton

Hot rolled steel sheet is produced through hot rolling processes, offering good formability and weldability. It is the most widely used steel sheet variety in industrial production.

**Price Highlights:**
- **Q235B Hot Rolled Sheet:** $590-$605 per ton
- **Q355B High-Strength Hot Rolled:** $610-$625 per ton
- **Specifications:** 2.0-12.0mm thickness
- **Market Trend:** Prices remain stable, consistent with last week

**Applications:** Building structures, machinery manufacturing, steel structures, bridge construction

---

### 3. Galvanized Steel Sheet

**Today's Reference Price:** $715 - $765 per ton

Galvanized steel sheet features a zinc coating on the steel surface, providing excellent corrosion resistance. It is an essential material for construction, home appliances, and other industries.

**Price Highlights:**
- **Standard Galvanized (60-80g/㎡ coating):** $715-$730 per ton
- **Heavy Galvanized (120-180g/㎡ coating):** $745-$765 per ton
- **Specifications:** 0.4-2.5mm thickness
- **Market Trend:** Influenced by increased downstream demand, prices rose slightly by $3-6 per ton

**Applications:** Building roofing, color steel substrate, ventilation ducts, appliance components

---

### 4. Stainless Steel Sheet

**Today's Reference Price:** $2,080 - $2,740 per ton

Stainless steel sheet offers excellent corrosion resistance, aesthetic appeal, and hygienic properties, making it the preferred material for high-end manufacturing.

**Price Highlights:**
- **304 Stainless Steel:** $2,080-$2,180 per ton
- **316 Stainless Steel:** $2,600-$2,740 per ton
- **201 Stainless Steel:** $1,380-$1,435 per ton
- **Specifications:** 0.5-3.0mm thickness
- **Market Trend:** Rising nickel prices driving stainless steel prices higher, up by $14-28 per ton

**Applications:** Food processing equipment, medical devices, chemical containers, architectural decoration

---

## Market Analysis

### Price Influencing Factors

1. **Raw Material Costs**
   - Iron ore price: $130 per ton (imported)
   - Coke price: $345 per ton
   - Nickel price: $18,000 per ton (impacts stainless steel)

2. **Market Demand**
   - Year-end manufacturing orders increasing
   - Infrastructure projects gradually starting
   - Export orders remain stable

3. **Inventory Levels**
   - Social inventory at moderate levels
   - Steel mill inventory pressure manageable
   - Circulation inventory turnover normal

### Market Outlook

**Short-term Forecast (1-2 weeks):**
- Cold Rolled: Expected to maintain steady with slight upward trend
- Hot Rolled: Prices may experience minor adjustments
- Galvanized: Supported by demand, prices running strong
- Stainless Steel: Monitor nickel price movements, expected to fluctuate at high levels

**Purchasing Recommendations:**
- Recommend purchasing as needed, avoid large stockpiling
- Cold rolled and galvanized sheets can be moderately stocked
- Stainless steel prices relatively high, consider locking in long-term order prices

---

## Quanheng Metal Service Advantages

🔹 **Competitive Pricing:** Direct cooperation with major steel mills, eliminating middlemen
🔹 **Ample Stock:** Over 3,000 tons in inventory, wide range of specifications
🔹 **Quality Assurance:** All products come with material certificates and quality guarantees
🔹 **Fast Delivery:** Same-day delivery for local customers
🔹 **Custom Services:** Cutting, laser cutting, punching, and other processing services available

---

## Contact Us

For quotations or more product information, please contact:

📞 **Phone:** +86 13473836059  
📧 **Email:** info@qumetal.com  
📍 **Address:** No. 29 Fuzhen Industrial Park, Nanpi County, Cangzhou, Hebei Province, China

> **Note:** The above prices are market reference prices. Actual transaction prices may vary based on order quantity, specification requirements, delivery method, and other factors. For accurate quotations, please contact our sales team directly.

---

*Data collection time: December 28, 2025 morning  
Price sources: Shanghai and Shenzhen major steel markets and steel mill quotations*
    `
   }
];



# File: C:\Users\Administrator\Downloads\quanheng-metal-processing\pages\Home.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Settings, Layers, Zap, FileUp, Settings2, FileText, Truck, ShieldCheck, Check } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

export const Home: React.FC = () => {
  useSEO({
    title: "Custom Metal Fabrication & CNC Machining Services | QUMETAL",
    description: "ISO 9001 certified precision metal manufacturing. Get one-stop solutions for custom sheet metal fabrication, CNC machining, stamping, and surface finishing."
  });

  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col w-full fade-in">

      {/* Hero Section */}
      <section className="relative min-h-[90vh] w-full flex items-center justify-center bg-[#050B14] overflow-hidden pt-20">

        {/* Dynamic Abstract Background Elements */}
        {/* Deep radial glow behind the text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/20 rounded-full blur-[120px] opacity-60 pointer-events-none"></div>

        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik00MCAwaC0xdjQwaDFWMHoiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPgo8cGF0aCBkPSJNMCAzOWh0NDB2MWgtNDB2LTF6IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+')] opacity-20 z-0"></div>

        {/* Diagonal Light Slashes / Reflections */}
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[150%] bg-gradient-to-b from-white/5 to-transparent rotate-[30deg] blur-3xl pointer-events-none transform -translate-y-1/2"></div>
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[150%] bg-gradient-to-t from-accent/10 to-transparent rotate-[30deg] blur-3xl pointer-events-none transform translate-y-1/2"></div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center justify-center text-center">

          {/* Top Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm mb-8 animate-fade-in-up opacity-0-init">
            <span className="w-2 h-2 rounded-full bg-accent mr-3 animate-pulse"></span>
            <span className="text-slate-300 text-sm font-semibold tracking-wide uppercase">Professional Precision Metal Fabrication</span>
          </div>

          {/* Massive Typography Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black text-white mb-6 leading-[1.1] tracking-tight font-display max-w-5xl">
            <span className="block animate-fade-in-up opacity-0-init animate-delay-100 text-3xl md:text-5xl lg:text-6xl text-slate-300 font-bold mb-4">
              One-stop Solution
            </span>
            <span className="block animate-fade-in-up opacity-0-init animate-delay-200 text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-white to-slate-400">
              Custom Metal Fabrication & CNC Machining
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-3xl leading-relaxed animate-fade-in-up opacity-0-init animate-delay-300">
            Comprehensive production solutions from raw material control to after-sales service.
            Engineering excellence designed for the modern industrial era.
          </p>

          {/* Action Area */}
          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center animate-fade-in-up opacity-0-init animate-delay-500 w-full">
            <Link
              to="/quote"
              className="relative inline-flex items-center justify-center px-10 py-4 text-lg font-bold text-white transition-all duration-300 bg-accent rounded-full hover:bg-orange-500 shadow-[0_0_30px_rgba(234,88,12,0.3)] hover:shadow-[0_0_40px_rgba(234,88,12,0.6)] hover:-translate-y-1 overflow-hidden group w-full sm:w-auto"
            >
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
              <span className="relative flex items-center">
                Request Instant Quote
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link
              to="/sheet-metal-fabrication"
              className="inline-flex items-center justify-center px-10 py-4 text-lg font-semibold text-white transition-all duration-300 border border-slate-700 bg-slate-800/50 backdrop-blur-sm rounded-full hover:bg-slate-700 hover:text-white w-full sm:w-auto group"
            >
              Explore Capabilities
            </Link>
          </div>

        </div>
      </section>

      {/* Intro / Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">Why Choose Us</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 md:auto-rows-fr gap-8">
            {[
              {
                icon: <Layers className="w-12 h-12 text-accent" aria-hidden="true" />,
                title: "Stable Supply Chain, Lower Costs",
                desc: "A reliable supply chain enables us to control costs and deliver competitive pricing—helping customers significantly reduce manufacturing expenses."
              },
              {
                icon: <Settings className="w-12 h-12 text-accent" aria-hidden="true" />,
                title: "One-Stop Metal Fabrication",
                desc: "From stamping and bending to laser cutting and welding, we offer complete in-house processes for fast, efficient, one-stop production."
              },
              {
                icon: <Truck className="w-12 h-12 text-accent" aria-hidden="true" />,
                title: "Flexible Logistics Support — Only When You Need It",
                desc: "For customers new to international sourcing, we provide logistics assistance and door-to-door solutions when needed. If you already work with a trusted forwarder, we fully support your existing logistics arrangements."
              },
              {
                icon: <ShieldCheck className="w-12 h-12 text-accent" aria-hidden="true" />,
                title: "Quality Assurance",
                desc: "We have certified to ISO 9001:2015, from initial production to final delivery, we maintain strict quality control to ensure compliance with customer requirements."
              },
            ].map((feature, idx) => (
              <div key={idx} className="h-full p-8 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col sm:flex-row items-start gap-6 cursor-pointer">
                <div className="flex-shrink-0 w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center">{feature.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services Preview */}
      <section className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Expertise</span>
              <h2 className="text-3xl font-bold text-primary mt-2">Core Competencies</h2>
            </div>
            <Link to="/sheet-metal-fabrication" className="hidden md:flex items-center text-accent hover:text-orange-600 font-medium">
              View Sheet Metal Capabilities <ArrowRight className="w-4 h-4 ml-1" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Sheet Metal Fabrication",
                desc: "Comprehensive sheet metal processing including cutting, bending, stamping, and welding.",
                img: "/Core%20Competencies/metal%20bending.jpeg",
                link: "/sheet-metal-fabrication"
              },
              {
                title: "CNC Machining",
                desc: "High-precision CNC milling and turning for complex metal and plastic parts.",
                img: "/Core%20Competencies/imgi_8_CNC-Machining.jpg",
                link: "/cnc-machining"
              },
              {
                title: "3D Printing",
                desc: "Rapid prototyping and additive manufacturing for complex geometries.",
                img: "/Core%20Competencies/3d%20printing.jpeg",
                link: "/3d-printing-service"
              },
              {
                title: "Surface Finishing",
                desc: "Professional surface treatments including anodizing, powder coating, and plating.",
                img: "/Core%20Competencies/imgi_73_Surface-Finishes-768x509.jpg",
                link: "/services/surface-finishing"
              }
            ].map((item, idx) => (
              <Link to={item.link} key={idx} className="group relative overflow-hidden rounded-2xl h-[400px] block cursor-pointer border border-slate-200/50 hover:border-accent/50 transition-colors duration-500 shadow-sm hover:shadow-xl hover:-translate-y-1">
                <img
                  src={item.img}
                  alt={item.title}
                  width={600}
                  height={400}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent flex flex-col justify-end p-6 opacity-90 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-slate-300 text-sm mb-4 leading-relaxed line-clamp-2 md:line-clamp-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{item.desc}</p>
                    <div className="flex items-center text-accent font-semibold text-sm tracking-widest uppercase">
                      <span>Explore Service</span>
                      <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16">
            <div className="mb-8">
              <span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Work</span>
              <h3 className="text-2xl font-bold text-primary mt-2">Project Showcase</h3>
            </div>
            <div className="relative group">
              <div ref={scrollContainerRef} className="flex overflow-x-auto gap-6 snap-x no-scrollbar scrolling-touch">
                {[
                  { name: "Aluminum Extrusion Parts", src: "/cases/Aluminum_20extrusion_20parts.webp", alt: "Custom aluminum extrusion profiles and manufactured parts" },
                  { name: "Assembled Products", src: "/cases/Assembled_20products.webp", alt: "Fully assembled custom metal and plastic fabricated products" },
                  { name: "Die Casting Parts", src: "/cases/Die_20casting_20parts.webp", alt: "High volume precision aluminum die casting parts" },
                  { name: "Metal Stamping Parts", src: "/cases/Metal_20stamping_20parts.webp", alt: "Complex custom metal stamping and formed parts" },
                  { name: "Plastic Parts", src: "/cases/Plastic_20parts.webp", alt: "Precision manufactured injection molded plastic parts" },
                  { name: "Electronics Components", src: "/cases/electronics.webp", alt: "Custom metallic housings and enclosures for electronic components" },
                  { name: "Machining Parts", src: "/cases/machining parts.webp", alt: "High precision CNC machined metal components" },
                  { name: "Optoelectronic Products 1", src: "/cases/光电产品 (1).webp", alt: "Precision metal brackets and housings for optoelectronic products" },
                  { name: "Optoelectronic Products 2", src: "/cases/光电产品 (2).webp", alt: "Custom CNC fabricated mounts for optical lenses and equipment" },
                ].map((item, idx) => (
                  <div key={idx} className="flex-none w-72 md:w-80 snap-center">
                    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 h-full flex flex-col cursor-pointer">
                      <div className="h-56 w-full relative">
                        <img
                          src={item.src}
                          alt={item.alt}
                          width={400}
                          height={300}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        />
                      </div>
                      <div className="p-4 flex-grow flex items-center justify-center">
                        <p className="text-slate-700 font-semibold text-center">{item.name}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Scroll indicators (optional but helpful) */}
              <div className="absolute top-1/2 -translate-y-1/2 left-2 hidden group-hover:block md:block pointer-events-none md:pointer-events-auto">
                <button aria-label="Scroll left" onClick={scrollLeft} className="bg-white/90 p-2 rounded-full shadow-lg border border-slate-200 text-slate-700 hover:bg-white transition-colors">
                  <ArrowRight className="w-5 h-5 rotate-180" aria-hidden="true" />
                </button>
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 right-2 hidden group-hover:block md:block pointer-events-none md:pointer-events-auto">
                <button aria-label="Scroll right" onClick={scrollRight} className="bg-white/90 p-2 rounded-full shadow-lg border border-slate-200 text-slate-700 hover:bg-white transition-colors">
                  <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link to="/sheet-metal-fabrication" className="inline-flex items-center text-accent hover:text-orange-600 font-medium">
              View Sheet Metal Capabilities <ArrowRight className="w-4 h-4 ml-1" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Supported Materials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Supported Sheet Metal Materials</h2>
            <p className="text-slate-600 max-w-4xl mx-auto">
              We specialize in processing a diverse range of metals, including iron, aluminum, stainless steel, galvanized steel, titanium, brass, bronze, and nickel.
            </p>
          </div>

          <div className="overflow-hidden border border-slate-200 rounded-lg shadow-sm bg-white mb-12">
            {[
              { name: "Aluminum", items: ["1100-H14 Aluminum Alloy", "5052-H32 Aluminum Alloy", "6061 Aluminum Alloy", "7075 Aluminum Alloy"] },
              { name: "Stainless Steel", items: ["301 Stainless Steel", "303 Stainless Steel", "304 Stainless Steel", "316 Stainless Steel", "430 Stainless Steel"] },
              { name: "Steel", items: ["DC01 Carbon Steel", "1018 Steel", "1020 Steel", "Galvanized Steel", "Cold Rolled Steel", "Hot Rolled Steel"] },
              { name: "Copper", items: ["260 Copper", "1100 Copper", "110 Copper", "101 Copper"] },
              { name: "Bronze", items: ["Bronze 220", "Bronze 510"] },
              { name: "Nickel Alloys", items: ["Inconel 600", "Inconel 625", "Monel 400", "Nickel 200", "Nickel 400"] },
              { name: "Titanium", items: ["Titanium Grade 2", "Titanium Grade 4", "Titanium 6Al-4V Grade 5"] },
            ].map((row, idx) => (
              <div key={idx} className="flex flex-col md:flex-row border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors duration-200">
                <div className="bg-slate-900 text-white py-4 px-6 md:w-48 flex-shrink-0 flex items-center justify-center md:justify-start font-bold">
                  {row.name}
                </div>
                <div className="flex-grow p-4 bg-white grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 items-center">
                  {row.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="text-slate-600 text-sm text-center md:text-left px-2">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/quote"
              className="inline-block px-10 py-4 bg-accent hover:bg-orange-600 text-white font-bold rounded-md transition-all duration-200 shadow-md cursor-pointer hover:shadow-xl"
            >
              Tell Us Your Requirements
            </Link>
          </div>
        </div>
      </section>

      {/* How To Order Section */}

      <section className="py-24 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">How To Order Parts</h2>
            <p className="text-slate-600 text-lg">Easily customize your order and upload your files quickly to get started.</p>
          </div>

          <div className="relative">
            {/* Connection Line (Desktop) */}
            <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 border-t-2 border-dashed border-slate-200 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 relative z-10">
              {[
                {
                  step: "Step 1",
                  title: "Submit Your Design Files",
                  desc: "Upload your CAD files or drawings. If you don't have existing design files, you may also send reference images and a brief description of your requirements. We can provide a preliminary evaluation and rough cost estimate based on this information.",
                  icon: <FileUp className="w-8 h-8 text-slate-700" aria-hidden="true" />
                },
                {
                  step: "Step 2",
                  title: "Choose Materials And Processes",
                  desc: "Select the appropriate materials and manufacturing processes for your parts. Our experts can assist you in making the best choices for your project.",
                  icon: <Settings2 className="w-8 h-8 text-slate-700" aria-hidden="true" />
                },
                {
                  step: "Step 3",
                  title: "Get a Quote",
                  desc: "Once you have provided your design files and selected materials and processes, we will send you a detailed quotation within 24 hours.",
                  icon: <FileText className="w-8 h-8 text-slate-700" aria-hidden="true" />
                },
                {
                  step: "Step 4",
                  title: "Confirm Your Order",
                  desc: "Review the quotation and confirm your order. Our team will begin the manufacturing process upon your confirmation.",
                  icon: <CheckCircle className="w-8 h-8 text-slate-700" aria-hidden="true" />
                },
                {
                  step: "Step 5",
                  title: "Production And Delivery",
                  desc: "We will manufacture your parts according to your specifications and deliver them to your specified address within the agreed timeline. Generally, samples are shipped by air, while formal orders are shipped by land or sea.",
                  icon: <Truck className="w-8 h-8 text-slate-700" aria-hidden="true" />
                }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center group">
                  <div className="w-24 h-24 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center mb-6 shadow-sm group-hover:border-accent group-hover:shadow-md transition-all duration-300 relative">
                    {item.icon}
                    {/* Step dot on line (Desktop) */}
                    <div className="hidden lg:block absolute -top-[50px] left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-slate-300 border-4 border-white"></div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.step}: {item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/quote"
              className="inline-flex items-center px-8 py-3 bg-accent hover:bg-orange-600 text-white font-bold rounded-md transition-all duration-200 shadow-md cursor-pointer hover:shadow-xl"
            >
              Get Instant Quote <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>


    </div>
  );
};



# File: C:\Users\Administrator\Downloads\quanheng-metal-processing\pages\About.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, Package, ChevronRight } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="w-full fade-in bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-900 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-transparent to-primary opacity-60"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/20 border border-accent/30 rounded-full text-accent text-xs font-semibold mb-6 tracking-widest uppercase">
            <Award className="w-3.5 h-3.5" aria-hidden="true" /> Est. 1993
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">About QuMetal</h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Leading the way in precision metal manufacturing with over three decades of excellence.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-slate-900 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {[
              { value: '30+', label: 'Years Experience', icon: <Award className="w-5 h-5 text-accent" aria-hidden="true" /> },
              { value: '50+', label: 'Material Types', icon: <Package className="w-5 h-5 text-accent" aria-hidden="true" /> },
              { value: '200+', label: 'Global Clients', icon: <Users className="w-5 h-5 text-accent" aria-hidden="true" /> },
              { value: 'ISO', label: '9001:2015 Certified', icon: <Award className="w-5 h-5 text-accent" aria-hidden="true" /> },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center justify-center gap-2 py-8 px-4">
                {stat.icon}
                <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-xs md:text-sm text-slate-400 text-center">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="relative">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px bg-accent/30 w-12"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">Who We Are</h2>
          </div>
          <div className="text-slate-600 leading-loose text-lg space-y-8">
            <p className="text-xl md:text-2xl leading-relaxed border-l-4 border-accent pl-6 py-2 bg-slate-50 rounded-r-xl">
              Founded in 1993, QuMetal (Cangzhou Quanheng Metals Ltd) is a professional metal manufacturing factory located in Cangzhou, China—one of the country's most important industrial hubs for metal processing and fabrication.
            </p>
            <p>
              Cangzhou is home to thousands of metalworking and manufacturing enterprises, forming a highly mature and efficient industrial ecosystem. This region brings together a large number of skilled technicians, experienced engineers, and specialized suppliers, enabling fast collaboration, stable production capacity, and strong cost control.
            </p>
            <p>
              With more than 30 years of practical experience, we specialize in custom metal parts and sheet metal fabrication, supporting projects from prototyping through full-scale production. We process over 50 types of metals and engineering materials, including steel, stainless steel, aluminum, and copper.
            </p>
            <p>
              Our engineering and production teams focus on design optimization and manufacturability, helping customers lower costs, improve part performance, and shorten lead times through practical, production-oriented solutions.
            </p>
            <p>
              We serve clients across Europe, North America, the Middle East, Asia, and Russia, with a solid understanding of international standards, quality requirements, and business practices.
            </p>
          </div>
        </div>
      </section>

      {/* Manufacturing Facilities */}
      <section className="bg-slate-50 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 rounded-full text-accent text-xs font-semibold mb-4 tracking-widest uppercase">Our Facilities</div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 tracking-tight">Manufacturing Facilities</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              Equipped with state-of-the-art production technology to ensure precision and efficiency at every stage.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { img: "/about/Metal Stamping floor.jpg", title: "Metal Stamping Floor", desc: "High-capacity stamping workshop with precision equipment for mass production" },
              { img: "/about/Tooling Production.jpg", title: "Tooling Production", desc: "Professional mold and tooling manufacturing center for custom tooling solutions" },
              { img: "/about/CNC Machining Centres.jpg", title: "CNC Machining Centres", desc: "Advanced CNC machining capabilities for high-precision components" },
              { img: "/about/Auto-lathe production.jpg", title: "Auto-lathe Production", desc: "Automated lathe production line for efficient high-volume manufacturing" },
              { img: "/about/Laser Cutting machine.jpg", title: "Laser Cutting Machine", desc: "High-precision laser cutting equipment for clean, accurate cuts" },
              { img: "/about/Wire-cutting machine.jpg", title: "Wire-cutting Machine", desc: "Wire EDM cutting capabilities for intricate designs and tight tolerances" },
              { img: "/about/Die-casting products machining.jpg", title: "Die-casting Machining", desc: "Die-casting machining operations for precision metal components" },
            ].map((facility, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300">
                  <img
                    src={facility.img}
                    alt={facility.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-72 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-white font-bold text-lg mb-1">{facility.title}</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">{facility.desc}</p>
                  </div>
                  {/* Always-visible bottom tag */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent py-4 px-4 group-hover:opacity-0 transition-opacity duration-300">
                    <p className="text-white font-semibold text-sm">{facility.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 rounded-full text-accent text-xs font-semibold mb-4 tracking-widest uppercase">What We Do</div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 tracking-tight">Our Services</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
              Comprehensive manufacturing solutions tailored to meet the most demanding engineering requirements.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Metal Stamping / Punched Service", desc: "High-precision stamping and punching for complex geometries", num: "01" },
              { title: "CNC Machining", desc: "CNC Turning, Milling for tight tolerance parts", num: "02" },
              { title: "Sheet Metal Fabrication", desc: "Custom sheet metal components and assemblies", num: "03" },
              { title: "Metal Casting", desc: "Investment casting and sand casting solutions", num: "04" },
              { title: "Forging Services", desc: "Cold forging and hot forging capabilities", num: "05" },
              { title: "Aluminum Extrusion", desc: "Custom aluminum profiles and extrusions", num: "06" },
            ].map((service, i) => (
              <div key={i} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-accent/30 hover:shadow-lg transition-all cursor-pointer group relative overflow-hidden">
                <div className="absolute top-4 right-5 text-4xl font-black text-slate-100 group-hover:text-accent/10 transition-colors select-none">{service.num}</div>
                <h3 className="text-xl font-bold text-primary mb-3 tracking-tight relative z-10">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm relative z-10 mb-4">{service.desc}</p>
                <Link to="/sheet-metal-fabrication" className="inline-flex items-center text-accent text-sm font-semibold gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More <ChevronRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-slate-900 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Ready to Start Your Project?</h2>
          <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
            Upload your drawings and get a detailed quotation within 24 hours. No minimum order quantity.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/quote"
              className="px-8 py-4 bg-accent hover:bg-orange-600 text-white font-bold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl cursor-pointer inline-flex items-center gap-2"
            >
              Request a Quote <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all duration-200 border border-white/20 cursor-pointer"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};



# File: C:\Users\Administrator\Downloads\quanheng-metal-processing\pages\Contact.tsx
import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Clock, Upload, X, CheckCircle, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Contact: React.FC = () => {
  const [uploading, setUploading] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (files: FileList | null) => {
    if (!files) return;
    const maxSize = 20 * 1024 * 1024; // 20MB
    const fileArray = Array.from(files);
    const validFiles = fileArray.filter((file) => {
      if (file.size > maxSize) {
        alert(`File "${file.name}" is too large. Maximum size is 20MB.`);
        return false;
      }
      return true;
    });
    setSelectedFiles(prev => [...prev, ...validFiles]);
  };

  const removeFile = (index: number) => {
    setSelectedFiles(prev => prev.filter((_, i) => i !== index));
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    handleFileSelect(e.dataTransfer.files);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUploading(true);

    try {
      const formData = new FormData(e.currentTarget);
      const formValues = Object.fromEntries(formData.entries());

      // 1. Upload files first
      const uploadedFiles = [];

      for (const file of selectedFiles) {
        try {
          // Get presigned URL
          const uploadConfigRes = await fetch('/.netlify/functions/get-upload-url', {
            method: 'POST',
            body: JSON.stringify({
              filename: file.name,
              filetype: file.type
            })
          });

          if (!uploadConfigRes.ok) throw new Error('Failed to get upload URL');

          const { uploadUrl, key } = await uploadConfigRes.json();

          // Upload to S3 directly
          const uploadRes = await fetch(uploadUrl, {
            method: 'PUT',
            body: file,
            headers: {
              'Content-Type': file.type
            }
          });

          if (!uploadRes.ok) throw new Error('Failed to upload file to storage');

          uploadedFiles.push({
            name: file.name,
            key: key,
            size: file.size,
            type: file.type
          });

        } catch (err) {
          console.error("File upload error", err);
          alert(`Failed to upload ${file.name}. Please try again.`);
          setUploading(false);
          return;
        }
      }

      // 2. Submit form data with file keys
      const submitRes = await fetch('/.netlify/functions/submit-quote', {
        method: 'POST',
        body: JSON.stringify({
          ...formValues,
          files: uploadedFiles
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (submitRes.ok) {
        alert('Thank you! Your message has been sent successfully. We will contact you soon.');
        (e.target as HTMLFormElement).reset();
        setSelectedFiles([]);
      } else {
        const errorData = await submitRes.json();
        throw new Error(errorData.error || 'Submission failed');
      }

    } catch (error: any) {
      console.error('Form submission error:', error);
      alert(`Error: ${error.message || 'Something went wrong'}. Please try again.`);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="w-full fade-in bg-slate-50 min-h-screen">
      {/* Hero */}
      <div className="relative overflow-hidden bg-slate-900 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-primary/80"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/20 border border-accent/30 rounded-full text-accent text-xs font-semibold mb-4 tracking-widest uppercase">Get In Touch</div>
          <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Get in touch for quotes, technical questions, or factory tours.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Form Section (Takes 2/3 width) */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
              <div className="h-1.5 bg-gradient-to-r from-accent via-orange-500 to-primary"></div>
              <div className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-primary mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-sm font-medium text-slate-700 mb-1">Name *</label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        autoComplete="name"
                        required
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-sm font-medium text-slate-700 mb-1">Email *</label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        autoComplete="email"
                        required
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="contact-company" className="block text-sm font-medium text-slate-700 mb-1">Company</label>
                      <input
                        id="contact-company"
                        type="text"
                        name="company"
                        autoComplete="organization"
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-colors"
                        placeholder="Company name"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-quantity" className="block text-sm font-medium text-slate-700 mb-1">Quantity</label>
                      <select
                        id="contact-quantity"
                        name="quantity"
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-colors bg-white"
                      >
                        <option value="">Select quantity</option>
                        <option value="1-10">1 - 10 pcs</option>
                        <option value="11-50">11 - 50 pcs</option>
                        <option value="51-100">51 - 100 pcs</option>
                        <option value="101-500">101 - 500 pcs</option>
                        <option value="501-1000">501 - 1,000 pcs</option>
                        <option value="1001-5000">1,001 - 5,000 pcs</option>
                        <option value="5001-10000">5,001 - 10,000 pcs</option>
                        <option value="10000+">10,000+ pcs</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="contact-material" className="block text-sm font-medium text-slate-700 mb-1">Material Preference</label>
                      <select
                        id="contact-material"
                        name="material"
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-colors bg-white"
                      >
                        <option value="">Select material</option>
                        <option value="Aluminum">Aluminum</option>
                        <option value="Stainless Steel">Stainless Steel</option>
                        <option value="Carbon Steel">Carbon Steel</option>
                        <option value="Galvanized Steel">Galvanized Steel</option>
                        <option value="Copper">Copper</option>
                        <option value="Brass">Brass</option>
                        <option value="Other">Other (specify in notes)</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="contact-surface-finish" className="block text-sm font-medium text-slate-700 mb-1">Surface Finish</label>
                      <select
                        id="contact-surface-finish"
                        name="surface_finish"
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-colors bg-white"
                      >
                        <option value="">Select finish</option>
                        <option value="None">None / As Machined</option>
                        <option value="Powder Coating">Powder Coating</option>
                        <option value="Anodizing">Anodizing</option>
                        <option value="Electroplating">Electroplating</option>
                        <option value="Zinc Plating">Zinc Plating</option>
                        <option value="Nickel Plating">Nickel Plating</option>
                        <option value="Chrome Plating">Chrome Plating</option>
                        <option value="Painting">Painting</option>
                        <option value="Brushing">Brushing</option>
                        <option value="Polishing">Polishing</option>
                        <option value="Sandblasting">Sandblasting</option>
                        <option value="Other">Other (specify in notes)</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="contact-message" className="block text-sm font-medium text-slate-700 mb-1">Additional Notes</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-colors"
                      placeholder="Describe your project needs, tolerances, or other specifications..."
                    ></textarea>
                  </div>

                  {/* File Upload Area */}
                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                      <Upload className="w-5 h-5 text-accent" aria-hidden="true" />
                      Upload Design Files
                    </h3>

                    <div
                      onDragEnter={handleDrag}
                      onDragLeave={handleDrag}
                      onDragOver={handleDrag}
                      onDrop={handleDrop}
                      onClick={() => fileInputRef.current?.click()}
                      className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-all cursor-pointer ${dragActive
                        ? 'border-accent bg-accent/5'
                        : 'border-slate-300 hover:border-accent bg-slate-50'
                        }`}
                    >
                      <input
                        ref={fileInputRef}
                        type="file"
                        multiple
                        onChange={(e) => handleFileSelect(e.target.files)}
                        className="hidden"
                        accept=".pdf,.dwg,.dxf,.stp,.step,.igs,.iges,.stl,.obj,.3mf,.jpg,.jpeg,.png,.doc,.docx,.xls,.xlsx,.zip,.rar"
                      />
                      <div className="flex flex-col items-center">
                        <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                          <Upload className="w-8 h-8 text-accent" />
                        </div>
                        <p className="text-lg font-medium text-slate-700 mb-1">
                          Drag & drop files here or click to browse
                        </p>
                        <p className="text-sm text-slate-500">
                          Supported formats: STEP, DWG, PDF, Images...
                        </p>
                      </div>
                    </div>

                    {/* File List */}
                    {selectedFiles.length > 0 && (
                      <div className="mt-4 space-y-2">
                        {selectedFiles.map((file, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-200"
                          >
                            <div className="flex items-center gap-3 flex-1 min-w-0">
                              <div className="flex-shrink-0 w-8 h-8 bg-accent/10 rounded flex items-center justify-center">
                                <FileText className="w-4 h-4 text-accent" />
                              </div>
                              <div className="min-w-0 flex-1">
                                <p className="text-sm font-medium text-slate-700 truncate">{file.name}</p>
                                <p className="text-xs text-slate-500">{formatFileSize(file.size)}</p>
                              </div>
                            </div>
                            <button
                              type="button"
                              onClick={() => removeFile(index)}
                              className="flex-shrink-0 p-1 hover:bg-red-100 rounded-full transition-colors"
                              title="Remove file"
                            >
                              <X className="w-4 h-4 text-red-500" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="mb-5 bg-accent/5 border border-accent/20 rounded-xl px-5 py-3 flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" aria-hidden="true" />
                    <p className="text-sm text-slate-600"><span className="font-semibold text-accent">Fast Response</span> — We typically reply within 24 hours on business days.</p>
                  </div>
                  <button
                    type="submit"
                    disabled={uploading}
                    className="w-full bg-accent hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer flex items-center justify-center gap-2"
                  >
                    {uploading ? 'Sending...' : (
                      <>
                        <CheckCircle className="w-5 h-5" aria-hidden="true" />
                        Send Message
                      </>
                    )}
                  </button>

                  <p className="text-xs text-slate-500 text-center mt-4">
                    By submitting, you agree to our{' '}
                    <Link to="/privacy" className="text-accent hover:underline">Privacy Policy</Link>
                  </p>
                </form>
              </div>
            </div>
          </div>

          {/* Contact Info (Takes 1/3 width) */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <h2 className="text-2xl font-bold text-primary mb-8">Get In Touch</h2>
              <div className="space-y-4">
                {[
                  {
                    icon: <MapPin className="w-5 h-5 text-accent" aria-hidden="true" />,
                    label: 'Factory Location',
                    content: 'No. 29 Fuzhen Industrial Park, Nanpi County, Cangzhou, Hebei Province, China'
                  },
                  {
                    icon: <Phone className="w-5 h-5 text-accent" aria-hidden="true" />,
                    label: 'Phone',
                    content: '+86 13473836059'
                  },
                  {
                    icon: <Mail className="w-5 h-5 text-accent" aria-hidden="true" />,
                    label: 'Email',
                    content: 'info@qumetal.com'
                  },
                  {
                    icon: <Clock className="w-5 h-5 text-accent" aria-hidden="true" />,
                    label: 'Business Hours',
                    content: 'Mon–Fri: 8:00 AM – 6:00 PM\nSat: 9:00 AM – 12:00 PM'
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 bg-white rounded-xl border border-slate-100 shadow-sm p-4 hover:shadow-md hover:border-accent/20 transition-all duration-200">
                    <div className="w-9 h-9 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-0.5">{item.label}</p>
                      <p className="text-slate-700 text-sm leading-relaxed whitespace-pre-line">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



# File: C:\Users\Administrator\Downloads\quanheng-metal-processing\pages\Privacy.tsx
import React, { useState } from 'react';

const sections = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'information-collected', title: 'Information We Collect' },
    { id: 'how-we-use', title: 'How We Use Your Information' },
    { id: 'sharing', title: 'Information Sharing' },
    { id: 'security', title: 'Data Security' },
    { id: 'cookies', title: 'Cookies' },
    { id: 'your-rights', title: 'Your Rights' },
    { id: 'third-party', title: 'Third-Party Links' },
    { id: 'children', title: "Children's Privacy" },
    { id: 'changes', title: 'Changes to This Policy' },
    { id: 'contact', title: 'Contact Us' },
];

export const Privacy: React.FC = () => {
    return (
        <div className="w-full fade-in bg-slate-50 min-h-screen">
            <div className="relative overflow-hidden bg-slate-900 pt-24 pb-16 md:pt-32 md:pb-24">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-primary/80"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
                    <p className="text-slate-300 max-w-2xl mx-auto">
                        Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                    {/* Table of Contents Sidebar */}
                    <aside className="lg:col-span-1">
                        <div className="sticky top-24 bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
                            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">Contents</p>
                            <nav>
                                <ul className="space-y-1.5">
                                    {sections.map((s) => (
                                        <li key={s.id}>
                                            <a
                                                href={`#${s.id}`}
                                                className="block text-sm text-slate-600 hover:text-accent hover:bg-accent/5 rounded-lg px-3 py-1.5 transition-all duration-150"
                                            >
                                                {s.title}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <main className="lg:col-span-3">
                        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100 space-y-10">

                            <section id="introduction">
                                <h2 className="text-2xl font-bold text-primary mb-4 pb-3 border-l-4 border-accent pl-4">Introduction</h2>
                                <p className="text-slate-600 leading-relaxed">
                                    Quanheng Metal Processing Factory ("we", "our", or "us") is committed to protecting your privacy.
                                    This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you
                                    visit our website or use our services.
                                </p>
                            </section>

                            <section id="information-collected">
                                <h2 className="text-2xl font-bold text-primary mb-4 pb-3 border-l-4 border-accent pl-4">Information We Collect</h2>
                                <p className="text-slate-600 leading-relaxed mb-3">
                                    We may collect personal information that you voluntarily provide to us when you:
                                </p>
                                <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                                    <li>Fill out our contact form</li>
                                    <li>Request a quotation</li>
                                    <li>Subscribe to our newsletter</li>
                                    <li>Communicate with us via email or phone</li>
                                </ul>
                                <p className="text-slate-600 leading-relaxed mt-3">
                                    The personal information we collect may include: name, email address, phone number, company name,
                                    project details, and any attachments you provide.
                                </p>
                            </section>

                            <section id="how-we-use">
                                <h2 className="text-2xl font-bold text-primary mb-4 pb-3 border-l-4 border-accent pl-4">How We Use Your Information</h2>
                                <p className="text-slate-600 leading-relaxed mb-3">We use the information we collect to:</p>
                                <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                                    <li>Respond to your inquiries and provide customer support</li>
                                    <li>Process quotation requests and project proposals</li>
                                    <li>Send you information about our services and updates</li>
                                    <li>Improve our website and services</li>
                                    <li>Comply with legal obligations</li>
                                </ul>
                            </section>

                            <section id="sharing">
                                <h2 className="text-2xl font-bold text-primary mb-4 pb-3 border-l-4 border-accent pl-4">Information Sharing and Disclosure</h2>
                                <p className="text-slate-600 leading-relaxed">
                                    We do not sell, trade, or rent your personal information to third parties. We may share your
                                    information only in the following circumstances:
                                </p>
                                <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4 mt-3">
                                    <li>With service providers who assist us in operating our website and conducting our business</li>
                                    <li>When required by law or to protect our rights</li>
                                    <li>With your explicit consent</li>
                                </ul>
                            </section>

                            <section id="security">
                                <h2 className="text-2xl font-bold text-primary mb-4 pb-3 border-l-4 border-accent pl-4">Data Security</h2>
                                <p className="text-slate-600 leading-relaxed">
                                    We implement appropriate technical and organizational measures to protect your personal information
                                    against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission
                                    over the Internet is 100% secure, and we cannot guarantee absolute security.
                                </p>
                            </section>

                            <section id="cookies">
                                <h2 className="text-2xl font-bold text-primary mb-4 pb-3 border-l-4 border-accent pl-4">Cookies and Tracking Technologies</h2>
                                <p className="text-slate-600 leading-relaxed">
                                    Our website may use cookies and similar tracking technologies to enhance user experience. You can
                                    choose to disable cookies through your browser settings, though this may affect certain functionality
                                    of our website.
                                </p>
                            </section>

                            <section id="your-rights">
                                <h2 className="text-2xl font-bold text-primary mb-4 pb-3 border-l-4 border-accent pl-4">Your Rights</h2>
                                <p className="text-slate-600 leading-relaxed mb-3">You have the right to:</p>
                                <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                                    <li>Access the personal information we hold about you</li>
                                    <li>Request correction of inaccurate information</li>
                                    <li>Request deletion of your personal information</li>
                                    <li>Opt-out of marketing communications</li>
                                    <li>Lodge a complaint with a supervisory authority</li>
                                </ul>
                            </section>

                            <section id="third-party">
                                <h2 className="text-2xl font-bold text-primary mb-4 pb-3 border-l-4 border-accent pl-4">Third-Party Links</h2>
                                <p className="text-slate-600 leading-relaxed">
                                    Our website may contain links to third-party websites. We are not responsible for the privacy
                                    practices of these external sites. We encourage you to review their privacy policies.
                                </p>
                            </section>

                            <section id="children">
                                <h2 className="text-2xl font-bold text-primary mb-4 pb-3 border-l-4 border-accent pl-4">Children's Privacy</h2>
                                <p className="text-slate-600 leading-relaxed">
                                    Our services are not directed to individuals under the age of 18. We do not knowingly collect
                                    personal information from children.
                                </p>
                            </section>

                            <section id="changes">
                                <h2 className="text-2xl font-bold text-primary mb-4 pb-3 border-l-4 border-accent pl-4">Changes to This Privacy Policy</h2>
                                <p className="text-slate-600 leading-relaxed">
                                    We may update this Privacy Policy from time to time. Any changes will be posted on this page with
                                    an updated revision date. We encourage you to review this policy periodically.
                                </p>
                            </section>

                            <section id="contact">
                                <h2 className="text-2xl font-bold text-primary mb-4 pb-3 border-l-4 border-accent pl-4">Contact Us</h2>
                                <p className="text-slate-600 leading-relaxed">
                                    If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
                                </p>
                                <div className="mt-4 p-5 bg-slate-50 rounded-xl border border-slate-200">
                                    <p className="text-slate-700"><strong>Email:</strong> info@qumetal.com</p>
                                    <p className="text-slate-700 mt-2"><strong>Phone:</strong> +86 13473836059</p>
                                    <p className="text-slate-700 mt-2">
                                        <strong>Address:</strong> No. 29 Fuzhen Industrial Park, Nanpi County, Cangzhou, Hebei Province, China
                                    </p>
                                </div>
                            </section>

                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};



# File: C:\Users\Administrator\Downloads\quanheng-metal-processing\pages\CNCLanding.tsx
import React, { useEffect } from 'react';
import { ChevronRight, Settings, ShieldCheck, Clock, CheckCircle2, ChevronDown, Package, PenTool, Cpu, Layers, RotateCcw, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const CNCLanding: React.FC = () => {
    // Animation observer
    useEffect(() => {
        const observerCallback: IntersectionObserverCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        };
        const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
        const observer = new IntersectionObserver(observerCallback, observerOptions);
        const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
        elements.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <div className="bg-[#0a0f1a] text-slate-50 min-h-screen font-sans selection:bg-orange-500/30">
            {/* Scoped Styles for Dark Industrial Theme */}
            <style>{`
        .cnc-page {
          background-color: #0a0f1a;
          color: #f8fafc;
          --qm-bg: #0a0f1a;
          --qm-surface: #0f172a;
          --qm-surface-2: #1e293b;
          --qm-orange: #f97316;
          --qm-orange-light: #fb923c;
          --qm-blue: #38bdf8;
          --qm-border: rgba(255,255,255,0.08);
          font-family: 'DM Sans', 'Inter', sans-serif;
        }
        
        /* Force typography overriding App.tsx global styles */
        .cnc-page h1, .cnc-page h2, .cnc-page h3, .cnc-page .font-display { 
          font-family: 'Barlow Condensed', sans-serif !important; 
        }
        .cnc-page p, .cnc-page li, .cnc-page div:not(.font-display) {
          font-family: 'DM Sans', 'Inter', sans-serif;
        }
        
        .gradient-text-orange {
          background: linear-gradient(135deg, #f97316 0%, #fb923c 50%, #fbbf24 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .steel-card {
          background: linear-gradient(135deg, var(--qm-surface) 0%, var(--qm-surface-2) 100%);
          border: 1px solid var(--qm-border);
          border-radius: 8px;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }
        .steel-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(249,115,22,0.4), transparent);
        }
        .steel-card:hover {
          transform: translateY(-4px);
          border-color: rgba(249,115,22,0.3);
          box-shadow: 0 20px 60px rgba(0,0,0,0.5), 0 0 30px rgba(249,115,22,0.08);
        }

        .btn-cta {
          background: linear-gradient(135deg, #f97316, #ea580c);
          color: white;
          font-family: 'Barlow Condensed', sans-serif !important;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(249,115,22,0.3);
          border: none;
        }
        .btn-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 40px rgba(249,115,22,0.5);
          background: linear-gradient(135deg, #fb923c, #f97316);
          color: white;
        }

        .reveal { opacity: 0; transform: translateY(30px); transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1); }
        .reveal.visible { opacity: 1; transform: translateY(0); }
        .reveal-left { opacity: 0; transform: translateX(-30px); transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1); }
        .reveal-left.visible { opacity: 1; transform: translateX(0); }
      `}</style>

            {/* Import Display Font */}
            <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800;900&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />

            <div className="cnc-page">
                {/* HERO SECTION */}
                <section className="relative min-h-[90vh] flex items-center pt-28 pb-16 md:pt-36 overflow-hidden">
                    {/* Background */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src="/Core%20Competencies/imgi_8_CNC-Machining.jpg"
                            alt="CNC Machining Facility"
                            className="w-full h-full object-cover opacity-30"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1a] via-[#0a0f1a]/90 to-transparent"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-transparent to-transparent"></div>
                    </div>

                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            {/* Text Content */}
                            <div className="max-w-3xl">
                                <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-sm font-semibold tracking-wide reveal-left">
                                    <ShieldCheck className="w-4 h-4" />
                                    ISO-CERTIFIED PRECISION MACHINING
                                </div>

                                <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl font-black uppercase leading-[0.9] tracking-tighter mb-6 reveal-left" style={{ transitionDelay: '100ms' }}>
                                    PROFESSIONAL<br />
                                    <span className="gradient-text-orange">CNC MACHINING</span><br />
                                    SERVICES
                                </h1>

                                <p className="text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed reveal-left" style={{ transitionDelay: '200ms' }}>
                                    QuMetal provides comprehensive CNC machining solutions — from prototype to production — leveraging our network of certified factories with 600+ advanced CNC machines.
                                </p>

                                <div className="flex flex-wrap gap-4 reveal-left" style={{ transitionDelay: '300ms' }}>
                                    <Link to="/quote" className="btn-cta px-8 py-4 rounded-md flex items-center gap-2 text-lg">
                                        Get Instant Quote <ChevronRight className="w-5 h-5" />
                                    </Link>
                                </div>
                            </div>

                            {/* Visual Grid (Desktop Only) */}
                            <div className="hidden lg:grid grid-cols-2 gap-4 reveal" style={{ transitionDelay: '400ms' }}>
                                <div className="space-y-4 pt-12">
                                    <img src="/CNC/cnc-milling01.avif" alt="CNC Milled Parts" className="rounded-lg object-cover h-64 w-full" />
                                    <img src="/CNC/cnc-turing04.avif" alt="Metal Parts" className="rounded-lg object-cover h-48 w-full" />
                                </div>
                                <div className="space-y-4">
                                    <img src="/CNC/5-axis-machining-6.avif" alt="CNC Housing" className="rounded-lg object-cover h-56 w-full" />
                                    <div className="steel-card p-6 flex flex-col justify-center h-56">
                                        <div className="text-4xl font-display font-bold text-orange-500 mb-2">±0.005<span className="text-2xl">mm</span></div>
                                        <div className="text-slate-300 font-medium">Ultra-Precision Accuracy</div>
                                        <div className="mt-4 h-1 w-12 bg-orange-500/50 rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* STATS STRIP */}
                <section className="border-y border-white/10 bg-[#0f172a]/50 backdrop-blur-md relative z-20">
                    <div className="container mx-auto px-4 py-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10 text-center">
                            <div className="reveal" style={{ transitionDelay: '100ms' }}>
                                <div className="text-4xl font-display font-bold text-white mb-1">600<span className="text-orange-500">+</span></div>
                                <div className="text-sm font-semibold tracking-wider text-slate-400 uppercase">Advanced Machines</div>
                            </div>
                            <div className="reveal" style={{ transitionDelay: '200ms' }}>
                                <div className="text-4xl font-display font-bold text-white mb-1">1<span className="text-orange-500"> Day</span></div>
                                <div className="text-sm font-semibold tracking-wider text-slate-400 uppercase">Shortest Lead Time</div>
                            </div>
                            <div className="reveal" style={{ transitionDelay: '300ms' }}>
                                <div className="text-4xl font-display font-bold text-orange-500 mb-1">ISO<span className="text-white"> 9001</span></div>
                                <div className="text-sm font-semibold tracking-wider text-slate-400 uppercase">Certified Quality</div>
                            </div>
                            <div className="reveal" style={{ transitionDelay: '400ms' }}>
                                <div className="text-4xl font-display font-bold text-white mb-1">24/7<span className="text-orange-500"> Support</span></div>
                                <div className="text-sm font-semibold tracking-wider text-slate-400 uppercase">Engineering DFM</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SERVICES SECTION */}
                <section className="py-24 relative">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16 reveal">
                            <div className="inline-flex items-center gap-2 text-orange-500 font-bold uppercase tracking-widest text-sm mb-4">
                                <span className="w-8 h-px bg-orange-500"></span> CNC Capabilities <span className="w-8 h-px bg-orange-500"></span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase">Precision Machining Solutions</h2>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
                            {/* CNC Milling */}
                            <div className="steel-card group reveal" style={{ transitionDelay: '100ms' }}>
                                <div className="h-64 overflow-hidden relative">
                                    <img src="/Core%20Competencies/imgi_8_CNC-Machining.jpg" alt="CNC Milling" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/20 to-transparent"></div>
                                    <h3 className="absolute bottom-4 left-6 text-3xl font-display font-bold uppercase tracking-wide">CNC Milling</h3>
                                </div>
                                <div className="p-6">
                                    <p className="text-slate-400 mb-6 min-h-[72px]">High-precision, tight-tolerance parts and complex geometries in metal or plastic using 3-axis to 5-axis CNC mills. Precision components or molds for diverse industries.</p>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        <span className="text-xs font-semibold px-2 py-1 rounded bg-[#1e293b] text-sky-400 border border-sky-400/20">3 to 5-Axis</span>
                                        <span className="text-xs font-semibold px-2 py-1 rounded bg-[#1e293b] text-sky-400 border border-sky-400/20">Metal & Plastic</span>
                                    </div>
                                    <Link to="/services/cnc-milling" className="text-orange-500 font-bold uppercase text-sm flex items-center gap-1 hover:text-orange-400 transition-colors">Learn More <ChevronRight className="w-4 h-4" /></Link>
                                </div>
                            </div>

                            {/* CNC Turning */}
                            <div className="steel-card group reveal" style={{ transitionDelay: '200ms' }}>
                                <div className="h-64 overflow-hidden relative">
                                    <img src="/cases/Die_20casting_20parts.jpg" alt="CNC Turning" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/20 to-transparent"></div>
                                    <h3 className="absolute bottom-4 left-6 text-3xl font-display font-bold uppercase tracking-wide">CNC Turning</h3>
                                </div>
                                <div className="p-6">
                                    <p className="text-slate-400 mb-6 min-h-[72px]">Receive precision turned parts from prototype to production. We machine cylindrical, square, and hexagonal materials using CNC lathes and mill-turn systems.</p>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        <span className="text-xs font-semibold px-2 py-1 rounded bg-[#1e293b] text-sky-400 border border-sky-400/20">Mill-Turn Systems</span>
                                        <span className="text-xs font-semibold px-2 py-1 rounded bg-[#1e293b] text-sky-400 border border-sky-400/20">Shortened Lead Time</span>
                                    </div>
                                    <Link to="/services/cnc-turning" className="text-orange-500 font-bold uppercase text-sm flex items-center gap-1 hover:text-orange-400 transition-colors">Learn More <ChevronRight className="w-4 h-4" /></Link>
                                </div>
                            </div>

                            {/* 5-Axis Machining */}
                            <div className="steel-card group reveal" style={{ transitionDelay: '300ms' }}>
                                <div className="h-64 overflow-hidden relative">
                                    <img src="/cases/mini_pc_chassis.png" alt="5-Axis Machining" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/20 to-transparent"></div>
                                    <h3 className="absolute bottom-4 left-6 text-3xl font-display font-bold uppercase tracking-wide">5-Axis CNC Machining</h3>
                                </div>
                                <div className="p-6">
                                    <p className="text-slate-400 mb-6 min-h-[72px]">Machine complex parts in one setup. Delivering tight tolerances, shorter lead times, and streamlined production for prototypes and full production runs.</p>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        <span className="text-xs font-semibold px-2 py-1 rounded bg-[#1e293b] text-sky-400 border border-sky-400/20">Complex Geometries</span>
                                        <span className="text-xs font-semibold px-2 py-1 rounded bg-[#1e293b] text-sky-400 border border-sky-400/20">Metal or Plastic</span>
                                    </div>
                                    <Link to="/quote" className="text-orange-500 font-bold uppercase text-sm flex items-center gap-1 hover:text-orange-400 transition-colors">Get Quote <ChevronRight className="w-4 h-4" /></Link>
                                </div>
                            </div>

                            {/* Precision Gear Machining */}
                            <div className="steel-card group reveal" style={{ transitionDelay: '400ms' }}>
                                <div className="h-64 overflow-hidden relative">
                                    <img src="/cases/Assembled_20products.jpg" alt="Gear Machining" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/20 to-transparent"></div>
                                    <h3 className="absolute bottom-4 left-6 text-3xl font-display font-bold uppercase tracking-wide">Precision Gears</h3>
                                </div>
                                <div className="p-6">
                                    <p className="text-slate-400 mb-6 min-h-[72px]">Dedicated gear cutting centers for spur, helical, bevel, and worm gears. Serving industries from automotive to robotics with custom gear solutions.</p>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        <span className="text-xs font-semibold px-2 py-1 rounded bg-[#1e293b] text-sky-400 border border-sky-400/20">CNC Hobbing</span>
                                        <span className="text-xs font-semibold px-2 py-1 rounded bg-[#1e293b] text-sky-400 border border-sky-400/20">Grinding</span>
                                    </div>
                                    <Link to="/quote" className="text-orange-500 font-bold uppercase text-sm flex items-center gap-1 hover:text-orange-400 transition-colors">Get Quote <ChevronRight className="w-4 h-4" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CNC MACHINING PROCESS SECTION */}
                <section className="py-24 bg-[#0a0f1a] relative overflow-hidden border-t border-white/5">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16 reveal">
                            <div className="inline-flex items-center gap-2 text-orange-500 font-bold uppercase tracking-widest text-sm mb-4">
                                <span className="w-8 h-px bg-orange-500"></span> How It Works <span className="w-8 h-px bg-orange-500"></span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase text-white">Our CNC Machining Process</h2>
                        </div>

                        <div className="grid md:grid-cols-4 gap-8 relative">
                            {/* Connecting Line */}
                            <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent"></div>

                            {/* Step 1 */}
                            <div className="relative text-center group reveal" style={{ transitionDelay: '100ms' }}>
                                <div className="w-24 h-24 mx-auto bg-[#0f172a] rounded-full border border-white/10 flex items-center justify-center mb-6 relative z-10 group-hover:border-orange-500/50 transition-colors">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500/20 to-transparent flex items-center justify-center text-orange-500">
                                        <PenTool className="w-8 h-8" />
                                    </div>
                                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-orange-500 text-white font-display font-bold flex items-center justify-center text-sm shadow-lg shadow-orange-500/30">01</div>
                                </div>
                                <h3 className="text-xl font-display font-bold uppercase text-white mb-3">Upload CAD</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">Submit your 2D/3D files for an instant review and manufacturability check.</p>
                            </div>

                            {/* Step 2 */}
                            <div className="relative text-center group reveal" style={{ transitionDelay: '200ms' }}>
                                <div className="w-24 h-24 mx-auto bg-[#0f172a] rounded-full border border-white/10 flex items-center justify-center mb-6 relative z-10 group-hover:border-orange-500/50 transition-colors">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500/20 to-transparent flex items-center justify-center text-orange-500">
                                        <Cpu className="w-8 h-8" />
                                    </div>
                                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-orange-500 text-white font-display font-bold flex items-center justify-center text-sm shadow-lg shadow-orange-500/30">02</div>
                                </div>
                                <h3 className="text-xl font-display font-bold uppercase text-white mb-3">Quote & DFM</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">Receive a detailed competitive quote and expert Design for Manufacturability analysis.</p>
                            </div>

                            {/* Step 3 */}
                            <div className="relative text-center group reveal" style={{ transitionDelay: '300ms' }}>
                                <div className="w-24 h-24 mx-auto bg-[#0f172a] rounded-full border border-white/10 flex items-center justify-center mb-6 relative z-10 group-hover:border-orange-500/50 transition-colors">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500/20 to-transparent flex items-center justify-center text-orange-500">
                                        <Clock className="w-8 h-8" />
                                    </div>
                                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-orange-500 text-white font-display font-bold flex items-center justify-center text-sm shadow-lg shadow-orange-500/30">03</div>
                                </div>
                                <h3 className="text-xl font-display font-bold uppercase text-white mb-3">Rapid Prototyping</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">Get precision-machined functional samples delivered in as fast as 24 hours.</p>
                            </div>

                            {/* Step 4 */}
                            <div className="relative text-center group reveal" style={{ transitionDelay: '400ms' }}>
                                <div className="w-24 h-24 mx-auto bg-[#0f172a] rounded-full border border-white/10 flex items-center justify-center mb-6 relative z-10 group-hover:border-orange-500/50 transition-colors">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500/20 to-transparent flex items-center justify-center text-orange-500">
                                        <Package className="w-8 h-8" />
                                    </div>
                                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-orange-500 text-white font-display font-bold flex items-center justify-center text-sm shadow-lg shadow-orange-500/30">04</div>
                                </div>
                                <h3 className="text-xl font-display font-bold uppercase text-white mb-3">Mass Production</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">Scale up smoothly with our ISO-certified quality control and smart supply chain.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* BENEFITS SECTION */}
                <section className="py-24 bg-[#0f172a]">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16 reveal">
                            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase mb-4 text-white">Advanced Manufacturing Network</h2>
                            <p className="text-lg text-slate-400 max-w-2xl mx-auto">From rapid prototypes to high-volume production, we ensure consistent quality at every stage.</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                            <div className="flex gap-6 reveal-left">
                                <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-gradient-to-br from-orange-500/20 to-orange-500/5 border border-orange-500/20 flex items-center justify-center text-orange-500">
                                    <RotateCcw className="w-8 h-8" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-display font-bold uppercase mb-3">Prototype to Production</h3>
                                    <ul className="space-y-2 text-slate-400">
                                        <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" /> Fast iteration for R&D phases</li>
                                        <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" /> Scalable production for market readiness</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="flex gap-6 reveal-left" style={{ transitionDelay: '100ms' }}>
                                <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-gradient-to-br from-orange-500/20 to-orange-500/5 border border-orange-500/20 flex items-center justify-center text-orange-500">
                                    <Layers className="w-8 h-8" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-display font-bold uppercase mb-3">Diverse Material Range</h3>
                                    <ul className="space-y-2 text-slate-400">
                                        <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" /> Aluminum, Stainless Steel, Titanium, Brass</li>
                                        <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" /> High-performance plastics (PEEK, POM, ABS)</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="flex gap-6 reveal-left" style={{ transitionDelay: '200ms' }}>
                                <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-gradient-to-br from-orange-500/20 to-orange-500/5 border border-orange-500/20 flex items-center justify-center text-orange-500">
                                    <ShieldCheck className="w-8 h-8" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-display font-bold uppercase mb-3">ISO-Certified Quality</h3>
                                    <ul className="space-y-2 text-slate-400">
                                        <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" /> In-process and final inspection protocols</li>
                                        <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" /> Material certifications and COAs provided</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="flex gap-6 reveal-left" style={{ transitionDelay: '300ms' }}>
                                <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-gradient-to-br from-orange-500/20 to-orange-500/5 border border-orange-500/20 flex items-center justify-center text-orange-500">
                                    <Activity className="w-8 h-8" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-display font-bold uppercase mb-3">Smart Supply Chain</h3>
                                    <ul className="space-y-2 text-slate-400">
                                        <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" /> 600+ nodes in our manufacturing network</li>
                                        <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" /> Integrated logistics and localized support</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* MATERIALS TABLE SECTION */}
                <section className="py-24 relative overflow-hidden bg-[#080c14] border-t border-white/5">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16 reveal">
                            <div className="inline-flex items-center gap-2 text-orange-500 font-bold uppercase tracking-widest text-sm mb-4">
                                <span className="w-8 h-px bg-orange-500"></span> Material Library <span className="w-8 h-px bg-orange-500"></span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase text-white">Materials For CNC Parts</h2>
                        </div>

                        <div className="reveal">
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="border-b border-white/10 bg-[#0f172a]">
                                            <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider text-orange-500 w-1/4">Category</th>
                                            <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider text-orange-500">Available Materials</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/5">
                                        <tr className="hover:bg-white/[0.02] transition-colors">
                                            <td className="px-6 py-6 font-display font-bold text-xl uppercase text-slate-200">Aluminum Alloys</td>
                                            <td className="px-6 py-6 text-slate-400 leading-relaxed">6061, 5052, 2A12, 7075, etc. Excellent strength-to-weight ratio, highly machinable, and corrosion resistant.</td>
                                        </tr>
                                        <tr className="hover:bg-white/[0.02] transition-colors">
                                            <td className="px-6 py-6 font-display font-bold text-xl uppercase text-slate-200">Stainless Steel</td>
                                            <td className="px-6 py-6 text-slate-400 leading-relaxed">301, 303, 304, 316, 316L, 321, 420, 430, 17-4PH. Durable, heat resistant, and superior corrosion resistance for food and medical use.</td>
                                        </tr>
                                        <tr className="hover:bg-white/[0.02] transition-colors">
                                            <td className="px-6 py-6 font-display font-bold text-xl uppercase text-slate-200">Alloy & Mold Steel</td>
                                            <td className="px-6 py-6 text-slate-400 leading-relaxed">Q235, 45 Steel, Cr12, 3Cr13, GCr15, 40Cr, 65Mn, SKD11. High hardness and wear resistance, ideal for tools and structural parts.</td>
                                        </tr>
                                        <tr className="hover:bg-white/[0.02] transition-colors">
                                            <td className="px-6 py-6 font-display font-bold text-xl uppercase text-slate-200">Copper & Brass</td>
                                            <td className="px-6 py-6 text-slate-400 leading-relaxed">Brass H59/H62, Copper T2, TU2, Tin Bronze, Beryllium Copper C17200. High thermal and electrical conductivity.</td>
                                        </tr>
                                        <tr className="hover:bg-white/[0.02] transition-colors">
                                            <td className="px-6 py-6 font-display font-bold text-xl uppercase text-slate-200">Other Alloys</td>
                                            <td className="px-6 py-6 text-slate-400 leading-relaxed">Titanium Alloy TC4, Magnesium Alloy AZ91D, Pure Iron DT4C/E. For specialized high-performance applications.</td>
                                        </tr>
                                        <tr className="hover:bg-white/[0.02] transition-colors">
                                            <td className="px-6 py-6 font-display font-bold text-xl uppercase text-slate-200">Engineering Plastics</td>
                                            <td className="px-6 py-6 text-slate-400 leading-relaxed">ABS, PTFE, POM (Delrin®), PMMA, PP, PPS, PU, PVC, HDPE, Nylon PA6/66, PC, PEEK. Versatile, lightweight, and cost-effective.</td>
                                        </tr>
                                        <tr className="hover:bg-white/[0.02] transition-colors">
                                            <td className="px-6 py-6 font-display font-bold text-xl uppercase text-slate-200">Advanced Materials</td>
                                            <td className="px-6 py-6 text-slate-400 leading-relaxed">Carbon Fiber, Graphite, Epoxy Board FR4, Phenolic Board. Exceptional strength and unique physical properties.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SURFACE FINISHES SECTION */}
                <section className="py-24 bg-[#0a0f1a] relative">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16 reveal">
                            <div className="inline-flex items-center gap-2 text-orange-500 font-bold uppercase tracking-widest text-sm mb-4">
                                <span className="w-8 h-px bg-orange-500"></span> Post-Processing <span className="w-8 h-px bg-orange-500"></span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase text-white">Surface Finishes</h2>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* Finish 1 */}
                            <div className="steel-card p-8 reveal" style={{ transitionDelay: '100ms' }}>
                                <h3 className="text-2xl font-display font-bold uppercase text-white mb-2">As-Machined</h3>
                                <div className="text-orange-500 text-sm font-bold mb-4">Ra 3.2 - 6.3 µm</div>
                                <p className="text-slate-400 text-sm leading-relaxed">Standard finish with visible tool marks. Ideal for functional parts where aesthetics are not critical. Available for all metals and plastics.</p>
                            </div>

                            {/* Finish 2 */}
                            <div className="steel-card p-8 reveal" style={{ transitionDelay: '200ms' }}>
                                <h3 className="text-2xl font-display font-bold uppercase text-white mb-2">Bead Blasted</h3>
                                <div className="text-orange-500 text-sm font-bold mb-4">Ra 1.6 - 3.2 µm</div>
                                <p className="text-slate-400 text-sm leading-relaxed">Provides a uniform, smooth, matte appearance by brushing parts with fine abrasive media. Great for removing tool marks.</p>
                            </div>

                            {/* Finish 3 */}
                            <div className="steel-card p-8 reveal" style={{ transitionDelay: '300ms' }}>
                                <h3 className="text-2xl font-display font-bold uppercase text-white mb-2">Anodized (Type II/III)</h3>
                                <div className="text-orange-500 text-sm font-bold mb-4">Ra 0.8 - 1.6 µm</div>
                                <p className="text-slate-400 text-sm leading-relaxed">Creates a hard, durable, corrosion-resistant oxide layer. Available in various colors (Type II) or as hardcoat (Type III) for maximum durability.</p>
                            </div>

                            {/* Finish 4 */}
                            <div className="steel-card p-8 reveal" style={{ transitionDelay: '400ms' }}>
                                <h3 className="text-2xl font-display font-bold uppercase text-white mb-2">Powder Coated</h3>
                                <div className="text-orange-500 text-sm font-bold mb-4">High Durability</div>
                                <p className="text-slate-400 text-sm leading-relaxed">Applies a dry powder that is cured under heat, producing a tough, wear-resistant finish in virtually any color. Ideal for external facing metal parts.</p>
                            </div>

                            {/* Finish 5 */}
                            <div className="steel-card p-8 reveal" style={{ transitionDelay: '500ms' }}>
                                <h3 className="text-2xl font-display font-bold uppercase text-white mb-2">Polished</h3>
                                <div className="text-orange-500 text-sm font-bold mb-4">Ra 0.1 - 0.4 µm</div>
                                <p className="text-slate-400 text-sm leading-relaxed">Creates a highly reflective, mirror-like surface using progressively finer abrasives. Perfect for aesthetic parts or optical applications.</p>
                            </div>

                            {/* Finish 6 */}
                            <div className="steel-card p-8 reveal" style={{ transitionDelay: '600ms' }}>
                                <h3 className="text-2xl font-display font-bold uppercase text-white mb-2">Chemical Film</h3>
                                <div className="text-orange-500 text-sm font-bold mb-4">Chromate Conversion</div>
                                <p className="text-slate-400 text-sm leading-relaxed">Provides excellent corrosion protection for aluminum while maintaining electrical conductivity. Often used as a base for priming or painting.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FINAL CTA SECTION */}
                <section className="py-24 relative overflow-hidden bg-gradient-to-b from-[#0a0f1a] to-[#0f172a]">
                    <div className="container mx-auto px-4 text-center z-10 relative">
                        <div className="max-w-3xl mx-auto reveal">
                            <h2 className="text-5xl md:text-6xl font-display font-black uppercase mb-6 leading-none">
                                Start your <span className="gradient-text-orange">CNC Machining</span> project today
                            </h2>
                            <p className="text-xl text-slate-400 mb-10">
                                Leverage our advanced machinery and expert engineering support for your custom precision parts.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link to="/quote" className="btn-cta px-10 py-5 rounded-md text-xl">Get Instant Quote</Link>
                                <Link to="/contact" className="px-10 py-5 rounded-md text-xl font-display font-bold uppercase border border-white/20 hover:bg-white/5 transition-colors">Contact Sales</Link>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default CNCLanding;



# File: C:\Users\Administrator\Downloads\quanheng-metal-processing\pages\SheetMetalLanding.tsx
import React, { useEffect } from 'react';
import { ChevronRight, Settings, ShieldCheck, Clock, CheckCircle2, ChevronDown, Package, PenTool } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';

const SheetMetalLanding: React.FC = () => {
    useSEO({
        title: "Custom Sheet Metal Fabrication Services | ISO 9001 Factory | QUMETAL",
        description: "Professional custom sheet metal fabrication including laser cutting, bending, punching, and welding. Fast prototyping and mass production with global delivery."
    });

    // Animation observer
    useEffect(() => {
        const observerCallback: IntersectionObserverCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        };
        const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
        const observer = new IntersectionObserver(observerCallback, observerOptions);
        const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
        elements.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <div className="bg-[#0a0f1a] text-slate-50 min-h-screen font-sans selection:bg-orange-500/30">
            {/* Scoped Styles for Dark Industrial Theme */}
            <style>{`
        .sheet-metal-page {
          background-color: #0a0f1a;
          color: #f8fafc;
          --qm-bg: #0a0f1a;
          --qm-surface: #0f172a;
          --qm-surface-2: #1e293b;
          --qm-orange: #f97316;
          --qm-orange-light: #fb923c;
          --qm-blue: #38bdf8;
          --qm-border: rgba(255,255,255,0.08);
          font-family: 'DM Sans', 'Inter', sans-serif;
        }
        
        /* Force typography overriding App.tsx global styles */
        .sheet-metal-page h1, .sheet-metal-page h2, .sheet-metal-page h3, .sheet-metal-page .font-display { 
          font-family: 'Barlow Condensed', sans-serif !important; 
        }
        .sheet-metal-page p, .sheet-metal-page li, .sheet-metal-page div:not(.font-display) {
          font-family: 'DM Sans', 'Inter', sans-serif;
        }
        
        .gradient-text-orange {
          background: linear-gradient(135deg, #f97316 0%, #fb923c 50%, #fbbf24 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .steel-card {
          background: linear-gradient(135deg, var(--qm-surface) 0%, var(--qm-surface-2) 100%);
          border: 1px solid var(--qm-border);
          border-radius: 8px;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }
        .steel-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(249,115,22,0.4), transparent);
        }
        .steel-card:hover {
          transform: translateY(-4px);
          border-color: rgba(249,115,22,0.3);
          box-shadow: 0 20px 60px rgba(0,0,0,0.5), 0 0 30px rgba(249,115,22,0.08);
        }

        .btn-cta {
          background: linear-gradient(135deg, #f97316, #ea580c);
          color: white;
          font-family: 'Barlow Condensed', sans-serif !important;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(249,115,22,0.3);
          border: none;
        }
        .btn-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 40px rgba(249,115,22,0.5);
          background: linear-gradient(135deg, #fb923c, #f97316);
          color: white;
        }

        .reveal { opacity: 0; transform: translateY(30px); transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1); }
        .reveal.visible { opacity: 1; transform: translateY(0); }
        .reveal-left { opacity: 0; transform: translateX(-30px); transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1); }
        .reveal-left.visible { opacity: 1; transform: translateX(0); }
      `}</style>

            {/* Import Display Font */}
            <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800;900&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />

            <div className="sheet-metal-page">
                {/* HERO SECTION */}
                <section className="relative min-h-[90vh] flex items-center pt-28 pb-16 md:pt-36 overflow-hidden">
                    {/* Background */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src="/Core%20Competencies/imgi_9_Sheet-Metal-Fabrication.jpg"
                            alt="Sheet Metal Fabrication Facility"
                            className="w-full h-full object-cover opacity-30"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1a] via-[#0a0f1a]/90 to-transparent"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-transparent to-transparent"></div>
                    </div>

                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            {/* Text Content */}
                            <div className="max-w-3xl">
                                <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-sm font-semibold tracking-wide reveal-left">
                                    <ShieldCheck className="w-4 h-4" />
                                    ISO 9001 CERTIFIED FABRICATION
                                </div>

                                <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl font-black uppercase leading-[0.9] tracking-tighter mb-6 reveal-left" style={{ transitionDelay: '100ms' }}>
                                    PRECISION CUSTOM<br />
                                    <span className="gradient-text-orange">SHEET METAL</span><br />
                                    FABRICATION
                                </h1>

                                <p className="text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed reveal-left" style={{ transitionDelay: '200ms' }}>
                                    Qumetal delivers high-precision sheet metal solutions for communication equipment, industrial chassis, and precision brackets — featuring advanced laser cutting, bending, welding, and surface treatment capabilities.
                                </p>

                                <div className="flex flex-wrap gap-4 reveal-left" style={{ transitionDelay: '300ms' }}>
                                    <Link to="/quote" className="btn-cta px-8 py-4 rounded-md flex items-center gap-2 text-lg">
                                        Get Instant Quote <ChevronRight className="w-5 h-5" />
                                    </Link>
                                </div>
                            </div>

                            {/* Visual Grid (Desktop Only) */}
                            <div className="hidden lg:grid grid-cols-2 gap-4 reveal" style={{ transitionDelay: '400ms' }}>
                                <div className="space-y-4 pt-12">
                                    <img src="/metal%20stamping/imgi_10_202508071120514777.jpg" alt="Metal Stamping Part" className="rounded-lg object-cover h-64 w-full border border-white/10" />
                                    <img src="/enclosures/imgi_24_Electrical-Cabinet.jpg" alt="Sheet Metal Enclosure" className="rounded-lg object-cover h-48 w-full border border-white/10" />
                                </div>
                                <div className="space-y-4">
                                    <img src="/punching/imgi_9_Round-Hole-Metal-Sheets.jpg" alt="Precision Round Hole Punching" className="rounded-lg object-cover h-56 w-full border border-white/10" />
                                    <img src="/image/imgi_17_brushed-finishes-aesthetic-and-functional-applications.webp" alt="Brushed Metal Finishes & Materials" className="rounded-lg object-cover h-56 w-full border border-white/10" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* STATS STRIP */}
                <section className="border-y border-white/10 bg-[#0f172a]/50 backdrop-blur-md relative z-20">
                    <div className="container mx-auto px-4 py-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10 text-center">
                            <div className="reveal hidden md:block" style={{ transitionDelay: '100ms' }}>
                                <div className="text-4xl font-display font-bold text-white mb-1">15<span className="text-orange-500">+</span></div>
                                <div className="text-sm font-semibold tracking-wider text-slate-400 uppercase">Surface Finishes Available</div>
                            </div>
                            <div className="reveal" style={{ transitionDelay: '200ms' }}>
                                <div className="text-4xl font-display font-bold text-white mb-1">30<span className="text-orange-500">+</span></div>
                                <div className="text-sm font-semibold tracking-wider text-slate-400 uppercase">Years Experience</div>
                            </div>
                            <div className="reveal" style={{ transitionDelay: '300ms' }}>
                                <div className="text-4xl font-display font-bold text-orange-500 mb-1">Global</div>
                                <div className="text-sm font-semibold tracking-wider text-slate-400 uppercase">Shipping</div>
                            </div>
                            <div className="reveal hidden md:block" style={{ transitionDelay: '400ms' }}>
                                <div className="text-4xl font-display font-bold text-white mb-1">3-7<span className="text-orange-500"> Days</span></div>
                                <div className="text-sm font-semibold tracking-wider text-slate-400 uppercase">Fast Lead Time</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SERVICES SECTION */}
                <section className="py-24 bg-[#080c14]">
                    <div className="container mx-auto px-4">
                        <div className="mb-16 reveal">
                            <div className="inline-flex items-center gap-2 text-orange-500 font-bold uppercase tracking-widest text-sm mb-4">
                                <span className="w-8 h-px bg-orange-500"></span> Our Capabilities <span className="w-8 h-px bg-orange-500"></span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase">Comprehensive Sheet Metal Services</h2>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                            {/* Laser Cutting */}
                            <div className="steel-card group reveal" style={{ transitionDelay: '100ms' }}>
                                <Link to="/services/metal-cutting" className="h-64 overflow-hidden relative block cursor-pointer">
                                    <img src="/Core%20Competencies/laser%20cutting.jpeg" alt="Laser Cutting" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/20 to-transparent"></div>
                                    <h3 className="absolute bottom-4 left-6 text-3xl font-display font-bold uppercase tracking-wide">Laser Cutting</h3>
                                </Link>
                                <div className="p-6">
                                    <p className="text-slate-400 mb-6 min-h-[48px]">High-precision laser cutting for carbon steel, stainless steel, and aluminum with extremely tight tolerances and clean edges.</p>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        <span className="text-xs font-semibold px-2 py-1 rounded bg-[#1e293b] text-sky-400 border border-sky-400/20">Max Thickness: 20mm</span>
                                        <span className="text-xs font-semibold px-2 py-1 rounded bg-[#1e293b] text-sky-400 border border-sky-400/20">Tolerance: ±0.05mm</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <Link to="/services/metal-cutting" className="text-orange-500 font-bold uppercase text-sm flex items-center gap-1 hover:text-orange-400 transition-colors">Learn More <ChevronRight className="w-4 h-4" /></Link>
                                    </div>
                                </div>
                            </div>

                            {/* Bending */}
                            <div className="steel-card group reveal" style={{ transitionDelay: '200ms' }}>
                                <Link to="/services/metal-bending" className="h-64 overflow-hidden relative block cursor-pointer">
                                    <img src="/Core%20Competencies/metal%20bending.jpeg" alt="Bending & Forming" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/20 to-transparent"></div>
                                    <h3 className="absolute bottom-4 left-6 text-3xl font-display font-bold uppercase tracking-wide">Bending & Forming</h3>
                                </Link>
                                <div className="p-6">
                                    <p className="text-slate-400 mb-6 min-h-[48px]">Computer-controlled bending with ±0.25mm accuracy. Expert flat pattern design and bending sequence optimization for complex parts.</p>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        <span className="text-xs font-semibold px-2 py-1 rounded bg-[#1e293b] text-sky-400 border border-sky-400/20">Accuracy: ±0.25mm</span>
                                        <span className="text-xs font-semibold px-2 py-1 rounded bg-[#1e293b] text-sky-400 border border-sky-400/20">Max Length: 3000mm</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <Link to="/services/metal-bending" className="text-orange-500 font-bold uppercase text-sm flex items-center gap-1 hover:text-orange-400 transition-colors">Learn More <ChevronRight className="w-4 h-4" /></Link>
                                    </div>
                                </div>
                            </div>

                            {/* Welding */}
                            <div className="steel-card group reveal" style={{ transitionDelay: '100ms' }}>
                                <Link to="/services/metal-welding" className="h-64 overflow-hidden relative block cursor-pointer">
                                    <img src="/Core%20Competencies/metal%20welding%20.jpeg" alt="Metal Welding" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/20 to-transparent"></div>
                                    <h3 className="absolute bottom-4 left-6 text-3xl font-display font-bold uppercase tracking-wide">Metal Welding</h3>
                                </Link>
                                <div className="p-6">
                                    <p className="text-slate-400 mb-6 min-h-[48px]">Precision TIG, MIG, and spot welding services. Full distortion control and post-weld treatment for structural integrity and aesthetics.</p>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        <span className="text-xs font-semibold px-2 py-1 rounded bg-[#1e293b] text-sky-400 border border-sky-400/20">TIG / MIG / Spot</span>
                                        <span className="text-xs font-semibold px-2 py-1 rounded bg-[#1e293b] text-sky-400 border border-sky-400/20">Distortion Control</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <Link to="/services/metal-welding" className="text-orange-500 font-bold uppercase text-sm flex items-center gap-1 hover:text-orange-400 transition-colors">Learn More <ChevronRight className="w-4 h-4" /></Link>
                                    </div>
                                </div>
                            </div>

                            {/* Surface Treatment */}
                            <div className="steel-card group reveal" style={{ transitionDelay: '200ms' }}>
                                <Link to="/services/surface-finishing" className="h-64 overflow-hidden relative block cursor-pointer">
                                    <img src="/Core%20Competencies/imgi_73_Surface-Finishes-768x509.jpg" alt="Surface Treatment" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/20 to-transparent"></div>
                                    <h3 className="absolute bottom-4 left-6 text-3xl font-display font-bold uppercase tracking-wide">Surface Treatment</h3>
                                </Link>
                                <div className="p-6">
                                    <p className="text-slate-400 mb-6 min-h-[48px]">Complete finishing solutions including powder coating, anodizing, sandblasting, and plating to enhance durability and corrosion resistance.</p>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        <span className="text-xs font-semibold px-2 py-1 rounded bg-[#1e293b] text-sky-400 border border-sky-400/20">Powder Coating</span>
                                        <span className="text-xs font-semibold px-2 py-1 rounded bg-[#1e293b] text-sky-400 border border-sky-400/20">Anodizing</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <Link to="/services/surface-finishing" className="text-orange-500 font-bold uppercase text-sm flex items-center gap-1 hover:text-orange-400 transition-colors">Learn More <ChevronRight className="w-4 h-4" /></Link>
                                    </div>
                                </div>
                            </div>

                            {/* Metal Stamping */}
                            <div className="steel-card group reveal" style={{ transitionDelay: '300ms' }}>
                                <Link to="/services/custom-stamping" className="h-64 overflow-hidden relative block cursor-pointer">
                                    <img src="/Core%20Competencies/metal%20stamping.jpeg" alt="Metal Stamping" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/20 to-transparent"></div>
                                    <h3 className="absolute bottom-4 left-6 text-3xl font-display font-bold uppercase tracking-wide">Metal Stamping</h3>
                                </Link>
                                <div className="p-6">
                                    <p className="text-slate-400 mb-6 min-h-[48px]">High-volume, high-precision metal stamping for consistent part production with complex geometries at tight tolerances.</p>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        <span className="text-xs font-semibold px-2 py-1 rounded bg-[#1e293b] text-sky-400 border border-sky-400/20">High Volume</span>
                                        <span className="text-xs font-semibold px-2 py-1 rounded bg-[#1e293b] text-sky-400 border border-sky-400/20">Progressive Die</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <Link to="/services/custom-stamping" className="text-orange-500 font-bold uppercase text-sm flex items-center gap-1 hover:text-orange-400 transition-colors">Learn More <ChevronRight className="w-4 h-4" /></Link>
                                    </div>
                                </div>
                            </div>

                            {/* Metal Punching */}
                            <div className="steel-card group reveal" style={{ transitionDelay: '400ms' }}>
                                <Link to="/services/metal-punching" className="h-64 overflow-hidden relative block cursor-pointer">
                                    <img src="/Core%20Competencies/Sheet-Metal-Punching.jpg" alt="Metal Punching" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/20 to-transparent"></div>
                                    <h3 className="absolute bottom-4 left-6 text-3xl font-display font-bold uppercase tracking-wide">Metal Punching</h3>
                                </Link>
                                <div className="p-6">
                                    <p className="text-slate-400 mb-6 min-h-[48px]">Rapid, cost-effective CNC turret punching for perforating, countersinking, and forming standard sheet metal profiles.</p>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        <span className="text-xs font-semibold px-2 py-1 rounded bg-[#1e293b] text-sky-400 border border-sky-400/20">CNC Turret</span>
                                        <span className="text-xs font-semibold px-2 py-1 rounded bg-[#1e293b] text-sky-400 border border-sky-400/20">Cost Effective</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <Link to="/services/metal-punching" className="text-orange-500 font-bold uppercase text-sm flex items-center gap-1 hover:text-orange-400 transition-colors">Learn More <ChevronRight className="w-4 h-4" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* BENEFITS SECTION */}
                <section className="py-24 bg-[#0f172a]">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16 reveal">
                            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase mb-6 text-white">Benefits of Custom Sheet Metal Prototyping</h2>
                            <p className="text-lg text-slate-400 max-w-4xl mx-auto leading-relaxed">
                                Sheet metal can be quickly cut into 2D profile shapes and formed out of a variety of high-strength materials, making it perfect for rapid tooling. Its per-unit pricing lowers significantly in production volumes. Combined with end-use materials and high throughput, sheet metal fabrication is a well-known production method.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                            {/* Applications Card */}
                            <div className="steel-card p-8 reveal-left">
                                <h3 className="text-2xl font-display font-bold uppercase mb-6 text-orange-500 flex items-center gap-3">
                                    <Package className="w-6 h-6" /> Used For
                                </h3>
                                <p className="text-slate-300 leading-relaxed mb-6">
                                    Sheet Metal Fabrication is widely used across industries for:
                                </p>
                                <ul className="space-y-4 text-slate-400">
                                    <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" /> <span>Rapid prototypes and low volume production</span></li>
                                    <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" /> <span>Medical and communications products</span></li>
                                    <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" /> <span>Housings and enclosures</span></li>
                                    <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" /> <span>Everything from cars and space rockets and planes</span></li>
                                    <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" /> <span>Consumer goods like air conditioners and soda cans</span></li>
                                </ul>
                            </div>

                            {/* Advantages Card */}
                            <div className="steel-card p-8 reveal-left" style={{ transitionDelay: '100ms' }}>
                                <h3 className="text-2xl font-display font-bold uppercase mb-6 text-orange-500 flex items-center gap-3">
                                    <Settings className="w-6 h-6" /> Advantages
                                </h3>
                                <p className="text-slate-300 leading-relaxed mb-6">
                                    Key benefits of Sheet Metal Prototyping & Production:
                                </p>
                                <ul className="space-y-4 text-slate-400">
                                    <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" /> <span className="font-semibold text-slate-200 uppercase tracking-wider text-sm">Quick and inexpensive</span></li>
                                    <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" /> <span className="font-semibold text-slate-200 uppercase tracking-wider text-sm">High strength and durability</span></li>
                                    <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" /> <span className="font-semibold text-slate-200 uppercase tracking-wider text-sm">Very efficient</span></li>
                                    <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" /> <span className="font-semibold text-slate-200 uppercase tracking-wider text-sm">High Precision</span></li>
                                    <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" /> <span className="font-semibold text-slate-200 uppercase tracking-wider text-sm">Sustainable solution</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SUPPORTED MATERIALS SECTION */}
                <section className="py-24 relative overflow-hidden bg-[#080c14] border-y border-white/5">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16 reveal">
                            <div className="inline-flex items-center gap-2 text-orange-500 font-bold uppercase tracking-widest text-sm mb-4">
                                <span className="w-8 h-px bg-orange-500"></span> Material Library <span className="w-8 h-px bg-orange-500"></span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase text-white mb-6">Supported Sheet Metal Materials</h2>
                            <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
                                We specialize in processing a diverse range of metals, including iron, aluminum, stainless steel, galvanized steel, titanium, brass, bronze, and nickel.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 reveal">
                            {[
                                {
                                    category: "Aluminum",
                                    alloys: ["1100-H14 Aluminum Alloy", "5052-H32 Aluminum Alloy", "6061 Aluminum Alloy", "7075 Aluminum Alloy"]
                                },
                                {
                                    category: "Stainless Steel",
                                    alloys: ["301 Stainless Steel", "303 Stainless Steel", "304 Stainless Steel", "316 Stainless Steel", "430 Stainless Steel"]
                                },
                                {
                                    category: "Steel",
                                    alloys: ["DC01 Carbon Steel", "1018 Steel", "1020 Steel", "Galvanized Steel", "Cold Rolled Steel", "Hot Rolled Steel"]
                                },
                                {
                                    category: "Copper",
                                    alloys: ["260 Copper", "1100 Copper", "110 Copper", "101 Copper"]
                                },
                                {
                                    category: "Bronze",
                                    alloys: ["Bronze 220", "Bronze 510"]
                                },
                                {
                                    category: "Nickel Alloys",
                                    alloys: ["Inconel 600", "Inconel 625", "Monel 400", "Nickel 200", "Nickel 400"]
                                },
                                {
                                    category: "Titanium",
                                    alloys: ["Titanium Grade 2", "Titanium Grade 4", "Titanium 6Al-4V Grade 5"]
                                }
                            ].map((material, idx) => (
                                <div key={idx} className="steel-card p-8 group">
                                    <div className="text-orange-500 mb-6">
                                        <Package className="w-8 h-8 opacity-50 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                    <h3 className="text-2xl font-display font-bold uppercase text-white mb-6 tracking-wide">
                                        {material.category}
                                    </h3>
                                    <div className="h-0.5 w-12 bg-orange-500/30 group-hover:w-full transition-all duration-500 mb-6"></div>
                                    <ul className="space-y-3">
                                        {material.alloys.map((alloy, aIdx) => (
                                            <li key={aIdx} className="text-slate-400 text-sm font-medium flex items-center gap-3 group/item">
                                                <div className="w-1.5 h-1.5 rounded-full bg-orange-500/40 group-hover/item:bg-orange-500 transition-colors"></div>
                                                {alloy}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SHEET METAL FINISHES SECTION */}
                <section className="py-24 bg-[#0a0f1a] relative">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16 reveal">
                            <div className="inline-flex items-center gap-2 text-orange-500 font-bold uppercase tracking-widest text-sm mb-4">
                                <span className="w-8 h-px bg-orange-500"></span> Post-Processing <span className="w-8 h-px bg-orange-500"></span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase text-white">Sheet Metal Finishes</h2>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* Finish 1 */}
                            <div className="steel-card p-8 reveal" style={{ transitionDelay: '100ms' }}>
                                <h3 className="text-2xl font-display font-bold uppercase text-white mb-2">Powder Coating</h3>
                                <div className="text-orange-500 text-sm font-bold mb-4">Color & Durability</div>
                                <p className="text-slate-400 text-sm leading-relaxed">A durable, impact-resistant finish applied as a dry powder and baked. Available in various colors and textures. Suitable for steel and aluminum.</p>
                            </div>

                            {/* Finish 2 */}
                            <div className="steel-card p-8 reveal" style={{ transitionDelay: '200ms' }}>
                                <h3 className="text-2xl font-display font-bold uppercase text-white mb-2">Anodizing</h3>
                                <div className="text-orange-500 text-sm font-bold mb-4">Corrosion Resistance</div>
                                <p className="text-slate-400 text-sm leading-relaxed">An electrolytic process that significantly enhances aluminum's natural corrosion resistance and surface hardness while allowing for color dyeing.</p>
                            </div>

                            {/* Finish 3 */}
                            <div className="steel-card p-8 reveal" style={{ transitionDelay: '300ms' }}>
                                <h3 className="text-2xl font-display font-bold uppercase text-white mb-2">Bead Blasting</h3>
                                <div className="text-orange-500 text-sm font-bold mb-4">Matte Texture</div>
                                <p className="text-slate-400 text-sm leading-relaxed">A gentle cleaning method using fine abrasive glass beads to remove tooling marks and achieve a uniform, non-directional matte textured surface.</p>
                            </div>

                            {/* Finish 4 */}
                            <div className="steel-card p-8 reveal" style={{ transitionDelay: '400ms' }}>
                                <h3 className="text-2xl font-display font-bold uppercase text-white mb-2">Galvanizing / Plating</h3>
                                <div className="text-orange-500 text-sm font-bold mb-4">Rust Protection</div>
                                <p className="text-slate-400 text-sm leading-relaxed">Applying a protective zinc coating (galvanizing) or other metals like nickel/chrome (plating) to steel parts to prevent rusting and extend lifespan.</p>
                            </div>

                            {/* Finish 5 */}
                            <div className="steel-card p-8 reveal" style={{ transitionDelay: '500ms' }}>
                                <h3 className="text-2xl font-display font-bold uppercase text-white mb-2">Passivation</h3>
                                <div className="text-orange-500 text-sm font-bold mb-4">Stainless Steel Only</div>
                                <p className="text-slate-400 text-sm leading-relaxed">A specialized acid treatment for stainless steel that removes free iron from the surface, creating a protective oxide layer that maximizes corrosion resistance.</p>
                            </div>

                            {/* Finish 6 */}
                            <div className="steel-card p-8 reveal" style={{ transitionDelay: '600ms' }}>
                                <h3 className="text-2xl font-display font-bold uppercase text-white mb-2">Brushing / Polishing</h3>
                                <div className="text-orange-500 text-sm font-bold mb-4">Aesthetic Finish</div>
                                <p className="text-slate-400 text-sm leading-relaxed">Creating a linear pattern (brushing) or a highly reflective surface (polishing) on stainless steel or aluminum for premium cosmetic applications.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* GALLERY CTA SECTION */}
                <section className="py-24 relative overflow-hidden bg-gradient-to-b from-[#0a0f1a] to-[#0f172a]">
                    <div className="container mx-auto px-4 text-center z-10 relative">
                        <div className="max-w-3xl mx-auto reveal">
                            <h2 className="text-5xl md:text-6xl font-display font-black uppercase mb-6 leading-none">
                                Ready to fabricate your <span className="gradient-text-orange">Sheet Metal</span> parts?
                            </h2>
                            <p className="text-xl text-slate-400 mb-10">
                                Upload your 2D/3D CAD files today for a free design-for-manufacturability analysis and instant pricing.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link to="/quote" className="btn-cta px-10 py-5 rounded-md text-xl">Upload Your Drawings</Link>
                                <Link to="/contact" className="px-10 py-5 rounded-md text-xl font-display font-bold uppercase border border-white/20 hover:bg-white/5 transition-colors">Contact Sales</Link>
                            </div>
                            <p className="mt-8 text-xs text-slate-500 italic flex items-center justify-center gap-2">
                                <ShieldCheck className="w-4 h-4 text-orange-500/50" />
                                All uploads are secure and confidential.
                            </p>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default SheetMetalLanding;



# File: C:\Users\Administrator\Downloads\quanheng-metal-processing\pages\ThreeDPrintingLanding.tsx
import React, { useEffect } from 'react';
import { ChevronRight, ShieldCheck, Zap, Cog, Layers, Hammer, Crosshair, Droplets, Shield, FileSearch, Package } from 'lucide-react';
import { Link } from 'react-router-dom';

const ThreeDPrintingLanding: React.FC = () => {
    // Animation observer
    useEffect(() => {
        const observerCallback: IntersectionObserverCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        };
        const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
        const observer = new IntersectionObserver(observerCallback, observerOptions);
        const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
        elements.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <div className="bg-[#0a0f1a] text-slate-50 min-h-screen font-sans selection:bg-orange-500/30">
            {/* Scoped Styles */}
            <style>{`
        .printing-page {
          background-color: #0a0f1a;
          color: #f8fafc;
          --qm-bg: #0a0f1a;
          --qm-surface: #0f172a;
          --qm-surface-2: #1e293b;
          --qm-orange: #f97316;
          --qm-orange-light: #fb923c;
          --qm-border: rgba(255,255,255,0.08);
          font-family: 'DM Sans', 'Inter', sans-serif;
        }
        
        .printing-page h1, .printing-page h2, .printing-page h3, .printing-page .font-display { 
          font-family: 'Barlow Condensed', sans-serif !important; 
        }
        
        .gradient-text-orange {
          background: linear-gradient(135deg, #f97316 0%, #fb923c 50%, #fbbf24 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .glass-card {
          background: linear-gradient(135deg, var(--qm-surface) 0%, var(--qm-surface-2) 100%);
          border: 1px solid var(--qm-border);
          border-radius: 12px;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }
        .glass-card:hover {
          transform: translateY(-6px);
          border-color: rgba(249,115,22,0.4);
          box-shadow: 0 20px 60px rgba(0,0,0,0.6), 0 0 30px rgba(249,115,22,0.1);
        }

        .btn-premium {
          background: linear-gradient(135deg, #f97316, #ea580c);
          color: white;
          font-family: 'Barlow Condensed', sans-serif !important;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(249,115,22,0.3);
        }
        .btn-premium:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 40px rgba(249,115,22,0.5);
          background: linear-gradient(135deg, #fb923c, #f97316);
        }

        .reveal { opacity: 0; transform: translateY(30px); transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
        .reveal.visible { opacity: 1; transform: translateY(0); }
        .reveal-left { opacity: 0; transform: translateX(-30px); transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
        .reveal-left.visible { opacity: 1; transform: translateX(0); }
      `}</style>

            <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800;900&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />

            <div className="printing-page">
                {/* HERO SECTION */}
                <section className="relative min-h-[90vh] flex items-center pt-28 pb-16 overflow-hidden">
                    <div className="absolute inset-0 z-0 bg-[#0a0f1a]">
                        <img
                            src="/Core%20Competencies/3d printing.jpeg"
                            alt="Industrial Metal 3D Printing Components"
                            className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1a] via-[#0a0f1a]/80 to-transparent"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-transparent to-transparent"></div>
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-4xl">
                            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-sm font-semibold tracking-wide reveal-left">
                                <Zap className="w-4 h-4" />
                                ADVANCED SLM/DMLS TECHNOLOGY
                            </div>

                            <h1 className="font-display text-6xl md:text-8xl font-black uppercase leading-[0.85] tracking-tighter mb-6 reveal-left" style={{ transitionDelay: '100ms' }}>
                                INDUSTRIAL <span className="gradient-text-orange">METAL 3D PRINTING</span>
                            </h1>

                            <div className="flex flex-col sm:flex-row gap-4 mb-8 text-lg font-bold text-white reveal-left" style={{ transitionDelay: '150ms' }}>
                                <span className="flex items-center gap-2"><Cog className="w-5 h-5 text-orange-500" /> Complex Geometries</span>
                                <span className="hidden sm:inline border-l border-white/20"></span>
                                <span className="flex items-center gap-2"><Droplets className="w-5 h-5 text-orange-500" /> Conformal Cooling</span>
                                <span className="hidden sm:inline border-l border-white/20"></span>
                                <span className="flex items-center gap-2"><Layers className="w-5 h-5 text-orange-500" /> No Tooling Required</span>
                            </div>

                            <p className="text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed reveal-left" style={{ transitionDelay: '200ms' }}>
                                Unlock impossible designs with direct metal laser melting. We print high-performance, fully dense metal parts in Titanium, Aluminum, Stainless Steel, and Die Steel for aerospace, medical, and tooling applications.
                            </p>

                            <div className="flex flex-wrap gap-6 reveal-left" style={{ transitionDelay: '300ms' }}>
                                <Link to="/quote" className="btn-premium px-10 py-5 rounded-md flex items-center gap-2 text-xl">
                                    Get Instant Quote <ChevronRight className="w-6 h-6" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4 CORE GUARANTEES (四大支持) */}
                <section className="py-16 bg-[#0f172a]/50 border-y border-white/5 relative z-20 -mt-10">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { icon: FileSearch, title: "Free DFM Review", desc: "Expert engineers evaluate your CAD to optimize topology and support structures." },
                                { icon: Shield, title: "Strict NDA", desc: "Your intellectual property is protected with strict confidentiality agreements." },
                                { icon: Package, title: "Fast Global Delivery", desc: "Skip the tooling phase and get direct-to-metal parts shipped rapidly worldwide." },
                                { icon: ShieldCheck, title: "Worry-Free Quality", desc: "Rigorous metallurgical testing and heat treatment for 99.9% dense parts." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 p-6 glass-card reveal" style={{ transitionDelay: `${i * 100}ms` }}>
                                    <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center shrink-0 border border-orange-500/20">
                                        <item.icon className="w-6 h-6 text-orange-500" />
                                    </div>
                                    <div>
                                        <h3 className="font-display font-bold text-xl uppercase mb-1">{item.title}</h3>
                                        <p className="text-sm text-slate-400">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* METAL MATERIALS */}
                <section className="py-24 relative">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16 reveal">
                            <div className="inline-flex items-center gap-2 text-orange-500 font-bold uppercase tracking-widest text-sm mb-4">
                                <span className="w-8 h-px bg-orange-500"></span> Aerospace Grade <span className="w-8 h-px bg-orange-500"></span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase text-white">High-Performance Metals</h2>
                            <p className="text-slate-400 max-w-2xl mx-auto mt-4">We utilize industry-leading SLM/DMLS systems capable of processing reactive and non-reactive metals to craft parts with mechanical properties rivaling forged equivalents.</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                {
                                    tech: "Titanium Alloys (Ti6Al4V)",
                                    desc: "Exceptional strength-to-weight ratio and biocompatibility. Ideal for aerospace turbines and medical implants.",
                                    icon: Crosshair
                                },
                                {
                                    tech: "Aluminum (AlSi10Mg)",
                                    desc: "Lightweight with excellent thermal conductivity. Perfect for automotive parts, heat exchangers, and housings.",
                                    icon: Zap
                                },
                                {
                                    tech: "Stainless Steel (316L / 17-4PH)",
                                    desc: "High corrosion resistance and robust mechanical properties. Used in marine, food processing, and structural components.",
                                    icon: ShieldCheck
                                },
                                {
                                    tech: "Tool & Die Steel (Maraging)",
                                    desc: "Ultra-high strength and hardness. Revolutionizing injection molding with complex internal conformal cooling channels.",
                                    icon: Hammer
                                }
                            ].map((mat, idx) => (
                                <div key={idx} className="glass-card p-8 reveal" style={{ transitionDelay: `${idx * 150}ms` }}>
                                    <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center border border-white/10 mb-6 text-orange-500">
                                        <mat.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-display font-bold uppercase mb-3">{mat.tech}</h3>
                                    <p className="text-sm text-slate-400 leading-relaxed">{mat.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* THE METAL ADVANTAGE - CAPABILITIES */}
                <section className="py-24 bg-[#080c14] border-y border-white/5">
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="reveal-left">
                                <h2 className="text-4xl md:text-5xl font-display font-bold uppercase mb-8">What Metal 3D Printing Unlocks</h2>
                                <div className="space-y-6">
                                    <div className="p-6 rounded-xl border border-white/5 bg-white/5 hover:border-orange-500/30 transition-colors">
                                        <h4 className="font-display font-bold text-2xl uppercase mb-2 text-orange-400">Topology Optimization</h4>
                                        <p className="text-slate-400">Reduce part weight by up to 60% while maintaining structural integrity. We print organic, lattice-based geometries that traditional CNC machining simply cannot reach.</p>
                                    </div>
                                    <div className="p-6 rounded-xl border border-white/5 bg-white/5 hover:border-orange-500/30 transition-colors">
                                        <h4 className="font-display font-bold text-2xl uppercase mb-2 text-orange-400">Conformal Cooling Molds</h4>
                                        <p className="text-slate-400">For injection molding tooling, we print internal cooling channels that follow the exact contour of your part, reducing cooling times by up to 40% and eliminating warpage.</p>
                                    </div>
                                    <div className="p-6 rounded-xl border border-white/5 bg-white/5 hover:border-orange-500/30 transition-colors">
                                        <h4 className="font-display font-bold text-2xl uppercase mb-2 text-orange-400">Part Consolidation</h4>
                                        <p className="text-slate-400">Combine assemblies of 20+ separate machined parts into a single, cohesive 3D printed metal component, eliminating assembly time and weak joints.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="reveal glass-card p-8 bg-slate-900/50">
                                <h3 className="text-2xl font-display font-bold uppercase mb-6 text-center">Precision Tolerances (SLM)</h3>
                                <table className="w-full text-center border-collapse text-sm">
                                    <thead>
                                        <tr className="border-b border-orange-500/20">
                                            <th className="p-4 font-bold uppercase tracking-wider text-orange-500 border-r border-white/10">Dimension</th>
                                            <th className="p-4 font-bold uppercase tracking-wider text-white">Metal Tolerance</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/5">
                                        <tr>
                                            <td className="p-4 text-slate-300 font-medium border-r border-white/5">{'<'} 100 mm</td>
                                            <td className="p-4 text-slate-400">± 0.05 mm</td>
                                        </tr>
                                        <tr className="bg-white/[0.01]">
                                            <td className="p-4 text-slate-300 font-medium border-r border-white/5">100 - 400 mm</td>
                                            <td className="p-4 text-slate-400">± 0.1 mm</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 text-slate-300 font-medium border-r border-white/5">{'>'} 400 mm</td>
                                            <td className="p-4 text-slate-400">± 0.2% + 0.1 mm</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <p className="text-xs text-slate-500 mt-4 text-center">* Post-machining via CNC available for tighter tolerances down to ±0.01mm.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* WIDELY APPLIED INDUSTRIES */}
                <section className="py-24">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16 reveal">
                            <div className="inline-flex items-center gap-2 text-orange-500 font-bold uppercase tracking-widest text-sm mb-4">
                                <span className="w-8 h-px bg-orange-500"></span> Industrial Applications <span className="w-8 h-px bg-orange-500"></span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase text-white">Where Metal 3D Printing Excels</h2>
                        </div>

                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
                            {[
                                "Aerospace Impellers",
                                "Conformal Cooling Molds",
                                "Medical Implants",
                                "Automotive Heat Sinks",
                                "Custom Robotics",
                                "Racing Components",
                                "Fluid Flow Manifolds",
                                "Legacy Part Replacement"
                            ].map((industry, idx) => (
                                <div key={idx} className="glass-card p-6 flex items-center justify-center text-center group reveal" style={{ transitionDelay: `${idx * 50}ms` }}>
                                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent group-hover:from-orange-500/10 transition-colors"></div>
                                    <span className="font-display font-bold text-lg uppercase tracking-wider text-slate-200 group-hover:text-orange-400 transition-colors z-10 block w-full">{industry}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FINAL CTA & PROCESS */}
                <section className="py-32 relative overflow-hidden bg-[#0f172a]/30 border-t border-white/5">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/5 to-transparent z-0"></div>
                    <div className="container mx-auto px-4 text-center relative z-10 reveal">
                        <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 text-xs md:text-sm font-bold uppercase tracking-widest text-slate-400 mb-12">
                            <span>1. Upload STEP/STL</span>
                            <ChevronRight className="w-4 h-4 text-orange-500" />
                            <span>2. DFM & Quote</span>
                            <ChevronRight className="w-4 h-4 text-orange-500" />
                            <span>3. SLM Production</span>
                            <ChevronRight className="w-4 h-4 text-orange-500" />
                            <span>4. Fast Delivery</span>
                        </div>

                        <h2 className="text-5xl md:text-7xl font-display font-black uppercase mb-8 leading-none">
                            Ready to print <span className="gradient-text-orange">METAL</span> parts?
                        </h2>
                        <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
                            Bypass traditional tooling constraints and accelerate your innovation. Upload your 3D models for a free engineering review and quote.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link to="/quote" className="btn-premium px-12 py-5 rounded-md text-xl font-bold">Upload 3D File</Link>
                            <Link to="/contact" className="px-12 py-5 rounded-md text-xl font-display font-bold uppercase border border-white/20 hover:bg-white/5 transition-colors">Consult an Engineer</Link>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ThreeDPrintingLanding;



# File: C:\Users\Administrator\Downloads\quanheng-metal-processing\pages\MetalEnclosuresLanding.tsx
import React, { useEffect } from 'react';
import { ChevronRight, ShieldCheck, Box, Hammer, Shield, Battery, Bolt, Cog, Settings, Factory, CheckCircle, LayoutGrid } from 'lucide-react';
import { Link } from 'react-router-dom';

const MetalEnclosuresLanding: React.FC = () => {
    // Animation observer
    useEffect(() => {
        const observerCallback: IntersectionObserverCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        };
        const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
        const observer = new IntersectionObserver(observerCallback, observerOptions);
        const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
        elements.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    // Helper component for standardizing the image grids
    const ImageGridSection = ({ title, subtitle, items, columns = "grid-cols-2 md:grid-cols-3 lg:grid-cols-4" }: any) => (
        <section className="py-24 relative border-t border-white/5">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 reveal">
                    <div className="inline-flex items-center gap-2 text-orange-500 font-bold uppercase tracking-widest text-sm mb-4">
                        <span className="w-8 h-px bg-orange-500"></span> {subtitle} <span className="w-8 h-px bg-orange-500"></span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold uppercase text-white">{title}</h2>
                </div>
                <div className={`grid ${columns} gap-6 md:gap-8 max-w-7xl mx-auto`}>
                    {items.map((item: any, idx: number) => (
                        <div key={idx} className="group glass-card overflow-hidden reveal bg-slate-900/40 border border-white/5 hover:border-orange-500/30 transition-all duration-500" style={{ transitionDelay: `${idx * 100}ms` }}>
                            <div className="relative h-48 md:h-56 overflow-hidden bg-slate-800">
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent z-10 opacity-60"></div>
                                <img src={item.image} alt={item.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out" />
                            </div>
                            <div className="p-5 relative z-20">
                                <h3 className="text-lg md:text-xl font-display font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">{item.title}</h3>
                                {item.description && <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );

    return (
        <div className="bg-[#0a0f1a] text-slate-50 min-h-screen font-sans selection:bg-orange-500/30">
            {/* Scoped Styles */}
            <style>{`
        .enclosures-page {
          background-color: #0a0f1a;
          color: #f8fafc;
          --qm-bg: #0a0f1a;
          --qm-surface: #0f172a;
          --qm-surface-2: #1e293b;
          --qm-orange: #f97316;
          --qm-orange-light: #fb923c;
          --qm-border: rgba(255,255,255,0.08);
          font-family: 'DM Sans', 'Inter', sans-serif;
        }
        
        .enclosures-page h1, .enclosures-page h2, .enclosures-page h3, .enclosures-page .font-display { 
          font-family: 'Barlow Condensed', sans-serif !important; 
        }
        
        .gradient-text-orange {
          background: linear-gradient(135deg, #f97316 0%, #fb923c 50%, #fbbf24 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .glass-card {
          background: linear-gradient(135deg, var(--qm-surface) 0%, var(--qm-surface-2) 100%);
          border: 1px solid var(--qm-border);
          border-radius: 12px;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }
        .glass-card:hover {
          transform: translateY(-6px);
          border-color: rgba(249,115,22,0.4);
          box-shadow: 0 20px 60px rgba(0,0,0,0.6), 0 0 30px rgba(249,115,22,0.1);
        }

        .btn-premium {
          background: linear-gradient(135deg, #f97316, #ea580c);
          color: white;
          font-family: 'Barlow Condensed', sans-serif !important;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(249,115,22,0.3);
        }
        .btn-premium:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 40px rgba(249,115,22,0.5);
          background: linear-gradient(135deg, #fb923c, #f97316);
        }

        .reveal { opacity: 0; transform: translateY(30px); transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
        .reveal.visible { opacity: 1; transform: translateY(0); }
        .reveal-left { opacity: 0; transform: translateX(-30px); transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
        .reveal-left.visible { opacity: 1; transform: translateX(0); }
        .reveal-scale { opacity: 0; transform: scale(0.95); transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
        .reveal-scale.visible { opacity: 1; transform: scale(1); }
      `}</style>
            <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800;900&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />

            <div className="enclosures-page">
                {/* HERO SECTION */}
                <section className="relative min-h-[90vh] flex items-center pt-28 pb-16 overflow-hidden">
                    <div className="absolute inset-0 z-0 bg-[#0a0f1a]">
                        <img
                            src="/enclosures/imgi_77_Metal-Enclosure-Manufacturer.jpg"
                            alt="Custom Metal Enclosures and Cabinets OEM Manufacturer"
                            className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
                            onError={(e) => { e.currentTarget.style.display = 'none'; }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1a] via-[#0a0f1a]/80 to-transparent"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-transparent to-transparent"></div>
                        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1a] to-transparent h-40"></div>
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-4xl">
                            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-sm font-semibold tracking-wide reveal-left">
                                <Shield className="w-4 h-4" />
                                Save 30-60% vs. Local Fabrication
                            </div>

                            <h1 className="font-display text-6xl md:text-8xl font-black uppercase leading-[0.85] tracking-tighter mb-6 reveal-left" style={{ transitionDelay: '100ms' }}>
                                CUSTOM METAL <br /> <span className="gradient-text-orange">ENCLOSURES & HOUSINGS</span>
                            </h1>

                            <div className="flex flex-col sm:flex-row gap-4 mb-8 text-lg font-bold text-white reveal-left" style={{ transitionDelay: '150ms' }}>
                                <span className="flex items-center gap-2"><Settings className="w-5 h-5 text-orange-500" /> Complete Customization</span>
                                <span className="hidden sm:inline border-l border-white/20"></span>
                                <span className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-orange-500" /> NEMA / IP65-IP68 Rated</span>
                                <span className="hidden sm:inline border-l border-white/20"></span>
                                <span className="flex items-center gap-2"><Factory className="w-5 h-5 text-orange-500" /> Automated Production</span>
                            </div>

                            <p className="text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed reveal-left" style={{ transitionDelay: '200ms' }}>
                                We provide comprehensive enclosure solutions from design to assembly for various industries. Protect your most critical electrical and mechanical components with premium-grade enclosures fabricated from Aluminum, Stainless Steel, and Sheet Metal.
                            </p>

                            <div className="flex flex-wrap gap-6 reveal-left" style={{ transitionDelay: '300ms' }}>
                                <Link to="/quote" className="btn-premium px-10 py-5 rounded-md flex items-center gap-2 text-xl">
                                    Request Custom Quote <ChevronRight className="w-6 h-6" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>



                {/* BY APPLICATIONS */}
                <div id="applications">
                    <ImageGridSection
                        title="Specialized Application Housings"
                        subtitle="Industry Segments"
                        columns="grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
                        items={[
                            { title: "Electrical Cabinet", description: "Robust cabinets for industrial control panels, switchgear, and automation.", image: "/enclosures/imgi_24_Electrical-Cabinet.jpg" },
                            { title: "Battery Enclosure", description: "Durable and ventilated enclosures for batteries, focused on thermal management.", image: "/enclosures/imgi_25_Battery-Enclosure.jpg" },
                            { title: "Metal Junction Box", description: "Securely houses sensitive electrical connections from environmental factors.", image: "/enclosures/imgi_21_Metal-Junction-Box.jpg" },
                            { title: "Generators Enclosure", description: "Heavy-duty outdoor housings that reduce noise and protect backup generators.", image: "/enclosures/imgi_20_Metal-Generator-Enclosure.jpg" },
                            { title: "Busbar Panel Box", description: "Specialized enclosures specifically fabricated for housing busbar distribution systems.", image: "/enclosures/imgi_22_Busbar-Panel-Box.jpg" },
                            { title: "MCB Metal Box", description: "Protective enclosures for Miniature Circuit Breakers in complex distribution boards.", image: "/enclosures/imgi_23_MCB-Metal-Box.jpg" },
                            { title: "Metal Adaptable Box", description: "Versatile enclosures suited for various custom electrical connections.", image: "/enclosures/imgi_19_Metal-Adaptable-Box.jpg" },
                            { title: "Metal Socket Box", description: "Ultra-durable metal boxes intended for industrial power outlets and switch housings.", image: "/enclosures/imgi_18_Metal-Socket-Box.jpg" }
                        ]}
                    />
                </div>

                {/* BY INSTALLATION METHODS */}
                <div id="installations" className="bg-[#080c14]">
                    <ImageGridSection
                        title="Form Factors & Deployments"
                        subtitle="Installation Methods"
                        columns="grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
                        items={[
                            { title: "Free Standing Enclosure", description: "Large, standalone units tailored for complex structural control systems.", image: "/enclosures/imgi_14_Free-Standing-Enclosure.jpg" },
                            { title: "Wall Mount Enclosure", description: "Space-saving designed to be securely mounted directly on walls or poles.", image: "/enclosures/imgi_15_Wall-Mount-Enclosure.jpg" },
                            { title: "Flush Mount Enclosure", description: "Recessed seamlessly into walls for a clean, low-profile safety appearance.", image: "/enclosures/imgi_16_Flush-Mount-Enclosure.jpg" },
                            { title: "Rack Mount Enclosure", description: "Standardized enclosures structured to fit into standard 19-inch IT racks.", image: "/enclosures/imgi_17_Rack-Mount-Enclosure.jpg" }
                        ]}
                    />
                </div>

                {/* BY MATERIAL OVERVIEW */}
                <section id="materials" className="py-24 border-t border-white/5">
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="reveal-left">
                                <div className="inline-flex items-center gap-2 text-orange-500 font-bold uppercase tracking-widest text-sm mb-4">
                                    <span className="w-8 h-px bg-orange-500"></span> Substrates Library <span className="w-8 h-px bg-orange-500"></span>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-display font-bold uppercase mb-8">Material Flexibility</h2>
                                <p className="text-xl text-slate-400 mb-8">We engineer with precision using diverse metals tailored to resist harsh chemicals, coastal climates, hygienic operations, and extreme mechanical stress.</p>

                                <div className="space-y-4">
                                    {[
                                        { title: "Aluminum Enclosure", desc: "Lightweight, highly conductive, natively corrosion-resistant. Ideal for heatsinks.", image: "/enclosures/imgi_8_Aluminum-Enclosure.jpg" },
                                        { title: "304 & 316 Stainless Steel", desc: "Food-grade, marine-grade defense against relentless salt and caustic chemicals.", image: "/enclosures/imgi_9_304-Stainless-Steel-Enclosure.jpg" },
                                        { title: "Mild & Carbon Steel", desc: "Unmatched mechanical strength and structural integrity for heavy payloads.", image: "/enclosures/imgi_11_Mild-Steel-Enclosure.jpg" },
                                        { title: "Galvanized Steel", desc: "Cost-effective shielding utilizing heavy zinc-coating for outdoor longevity.", image: "/enclosures/imgi_12_Galvanized-Steel-Enclosure.jpg" }
                                    ].map((mat, i) => (
                                        <div key={i} className="flex gap-4 p-4 rounded-xl border border-white/5 bg-slate-900/30 hover:border-orange-500/30 transition-colors">
                                            <CheckCircle className="w-6 h-6 text-orange-500 shrink-0 mt-1" />
                                            <div>
                                                <h4 className="font-display font-bold text-xl uppercase text-slate-200">{mat.title}</h4>
                                                <p className="text-slate-400 text-sm mt-1">{mat.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 reveal-right">
                                <img src="/enclosures/imgi_9_304-Stainless-Steel-Enclosure.jpg" className="rounded-xl w-full h-48 md:h-64 object-cover border border-white/10" alt="Stainless Steel" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                                <img src="/enclosures/imgi_11_Mild-Steel-Enclosure.jpg" className="rounded-xl w-full h-48 md:h-64 object-cover border border-white/10 mt-8" alt="Mild Steel" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                                <img src="/enclosures/imgi_12_Galvanized-Steel-Enclosure.jpg" className="rounded-xl w-full h-48 md:h-64 object-cover border border-white/10 -mt-8" alt="Galvanized" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                                <img src="/enclosures/imgi_8_Aluminum-Enclosure.jpg" className="rounded-xl w-full h-48 md:h-64 object-cover border border-white/10" alt="Aluminum" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                            </div>
                        </div>
                    </div>
                </section>

                {/* BY IP RATING */}
                <div id="ip-rating" className="bg-[#080c14]">
                    <ImageGridSection
                        title="Defying The Elements"
                        subtitle="IP Shielding Grades"
                        columns="grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
                        items={[
                            { title: "IP65 Rating", description: "Dust-tight construction perfectly protected against forceful low-pressure water jets.", image: "/enclosures/imgi_26_IP65-Metal-Enclosure.jpg" },
                            { title: "IP66 Rating", description: "Heavy-duty dust-tight seals built to withstand heavy seas and powerful water streams.", image: "/enclosures/imgi_27_IP66-Metal-Enclosure.jpg" },
                            { title: "IP67 Rating", description: "Engineered to protect critical internals against the effects of temporary water immersion.", image: "/enclosures/imgi_28_IP67-Metal-Enclosure.jpg" },
                            { title: "IP68 Rating", description: "Submersible grade, hermetically sealed against continuous heavy water pressure.", image: "/enclosures/imgi_29_IP68-Metal-Enclosure.jpg" }
                        ]}
                    />
                </div>

                {/* BY MANUFACTURING PROCESS */}
                <section id="processes" className="py-24 border-t border-white/5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-500/5 to-transparent skew-x-12 translate-x-32 hidden lg:block"></div>
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="text-center mb-16 reveal">
                            <div className="inline-flex items-center gap-2 text-orange-500 font-bold uppercase tracking-widest text-sm mb-4">
                                <span className="w-8 h-px bg-orange-500"></span> Fabrication Methodologies <span className="w-8 h-px bg-orange-500"></span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase text-white">How We Build It</h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { title: "Sheet Metal Fabricated", desc: "Precision CNC laser cutting, turret punching, and robotic bending. Ideal for low-to-high volume custom geometry.", image: "/enclosures/imgi_30_Sheet-Metal-Enclosure.jpg", icon: LayoutGrid },
                                { title: "Extruded Enclosures", desc: "Solid aluminum forced through custom dies forming continuous rugged profiles. The ultimate choice for customized PCB housings.", image: "/enclosures/imgi_31_Extruded-Aluminium-Enclosure.jpg", icon: Box },
                                { title: "Die Casted Enclosures", desc: "High-pressure molten aluminum or zinc molded into highly complex, repeatable watertight cases.", image: "/enclosures/imgi_32_Die-Cast-Enclosure.jpg", icon: Cog }
                            ].map((mat, idx) => (
                                <div key={idx} className="glass-card p-8 reveal-scale" style={{ transitionDelay: `${idx * 150}ms` }}>
                                    <h3 className="text-2xl font-display font-bold uppercase mb-4 text-orange-400">{mat.title}</h3>
                                    <p className="text-slate-300 mb-6">{mat.desc}</p>
                                    <div className="aspect-video relative rounded-lg overflow-hidden border border-white/10">
                                        <img src={mat.image} className="w-full h-full object-cover" alt={mat.title} onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FINAL CTA & PROCESS */}
                <section className="py-32 relative overflow-hidden bg-[#0a0f1a] border-t border-white/5">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.1),transparent_70%)] opacity-50 z-0"></div>
                    <div className="container mx-auto px-4 text-center relative z-10 reveal">
                        <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 text-xs md:text-sm font-bold uppercase tracking-widest text-slate-400 mb-12">
                            <span>1. Engineering CAD</span>
                            <ChevronRight className="w-4 h-4 text-orange-500" />
                            <span>2. Prototype / NPI</span>
                            <ChevronRight className="w-4 h-4 text-orange-500" />
                            <span>3. Mass Fabrication</span>
                            <ChevronRight className="w-4 h-4 text-orange-500" />
                            <span>4. Global Logistics</span>
                        </div>

                        <h2 className="text-6xl md:text-8xl font-display font-black uppercase mb-8 leading-none">
                            SECURE YOUR <span className="gradient-text-orange">HARDWARE</span>
                        </h2>
                        <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
                            Take control of your supply chain. We manufacture precision housing with superior protective capabilities at industry-leading cost efficiency.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link to="/quote" className="btn-premium px-12 py-5 rounded-md text-xl font-bold shrink-0">Get Your Direct Quote</Link>
                            <Link to="/contact" className="px-12 py-5 rounded-md text-xl font-display font-bold uppercase border border-white/20 hover:bg-white/5 transition-colors shrink-0 backdrop-blur-sm">Talk to an Engineer</Link>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default MetalEnclosuresLanding;


