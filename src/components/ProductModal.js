"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import CloseIcon from "@mui/icons-material/Close";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

export default function ProductModal({ product, onClose }) {
    const [activeTab, setActiveTab] = useState("");

    /*
     * Tabs are generated only when that product has
     * the corresponding data.
     */
    const availableTabs = [
        product.description
            ? {
                id: "description",
                label: "Description",
            }
            : null,

        product.specifications?.length
            ? {
                id: "specifications",
                label: "Specifications",
            }
            : null,

        product.material?.length
            ? {
                id: "material",
                label: "Material of Construction",
            }
            : null,

        product.features?.length
            ? {
                id: "features",
                label: "Salient Features",
            }
            : null,

        product.applications?.length
            ? {
                id: "applications",
                label: "Application",
            }
            : null,

        product.advantages?.length
            ? {
                id: "advantages",
                label: "Advantages",
            }
            : null,
    ].filter(Boolean);

    /*
     * Open first available tab whenever product changes.
     */
    useEffect(() => {
        setActiveTab(availableTabs[0]?.id || "");
    }, [product]);

    /*
     * Escape key
     */
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [onClose]);

    /*
     * Prevent background scrolling
     */
    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "";
        };
    }, []);

    if (!product) return null;

    const renderContent = () => {
        switch (activeTab) {
            case "description":
                return (
                    <div>
                        <p className="text-sm leading-7 text-gray-600 sm:text-[15px]">
                            {product.description}
                        </p>
                    </div>
                );

            case "specifications":
                return (
                    <div className="overflow-hidden rounded-2xl border border-gray-200">
                        {product.specifications.map((item, index) => (
                            <div
                                key={index}
                                className="grid grid-cols-1 gap-1 border-b border-gray-100 px-4 py-3.5 last:border-b-0 sm:grid-cols-2 sm:gap-5"
                            >
                                <span className="text-xs font-bold uppercase tracking-[0.5px] text-gray-400">
                                    {item.label}
                                </span>

                                <span className="text-sm font-semibold leading-6 text-[#151515]">
                                    {item.value}
                                </span>
                            </div>
                        ))}
                    </div>
                );

            case "material":
                return (
                    <div className="space-y-3">
                        {product.material.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-3 rounded-xl bg-gray-50 px-4 py-3"
                            >
                                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-red-600" />

                                <div>
                                    {item.label ? (
                                        <>
                                            <p className="text-xs font-bold uppercase tracking-[0.5px] text-gray-400">
                                                {item.label}
                                            </p>

                                            <p className="mt-1 text-sm font-semibold text-[#151515]">
                                                {item.value}
                                            </p>
                                        </>
                                    ) : (
                                        <p className="text-sm leading-6 text-gray-700">
                                            {item}
                                        </p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                );

            case "features":
                return (
                    <ul className="space-y-3">
                        {product.features.map((item, index) => (
                            <li
                                key={index}
                                className="flex items-start gap-3 text-sm leading-6 text-gray-600"
                            >
                                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-red-600" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                );

            case "applications":
                return (
                    <div className="grid gap-3 sm:grid-cols-2">
                        {product.applications.map((item, index) => (
                            <div
                                key={index}
                                className="rounded-xl bg-gray-50 px-4 py-3 text-sm font-medium leading-6 text-gray-700"
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                );

            case "advantages":
                return (
                    <ul className="space-y-3">
                        {product.advantages.map((item, index) => (
                            <li
                                key={index}
                                className="flex items-start gap-3 text-sm leading-6 text-gray-600"
                            >
                                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-red-600" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                );

            default:
                return null;
        }
    };

    return (
        <div
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/70 p-3 backdrop-blur-sm sm:p-5"
            onClick={onClose}
        >
            <div
                className="relative flex max-h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-[28px] bg-white shadow-2xl lg:flex-row"
                onClick={(event) => event.stopPropagation()}
            >
                {/* CLOSE */}
                <button
                    type="button"
                    onClick={onClose}
                    aria-label="Close product details"
                    className="absolute right-4 top-4 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg transition-all duration-300 hover:bg-gray-100"
                >
                    <CloseIcon sx={{ fontSize: 21 }} />
                </button>

                {/* IMAGE */}
                <div className="relative min-h-[300px] bg-[#f5f5f5] sm:min-h-[380px] lg:min-h-[650px] lg:w-[42%]">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 1024px) 100vw, 42vw"
                        className="object-contain p-10 sm:p-14 lg:p-16"
                    />

                    <div className="absolute bottom-5 left-5 sm:bottom-7 sm:left-7">
                        <span className="rounded-full bg-white/90 px-4 py-2 text-[10px] font-bold uppercase tracking-[1.5px] text-gray-500 shadow-sm backdrop-blur">
                            {product.category}
                        </span>
                    </div>
                </div>

                {/* DETAILS */}
                <div className="flex min-h-0 flex-1 flex-col overflow-y-auto lg:w-[58%]">
                    <div className="p-6 sm:p-8 lg:p-10">

                        {/* TITLE */}
                        <div className="pr-10">
                            <p className="text-[10px] font-bold uppercase tracking-[2px] text-red-600">
                                KMP Industries
                            </p>

                            <h2 className="mt-3 text-2xl font-bold leading-tight tracking-[-1px] text-[#151515] sm:text-3xl lg:text-4xl">
                                {product.detailTitle || product.name}
                            </h2>
                        </div>

                        {/* TABS */}
                        {availableTabs.length > 0 && (
                            <div className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-3">
                                {availableTabs.map((tab) => {
                                    const isActive =
                                        activeTab === tab.id;

                                    return (
                                        <button
                                            key={tab.id}
                                            type="button"
                                            onClick={() =>
                                                setActiveTab(tab.id)
                                            }
                                            className={`min-h-[52px] rounded-xl px-3 py-3 text-xs font-bold leading-4 transition-all duration-300 sm:px-4 ${isActive
                                                ? "bg-red-600 text-white shadow-lg shadow-red-600/20"
                                                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                                }`}
                                        >
                                            {tab.label}
                                        </button>
                                    );
                                })}
                            </div>
                        )}

                        {/* CONTENT */}
                        <div className="mt-6 min-h-[220px]">
                            {renderContent()}
                        </div>

                        {/* CTA */}
                        <div className="mt-8 border-t border-gray-100 pt-6">
                            <a
                                href="/contact"
                                onClick={onClose}
                                className="group inline-flex items-center gap-3 rounded-full bg-red-600 py-2 pl-6 pr-2 text-sm font-bold text-white transition-all duration-300 hover:bg-red-500 hover:shadow-lg hover:shadow-red-600/20"
                            >
                                <span>Get a Quote</span>

                                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-red-600 transition-transform duration-300 group-hover:rotate-45">
                                    <ArrowOutwardIcon
                                        sx={{ fontSize: 17 }}
                                    />
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}