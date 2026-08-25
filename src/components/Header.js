"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    MapPin,
    Mail,
    Phone,
    ChevronDown,
    X,
} from "lucide-react";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [productsOpen, setProductsOpen] = useState(false);

    /* =========================================
       SCROLL EFFECT
    ========================================= */

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    /* =========================================
       CLOSE MOBILE MENU
    ========================================= */

    const closeMenu = () => {
        setMenuOpen(false);
    };


    /* =========================================
       BODY SCROLL LOCK
    ========================================= */

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);


    return (
        <>
            {/* =================================================
                TOP BAR
            ================================================= */}

            <div className="kmp-topbar">

                <div className="container kmp-topbar-inner">

                    {/* Left */}

                    <div className="kmp-topbar-left">

                        <span>
                            <MapPin size={14} />
                            Coimbatore, Tamil Nadu
                        </span>

                        <span>
                            <Mail size={14} />
                            info@kmpindustries.com
                        </span>

                    </div>


                    {/* Right */}

                    <div className="kmp-topbar-right">

                        <span>
                            <Phone size={14} />
                            +91 98765 43210
                        </span>

                        <Link href="/contact">
                            Dealer Enquiry →
                        </Link>

                    </div>

                </div>

            </div>


            {/* =================================================
                MAIN HEADER
            ================================================= */}

            <header
                className={`kmp-header ${scrolled ? "kmp-header-scrolled" : ""
                    }`}
            >

                <div className="container kmp-header-container">

                    {/* =================================================
                        LOGO
                    ================================================= */}

                    <Link
                        href="/"
                        className="kmp-logo"
                        onClick={closeMenu}
                    >
                        <Image
                            src="/images/logo/kmp-logo.png"
                            alt="KMP Industries Coimbatore"
                            width={160}
                            height={60}
                            priority
                        />
                    </Link>


                    {/* =================================================
                        DESKTOP NAVIGATION
                    ================================================= */}

                    <nav className="kmp-desktop-nav">

                        <NavLink href="/">
                            Home
                        </NavLink>

                        <NavLink href="/about">
                            About Us
                        </NavLink>


                        {/* PRODUCTS */}

                        <div
                            className="kmp-products-dropdown"
                            onMouseEnter={() => setProductsOpen(true)}
                            onMouseLeave={() => setProductsOpen(false)}
                        >

                            <Link
                                href="/products"
                                className="kmp-products-trigger"
                            >
                                Products

                                <ChevronDown
                                    size={15}
                                    className={
                                        productsOpen
                                            ? "kmp-arrow-open"
                                            : ""
                                    }
                                />
                            </Link>


                            {/* Dropdown */}

                            <div
                                className={`kmp-dropdown-menu ${productsOpen
                                    ? "kmp-dropdown-visible"
                                    : ""
                                    }`}
                            >

                                <DropdownLink
                                    href="/products/borewell-submersible-pumps"
                                >
                                    Borewell Submersible Pumps
                                </DropdownLink>

                                <DropdownLink
                                    href="/products/openwell-pumps"
                                >
                                    Openwell Submersible Pumps
                                </DropdownLink>

                                <DropdownLink
                                    href="/products/monoblock-pumps"
                                >
                                    Monoblock Pumps
                                </DropdownLink>

                                <DropdownLink
                                    href="/products/motors"
                                >
                                    Submersible Motors
                                </DropdownLink>

                                <DropdownLink
                                    href="/products/upvc-column-pipes"
                                >
                                    uPVC Column Pipes
                                </DropdownLink>

                            </div>

                        </div>


                        <NavLink href="/applications">
                            Applications
                        </NavLink>

                        <NavLink href="/quality">
                            Quality
                        </NavLink>

                        <NavLink href="/contact">
                            Contact
                        </NavLink>


                        {/* GET A QUOTE */}

                        <Link
                            href="/contact"
                            className="header-quote-btn"
                        >
                            <span className="quote-text">
                                Get a Quote
                            </span>

                            <span className="quote-arrow">
                                →
                            </span>
                        </Link>

                    </nav>


                    {/* =================================================
                        MOBILE HAMBURGER
                    ================================================= */}

                    <button
                        type="button"
                        className={`kmp-mobile-toggle ${menuOpen
                            ? "kmp-mobile-toggle-open"
                            : ""
                            }`}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label={
                            menuOpen
                                ? "Close menu"
                                : "Open menu"
                        }
                        aria-expanded={menuOpen}
                    >

                        <span></span>
                        <span></span>
                        <span></span>

                    </button>

                </div>


                {/* =================================================
                    MOBILE OVERLAY
                ================================================= */}

                <div
                    className={`kmp-mobile-overlay ${menuOpen
                        ? "kmp-mobile-overlay-visible"
                        : ""
                        }`}
                    onClick={closeMenu}
                />


                {/* =================================================
                    MOBILE MENU
                ================================================= */}

                <aside
                    className={`kmp-mobile-menu ${menuOpen
                        ? "kmp-mobile-menu-open"
                        : ""
                        }`}
                >

                    {/* Mobile Header */}

                    <div className="kmp-mobile-menu-header">

                        <Link
                            href="/"
                            onClick={closeMenu}
                        >
                            <Image
                                src="/images/logo/kmp-logo.png"
                                alt="KMP Industries"
                                width={130}
                                height={50}
                            />
                        </Link>


                        <button
                            type="button"
                            onClick={closeMenu}
                            className="kmp-mobile-close"
                            aria-label="Close menu"
                        >
                            <X size={23} />
                        </button>

                    </div>


                    {/* Mobile Navigation */}

                    <div className="kmp-mobile-links">

                        <MobileLink
                            href="/"
                            onClick={closeMenu}
                        >
                            Home
                        </MobileLink>

                        <MobileLink
                            href="/about"
                            onClick={closeMenu}
                        >
                            About Us
                        </MobileLink>


                        {/* Mobile Products */}

                        <div className="kmp-mobile-products">

                            <MobileLink
                                href="/products"
                                onClick={closeMenu}
                            >
                                Products
                            </MobileLink>

                            <div className="kmp-mobile-submenu">

                                <Link
                                    href="/products/borewell-submersible-pumps"
                                    onClick={closeMenu}
                                >
                                    Borewell Submersible Pumps
                                </Link>

                                <Link
                                    href="/products/openwell-pumps"
                                    onClick={closeMenu}
                                >
                                    Openwell Submersible Pumps
                                </Link>

                                <Link
                                    href="/products/monoblock-pumps"
                                    onClick={closeMenu}
                                >
                                    Monoblock Pumps
                                </Link>

                                <Link
                                    href="/products/motors"
                                    onClick={closeMenu}
                                >
                                    Submersible Motors
                                </Link>

                                <Link
                                    href="/products/upvc-column-pipes"
                                    onClick={closeMenu}
                                >
                                    uPVC Column Pipes
                                </Link>

                            </div>

                        </div>


                        <MobileLink
                            href="/applications"
                            onClick={closeMenu}
                        >
                            Applications
                        </MobileLink>

                        <MobileLink
                            href="/quality"
                            onClick={closeMenu}
                        >
                            Quality
                        </MobileLink>

                        <MobileLink
                            href="/contact"
                            onClick={closeMenu}
                        >
                            Contact
                        </MobileLink>


                        {/* Mobile Get A Quote */}

                        <Link
                            href="/contact"
                            onClick={closeMenu}
                            className="mobile-quote-btn"
                        >
                            <span>
                                Get a Quote
                            </span>

                            <span>
                                →
                            </span>
                        </Link>

                    </div>


                    {/* Mobile Contact */}

                    <div className="kmp-mobile-contact">

                        <div>
                            <MapPin size={16} />
                            <span>
                                Coimbatore, Tamil Nadu
                            </span>
                        </div>

                        <div>
                            <Mail size={16} />
                            <span>
                                info@kmpindustries.com
                            </span>
                        </div>

                        <div>
                            <Phone size={16} />
                            <span>
                                +91 98765 43210
                            </span>
                        </div>

                    </div>

                </aside>

            </header>
        </>
    );
}


/* =========================================================
   DESKTOP NAV LINK
========================================================= */

function NavLink({ href, children }) {
    return (
        <Link
            href={href}
            className="kmp-nav-link"
        >
            {children}

            <span className="kmp-nav-line"></span>
        </Link>
    );
}


/* =========================================================
   DROPDOWN LINK
========================================================= */

function DropdownLink({ href, children }) {
    return (
        <Link
            href={href}
            className="kmp-dropdown-link"
        >
            <span>{children}</span>

            <span className="dropdown-arrow">
                →
            </span>
        </Link>
    );
}


/* =========================================================
   MOBILE LINK
========================================================= */

function MobileLink({
    href,
    children,
    onClick,
}) {
    return (
        <Link
            href={href}
            onClick={onClick}
            className="kmp-mobile-link"
        >
            {children}

            <span>
                →
            </span>
        </Link>
    );
}