"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import EngineeringIcon from "@mui/icons-material/Engineering";
import VerifiedIcon from "@mui/icons-material/Verified";
import SolarPowerIcon from "@mui/icons-material/SolarPower";

const features = [
    {
        icon: EngineeringIcon,
        title: "Precision Engineering",
        description:
            "Engineered for dependable performance, efficient operation and long-term reliability.",
    },
    {
        icon: VerifiedIcon,
        title: "Quality Focused",
        description:
            "Consistent quality and engineering standards across our complete product range.",
    },
    {
        icon: SolarPowerIcon,
        title: "Complete Solutions",
        description:
            "Pumps, motors, solar motor solutions and uPVC column pipes for diverse applications.",
    },
];

export default function AboutSection() {
    return (
        <section className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 md:py-28 lg:px-10">

            {/* =====================================================
                BACKGROUND DECORATION
            ===================================================== */}

            <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-red-50/70 blur-3xl" />

            <div className="pointer-events-none absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-blue-50/60 blur-3xl" />


            <div className="relative mx-auto max-w-[1380px]">

                {/* =================================================
                    TOP LABEL
                ================================================= */}

                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-6 flex items-center gap-3"
                >

                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-50 text-red-600">
                        <span className="text-sm">✦</span>
                    </span>

                    <span className="text-xs font-bold uppercase tracking-[2px] text-gray-500">
                        About KMP Industries
                    </span>

                </motion.div>


                {/* =================================================
                    BIG INTRO HEADING
                ================================================= */}

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="max-w-6xl text-4xl font-semibold leading-[1.04] tracking-[-2px] text-[#151515] sm:text-5xl md:text-6xl lg:text-[68px]"
                >
                    Engineering reliable solutions that
                    <span className="text-red-600">
                        {" "}power water management.
                    </span>
                </motion.h2>


                {/* =================================================
                    CONTENT GRID
                ================================================= */}

                <div className="mt-16 grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">

                    {/* =================================================
                        IMAGE SIDE
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

                        {/* Main image */}

                        <div className="group relative h-[470px] overflow-hidden rounded-[30px] sm:h-[560px]">

                            <Image
                                src="/images/hero/indexhero.png"
                                alt="KMP Industries pumping solutions"
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover transition duration-700 group-hover:scale-105"
                            />

                            {/* Image overlay */}

                            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />


                            {/* Bottom text */}

                            <div className="absolute bottom-7 left-7 right-7">

                                <p className="text-xs font-bold uppercase tracking-[2px] text-white/65">
                                    KMP Industries
                                </p>

                                <p className="mt-2 max-w-md text-2xl font-bold leading-tight text-white sm:text-3xl">
                                    Reliable engineering for demanding water applications.
                                </p>

                            </div>

                        </div>


                        {/* =================================================
                            FLOATING RED CARD
                        ================================================= */}

                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 30,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                            }}
                            transition={{
                                delay: 0.3,
                                duration: 0.6,
                            }}
                            className="absolute -bottom-7 right-5 w-[220px] rounded-[22px] bg-red-600 p-6 text-white shadow-2xl shadow-red-600/25 sm:-right-7 sm:w-[250px]"
                        >

                            <p className="text-[10px] font-bold uppercase tracking-[2px] text-white/70">
                                Our Promise
                            </p>

                            <p className="mt-3 text-xl font-bold leading-tight">
                                Built for reliability.
                            </p>

                            <div className="mt-5 h-1 w-10 rounded-full bg-white/70" />

                        </motion.div>


                        {/* Decorative square */}

                        <div className="absolute -left-3 -top-3 -z-10 h-24 w-24 rounded-[20px] border-2 border-red-600/20" />

                    </motion.div>


                    {/* =================================================
                        CONTENT SIDE
                    ================================================= */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            x: 40,
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
                    >

                        {/* Small intro */}

                        <p className="max-w-2xl text-base leading-8 text-gray-500 sm:text-lg">
                            KMP Industries delivers dependable pumping and
                            motor solutions for agriculture, residential and
                            industrial water management. Our focus is on
                            performance, efficiency and long-term reliability.
                        </p>


                        <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
                            Our product range includes borewell and openwell
                            submersible pumps, centrifugal and self-priming
                            monoblock pumps, submersible motors, solar motor
                            solutions and heavy-duty uPVC column pipes.
                        </p>


                        {/* =================================================
                            FEATURES
                        ================================================= */}

                        <div className="mt-10 space-y-0 border-t border-gray-200">

                            {features.map((feature, index) => {
                                const Icon = feature.icon;

                                return (
                                    <motion.div
                                        key={feature.title}
                                        initial={{
                                            opacity: 0,
                                            y: 20,
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                            y: 0,
                                        }}
                                        viewport={{
                                            once: true,
                                        }}
                                        transition={{
                                            delay: index * 0.12,
                                            duration: 0.5,
                                        }}
                                        className="group flex gap-5 border-b border-gray-200 py-6"
                                    >

                                        {/* Icon */}

                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gray-100 text-gray-700 transition-all duration-300 group-hover:bg-red-600 group-hover:text-white">
                                            <Icon
                                                sx={{
                                                    fontSize: 22,
                                                }}
                                            />
                                        </div>


                                        {/* Text */}

                                        <div>

                                            <h3 className="text-base font-bold text-gray-900 sm:text-lg">
                                                {feature.title}
                                            </h3>

                                            <p className="mt-1 max-w-xl text-sm leading-6 text-gray-500">
                                                {feature.description}
                                            </p>

                                        </div>

                                    </motion.div>
                                );
                            })}

                        </div>


                        {/* =================================================
                            CTA
                        ================================================= */}

                        <Link
                            href="/about"
                            className="group mt-9 inline-flex items-center gap-4 rounded-full bg-[#111111] py-2 pl-7 pr-2 text-sm font-bold text-white transition-all duration-300 hover:bg-red-600 sm:text-base"
                        >

                            <span>
                                Discover KMP Industries
                            </span>

                            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-gray-900 transition-transform duration-300 group-hover:rotate-45">
                                <ArrowOutwardIcon
                                    sx={{ fontSize: 19 }}
                                />
                            </span>

                        </Link>

                    </motion.div>

                </div>

            </div>

        </section>
    );
}