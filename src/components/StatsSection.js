"use client";

import { useEffect, useState } from "react";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const stats = [
    {
        number: 20,
        suffix: "+",
        label: "Years of Experience",
    },
    {
        number: 50,
        suffix: "+",
        label: "Products & Solutions",
    },
    {
        number: 100,
        suffix: "+",
        label: "Dealers & Partners",
    },
    {
        number: 25,
        suffix: "+",
        label: "Applications Served",
    },
];

function Counter({ target }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;

        const duration = 1800;
        const stepTime = 30;
        const steps = duration / stepTime;
        const increment = target / steps;

        const timer = setInterval(() => {
            start += increment;

            if (start >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, stepTime);

        return () => clearInterval(timer);
    }, [target]);

    return <>{count}</>;
}

export default function StatsSection() {
    return (
        <section className="relative z-30 bg-white px-5 py-6 sm:px-8 lg:px-10">

            <div className="mx-auto max-w-[1380px]">

                {/* =================================================
                    STATS CARD
                ================================================= */}

                <div className="grid overflow-hidden rounded-[24px] border border-gray-200 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)] sm:grid-cols-2 lg:grid-cols-4">

                    {stats.map((stat, index) => (
                        <div
                            key={stat.label}
                            className={`group relative flex min-h-[165px] flex-col items-center justify-center overflow-hidden px-6 py-8 text-center transition-all duration-500 hover:bg-[#fafafa] lg:min-h-[180px] ${index !== stats.length - 1
                                ? "border-b border-gray-200 sm:border-r lg:border-b-0"
                                : ""
                                }`}
                        >

                            {/* =================================================
                                BACKGROUND NUMBER
                            ================================================= */}

                            <span
                                aria-hidden="true"
                                className="pointer-events-none absolute left-1/2 top-1/2 -z-0 -translate-x-1/2 -translate-y-1/2 select-none text-[90px] font-black leading-none tracking-[-6px] text-red-600/[0.045] transition-all duration-500 group-hover:scale-110 group-hover:text-red-600/[0.08] sm:text-[100px]"
                            >
                                {stat.number}
                                {stat.suffix}
                            </span>


                            {/* =================================================
                                RED TOP ACCENT
                            ================================================= */}

                            <span className="absolute left-1/2 top-0 h-[3px] w-0 -translate-x-1/2 bg-red-600 transition-all duration-500 group-hover:w-14" />


                            {/* =================================================
                                MAIN CONTENT
                            ================================================= */}

                            <div className="relative z-10 flex flex-col items-center justify-center">

                                {/* NUMBER */}

                                <div className="flex items-baseline justify-center">

                                    <span className="text-5xl font-extrabold leading-none tracking-[-2px] text-[#111111] transition-colors duration-300 group-hover:text-red-600 sm:text-6xl">
                                        <Counter target={stat.number} />
                                    </span>

                                    <span className="ml-1 text-3xl font-bold leading-none text-red-600 sm:text-4xl">
                                        {stat.suffix}
                                    </span>

                                </div>


                                {/* LABEL */}

                                <p className="mt-4 max-w-[190px] text-center text-sm font-semibold leading-5 text-gray-500">
                                    {stat.label}
                                </p>

                            </div>

                        </div>
                    ))}

                </div>


                {/* =================================================
                    BRAND LINE
                ================================================= */}

                <div className="mt-5 flex items-center justify-between px-1">

                    {/* LEFT */}

                    <div className="flex items-center gap-3">

                        <span className="h-1.5 w-1.5 rounded-full bg-red-600" />

                        <span className="text-[10px] font-bold uppercase tracking-[2px] text-gray-400">
                            KMP Industries
                        </span>

                    </div>


                    {/* RIGHT */}

                    <div className="hidden items-center gap-2 text-[10px] font-bold uppercase tracking-[2px] text-gray-400 sm:flex">

                        <span>
                            Engineering · Quality · Reliability
                        </span>

                        <ArrowOutwardIcon
                            sx={{ fontSize: 14 }}
                        />

                    </div>

                </div>

            </div>

        </section>
    );
}