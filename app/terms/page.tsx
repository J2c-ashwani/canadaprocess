import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Terms of Service | FSI Digital",
  description: "Read our terms of service and understand the conditions for using FSI Digital services.",
}

// Add ChevronLeft icon
const ChevronLeftIcon = () => (
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
)

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Back Navigation */}
          <div className="mb-8">
            <Link href="/" className="inline-flex items-center text-slate-600 hover:text-slate-900 transition-colors">
              <ChevronLeftIcon />
              <span className="ml-2">Back to Home</span>
            </Link>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          <p className="text-gray-600 mb-8">Last updated: January 15, 2024</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                By accessing and using FSI Digital's website and services, you accept and agree to be bound by the
                terms and provision of this agreement. If you do not agree to abide by the above, please do not use this
                service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Description of Services</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                FSI Digital provides comprehensive business solutions including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Website development and design services</li>
                <li>Digital marketing and SEO optimization</li>
                <li>Government grant assistance and consulting</li>
                <li>Business strategy and planning consultation</li>
                <li>Technical support and maintenance</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Responsibilities</h2>
              <p className="text-gray-700 leading-relaxed mb-4">As a user of our services, you agree to:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Provide accurate and complete information</li>
                <li>Maintain the confidentiality of your account credentials</li>
                <li>Use our services in compliance with applicable laws</li>
                <li>Not engage in any fraudulent or harmful activities</li>
                <li>Respect intellectual property rights</li>
                <li>Pay all fees and charges in a timely manner</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Payment Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Payment terms vary depending on the service package selected:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Project-based services require 50% upfront payment</li>
                <li>Monthly retainer services are billed in advance</li>
                <li>All payments are due within 30 days of invoice date</li>
                <li>Late payments may incur additional fees</li>
                <li>We accept major credit cards and bank transfers</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Intellectual Property Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                All content, features, and functionality on our website are owned by FSI Digital and are protected by
                copyright, trademark, and other intellectual property laws.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">For custom development work:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Client owns the final deliverables upon full payment</li>
                <li>FSI Digital retains rights to methodologies and frameworks</li>
                <li>Third-party components remain subject to their respective licenses</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Service Level Agreements</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We strive to provide high-quality services with the following commitments:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>99.9% website uptime for hosted solutions</li>
                <li>Response to support requests within 24 hours</li>
                <li>Project deliverables according to agreed timelines</li>
                <li>Regular progress updates and communication</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                FSI Digital shall not be liable for any indirect, incidental, special, consequential, or punitive
                damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses,
                resulting from your use of our services.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our total liability shall not exceed the amount paid by you for the specific service giving rise to the
                claim.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Termination</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Either party may terminate the service agreement with 30 days written notice. Upon termination:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>All outstanding payments become immediately due</li>
                <li>Access to our services will be discontinued</li>
                <li>Data backup and transfer assistance will be provided for 30 days</li>
                <li>Confidentiality obligations continue indefinitely</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Governing Law</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                These terms shall be governed by and construed in accordance with the laws of the State of New York,
                without regard to its conflict of law provisions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Changes to Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon
                posting on our website. Your continued use of our services constitutes acceptance of the modified terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Contact Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2">
                  <strong>Email:</strong> legal@fsidigital.com
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Phone:</strong> +1 (555) 123-4567
                </p>
                <p className="text-gray-700">
                  <strong>Address:</strong> 123 Business Ave, New York, NY 10001
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
