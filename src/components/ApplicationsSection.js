"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import AgricultureIcon from "@mui/icons-material/Agriculture";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import FactoryIcon from "@mui/icons-material/Factory";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const applications = [
    {
        number: "01",
        title: "Agricultural",
        subtitle: "IRRIGATION & BOREWELL PUMPING",
        description:
            "Reliable pumping solutions for agricultural irrigation, deep borewell pumping and efficient water distribution.",
        image: "/images/applications/Agricultural.png",
        icon: AgricultureIcon,
    },
    {
        number: "02",
        title: "Residential",
        subtitle: "DOMESTIC & HIGH-RISE WATER SUPPLY",
        description:
            "Efficient water supply solutions for homes, apartments and high-rise residential buildings.",
        image: "/images/applications/Residential.png",
        icon: HomeWorkIcon,
    },
    {
        number: "03",
        title: "Industrial",
        subtitle: "COMMERCIAL & PRESSURE BOOSTING",
        description:
            "Dependable pumping systems for industrial processes, commercial buildings and pressure boosting applications.",
        image: "/images/applications/Industrial.png",
        icon: FactoryIcon,
    },
];

export default function ApplicationsSection() {
    return (
        <section className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 md:py-28 lg:px-10">

            {/* Background decoration */}

            <div className="pointer-events-none absolute right-[-180px] top-[20%] h-[450px] w-[450px] rounded-full bg-red-50 blur-3xl" />

            <div className="relative mx-auto max-w-[1380px]">

                {/* =================================================
                    HEADER
                ================================================= */}

                <div className="grid gap-8 lg:grid-cols-[1fr_0.5fr] lg:items-end">

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

                        {/* Label */}

                        <div className="flex items-center gap-3">

                            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-50 text-red-600">
                                <span className="text-sm">
                                    ✦
                                </span>
                            </span>

                            <span className="text-xs font-bold uppercase tracking-[2px] text-gray-500">
                                Applications & Industries
                            </span>

                        </div>


                        {/* Heading */}

                        <h2 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.04] tracking-[-2px] text-[#151515] sm:text-5xl md:text-6xl lg:text-[68px]">

                            Solutions for
                            <br />

                            <span className="text-red-600">
                                Every Water Need.
                            </span>

                        </h2>

                    </motion.div>


                    {/* Intro */}

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
                        className="max-w-xl text-sm leading-7 text-gray-500 sm:text-base"
                    >
                        From agricultural irrigation to residential water
                        supply and industrial applications, KMP solutions
                        are engineered to perform where reliability matters.
                    </motion.p>

                </div>


                {/* =================================================
                    APPLICATION CARDS
                ================================================= */}

                <div className="mt-16 grid gap-6 lg:grid-cols-3">

                    {applications.map((application, index) => {

                        const Icon = application.icon;

                        return (
                            <motion.article
                                key={application.number}
                                initial={{
                                    opacity: 0,
                                    y: 45,
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
                                    delay: index * 0.12,
                                    duration: 0.65,
                                }}
                                className="group overflow-hidden rounded-[30px] border border-gray-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-red-200 hover:shadow-[0_25px_70px_rgba(0,0,0,0.10)]"
                            >

                                {/* =================================================
                                    IMAGE
                                ================================================= */}

                                <div className="relative h-[330px] overflow-hidden">

                                    <Image
                                        src={application.image}
                                        alt={`${application.title} water pumping solutions`}
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 33vw"
                                        className="object-cover transition duration-700 group-hover:scale-105"
                                    />


                                    {/* Overlay */}

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />


                                    {/* Number */}

                                    <div className="absolute left-6 top-6 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-black/20 text-xs font-bold text-white backdrop-blur-md">
                                        {application.number}
                                    </div>


                                    {/* Icon */}

                                    <div className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full bg-white text-gray-900 shadow-lg transition-all duration-300 group-hover:bg-red-600 group-hover:text-white">

                                        <Icon
                                            sx={{
                                                fontSize: 21,
                                            }}
                                        />

                                    </div>


                                    {/* Image title */}

                                    <div className="absolute bottom-6 left-6 right-6">

                                        <p className="text-[10px] font-bold uppercase tracking-[2px] text-white/65">
                                            {application.subtitle}
                                        </p>

                                        <h3 className="mt-2 text-3xl font-bold text-white">
                                            {application.title}
                                        </h3>

                                    </div>

                                </div>


                                {/* =================================================
                                    CONTENT
                                ================================================= */}

                                <div className="p-7">

                                    <p className="text-sm leading-7 text-gray-500">
                                        {application.description}
                                    </p>


                                    {/* CTA */}

                                    <a
                                        href="/applications"
                                        className="group/link mt-7 inline-flex items-center gap-3 text-sm font-bold text-[#151515] transition-colors duration-300 hover:text-red-600"
                                    >

                                        <span>
                                            Explore Application
                                        </span>

                                        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 transition-all duration-300 group-hover/link:border-red-600 group-hover/link:bg-red-600 group-hover/link:text-white">

                                            <ArrowOutwardIcon
                                                sx={{
                                                    fontSize: 17,
                                                }}
                                            />

                                        </span>

                                    </a>

                                </div>

                            </motion.article>
                        );
                    })}

                </div>


                {/* =================================================
                    BOTTOM STRIP
                ================================================= */}

                <motion.div
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
                        delay: 0.3,
                        duration: 0.6,
                    }}
                    className="mt-10 flex flex-col gap-4 rounded-[24px] bg-[#111111] px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8"
                >

                    <div>

                        <p className="text-xs font-bold uppercase tracking-[2px] text-red-500">
                            KMP Industries
                        </p>

                        <p className="mt-2 text-sm text-white/55">
                            Pumping solutions engineered for agriculture,
                            residential and industrial applications.
                        </p>

                    </div>


                    <a
                        href="/contact"
                        className="group inline-flex shrink-0 items-center gap-3 self-start rounded-full bg-white py-2 pl-6 pr-2 text-sm font-bold text-[#111111] transition-all duration-300 hover:bg-red-600 hover:text-white sm:self-auto"
                    >

                        <span>
                            Talk to Our Team
                        </span>

                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-white transition-transform duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-red-600">

                            <ArrowOutwardIcon
                                sx={{
                                    fontSize: 18,
                                }}
                            />

                        </span>

                    </a>

                </motion.div>

            </div>

        </section>
    );
}