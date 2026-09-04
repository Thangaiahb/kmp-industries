"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const products = [
    {
        number: "01",
        title: "Submersible Pumps",
        image: "/images/products/submersible-pumps (2).png",
        description:
            "High-efficiency borewell and openwell submersible pumps designed for agriculture, residential and industrial applications.",
        tags: ["Borewell", "Openwell", "Energy Efficient"],
    },
    {
        number: "02",
        title: "Monoblock Pumps",
        image: "/images/products/monoblock-pumps (2).png",
        description:
            "Centrifugal and self-priming monoblock pumps engineered for consistent performance and long service life.",
        tags: ["Self Priming", "Centrifugal", "Reliable"],
    },
    {
        number: "03",
        title: "Motors",
        image: "/images/products/motors (2).png",
        description:
            "Precision-engineered motors designed for dependable operation and efficient power delivery.",
        tags: ["Efficient", "Heavy Duty", "Long Life"],
    },
    {
        number: "04",
        title: "Solar Motor & Panels",
        image: "/images/products/solar-motor-panels (2).png",
        description:
            "Solar-powered pumping solutions that combine sustainable energy with reliable water management.",
        tags: ["Solar", "Eco Friendly", "High Efficiency"],
    },
    {
        number: "05",
        title: "uPVC Column Pipes",
        image: "/images/products/upvc-column-pipes (2).png",
        description:
            "Heavy-duty corrosion-resistant column pipes built for durable underground water pumping systems.",
        tags: ["Corrosion Resistant", "Strong", "Long Life"],
    },
];

export default function ProductsSection() {
    const [expanded, setExpanded] = useState(0);

    return (
        <section className="bg-[#fafafa] px-5 py-20 sm:px-8 lg:px-10">

            <div className="mx-auto max-w-[1380px]">

                {/* =================================================
                    SECTION LABEL
                ================================================= */}

                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center gap-3"
                >
                    <span className="h-2 w-2 rounded-full bg-red-600" />

                    <span className="text-xs font-bold uppercase tracking-[2px] text-gray-500">
                        Our Products
                    </span>
                </motion.div>


                {/* =================================================
                    HEADING
                ================================================= */}

                <motion.h2
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mt-5 max-w-5xl text-4xl font-semibold leading-[1.05] tracking-[-2px] text-[#151515] sm:text-5xl md:text-6xl lg:text-[68px]"
                >
                    Complete pumping solutions built for
                    <span className="text-red-600">
                        {" "}every application.
                    </span>
                </motion.h2>


                {/* =================================================
                    PRODUCT GRID
                ================================================= */}

                <div className="mt-16 grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">

                    {/* =================================================
                        LEFT IMAGE
                    ================================================= */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            x: -40,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{
                            once: true,
                            margin: "-100px",
                        }}
                        transition={{
                            duration: 0.7,
                        }}
                        className="relative"
                    >

                        <div className="overflow-hidden rounded-[30px] bg-white shadow-xl">

                            <motion.div
                                key={products[expanded]?.image}
                                initial={{
                                    opacity: 0,
                                    scale: 1.04,
                                }}
                                animate={{
                                    opacity: 1,
                                    scale: 1,
                                }}
                                transition={{
                                    duration: 0.5,
                                }}
                                className="relative h-[420px] sm:h-[520px]"
                            >

                                <Image
                                    src={products[expanded]?.image}
                                    alt={products[expanded]?.title}
                                    fill
                                    priority
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    className="object-cover"
                                />

                                {/* Image overlay */}

                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />


                                {/* Image content */}

                                <div className="absolute bottom-7 left-7 right-7">

                                    <p className="text-xs font-bold uppercase tracking-[2px] text-white/70">
                                        Featured Product
                                    </p>

                                    <h3 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
                                        {products[expanded]?.title}
                                    </h3>

                                </div>

                            </motion.div>

                        </div>

                    </motion.div>


                    {/* =================================================
                        RIGHT ACCORDION
                    ================================================= */}

                    <div className="space-y-5">

                        {products.map((product, index) => (

                            <motion.div
                                key={product.number}
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
                                    delay: index * 0.08,
                                    duration: 0.45,
                                }}
                            >

                                <Accordion
                                    expanded={expanded === index}
                                    onChange={() => {
                                        setExpanded(
                                            expanded === index
                                                ? -1
                                                : index
                                        );
                                    }}
                                    disableGutters
                                    elevation={0}
                                    sx={{
                                        borderRadius:
                                            "24px !important",
                                        overflow: "hidden",
                                        border:
                                            "1px solid #E5E7EB",
                                        backgroundColor:
                                            "#ffffff",

                                        "&:before": {
                                            display: "none",
                                        },

                                        transition:
                                            "all 0.3s ease",

                                        "&:hover": {
                                            borderColor:
                                                "#ef4444",
                                        },
                                    }}
                                >

                                    {/* =================================================
                                        ACCORDION HEADER
                                    ================================================= */}

                                    <AccordionSummary
                                        expandIcon={
                                            expanded === index ? (
                                                <RemoveIcon />
                                            ) : (
                                                <AddIcon />
                                            )
                                        }
                                        sx={{
                                            minHeight: "100px",
                                            px: {
                                                xs: 2.5,
                                                sm: 4,
                                            },

                                            "& .MuiAccordionSummary-content":
                                            {
                                                margin:
                                                    "22px 0",
                                            },
                                        }}
                                    >

                                        <div className="flex items-start gap-4 sm:gap-5">

                                            {/* Number */}

                                            <span className="pt-1 text-sm font-bold text-red-600">
                                                {product.number}
                                            </span>


                                            {/* Title */}

                                            <div>

                                                <h3 className="text-2xl font-bold tracking-tight text-[#151515] sm:text-3xl">
                                                    {product.title}
                                                </h3>

                                                <p className="mt-1 text-sm text-gray-500">
                                                    Premium engineering
                                                    solutions.
                                                </p>

                                            </div>

                                        </div>

                                    </AccordionSummary>


                                    {/* =================================================
                                        ACCORDION CONTENT
                                    ================================================= */}

                                    <AccordionDetails
                                        sx={{
                                            px: {
                                                xs: 3,
                                                sm: 8,
                                            },
                                            pb: 4,
                                        }}
                                    >

                                        <p className="max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
                                            {product.description}
                                        </p>


                                        {/* Tags */}

                                        <div className="mt-6 flex flex-wrap gap-3">

                                            {product.tags.map(
                                                (tag) => (
                                                    <span
                                                        key={tag}
                                                        className="rounded-full border border-gray-300 px-4 py-2 text-xs font-medium text-gray-700 transition-colors duration-300 hover:border-red-500 hover:text-red-600 sm:text-sm"
                                                    >
                                                        {tag}
                                                    </span>
                                                )
                                            )}

                                        </div>

                                    </AccordionDetails>

                                </Accordion>

                            </motion.div>

                        ))}

                    </div>

                </div>

            </div>

        </section>
    );
}