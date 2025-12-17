import type React from "react"
import type { Metadata, Viewport } from "next"
import { Poppins, Open_Sans } from "next/font/google"
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
    default: "Naksh Enterprise | Premium Ice Cream Cones & Aluminium Sleeves Manufacturer",
    template: "%s | Naksh Enterprise",
  },
  description:
    "Naksh Enterprise is a premier B2B manufacturer of high-quality ice cream cones and custom aluminium foil sleeves in Surat, Gujarat. FSSAI certified. The Crunch That Lasts.",
  keywords: [
    "ice cream cones",
    "sugar cones",
    "waffle cones",
    "aluminium foil sleeves",
    "cone manufacturer",
    "B2B food packaging",
    "Surat",
    "Gujarat",
    "FSSAI certified",
    "custom printing sleeves",
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
    title: "Naksh Enterprise | Premium Ice Cream Cones & Sleeves",
    description:
      "Your trusted B2B partner for premium ice cream cones and custom aluminium foil sleeves. The Crunch That Lasts.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Naksh Enterprise - Premium Ice Cream Cones",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Naksh Enterprise | Premium Ice Cream Cones",
    description: "Premier B2B manufacturer of ice cream cones and aluminium foil sleeves",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/logo/logo.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/logo/logo.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/logo/logo.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/logo/logo.png",
  },
    generator: ''
}

export const viewport: Viewport = {
  themeColor: "#522719",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${openSans.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
