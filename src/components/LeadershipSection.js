"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function LeadershipSection() {
    return (
        <section className="bg-white px-5 py-20 sm:px-8 lg:px-10 lg:py-28">

            <div className="mx-auto max-w-[1380px]">

                <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-20">

                    {/* =================================================
                        LEFT
                    ================================================= */}

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >

                        <div className="flex items-center gap-3">

                            <span className="text-xl text-red-600">
                                ✦
                            </span>

                            <span className="text-sm font-bold uppercase tracking-[2px] text-gray-600">
                                About KMP
                            </span>

                        </div>


                        <h2 className="mt-7 text-4xl font-semibold leading-[1.02] tracking-[-2px] text-[#222] sm:text-5xl md:text-6xl lg:text-[68px]">

                            Driven by

                            <span className="text-red-600">
                                {" "}Quality
                            </span>

                            <br />

                            Built for Reliability

                        </h2>


                        {/* Image */}

                        <div className="relative mt-10 aspect-[4/3] overflow-hidden rounded-[26px] bg-gray-100">

                            <Image
                                src="/images/about/kmp-leadership.webp"
                                alt="KMP Industries"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 45vw"
                            />

                        </div>

                    </motion.div>


                    {/* =================================================
                        RIGHT CONTENT
                    ================================================= */}

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.7,
                            delay: 0.1,
                        }}
                        className="lg:pt-16"
                    >

                        <p className="text-lg leading-8 text-gray-700 sm:text-xl">

                            KMP Industries is focused on delivering dependable
                            engineering solutions for water pumping, motors
                            and energy applications.

                        </p>


                        <p className="mt-7 text-base leading-8 text-gray-600">

                            Our approach combines practical engineering,
                            quality-focused manufacturing and a commitment
                            to reliable product performance. We serve
                            agricultural, residential and industrial
                            applications with solutions designed for
                            demanding operating conditions.

                        </p>


                        <p className="mt-7 text-base leading-8 text-gray-600">

                            From pumps and motors to solar-powered solutions
                            and uPVC column pipes, our product portfolio is
                            built around the needs of customers who depend
                            on consistent performance.

                        </p>


                        {/* Highlight */}

                        <div className="mt-10 border-l-4 border-red-600 bg-[#fafafa] px-6 py-6 sm:px-8">

                            <p className="text-xl font-semibold leading-8 text-[#222] sm:text-2xl">

                                Reliable engineering for
                                <span className="text-red-600">
                                    {" "}every water need.
                                </span>

                            </p>

                        </div>


                        {/* Small values */}

                        <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-gray-200 pt-8">

                            <div>

                                <span className="text-xs font-bold uppercase tracking-[2px] text-red-600">
                                    01
                                </span>

                                <h3 className="mt-2 text-lg font-bold text-[#222]">
                                    Engineering
                                </h3>

                                <p className="mt-1 text-sm leading-6 text-gray-500">
                                    Precision-focused solutions
                                </p>

                            </div>


                            <div>

                                <span className="text-xs font-bold uppercase tracking-[2px] text-red-600">
                                    02
                                </span>

                                <h3 className="mt-2 text-lg font-bold text-[#222]">
                                    Reliability
                                </h3>

                                <p className="mt-1 text-sm leading-6 text-gray-500">
                                    Built for long-term use
                                </p>

                            </div>


                            <div>

                                <span className="text-xs font-bold uppercase tracking-[2px] text-red-600">
                                    03
                                </span>

                                <h3 className="mt-2 text-lg font-bold text-[#222]">
                                    Efficiency
                                </h3>

                                <p className="mt-1 text-sm leading-6 text-gray-500">
                                    Performance-conscious design
                                </p>

                            </div>


                            <div>

                                <span className="text-xs font-bold uppercase tracking-[2px] text-red-600">
                                    04
                                </span>

                                <h3 className="mt-2 text-lg font-bold text-[#222]">
                                    Support
                                </h3>

                                <p className="mt-1 text-sm leading-6 text-gray-500">
                                    Customer-focused service
                                </p>

                            </div>

                        </div>

                    </motion.div>

                </div>

            </div>

        </section>
    );
}