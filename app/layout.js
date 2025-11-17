import "./globals.css";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

// --------------------
// 🔹 SEO + Meta Config
// --------------------
export const metadata = {
  // title: "Basera Properties — Premium Real Estate & Dream Homes",
  // description:
  //   "Find your dream property with Basera Properties. Premium real estate listings, luxury homes, expert agents. 120K+ deals closed, 1500+ houses sold.",
  // keywords: [
  //   "real estate",
  //   "luxury homes",
  //   "property listings",
  //   "dream homes",
  //   "premium properties",
  //   "real estate agent",
  // ],
  // openGraph: {
  //   title: "Basera Properties — Premium Real Estate & Dream Homes",
  //   description:
  //     "Find your dream property with Basera Properties. Premium real estate listings, luxury homes, expert agents. 120K+ deals closed, 1500+ houses sold.",
  //   url: "https://baseraproperties.in",
  //   siteName: "Basera Properties",
  //   images: [
  //     {
  //       url: "https://baseraproperties.in/og-image.jpg",
  //       width: 1200,
  //       height: 630,
  //       alt: "Basera Properties",
  //     },
  //   ],
  //   locale: "en_US",
  //   type: "website",
  // },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Basera Properties — Premium Real Estate & Dream Homes",
  //   description:
  //     "Find your dream property with Basera Properties. Premium real estate listings, luxury homes, expert agents.",
  //   images: ["https://baseraproperties.in/og-image.jpg"],
  // },
  // metadataBase: new URL("https://baseraproperties.in"),
  // alternates: {
  //   canonical: "https://baseraproperties.in",
  // },
};

// --------------------
// 🔹 Root Layout
// --------------------
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
       <link
          href="https://fonts.googleapis.com/css2?family=Stack+Sans+Text:wght@400;500&display=swap"
          rel="stylesheet"
        />
        {/* ✅ Favicon */}
        {/* <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" /> */}

        {/* ✅ Mobile Meta */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <meta name="author" content="Basera Properties" /> */}
        <meta name="theme-color" content="#0d6efd" />
        <meta name="robots" content="index, follow" />

        {/* --------------------
            🔹 Google Analytics Pixel (Replace your ID)
        -------------------- */}
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script> */}
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        /> */}

        {/* --------------------
            🔹 Google Analytics (GA4) — Commented
        -------------------- */}
        {/* <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-NXWRRSN9HJ"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-NXWRRSN9HJ');
            `,
          }}
        /> */}

        {/* --------------------
            🔹 JSON-LD Structured Data — Commented
        -------------------- */}
        {/* <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              name: "Basera Properties",
              url: "https://baseraproperties.in",
              logo: "https://baseraproperties.in/favicon.png",
              description:
                "Premium real estate agency specializing in luxury homes and exceptional properties.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                telephone: "+91-9810214410",
                email: "baseraproperty@gmail.com",
                availableLanguage: "English",
              },
              areaServed: "India",
              sameAs: [
                "https://x.com/baseraproperty",
                "https://www.facebook.com/...",
                "https://www.instagram.com/...",
                "https://www.linkedin.com/...",
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "1500",
              },
            }),
          }}
        /> */}
      </head>

      <body>{children}</body>

      {/* ✅ Optional analytics */}
      <SpeedInsights />
      <Analytics />
    </html>
  );
}
