"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const leaders = [
    {
        name: "Mr Krishnasamy Natrajan",
        role: "Founder & Chairman",
        image: "/images/about/founder.png",
    },
    {
        name: "Mr Hari Narayanan",
        role: "Director",
        image: "/images/about/director.png",
    },
    {
        name: "Mr Madhana Gopal",
        role: "Managing Director",
        image: "/images/about/managing director.png",
    },
];

export default function LeadershipSection() {
    return (
        <section className="bg-white px-5 py-20 sm:px-8 md:py-28 lg:px-10">
            <div className="mx-auto max-w-[1380px]">

                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mb-12 flex flex-col justify-between gap-6 lg:mb-16 lg:flex-row lg:items-end"
                >
                    <div>
                        <div className="mb-5 flex items-center gap-3">
                            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-sm text-white">
                                ✦
                            </span>

                            <span className="text-xs font-bold uppercase tracking-[2.5px] text-gray-500">
                                Our Leadership
                            </span>
                        </div>

                        <h2 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-2px] text-[#111111] sm:text-5xl lg:text-6xl">
                            The people behind
                            <br />
                            <span className="text-red-600">
                                KMP Industries.
                            </span>
                        </h2>
                    </div>

                    <p className="max-w-md text-sm leading-7 text-gray-500">
                        Guided by experience, driven by innovation and
                        committed to delivering dependable pumping solutions.
                    </p>
                </motion.div>

                {/* LEADERS */}
                <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">

                    {leaders.map((leader, index) => (
                        <motion.div
                            key={leader.role}
                            initial={{ opacity: 0, y: 35 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.12,
                            }}
                            className="group"
                        >
                            {/* IMAGE */}
                            <div className="relative overflow-hidden rounded-[28px] bg-[#f3f3f3]">
                                <div className="relative aspect-[4/4.5]">
                                    <Image
                                        src={leader.image}
                                        alt={leader.name}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                                    />

                                    {/* ROLE */}
                                    <div className="absolute left-5 top-5">
                                        <span className="rounded-full bg-white/95 px-4 py-2 text-[10px] font-bold uppercase tracking-[1.5px] text-red-600 shadow-sm backdrop-blur">
                                            {leader.role}
                                        </span>
                                    </div>

                                    {/* ARROW */}
                                    <div className="absolute bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#111111] shadow-lg transition-all duration-300 group-hover:bg-red-600 group-hover:text-white">
                                        <ArrowOutwardIcon
                                            sx={{ fontSize: 19 }}
                                            className="transition-transform duration-300 group-hover:rotate-45"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* DETAILS */}
                            <div className="px-2 pt-5">
                                <h3 className="text-xl font-bold tracking-[-0.5px] text-[#111111]">
                                    {leader.name}
                                </h3>

                                <p className="mt-1 text-sm font-semibold text-red-600">
                                    {leader.role}
                                </p>
                            </div>
                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    );
}