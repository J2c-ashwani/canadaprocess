import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { PopupContactForm } from '@/components/popup-contact-form'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FSI Digital Canada - Professional Website Development & Digital Marketing',
  description: 'FSI Digital helps startups transform with professional website development, SEO, digital marketing, and government grant assistance.',
  keywords: 'startup website, web development, SEO, digital marketing, government grants, Canada',
  authors: [{ name: 'FSI Digital Canada' }],
  openGraph: {
    title: 'FSI Digital Canada - Professional Website Development',
    description: 'FSI Digital provides expert startup solutions: website development, SEO, and digital marketing services.',
    url: 'https://startupboost.ca',
    siteName: 'FSI Digital Canada',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'FSI Digital Canada - Professional Website Development',
      },
    ],
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FSI Digital Canada - Professional Website Development',
    description: 'FSI Digital provides expert startup solutions: website development, SEO, and digital marketing services.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* This wrapper div provides the site-wide fix for overflow issues */}
        <div className="overflow-x-hidden">
          {children}
        </div>
        <PopupContactForm />
      </body>
    </html>
  )
}
