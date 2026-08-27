"use client";

import { motion } from "framer-motion";

const stats = [
    {
        number: "20+",
        label: "Years of Industry Experience",
    },
    {
        number: "50+",
        label: "Products & Solutions",
    },
    {
        number: "100+",
        label: "Dealers & Partners",
    },
    {
        number: "25+",
        label: "Applications Served",
    },
];

export default function AboutStatsSection() {
    return (
        <section className="bg-[#fafafa] px-5 py-20 sm:px-8 lg:px-10 lg:py-24">

            <div className="mx-auto max-w-[1380px]">

                {/* =================================================
                    HEADING
                ================================================= */}

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl"
                >

                    <div className="flex items-center gap-3">

                        <span className="text-xl text-red-600">
                            ✦
                        </span>

                        <span className="text-sm font-bold uppercase tracking-[2px] text-gray-600">
                            KMP By The Numbers
                        </span>

                    </div>


                    <h2 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-[-2px] text-[#222] sm:text-5xl md:text-6xl">

                        Experience That
                        <span className="text-red-600">
                            {" "}Delivers.
                        </span>

                    </h2>


                    <p className="mt-6 max-w-2xl text-base leading-7 text-gray-600">
                        Our growing product portfolio and customer network
                        reflect our commitment to dependable engineering,
                        quality and long-term performance.
                    </p>

                </motion.div>


                {/* =================================================
                    STATS
                ================================================= */}

                <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

                    {stats.map((stat, index) => (

                        <motion.div
                            key={stat.label}
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
                                duration: 0.5,
                                delay: index * 0.08,
                            }}
                            className="group relative flex min-h-[220px] flex-col items-center justify-center overflow-hidden rounded-[24px] border border-gray-200 bg-white px-6 py-10 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                        >

                            {/* Background Number */}

                            <span className="pointer-events-none absolute -right-2 top-1/2 -translate-y-1/2 text-[100px] font-black leading-none tracking-[-6px] text-red-600/[0.035] transition duration-300 group-hover:text-red-600/[0.07]">
                                {stat.number}
                            </span>


                            {/* Number */}

                            <div className="relative z-10">

                                <span className="text-5xl font-extrabold tracking-[-2px] text-[#222] sm:text-6xl">
                                    {stat.number.replace("+", "")}
                                </span>

                                <span className="text-4xl font-bold text-red-600 sm:text-5xl">
                                    +
                                </span>

                            </div>


                            {/* Label */}

                            <p className="relative z-10 mt-5 max-w-[190px] text-base font-medium leading-6 text-gray-600">
                                {stat.label}
                            </p>


                            {/* Bottom line */}

                            <span className="absolute bottom-0 left-1/2 h-[3px] w-0 -translate-x-1/2 bg-red-600 transition-all duration-300 group-hover:w-16" />

                        </motion.div>

                    ))}

                </div>

            </div>

        </section>
    );
}