"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutHero() {
    return (
        <section className="relative w-full">

            {/* =====================================================
                HERO IMAGE
            ===================================================== */}

            <div className="relative min-h-[550px] w-full overflow-hidden sm:min-h-[600px] lg:min-h-[650px]">

                <Image
                    src="/images/about/about-hero.png"
                    alt="KMP Industries"
                    fill
                    priority
                    className="object-cover"
                    sizes="100vw"
                />


                {/* =================================================
                    DARK OVERLAY
                ================================================= */}

                <div className="absolute inset-0 bg-black/50" />

                <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent" />


                {/* =================================================
                    HERO CONTENT
                ================================================= */}

                <div className="relative z-10 flex min-h-[550px] items-center sm:min-h-[600px] lg:min-h-[650px]">

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 30,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.7,
                            ease: "easeOut",
                        }}
                        className="w-full px-6 sm:px-10 lg:px-16 xl:px-20"
                    >

                        {/* Eyebrow */}

                        <span className="text-xs font-bold uppercase tracking-[2px] text-red-500 sm:text-sm">
                            About KMP Industries
                        </span>


                        {/* Heading */}

                        <h1 className="mt-5 max-w-5xl text-5xl font-semibold leading-[0.98] tracking-[-3px] text-white sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[84px]">

                            Engineering Reliable

                            <br />

                            <span className="text-red-500">
                                Water Solutions.
                            </span>

                        </h1>


                        {/* Description */}

                        <p className="mt-7 max-w-2xl text-sm leading-7 text-white/75 sm:text-base sm:leading-8 lg:text-lg">

                            KMP Industries delivers dependable pumping,
                            motor and energy solutions for agriculture,
                            residential and industrial applications.

                        </p>

                    </motion.div>

                </div>

            </div>

        </section>
    );
}