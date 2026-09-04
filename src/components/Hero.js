"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const slides = [
    {
        image: "/images/hero/indexhero1.png",
        tag: "KMP INDUSTRIES · COIMBATORE",
        title: "Energy-Efficient",
        highlight: "Submersible Pumps",
        secondHighlight: "& uPVC Column Pipes",
        description:
            "Reliable pumping solutions engineered for agriculture, residential and industrial water management.",
        primary: "Explore Products",
        secondary: "Get a Quote",
    },
    {
        image: "/images/applications/Agricultural (2).png",
        tag: "ENGINEERED FOR PERFORMANCE",
        title: "Powering Water.",
        highlight: "Built for Reliability.",
        secondHighlight: "",
        description:
            "High-performance pumps and motors designed for dependable water pumping across demanding applications.",
        primary: "View Our Products",
        secondary: "Talk to Our Team",
    },
    {
        image: "/images/applications/Residential (2).png",
        tag: "QUALITY · ENGINEERING · TRUST",
        title: "Reliable Solutions",
        highlight: "For Every Water Need.",
        secondHighlight: "",
        description:
            "From agricultural irrigation to residential and industrial applications, choose pumping solutions built to perform.",
        primary: "Discover KMP",
        secondary: "Request a Quote",
    },
];

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [progress, setProgress] = useState(0);

    const slide = slides[currentSlide];

    const changeSlide = (index) => {
        setProgress(0);
        setCurrentSlide(index);
    };

    useEffect(() => {
        setProgress(0);

        const duration = 6000;
        const intervalTime = 60;
        const step = 100 / (duration / intervalTime);

        const progressInterval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    return 100;
                }

                return prev + step;
            });
        }, intervalTime);

        const slideTimeout = setTimeout(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, duration);

        return () => {
            clearInterval(progressInterval);
            clearTimeout(slideTimeout);
        };
    }, [currentSlide]);

    return (
        <section className="relative h-screen min-h-[720px] w-full overflow-hidden bg-black">

            {/* =================================================
                IMAGE BACKGROUND
            ================================================= */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={slide.image}
                    className="absolute inset-0 z-0"
                    initial={{
                        opacity: 0,
                        scale: 1.06,
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                    }}
                    exit={{
                        opacity: 0,
                        scale: 1.02,
                    }}
                    transition={{
                        opacity: {
                            duration: 0.9,
                        },
                        scale: {
                            duration: 6,
                            ease: "easeOut",
                        },
                    }}
                >
                    <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        priority={currentSlide === 0}
                        loading={currentSlide === 0 ? "eager" : "lazy"}
                        sizes="100vw"
                        className="object-cover"
                    />
                </motion.div>
            </AnimatePresence>

            {/* =================================================
                DARK OVERLAY
            ================================================= */}
            <div className="absolute inset-0 z-10 bg-black/30" />

            <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/70 via-black/35 to-transparent" />

            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/75 via-transparent to-black/30" />

            {/* =================================================
                HERO CONTENT
            ================================================= */}
            <div className="relative z-20 flex h-full items-center justify-center px-5 pt-24 sm:px-8 lg:px-10">

                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        initial={{
                            opacity: 0,
                            y: 35,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        exit={{
                            opacity: 0,
                            y: -25,
                        }}
                        transition={{
                            duration: 0.7,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="mx-auto w-full max-w-6xl text-center"
                    >

                        {/* TAG */}
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: -15,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                delay: 0.15,
                                duration: 0.5,
                            }}
                            className="mx-auto mb-7 inline-flex items-center rounded-full border border-white/25 bg-white/10 px-5 py-2 backdrop-blur-md"
                        >
                            <span className="mr-2 h-2 w-2 rounded-full bg-red-500" />

                            <span className="text-[10px] font-bold uppercase tracking-[2px] text-white sm:text-xs">
                                {slide.tag}
                            </span>
                        </motion.div>

                        {/* HEADING */}
                        <motion.h1
                            initial={{
                                opacity: 0,
                                y: 25,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                delay: 0.25,
                                duration: 0.7,
                            }}
                            className="mx-auto max-w-6xl text-[44px] font-extrabold leading-[0.98] tracking-[-2px] text-white sm:text-6xl md:text-7xl lg:text-[82px] xl:text-[92px]"
                        >
                            {slide.title}

                            <br />

                            <span className="text-white">
                                {slide.highlight}
                            </span>

                            {slide.secondHighlight && (
                                <>
                                    <br />

                                    <span className="text-white">
                                        {slide.secondHighlight}
                                    </span>
                                </>
                            )}
                        </motion.h1>

                        {/* DESCRIPTION */}
                        <motion.p
                            initial={{
                                opacity: 0,
                                y: 20,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                delay: 0.4,
                                duration: 0.6,
                            }}
                            className="mx-auto mt-7 max-w-2xl text-base leading-7 text-white/85 sm:text-lg"
                        >
                            {slide.description}
                        </motion.p>

                        {/* BUTTONS */}
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 20,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                delay: 0.55,
                                duration: 0.6,
                            }}
                            className="mt-9 flex flex-wrap items-center justify-center gap-4"
                        >

                            <Link
                                href="/products"
                                className="group flex items-center gap-3 rounded-full bg-red-600 py-2 pl-7 pr-2 text-sm font-bold text-white shadow-xl shadow-red-600/30 transition-all duration-300 hover:scale-105 hover:bg-red-700 sm:text-base"
                            >
                                <span>
                                    {slide.primary}
                                </span>

                                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-red-600 transition-transform duration-300 group-hover:rotate-45">
                                    <ArrowOutwardIcon
                                        sx={{ fontSize: 19 }}
                                    />
                                </span>
                            </Link>

                            <Link
                                href="/contact"
                                className="rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-gray-900 sm:text-base"
                            >
                                {slide.secondary}
                            </Link>

                        </motion.div>

                    </motion.div>
                </AnimatePresence>

            </div>

            {/* =================================================
                SLIDE PROGRESS
            ================================================= */}
            <div className="absolute bottom-28 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center gap-5">

                <div className="h-[2px] w-32 overflow-hidden rounded-full bg-white/25 sm:w-48">
                    <motion.div
                        className="h-full bg-red-500"
                        animate={{
                            width: `${progress}%`,
                        }}
                        transition={{
                            duration: 0.1,
                            ease: "linear",
                        }}
                    />
                </div>

                {/* Optional clickable dots */}
                <div className="flex items-center gap-2">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => changeSlide(index)}
                            aria-label={`Go to slide ${index + 1}`}
                            className={`h-2 rounded-full transition-all duration-300 ${currentSlide === index
                                ? "w-7 bg-red-500"
                                : "w-2 bg-white/40 hover:bg-white/70"
                                }`}
                        />
                    ))}
                </div>

            </div>

            {/* =================================================
                SCROLL INDICATOR
            ================================================= */}
            <motion.div
                animate={{
                    y: [0, 8, 0],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute bottom-9 left-6 z-30 hidden items-center gap-3 text-[10px] font-bold uppercase tracking-[3px] text-white/60 md:flex lg:left-10"
            >
                <span>
                    Scroll
                </span>

                <span className="h-px w-10 bg-white/40" />

                <KeyboardArrowDownIcon
                    sx={{ fontSize: 16 }}
                />
            </motion.div>

            {/* =================================================
                RED ACCENT
            ================================================= */}
            <div className="absolute bottom-0 left-0 z-30 h-1 w-full bg-gradient-to-r from-red-600 via-red-500 to-transparent" />

        </section>
    );
}