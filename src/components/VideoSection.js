"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

export default function VideoSection() {
    const videoRef = useRef(null);

    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(true);

    const togglePlay = () => {
        if (!videoRef.current) return;

        if (videoRef.current.paused) {
            videoRef.current.play();
            setIsPlaying(true);
        } else {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };

    const toggleMute = () => {
        if (!videoRef.current) return;

        videoRef.current.muted = !videoRef.current.muted;
        setIsMuted(videoRef.current.muted);
    };

    return (
        <section className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 md:py-28 lg:px-10">

            <div className="mx-auto max-w-[1380px]">

                {/* =================================================
                    HEADER
                ================================================= */}

                <div className="grid gap-8 lg:grid-cols-[1fr_0.5fr] lg:items-end">

                    {/* Left */}

                    <motion.div
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
                            duration: 0.7,
                        }}
                    >

                        <div className="flex items-center gap-3">

                            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-50 text-red-600">
                                <span className="text-sm">
                                    ▶
                                </span>
                            </span>

                            <span className="text-xs font-bold uppercase tracking-[2px] text-gray-500">
                                See KMP In Action
                            </span>

                        </div>


                        <h2 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.04] tracking-[-2px] text-[#151515] sm:text-5xl md:text-6xl lg:text-[68px]">

                            Engineering You Can
                            <br />

                            <span className="text-red-600">
                                See & Trust.
                            </span>

                        </h2>

                    </motion.div>


                    {/* Right */}

                    <motion.p
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
                            delay: 0.15,
                            duration: 0.7,
                        }}
                        className="max-w-xl text-sm leading-7 text-gray-500 sm:text-base"
                    >
                        Discover KMP Industries, our products and engineering
                        capabilities through our company and product showcase.
                    </motion.p>

                </div>


                {/* =================================================
                    VIDEO
                ================================================= */}

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 40,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                        margin: "-100px",
                    }}
                    transition={{
                        duration: 0.8,
                    }}
                    className="relative mt-14 overflow-hidden rounded-[30px] bg-black shadow-[0_30px_90px_rgba(0,0,0,0.18)] sm:rounded-[36px]"
                >

                    {/* Video */}

                    <video
                        ref={videoRef}
                        src="/videos/hero/one.mp4"
                        className="h-[420px] w-full object-cover sm:h-[550px] lg:h-[680px]"
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        onPlay={() => setIsPlaying(true)}
                        onPause={() => setIsPlaying(false)}
                    />


                    {/* =================================================
                        DARK OVERLAY
                    ================================================= */}

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />


                    {/* =================================================
                        CENTER PLAY BUTTON
                    ================================================= */}

                    <button
                        type="button"
                        onClick={togglePlay}
                        aria-label={isPlaying ? "Pause video" : "Play video"}
                        className="group absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black shadow-2xl transition-all duration-300 hover:scale-110 sm:h-24 sm:w-24"
                    >

                        {isPlaying ? (
                            <PauseIcon
                                sx={{
                                    fontSize: 30,
                                }}
                            />
                        ) : (
                            <PlayArrowIcon
                                sx={{
                                    fontSize: 36,
                                    marginLeft: "3px",
                                }}
                            />
                        )}

                    </button>


                    {/* =================================================
                        BOTTOM CONTENT
                    ================================================= */}

                    <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10">

                        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">

                            {/* Text */}

                            <div>

                                <p className="text-[10px] font-bold uppercase tracking-[2px] text-white/60">
                                    KMP Industries
                                </p>

                                <h3 className="mt-2 max-w-xl text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                                    Precision engineering.
                                    <br />
                                    Reliable performance.
                                </h3>

                            </div>


                            {/* Controls */}

                            <div className="flex items-center gap-3">

                                {/* Play / Pause */}

                                <button
                                    type="button"
                                    onClick={togglePlay}
                                    aria-label={
                                        isPlaying
                                            ? "Pause video"
                                            : "Play video"
                                    }
                                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-black/20 text-white backdrop-blur-md transition-all hover:border-white hover:bg-white hover:text-black"
                                >

                                    {isPlaying ? (
                                        <PauseIcon
                                            sx={{ fontSize: 19 }}
                                        />
                                    ) : (
                                        <PlayArrowIcon
                                            sx={{ fontSize: 21 }}
                                        />
                                    )}

                                </button>


                                {/* Mute */}

                                <button
                                    type="button"
                                    onClick={toggleMute}
                                    aria-label={
                                        isMuted
                                            ? "Unmute video"
                                            : "Mute video"
                                    }
                                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-black/20 text-white backdrop-blur-md transition-all hover:border-white hover:bg-white hover:text-black"
                                >

                                    {isMuted ? (
                                        <VolumeOffIcon
                                            sx={{ fontSize: 19 }}
                                        />
                                    ) : (
                                        <VolumeUpIcon
                                            sx={{ fontSize: 19 }}
                                        />
                                    )}

                                </button>

                            </div>

                        </div>

                    </div>

                </motion.div>


                {/* =================================================
                    BOTTOM INFO
                ================================================= */}

                <div className="mt-7 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                    <div className="flex items-center gap-3">

                        <span className="h-1.5 w-1.5 rounded-full bg-red-600" />

                        <span className="text-[10px] font-bold uppercase tracking-[2px] text-gray-400">
                            Engineering · Quality · Reliability
                        </span>

                    </div>


                    <a
                        href="/contact"
                        className="group inline-flex items-center gap-3 text-sm font-bold text-[#151515] transition-colors hover:text-red-600"
                    >

                        <span>
                            Talk to Our Team
                        </span>

                        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 transition-all duration-300 group-hover:border-red-600 group-hover:bg-red-600 group-hover:text-white">

                            <ArrowOutwardIcon
                                sx={{
                                    fontSize: 17,
                                }}
                            />

                        </span>

                    </a>

                </div>

            </div>

        </section>
    );
}