
import "./globals.css";

import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  metadataBase: new URL("https://kmpindustries.com"),

  title: {
    default:
      "KMP Industries | Leading Submersible Pump & uPVC Pipe Manufacturer",
    template: "%s | KMP Industries",
  },

  description:
    "Discover energy-efficient borewell submersible pumps, openwell monoblock pumps, and uPVC column pipes from KMP Industries, Coimbatore. ISO 9001 certified quality.",

  alternates: {
    canonical: "https://kmpindustries.com/",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title:
      "KMP Industries | Leading Submersible Pump & uPVC Pipe Manufacturer",
    description:
      "Energy-efficient submersible pumps, motors and uPVC column pipes from KMP Industries, Coimbatore.",
    url: "https://kmpindustries.com/",
    siteName: "KMP Industries",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}