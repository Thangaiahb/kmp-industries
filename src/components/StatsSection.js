"use client";

import { useEffect, useState } from "react";

const stats = [
    {
        number: 20,
        suffix: "+",
        label: "Years of Experience",
    },
    {
        number: 50,
        suffix: "+",
        label: "Products",
    },
    {
        number: 100,
        suffix: "+",
        label: "Dealers & Partners",
    },
    {
        number: 25,
        suffix: "+",
        label: "Applications Served",
    },
];

function Counter({ target }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;

        const duration = 1800;
        const incrementTime = 30;

        const increment = target / (duration / incrementTime);

        const timer = setInterval(() => {
            start += increment;

            if (start >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, incrementTime);

        return () => clearInterval(timer);
    }, [target]);

    return <>{count}</>;
}

export default function StatsSection() {
    return (
        <section className="stats-section">

            <div className="container">

                <div className="stats-grid">

                    {stats.map((stat) => (
                        <div
                            className="stat-item"
                            key={stat.label}
                        >

                            {/* Background Number */}

                            <div className="stat-bg-number">
                                {stat.number}
                                {stat.suffix}
                            </div>


                            {/* Animated Number */}

                            <div className="stat-number">
                                <Counter target={stat.number} />
                                {stat.suffix}
                            </div>


                            {/* Label */}

                            <div className="stat-label">
                                {stat.label}
                            </div>

                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
}