export default function AboutSection() {
    return (
        <section className="kmp-about-section">

            <div className="container">

                <div className="about-grid">

                    {/* =========================================
                        IMAGE SIDE
                    ========================================= */}

                    <div className="about-image-column">

                        <div className="about-visual">

                            <div className="about-image-main">
                                <img
                                    src="/images/hero/indexhero.png"
                                    alt="KMP Industries Coimbatore manufacturing facility"
                                />
                            </div>


                            {/* Floating Quality Card */}

                            <div className="about-image-box">

                                <span>QUALITY</span>

                                <strong>
                                    ENGINEERED
                                    <br />
                                    FOR RELIABILITY
                                </strong>

                            </div>


                            {/* Decorative Element */}

                            <div className="about-decoration"></div>

                        </div>

                    </div>


                    {/* =========================================
                        CONTENT SIDE
                    ========================================= */}

                    <div className="about-content-column">

                        <div className="about-content">

                            <span className="section-eyebrow">
                                ABOUT KMP INDUSTRIES
                            </span>


                            <h2>
                                Engineering Reliable
                                <span>
                                    {" "}Water Pumping Solutions
                                </span>
                            </h2>


                            <p className="about-lead">
                                KMP Industries is focused on delivering dependable
                                pumping and motor solutions for agriculture,
                                residential and industrial water management.
                            </p>


                            <p className="about-description">
                                Our product portfolio includes borewell
                                submersible pumpsets, openwell submersible pumps,
                                centrifugal and self-priming monoblock pumps,
                                submersible motors and heavy-duty uPVC column
                                pipes.
                            </p>


                            {/* =========================================
                                FEATURES
                            ========================================= */}

                            <div className="about-features">

                                <div className="about-feature-item">

                                    <div className="feature-line"></div>

                                    <div className="feature-content">

                                        <h3>
                                            Precision Engineering
                                        </h3>

                                        <p>
                                            Designed for dependable performance
                                            and efficient water pumping.
                                        </p>

                                    </div>

                                </div>


                                <div className="about-feature-item">

                                    <div className="feature-line"></div>

                                    <div className="feature-content">

                                        <h3>
                                            Quality Focused
                                        </h3>

                                        <p>
                                            Consistent quality and engineering
                                            standards across our product range.
                                        </p>

                                    </div>

                                </div>

                            </div>


                            {/* CTA */}

                            <a
                                href="/about"
                                className="about-button"
                            >
                                <span>
                                    Discover KMP Industries
                                </span>

                                <span className="about-button-arrow">
                                    →
                                </span>
                            </a>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}