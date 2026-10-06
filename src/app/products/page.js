"use client";

import { useMemo, useState } from "react";

import ProductModal from "@/components/ProductModal";
import Image from "next/image";
import { motion } from "framer-motion";

import SearchIcon from "@mui/icons-material/Search";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import TuneIcon from "@mui/icons-material/Tune";
import CloseIcon from "@mui/icons-material/Close";

/* =========================================================
   SHARED PRODUCT DETAILS
========================================================= */

/* -------------------------
   V3
------------------------- */

const v3Details = {
    detailTitle: 'V3 – 3" OR 75 MM BOREWELL SUBMERSIBLE PUMPS',

    description:
        '3" submersible pump of KMP INDUSTRIES are designed to operate in a fully submerged environment where you can connect up the discharge hose, and throw them inside borewell where minimum inner diameter has to be 75 mm. In a simple word it is a very flexible machine for you. The pumps are made with high quality raw materials in order to extract best performance with lowest operating cost.',

    specifications: [
        {
            label: "Power Range",
            value: "0.75 H.P – 2 H.P",
        },
        {
            label: "Head Range",
            value: "25 mtrs – 120 mtrs",
        },
        {
            label: "Discharge",
            value: "20 LPM",
        },
        {
            label: "Operating Voltage",
            value: "(180 V – 230 V) – (1 Phase)",
        },
        {
            label: "Outlet Size",
            value: "25 mm",
        },
        {
            label: "Method of Starting",
            value: "Capacitor start and capacitor run",
        },
        {
            label: "Maximum Permissible Sand in Water",
            value: "15 GRAM / Cubic meter",
        },
    ],

    material: [
        {
            label: "Outer Pipe",
            value: "S.S. 202",
        },
        {
            label: "Shaft",
            value: "S.S. 410",
        },
        {
            label: "Impeller / Diffuser",
            value: "Noryl",
        },
        {
            label: "Thrust Bearing Set",
            value: "Impregnated Carbon / S.S",
        },
        {
            label: "Bearing Bush",
            value: "LTB 4",
        },
    ],

    features: [
        "Easy assembling and dismantiling",
        "Good remedy for improperly drilled 4″ bore holes & Sandy borewells",
        "Sand proof – Design to protect motor & pump portions",
        "Built with thermoplastic impellers & Diffusers",
        "High quality S.S. Materials (SS 304 / SS 410) which reduced risk or corrosion",
        "Light weight & compact",
    ],

    applications: [
        "Domestic water supply",
        "Water supply to high-rise buildings",
        "Gardens, Farms, Nurseries",
        "Housing complexes, bungalows",
    ],
};


/* -------------------------
   V4
------------------------- */

const v4Details = {
    detailTitle: 'V4 – 4" OR 100 MM BOREWELL SUBMERSIBLE PUMPS',

    description:
        '4″ Stainless Steel Submersible pumpsets of KMP INDUSTRIES are multistage centrifugal units which operate below water level and are driven by water filled AC single phase (or) three phase induction submersible motors. These pumps are well suited for borewell diameter of minimum 4″ (or) 100 mm. These pumps work on principle of a modular structure where with limited number of parts different tailor made request can be achieved. Impellers and diffusers are manufactured with high grade stainless steel which can be well suited for salty conditions and better performance.',

    specifications: [
        {
            label: "Power Range",
            value: "1.0 H.P – 7.5 H.P",
        },
        {
            label: "Speed",
            value: "2900 RPM",
        },
        {
            label: "Operating Voltage",
            value: "Single phase (180 V to 230 V) AC / Three phase (360 V to 415 V) AC",
        },
        {
            label: "Delivery Pipe Size",
            value: "32 mm",
        },
        {
            label: "Max. Outer Diameter",
            value: "98 mm",
        },
        {
            label: "Head Range",
            value: "25 mtrs – 350 mtrs",
        },
        {
            label: "Discharge",
            value: "3.5 LPS – 0.3 LPS",
        },
        {
            label: "Maximum Start / Hour",
            value: "20 times",
        },
        {
            label: "Method of Starting",
            value: "CSCR – 1 Phase / DOL – 3 Phase",
        },
    ],

    material: [
        {
            label: "Outer Pipe",
            value: "S.S. 202",
        },
        {
            label: "Shaft",
            value: "S.S. 410",
        },
        {
            label: "Thrust Bearing Set",
            value: "Impregnated Carbon / S.S",
        },
        {
            label: "Bearing Bush",
            value: "LTB 4",
        },
        {
            label: "Impeller / Diffuser",
            value: "Stainless Steel",
        },
        {
            label: "Diaphragm",
            value: "Nitrile Butyl Rubber (NBR)",
        },
    ],

    features: [
        "There is a wide range of pumps to match any duty point.",
        "High pump efficiency",
        "Due to less weight installation cost is very less",
        "Semi axial impellers make priming automatic",
        "Easy to dismantle and repair due to right construction.",
    ],

    applications: [
        "Domestic water supply",
        "Small irrigation",
        "Civil and industrial applications",
        "Fire fighting applications",
    ],
};


/* -------------------------
   V5
------------------------- */

const v5Details = {
    detailTitle: 'V5 – 5" OR 125 MM BOREWELL SUBMERSIBLE PUMPS',

    description:
        '5″ Submersible pumpsets of KMP INDUSTRIES are multistage centrifugal units which operate below water level and are driven by water filled AC three phase induction submersible motors. These pumps are well suited for borewell diameter of minimum 5″ (or) 125 mm. Good remedy for improperly drilled 6″ bore holes & Sandy borewells. Impellers and diffusers are manufactured with high grade stainless steel which can be well suited for salty conditions and better performance.',

    specifications: [
        {
            label: "Power Range",
            value: "3.0 H.P – 12.5 H.P",
        },
        {
            label: "Speed",
            value: "2900 RPM",
        },
        {
            label: "Operating Voltage",
            value: "Three phase (360 V to 415 V) AC",
        },
        {
            label: "Delivery Pipe Size",
            value: "40 mm, 50 mm",
        },
        {
            label: "Max. Outer Diameter",
            value: "125 mm",
        },
        {
            label: "Head Range",
            value: "45 mtrs – 650 mtrs",
        },
        {
            label: "Discharge",
            value: "8.0 LPS – 1.0 LPS",
        },
        {
            label: "Maximum Start / Hour",
            value: "20 times",
        },
        {
            label: "Method of Starting",
            value: "DOL – 3 Phase",
        },
    ],

    material: [
        {
            label: "Outer Pipe",
            value: "S.S. 202",
        },
        {
            label: "Shaft",
            value: "S.S. 410",
        },
        {
            label: "Thrust Bearing Set",
            value: "Impregnated Carbon / S.S",
        },
        {
            label: "Bearing Bush",
            value: "LTB 4",
        },
        {
            label: "Impeller / Diffuser",
            value: "Cast Iron / Stainless Steel",
        },
        {
            label: "Diaphragm",
            value: "Nitrile Butyl Rubber (NBR)",
        },
    ],

    features: [
        "Easy assembling and dismantiling.",
        "Good remedy for improperly drilled 6″ bore holes & Sandy borewells.",
        "Sand proof – Design to protect motor & pump portions.",
        "Built with thermoplastic impellers & Diffusers.",
        "High quality S.S. Materials (SS 304 / SS 410) which reduced risk or corrosion.",
        "Light weight & compact",
    ],

    applications: [
        "Domestic water supply",
        "Small irrigation",
        "Civil and industrial applications",
        "Fire fighting applications",
    ],
};


/* -------------------------
   V6
------------------------- */

const v6Details = {
    detailTitle: 'V6 – 6" OR 150 MM BOREWELL SUBMERSIBLE PUMPS RADIAL FLOW',

    description:
        'The 6″ Vertical borewell submersible pumps are well suited for 150 mm borewell and above. These submersible pumps consists of multistage centrifugal, vertical axis pumps. The pumps are designed such that series of impellers rotate inside vane diffusers challenging the flow of fluid from each impeller to the suction opening of the next. The fluid passes through the series of impellers and leaves the pump via delivery outlet.',

    specifications: [
        {
            label: "Power Range",
            value: "3.0 H.P – 25.0 H.P",
        },
        {
            label: "Speed",
            value: "2900 RPM",
        },
        {
            label: "Operating Voltage",
            value: "415 V / 50 Hz AC Supply",
        },
        {
            label: "Delivery Pipe Size",
            value: "50 mm",
        },
        {
            label: "Head Range",
            value: "30 mts – 330 mts",
        },
        {
            label: "Discharge",
            value: "9.0 LPS – 2.0 LPS",
        },
        {
            label: "Maximum Start / Hour",
            value: "15 times",
        },
        {
            label: "Method of Starting",
            value: "STAR / STAR DELTA",
        },
    ],

    material: [
        {
            label: "Outer Pipe",
            value: "S.S. 202 / S.S 304",
        },
        {
            label: "Rotor Shaft",
            value: "S.S. 410 / S.S 416",
        },
        {
            label: "Thrust Bearing Set",
            value: "Impregnated Carbon / S.S",
        },
        {
            label: "Bearing Bush",
            value: "LTB 4",
        },
        {
            label: "Impeller",
            value: "Stainless Steel",
        },
        {
            label: "Diffusers",
            value: "Cast iron",
        },
        {
            label: "Suction / NRV",
            value: "Cast Iron FG 200 / FG 250",
        },
        {
            label: "Diaphragm",
            value: "Nitrile Butyl Rubber (NBR)",
        },
    ],

    features: [
        "The motor has a radial as well as axial thrust bearing.",
        "There are water filled water lubricated motor.",
        "Diaphragm below bearing compensates over pressure which arises due to thermal expansion when temperature of winding rises.",
        "Designed for continues operation with certain limitations.",
    ],

    applications: [
        "For pumping clean, cold water non corrosive & non abrasive.",
        "Irrigation",
        "For urban and rural drinking water supply",
        "Pressure boosting",
        "Gardens, Farms and nurseries.",
    ],
};


/* -------------------------
   V5 TO V4 SS
------------------------- */

const v5ToV4Details = {
    detailTitle:
        "V5 TO V4 STAINLESS STEEL BOREWELL SUBMERSIBLE PUMPS",

    description:
        'V5 to V4 submersible pump of KMP INDUSTRIES are multistage centrifugal units which operate below water level and are driven by water filled AC three phase induction submersible motors. In this type V5 motor is connected with V4 Stainless steel pump. These pumps are well suited for borewell diameter of minimum 6″ (or) 150 mm.',

    specifications: [
        {
            label: "Power Range",
            value: "5.0 H.P – 12.5 H.P",
        },
        {
            label: "Speed",
            value: "2880 RPM",
        },
        {
            label: "Operating Voltage",
            value: "Three phase (360 V to 415 V) AC",
        },
        {
            label: "Delivery Pipe Size",
            value: "32 mm, 40 mm",
        },
        {
            label: "Max. Outer Diameter",
            value: "98 mm",
        },
        {
            label: "Head Range",
            value: "15 mtrs – 620 mtrs",
        },
        {
            label: "Discharge",
            value: "2.0 LPS – 0.3 LPS",
        },
        {
            label: "Method of Starting",
            value: "DOL – 3 Phase",
        },
    ],

    material: [
        {
            label: "Outer Pipe",
            value: "S.S. 202",
        },
        {
            label: "Shaft",
            value: "S.S. 410",
        },
        {
            label: "Thrust Bearing Set",
            value: "Impregnated Carbon / S.S",
        },
        {
            label: "Bearing Bush",
            value: "LTB 4",
        },
        {
            label: "Impeller / Diffuser",
            value: "Stainless Steel",
        },
        {
            label: "Diaphragm",
            value: "Nitrile Butyl Rubber (NBR)",
        },
    ],

    features: [
        "There is a wide range of pumps to match any duty point.",
        "High pump efficiency",
        "Due to less weight installation cost is very less",
        "Semi axial impellers make priming automatic",
        "Easy to dismantle and repair due to right construction.",
    ],

    applications: [
        "Domestic water supply",
        "Small irrigation",
        "Civil and industrial applications",
        "Fire fighting applications",
    ],
};


/* -------------------------
   SINGLE PHASE OPENWELL
------------------------- */

const singlePhaseOpenwellDetails = {
    detailTitle: "SINGLE PHASE OPENWELL SUBMERSIBLE PUMPS",

    description:
        "Single phase openwell submersible pumps are suitable for openwells and underground sumps. These pumps rests at the bottom of the well hence reducing the risk of water level fluctuating problem. These pumps are made of high grade stainless steel body and cast iron parts. The motor portion is a water cooled easily rewindable type, where the windings are made using special insulated copper wires. Specially designed thrust bearings are used to withstand axial thrust load. It has a very simple pump portion comprising of a bowl and impeller with a unique hydraulic design to provide a high efficient performance.",

    specifications: [
        {
            label: "Power Range",
            value: "0.5 HP – 3.0 HP",
        },
        {
            label: "Installation Method",
            value: "Horizontal",
        },
        {
            label: "Power Supply",
            value: "1 Phase 230 V AC / 3 Phase 415 V AC",
        },
        {
            label: "Pump Outlet Size",
            value: "25 mm, 32 mm, 40 mm, 50 mm",
        },
        {
            label: "Impellers",
            value: "S.S 202",
        },
        {
            label: "Head Range",
            value: "10 mtrs – 35 mtrs",
        },
        {
            label: "Discharge",
            value: "8.5 LPS – 3.0 LPS",
        },
        {
            label: "Maximum Start / Hour",
            value: "6 times",
        },
        {
            label: "Type of Duty",
            value: "Continues",
        },
    ],

    features: [
        "It save 20 to 30% of electricity bill compare to convention design pump.",
        "Noise free operation since immured inside water.",
        "Less maintenance due to simple design and low depth installation.",
        "No priming / suction problems.",
        "Single shaft for pumps and motor ensure perfect alignment always.",
        "Designed to with stand wide voltage fluctuation hence less possibility of burn out of motor winding.",
    ],

    applications: [
        "Water supply for domestic use in high rise apartments, building and hotels. Clean water handling application.",
        "Drip and sprinkler irrigation",
        "Fountains and gardening",
        "Fire fighting applications",
        "Commonly used in wells, sumps etc.",
    ],
};


/* -------------------------
   THREE PHASE VERTICAL OPENWELL
------------------------- */

const threePhaseVerticalOpenwellDetails = {
    detailTitle: "THREE PHASE VERTICAL OPENWELL SUBMERSIBLE",

    description:
        "Three phase vertical openwell submersible pumps are multistage type which helps to increase the head range. The motor is bound with special water proof insulated winding wires and hence it is capable of withstanding wide voltage fluctuations. Specially designed thrust bearing are used to withstand axial thrust loads with minimum wear.",

    specifications: [
        {
            label: "Power Range",
            value: "3.0 H.P – 100.0 H.P",
        },
        {
            label: "Speed",
            value: "2880 RPM",
        },
        {
            label: "Power Supply",
            value: "380 – 415 V, 3 Phase, 50 Hz AC Supply",
        },
        {
            label: "Head Range",
            value: "15 mtrs – 325 mtrs",
        },
        {
            label: "Discharge",
            value: "4.0 LPS – 60.0 LPS",
        },
        {
            label: "Type of Duty",
            value: "S1 (Continues)",
        },
    ],

    features: [
        "Designed for under water application – no need of priming and foot valve.",
        "Replaceable wearing parts and hence longer life of pumps.",
        "Single shaft for pump and motor ensures permanent correct line alignment and safer design to prevent entry of foreign particulars and sand into the motor.",
        "Noise less operation.",
    ],

    applications: [
        "Industrial water supply.",
        "Irrigation of large farms, sprinklers and drip irrigation systems.",
        "Water supply in apartments, housing colonies.",
        "Civil water supply.",
        "Rural water supply.",
        "Public water supply schemes.",
        "Agriculture",
    ],
};


/* -------------------------
   SELF PRIMING MONOBLOCK
------------------------- */

const selfPrimingDetails = {
    detailTitle: "SELF PRIMING MONOBLOCK PUMPS",

    description:
        "We KMP Industries manufacture CELVIN brand self Priming Monoblock Pumps with a high engineering excellence to meet common as well as most technology needs of the society. CELVIN Pumps are made up of high selective quality materials under strict quality control supervision.",

    specifications: [
        {
            label: "Performance",
            value: "2880 RPM, 200 – 240V, 50Hz AC Supply",
        },
        {
            label: "Power Range",
            value: "0.5 H.P – 1.0 H.P",
        },
        {
            label: "Speed",
            value: "2880 RPM",
        },
        {
            label: "Power Supply",
            value: "1 Phase 230 V AC",
        },
        {
            label: "Delivery Pipe Size",
            value: "25 mm",
        },
        {
            label: "Head Range",
            value: "8 mtrs – 50 mtrs",
        },
        {
            label: "Discharge",
            value: "0.2 LPS – 1.5 LPS",
        },
        {
            label: "Type of Duty",
            value: "S1 (Continues)",
        },
    ],

    features: [
        "Spring loaded Non Return valve for self priming models.",
        "Double bearing.",
        "Greater efficiency, Continues operation",
        "High working pressure",
        "Less working Pressure",
    ],

    applications: [
        "Domestic water supply",
        "Fountain",
        "Curing at Construction",
        "Small Irrigation",
        "Garden",
    ],
};


/* -------------------------
   CENTRIFUGAL MONOBLOCK
------------------------- */

const centrifugalDetails = {
    detailTitle: "CENTRIFUGAL MONOBLOCK PUMPS",

    description:
        "We KMP Industries manufacture CELVIN brand centrifugal Monoblock Pumps with a high engineering excellence to meet common as well as most technology needs of the society. CELVIN Pumps are made up of high selective quality materials under strict quality control supervision.",

    specifications: [
        {
            label: "Power Range",
            value: "0.5 H.P – 3.0 H.P",
        },
        {
            label: "Speed",
            value: "2880 RPM",
        },
        {
            label: "Power Supply",
            value: "1 Phase 230 V AC",
        },
        {
            label: "Delivery Pipe Size",
            value: "25 mm, 32 mm, 40 mm, 50 mm, 65 mm, 75 mm",
        },
        {
            label: "Head Range",
            value: "8 mtrs – 25 mtrs",
        },
        {
            label: "Discharge",
            value: "0.2 LPS – 12 LPS",
        },
        {
            label: "Type of Duty",
            value: "S1 (Continues)",
        },
    ],

    features: [
        "Spring loaded Non Return valve for self priming models.",
        "Double bearing.",
        "Greater efficiency, Continues operation",
        "High working pressure",
        "Less working Pressure",
    ],

    applications: [
        "Domestic water supply",
        "Fountain",
        "Curing at Construction",
        "Small Irrigation",
        "Garden",
    ],
};


/* =========================================================
   PRODUCTS
========================================================= */

const products = [
    {
        id: 1,
        name: "V3 Submersible Pump",
        category: "Submersible Pumps",
        image: "/images/products/v3-submersible.jpeg",
        ...v3Details,
    },

    {
        id: 2,
        name: "V4 Submersible Pump",
        category: "Submersible Pumps",
        image: "/images/products/v4-submersible.jpeg",
        ...v4Details,
    },

    {
        id: 3,
        name: "V4 S.S. Submersible Pump",
        category: "Submersible Pumps",
        image: "/images/products/v4-ss-submersible.jpeg",
        ...v4Details,
    },

    {
        id: 4,
        name: "V4 S.S. Submersible Pump - 1",
        category: "Submersible Pumps",
        image: "/images/products/v4-ss-submersible-1.jpeg",
        ...v4Details,
    },

    {
        id: 5,
        name: "V5 Submersible Pump",
        category: "Submersible Pumps",
        image: "/images/products/v5-submersible.jpeg",
        ...v5Details,
    },

    {
        id: 6,
        name: "V5 Submersible Pump - 1",
        category: "Submersible Pumps",
        image: "/images/products/v5-submersible-1.jpeg",
        ...v5Details,
    },

    {
        id: 7,
        name: "V5 Submersible Pump - 2",
        category: "Submersible Pumps",
        image: "/images/products/v5-submersible-2.jpeg",
        ...v5Details,
    },

    {
        id: 8,
        name: "V6 Submersible Pump",
        category: "Submersible Pumps",
        image: "/images/products/v6-rf.jpeg",
        ...v6Details,
    },

    {
        id: 9,
        name: "V6 Single Phase",
        category: "Submersible Pumps",
        image: "/images/products/v6-single-phase.jpeg",
        ...v6Details,
    },

    {
        id: 10,
        name: "V6 SS Models",
        category: "Submersible Pumps",
        image: "/images/products/v6-ss-models.jpeg",
        ...v6Details,
    },

    {
        id: 11,
        name: "V6 Submersible Pump - M/F",
        category: "Submersible Pumps",
        image: "/images/products/v6-mf.jpeg",
        ...v6Details,
    },

    {
        id: 12,
        name: "V6 Submersible Pump - 50 ft",
        category: "Submersible Pumps",
        image: "/images/products/v6-50ft.jpeg",
        ...v6Details,
    },

    /* OPENWELL */

    {
        id: 13,
        name: "Single Phase Openwell Submersible Pump",
        category: "Openwell Pumps",
        image: "/images/products/openwell-1-phase.jpeg",
        ...singlePhaseOpenwellDetails,
    },

    {
        id: 14,
        name: "Horizontal Openwell Economic",
        category: "Openwell Pumps",
        image: "/images/products/horizontal-openwell-economic.jpeg",
        ...singlePhaseOpenwellDetails,
    },

    {
        id: 15,
        name: "Horizontal Openwell 3 Phase",
        category: "Openwell Pumps",
        image: "/images/products/horizontal-openwell-3-phase.jpeg",
        ...threePhaseVerticalOpenwellDetails,
    },

    {
        id: 16,
        name: "Vertical Openwell",
        category: "Openwell Pumps",
        image: "/images/products/vertical-openwell.jpeg",
        ...threePhaseVerticalOpenwellDetails,
    },

    {
        id: 17,
        name: "Vertical Openwell 1 Phase",
        category: "Openwell Pumps",
        image: "/images/products/vertical-openwell-1-phase.jpeg",
        ...singlePhaseOpenwellDetails,
    },

    {
        id: 18,
        name: "Vertical Openwell - 1",
        category: "Openwell Pumps",
        image: "/images/products/vertical-openwell-1.jpeg",
        ...threePhaseVerticalOpenwellDetails,
    },

    /* MONOBLOCK */

    {
        id: 19,
        name: "Self Priming Pump",
        category: "Monoblock Pumps",
        image: "/images/products/self-priming.jpeg",
        ...selfPrimingDetails,
    },

    {
        id: 20,
        name: "Magic Suction",
        category: "Monoblock Pumps",
        image: "/images/products/magic-suction.jpeg",
        ...selfPrimingDetails,
    },

    {
        id: 21,
        name: "DMS Pump",
        category: "Monoblock Pumps",
        image: "/images/products/dms.jpeg",
        ...centrifugalDetails,
    },

    {
        id: 22,
        name: "Centrifugal Monoblock - 1 Phase",
        category: "Monoblock Pumps",
        image: "/images/products/centrifugal-mono-block-1-phase.jpeg",
        ...centrifugalDetails,
    },

    {
        id: 23,
        name: "Centrifugal Monoblock - 3 Phase",
        category: "Monoblock Pumps",
        image: "/images/products/centrifugal-mono-block-3-phase.jpeg",
        ...centrifugalDetails,
    },

    /* DESCRIPTION ONLY */

    {
        id: 24,
        name: "Dewatering Sewage Pump",
        category: "Dewatering & Sewage",
        image: "/images/products/dewatering-sewage.jpeg",
        description:
            "Dewatering and sewage pumping solution designed for reliable water removal applications.",
    },

    {
        id: 25,
        name: "Dewatering Cutter Sewage Pump",
        category: "Dewatering & Sewage",
        image: "/images/products/dewatering-cutter-sewage.jpeg",
        description:
            "Cutter sewage pumping solution designed for demanding dewatering and wastewater applications.",
    },

    {
        id: 26,
        name: "V5 Motor",
        category: "Motors",
        image: "/images/products/v5-motor.jpeg",
        description:
            "Reliable motor solution designed for dependable power delivery in pumping applications.",
    },
];


/* =========================================================
   CATEGORIES
========================================================= */

const categories = [
    "All Products",
    "Submersible Pumps",
    "Openwell Pumps",
    "Monoblock Pumps",
    "Dewatering & Sewage",
    "Motors",
];


/* =========================================================
   PAGE
========================================================= */

export default function ProductsPage() {
    const [search, setSearch] = useState("");
    const [activeCategory, setActiveCategory] =
        useState("All Products");

    const [mobileFilters, setMobileFilters] =
        useState(false);

    const [selectedProduct, setSelectedProduct] =
        useState(null);


    /* =====================================================
       FILTER
    ===================================================== */

    const filteredProducts = useMemo(() => {
        return products.filter((product) => {
            const matchesCategory =
                activeCategory === "All Products" ||
                product.category === activeCategory;

            const searchText =
                search.toLowerCase().trim();

            const matchesSearch =
                !searchText ||
                product.name
                    .toLowerCase()
                    .includes(searchText) ||
                product.description
                    .toLowerCase()
                    .includes(searchText) ||
                product.category
                    .toLowerCase()
                    .includes(searchText);

            return matchesCategory && matchesSearch;
        });
    }, [search, activeCategory]);


    return (
        <main className="bg-white">

            {/* =================================================
                HERO
            ================================================= */}

            <section className="relative w-full overflow-hidden bg-black">

                <div className="relative min-h-[500px] sm:min-h-[560px] lg:min-h-[600px]">

                    <Image
                        src="/images/products-her.png"
                        alt="KMP Industries products"
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover"
                    />

                    <div className="absolute inset-0 bg-black/55" />

                    <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-black/10" />

                    <div className="relative z-10 flex min-h-[500px] items-end px-6 pb-12 sm:min-h-[560px] sm:px-10 sm:pb-16 lg:min-h-[600px] lg:px-16 lg:pb-20">

                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 30,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.7,
                            }}
                            className="max-w-5xl"
                        >

                            <div className="mb-6 flex items-center gap-3">

                                <span className="h-2 w-2 rounded-full bg-red-500" />

                                <span className="text-xs font-bold uppercase tracking-[2px] text-white/70">
                                    KMP Industries
                                </span>

                            </div>

                            <h1 className="max-w-5xl text-4xl font-semibold leading-[1.02] tracking-[-2px] text-white sm:text-5xl md:text-6xl lg:text-[76px]">

                                Our Products

                                <br />

                                <span className="text-red-500">
                                    Built for Every Need.
                                </span>

                            </h1>

                            <p className="mt-6 max-w-3xl text-sm leading-7 text-white/70 sm:text-base">
                                Explore KMP Industries' range of dependable
                                pumping solutions, motors and water management
                                products engineered for agricultural,
                                residential and industrial applications.
                            </p>

                        </motion.div>

                    </div>

                </div>

            </section>


            {/* =================================================
                PRODUCT AREA
            ================================================= */}

            <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-24">

                <div className="mx-auto max-w-[1380px]">

                    {/* HEADING */}

                    <div className="mb-12">

                        <div className="flex items-center gap-3">

                            <span className="h-2 w-2 rounded-full bg-red-600" />

                            <span className="text-xs font-bold uppercase tracking-[2px] text-gray-400">
                                Product Catalogue
                            </span>

                        </div>

                        <div className="mt-5 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">

                            <h2 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-2px] text-[#151515] sm:text-5xl lg:text-6xl">

                                Reliable products.

                                <br />

                                <span className="text-red-600">
                                    Proven performance.
                                </span>

                            </h2>

                            <p className="max-w-xl text-sm leading-7 text-gray-500">
                                Explore our range of pumping and motor
                                solutions for different water management
                                requirements.
                            </p>

                        </div>

                    </div>


                    {/* MOBILE FILTER */}

                    <button
                        type="button"
                        onClick={() => setMobileFilters(true)}
                        className="mb-6 flex w-full items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-700 lg:hidden"
                    >
                        <TuneIcon
                            sx={{
                                fontSize: 19,
                            }}
                        />

                        Filters
                    </button>


                    {/* MAIN GRID */}

                    <div className="grid gap-12 lg:grid-cols-[250px_1fr]">

                        {/* SIDEBAR */}

                        <aside className="hidden lg:block">

                            <div className="sticky top-28">

                                {/* SEARCH */}

                                <div className="relative">

                                    <SearchIcon
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                                        sx={{
                                            fontSize: 20,
                                        }}
                                    />

                                    <input
                                        type="text"
                                        value={search}
                                        onChange={(e) =>
                                            setSearch(e.target.value)
                                        }
                                        placeholder="Search products..."
                                        className="w-full rounded-full border border-gray-200 bg-white py-3 pl-11 pr-4 text-sm outline-none transition-all focus:border-red-500"
                                    />

                                </div>


                                {/* CATEGORIES */}

                                <div className="mt-10">

                                    <h3 className="text-sm font-bold text-[#151515]">
                                        Categories
                                    </h3>

                                    <div className="mt-5 space-y-3">

                                        {categories.map((category) => (

                                            <button
                                                key={category}
                                                type="button"
                                                onClick={() =>
                                                    setActiveCategory(category)
                                                }
                                                className={`flex w-full items-center gap-3 text-left text-sm transition-colors ${activeCategory === category
                                                    ? "font-bold text-red-600"
                                                    : "text-gray-500 hover:text-[#151515]"
                                                    }`}
                                            >

                                                <span
                                                    className={`h-4 w-4 rounded border ${activeCategory === category
                                                        ? "border-red-600 bg-red-600"
                                                        : "border-gray-300"
                                                        }`}
                                                />

                                                {category}

                                            </button>

                                        ))}

                                    </div>

                                </div>


                                {/* COUNT */}

                                <div className="mt-10 border-t border-gray-200 pt-6">

                                    <p className="text-xs uppercase tracking-[1.5px] text-gray-400">
                                        Showing
                                    </p>

                                    <p className="mt-1 text-2xl font-bold text-[#151515]">
                                        {filteredProducts.length}
                                    </p>

                                    <p className="text-xs text-gray-400">
                                        Products
                                    </p>

                                </div>

                            </div>

                        </aside>


                        {/* PRODUCT LIST */}

                        <div>

                            {/* MOBILE SEARCH */}

                            <div className="relative mb-8 lg:hidden">

                                <SearchIcon
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                                    sx={{
                                        fontSize: 20,
                                    }}
                                />

                                <input
                                    type="text"
                                    value={search}
                                    onChange={(e) =>
                                        setSearch(e.target.value)
                                    }
                                    placeholder="Search products..."
                                    className="w-full rounded-full border border-gray-200 bg-white py-3 pl-11 pr-4 text-sm outline-none focus:border-red-500"
                                />

                            </div>


                            {/* PRODUCTS */}

                            {filteredProducts.length > 0 ? (

                                <div className="grid gap-x-7 gap-y-12 sm:grid-cols-2 xl:grid-cols-3">

                                    {filteredProducts.map(
                                        (product, index) => (

                                            <motion.article
                                                key={product.id}
                                                initial={{
                                                    opacity: 0,
                                                    y: 25,
                                                }}
                                                whileInView={{
                                                    opacity: 1,
                                                    y: 0,
                                                }}
                                                viewport={{
                                                    once: true,
                                                }}
                                                transition={{
                                                    duration: 0.5,
                                                    delay: index * 0.04,
                                                }}
                                                className="group"
                                            >

                                                {/* IMAGE */}

                                                <div className="relative overflow-hidden rounded-[24px] bg-[#f5f5f5]">

                                                    <div className="relative aspect-[4/5]">

                                                        <Image
                                                            src={product.image}
                                                            alt={product.name}
                                                            fill
                                                            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                                                            className="object-contain scale-[1.15] transition-transform duration-700 group-hover:scale-[1.22]"
                                                        />

                                                    </div>

                                                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[1px] text-gray-500 backdrop-blur">
                                                        {product.category}
                                                    </span>

                                                </div>


                                                {/* CONTENT */}

                                                <div className="pt-5">

                                                    <h3 className="text-xl font-bold leading-7 text-[#151515] transition-colors duration-300 group-hover:text-red-600 sm:text-2xl">
                                                        {product.name}
                                                    </h3>

                                                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-500">
                                                        {product.description}
                                                    </p>


                                                    {/* KNOW MORE */}

                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            setSelectedProduct(
                                                                product
                                                            )
                                                        }
                                                        className="mt-5 inline-flex items-center gap-3 rounded-full bg-red-600 py-2 pl-5 pr-2 text-sm font-bold text-white transition-all duration-300 hover:bg-red-500"
                                                    >

                                                        <span>
                                                            Know More
                                                        </span>

                                                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-red-600">
                                                            <ArrowOutwardIcon
                                                                sx={{
                                                                    fontSize: 16,
                                                                }}
                                                            />
                                                        </span>

                                                    </button>

                                                </div>

                                            </motion.article>

                                        )
                                    )}

                                </div>

                            ) : (

                                <div className="rounded-[24px] border border-gray-200 px-6 py-20 text-center">

                                    <p className="text-lg font-bold text-[#151515]">
                                        No products found
                                    </p>

                                    <p className="mt-2 text-sm text-gray-500">
                                        Try another search or category.
                                    </p>

                                </div>

                            )}

                        </div>

                    </div>

                </div>

            </section>


            {/* =================================================
                MOBILE FILTER DRAWER
            ================================================= */}

            {mobileFilters && (

                <div className="fixed inset-0 z-[100] lg:hidden">

                    {/* OVERLAY */}

                    <div
                        className="absolute inset-0 bg-black/50"
                        onClick={() => setMobileFilters(false)}
                    />


                    {/* DRAWER */}

                    <motion.div
                        initial={{
                            x: "100%",
                        }}
                        animate={{
                            x: 0,
                        }}
                        transition={{
                            duration: 0.3,
                        }}
                        className="absolute right-0 top-0 h-full w-[85%] max-w-sm overflow-y-auto bg-white p-6 shadow-2xl"
                    >

                        {/* HEADER */}

                        <div className="flex items-center justify-between">

                            <h3 className="text-xl font-bold text-[#151515]">
                                Filters
                            </h3>

                            <button
                                type="button"
                                onClick={() =>
                                    setMobileFilters(false)
                                }
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100"
                            >

                                <CloseIcon
                                    sx={{
                                        fontSize: 20,
                                    }}
                                />

                            </button>

                        </div>


                        {/* CATEGORIES */}

                        <div className="mt-10">

                            <p className="text-xs font-bold uppercase tracking-[2px] text-gray-400">
                                Categories
                            </p>

                            <div className="mt-5 space-y-4">

                                {categories.map((category) => (

                                    <button
                                        key={category}
                                        type="button"
                                        onClick={() => {
                                            setActiveCategory(category);
                                            setMobileFilters(false);
                                        }}
                                        className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm ${activeCategory === category
                                            ? "bg-red-50 font-bold text-red-600"
                                            : "text-gray-600"
                                            }`}
                                    >

                                        <span
                                            className={`h-4 w-4 rounded border ${activeCategory === category
                                                ? "border-red-600 bg-red-600"
                                                : "border-gray-300"
                                                }`}
                                        />

                                        {category}

                                    </button>

                                ))}

                            </div>

                        </div>

                    </motion.div>

                </div>

            )}


            {/* =================================================
                PRODUCT MODAL
            ================================================= */}

            {selectedProduct && (
                <ProductModal
                    product={selectedProduct}
                    onClose={() =>
                        setSelectedProduct(null)
                    }
                />
            )}

        </main>
    );
}