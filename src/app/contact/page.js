"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);

        setTimeout(() => {
            setSubmitted(false);
        }, 4000);
    };

    return (
        <main className="bg-white text-[#111111]">

            {/* =========================================================
                HERO
            ========================================================= */}
            <section className="px-3 pt-3 sm:px-5">
                <div className="relative min-h-[520px] overflow-hidden rounded-[28px] bg-[#111111]">

                    {/* Background */}
                    <div className="absolute inset-0">
                        <Image
                            src="/images/contact/contact-hero.png"
                            alt="KMP Industries Contact"
                            fill
                            priority
                            className="object-cover"
                        />
                    </div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/65" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />

                    {/* Content */}
                    <div className="relative z-10 flex min-h-[520px] items-center">

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            className="px-6 sm:px-10 lg:px-16"
                        >

                            <div className="flex items-center gap-3">
                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-sm text-white">
                                    ✦
                                </span>

                                <span className="text-xs font-bold uppercase tracking-[2.5px] text-white/70">
                                    Contact KMP Industries
                                </span>
                            </div>

                            <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[1] tracking-[-3px] text-white sm:text-6xl lg:text-[76px]">
                                Let&apos;s Talk About
                                <br />
                                <span className="text-red-600">
                                    Your Water Needs.
                                </span>
                            </h1>

                            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
                                Whether you need a pumping solution for
                                agriculture, residential or industrial
                                applications, our team is ready to help.
                            </p>

                        </motion.div>
                    </div>

                    {/* Bottom label */}
                    <div className="absolute bottom-7 left-7 z-10 sm:left-10">
                        <span className="rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-[10px] font-bold uppercase tracking-[2px] text-white/70 backdrop-blur">
                            Pumping Solutions · Coimbatore
                        </span>
                    </div>

                </div>
            </section>


            {/* =========================================================
                CONTACT INFO
            ========================================================= */}
            <section className="px-5 py-20 sm:px-8 md:py-28 lg:px-10">

                <div className="mx-auto max-w-[1380px]">

                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="mb-12"
                    >

                        <div className="mb-5 flex items-center gap-3">
                            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-sm text-white">
                                ✦
                            </span>

                            <span className="text-xs font-bold uppercase tracking-[2.5px] text-gray-500">
                                Get In Touch
                            </span>
                        </div>

                        <h2 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-2px] sm:text-5xl lg:text-6xl">
                            We&apos;re here to help you
                            <br />
                            <span className="text-red-600">
                                find the right solution.
                            </span>
                        </h2>

                    </motion.div>


                    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">

                        {/* Phone */}
                        <ContactCard
                            icon={<PhoneInTalkIcon sx={{ fontSize: 23 }} />}
                            title="Call Us"
                            value="+91 90000 00000"
                            description="Speak directly with our team."
                        />

                        {/* Email */}
                        <ContactCard
                            icon={<EmailOutlinedIcon sx={{ fontSize: 23 }} />}
                            title="Email Us"
                            value="info@kmpindustries.com"
                            description="Send us your requirements."
                        />

                        {/* Location */}
                        <ContactCard
                            icon={<LocationOnOutlinedIcon sx={{ fontSize: 23 }} />}
                            title="Visit Us"
                            value="Coimbatore"
                            description="Tamil Nadu, India"
                        />

                        {/* Hours */}
                        <ContactCard
                            icon={<AccessTimeOutlinedIcon sx={{ fontSize: 23 }} />}
                            title="Working Hours"
                            value="09:00 AM – 06:00 PM"
                            description="Monday – Saturday"
                        />

                    </div>

                </div>

            </section>


            {/* =========================================================
                CONTACT FORM
            ========================================================= */}
            <section className="bg-[#f5f5f5] px-5 py-20 sm:px-8 md:py-28 lg:px-10">

                <div className="mx-auto grid max-w-[1380px] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

                    {/* LEFT */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >

                        <div className="mb-5 flex items-center gap-3">
                            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-sm text-white">
                                ✦
                            </span>

                            <span className="text-xs font-bold uppercase tracking-[2.5px] text-gray-500">
                                Send An Enquiry
                            </span>
                        </div>

                        <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-2px] sm:text-5xl lg:text-6xl">
                            Tell us what
                            <br />
                            <span className="text-red-600">
                                you need.
                            </span>
                        </h2>

                        <p className="mt-6 max-w-md text-sm leading-7 text-gray-500">
                            Share your requirement with us and our team
                            will get back to you with the right pumping
                            solution.
                        </p>


                        {/* Points */}
                        <div className="mt-10 space-y-4">

                            {[
                                "Agricultural pumping solutions",
                                "Residential & commercial water systems",
                                "Industrial pumping requirements",
                                "Solar pumping solutions",
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="flex items-center gap-3"
                                >
                                    <CheckCircleIcon
                                        sx={{
                                            fontSize: 19,
                                            color: "#dc2626",
                                        }}
                                    />

                                    <span className="text-sm font-medium text-gray-700">
                                        {item}
                                    </span>
                                </div>
                            ))}

                        </div>

                    </motion.div>


                    {/* FORM */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="rounded-[32px] bg-white p-7 shadow-sm sm:p-10"
                    >

                        <form
                            onSubmit={handleSubmit}
                            className="space-y-6"
                        >

                            <div className="grid gap-6 sm:grid-cols-2">

                                <InputField
                                    label="Your Name"
                                    placeholder="Enter your name"
                                    required
                                />

                                <InputField
                                    label="Phone Number"
                                    placeholder="+91 XXXXX XXXXX"
                                    type="tel"
                                    required
                                />

                            </div>


                            <div className="grid gap-6 sm:grid-cols-2">

                                <InputField
                                    label="Email Address"
                                    placeholder="you@example.com"
                                    type="email"
                                    required
                                />

                                <InputField
                                    label="Company"
                                    placeholder="Company name"
                                />

                            </div>


                            {/* Product */}
                            <div>
                                <label className="mb-2 block text-xs font-bold uppercase tracking-[1px] text-gray-500">
                                    Product / Requirement
                                </label>

                                <select
                                    className="w-full rounded-2xl border border-gray-200 bg-[#fafafa] px-5 py-4 text-sm outline-none transition focus:border-red-600"
                                    defaultValue=""
                                >
                                    <option value="" disabled>
                                        Select your requirement
                                    </option>

                                    <option>
                                        Submersible Pumps
                                    </option>

                                    <option>
                                        Monoblock Pumps
                                    </option>

                                    <option>
                                        Motors
                                    </option>

                                    <option>
                                        Solar Pumping Solutions
                                    </option>

                                    <option>
                                        uPVC Column Pipes
                                    </option>

                                    <option>
                                        Other
                                    </option>
                                </select>
                            </div>


                            {/* Message */}
                            <div>
                                <label className="mb-2 block text-xs font-bold uppercase tracking-[1px] text-gray-500">
                                    Message
                                </label>

                                <textarea
                                    rows={5}
                                    placeholder="Tell us about your requirement..."
                                    className="w-full resize-none rounded-2xl border border-gray-200 bg-[#fafafa] px-5 py-4 text-sm outline-none transition focus:border-red-600"
                                    required
                                />
                            </div>


                            {/* Submit */}
                            <button
                                type="submit"
                                className="group inline-flex items-center justify-center gap-4 rounded-full bg-red-600 py-2 pl-7 pr-2 text-sm font-bold text-white transition-all duration-300 hover:bg-red-500 hover:shadow-xl hover:shadow-red-600/20"
                            >
                                <span>
                                    {submitted
                                        ? "Enquiry Sent"
                                        : "Send Enquiry"}
                                </span>

                                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-red-600 transition-transform duration-300 group-hover:rotate-45">
                                    <ArrowOutwardIcon
                                        sx={{ fontSize: 19 }}
                                    />
                                </span>
                            </button>

                            {submitted && (
                                <p className="text-sm font-medium text-green-600">
                                    Thank you! We&apos;ll get back to you soon.
                                </p>
                            )}

                        </form>

                    </motion.div>

                </div>

            </section>


            {/* =========================================================
                LOCATION
            ========================================================= */}
            <section className="px-5 py-20 sm:px-8 md:py-28 lg:px-10">

                <div className="mx-auto max-w-[1380px]">

                    <div className="grid overflow-hidden rounded-[32px] bg-[#111111] lg:grid-cols-2">

                        {/* Map Placeholder */}
                        <div className="relative min-h-[400px] overflow-hidden bg-[#1a1a1a]">

                            <div className="absolute inset-0 opacity-30">
                                <div className="absolute left-[20%] top-[25%] h-32 w-32 rounded-full border border-white/20" />
                                <div className="absolute right-[15%] top-[45%] h-52 w-52 rounded-full border border-white/10" />
                                <div className="absolute bottom-[10%] left-[40%] h-40 w-40 rounded-full border border-white/10" />
                            </div>

                            <div className="absolute inset-0 flex items-center justify-center">

                                <div className="text-center">

                                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-600 text-white shadow-2xl shadow-red-600/30">
                                        <LocationOnOutlinedIcon
                                            sx={{ fontSize: 30 }}
                                        />
                                    </div>

                                    <p className="mt-5 text-lg font-bold text-white">
                                        Coimbatore, Tamil Nadu
                                    </p>

                                    <p className="mt-2 text-sm text-white/50">
                                        KMP Industries
                                    </p>

                                </div>

                            </div>

                        </div>


                        {/* Address */}
                        <div className="flex items-center px-8 py-12 sm:px-12 lg:px-16">

                            <div>

                                <p className="text-xs font-bold uppercase tracking-[2.5px] text-red-500">
                                    Our Location
                                </p>

                                <h3 className="mt-5 text-3xl font-bold text-white sm:text-4xl">
                                    Visit KMP Industries.
                                </h3>

                                <p className="mt-5 max-w-md text-sm leading-7 text-white/55">
                                    KMP Industries
                                    <br />
                                    Industrial Estate,
                                    <br />
                                    Coimbatore,
                                    <br />
                                    Tamil Nadu – 641001,
                                    <br />
                                    India.
                                </p>

                                <a
                                    href="#"
                                    className="group mt-8 inline-flex items-center gap-3 text-sm font-bold text-white"
                                >
                                    <span>
                                        Get Directions
                                    </span>

                                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-red-600 transition-transform duration-300 group-hover:rotate-45">
                                        <ArrowOutwardIcon
                                            sx={{ fontSize: 17 }}
                                        />
                                    </span>
                                </a>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
                FINAL CTA
            ========================================================= */}
            <section className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 md:py-28 lg:px-10">

                <div className="mx-auto max-w-[1380px]">

                    <div className="relative overflow-hidden rounded-[32px] bg-[#111111] px-7 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20">

                        {/* Glow */}
                        <div className="pointer-events-none absolute -right-32 -top-32 h-[400px] w-[400px] rounded-full bg-red-600/20 blur-3xl" />

                        <div className="pointer-events-none absolute -bottom-40 left-1/3 h-[350px] w-[350px] rounded-full bg-red-600/10 blur-3xl" />

                        {/* Background text */}
                        <div className="pointer-events-none absolute -bottom-10 right-0 select-none text-[150px] font-black leading-none tracking-[-12px] text-white/[0.025] sm:text-[220px]">
                            KMP
                        </div>

                        <div className="relative z-10">

                            <div className="flex items-center gap-3">
                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-sm text-white">
                                    ✦
                                </span>

                                <span className="text-xs font-bold uppercase tracking-[2.5px] text-white/50">
                                    Let&apos;s Work Together
                                </span>
                            </div>

                            <h2 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-2px] text-white sm:text-5xl lg:text-6xl">
                                Looking for the right
                                <br />
                                <span className="text-red-600">
                                    pumping solution?
                                </span>
                            </h2>

                            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">
                                Talk to KMP Industries about pumps, motors,
                                solar pumping systems and uPVC column pipes
                                for your next project.
                            </p>

                            <div className="mt-9 flex flex-wrap gap-4">

                                <a
                                    href="tel:+919000000000"
                                    className="group inline-flex items-center justify-center gap-4 rounded-full bg-red-600 py-2 pl-7 pr-2 text-sm font-bold text-white transition-all duration-300 hover:bg-red-500"
                                >
                                    <span>
                                        Call Us
                                    </span>

                                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-red-600 transition-transform duration-300 group-hover:rotate-45">
                                        <PhoneInTalkIcon
                                            sx={{ fontSize: 19 }}
                                        />
                                    </span>
                                </a>

                                <a
                                    href="mailto:info@kmpindustries.com"
                                    className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:border-white/30 hover:bg-white/10"
                                >
                                    Email Us
                                </a>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

        </main>
    );
}


/* =========================================================
   CONTACT CARD
========================================================= */

function ContactCard({
    icon,
    title,
    value,
    description,
}) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.25 }}
            className="rounded-[24px] border border-gray-100 bg-[#fafafa] p-6"
        >

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-600 text-white">
                {icon}
            </div>

            <p className="mt-6 text-xs font-bold uppercase tracking-[1.5px] text-gray-400">
                {title}
            </p>

            <h3 className="mt-2 break-words text-lg font-bold text-[#111111]">
                {value}
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-500">
                {description}
            </p>

        </motion.div>
    );
}


/* =========================================================
   INPUT FIELD
========================================================= */

function InputField({
    label,
    placeholder,
    type = "text",
    required = false,
}) {
    return (
        <div>
            <label className="mb-2 block text-xs font-bold uppercase tracking-[1px] text-gray-500">
                {label}
            </label>

            <input
                type={type}
                placeholder={placeholder}
                required={required}
                className="w-full rounded-2xl border border-gray-200 bg-[#fafafa] px-5 py-4 text-sm outline-none transition placeholder:text-gray-400 focus:border-red-600"
            />
        </div>
    );
}