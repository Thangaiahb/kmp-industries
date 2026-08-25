const reasons = [
    {
        number: "01",
        title: "ISO 9001 Certified Quality",
        description:
            "Quality-focused manufacturing and precision engineering standards for consistent and dependable product performance.",
    },
    {
        number: "02",
        title: "Energy-Efficient Motors",
        description:
            "Efficient rewindable motor technology designed to deliver reliable pumping performance with reduced energy loss.",
    },
    {
        number: "03",
        title: "Durable Construction",
        description:
            "Robust and corrosion-resistant materials designed for demanding agricultural, residential and industrial environments.",
    },
    {
        number: "04",
        title: "Reliable Distribution",
        description:
            "A growing dealer and partner network supporting customers with dependable products and service across the region.",
    },
];

export default function WhyChooseSection() {
    return (
        <section className="kmp-why-section">

            <div className="container">

                {/* Heading */}
                <div className="why-heading">

                    <div>
                        <span className="section-eyebrow">
                            WHY KMP INDUSTRIES
                        </span>

                        <h2>
                            Built on Quality.
                            <br />
                            <span>Driven by Reliability.</span>
                        </h2>
                    </div>

                    <p>
                        From precision engineering to dependable performance,
                        KMP Industries focuses on delivering pumping solutions
                        that customers can rely on for demanding applications.
                    </p>

                </div>


                {/* Features */}
                <div className="why-grid">

                    {reasons.map((reason) => (
                        <div
                            className="why-premium-card"
                            key={reason.number}
                        >

                            <div className="why-card-number">
                                {reason.number}
                            </div>

                            <div className="why-card-content">

                                <h3>
                                    {reason.title}
                                </h3>

                                <p>
                                    {reason.description}
                                </p>

                            </div>

                            <div className="why-card-arrow">
                                ↗
                            </div>

                        </div>
                    ))}

                </div>


                {/* Bottom Trust Strip */}
                <div className="why-bottom">

                    <div className="why-bottom-item">
                        <strong>QUALITY</strong>
                        <span>Focused Engineering</span>
                    </div>

                    <div className="why-bottom-item">
                        <strong>EFFICIENCY</strong>
                        <span>Energy-Conscious Solutions</span>
                    </div>

                    <div className="why-bottom-item">
                        <strong>RELIABILITY</strong>
                        <span>Built for Long-Term Performance</span>
                    </div>

                    <div className="why-bottom-item">
                        <strong>SUPPORT</strong>
                        <span>Dealer & Customer Network</span>
                    </div>

                </div>

            </div>

        </section>
    );
}