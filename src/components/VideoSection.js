export default function VideoSection() {
    return (
        <section className="kmp-video-section">

            <div className="container">

                <div className="video-heading">

                    <div>
                        <span className="section-eyebrow">
                            SEE KMP IN ACTION
                        </span>

                        <h2>
                            Engineering You Can
                            <br />
                            <span>See & Trust.</span>
                        </h2>
                    </div>

                    <p>
                        Discover KMP Industries, our products and engineering
                        capabilities through our latest company and product videos.
                    </p>

                </div>


                {/* Video */}
                <div className="video-wrapper">

                    <iframe
                        src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                        title="KMP Industries company video"
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>

                </div>

            </div>

        </section>
    );
}