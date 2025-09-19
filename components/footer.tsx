"use client"

import Link from "next/link"

// Custom SVG Icons
const Building2Icon = () => (
  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h4M9 7h1m-1 4h1m4-4h1m-1 4h1m-3 4h2M7 7h1m-1 4h1"
    />
  </svg>
)

const MailIcon = () => (
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
)

const PhoneIcon = () => (
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
)

const MapPinIcon = () => (
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

export function Footer() {
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-slate-600 to-slate-500 p-2 rounded-xl">
                <Building2Icon />
              </div>
              <div>
                <span className="text-xl font-bold">FSI Digital</span>
                <div className="text-xs text-slate-400 font-medium -mt-1">Business Solutions</div>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed max-w-sm">
              Empowering startups across the United States with comprehensive digital solutions and strategic guidance.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-6">Services</h3>
            <ul className="space-y-4 text-slate-300">
              <li>
                <Link href="/services" onClick={handleLinkClick} className="hover:text-white transition-colors">
                  Website Development
                </Link>
              </li>
              <li>
                <Link href="/services" onClick={handleLinkClick} className="hover:text-white transition-colors">
                  Digital Marketing & SEO
                </Link>
              </li>
              <li>
                <Link href="/services" onClick={handleLinkClick} className="hover:text-white transition-colors">
                  Government Grant Assistance
                </Link>
              </li>
              <li>
                <Link href="/services" onClick={handleLinkClick} className="hover:text-white transition-colors">
                  Business Consulting
                </Link>
              </li>
              <li>
                <Link href="/services" onClick={handleLinkClick} className="hover:text-white transition-colors">
                  Strategic Planning
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-6">Company</h3>
            <ul className="space-y-4 text-slate-300">
              <li>
                <Link href="/about" onClick={handleLinkClick} className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" onClick={handleLinkClick} className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/blog" onClick={handleLinkClick} className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/portfolio" onClick={handleLinkClick} className="hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/faq" onClick={handleLinkClick} className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-6">Contact Info</h3>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-center space-x-3">
                <PhoneIcon />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <MailIcon />
                <span>hello@fsidigital.ca</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPinIcon />
                <div>
                  <div>5700 Yonge Street Suite 200, North York ON M2M 4K2</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">© 2024 FSI Digital. All rights reserved.</p>
          <div className="flex space-x-6 text-sm text-slate-400 mt-4 sm:mt-0">
            <Link href="/privacy" onClick={handleLinkClick} className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" onClick={handleLinkClick} className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/refund-cancellation" onClick={handleLinkClick} className="hover:text-white transition-colors">
              Refund & Cancellation
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
