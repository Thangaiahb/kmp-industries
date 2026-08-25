export default function ContactCTA() {
    return (
        <section className="kmp-contact-cta">

            <div className="contact-cta-bg">
                <img
                    src="/images/contact/contact-kmp.webp"
                    alt="KMP Industries pumping solutions"
                />
            </div>

            <div className="contact-cta-overlay"></div>

            <div className="container contact-cta-container">

                <div className="contact-cta-content">

                    <span className="contact-cta-eyebrow">
                        LET'S WORK TOGETHER
                    </span>

                    <h2>
                        Looking for the Right
                        <br />
                        <span>Pumping Solution?</span>
                    </h2>

                    <p>
                        Connect with KMP Industries for product enquiries,
                        technical requirements, quotations and dealer information.
                    </p>

                    <div className="contact-cta-buttons">

                        <a
                            href="/contact"
                            className="contact-primary-btn"
                        >
                            Request a Quote
                            <span>→</span>
                        </a>

                        <a
                            href="tel:+91XXXXXXXXXX"
                            className="contact-phone-btn"
                        >
                            Call Our Team
                        </a>

                    </div>

                </div>

            </div>

        </section>
    );
}