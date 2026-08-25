const applications = [
    {
        number: "01",
        title: "Agricultural",
        subtitle: "IRRIGATION & BOREWELL PUMPING",
        description:
            "Reliable pumping solutions for agricultural irrigation, deep borewell pumping and efficient water distribution.",
        image: "/images/applications/agriculture.webp",
    },
    {
        number: "02",
        title: "Residential",
        subtitle: "DOMESTIC & HIGH-RISE WATER SUPPLY",
        description:
            "Efficient water supply solutions for homes, apartments and high-rise residential buildings.",
        image: "/images/applications/residential.webp",
    },
    {
        number: "03",
        title: "Industrial",
        subtitle: "COMMERCIAL & PRESSURE BOOSTING",
        description:
            "Dependable pumping systems for industrial processes, commercial buildings and pressure boosting applications.",
        image: "/images/applications/industrial.webp",
    },
];

export default function ApplicationsSection() {
    return (
        <section className="kmp-applications-section">

            <div className="container">

                {/* Heading */}
                <div className="applications-heading">

                    <div>
                        <span className="section-eyebrow">
                            APPLICATIONS & INDUSTRIES
                        </span>

                        <h2>
                            Solutions for
                            <br />
                            <span>Every Water Need.</span>
                        </h2>
                    </div>

                    <p>
                        From agricultural irrigation to residential water supply
                        and industrial applications, KMP pumping solutions are
                        engineered to perform where reliability matters.
                    </p>

                </div>


                {/* Application Cards */}
                <div className="applications-editorial-grid">

                    {applications.map((application) => (
                        <div
                            className="application-editorial-card"
                            key={application.number}
                        >

                            {/* Image */}
                            <div className="application-image">

                                <img
                                    src={application.image}
                                    alt={`${application.title} water pumping solutions`}
                                />

                                <div className="application-overlay"></div>

                                <span className="application-number">
                                    {application.number}
                                </span>

                            </div>


                            {/* Content */}
                            <div className="application-content">

                                <span className="application-subtitle">
                                    {application.subtitle}
                                </span>

                                <h3>
                                    {application.title}
                                </h3>

                                <p>
                                    {application.description}
                                </p>

                                <a href="/applications">
                                    Explore Application
                                    <span>↗</span>
                                </a>

                            </div>

                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
}