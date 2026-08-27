"use client";

import { motion } from "framer-motion";

const journey = [
    {
        year: "01",
        title: "Company Foundation",
        description:
            "KMP Industries began its journey with a focus on delivering dependable engineering solutions for water pumping applications.",
    },
    {
        year: "02",
        title: "Expanding Product Solutions",
        description:
            "The product range expanded across pumps, motors and supporting water management solutions to serve different customer requirements.",
    },
    {
        year: "03",
        title: "Growing Market Reach",
        description:
            "KMP Industries continued building its dealer and customer network across agricultural, residential and industrial markets.",
    },
    {
        year: "04",
        title: "Pumps, Motors & Solar",
        description:
            "The business continues to develop solutions across water pumping, motors and solar-powered applications.",
    },
];

export default function JourneySection() {
    return (
        <section className="bg-[#fafafa] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">

            <div className="mx-auto max-w-[1380px]">

                {/* =================================================
                    HEADER
                ================================================= */}

                <div className="grid gap-8 lg:grid-cols-2">

                    <div>

                        <div className="flex items-center gap-3">

                            <span className="text-xl text-red-600">
                                ✦
                            </span>

                            <span className="text-sm font-bold uppercase tracking-[2px] text-gray-600">
                                Our Journey
                            </span>

                        </div>


                        <h2 className="mt-7 max-w-2xl text-4xl font-semibold leading-[1.02] tracking-[-2px] text-[#222] sm:text-5xl md:text-6xl lg:text-[68px]">

                            Building a Legacy of

                            <span className="text-red-600">
                                {" "}Reliable
                            </span>

                            <br />

                            Engineering Solutions.

                        </h2>

                    </div>


                    <div className="flex items-end">

                        <p className="max-w-xl text-base leading-8 text-gray-600 lg:ml-auto">

                            From dependable water pumping systems to motors
                            and solar-powered solutions, KMP Industries
                            continues to focus on quality, performance and
                            long-term reliability.

                        </p>

                    </div>

                </div>


                {/* =================================================
                    TIMELINE
                ================================================= */}

                <div className="relative mt-20">

                    {/* Vertical Line */}

                    <div className="absolute left-[20px] top-0 hidden h-full w-px bg-gray-300 md:block" />


                    <div className="space-y-10">

                        {journey.map((item, index) => (

                            <motion.div
                                key={item.year}
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
                                    margin: "-80px",
                                }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.08,
                                }}
                                className="relative grid gap-6 md:grid-cols-[120px_40px_1fr] md:gap-0"
                            >

                                {/* Number */}

                                <div className="md:pt-3">

                                    <span className="text-2xl font-bold text-red-600">
                                        {item.year}
                                    </span>

                                </div>


                                {/* Timeline Dot */}

                                <div className="relative hidden md:block">

                                    <span className="absolute left-1/2 top-3 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-[4px] border-red-600 bg-white" />

                                </div>


                                {/* Content Card */}

                                <div className="rounded-[24px] border border-gray-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-9">

                                    <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">

                                        <div>

                                            <h3 className="text-2xl font-bold tracking-[-0.5px] text-[#222] sm:text-3xl">
                                                {item.title}
                                            </h3>

                                            <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
                                                {item.description}
                                            </p>

                                        </div>


                                        <span className="text-5xl font-black tracking-[-3px] text-red-600/10">
                                            {item.year}
                                        </span>

                                    </div>

                                </div>

                            </motion.div>

                        ))}

                    </div>

                </div>

            </div>

        </section>
    );
}