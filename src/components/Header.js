"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const productLinks = [
    {
        name: "Borewell Submersible Pumps",
        href: "/products/borewell-submersible-pumps",
    },
    {
        name: "Openwell Submersible Pumps",
        href: "/products/openwell-pumps",
    },
    {
        name: "Monoblock Pumps",
        href: "/products/monoblock-pumps",
    },
    {
        name: "Submersible Motors",
        href: "/products/motors",
    },
    {
        name: "uPVC Column Pipes",
        href: "/products/upvc-column-pipes",
    },
];

const navLinks = [
    {
        name: "Home",
        href: "/",
    },
    {
        name: "About Us",
        href: "/about",
    },
    {
        name: "Applications",
        href: "/applications",
    },
    {
        name: "Quality",
        href: "/quality",
    },
    {
        name: "Contact",
        href: "/contact",
    },
];

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [productsOpen, setProductsOpen] = useState(false);

    /* Lock body scroll when mobile menu opens */
    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileOpen]);

    const closeMobileMenu = () => {
        setMobileOpen(false);
        setProductsOpen(false);
    };

    return (
        <>
            {/* =====================================================
                DESKTOP / HERO HEADER
            ===================================================== */}

            <header className="absolute left-0 top-0 z-50 w-full">

                <div className="mx-auto flex h-[90px] max-w-[1380px] items-center justify-between px-5 sm:px-8 lg:px-10">

                    {/* =================================================
                        LOGO
                    ================================================= */}

                    <Link
                        href="/"
                        onClick={closeMobileMenu}
                        className="relative z-50 flex items-center"
                    >
                        <img
                            src="/images/logo/kmp-logo.png"
                            alt="KMP Industries Coimbatore"
                            className="h-12 w-auto object-contain sm:h-14"
                        />
                    </Link>


                    {/* =================================================
                        DESKTOP NAVIGATION
                    ================================================= */}

                    <nav className="hidden items-center gap-7 lg:flex">

                        {/* HOME */}

                        <Link
                            href="/"
                            className="group relative py-4 text-[15px] font-semibold text-white transition duration-300 hover:text-white"
                        >
                            Home

                            <span className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-red-500" />
                        </Link>


                        {/* ABOUT */}

                        <Link
                            href="/about"
                            className="py-4 text-[15px] font-semibold text-white/90 transition duration-300 hover:text-white"
                        >
                            About Us
                        </Link>


                        {/* =================================================
                            PRODUCTS DROPDOWN
                        ================================================= */}

                        <div
                            className="group relative"
                            onMouseEnter={() => setProductsOpen(true)}
                            onMouseLeave={() => setProductsOpen(false)}
                        >

                            <Link
                                href="/products"
                                className="flex items-center gap-1 py-4 text-[15px] font-semibold text-white/90 transition duration-300 hover:text-white"
                            >
                                Products

                                <KeyboardArrowDownIcon
                                    className={`transition-transform duration-300 ${productsOpen
                                        ? "rotate-180"
                                        : ""
                                        }`}
                                    sx={{ fontSize: 18 }}
                                />
                            </Link>


                            {/* DROPDOWN */}

                            <div
                                className={`absolute left-1/2 top-[62px] w-[290px] -translate-x-1/2 rounded-2xl border border-white/20 bg-white p-2 shadow-2xl backdrop-blur-xl transition-all duration-300 ${productsOpen
                                    ? "visible translate-y-0 opacity-100"
                                    : "invisible -translate-y-2 opacity-0"
                                    }`}
                            >

                                {productLinks.map((product) => (
                                    <Link
                                        key={product.href}
                                        href={product.href}
                                        className="group/item flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-red-50 hover:text-red-600"
                                    >

                                        <span>
                                            {product.name}
                                        </span>

                                        <ArrowOutwardIcon
                                            className="opacity-0 transition-all duration-200 group-hover/item:translate-x-1 group-hover/item:opacity-100"
                                            sx={{ fontSize: 16 }}
                                        />

                                    </Link>
                                ))}

                            </div>

                        </div>


                        {/* OTHER NAV LINKS */}

                        {navLinks.slice(2).map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="py-4 text-[15px] font-semibold text-white/90 transition duration-300 hover:text-white"
                            >
                                {item.name}
                            </Link>
                        ))}

                    </nav>


                    {/* =================================================
                        GET A QUOTE
                    ================================================= */}

                    <Link
                        href="/contact"
                        className="hidden items-center gap-3 rounded-full bg-red-600 py-3 pl-6 pr-3 text-sm font-bold text-white shadow-lg shadow-red-600/25 transition-all duration-300 hover:scale-105 hover:bg-red-700 lg:flex"
                    >

                        <span>
                            Get a Quote
                        </span>

                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-red-600 transition-transform duration-300">
                            <ArrowOutwardIcon sx={{ fontSize: 18 }} />
                        </span>

                    </Link>


                    {/* =================================================
                        MOBILE MENU BUTTON
                    ================================================= */}

                    <button
                        type="button"
                        onClick={() => setMobileOpen(true)}
                        aria-label="Open navigation menu"
                        className="relative z-50 flex h-11 w-11 items-center justify-center rounded-full bg-white text-gray-900 shadow-lg lg:hidden"
                    >
                        <MenuIcon />
                    </button>

                </div>
            </header>


            {/* =====================================================
                MOBILE OVERLAY
            ===================================================== */}

            <div
                onClick={closeMobileMenu}
                className={`fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${mobileOpen
                    ? "visible opacity-100"
                    : "invisible opacity-0"
                    }`}
            />


            {/* =====================================================
                MOBILE DRAWER
            ===================================================== */}

            <aside
                className={`fixed right-0 top-0 z-[70] flex h-full w-[88%] max-w-[390px] flex-col bg-white shadow-2xl transition-transform duration-500 ease-out lg:hidden ${mobileOpen
                    ? "translate-x-0"
                    : "translate-x-full"
                    }`}
            >

                {/* MOBILE HEADER */}

                <div className="flex h-[90px] items-center justify-between border-b border-gray-100 px-6">

                    <Link
                        href="/"
                        onClick={closeMobileMenu}
                    >
                        <img
                            src="/images/logo/kmp-logo.png"
                            alt="KMP Industries"
                            className="h-12 w-auto"
                        />
                    </Link>

                    <button
                        type="button"
                        onClick={closeMobileMenu}
                        aria-label="Close navigation menu"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-800 transition hover:bg-red-50 hover:text-red-600"
                    >
                        <CloseIcon />
                    </button>

                </div>


                {/* MOBILE LINKS */}

                <nav className="flex-1 overflow-y-auto px-6 py-7">

                    <Link
                        href="/"
                        onClick={closeMobileMenu}
                        className="flex items-center justify-between border-b border-gray-100 py-5 text-lg font-bold text-gray-900"
                    >
                        Home
                        <ArrowOutwardIcon sx={{ fontSize: 19 }} />
                    </Link>


                    <Link
                        href="/about"
                        onClick={closeMobileMenu}
                        className="flex items-center justify-between border-b border-gray-100 py-5 text-lg font-bold text-gray-900"
                    >
                        About Us
                        <ArrowOutwardIcon sx={{ fontSize: 19 }} />
                    </Link>


                    {/* MOBILE PRODUCTS */}

                    <div className="border-b border-gray-100">

                        <button
                            type="button"
                            onClick={() =>
                                setProductsOpen(!productsOpen)
                            }
                            className="flex w-full items-center justify-between py-5 text-left text-lg font-bold text-gray-900"
                        >
                            Products

                            <KeyboardArrowDownIcon
                                className={`transition-transform duration-300 ${productsOpen
                                    ? "rotate-180 text-red-600"
                                    : ""
                                    }`}
                            />
                        </button>


                        <div
                            className={`overflow-hidden transition-all duration-300 ${productsOpen
                                ? "max-h-[500px] pb-4"
                                : "max-h-0"
                                }`}
                        >

                            {productLinks.map((product) => (
                                <Link
                                    key={product.href}
                                    href={product.href}
                                    onClick={closeMobileMenu}
                                    className="flex items-center justify-between rounded-lg px-3 py-3 text-sm font-medium text-gray-600 transition hover:bg-red-50 hover:text-red-600"
                                >
                                    {product.name}

                                    <ArrowOutwardIcon
                                        sx={{ fontSize: 16 }}
                                    />
                                </Link>
                            ))}

                        </div>

                    </div>


                    {/* APPLICATIONS */}

                    <Link
                        href="/applications"
                        onClick={closeMobileMenu}
                        className="flex items-center justify-between border-b border-gray-100 py-5 text-lg font-bold text-gray-900"
                    >
                        Applications
                        <ArrowOutwardIcon sx={{ fontSize: 19 }} />
                    </Link>


                    {/* QUALITY */}

                    <Link
                        href="/quality"
                        onClick={closeMobileMenu}
                        className="flex items-center justify-between border-b border-gray-100 py-5 text-lg font-bold text-gray-900"
                    >
                        Quality
                        <ArrowOutwardIcon sx={{ fontSize: 19 }} />
                    </Link>


                    {/* CONTACT */}

                    <Link
                        href="/contact"
                        onClick={closeMobileMenu}
                        className="flex items-center justify-between border-b border-gray-100 py-5 text-lg font-bold text-gray-900"
                    >
                        Contact
                        <ArrowOutwardIcon sx={{ fontSize: 19 }} />
                    </Link>


                    {/* MOBILE CTA */}

                    <Link
                        href="/contact"
                        onClick={closeMobileMenu}
                        className="mt-8 flex items-center justify-between rounded-full bg-red-600 px-6 py-3 text-base font-bold text-white shadow-lg shadow-red-600/20"
                    >

                        <span>
                            Get a Quote
                        </span>

                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-red-600">
                            <ArrowOutwardIcon sx={{ fontSize: 19 }} />
                        </span>

                    </Link>

                </nav>


                {/* MOBILE FOOTER */}

                <div className="border-t border-gray-100 px-6 py-6">

                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                        KMP Industries
                    </p>

                    <p className="mt-2 text-sm text-gray-500">
                        Coimbatore, Tamil Nadu
                    </p>

                </div>

            </aside>
        </>
    );
}