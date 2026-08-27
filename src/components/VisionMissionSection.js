"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function VisionMissionSection() {
    return (
        <section className="bg-white px-5 py-20 sm:px-8 lg:px-10 lg:py-28">

            <div className="mx-auto max-w-[1380px]">

                {/* Section Label */}

                <div className="flex items-center gap-3">

                    <span className="text-xl text-red-600">
                        ✦
                    </span>

                    <span className="text-sm font-bold text-gray-700">
                        Vision & Mission
                    </span>

                </div>


                <div className="mt-8 grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

                    {/* =================================================
                        LEFT
                    ================================================= */}

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >

                        <h2 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-2px] text-[#292929] sm:text-5xl md:text-6xl lg:text-[64px]">

                            Building Reliable
                            <br />

                            <span className="text-red-600">
                                Water & Motor
                            </span>

                            <br />

                            Solutions for Every Need

                        </h2>


                        {/* Vision */}

                        <div className="mt-12 grid gap-5 sm:grid-cols-[180px_1fr] sm:gap-10">

                            <div>

                                <span className="text-2xl font-bold text-red-600">
                                    01
                                </span>

                                <h3 className="mt-2 text-xl font-bold text-red-600">
                                    Vision
                                </h3>

                            </div>


                            <p className="max-w-xl text-base leading-7 text-gray-600">
                                To become a trusted name in water pumping,
                                motor and energy solutions by delivering
                                dependable and efficient products that create
                                lasting value for our customers.
                            </p>

                        </div>


                        {/* Mission */}

                        <div className="mt-10 grid gap-5 border-t border-gray-200 pt-8 sm:grid-cols-[180px_1fr] sm:gap-10">

                            <div>

                                <span className="text-2xl font-bold text-red-600">
                                    02
                                </span>

                                <h3 className="mt-2 text-xl font-bold text-red-600">
                                    Mission
                                </h3>

                            </div>


                            <p className="max-w-xl text-base leading-7 text-gray-600">
                                To provide quality-focused pumps, motors,
                                solar motor solutions and water management
                                products designed for reliable performance
                                across agricultural, residential and
                                industrial applications.
                            </p>

                        </div>

                    </motion.div>


                    {/* =================================================
                        RIGHT IMAGE
                    ================================================= */}

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.7,
                            delay: 0.1,
                        }}
                        className="relative"
                    >

                        <div className="relative aspect-[4/5] overflow-hidden rounded-[28px]">

                            <Image
                                src="/images/about/vision-mission.png"
                                alt="KMP Industries water pumping solutions"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />

                        </div>


                        {/* Floating Card */}

                        <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-black/70 p-5 backdrop-blur-md">

                            <p className="text-xs font-bold uppercase tracking-[2px] text-white/60">
                                KMP Industries
                            </p>

                            <p className="mt-2 text-lg font-semibold text-white">
                                Quality Engineering.
                                <br />
                                Reliable Performance.
                            </p>

                        </div>

                    </motion.div>

                </div>

            </div>

        </section>
    );
}