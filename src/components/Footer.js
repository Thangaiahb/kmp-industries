const products = [
    {
        name: "Borewell Submersible Pumps",
        link: "/products/borewell-submersible-pumps",
    },
    {
        name: "Openwell Submersible Pumps",
        link: "/products/openwell-pumps",
    },
    {
        name: "Monoblock Pumps",
        link: "/products/monoblock-pumps",
    },
    {
        name: "Submersible Motors",
        link: "/products/motors",
    },
    {
        name: "uPVC Column Pipes",
        link: "/products/upvc-column-pipes",
    },
];

export default function Footer() {
    return (
        <footer className="kmp-footer">

            <div className="container">

                {/* Main Footer */}
                <div className="footer-main">

                    {/* Company */}
                    <div className="footer-company">

                        <a href="/" className="footer-logo">
                            <img
                                src="/images/logo/kmp-logo.png"
                                alt="KMP Industries"
                            />
                        </a>

                        <p>
                            KMP Industries provides reliable and energy-efficient
                            pumping solutions, motors and uPVC column pipes for
                            agricultural, residential and industrial applications.
                        </p>

                        <a
                            href="/contact"
                            className="footer-enquiry"
                        >
                            Start an Enquiry
                            <span>→</span>
                        </a>

                    </div>


                    {/* Quick Links */}
                    <div className="footer-column">

                        <h3>Company</h3>

                        <ul>
                            <li>
                                <a href="/">Home</a>
                            </li>

                            <li>
                                <a href="/about">About Us</a>
                            </li>

                            <li>
                                <a href="/applications">Applications</a>
                            </li>

                            <li>
                                <a href="/quality">Quality</a>
                            </li>

                            <li>
                                <a href="/contact">Contact</a>
                            </li>
                        </ul>

                    </div>


                    {/* Products */}
                    <div className="footer-column footer-products">

                        <h3>Products</h3>

                        <ul>
                            {products.map((product) => (
                                <li key={product.link}>
                                    <a href={product.link}>
                                        {product.name}
                                    </a>
                                </li>
                            ))}
                        </ul>

                    </div>


                    {/* Contact */}
                    <div className="footer-column footer-contact">

                        <h3>Contact</h3>

                        <div className="footer-contact-item">

                            <span className="footer-contact-label">
                                ADDRESS
                            </span>

                            <p>
                                No. 32/1, P.N. Palayam Road,
                                <br />
                                Ganapathy, Coimbatore,
                                <br />
                                Tamil Nadu
                            </p>

                        </div>


                        <div className="footer-contact-item">

                            <span className="footer-contact-label">
                                PHONE
                            </span>

                            <a href="tel:+91XXXXXXXXXX">
                                +91 XXXXX XXXXX
                            </a>

                        </div>


                        <div className="footer-contact-item">

                            <span className="footer-contact-label">
                                EMAIL
                            </span>

                            <a href="mailto:info@kmpindustries.com">
                                info@kmpindustries.com
                            </a>

                        </div>

                    </div>

                </div>


                {/* Footer Bottom */}
                <div className="footer-bottom">

                    <p>
                        © {new Date().getFullYear()} KMP Industries.
                        All Rights Reserved.
                    </p>

                    <div className="footer-bottom-links">

                        <a href="/privacy-policy">
                            Privacy Policy
                        </a>

                        <a href="/terms">
                            Terms & Conditions
                        </a>

                    </div>

                </div>

            </div>

        </footer>
    );
}