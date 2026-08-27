"use client";

import Link from "next/link";

import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";

const products = [
    {
        name: "Borewell Submersible Pumps",
        link: "/products/borewell-submersible-pumps",
    },
    {
        name: "Openwell Submersible Pumps",
        link: "/products/openwell-pumps",
    },
    {
        name: "Monoblock Pumps",
        link: "/products/monoblock-pumps",
    },
    {
        name: "Submersible Motors",
        link: "/products/motors",
    },
    {
        name: "Solar Motor & Panels",
        link: "/products/solar",
    },
    {
        name: "uPVC Column Pipes",
        link: "/products/upvc-column-pipes",
    },
];

const companyLinks = [
    {
        name: "Home",
        link: "/",
    },
    {
        name: "About Us",
        link: "/about",
    },
    {
        name: "Products",
        link: "/products",
    },
    {
        name: "Applications",
        link: "/applications",
    },
    {
        name: "Quality",
        link: "/quality",
    },
    {
        name: "Contact",
        link: "/contact",
    },
];

export default function Footer() {
    return (
        <footer className="relative overflow-hidden bg-[#0d0d0d] text-white">

            {/* =====================================================
                BACKGROUND DECORATION
            ===================================================== */}

            <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-red-600/10 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-red-600/5 blur-3xl" />


            <div className="relative mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-10">

                {/* =================================================
                    TOP CTA
                ================================================= */}

                <div className="border-b border-white/10 py-14 sm:py-16 lg:py-20">

                    <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

                        <div>

                            <div className="flex items-center gap-3">

                                <span className="h-2 w-2 rounded-full bg-red-600" />

                                <span className="text-[10px] font-bold uppercase tracking-[2px] text-white/40">
                                    KMP Industries
                                </span>

                            </div>

                            <h2 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-2px] sm:text-5xl md:text-6xl lg:text-[64px]">

                                Reliable water solutions,
                                <br />

                                <span className="text-red-500">
                                    engineered for you.
                                </span>

                            </h2>

                        </div>


                        <Link
                            href="/contact"
                            className="group inline-flex shrink-0 items-center gap-4 self-start rounded-full bg-red-600 py-2 pl-7 pr-2 text-sm font-bold text-white transition-all duration-300 hover:bg-red-500 hover:shadow-xl hover:shadow-red-600/20 lg:self-auto"
                        >

                            <span>
                                Start an Enquiry
                            </span>

                            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-red-600 transition-transform duration-300 group-hover:rotate-45">

                                <ArrowOutwardIcon
                                    sx={{
                                        fontSize: 19,
                                    }}
                                />

                            </span>

                        </Link>

                    </div>

                </div>


                {/* =================================================
                    MAIN FOOTER
                ================================================= */}

                <div className="grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-[1.4fr_0.7fr_1fr_1fr] lg:gap-12 lg:py-16">

                    {/* =================================================
                        COMPANY
                    ================================================= */}

                    <div>

                        <Link
                            href="/"
                            className="inline-block"
                        >

                            <img
                                src="/images/logo/kmp-logo.png"
                                alt="KMP Industries"
                                className="h-auto w-[170px] object-contain"
                            />

                        </Link>


                        <p className="mt-6 max-w-sm text-sm leading-7 text-white/45">
                            KMP Industries provides reliable and
                            energy-efficient pumping solutions, motors,
                            solar pumping solutions and uPVC column pipes
                            for agricultural, residential and industrial
                            applications.
                        </p>


                        {/* Social */}

                        <div className="mt-7 flex items-center gap-3">

                            <a
                                href="#"
                                aria-label="Instagram"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/50 transition-all duration-300 hover:border-red-600 hover:bg-red-600 hover:text-white"
                            >
                                <InstagramIcon
                                    sx={{ fontSize: 18 }}
                                />
                            </a>

                            <a
                                href="#"
                                aria-label="Facebook"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/50 transition-all duration-300 hover:border-red-600 hover:bg-red-600 hover:text-white"
                            >
                                <FacebookIcon
                                    sx={{ fontSize: 18 }}
                                />
                            </a>

                            <a
                                href="#"
                                aria-label="YouTube"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/50 transition-all duration-300 hover:border-red-600 hover:bg-red-600 hover:text-white"
                            >
                                <YouTubeIcon
                                    sx={{ fontSize: 19 }}
                                />
                            </a>

                        </div>

                    </div>


                    {/* =================================================
                        COMPANY LINKS
                    ================================================= */}

                    <div>

                        <h3 className="text-xs font-bold uppercase tracking-[2px] text-white">
                            Company
                        </h3>


                        <ul className="mt-6 space-y-3">

                            {companyLinks.map((item) => (

                                <li key={item.link}>

                                    <Link
                                        href={item.link}
                                        className="group inline-flex items-center gap-2 text-sm text-white/45 transition-colors duration-300 hover:text-white"
                                    >

                                        <span className="h-1 w-0 rounded-full bg-red-600 transition-all duration-300 group-hover:w-2" />

                                        {item.name}

                                    </Link>

                                </li>

                            ))}

                        </ul>

                    </div>


                    {/* =================================================
                        PRODUCTS
                    ================================================= */}

                    <div>

                        <h3 className="text-xs font-bold uppercase tracking-[2px] text-white">
                            Products
                        </h3>


                        <ul className="mt-6 space-y-3">

                            {products.map((product) => (

                                <li key={product.link}>

                                    <Link
                                        href={product.link}
                                        className="group inline-flex items-start gap-2 text-sm leading-5 text-white/45 transition-colors duration-300 hover:text-white"
                                    >

                                        <span className="mt-2 h-1 w-0 shrink-0 rounded-full bg-red-600 transition-all duration-300 group-hover:w-2" />

                                        {product.name}

                                    </Link>

                                </li>

                            ))}

                        </ul>

                    </div>


                    {/* =================================================
                        CONTACT
                    ================================================= */}

                    <div>

                        <h3 className="text-xs font-bold uppercase tracking-[2px] text-white">
                            Contact
                        </h3>


                        <div className="mt-6 space-y-6">

                            {/* Address */}

                            <div className="flex gap-4">

                                <LocationOnOutlinedIcon
                                    sx={{
                                        fontSize: 20,
                                        color: "#ef4444",
                                    }}
                                />

                                <div>

                                    <p className="text-[9px] font-bold uppercase tracking-[2px] text-white/30">
                                        Address
                                    </p>

                                    <p className="mt-2 text-sm leading-6 text-white/50">
                                        No. 32/1, P.N. Palayam Road,
                                        <br />
                                        Ganapathy, Coimbatore,
                                        <br />
                                        Tamil Nadu
                                    </p>

                                </div>

                            </div>


                            {/* Phone */}

                            <a
                                href="tel:+919000000000"
                                className="group flex gap-4"
                            >

                                <PhoneInTalkIcon
                                    sx={{
                                        fontSize: 20,
                                        color: "#ef4444",
                                    }}
                                />

                                <div>

                                    <p className="text-[9px] font-bold uppercase tracking-[2px] text-white/30">
                                        Phone
                                    </p>

                                    <p className="mt-2 text-sm text-white/50 transition-colors group-hover:text-white">
                                        +91 90000 00000
                                    </p>

                                </div>

                            </a>


                            {/* Email */}

                            <a
                                href="mailto:info@kmpindustries.com"
                                className="group flex gap-4"
                            >

                                <EmailOutlinedIcon
                                    sx={{
                                        fontSize: 20,
                                        color: "#ef4444",
                                    }}
                                />

                                <div>

                                    <p className="text-[9px] font-bold uppercase tracking-[2px] text-white/30">
                                        Email
                                    </p>

                                    <p className="mt-2 text-sm text-white/50 transition-colors group-hover:text-white">
                                        info@kmpindustries.com
                                    </p>

                                </div>

                            </a>

                        </div>

                    </div>

                </div>


                {/* =================================================
                    PRODUCT MARQUEE / TRUST LINE
                ================================================= */}

                <div className="overflow-hidden border-y border-white/10 py-5">

                    <div className="flex min-w-max items-center gap-8 text-[10px] font-bold uppercase tracking-[2px] text-white/25">

                        <span>Submersible Pumps</span>

                        <span className="text-red-600">✦</span>

                        <span>Monoblock Pumps</span>

                        <span className="text-red-600">✦</span>

                        <span>Motors</span>

                        <span className="text-red-600">✦</span>

                        <span>Solar Solutions</span>

                        <span className="text-red-600">✦</span>

                        <span>uPVC Column Pipes</span>

                        <span className="text-red-600">✦</span>

                        <span>Quality Engineering</span>

                    </div>

                </div>


                {/* =================================================
                    FOOTER BOTTOM
                ================================================= */}

                <div className="flex flex-col gap-4 py-7 sm:flex-row sm:items-center sm:justify-between">

                    <p className="text-xs text-white/30">
                        © {new Date().getFullYear()} KMP Industries.
                        All Rights Reserved.
                    </p>


                    <div className="flex flex-wrap gap-5">

                        <Link
                            href="/privacy-policy"
                            className="text-xs text-white/30 transition-colors hover:text-white"
                        >
                            Privacy Policy
                        </Link>

                        <Link
                            href="/terms"
                            className="text-xs text-white/30 transition-colors hover:text-white"
                        >
                            Terms & Conditions
                        </Link>

                    </div>

                </div>

            </div>


            {/* Bottom red line */}

            <div className="h-1 bg-gradient-to-r from-red-700 via-red-500 to-transparent" />

        </footer>
    );
}