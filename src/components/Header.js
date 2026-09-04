"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

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
        name: "Products",
        href: "/products",
    },
    {
        name: "Solar",
        href: "/solar",
    },
    {
        name: "Contact",
        href: "/contact",
    },
    {
        name: "Blogs",
        href: "/blogs",
    },
];

export default function Header() {

    const pathname = usePathname();

    const [mobileOpen, setMobileOpen] = useState(false);


    /* =========================================================
       LOCK BODY SCROLL WHEN MOBILE MENU IS OPEN
    ========================================================= */

    useEffect(() => {

        document.body.style.overflow = mobileOpen
            ? "hidden"
            : "";

        return () => {
            document.body.style.overflow = "";
        };

    }, [mobileOpen]);


    /* =========================================================
       CLOSE MOBILE MENU
    ========================================================= */

    const closeMobileMenu = () => {
        setMobileOpen(false);
    };


    /* =========================================================
       CHECK ACTIVE PAGE
    ========================================================= */

    const isActive = (href) => {

        if (href === "/") {
            return pathname === "/";
        }

        return pathname.startsWith(href);
    };


    return (
        <>
            {/* =====================================================
                HEADER
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

                        {navLinks.map((item) => {

                            const active = isActive(item.href);

                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="group relative py-4 text-[15px] font-semibold text-white transition duration-300 hover:text-white"
                                >

                                    {item.name}


                                    {/* ===============================
                                        ACTIVE PAGE RED DOT
                                    =============================== */}

                                    {active && (
                                        <span className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-red-500" />
                                    )}

                                </Link>
                            );

                        })}

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


                {/* =================================================
                    MOBILE HEADER
                ================================================= */}

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


                {/* =================================================
                    MOBILE LINKS
                ================================================= */}

                <nav className="flex-1 overflow-y-auto px-6 py-7">

                    {navLinks.map((item) => {

                        const active = isActive(item.href);

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={closeMobileMenu}
                                className={`relative flex items-center justify-between border-b border-gray-100 py-5 text-lg font-bold transition ${active
                                    ? "text-red-600"
                                    : "text-gray-900"
                                    }`}
                            >

                                <span>
                                    {item.name}
                                </span>


                                <div className="flex items-center gap-3">

                                    {/* Active dot */}

                                    {active && (
                                        <span className="h-1.5 w-1.5 rounded-full bg-red-600" />
                                    )}


                                    <ArrowOutwardIcon
                                        sx={{ fontSize: 19 }}
                                    />

                                </div>

                            </Link>
                        );

                    })}


                    {/* =================================================
                        MOBILE CTA
                    ================================================= */}

                    <Link
                        href="/contact"
                        onClick={closeMobileMenu}
                        className="mt-8 flex items-center justify-between rounded-full bg-red-600 px-6 py-3 text-base font-bold text-white shadow-lg shadow-red-600/20"
                    >

                        <span>
                            Get a Quote
                        </span>


                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-red-600">

                            <ArrowOutwardIcon
                                sx={{ fontSize: 19 }}
                            />

                        </span>

                    </Link>

                </nav>


                {/* =================================================
                    MOBILE FOOTER
                ================================================= */}

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