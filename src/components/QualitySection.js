const qualityPoints = [
    {
        title: "ISO 9001 Certified Quality",
        description:
            "Quality-focused processes and precision engineering to maintain consistent product performance.",
    },
    {
        title: "Precision Engineering",
        description:
            "Engineered pumping systems designed for dependable operation across agriculture, residential and industrial applications.",
    },
    {
        title: "Corrosion-Resistant Construction",
        description:
            "Durable materials designed to withstand demanding water pumping environments and long-term usage.",
    },
    {
        title: "Performance Tested",
        description:
            "Products are developed with a focus on discharge, head range, efficiency and reliable operating performance.",
    },
];

export default function QualitySection() {
    return (
        <section className="quality-section py-5">
            <div className="container">

                <div className="row align-items-center g-5">

                    {/* Image */}
                    <div className="col-lg-6">
                        <div className="quality-image">
                            <img
                                src="/images/hero-pump.webp.png"
                                alt="KMP Industries quality and precision engineering"
                                className="img-fluid"
                            />
                        </div>
                    </div>

                    {/* Content */}
                    <div className="col-lg-6">

                        <span className="section-subtitle">
                            QUALITY & ENGINEERING
                        </span>

                        <h2>
                            Built Around Quality, Reliability & Precision
                        </h2>

                        <p className="quality-intro">
                            KMP Industries focuses on dependable engineering and
                            quality-driven manufacturing to deliver efficient pumping
                            solutions for demanding applications.
                        </p>

                        <div className="quality-list">

                            {qualityPoints.map((point, index) => (
                                <div className="quality-item" key={index}>

                                    <div className="quality-icon">
                                        ✓
                                    </div>

                                    <div>
                                        <h3>{point.title}</h3>
                                        <p>{point.description}</p>
                                    </div>

                                </div>
                            ))}

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}