"use client";







import { useEffect, useState } from "react";



import { motion } from "framer-motion";



import Image from "next/image";







import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";



import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";



import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";



import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";



import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";



import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import CloseIcon from "@mui/icons-material/Close";







export default function ContactPage() {



    const [submitted, setSubmitted] = useState(false);



    const [sending, setSending] = useState(false);



    const [error, setError] = useState("");







    const [formData, setFormData] = useState({



        name: "",



        phone: "",



        email: "",



        company: "",



        requirement: "",



        message: "",



    });







    // =========================================================

    // =========================================================

    // SUCCESS POPUP AUTO CLOSE

    // =========================================================



    useEffect(() => {

        if (!submitted) return;



        const timer = setTimeout(() => {

            setSubmitted(false);

        }, 4000);



        return () => clearTimeout(timer);

    }, [submitted]);



    // =========================================================

    // LOCATIONS

    // =========================================================



    const locations = [

        {

            name: "KMP Industries",

            address: [

                "No. 32/1, P.N. Palayam Road,",

                "Ganapathy Housing Unit,",

                "Ganapathy Gardens, Illango Nagar,",

                "Coimbatore, Tamil Nadu – 641006,",

                "India.",

            ],

            mapUrl:

                "https://www.google.com/maps?q=KMP%20Industries,%20No.%2032/1,%20P.N.%20Palayam%20Road,%20Ganapathy%20Housing%20Unit,%20Ganapathy%20Gardens,%20Illango%20Nagar,%20Coimbatore,%20Tamil%20Nadu%20641006&output=embed",

            directionsUrl:

                "https://www.google.com/maps/search/?api=1&query=KMP%20Industries%2C%20No.%2032%2F1%2C%20P.N.%20Palayam%20Road%2C%20Ganapathy%20Housing%20Unit%2C%20Ganapathy%20Gardens%2C%20Illango%20Nagar%2C%20Coimbatore%2C%20Tamil%20Nadu%20641006",

        },

        {

            name: "KMP Industrial Pvt Ltd.",

            address: [

                "43/183-A, E.N.G, Puthu Thottam,",

                "Thottam, Pudur, Gounder Mills,",

                "Coimbatore, Tamil Nadu – 641029,",

                "India.",

            ],

            mapUrl:

                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.7743923639473!2d76.95651409999999!3d11.0555343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859a1c47149b5%3A0x1dfcaec9e2956124!2sKMP%20Industrial%20Pvt%20Ltd.%2C!5e0!3m2!1sen!2sin!4v1791362712212!5m2!1sen!2sin",

            directionsUrl:

                "https://www.google.com/maps/search/?api=1&query=KMP%20Industrial%20Pvt%20Ltd.%2C%2043%2F183-A%2C%20E.N.G%2C%20Puthu%20Thottam%2C%20Thottam%2C%20Pudur%2C%20Gounder%20Mills%2C%20Coimbatore%2C%20Tamil%20Nadu%20641029",

        },

    ];



    const [activeLocation, setActiveLocation] = useState(0);



    const currentLocation = locations[activeLocation];



    const showPreviousLocation = () => {

        setActiveLocation((current) =>

            current === 0 ? locations.length - 1 : current - 1

        );

    };



    const showNextLocation = () => {

        setActiveLocation((current) =>

            current === locations.length - 1 ? 0 : current + 1

        );

    };





    // FORM INPUT CHANGE



    // =========================================================







    const handleChange = (e) => {



        const { name, value } = e.target;







        setFormData((prev) => ({



            ...prev,



            [name]: value,



        }));



    };







    // =========================================================



    // FORM SUBMIT



    // =========================================================







    const handleSubmit = async (e) => {



        e.preventDefault();







        setSending(true);



        setSubmitted(false);



        setError("");







        try {



            const response = await fetch("/api/contact", {



                method: "POST",



                headers: {



                    "Content-Type": "application/json",



                },



                body: JSON.stringify(formData),



            });







            const result = await response.json();







            if (!response.ok) {



                throw new Error(



                    result.message || "Unable to send enquiry."



                );



            }







            // Success



            setSubmitted(true);







            // Clear form



            setFormData({



                name: "",



                phone: "",



                email: "",



                company: "",



                requirement: "",



                message: "",



            });







            // Hide success message after 5 seconds



            setTimeout(() => {



                setSubmitted(false);



            }, 5000);







        } catch (error) {



            console.error("Contact form error:", error);







            setError(



                error.message ||



                "Something went wrong. Please try again."



            );



        } finally {



            setSending(false);



        }



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



                            }}



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



                            icon={



                                <PhoneInTalkIcon



                                    sx={{ fontSize: 23 }}



                                />



                            }



                            title="Call Us"



                            value="+91 90000 00000"



                            description="Speak directly with our team."



                        />







                        {/* Email */}







                        <ContactCard



                            icon={



                                <EmailOutlinedIcon



                                    sx={{ fontSize: 23 }}



                                />



                            }



                            title="Email Us"



                            value="arunthangaiahb@gmail.com"



                            description="Send us your requirements."



                        />







                        {/* Location */}







                        <ContactCard



                            icon={



                                <LocationOnOutlinedIcon



                                    sx={{ fontSize: 23 }}



                                />



                            }



                            title="Visit Us"



                            value="Coimbatore"



                            description="Tamil Nadu, India"



                        />







                        {/* Hours */}







                        <ContactCard



                            icon={



                                <AccessTimeOutlinedIcon



                                    sx={{ fontSize: 23 }}



                                />



                            }



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







                    {/* =================================================



                        LEFT CONTENT



                    ================================================= */}







                    <motion.div



                        initial={{



                            opacity: 0,



                            x: -30,



                        }}



                        whileInView={{



                            opacity: 1,



                            x: 0,



                        }}



                        viewport={{



                            once: true,



                        }}



                        transition={{



                            duration: 0.7,



                        }}



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











                    {/* =================================================



                        FORM



                    ================================================= */}







                    <motion.div



                        initial={{



                            opacity: 0,



                            x: 30,



                        }}



                        whileInView={{



                            opacity: 1,



                            x: 0,



                        }}



                        viewport={{



                            once: true,



                        }}



                        transition={{



                            duration: 0.7,



                        }}



                        className="rounded-[32px] bg-white p-7 shadow-sm sm:p-10"



                    >







                        <form



                            onSubmit={handleSubmit}



                            className="space-y-6"



                        >







                            {/* Name + Phone */}







                            <div className="grid gap-6 sm:grid-cols-2">







                                <InputField



                                    label="Your Name"



                                    name="name"



                                    placeholder="Enter your name"



                                    value={formData.name}



                                    onChange={handleChange}



                                    required



                                />







                                <InputField



                                    label="Phone Number"



                                    name="phone"



                                    placeholder="+91 XXXXX XXXXX"



                                    type="tel"



                                    value={formData.phone}



                                    onChange={handleChange}



                                    required



                                />







                            </div>











                            {/* Email + Company */}







                            <div className="grid gap-6 sm:grid-cols-2">







                                <InputField



                                    label="Email Address"



                                    name="email"



                                    placeholder="you@example.com"



                                    type="email"



                                    value={formData.email}



                                    onChange={handleChange}



                                    required



                                />







                                <InputField



                                    label="Company"



                                    name="company"



                                    placeholder="Company name"



                                    value={formData.company}



                                    onChange={handleChange}



                                />







                            </div>











                            {/* Product / Requirement */}







                            <div>







                                <label className="mb-2 block text-xs font-bold uppercase tracking-[1px] text-gray-500">



                                    Product / Requirement



                                </label>







                                <select



                                    name="requirement"



                                    value={formData.requirement}



                                    onChange={handleChange}



                                    required



                                    className="w-full rounded-2xl border border-gray-200 bg-[#fafafa] px-5 py-4 text-sm outline-none transition focus:border-red-600"



                                >







                                    <option



                                        value=""



                                        disabled



                                    >



                                        Select your requirement



                                    </option>







                                    <option value="Submersible Pumps">



                                        Submersible Pumps



                                    </option>







                                    <option value="Monoblock Pumps">



                                        Monoblock Pumps



                                    </option>







                                    <option value="Motors">



                                        Motors



                                    </option>







                                    <option value="Solar Pumping Solutions">



                                        Solar Pumping Solutions



                                    </option>







                                    <option value="uPVC Column Pipes">



                                        uPVC Column Pipes



                                    </option>







                                    <option value="Other">



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



                                    name="message"



                                    rows={5}



                                    value={formData.message}



                                    onChange={handleChange}



                                    placeholder="Tell us about your requirement..."



                                    className="w-full resize-none rounded-2xl border border-gray-200 bg-[#fafafa] px-5 py-4 text-sm outline-none transition focus:border-red-600"



                                    required



                                />







                            </div>











                            {/* Submit */}







                            <button



                                type="submit"



                                disabled={sending}



                                className="group inline-flex items-center justify-center gap-4 rounded-full bg-red-600 py-2 pl-7 pr-2 text-sm font-bold text-white transition-all duration-300 hover:bg-red-500 hover:shadow-xl hover:shadow-red-600/20 disabled:cursor-not-allowed disabled:opacity-60"



                            >







                                <span>



                                    {sending



                                        ? "Sending..."



                                        : submitted



                                            ? "Enquiry Sent"



                                            : "Send Enquiry"}



                                </span>







                                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-red-600 transition-transform duration-300 group-hover:rotate-45">







                                    <ArrowOutwardIcon



                                        sx={{ fontSize: 19 }}



                                    />







                                </span>







                            </button>











                            {/* Success Message */}







                            {submitted && (

                                <motion.div

                                    initial={{ opacity: 0 }}

                                    animate={{ opacity: 1 }}

                                    exit={{ opacity: 0 }}

                                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/55 px-5 backdrop-blur-sm"

                                    role="dialog"

                                    aria-modal="true"

                                    aria-labelledby="success-title"

                                >

                                    <motion.div

                                        initial={{ opacity: 0, y: 20, scale: 0.92 }}

                                        animate={{ opacity: 1, y: 0, scale: 1 }}

                                        exit={{ opacity: 0, y: 10, scale: 0.96 }}

                                        transition={{

                                            duration: 0.35,

                                            ease: [0.22, 1, 0.36, 1],

                                        }}

                                        className="relative w-full max-w-[430px] overflow-hidden rounded-[28px] bg-white p-8 text-center shadow-2xl sm:p-10"

                                    >

                                        {/* Decorative background glow */}

                                        <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-green-100 blur-3xl" />

                                        <div className="pointer-events-none absolute -bottom-20 -left-16 h-40 w-40 rounded-full bg-red-50 blur-3xl" />



                                        {/* Close button */}

                                        <button

                                            type="button"

                                            onClick={() => setSubmitted(false)}

                                            aria-label="Close success popup"

                                            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition-all duration-200 hover:bg-gray-200 hover:text-gray-800"

                                        >

                                            <CloseIcon sx={{ fontSize: 19 }} />

                                        </button>



                                        <div className="relative">

                                            {/* Success icon */}

                                            <motion.div

                                                initial={{ scale: 0.6 }}

                                                animate={{ scale: 1 }}

                                                transition={{

                                                    delay: 0.12,

                                                    duration: 0.35,

                                                    type: "spring",

                                                    stiffness: 220,

                                                }}

                                                className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-50 ring-8 ring-green-50/60"

                                            >

                                                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-white shadow-lg shadow-green-600/25">

                                                    <CheckCircleIcon sx={{ fontSize: 38 }} />

                                                </div>

                                            </motion.div>



                                            <p className="mt-7 text-[10px] font-bold uppercase tracking-[2.5px] text-green-600">

                                                Message Received

                                            </p>



                                            <h3

                                                id="success-title"

                                                className="mt-2 text-2xl font-bold tracking-[-0.5px] text-[#111111] sm:text-3xl"

                                            >

                                                Enquiry Sent Successfully!

                                            </h3>



                                            <p className="mx-auto mt-4 max-w-sm text-sm leading-6 text-gray-500">

                                                Thank you for contacting KMP Industries.

                                                Our team has received your enquiry and

                                                will get back to you soon.

                                            </p>



                                            <button

                                                type="button"

                                                onClick={() => setSubmitted(false)}

                                                className="mt-7 inline-flex items-center justify-center rounded-full bg-[#111111] px-7 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-red-600"

                                            >

                                                Done

                                            </button>



                                            <p className="mt-4 text-[11px] text-gray-400">

                                                This message will close automatically.

                                            </p>

                                        </div>

                                    </motion.div>

                                </motion.div>

                            )}

                            {/* Error Message */}







                            {error && (







                                <p className="text-sm font-medium text-red-600">



                                    {error}



                                </p>







                            )}







                        </form>







                    </motion.div>







                </div>







            </section>











            {/* =========================================================

                LOCATION SLIDESHOW

            ========================================================= */}



            <section className="px-5 py-20 sm:px-8 md:py-28 lg:px-10">

                <div className="mx-auto max-w-[1380px]">

                    <div className="mb-10">

                        <p className="text-xs font-bold uppercase tracking-[2.5px] text-red-500">

                            Our Locations

                        </p>



                        <h2 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-[-2px] sm:text-5xl lg:text-6xl">

                            Visit KMP Industries.

                        </h2>



                        <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">

                            Explore our Coimbatore locations.

                        </p>

                    </div>



                    <motion.div

                        key={currentLocation.name}

                        initial={{ opacity: 0, x: 25 }}

                        animate={{ opacity: 1, x: 0 }}

                        transition={{ duration: 0.35 }}

                        className="relative min-h-[520px] overflow-hidden rounded-[32px] bg-[#111111]"

                    >

                        {/* Google Map */}

                        <iframe

                            src={currentLocation.mapUrl}

                            width="100%"

                            height="100%"

                            style={{ border: 0 }}

                            allowFullScreen

                            loading="lazy"

                            referrerPolicy="strict-origin-when-cross-origin"

                            title={`${currentLocation.name} Google Map`}

                            className="absolute inset-0 h-full min-h-[520px] w-full"

                        />



                        {/* Dark overlay for readability */}

                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/10" />



                        {/* Previous arrow */}

                        <button

                            type="button"

                            onClick={showPreviousLocation}

                            aria-label="Previous location"

                            className="absolute left-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/70 text-white shadow-2xl backdrop-blur transition-all duration-300 hover:scale-110 hover:bg-red-600 sm:left-7"

                        >

                            <ChevronLeftIcon sx={{ fontSize: 30 }} />

                        </button>



                        {/* Next arrow */}

                        <button

                            type="button"

                            onClick={showNextLocation}

                            aria-label="Next location"

                            className="absolute right-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/70 text-white shadow-2xl backdrop-blur transition-all duration-300 hover:scale-110 hover:bg-red-600 sm:right-7"

                        >

                            <ChevronRightIcon sx={{ fontSize: 30 }} />

                        </button>



                        {/* Address popup/card */}

                        <div className="absolute bottom-5 left-5 right-5 z-10 sm:bottom-7 sm:left-7 sm:right-auto sm:max-w-[520px]">

                            <div className="rounded-[24px] border border-white/15 bg-black/80 p-6 shadow-2xl backdrop-blur-xl sm:p-7">

                                <div className="flex items-start gap-4">

                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-red-600 text-white">

                                        <LocationOnOutlinedIcon sx={{ fontSize: 23 }} />

                                    </div>



                                    <div className="min-w-0">

                                        <p className="text-[10px] font-bold uppercase tracking-[2px] text-red-400">

                                            Location {activeLocation + 1} of {locations.length}

                                        </p>



                                        <h3 className="mt-1 text-xl font-bold text-white sm:text-2xl">

                                            {currentLocation.name}

                                        </h3>



                                        <p className="mt-3 text-xs leading-6 text-white/65 sm:text-sm">

                                            {currentLocation.address.map((line, index) => (

                                                <span key={`${line}-${index}`}>

                                                    {line}

                                                    {index < currentLocation.address.length - 1 && (

                                                        <br />

                                                    )}

                                                </span>

                                            ))}

                                        </p>



                                        <a

                                            href={currentLocation.directionsUrl}

                                            target="_blank"

                                            rel="noopener noreferrer"

                                            className="group mt-5 inline-flex items-center gap-3 text-xs font-bold text-white"

                                        >

                                            <span>Get Directions</span>



                                            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-600 transition-transform duration-300 group-hover:rotate-45">

                                                <ArrowOutwardIcon sx={{ fontSize: 16 }} />

                                            </span>

                                        </a>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </motion.div>

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







                                {/* Call */}







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











                                {/* Email */}







                                <a



                                    href="mailto:arunthangaiahb@gmail.com"



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











// /* =========================================================



//    CONTACT CARD



// ========================================================= */







function ContactCard({



    icon,



    title,



    value,



    description,



}) {



    return (







        <motion.div



            whileHover={{



                y: -5,



            }}



            transition={{



                duration: 0.25,



            }}



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











// /* =========================================================



//    INPUT FIELD



// ========================================================= */







function InputField({



    label,



    name,



    placeholder,



    type = "text",



    required = false,



    value,



    onChange,



}) {



    return (







        <div>







            <label className="mb-2 block text-xs font-bold uppercase tracking-[1px] text-gray-500">



                {label}



            </label>







            <input



                type={type}



                name={name}



                value={value}



                onChange={onChange}



                placeholder={placeholder}



                required={required}



                className="w-full rounded-2xl border border-gray-200 bg-[#fafafa] px-5 py-4 text-sm outline-none transition placeholder:text-gray-400 focus:border-red-600"



            />







        </div>







    );



}
