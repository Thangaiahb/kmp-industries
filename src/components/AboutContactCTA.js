"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

export default function AboutContactCTA() {
    return (
        <section className="bg-white px-5 py-10 sm:px-8 lg:px-10 lg:py-14">

            <div className="mx-auto max-w-[1380px]">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="relative overflow-hidden rounded-[28px] bg-[#151515] px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20"
                >

                    {/* Decorative red glow */}

                    <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-red-600/20 blur-3xl" />

                    <div className="pointer-events-none absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-red-600/10 blur-3xl" />


                    {/* Content */}

                    <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">

                        <div>

                            {/* Eyebrow */}

                            <div className="flex items-center gap-3">

                                <span className="h-2 w-2 rounded-full bg-red-500" />

                                <span className="text-xs font-bold uppercase tracking-[2px] text-white/50">
                                    Get In Touch
                                </span>

                            </div>


                            {/* Heading */}

                            <h2 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-2px] text-white sm:text-5xl md:text-6xl lg:text-[68px]">

                                Looking for Reliable
                                <br />

                                <span className="text-red-500">
                                    Pumping Solutions?
                                </span>

                            </h2>


                            {/* Description */}

                            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/60 sm:text-base sm:leading-8">

                                Talk to KMP Industries about your pumping,
                                motor and water management requirements.
                                Our team is ready to help you find the right
                                solution for your application.

                            </p>

                        </div>


                        {/* CTA */}

                        <div>

                            <Link
                                href="/contact"
                                className="group inline-flex items-center gap-4 rounded-full bg-red-600 py-3 pl-7 pr-3 text-sm font-bold text-white transition-all duration-300 hover:bg-red-500 hover:shadow-xl hover:shadow-red-600/20"
                            >

                                <span>
                                    Contact KMP Industries
                                </span>


                                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-red-600 transition-transform duration-300 group-hover:rotate-45">

                                    <ArrowOutwardIcon
                                        sx={{
                                            fontSize: 20,
                                        }}
                                    />

                                </span>

                            </Link>

                        </div>

                    </div>


                    {/* Bottom line */}

                    <div className="relative z-10 mt-12 border-t border-white/10 pt-5">

                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

                            <span className="text-xs font-bold uppercase tracking-[2px] text-white/30">
                                KMP Industries
                            </span>

                            <span className="text-xs text-white/30">
                                Engineering · Quality · Reliability
                            </span>

                        </div>

                    </div>

                </motion.div>

            </div>

        </section>
    );
}