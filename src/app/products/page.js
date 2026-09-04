"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import SearchIcon from "@mui/icons-material/Search";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import TuneIcon from "@mui/icons-material/Tune";
import CloseIcon from "@mui/icons-material/Close";

/* =========================================================
   PRODUCTS
========================================================= */

const products = [
    {
        id: 1,
        name: "V3 Submersible Pump",
        category: "Submersible Pumps",
        image: "/images/products/v3-submersible.jpeg",
        description:
            "Reliable submersible pumping solution designed for dependable water pumping applications.",
        link: "/products/borewell-submersible-pumps",
    },

    {
        id: 2,
        name: "V4 Submersible Pump",
        category: "Submersible Pumps",
        image: "/images/products/v4-submersible.jpeg",
        description:
            "Dependable submersible pump designed for efficient and consistent water pumping performance.",
        link: "/products/borewell-submersible-pumps",
    },

    {
        id: 3,
        name: "V4 S.S. Submersible Pump",
        category: "Submersible Pumps",
        image: "/images/products/v4-ss-submersible.jpeg",
        description:
            "Stainless steel submersible pumping solution designed for durability and reliable operation.",
        link: "/products/stainless-steel-borewell-submersible-pumps",
    },

    {
        id: 4,
        name: "V4 S.S. Submersible Pump - 1",
        category: "Submersible Pumps",
        image: "/images/products/v4-ss-submersible-1.jpeg",
        description:
            "Stainless steel submersible pump designed for dependable water pumping applications.",
        link: "/products/stainless-steel-borewell-submersible-pumps",
    },

    {
        id: 5,
        name: "V5 Submersible Pump",
        category: "Submersible Pumps",
        image: "/images/products/v5-submersible.jpeg",
        description:
            "Reliable V5 submersible pumping solution designed for consistent water delivery.",
        link: "/products/borewell-submersible-pumps",
    },

    {
        id: 6,
        name: "V5 Submersible Pump - 1",
        category: "Submersible Pumps",
        image: "/images/products/v5-submersible-1.jpeg",
        description:
            "V5 submersible pump designed for reliable performance across water pumping applications.",
        link: "/products/borewell-submersible-pumps",
    },

    {
        id: 7,
        name: "V5 Submersible Pump - 2",
        category: "Submersible Pumps",
        image: "/images/products/v5-submersible-2.jpeg",
        description:
            "Dependable V5 submersible pumping solution engineered for consistent operation.",
        link: "/products/borewell-submersible-pumps",
    },

    {
        id: 8,
        name: "V6 Submersible Pump",
        category: "Submersible Pumps",
        image: "/images/products/v6-rf.jpeg",
        description:
            "V6 submersible pump designed for reliable water pumping and dependable performance.",
        link: "/products/borewell-submersible-pumps",
    },

    {
        id: 9,
        name: "V6 Single Phase",
        category: "Submersible Pumps",
        image: "/images/products/v6-single-phase.jpeg",
        description:
            "Single phase V6 submersible pumping solution designed for dependable water supply applications.",
        link: "/products/borewell-submersible-pumps",
    },

    {
        id: 10,
        name: "V6 SS Models",
        category: "Submersible Pumps",
        image: "/images/products/v6-ss-models.jpeg",
        description:
            "Stainless steel V6 pumping models designed for durable and reliable operation.",
        link: "/products/stainless-steel-borewell-submersible-pumps",
    },

    {
        id: 11,
        name: "V6 Submersible Pump - M/F",
        category: "Submersible Pumps",
        image: "/images/products/v6-mf.jpeg",
        description:
            "V6 submersible pump solution designed for dependable water pumping applications.",
        link: "/products/borewell-submersible-pumps",
    },

    {
        id: 12,
        name: "V6 Submersible Pump - 50 ft",
        category: "Submersible Pumps",
        image: "/images/products/v6-50ft.jpeg",
        description:
            "V6 submersible pumping solution designed for reliable water pumping requirements.",
        link: "/products/borewell-submersible-pumps",
    },


    /* =========================================================
       OPENWELL
    ========================================================= */

    {
        id: 13,
        name: "Single Phase Openwell Submersible Pump",
        category: "Openwell Pumps",
        image: "/images/products/openwell-1-phase.jpeg",
        description:
            "Single phase openwell submersible pumping solution for dependable domestic and agricultural water supply.",
        link: "/products/single-phase-openwell-submersible-pumps",
    },

    {
        id: 14,
        name: "Horizontal Openwell Economic",
        category: "Openwell Pumps",
        image: "/images/products/horizontal-openwell-economic.jpeg",
        description:
            "Horizontal openwell pumping solution designed for reliable and economical water pumping.",
        link: "/products/single-phase-openwell-submersible-pumps",
    },

    {
        id: 15,
        name: "Horizontal Openwell 3 Phase",
        category: "Openwell Pumps",
        image: "/images/products/horizontal-openwell-3-phase.jpeg",
        description:
            "Three phase horizontal openwell pumping solution designed for dependable water supply.",
        link: "/products/three-phase-vertical-openwell-submersible-pumps",
    },

    {
        id: 16,
        name: "Vertical Openwell",
        category: "Openwell Pumps",
        image: "/images/products/vertical-openwell.jpeg",
        description:
            "Vertical openwell pumping solution designed for reliable water pumping applications.",
        link: "/products/three-phase-vertical-openwell-submersible-pumps",
    },

    {
        id: 17,
        name: "Vertical Openwell 1 Phase",
        category: "Openwell Pumps",
        image: "/images/products/vertical-openwell-1-phase.jpeg",
        description:
            "Single phase vertical openwell pump designed for dependable water supply applications.",
        link: "/products/single-phase-openwell-submersible-pumps",
    },

    {
        id: 18,
        name: "Vertical Openwell - 1",
        category: "Openwell Pumps",
        image: "/images/products/vertical-openwell-1.jpeg",
        description:
            "Reliable vertical openwell pumping solution for consistent water delivery.",
        link: "/products/three-phase-vertical-openwell-submersible-pumps",
    },


    /* =========================================================
       MONOBLOCK / SURFACE
    ========================================================= */

    {
        id: 19,
        name: "Self Priming Pump",
        category: "Monoblock Pumps",
        image: "/images/products/self-priming.jpeg",
        description:
            "Self priming pumping solution designed for reliable and efficient water transfer.",
        link: "/products/self-priming-monoblock-pumps",
    },

    {
        id: 20,
        name: "Magic Suction",
        category: "Monoblock Pumps",
        image: "/images/products/magic-suction.jpeg",
        description:
            "Efficient pumping solution designed for dependable suction and water delivery.",
        link: "/products/self-priming-monoblock-pumps",
    },

    {
        id: 21,
        name: "DMS Pump",
        category: "Monoblock Pumps",
        image: "/images/products/dms.jpeg",
        description:
            "Reliable pumping solution designed for consistent performance across water applications.",
        link: "/products/centrifugal-monoblock-pumps",
    },

    {
        id: 22,
        name: "Centrifugal Monoblock - 1 Phase",
        category: "Monoblock Pumps",
        image: "/images/products/centrifugal-mono-block-1-phase.jpeg",
        description:
            "Single phase centrifugal monoblock pump designed for reliable water pumping performance.",
        link: "/products/centrifugal-monoblock-pumps",
    },

    {
        id: 23,
        name: "Centrifugal Monoblock - 3 Phase",
        category: "Monoblock Pumps",
        image: "/images/products/centrifugal-mono-block-3-phase.jpeg",
        description:
            "Three phase centrifugal monoblock pump designed for dependable water pumping applications.",
        link: "/products/centrifugal-monoblock-pumps",
    },


    /* =========================================================
       DEWATERING / SEWAGE
    ========================================================= */

    {
        id: 24,
        name: "Dewatering Sewage Pump",
        category: "Dewatering & Sewage",
        image: "/images/products/dewatering-sewage.jpeg",
        description:
            "Dewatering and sewage pumping solution designed for reliable water removal applications.",
        link: "/products",
    },

    {
        id: 25,
        name: "Dewatering Cutter Sewage Pump",
        category: "Dewatering & Sewage",
        image: "/images/products/dewatering-cutter-sewage.jpeg",
        description:
            "Cutter sewage pumping solution designed for demanding dewatering and wastewater applications.",
        link: "/products",
    },


    /* =========================================================
       MOTOR
    ========================================================= */

    {
        id: 26,
        name: "V5 Motor",
        category: "Motors",
        image: "/images/products/v5-motor.jpeg",
        description:
            "Reliable motor solution designed for dependable power delivery in pumping applications.",
        link: "/products/motors",
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


    /* =========================================================
       FILTER
    ========================================================= */

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


            {/* =====================================================
                HERO
            ===================================================== */}

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


                    {/* Overlay */}

                    <div className="absolute inset-0 bg-black/55" />

                    <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-black/10" />


                    {/* Content */}

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


            {/* =====================================================
                PRODUCT AREA
            ===================================================== */}

            <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-24">

                <div className="mx-auto max-w-[1380px]">


                    {/* =================================================
                        HEADING
                    ================================================= */}

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


                    {/* =================================================
                        MOBILE FILTER
                    ================================================= */}

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


                    {/* =================================================
                        MAIN GRID
                    ================================================= */}

                    <div className="grid gap-12 lg:grid-cols-[250px_1fr]">


                        {/* =================================================
                            SIDEBAR
                        ================================================= */}

                        <aside className="hidden lg:block">

                            <div className="sticky top-28">


                                {/* Search */}

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


                                {/* Categories */}

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


                                {/* Count */}

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


                        {/* =================================================
                            PRODUCT LIST
                        ================================================= */}

                        <div>


                            {/* Mobile Search */}

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


                            {/* Products */}

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



                                                {/* Image */}
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

                                                    {/* Category */}
                                                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[1px] text-gray-500 backdrop-blur">
                                                        {product.category}
                                                    </span>

                                                </div>


                                                {/* Content */}

                                                <div className="pt-5">

                                                    <h3 className="text-xl font-bold leading-7 text-[#151515] transition-colors duration-300 group-hover:text-red-600 sm:text-2xl">
                                                        {product.name}
                                                    </h3>


                                                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-500">
                                                        {product.description}
                                                    </p>


                                                    {/* Know More */}

                                                    <Link
                                                        href={product.link}
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

                                                    </Link>

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


            {/* =====================================================
                MOBILE FILTER DRAWER
            ===================================================== */}

            {mobileFilters && (

                <div className="fixed inset-0 z-[100] lg:hidden">

                    {/* Overlay */}

                    <div
                        className="absolute inset-0 bg-black/50"
                        onClick={() => setMobileFilters(false)}
                    />


                    {/* Drawer */}

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

                        {/* Header */}

                        <div className="flex items-center justify-between">

                            <h3 className="text-xl font-bold text-[#151515]">
                                Filters
                            </h3>


                            <button
                                type="button"
                                onClick={() => setMobileFilters(false)}
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100"
                            >

                                <CloseIcon
                                    sx={{
                                        fontSize: 20,
                                    }}
                                />

                            </button>

                        </div>


                        {/* Categories */}

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

        </main>
    );
}