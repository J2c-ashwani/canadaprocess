import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { PopupContactForm } from "@/components/popup-contact-form"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "FSI Digital Canada - Professional Website Development & Digital Marketing",
  description:
    "FSI Digital helps startups transform with professional website development, SEO, digital marketing, and government grant assistance.",

  // ✅ Updated favicon & touch icons
  icons: {
    icon: [
      { url: "/favicon.ico" }, // Classic favicon (browsers auto-detect sizes inside ICO)
      { url: "/favicon.png", type: "image/png", sizes: "48x48" },
      { url: "/android-chrome-512x512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/apple-touch-icon.png", // For iOS/iPadOS home screen
  },

  keywords: "startup website, web development, SEO, digital marketing, government grants, Canada",
  authors: [{ name: "FSI Digital Canada" }],
  openGraph: {
    title: "FSI Digital Canada - Professional Website Development",
    description:
      "FSI Digital provides expert startup solutions: website development, SEO, and digital marketing services.",
    url: "https://fsidigital.ca",
    siteName: "FSI Digital Canada",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FSI Digital Canada - Professional Website Development",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FSI Digital Canada - Professional Website Development",
    description:
      "FSI Digital provides expert startup solutions: website development, SEO, and digital marketing services.",
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
  verification: {
    google: "REPLACE_WITH_YOUR_VERIFICATION_CODE",
  },
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

        {/* ✅ Organization Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "FSI Digital",
              "url": "https://www.fsidigital.ca",
              "logo": "https://www.fsidigital.ca/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "hello@fsidigital.ca",
                "contactType": "customer service",
                "areaServed": "CA",
                "availableLanguage": ["English"]
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "5700 Yonge Street Suite 200",
                "addressLocality": "North York",
                "addressRegion": "ON",
                "postalCode": "M2M 4K2",
                "addressCountry": "CA"
              },
              "description":
                "FSI Digital is a Canadian digital agency helping businesses with government grants, website development, SEO, digital marketing, e-commerce, and website redesign."
            })
          }}
        />
      </head>
      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>
        <div className="min-h-screen w-full max-w-full">{children}</div>
        <PopupContactForm />
      </body>
    </html>
  )
}
