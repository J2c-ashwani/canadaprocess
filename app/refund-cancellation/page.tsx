import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy | FSI Digital",
  description: "Learn about our refund and cancellation policies for FSI Digital services.",
}

// Add ChevronLeft icon
const ChevronLeftIcon = () => (
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
)

export default function RefundCancellationPage() {
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

          <h1 className="text-4xl font-bold text-gray-900 mb-8">Refund & Cancellation Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: January 15, 2024</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Overview</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                At FSI Digital, we are committed to delivering high-quality services and ensuring client satisfaction.
                This policy outlines our refund and cancellation procedures for different types of services we offer.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Service Categories</h2>

              <h3 className="text-xl font-medium text-gray-800 mb-3">One-Time Project Services</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Includes website development, logo design, marketing campaigns, and other project-based deliverables.
              </p>

              <h3 className="text-xl font-medium text-gray-800 mb-3">Ongoing Services</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Includes monthly retainers, maintenance plans, SEO services, and consulting packages.
              </p>

              <h3 className="text-xl font-medium text-gray-800 mb-3">Consultation Services</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Includes strategy sessions, grant application assistance, and business planning consultations.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Cancellation Policy</h2>

              <h3 className="text-xl font-medium text-gray-800 mb-3">Before Work Begins</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Full refund available within 48 hours of contract signing</li>
                <li>No questions asked cancellation policy</li>
                <li>Refund processed within 5-7 business days</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 mb-3">After Work Has Started</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Cancellation requires 30 days written notice</li>
                <li>Payment for completed work and deliverables</li>
                <li>Prorated refund for unused portions of ongoing services</li>
                <li>All work-in-progress will be delivered in current state</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 mb-3">Monthly Retainer Services</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>30 days notice required for cancellation</li>
                <li>Services continue until end of current billing period</li>
                <li>No refund for partial months</li>
                <li>Final deliverables and reports provided</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Refund Policy</h2>

              <h3 className="text-xl font-medium text-gray-800 mb-3">Eligible Refund Scenarios</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Service not delivered as specified in the contract</li>
                <li>Significant delays caused by FSI Digital (beyond agreed timeline)</li>
                <li>Technical issues preventing service delivery</li>
                <li>Failure to meet agreed-upon milestones</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 mb-3">Non-Refundable Items</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Completed work and delivered milestones</li>
                <li>Third-party costs (hosting, software licenses, advertising spend)</li>
                <li>Custom research and strategy development</li>
                <li>Time spent on consultation calls and meetings</li>
                <li>Domain registrations and SSL certificates</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 mb-3">Refund Process</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Submit refund request in writing with detailed explanation</li>
                <li>Review process takes 5-10 business days</li>
                <li>Approved refunds processed within 10-15 business days</li>
                <li>Refunds issued to original payment method</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Specific Service Policies</h2>

              <h3 className="text-xl font-medium text-gray-800 mb-3">Website Development</h3>
              <div className="bg-blue-50 p-6 rounded-lg mb-4">
                <ul className="list-disc pl-6 text-gray-700">
                  <li>50% deposit required to begin work</li>
                  <li>Refund available before design approval stage</li>
                  <li>After approval, charges apply for completed phases</li>
                  <li>Final 50% due upon project completion</li>
                </ul>
              </div>

              <h3 className="text-xl font-medium text-gray-800 mb-3">SEO & Marketing Services</h3>
              <div className="bg-green-50 p-6 rounded-lg mb-4">
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Minimum 3-month commitment required</li>
                  <li>Results typically visible after 60-90 days</li>
                  <li>Cancellation allowed after minimum period</li>
                  <li>Ad spend and tool costs non-refundable</li>
                </ul>
              </div>

              <h3 className="text-xl font-medium text-gray-800 mb-3">Grant Application Services</h3>
              <div className="bg-yellow-50 p-6 rounded-lg mb-4">
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Payment due upon application submission</li>
                  <li>No refund based on grant approval/denial</li>
                  <li>Refund available only if application not submitted</li>
                  <li>Research and preparation work is billable</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Force Majeure</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                In cases of force majeure events (natural disasters, pandemics, government regulations, etc.) that
                prevent service delivery:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Services will be suspended without penalty</li>
                <li>Timeline extensions will be granted</li>
                <li>Prorated refunds available for extended delays</li>
                <li>Alternative solutions will be explored</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Dispute Resolution</h2>
              <p className="text-gray-700 leading-relaxed mb-4">If you're unsatisfied with our services:</p>
              <ol className="list-decimal pl-6 text-gray-700 mb-4">
                <li>Contact your project manager immediately</li>
                <li>We'll work together to resolve the issue</li>
                <li>If unresolved, escalate to management</li>
                <li>Mediation available through neutral third party</li>
                <li>Legal action as last resort</li>
              </ol>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. How to Request Cancellation or Refund</h2>
              <p className="text-gray-700 leading-relaxed mb-4">To request a cancellation or refund:</p>
              <ol className="list-decimal pl-6 text-gray-700 mb-4">
                <li>Send written notice to billing@fsidigital.com</li>
                <li>Include your account details and reason for request</li>
                <li>Provide any supporting documentation</li>
                <li>Allow 5-10 business days for review</li>
                <li>Receive written response with decision</li>
              </ol>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Contact Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">For questions about refunds and cancellations:</p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2">
                  <strong>Email:</strong> billing@fsidigital.com
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Phone:</strong> +1 (555) 123-4567
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Business Hours:</strong> Monday-Friday, 9 AM - 6 PM EST
                </p>
                <p className="text-gray-700">
                  <strong>Address:</strong> 123 Business Ave, New York, NY 10001
                </p>
              </div>
            </section>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mt-8">
              <p className="text-blue-800 font-medium mb-2">Our Commitment</p>
              <p className="text-blue-700">
                We stand behind our work and are committed to your success. If you're not satisfied with our services,
                we'll work with you to make it right. Your success is our success.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
