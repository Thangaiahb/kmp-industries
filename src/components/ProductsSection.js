const products = [
    {
        number: "01",
        category: "SUBMERSIBLE PUMPS",
        title: "Borewell Submersible Pumpsets",
        description:
            "High-performance V4, V6 and V8 borewell submersible pumpsets designed for reliable deep borewell water pumping.",
        image: "/images/products/borewell-pump.webp",
        link: "/products/borewell-submersible-pumps",
    },
    {
        number: "02",
        category: "OPENWELL SYSTEMS",
        title: "Openwell Submersible Pumps",
        description:
            "Horizontal and vertical openwell pumping solutions for agricultural, domestic and water supply applications.",
        image: "/images/products/openwell-pump.webp",
        link: "/products/openwell-pumps",
    },
    {
        number: "03",
        category: "MONOBLOCK PUMPS",
        title: "Centrifugal & Self-Priming Pumps",
        description:
            "Reliable monoblock pumps engineered for efficient water transfer and pressure applications.",
        image: "/images/products/monoblock-pump.webp",
        link: "/products/monoblock-pumps",
    },
    {
        number: "04",
        category: "MOTOR SOLUTIONS",
        title: "Submersible Motors",
        description:
            "Energy-efficient rewindable motors designed for dependable performance in submersible pumping systems.",
        image: "/images/products/motor.webp",
        link: "/products/motors",
    },
    {
        number: "05",
        category: "PIPE SYSTEMS",
        title: "uPVC Column Pipes",
        description:
            "Heavy-duty uPVC column pipes designed for durable and reliable submersible pump installations.",
        image: "/images/products/upvc-pipe.webp",
        link: "/products/upvc-column-pipes",
    },
];

export default function ProductsSection() {
    return (
        <section className="kmp-products-section">

            <div className="container">

                {/* Section Heading */}
                <div className="products-heading">

                    <div>
                        <span className="section-eyebrow">
                            OUR PRODUCTS
                        </span>

                        <h2>
                            Engineered Solutions
                            <br />
                            <span>Built to Perform.</span>
                        </h2>
                    </div>

                    <div className="products-intro">
                        <p>
                            Explore KMP Industries' range of pumping, motor and
                            pipe solutions designed for reliable performance across
                            agriculture, residential and industrial applications.
                        </p>

                        <a href="/products" className="products-all-link">
                            View All Products
                            <span>→</span>
                        </a>
                    </div>

                </div>


                {/* Product Grid */}
                <div className="products-premium-grid">

                    {products.map((product) => (
                        <a
                            href={product.link}
                            className="premium-product-card"
                            key={product.number}
                        >

                            {/* Image */}
                            <div className="premium-product-image">

                                <img
                                    src={product.image}
                                    alt={product.title}
                                />

                            </div>


                            {/* Content */}
                            <div className="premium-product-content">

                                <div className="product-top-line">

                                    <span>
                                        {product.number}
                                    </span>

                                    <span className="product-category">
                                        {product.category}
                                    </span>

                                </div>

                                <h3>
                                    {product.title}
                                </h3>

                                <p>
                                    {product.description}
                                </p>

                                <span className="product-explore">
                                    Explore Product
                                    <span>↗</span>
                                </span>

                            </div>

                        </a>
                    ))}

                </div>

            </div>

        </section>
    );
}