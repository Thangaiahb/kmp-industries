"use client";


import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
export default function SolarPage() {
    const applications = [
        {
            number: "01",
            title: "Agriculture",
            text: "Reliable solar-powered water pumping for agricultural fields and irrigation requirements.",
        },
        {
            number: "02",
            title: "Drip Irrigation",
            text: "Efficient pumping solutions designed to support modern irrigation systems and farming needs.",
        },
        {
            number: "03",
            title: "Cattle Watering",
            text: "Dependable water pumping for livestock and cattle watering applications.",
        },
        {
            number: "04",
            title: "Rural Water Supply",
            text: "Solar pumping solutions for villages and locations where conventional power availability is limited.",
        },
        {
            number: "05",
            title: "Schools & Hospitals",
            text: "Reliable water supply solutions for essential community facilities.",
        },
        {
            number: "06",
            title: "Homes",
            text: "Solar-powered water pumping suitable for residential water management requirements.",
        },
    ];

    const pumpSystems = [
        {
            category: "SOLAR SUBMERSIBLE",
            title: "1 HP Solar Pump",
            range: "1 HP",
            description:
                "Compact solar submersible pumping solutions designed for efficient water lifting applications.",
            specs: ["BLDC option", "72V / 80V / 160V", "325W solar modules"],
        },
        {
            category: "SOLAR SUBMERSIBLE",
            title: "2–3 HP Solar Pumps",
            range: "2–3 HP",
            description:
                "Higher-capacity solar submersible systems for irrigation and dependable water pumping.",
            specs: ["160V / 230V", "3-phase options", "325W solar modules"],
        },
        {
            category: "SOLAR SUBMERSIBLE",
            title: "5–25 HP Solar Pumps",
            range: "5–25 HP",
            description:
                "High-capacity solar submersible pumping systems for demanding agricultural and water applications.",
            specs: ["380V systems", "Multi-panel arrays", "High-capacity pumping"],
        },
        {
            category: "SOLAR SURFACE PUMP",
            title: "Solar Monoblock Pumps",
            range: "1–10 HP",
            description:
                "Easy-to-install solar monoblock pumping solutions with low maintenance requirements.",
            specs: ["1–10 HP", "High efficiency", "Surface pumping"],
        },
        {
            category: "SOLAR OPENWELL",
            title: "Solar Openwell Pumps",
            range: "3–10 HP",
            description:
                "Solar openwell pumping systems designed for applications where water levels fluctuate inside wells.",
            specs: ["3–10 HP", "230V / 380V", "Openwell installation"],
        },
    ];

    const features = [
        {
            icon: "☀",
            title: "Solar Powered",
            text: "Harness solar energy for dependable water pumping with reduced dependence on conventional electricity.",
        },
        {
            icon: "⚡",
            title: "High Efficiency",
            text: "Energy-efficient pumping systems designed for reliable operation and effective solar energy utilisation.",
        },
        {
            icon: "◈",
            title: "Smart Controller",
            text: "Automatic controller technology with dynamic MPPT control for efficient solar power utilisation.",
        },
        {
            icon: "◉",
            title: "Dry-Run Protection",
            text: "Controller protection features help protect the pumping system against dry-run conditions.",
        },
    ];

    return (
        <main className="min-h-screen bg-white text-[#151515]">

            {/* =========================================================
                HERO
            ========================================================= */}
            <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black">

                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('/images/solar/solar-bg.png')",
                    }}
                />

                <div className="absolute inset-0 bg-black/50" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />

                <div className="relative z-10 mx-auto max-w-6xl px-6 pt-20 text-center text-white">

                    {/* TAG */}
                    <div className="mx-auto mb-7 inline-flex items-center rounded-full border border-white/25 bg-white/10 px-5 py-2 backdrop-blur-md">
                        <span className="mr-2 h-2 w-2 rounded-full bg-red-500" />

                        <span className="text-[10px] font-bold uppercase tracking-[2px] sm:text-xs">
                            KMP Industries · Coimbatore
                        </span>
                    </div>

                    {/* HEADING */}
                    <h1 className="text-[46px] font-black leading-[0.98] tracking-[-2px] sm:text-6xl md:text-7xl lg:text-[86px]">
                        Solar Powered
                        <br />
                        Water Solutions
                    </h1>

                    <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-white/75 sm:text-xl">
                        Efficient solar pumping solutions designed for
                        agriculture, irrigation and reliable water management.
                    </p>


                    {/* BUTTONS */}
                    <div className="mt-9 flex flex-wrap justify-center gap-4">

                        {/* PRIMARY */}
                        <a
                            href="/products"
                            className="group flex items-center gap-3 rounded-full bg-red-600 py-2 pl-7 pr-2 text-sm font-bold text-white shadow-xl shadow-red-600/30 transition-all duration-300 hover:scale-105 hover:bg-red-700 sm:text-base"
                        >
                            <span>
                                Explore Products
                            </span>

                            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-red-600 transition-transform duration-300 group-hover:rotate-45">
                                <ArrowOutwardIcon
                                    sx={{ fontSize: 19 }}
                                />
                            </span>
                        </a>

                        {/* SECONDARY */}
                        <a
                            href="/contact"
                            className="rounded-full border border-white/30 bg-white/10 px-8 py-4 font-bold text-white backdrop-blur-md transition hover:bg-white hover:text-black"
                        >
                            Get a Quote
                        </a>

                    </div>

                </div>

                {/* BOTTOM ACCENT */}
                <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-red-600 via-red-500 to-transparent" />

            </section>


            {/* =========================================================
                INTRO
            ========================================================= */}
            <section className="px-6 py-24 sm:px-10 lg:py-32">

                <div className="mx-auto max-w-7xl">

                    <div className="grid gap-14 lg:grid-cols-[1fr_0.8fr] lg:items-end">

                        <div>

                            <div className="flex items-center gap-3">

                                <span className="h-2 w-2 rounded-full bg-red-600" />

                                <span className="text-xs font-bold uppercase tracking-[2px] text-gray-400">
                                    KMP Energy Solar Pumps
                                </span>

                            </div>

                            <h2 className="mt-5 max-w-4xl text-4xl font-black leading-[1.05] tracking-[-1.5px] sm:text-5xl lg:text-6xl">
                                Step Towards a
                                <br />
                                <span className="text-red-600">
                                    Greener Future.
                                </span>
                            </h2>

                        </div>

                        <p className="text-base leading-8 text-gray-500">
                            KMP Energy solar pumps combine efficient pumping
                            technology with solar power to provide reliable
                            water pumping solutions for agricultural,
                            irrigation and water-management applications.
                        </p>

                    </div>


                    {/* FEATURE CARDS */}
                    <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

                        {features.map((feature) => (
                            <div
                                key={feature.title}
                                className="group rounded-[28px] border border-gray-100 bg-gray-50 p-7 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl"
                            >

                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-2xl text-white transition group-hover:bg-red-600">
                                    {feature.icon}
                                </div>

                                <h3 className="mt-7 text-xl font-bold">
                                    {feature.title}
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-gray-500">
                                    {feature.text}
                                </p>

                            </div>
                        ))}

                    </div>

                </div>

            </section>


            {/* =========================================================
                PRODUCT SYSTEMS
            ========================================================= */}
            <section className="bg-[#f5f5f3] px-6 py-24 sm:px-10 lg:py-32">

                <div className="mx-auto max-w-7xl">

                    <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

                        <div>

                            <div className="flex items-center gap-3">

                                <span className="h-2 w-2 rounded-full bg-red-600" />

                                <span className="text-xs font-bold uppercase tracking-[2px] text-gray-400">
                                    Solar Pump Systems
                                </span>

                            </div>

                            <h2 className="mt-5 max-w-4xl text-4xl font-black leading-[1.05] tracking-[-1.5px] sm:text-5xl lg:text-6xl">
                                Engineered For
                                <br />
                                <span className="text-red-600">
                                    Every Water Requirement.
                                </span>
                            </h2>

                        </div>

                        <p className="max-w-xl text-sm leading-7 text-gray-500">
                            From compact solar pumping systems to
                            high-capacity agricultural installations,
                            KMP Energy offers multiple solar pump
                            configurations.
                        </p>

                    </div>


                    {/* PRODUCT CARDS */}
                    <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                        {pumpSystems.map((pump, index) => (
                            <div
                                key={pump.title}
                                className={`group relative overflow-hidden rounded-[30px] bg-white p-8 shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-2xl ${index === 2
                                    ? "lg:col-span-1"
                                    : ""
                                    }`}
                            >

                                {/* NUMBER */}
                                <div className="absolute right-6 top-5 text-5xl font-black text-gray-100">
                                    0{index + 1}
                                </div>

                                <div className="relative">

                                    <p className="text-[10px] font-bold uppercase tracking-[2px] text-red-600">
                                        {pump.category}
                                    </p>

                                    <h3 className="mt-4 text-2xl font-black">
                                        {pump.title}
                                    </h3>

                                    <div className="mt-5 inline-flex rounded-full bg-black px-4 py-2 text-xs font-bold text-white">
                                        {pump.range}
                                    </div>

                                    <p className="mt-6 text-sm leading-7 text-gray-500">
                                        {pump.description}
                                    </p>

                                    <div className="mt-7 space-y-3 border-t border-gray-100 pt-6">

                                        {pump.specs.map((spec) => (
                                            <div
                                                key={spec}
                                                className="flex items-center gap-3 text-sm font-medium text-gray-700"
                                            >
                                                <span className="h-1.5 w-1.5 rounded-full bg-red-600" />
                                                {spec}
                                            </div>
                                        ))}

                                    </div>

                                </div>

                                <div className="absolute bottom-0 left-0 h-1 w-0 bg-red-600 transition-all duration-500 group-hover:w-full" />

                            </div>
                        ))}

                    </div>

                </div>

            </section>
            {/* SOLAR MODULE CONFIGURATION */}
            <section className="bg-[#f5f5f3] px-6 py-24">
                <div className="mx-auto max-w-7xl">

                    <div className="grid items-center gap-12 lg:grid-cols-2">

                        {/* LEFT CONTENT */}
                        <div>
                            <p className="text-sm font-bold uppercase tracking-[0.25em] text-red-600">
                                Solar Module Configuration
                            </p>

                            <h2 className="mt-5 text-5xl font-black leading-[1.05] text-gray-900 sm:text-6xl">
                                Series &
                                <br />
                                <span className="text-red-600">Parallel</span>
                                <br />
                                Connection.
                            </h2>

                            <p className="mt-7 max-w-xl text-lg leading-8 text-gray-500">
                                Solar module arrays can be configured in series and
                                parallel combinations depending on the pumping system
                                and required solar input.
                            </p>
                        </div>


                        {/* RIGHT DIAGRAM */}
                        <div className="rounded-[2rem] bg-black p-8 text-white sm:p-10">

                            <div className="grid gap-10 md:grid-cols-2">

                                {/* SERIES */}
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-500">
                                        Series
                                    </p>

                                    <h3 className="mt-3 text-2xl font-bold">
                                        Panels In Series
                                    </h3>

                                    {/* Series Diagram */}
                                    <div className="mt-8">

                                        <div className="flex items-center">

                                            <div className="solar-panel">
                                                PV
                                            </div>

                                            <div className="h-[2px] w-4 bg-red-500" />

                                            <div className="solar-panel">
                                                PV
                                            </div>

                                            <div className="h-[2px] w-4 bg-red-500" />

                                            <div className="solar-panel">
                                                PV
                                            </div>

                                        </div>

                                        <div className="mt-3 flex items-center">

                                            <div className="solar-panel">
                                                PV
                                            </div>

                                            <div className="h-[2px] w-4 bg-red-500" />

                                            <div className="solar-panel">
                                                PV
                                            </div>

                                            <div className="h-[2px] w-4 bg-red-500" />

                                            <div className="solar-panel">
                                                PV
                                            </div>

                                        </div>

                                    </div>

                                    <p className="mt-6 text-sm leading-6 text-white/50">
                                        Series connection increases the available
                                        voltage of the solar array.
                                    </p>
                                </div>


                                {/* PARALLEL */}
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-500">
                                        Parallel
                                    </p>

                                    <h3 className="mt-3 text-2xl font-bold">
                                        Multiple Strings
                                    </h3>

                                    {/* Parallel Diagram */}
                                    <div className="mt-8 space-y-3">

                                        <div className="flex items-center gap-2">
                                            <div className="solar-panel flex-1">
                                                PV
                                            </div>

                                            <span className="text-red-500">→</span>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <div className="solar-panel flex-1">
                                                PV
                                            </div>

                                            <span className="text-red-500">→</span>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <div className="solar-panel flex-1">
                                                PV
                                            </div>

                                            <span className="text-red-500">→</span>
                                        </div>

                                    </div>

                                    <p className="mt-6 text-sm leading-6 text-white/50">
                                        Parallel strings increase the available current
                                        capacity.
                                    </p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>


                {/* PANEL STYLE */}
                <style jsx>{`
        .solar-panel {
            height: 48px;
            min-width: 80px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(255,255,255,0.15);
            border-radius: 8px;
            background:
                linear-gradient(
                    135deg,
                    rgba(255,255,255,0.08),
                    rgba(255,255,255,0.02)
                );
            color: white;
            font-size: 12px;
            font-weight: 700;
            position: relative;
            overflow: hidden;
        }

        .solar-panel::before {
            content: "";
            position: absolute;
            inset: 0;
            background:
                linear-gradient(
                    90deg,
                    transparent 24%,
                    rgba(255,255,255,0.08) 25%,
                    transparent 26%,
                    transparent 49%,
                    rgba(255,255,255,0.08) 50%,
                    transparent 51%,
                    transparent 74%,
                    rgba(255,255,255,0.08) 75%,
                    transparent 76%
                );
            pointer-events: none;
        }

        @media (max-width: 640px) {
            .solar-panel {
                min-width: 65px;
                height: 42px;
            }
        }
    `}</style>
            </section>

            {/* =========================================================
                APPLICATIONS
            ========================================================= */}
            <section className="bg-[#111111] px-6 py-24 text-white sm:px-10 lg:py-32">

                <div className="mx-auto max-w-7xl">

                    <div className="max-w-4xl">

                        <div className="flex items-center gap-3">

                            <span className="h-2 w-2 rounded-full bg-red-500" />

                            <span className="text-xs font-bold uppercase tracking-[2px] text-white/40">
                                Applications
                            </span>

                        </div>

                        <h2 className="mt-5 text-4xl font-black leading-[1.05] tracking-[-1px] sm:text-5xl lg:text-6xl">
                            Solar Power For
                            <br />
                            <span className="text-red-500">
                                Real-World Applications.
                            </span>
                        </h2>

                        <p className="mt-6 max-w-2xl text-base leading-8 text-white/50">
                            KMP Energy solar pumping systems are designed
                            for a wide range of agricultural, residential
                            and community water requirements.
                        </p>

                    </div>


                    {/* APPLICATION GRID */}
                    <div className="mt-16 grid gap-px overflow-hidden rounded-[30px] bg-white/10 md:grid-cols-2 lg:grid-cols-3">

                        {applications.map((application) => (
                            <div
                                key={application.number}
                                className="group bg-[#151515] p-8 transition hover:bg-[#1d1d1d]"
                            >

                                <div className="flex items-center justify-between">

                                    <span className="text-xs font-bold tracking-[2px] text-red-500">
                                        {application.number}
                                    </span>

                                    <span className="text-xl text-white/20 transition group-hover:text-red-500">
                                        ↗
                                    </span>

                                </div>

                                <h3 className="mt-10 text-2xl font-bold">
                                    {application.title}
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-white/45">
                                    {application.text}
                                </p>

                            </div>
                        ))}

                    </div>

                </div>

            </section>


            {/* =========================================================
                SOLAR CONTROLLER
            ========================================================= */}
            <section className="px-6 py-24 sm:px-10 lg:py-32">

                <div className="mx-auto max-w-7xl">

                    <div className="grid overflow-hidden rounded-[36px] bg-[#f4f4f2] lg:grid-cols-[0.9fr_1.1fr]">

                        {/* LEFT */}
                        <div className="relative flex min-h-[420px] items-center overflow-hidden bg-black p-10 sm:p-14">

                            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border border-white/10" />

                            <div className="absolute -bottom-24 -left-20 h-80 w-80 rounded-full border border-red-500/20" />

                            <div className="relative z-10">

                                <p className="text-xs font-bold uppercase tracking-[2px] text-red-500">
                                    Solar Controller
                                </p>

                                <h2 className="mt-5 text-4xl font-black leading-[1.05] text-white sm:text-5xl">
                                    Intelligent Control.
                                    <br />
                                    Maximum Efficiency.
                                </h2>

                                <p className="mt-6 max-w-lg text-sm leading-7 text-white/50">
                                    KMP Energy solar pumping systems use
                                    automatic controller technology with
                                    dynamic MPPT control for effective
                                    utilisation of available solar power.
                                </p>

                            </div>

                        </div>


                        {/* RIGHT */}
                        <div className="p-10 sm:p-14">

                            <p className="text-sm font-bold uppercase tracking-[2px] text-gray-400">
                                Controller Features
                            </p>

                            <div className="mt-8 space-y-5">

                                {[
                                    "Dynamic MPPT control",
                                    "Automatic controller operation",
                                    "Under-voltage protection",
                                    "Over-voltage protection",
                                    "Dry-run protection",
                                    "High conversion efficiency",
                                ].map((item, index) => (
                                    <div
                                        key={item}
                                        className="flex items-center gap-5 border-b border-gray-200 pb-5"
                                    >

                                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black text-xs font-bold text-white">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>

                                        <span className="font-semibold text-gray-800">
                                            {item}
                                        </span>

                                    </div>
                                ))}

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
                HOW IT WORKS
            ========================================================= */}
            <section className="border-y border-gray-100 bg-white px-6 py-24 sm:px-10 lg:py-32">

                <div className="mx-auto max-w-7xl">

                    <div className="text-center">

                        <div className="flex justify-center">

                            <div className="flex items-center gap-3">

                                <span className="h-2 w-2 rounded-full bg-red-600" />

                                <span className="text-xs font-bold uppercase tracking-[2px] text-gray-400">
                                    How It Works
                                </span>

                            </div>

                        </div>

                        <h2 className="mt-5 text-4xl font-black sm:text-5xl lg:text-6xl">
                            From Sunlight
                            <br />
                            <span className="text-red-600">
                                To Flowing Water.
                            </span>
                        </h2>

                        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-500">
                            Solar energy is converted into usable power
                            through the controller to operate the solar
                            pump and deliver water where it is required.
                        </p>

                    </div>


                    {/* FLOW */}
                    <div className="relative mt-20">

                        <div className="hidden h-px bg-gray-200 lg:absolute lg:left-[12%] lg:right-[12%] lg:top-12 lg:block" />

                        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

                            {[
                                {
                                    number: "01",
                                    title: "Solar Panels",
                                    text: "Solar panels capture energy from sunlight.",
                                    icon: "☀",
                                },
                                {
                                    number: "02",
                                    title: "Controller",
                                    text: "The controller manages and converts available solar power.",
                                    icon: "⚡",
                                },
                                {
                                    number: "03",
                                    title: "Solar Pump",
                                    text: "The pump converts electrical energy into water movement.",
                                    icon: "◈",
                                },
                                {
                                    number: "04",
                                    title: "Water Delivery",
                                    text: "Water is delivered for irrigation and other requirements.",
                                    icon: "💧",
                                },
                            ].map((step) => (
                                <div
                                    key={step.number}
                                    className="relative text-center"
                                >

                                    <div className="relative z-10 mx-auto flex h-24 w-24 items-center justify-center rounded-full border-8 border-white bg-black text-3xl text-white shadow-xl">
                                        {step.icon}
                                    </div>

                                    <p className="mt-7 text-xs font-bold tracking-[2px] text-red-600">
                                        {step.number}
                                    </p>

                                    <h3 className="mt-3 text-xl font-bold">
                                        {step.title}
                                    </h3>

                                    <p className="mx-auto mt-3 max-w-xs text-sm leading-7 text-gray-500">
                                        {step.text}
                                    </p>

                                </div>
                            ))}

                        </div>

                    </div>

                </div>

            </section>





            {/* =========================================================
    FINAL CTA
========================================================= */}
            <section className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 md:py-28 lg:px-10">

                <div className="mx-auto max-w-[1380px]">

                    {/* =================================================
            MAIN CTA
        ================================================= */}

                    <div className="relative overflow-hidden rounded-[32px] bg-[#111111] px-7 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">

                        {/* Background decoration */}

                        <div className="pointer-events-none absolute -right-32 -top-32 h-[400px] w-[400px] rounded-full bg-red-600/20 blur-3xl" />

                        <div className="pointer-events-none absolute -bottom-40 left-1/3 h-[350px] w-[350px] rounded-full bg-red-600/10 blur-3xl" />


                        {/* Large background text */}

                        <span className="pointer-events-none absolute -bottom-12 right-5 select-none text-[100px] font-black leading-none tracking-[-8px] text-white/[0.025] sm:text-[150px] lg:text-[200px]">
                            SOLAR
                        </span>


                        <div className="relative z-10">

                            {/* Label */}

                            <div className="flex items-center gap-3">

                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-white">
                                    <span className="text-sm">
                                        ✦
                                    </span>
                                </span>

                                <span className="text-xs font-bold uppercase tracking-[2px] text-white/50">
                                    KMP Energy · Solar Solutions
                                </span>

                            </div>


                            {/* Heading */}

                            <h2 className="mt-7 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-2px] text-white sm:text-5xl md:text-6xl lg:text-[72px]">

                                Power Your Water
                                <br />

                                <span className="text-red-500">
                                    With Solar Energy.
                                </span>

                            </h2>


                            {/* Description */}

                            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/50 sm:text-base">
                                Talk to KMP Industries about your solar pumping,
                                irrigation and water-management requirements.
                            </p>


                            {/* Buttons */}

                            <div className="mt-9 flex flex-col gap-4 sm:flex-row">

                                {/* Get a Quote */}

                                <a
                                    href="/contact"
                                    className="group inline-flex items-center justify-center gap-4 rounded-full bg-red-600 py-2 pl-7 pr-2 text-sm font-bold text-white transition-all duration-300 hover:bg-red-500 hover:shadow-xl hover:shadow-red-600/20"
                                >

                                    <span>
                                        Get a Quote
                                    </span>

                                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-red-600 transition-transform duration-300 group-hover:rotate-45">

                                        <ArrowOutwardIcon
                                            sx={{
                                                fontSize: 19,
                                            }}
                                        />

                                    </span>

                                </a>


                                {/* Explore Products */}

                                <a
                                    href="/products"
                                    className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:border-white/30 hover:bg-white/10"
                                >
                                    Explore Products
                                </a>

                            </div>


                            {/* =================================================
                    SOLAR PRODUCT STRIP
                ================================================= */}

                            <div className="mt-14 grid border-t border-white/10 pt-7 sm:grid-cols-2 lg:grid-cols-4">

                                {[
                                    "Solar Submersible Pumps",
                                    "Solar Monoblock Pumps",
                                    "Solar Openwell Pumps",
                                    "Solar Controllers",
                                ].map((product, index) => (

                                    <div
                                        key={product}
                                        className={`py-3 ${index !== 3
                                            ? "border-b border-white/10 lg:border-b-0 lg:border-r"
                                            : ""
                                            } lg:px-6 ${index === 0
                                                ? "lg:pl-0"
                                                : ""
                                            }`}
                                    >

                                        <p className="text-xs font-bold uppercase tracking-[1px] text-white/70">
                                            {product}
                                        </p>

                                        <p className="mt-1 text-xs text-white/30">
                                            KMP Energy
                                        </p>

                                    </div>

                                ))}

                            </div>

                        </div>

                    </div>


                    {/* =================================================
            CONTACT INFO
        ================================================= */}

                    <div className="mt-8 grid gap-4 sm:grid-cols-2">

                        {/* Phone */}

                        <a
                            href="tel:+919000000000"
                            className="group flex items-center gap-5 rounded-[22px] border border-gray-200 bg-white p-6 transition-all duration-300 hover:border-red-200 hover:shadow-lg"
                        >

                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-600 transition-all duration-300 group-hover:bg-red-600 group-hover:text-white">

                                <PhoneInTalkIcon
                                    sx={{
                                        fontSize: 21,
                                    }}
                                />

                            </div>

                            <div>

                                <p className="text-[10px] font-bold uppercase tracking-[2px] text-gray-400">
                                    Talk to us
                                </p>

                                <p className="mt-1 text-sm font-bold text-[#151515]">
                                    +91 90000 00000
                                </p>

                            </div>

                        </a>


                        {/* Email */}

                        <a
                            href="mailto:info@kmpindustries.com"
                            className="group flex items-center gap-5 rounded-[22px] border border-gray-200 bg-white p-6 transition-all duration-300 hover:border-red-200 hover:shadow-lg"
                        >

                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-600 transition-all duration-300 group-hover:bg-red-600 group-hover:text-white">

                                <EmailOutlinedIcon
                                    sx={{
                                        fontSize: 21,
                                    }}
                                />

                            </div>

                            <div>

                                <p className="text-[10px] font-bold uppercase tracking-[2px] text-gray-400">
                                    Email us
                                </p>

                                <p className="mt-1 text-sm font-bold text-[#151515]">
                                    info@kmpindustries.com
                                </p>

                            </div>

                        </a>

                    </div>


                    {/* =================================================
            BOTTOM BRAND LINE
        ================================================= */}

                    <div className="mt-8 flex items-center justify-between">

                        <div className="flex items-center gap-3">

                            <span className="h-1.5 w-1.5 rounded-full bg-red-600" />

                            <span className="text-[10px] font-bold uppercase tracking-[2px] text-gray-400">
                                KMP Energy · Solar Solutions
                            </span>

                        </div>

                        <span className="hidden text-[10px] font-bold uppercase tracking-[2px] text-gray-400 sm:block">
                            Coimbatore · Tamil Nadu · India
                        </span>

                    </div>

                </div>

            </section>

        </main>
    );
}