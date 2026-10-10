"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const slides = [
    {
        image: "/images/hero/Front 1.png",
        tag: "KMP INDUSTRIES · COIMBATORE",
        title: "Efficient",
        highlight: "Water Pumps",
        secondHighlight: "& uPVC Pipes",
        description:
            "Reliable pumping solutions engineered for agriculture, residential and industrial water management.",
        primary: "Explore Products",
        secondary: "Get a Quote",
    },
    {
        image: "/images/hero/Front 2.png",
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
        image: "/images/hero/Front 3.png",
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
    const slide = slides[currentSlide];

    // Preload hero images
    useEffect(() => {
        const images = slides.map((item) => {
            const img = new window.Image();
            img.src = item.image;
            return img;
        });

        return () => {
            images.forEach((img) => {
                img.onload = null;
                img.onerror = null;
            });
        };
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide(
            (prev) => (prev - 1 + slides.length) % slides.length
        );
    };

    // Auto slide every 7 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 7000);

        return () => clearTimeout(timer);
    }, [currentSlide]);

    return (
        <section className="relative isolate min-h-[650px] h-screen w-full overflow-hidden bg-slate-100">

            {/* BACKGROUND IMAGE — FULL BRIGHTNESS */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={slide.image}
                    className="absolute inset-0 z-0"
                    initial={{ opacity: 0.85, scale: 1.025 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 1 }}
                    transition={{
                        opacity: { duration: 0.65 },
                        scale: { duration: 1.2, ease: "easeOut" },
                    }}
                >
                    <Image
                        src={slide.image}
                        alt={`${slide.title} ${slide.highlight}`}
                        fill
                        priority={currentSlide === 0}
                        sizes="100vw"
                        quality={95}
                        className="object-cover object-center"
                    />
                </motion.div>
            </AnimatePresence>

            {/* VERY LIGHT OVERLAY — NO IMAGE DARKENING */}
            <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-black/10 via-transparent to-black/15" />

            {/* SLIDE CONTENT */}
            <div className="relative z-20 flex h-full min-h-[650px] items-center justify-center px-5 pb-12 pt-24 sm:px-14 lg:px-20">

                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{
                            duration: 0.55,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="mx-auto w-full max-w-6xl text-center"
                    >

                        {/* TAG */}
                        <div className="mx-auto mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-white/60 bg-white/80 px-4 py-2 shadow-sm sm:mb-6 sm:px-5">
                            <span className="h-2 w-2 shrink-0 rounded-full bg-red-600" />

                            <span className="text-[9px] font-extrabold uppercase tracking-[1.5px] text-slate-900 sm:text-xs sm:tracking-[2px]">
                                {slide.tag}
                            </span>
                        </div>

                        {/* HEADING — REDUCED SIZE TO REVEAL PRODUCTS */}
                        <h1 className="mx-auto max-w-5xl text-[36px] font-extrabold leading-[1.08] tracking-[-1.2px] text-white [text-shadow:0_2px_10px_rgba(0,0,0,0.55)] sm:text-5xl sm:leading-[1.06] sm:tracking-[-1.8px] md:text-6xl lg:text-[68px] xl:text-[76px]">

                            <span className="block">{slide.title}</span>

                            <span className="mt-1 block">
                                {slide.highlight}
                            </span>

                            {slide.secondHighlight && (
                                <span className="mt-1 block text-[30px] sm:text-4xl md:text-5xl lg:text-[58px] xl:text-[64px]">
                                    {slide.secondHighlight}
                                </span>
                            )}
                        </h1>

                        {/* DESCRIPTION */}
                        <p className="mx-auto mt-5 max-w-2xl text-sm font-medium leading-6 text-white [text-shadow:0_1px_7px_rgba(0,0,0,0.85)] sm:mt-6 sm:text-base sm:leading-7 md:text-lg">
                            {slide.description}
                        </p>

                        {/* CTA BUTTONS */}
                        <div className="mt-7 flex flex-wrap items-center justify-center gap-3 sm:mt-8 sm:gap-4">

                            <Link
                                href="/products"
                                className="group inline-flex items-center gap-3 rounded-full bg-red-600 py-2 pl-5 pr-2 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:scale-[1.03] hover:bg-red-700 sm:pl-7 sm:text-base"
                            >
                                <span>{slide.primary}</span>

                                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-red-600 sm:h-11 sm:w-11">
                                    <ArrowOutwardIcon
                                        sx={{ fontSize: 20 }}
                                        className="transition-transform duration-300 group-hover:rotate-45"
                                    />
                                </span>
                            </Link>

                            <Link
                                href="/contact"
                                className="rounded-full border border-white/80 bg-slate-900/55 px-6 py-3 text-sm font-bold text-white shadow-md backdrop-blur-[2px] transition-all duration-300 hover:border-white hover:bg-white hover:text-slate-900 sm:px-7 sm:py-3.5 sm:text-base"
                            >
                                {slide.secondary}
                            </Link>
                        </div>

                    </motion.div>
                </AnimatePresence>
            </div>

            {/* PREVIOUS SLIDE */}
            <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous hero slide"
                className="absolute left-3 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-black/25 text-white shadow-sm transition hover:bg-red-600 sm:left-5 sm:h-12 sm:w-12 lg:left-8"
            >
                <span className="mb-1 text-3xl font-light leading-none">‹</span>
            </button>

            {/* NEXT SLIDE */}
            <button
                type="button"
                onClick={nextSlide}
                aria-label="Next hero slide"
                className="absolute right-3 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-black/25 text-white shadow-sm transition hover:bg-red-600 sm:right-5 sm:h-12 sm:w-12 lg:right-8"
            >
                <span className="mb-1 text-3xl font-light leading-none">›</span>
            </button>

            {/* SCROLL INDICATOR */}
            <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute bottom-7 left-6 z-30 hidden items-center gap-3 text-[10px] font-bold uppercase tracking-[3px] text-white [text-shadow:0_1px_6px_rgba(0,0,0,0.8)] md:flex lg:left-10"
            >
                <span>Scroll</span>
                <span className="h-px w-10 bg-white/80" />
                <KeyboardArrowDownIcon sx={{ fontSize: 16 }} />
            </motion.div>

            {/* BOTTOM ACCENT */}
            <div className="absolute bottom-0 left-0 z-30 h-1 w-full bg-gradient-to-r from-red-600 via-red-500 to-transparent" />

        </section>
    );
}