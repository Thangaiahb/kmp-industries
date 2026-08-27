"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import VerifiedIcon from "@mui/icons-material/Verified";
import EngineeringIcon from "@mui/icons-material/Engineering";
import ShieldIcon from "@mui/icons-material/Shield";
import SpeedIcon from "@mui/icons-material/Speed";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const qualityPoints = [
    {
        number: "01",
        title: "ISO 9001 Certified Quality",
        description:
            "Quality-focused processes and precision engineering standards for consistent and dependable product performance.",
        icon: VerifiedIcon,
    },
    {
        number: "02",
        title: "Precision Engineering",
        description:
            "Engineered pumping systems designed for dependable operation across agriculture, residential and industrial applications.",
        icon: EngineeringIcon,
    },
    {
        number: "03",
        title: "Corrosion-Resistant Construction",
        description:
            "Durable materials designed to withstand demanding water pumping environments and long-term usage.",
        icon: ShieldIcon,
    },
    {
        number: "04",
        title: "Performance Tested",
        description:
            "Products are developed with a focus on discharge, head range, efficiency and reliable operating performance.",
        icon: SpeedIcon,
    },
];

export default function QualitySection() {
    return (
        <section className="relative overflow-hidden bg-[#111111] px-5 py-20 text-white sm:px-8 md:py-28 lg:px-10">

            {/* =====================================================
                BACKGROUND
            ===================================================== */}

            <div className="pointer-events-none absolute -left-40 top-1/3 h-[500px] w-[500px] rounded-full bg-red-600/10 blur-3xl" />

            <div className="pointer-events-none absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-red-600/5 blur-3xl" />


            <div className="relative mx-auto max-w-[1380px]">

                {/* =================================================
                    HEADER
                ================================================= */}

                <motion.div
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
                        duration: 0.7,
                    }}
                >

                    <div className="flex items-center gap-3">

                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-white">
                            <span className="text-sm">
                                ✓
                            </span>
                        </span>

                        <span className="text-xs font-bold uppercase tracking-[2px] text-white/50">
                            Quality & Engineering
                        </span>

                    </div>


                    <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_0.5fr] lg:items-end">

                        <h2 className="max-w-5xl text-4xl font-semibold leading-[1.04] tracking-[-2px] sm:text-5xl md:text-6xl lg:text-[68px]">

                            Built Around
                            <br />

                            <span className="text-red-500">
                                Quality & Precision.
                            </span>

                        </h2>


                        <p className="max-w-xl text-sm leading-7 text-white/50 sm:text-base">
                            KMP Industries focuses on dependable engineering,
                            quality-driven manufacturing and reliable
                            performance across its complete product range.
                        </p>

                    </div>

                </motion.div>


                {/* =================================================
                    MAIN GRID
                ================================================= */}

                <div className="mt-16 grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">

                    {/* =================================================
                        IMAGE
                    ================================================= */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            x: -40,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{
                            once: true,
                            margin: "-100px",
                        }}
                        transition={{
                            duration: 0.8,
                        }}
                        className="relative"
                    >

                        <div className="group relative h-[500px] overflow-hidden rounded-[30px] sm:h-[600px]">

                            <Image
                                src="/images/quality-kmp.png"
                                alt="KMP Industries quality and precision engineering"
                                fill
                                sizes="(max-width: 1024px) 100vw, 45vw"
                                className="object-cover transition duration-700 group-hover:scale-105"
                            />


                            {/* Overlay */}

                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />


                            {/* Image content */}

                            <div className="absolute bottom-7 left-7 right-7">

                                <p className="text-[10px] font-bold uppercase tracking-[2px] text-white/60">
                                    Quality First
                                </p>

                                <h3 className="mt-2 max-w-sm text-3xl font-bold leading-tight text-white sm:text-4xl">
                                    Engineered for dependable performance.
                                </h3>

                            </div>

                        </div>


                        {/* =================================================
                            ISO CARD
                        ================================================= */}

                        <motion.div
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
                                delay: 0.25,
                                duration: 0.6,
                            }}
                            className="absolute -bottom-7 right-5 w-[220px] rounded-[22px] bg-red-600 p-6 shadow-2xl shadow-red-600/25 sm:-right-7 sm:w-[245px]"
                        >

                            <div className="flex items-center gap-3">

                                <VerifiedIcon
                                    sx={{
                                        fontSize: 28,
                                    }}
                                />

                                <span className="text-xs font-bold uppercase tracking-[1px]">
                                    Certified
                                </span>

                            </div>

                            <p className="mt-4 text-2xl font-extrabold">
                                ISO 9001
                            </p>

                            <p className="mt-1 text-xs leading-5 text-white/70">
                                Quality-focused manufacturing standards
                            </p>

                        </motion.div>

                    </motion.div>


                    {/* =================================================
                        QUALITY POINTS
                    ================================================= */}

                    <div>

                        <div className="border-t border-white/10">

                            {qualityPoints.map((point, index) => {

                                const Icon = point.icon;

                                return (
                                    <motion.div
                                        key={point.number}
                                        initial={{
                                            opacity: 0,
                                            x: 30,
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                            x: 0,
                                        }}
                                        viewport={{
                                            once: true,
                                        }}
                                        transition={{
                                            delay: index * 0.1,
                                            duration: 0.55,
                                        }}
                                        className="group flex gap-5 border-b border-white/10 py-7 sm:gap-7"
                                    >

                                        {/* Number */}

                                        <span className="w-8 shrink-0 pt-1 text-xs font-bold text-red-500">
                                            {point.number}
                                        </span>


                                        {/* Icon */}

                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-white/60 transition-all duration-300 group-hover:border-red-500 group-hover:bg-red-600 group-hover:text-white">

                                            <Icon
                                                sx={{
                                                    fontSize: 21,
                                                }}
                                            />

                                        </div>


                                        {/* Content */}

                                        <div className="flex-1">

                                            <h3 className="text-xl font-bold text-white sm:text-2xl">
                                                {point.title}
                                            </h3>

                                            <p className="mt-2 max-w-xl text-sm leading-7 text-white/45">
                                                {point.description}
                                            </p>

                                        </div>

                                    </motion.div>
                                );
                            })}

                        </div>


                        {/* =================================================
                            BOTTOM CTA
                        ================================================= */}

                        <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                            <div>

                                <p className="text-xs font-bold uppercase tracking-[2px] text-red-500">
                                    Engineering · Quality · Trust
                                </p>

                                <p className="mt-2 text-sm text-white/40">
                                    Designed to perform. Built to last.
                                </p>

                            </div>


                            <a
                                href="/quality"
                                className="group inline-flex items-center gap-3 self-start rounded-full bg-white py-2 pl-6 pr-2 text-sm font-bold text-[#111111] transition-all duration-300 hover:bg-red-600 hover:text-white"
                            >

                                <span>
                                    Our Quality Standards
                                </span>

                                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-white transition-transform duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-red-600">

                                    <ArrowOutwardIcon
                                        sx={{
                                            fontSize: 18,
                                        }}
                                    />

                                </span>

                            </a>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}