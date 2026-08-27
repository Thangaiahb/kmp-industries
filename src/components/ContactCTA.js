"use client";

import { motion } from "framer-motion";

import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

export default function ContactCTA() {
    return (
        <section className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 md:py-28 lg:px-10">

            <div className="mx-auto max-w-[1380px]">

                {/* =================================================
                    MAIN CTA
                ================================================= */}

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 35,
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
                    className="relative overflow-hidden rounded-[32px] bg-[#111111] px-7 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20"
                >

                    {/* Background decoration */}

                    <div className="pointer-events-none absolute -right-32 -top-32 h-[400px] w-[400px] rounded-full bg-red-600/20 blur-3xl" />

                    <div className="pointer-events-none absolute -bottom-40 left-1/3 h-[350px] w-[350px] rounded-full bg-red-600/10 blur-3xl" />


                    {/* Large background text */}

                    <span className="pointer-events-none absolute -bottom-12 right-5 select-none text-[100px] font-black leading-none tracking-[-8px] text-white/[0.025] sm:text-[150px] lg:text-[200px]">
                        KMP
                    </span>


                    <div className="relative z-10">

                        {/* Label */}

                        <div className="flex items-center gap-3">

                            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-white">
                                <span className="text-sm">
                                    ✦
                                </span>
                            </span>

                            <span className="text-xs font-bold uppercase tracking-[2px] text-white/50">
                                Let's Work Together
                            </span>

                        </div>


                        {/* Heading */}

                        <h2 className="mt-7 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-2px] text-white sm:text-5xl md:text-6xl lg:text-[72px]">

                            Looking for the right
                            <br />

                            <span className="text-red-500">
                                pumping solution?
                            </span>

                        </h2>


                        {/* Description */}

                        <p className="mt-6 max-w-2xl text-sm leading-7 text-white/50 sm:text-base">
                            Talk to the KMP Industries team about pumps,
                            motors, solar pumping solutions and uPVC column
                            pipes for your application.
                        </p>


                        {/* Buttons */}

                        <div className="mt-9 flex flex-col gap-4 sm:flex-row">

                            <a
                                href="/contact"
                                className="group inline-flex items-center justify-center gap-4 rounded-full bg-red-600 py-2 pl-7 pr-2 text-sm font-bold text-white transition-all duration-300 hover:bg-red-500 hover:shadow-xl hover:shadow-red-600/20"
                            >

                                <span>
                                    Get a Quote
                                </span>

                                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-red-600 transition-transform duration-300 group-hover:rotate-45">

                                    <ArrowOutwardIcon
                                        sx={{
                                            fontSize: 19,
                                        }}
                                    />

                                </span>

                            </a>


                            <a
                                href="/products"
                                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:border-white/30 hover:bg-white/10"
                            >
                                Explore Products
                            </a>

                        </div>


                        {/* =================================================
                            PRODUCT STRIP
                        ================================================= */}

                        <div className="mt-14 grid border-t border-white/10 pt-7 sm:grid-cols-2 lg:grid-cols-4">

                            {[
                                "Submersible Pumps",
                                "Monoblock Pumps",
                                "Motors",
                                "Solar Motor & Panels",
                            ].map((product, index) => (

                                <div
                                    key={product}
                                    className={`py-3 ${index !== 3
                                        ? "border-b border-white/10 lg:border-b-0 lg:border-r"
                                        : ""
                                        } lg:px-6 ${index === 0
                                            ? "lg:pl-0"
                                            : ""
                                        }`}
                                >

                                    <p className="text-xs font-bold uppercase tracking-[1px] text-white/70">
                                        {product}
                                    </p>

                                    <p className="mt-1 text-xs text-white/30">
                                        KMP Industries
                                    </p>

                                </div>

                            ))}

                        </div>

                    </div>

                </motion.div>


                {/* =================================================
                    CONTACT INFO
                ================================================= */}

                <div className="mt-8 grid gap-4 sm:grid-cols-2">

                    {/* Phone */}

                    <motion.a
                        href="tel:+919000000000"
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
                            duration: 0.5,
                        }}
                        className="group flex items-center gap-5 rounded-[22px] border border-gray-200 bg-white p-6 transition-all duration-300 hover:border-red-200 hover:shadow-lg"
                    >

                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-600 transition-all duration-300 group-hover:bg-red-600 group-hover:text-white">

                            <PhoneInTalkIcon
                                sx={{
                                    fontSize: 21,
                                }}
                            />

                        </div>

                        <div>

                            <p className="text-[10px] font-bold uppercase tracking-[2px] text-gray-400">
                                Talk to us
                            </p>

                            <p className="mt-1 text-sm font-bold text-[#151515]">
                                +91 90000 00000
                            </p>

                        </div>

                    </motion.a>


                    {/* Email */}

                    <motion.a
                        href="mailto:info@kmpindustries.com"
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
                            delay: 0.1,
                            duration: 0.5,
                        }}
                        className="group flex items-center gap-5 rounded-[22px] border border-gray-200 bg-white p-6 transition-all duration-300 hover:border-red-200 hover:shadow-lg"
                    >

                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-600 transition-all duration-300 group-hover:bg-red-600 group-hover:text-white">

                            <EmailOutlinedIcon
                                sx={{
                                    fontSize: 21,
                                }}
                            />

                        </div>

                        <div>

                            <p className="text-[10px] font-bold uppercase tracking-[2px] text-gray-400">
                                Email us
                            </p>

                            <p className="mt-1 text-sm font-bold text-[#151515]">
                                info@kmpindustries.com
                            </p>

                        </div>

                    </motion.a>

                </div>


                {/* =================================================
                    BOTTOM BRAND LINE
                ================================================= */}

                <div className="mt-8 flex items-center justify-between">

                    <div className="flex items-center gap-3">

                        <span className="h-1.5 w-1.5 rounded-full bg-red-600" />

                        <span className="text-[10px] font-bold uppercase tracking-[2px] text-gray-400">
                            KMP Industries
                        </span>

                    </div>


                    <span className="hidden text-[10px] font-bold uppercase tracking-[2px] text-gray-400 sm:block">
                        Coimbatore · Tamil Nadu · India
                    </span>

                </div>

            </div>

        </section>
    );
}