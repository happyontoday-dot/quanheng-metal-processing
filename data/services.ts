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
            "Conformal Cooling Channels: Dramatically improve mold cooling cycles",
            "Topology Optimization: Reduce weight up to 60% maintaining strength",
            "Part Consolidation: Combine complex assemblies into a single printed part",
            "Rapid Scaling: From functional prototypes to end-use metal components"
        ],
        specifications: [
            "High Precision: Tolerances down to ±0.05mm",
            "Materials: Ti6Al4V, AlSi10Mg, 316L, 17-4PH, Maraging Steel",
            "Density: 99.9% relative density for forged-like strength",
            "Post-Processing: Heat treatment, CNC machining, and surface finishing"
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
        specifications: [
            "Tolerance: ±0.1 mm",
            "Sheet Thickness: 0.5 – 12 mm",
            "Max Sheet Size: 2500 × 1250 mm",
            "Hole Diameter: ≥ 1× Sheet Thickness",
            "Turret Stations: Up to 72 Tool Stations",
            "Production: Prototype to Mass Run"
        ],
        features: [
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
        specifications: [
            "Maximum Bending Thickness: 20mm (Steel) / 12mm (Stainless)",
            "Maximum Bending Length: 4000mm",
            "Bending Force: Up to 1000 Tons",
            "Precision: Linear ±0.1mm / Angular ±0.5°",
            "Material Support: Aluminum, Stainless Steel, Carbon Steel, Copper, Brass"
        ],
        features: [
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
        image: "/Core Competencies/metal welding .jpeg"
    }
];
