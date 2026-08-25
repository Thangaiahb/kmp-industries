"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const slides = [
    {
        video: "/videos/hero/one.mp4",
        tag: "KMP INDUSTRIES · COIMBATORE",
        title: "KMP Industries:",
        highlight: "Energy-Efficient Submersible Pumps & uPVC Column Pipes",
        description:
            "Reliable pumping solutions engineered for agriculture, residential and industrial water management.",
        primary: "Explore Products",
        secondary: "Get a Quote",
    },
    {
        video: "/videos/hero/two.mp4",
        tag: "ENGINEERED FOR PERFORMANCE",
        title: "Powering Water.",
        highlight: "Built for Reliability.",
        description:
            "High-performance pumps and motors designed for dependable water pumping across demanding applications.",
        primary: "View Our Products",
        secondary: "Talk to Our Team",
    },
    {
        video: "/videos/hero/three.mp4",
        tag: "QUALITY · ENGINEERING · TRUST",
        title: "Reliable Solutions",
        highlight: "For Every Water Need.",
        description:
            "From agricultural irrigation to residential and industrial applications, choose pumping solutions built to perform.",
        primary: "Discover KMP",
        secondary: "Request a Quote",
    },
];

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [videoDuration, setVideoDuration] = useState(0);
    const [videoProgress, setVideoProgress] = useState(0);
    const [isVideoReady, setIsVideoReady] = useState(false);

    const videoRef = useRef(null);

    const slide = slides[currentSlide];

    /* =====================================================
       CHANGE SLIDE
    ===================================================== */

    const changeSlide = (index) => {
        setVideoProgress(0);
        setVideoDuration(0);
        setIsVideoReady(false);
        setCurrentSlide(index);
    };

    /* =====================================================
       VIDEO READY
    ===================================================== */

    const handleVideoLoaded = () => {
        if (!videoRef.current) return;

        const duration = videoRef.current.duration;

        if (Number.isFinite(duration)) {
            setVideoDuration(duration);
        }

        setIsVideoReady(true);

        videoRef.current
            .play()
            .catch(() => { });
    };

    /* =====================================================
       VIDEO PROGRESS
    ===================================================== */

    const handleVideoTimeUpdate = () => {
        if (!videoRef.current) return;

        const currentTime = videoRef.current.currentTime;
        const duration = videoRef.current.duration;

        if (!duration || !Number.isFinite(duration)) return;

        setVideoProgress((currentTime / duration) * 100);
    };

    /* =====================================================
       VIDEO END
    ===================================================== */

    const handleVideoEnded = () => {
        const nextSlide = (currentSlide + 1) % slides.length;

        changeSlide(nextSlide);
    };

    /* =====================================================
       RESET VIDEO WHEN SLIDE CHANGES
    ===================================================== */

    useEffect(() => {
        setVideoProgress(0);
        setVideoDuration(0);
        setIsVideoReady(false);

        if (videoRef.current) {
            videoRef.current.currentTime = 0;

            videoRef.current
                .play()
                .catch(() => { });
        }
    }, [currentSlide]);

    return (
        <section className="kmp-hero">

            {/* =================================================
                VIDEO BACKGROUND
            ================================================= */}

            <AnimatePresence mode="wait">

                <motion.div
                    key={slide.video}
                    className="kmp-hero-video-wrapper"

                    initial={{
                        opacity: 0,
                        scale: 1.04,
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
                            duration: 0.8,
                            ease: "easeInOut",
                        },

                        scale: {
                            duration: 1.2,
                            ease: "easeOut",
                        },
                    }}
                >

                    <video
                        ref={videoRef}
                        key={slide.video}
                        className="kmp-hero-video"

                        src={slide.video}

                        autoPlay
                        muted
                        playsInline

                        preload={
                            currentSlide === 0
                                ? "auto"
                                : "metadata"
                        }

                        onLoadedMetadata={handleVideoLoaded}
                        onTimeUpdate={handleVideoTimeUpdate}
                        onEnded={handleVideoEnded}
                    />

                </motion.div>

            </AnimatePresence>


            {/* =================================================
                DARK OVERLAY
            ================================================= */}

            <div className="kmp-hero-overlay"></div>


            {/* =================================================
                BOTTOM GRADIENT
            ================================================= */}

            <div className="kmp-hero-bottom-gradient"></div>


            {/* =================================================
                CONTENT
            ================================================= */}

            <div className="container kmp-hero-container">

                <AnimatePresence mode="wait">

                    <motion.div
                        key={currentSlide}
                        className="kmp-hero-content"

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
                    >

                        {/* =================================================
                            TAG
                        ================================================= */}

                        <motion.span
                            className="kmp-hero-tag"

                            initial={{
                                opacity: 0,
                                x: -25,
                            }}

                            animate={{
                                opacity: 1,
                                x: 0,
                            }}

                            transition={{
                                delay: 0.15,
                                duration: 0.5,
                            }}
                        >
                            {slide.tag}
                        </motion.span>


                        {/* =================================================
                            HEADING
                        ================================================= */}

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
                        >

                            {slide.title}

                            <br />

                            <span>
                                {slide.highlight}
                            </span>

                        </motion.h1>


                        {/* =================================================
                            DESCRIPTION
                        ================================================= */}

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
                        >
                            {slide.description}
                        </motion.p>


                        {/* =================================================
                            BUTTONS
                        ================================================= */}

                        <motion.div
                            className="kmp-hero-buttons"

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
                        >

                            <Link
                                href="/products"
                                className="kmp-hero-primary"
                            >
                                {slide.primary}

                                <span>→</span>
                            </Link>


                            <Link
                                href="/contact"
                                className="kmp-hero-secondary"
                            >
                                {slide.secondary}
                            </Link>

                        </motion.div>

                    </motion.div>

                </AnimatePresence>

            </div>


            {/* =================================================
                SLIDER CONTROLS
            ================================================= */}

            <div className="kmp-hero-controls">

                {/* Numbers */}

                <div className="kmp-slide-numbers">

                    {slides.map((_, index) => (

                        <button
                            key={index}
                            type="button"

                            onClick={() =>
                                changeSlide(index)
                            }

                            className={
                                currentSlide === index
                                    ? "active"
                                    : ""
                            }

                            aria-label={`Go to slide ${index + 1}`}
                        >
                            0{index + 1}
                        </button>

                    ))}

                </div>


                {/* Progress Bar */}

                <div className="kmp-progress">

                    <motion.div
                        className="kmp-progress-bar"

                        animate={{
                            width: `${videoProgress}%`,
                        }}

                        transition={{
                            duration: 0.1,
                            ease: "linear",
                        }}
                    />

                </div>


                {/* Duration */}

                {isVideoReady && videoDuration > 0 && (
                    <span className="kmp-video-time">
                        {Math.ceil(videoDuration)}s
                    </span>
                )}

            </div>


            {/* =================================================
                SCROLL INDICATOR
            ================================================= */}

            <motion.div
                className="kmp-hero-scroll"

                animate={{
                    y: [0, 8, 0],
                }}

                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >

                <span>Scroll</span>

                <div></div>

            </motion.div>

        </section>
    );
}