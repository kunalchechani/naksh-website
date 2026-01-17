import type React from "react"
import type { Metadata, Viewport } from "next"
import { Poppins, Open_Sans } from "next/font/google"
import Script from "next/script"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
})

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-open-sans",
})

export const metadata: Metadata = {
  title: {
    default:
      "Ice Cream Cone Manufacturer in India | Naksh Enterprise – B2B Ice Cream Cones & Sleeves",
    template: "%s | Naksh Enterprise",
  },
  description:
    "Naksh Enterprise is a leading B2B ice cream cone manufacturer in India, supplying premium sugar cones, waffle cones, and aluminium foil ice cream sleeves to ice cream companies nationwide. FSSAI certified, hygienic, bulk supply.",
  keywords: [
    "ice cream cone manufacturer in india",
    "ice cream cone supplier",
    "ice cream cones wholesale india",
    "waffle cone manufacturer",
    "sugar cone manufacturer",
    "ice cream sleeves manufacturer",
    "aluminium foil ice cream sleeves",
    "b2b ice cream packaging",
    "ice cream consumables manufacturer",
    "ice cream companies supplier",
    "FSSAI cone manufacturer",
    "Surat ice cream manufacturer",
  ],
  authors: [{ name: "Naksh Enterprise" }],
  creator: "Naksh Enterprise",
  publisher: "Naksh Enterprise",
  metadataBase: new URL("https://nakshcones.in"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://nakshcones.in",
    siteName: "Naksh Enterprise",
    title: "Ice Cream Cone Manufacturer in India | Naksh Enterprise",
    description:
      "Trusted B2B ice cream cone & aluminium sleeve manufacturer for ice cream brands across India. The Crunch That Lasts.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ice Cream Cone Manufacturing Facility – Naksh Enterprise",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ice Cream Cone Manufacturer in India | Naksh Enterprise",
    description:
      "Premium B2B manufacturer of ice cream cones and aluminium foil sleeves for ice cream companies.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/logo/logo.png",
    apple: "/logo/logo.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#522719",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-P2ZKLKCX');
            `,
          }}
        />
        {/* End Google Tag Manager */}
      </head>

      <body
        className={`${poppins.variable} ${openSans.variable} font-sans antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P2ZKLKCX"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        {children}

        <Analytics />
      </body>
    </html>
  )
}
