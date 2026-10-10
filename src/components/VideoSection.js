
"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const videos = [
    {
        id: 1,
        src: "/videos/hero/one.mp4",
        label: "Company Showcase",
        title: "Precision engineering.",
        subtitle: "Reliable performance.",
    },
    {
        id: 2,
        src: "/videos/hero/two.mp4",
        label: "Product Showcase",
        title: "Engineered to perform.",
        subtitle: "Built for reliability.",
    },
    {
        id: 3,
        src: "/videos/hero/three.mp4",
        label: "KMP Industries",
        title: "Powering water.",
        subtitle: "Delivering solutions.",
    },
];

export default function VideoSection() {
    const videoRefs = useRef([]);

    // First video is centered when the page loads.
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(true);

    // Keep playback and audio in sync with the active video.
    useEffect(() => {
        videoRefs.current.forEach((video, index) => {
            if (!video) return;

            video.muted = isMuted;

            if (index !== activeIndex || !isPlaying) {
                video.pause();
            }
        });

        if (isPlaying) {
            const currentVideo = videoRefs.current[activeIndex];

            if (currentVideo) {
                const playPromise = currentVideo.play();

                if (playPromise !== undefined) {
                    playPromise.catch((error) => {
                        console.error("Video playback failed:", error);
                        setIsPlaying(false);
                    });
                }
            }
        }
    }, [activeIndex, isPlaying, isMuted]);

    // Circular navigation: 1 -> 2 -> 3 -> 1.
    const changeVideo = (direction) => {
        setActiveIndex(
            (currentIndex) =>
                (currentIndex + direction + videos.length) % videos.length
        );
    };

    const selectVideo = (index) => {
        if (index === activeIndex) return;
        setActiveIndex(index);
    };

    const togglePlay = () => {
        setIsPlaying((previous) => !previous);
    };

    const toggleMute = () => {
        setIsMuted((previous) => !previous);
    };

    return (
        <section className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 md:py-28 lg:px-10">
            <div className="mx-auto max-w-[1380px]">

                {/* HEADER */}
                <div className="grid gap-8 lg:grid-cols-[1fr_0.5fr] lg:items-end">
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="flex items-center gap-3">
                            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-50 text-red-600">
                                <PlayArrowIcon sx={{ fontSize: 19 }} />
                            </span>

                            <span className="text-xs font-bold uppercase tracking-[2px] text-gray-500">
                                See KMP In Action
                            </span>
                        </div>

                        <h2 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.04] tracking-[-2px] text-[#151515] sm:text-5xl md:text-6xl lg:text-[68px]">
                            Engineering You Can
                            <br />
                            <span className="text-red-600">
                                See &amp; Trust.
                            </span>
                        </h2>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15, duration: 0.7 }}
                        className="max-w-xl text-sm leading-7 text-gray-500 sm:text-base"
                    >
                        Discover KMP Industries, our products and engineering
                        capabilities through our company and product showcase.
                    </motion.p>
                </div>

                {/* CIRCULAR VIDEO CAROUSEL */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="relative mt-14"
                >
                    <div className="relative h-[430px] overflow-hidden sm:h-[550px] lg:h-[660px]">

                        {videos.map((video, index) => {
                            const offset =
                                (index - activeIndex + videos.length) %
                                videos.length;

                            const isActive = offset === 0;
                            const isLeft = offset === videos.length - 1;

                            return (
                                <div
                                    key={video.id}
                                    className={`
                                        absolute top-1/2 overflow-hidden
                                        rounded-[22px] bg-black
                                        shadow-[0_25px_70px_rgba(0,0,0,0.18)]
                                        transition-all duration-700 ease-in-out
                                        sm:rounded-[30px]
                                        ${isActive
                                            ? "left-1/2 z-20 h-full w-[72%] -translate-x-1/2 -translate-y-1/2 opacity-100 blur-0 sm:w-[58%] lg:w-[46%]"
                                            : isLeft
                                                ? "left-[1%] z-10 h-[72%] w-[25%] -translate-y-1/2 scale-[0.94] opacity-55 blur-[2px] sm:left-[8%] sm:w-[25%] lg:left-[12%] lg:w-[25%]"
                                                : "right-[1%] z-10 h-[72%] w-[25%] -translate-y-1/2 scale-[0.94] opacity-55 blur-[2px] sm:right-[8%] sm:w-[25%] lg:right-[12%] lg:w-[25%]"
                                        }
                                    `}
                                >
                                    <video
                                        ref={(element) => {
                                            videoRefs.current[index] = element;
                                        }}
                                        src={video.src}
                                        className="absolute inset-0 h-full w-full object-cover"
                                        muted={isMuted}
                                        loop
                                        playsInline
                                        preload={isActive ? "auto" : "metadata"}
                                        onPlay={() => {
                                            if (index === activeIndex) {
                                                setIsPlaying(true);
                                            }
                                        }}
                                        onPause={() => {
                                            if (
                                                index === activeIndex &&
                                                videoRefs.current[index]
                                                    ?.paused
                                            ) {
                                                setIsPlaying(false);
                                            }
                                        }}
                                    />

                                    {/* Overlay */}
                                    <div
                                        className={`pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent ${isActive ? "" : "bg-black/30"
                                            }`}
                                    />

                                    {/* Side cards are clickable */}
                                    {!isActive && (
                                        <button
                                            type="button"
                                            onClick={() => selectVideo(index)}
                                            aria-label={`Select ${video.label}`}
                                            className="absolute inset-0 z-10 flex items-center justify-center"
                                        >
                                            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/60 bg-black/30 text-white backdrop-blur-md transition hover:scale-110 hover:bg-white hover:text-black sm:h-14 sm:w-14">
                                                <PlayArrowIcon
                                                    sx={{ fontSize: 29 }}
                                                />
                                            </span>
                                        </button>
                                    )}

                                    {/* Active video controls */}
                                    {isActive && (
                                        <>
                                            {!isPlaying && (
                                                <button
                                                    type="button"
                                                    onClick={togglePlay}
                                                    aria-label="Play video"
                                                    className="absolute left-1/2 top-1/2 z-20 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black shadow-2xl transition duration-300 hover:scale-110 sm:h-20 sm:w-20 lg:h-24 lg:w-24"
                                                >
                                                    <PlayArrowIcon
                                                        sx={{
                                                            fontSize: {
                                                                xs: 34,
                                                                sm: 40,
                                                            },
                                                            ml: "3px",
                                                        }}
                                                    />
                                                </button>
                                            )}

                                            {isPlaying && (
                                                <button
                                                    type="button"
                                                    onClick={togglePlay}
                                                    aria-label="Pause video"
                                                    className="absolute left-1/2 top-1/2 z-20 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/35 text-white opacity-0 backdrop-blur-sm transition hover:opacity-100 focus:opacity-100 sm:h-16 sm:w-16"
                                                >
                                                    <PauseIcon
                                                        sx={{ fontSize: 30 }}
                                                    />
                                                </button>
                                            )}

                                            {/* Bottom content */}
                                            <div className="absolute bottom-0 left-0 right-0 z-10 p-4 sm:p-6 lg:p-8">
                                                <p className="text-[9px] font-bold uppercase tracking-[1.5px] text-white/70 sm:text-[10px] sm:tracking-[2px]">
                                                    {video.label}
                                                </p>

                                                <h3 className="mt-2 text-lg font-bold leading-tight text-white sm:text-2xl lg:text-3xl">
                                                    {video.title}
                                                    <br />
                                                    {video.subtitle}
                                                </h3>

                                                <div className="mt-4 flex items-center gap-2 sm:mt-5 sm:gap-3">
                                                    <button
                                                        type="button"
                                                        onClick={togglePlay}
                                                        aria-label={
                                                            isPlaying
                                                                ? "Pause video"
                                                                : "Play video"
                                                        }
                                                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/20 text-white backdrop-blur-md transition hover:bg-white hover:text-black sm:h-11 sm:w-11"
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

                                                    <button
                                                        type="button"
                                                        onClick={toggleMute}
                                                        aria-label={
                                                            isMuted
                                                                ? "Unmute video"
                                                                : "Mute video"
                                                        }
                                                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/20 text-white backdrop-blur-md transition hover:bg-white hover:text-black sm:h-11 sm:w-11"
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

                                                    <span className="ml-auto text-[10px] font-semibold tracking-[1px] text-white/70">
                                                        0{activeIndex + 1} / 03
                                                    </span>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    {/* Previous arrow */}
                    <button
                        type="button"
                        onClick={() => changeVideo(-1)}
                        aria-label="Previous video"
                        className="absolute left-0 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-[#151515] shadow-xl transition duration-300 hover:border-red-600 hover:bg-red-600 hover:text-white sm:left-2 sm:h-12 sm:w-12 lg:left-5 lg:h-14 lg:w-14"
                    >
                        <ChevronLeftIcon
                            sx={{ fontSize: { xs: 25, sm: 30 } }}
                        />
                    </button>

                    {/* Next arrow */}
                    <button
                        type="button"
                        onClick={() => changeVideo(1)}
                        aria-label="Next video"
                        className="absolute right-0 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-[#151515] shadow-xl transition duration-300 hover:border-red-600 hover:bg-red-600 hover:text-white sm:right-2 sm:h-12 sm:w-12 lg:right-5 lg:h-14 lg:w-14"
                    >
                        <ChevronRightIcon
                            sx={{ fontSize: { xs: 25, sm: 30 } }}
                        />
                    </button>
                </motion.div>

                {/* BOTTOM INFO */}
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
                        <span>Talk to Our Team</span>

                        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 transition-all duration-300 group-hover:border-red-600 group-hover:bg-red-600 group-hover:text-white">
                            <ArrowOutwardIcon sx={{ fontSize: 17 }} />
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
}
