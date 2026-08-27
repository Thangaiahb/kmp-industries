"use client";

import { motion } from "framer-motion";

import EngineeringIcon from "@mui/icons-material/Engineering";
import BoltIcon from "@mui/icons-material/Bolt";
import ShieldIcon from "@mui/icons-material/Shield";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const reasons = [
    {
        number: "01",
        title: "Quality Engineering",
        description:
            "Quality-focused manufacturing and precision engineering standards for consistent and dependable product performance.",
        icon: EngineeringIcon,
    },
    {
        number: "02",
        title: "Energy-Efficient Motors",
        description:
            "Efficient motor solutions designed to deliver reliable pumping performance while reducing unnecessary energy loss.",
        icon: BoltIcon,
    },
    {
        number: "03",
        title: "Durable Construction",
        description:
            "Robust and corrosion-resistant materials designed for demanding agricultural, residential and industrial environments.",
        icon: ShieldIcon,
    },
    {
        number: "04",
        title: "Reliable Support",
        description:
            "A growing dealer and partner network supporting customers with dependable products and service across the region.",
        icon: SupportAgentIcon,
    },
];

export default function WhyChooseSection() {
    return (
        <section className="relative overflow-hidden bg-[#111111] px-5 py-20 text-white sm:px-8 md:py-28 lg:px-10">

            {/* =====================================================
                BACKGROUND DECORATION
            ===================================================== */}

            <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-red-600/10 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-red-600/5 blur-3xl" />


            <div className="relative mx-auto max-w-[1380px]">

                {/* =================================================
                    HEADER
                ================================================= */}

                <div className="grid gap-10 lg:grid-cols-[1fr_0.55fr] lg:items-end">

                    {/* Left */}

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
                                    ✦
                                </span>
                            </span>

                            <span className="text-xs font-bold uppercase tracking-[2px] text-white/50">
                                Why KMP Industries
                            </span>

                        </div>


                        <h2 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.04] tracking-[-2px] sm:text-5xl md:text-6xl lg:text-[68px]">

                            Built on Quality.
                            <br />

                            <span className="text-red-500">
                                Driven by Reliability.
                            </span>

                        </h2>

                    </motion.div>


                    {/* Right intro */}

                    <motion.p
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
                            delay: 0.15,
                            duration: 0.7,
                        }}
                        className="max-w-xl text-sm leading-7 text-white/55 sm:text-base"
                    >
                        From precision engineering to dependable
                        performance, KMP Industries focuses on delivering
                        pumping and motor solutions that customers can rely
                        on for demanding applications.
                    </motion.p>

                </div>


                {/* =================================================
                    CARDS
                ================================================= */}

                <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-4">

                    {reasons.map((reason, index) => {

                        const Icon = reason.icon;

                        return (
                            <motion.div
                                key={reason.number}
                                initial={{
                                    opacity: 0,
                                    y: 40,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                viewport={{
                                    once: true,
                                    margin: "-80px",
                                }}
                                transition={{
                                    delay: index * 0.1,
                                    duration: 0.6,
                                }}
                                className="group relative min-h-[360px] overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.045] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-red-500/40 hover:bg-white/[0.08]"
                            >

                                {/* Background number */}

                                <span className="pointer-events-none absolute -right-3 -top-5 select-none text-[130px] font-black leading-none tracking-[-10px] text-white/[0.035] transition-all duration-500 group-hover:text-red-500/[0.08] group-hover:scale-110">
                                    {reason.number}
                                </span>


                                {/* Top */}

                                <div className="relative z-10 flex items-center justify-between">

                                    <span className="text-xs font-bold tracking-[2px] text-red-500">
                                        {reason.number}
                                    </span>


                                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all duration-300 group-hover:border-red-500 group-hover:bg-red-600 group-hover:text-white">

                                        <Icon
                                            sx={{
                                                fontSize: 21,
                                            }}
                                        />

                                    </div>

                                </div>


                                {/* Content */}

                                <div className="relative z-10 mt-20">

                                    <h3 className="text-2xl font-bold leading-tight text-white">
                                        {reason.title}
                                    </h3>

                                    <p className="mt-4 text-sm leading-7 text-white/50">
                                        {reason.description}
                                    </p>

                                </div>


                                {/* Bottom arrow */}

                                <div className="absolute bottom-7 left-7">

                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/40 transition-all duration-300 group-hover:bg-red-600 group-hover:text-white">

                                        <ArrowOutwardIcon
                                            sx={{
                                                fontSize: 18,
                                            }}
                                        />

                                    </div>

                                </div>


                                {/* Red hover line */}

                                <span className="absolute bottom-0 left-0 h-1 w-0 bg-red-600 transition-all duration-500 group-hover:w-full" />

                            </motion.div>
                        );
                    })}

                </div>


                {/* =================================================
                    TRUST STRIP
                ================================================= */}

                <motion.div
                    initial={{
                        opacity: 0,
                    }}
                    whileInView={{
                        opacity: 1,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        delay: 0.3,
                        duration: 0.7,
                    }}
                    className="mt-12 grid overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.03] sm:grid-cols-2 lg:grid-cols-4"
                >

                    {[
                        ["QUALITY", "Focused Engineering"],
                        ["EFFICIENCY", "Energy-Conscious Solutions"],
                        ["RELIABILITY", "Long-Term Performance"],
                        ["SUPPORT", "Dealer & Customer Network"],
                    ].map(([title, text], index) => (

                        <div
                            key={title}
                            className={`px-6 py-6 ${index !== 3
                                ? "border-b border-white/10 sm:border-r lg:border-b-0"
                                : ""
                                }`}
                        >

                            <p className="text-xs font-bold tracking-[2px] text-red-500">
                                {title}
                            </p>

                            <p className="mt-2 text-sm text-white/45">
                                {text}
                            </p>

                        </div>

                    ))}

                </motion.div>


                {/* =================================================
                    BOTTOM BRAND LINE
                ================================================= */}

                <div className="mt-8 flex items-center justify-between">

                    <div className="flex items-center gap-3">

                        <span className="h-1.5 w-1.5 rounded-full bg-red-600" />

                        <span className="text-[10px] font-bold uppercase tracking-[2px] text-white/30">
                            KMP Industries
                        </span>

                    </div>


                    <span className="hidden text-[10px] font-bold uppercase tracking-[2px] text-white/25 sm:block">
                        Engineering · Quality · Reliability
                    </span>

                </div>

            </div>

        </section>
    );
}