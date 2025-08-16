"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const ChevronDownIcon = () => (
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
)

const faqData = [
  {
    category: "Grant Funding",
    questions: [
      {
        question: "What types of government grants do you help with?",
        answer:
          "We specialize in CDAP, IRAP, SR&ED, SEED FUNDS, DIV, BDC, First Fund, SBIR/STTR grants, SBA Grants, State Grants, Venture Capital, Angel Investement, NIH funding, NSF grants, DOE programs, Canadian SR&ED tax credits, and various state/provincial grant programs. Our team has experience with over 15 different federal agencies and programs.",
      },
      {
        question: "How much funding can I expect to receive?",
        answer:
          "Funding amounts vary by program. SBIR Phase I grants typically provide $50K-$500K, Phase II up to $1.7M. Canadian SR&ED can return up to 35% of R&D expenses. IRAP provides up to $1M in non-repayable contributions. We'll assess which programs offer the best fit for your funding needs.",
      },
      {
        question: "What's your success rate with grant applications?",
        answer:
          "Our grant writing team maintains a 85% success rate across all federal programs, significantly higher than the industry average of 15-20%. This is achieved through our systematic approach, deep program knowledge, and thorough proposal development process.",
      },
      {
        question: "How long does the grant application process take?",
        answer:
          "Timeline varies by program. SBIR applications typically take 2-3 months to prepare and 6-9 months for review. Canadian programs like SR&ED are ongoing. We provide detailed timelines for each program and help you plan your funding strategy accordingly.",
      },
    ],
  },
  {
    category: "Web Development",
    questions: [
      {
        question: "What web development services do you offer?",
        answer:
          "We provide full-stack web development including custom web applications, e-commerce platforms, SaaS products, mobile-responsive websites, API development, database design, and cloud deployment. We specialize in modern technologies like React, Next.js, Node.js, and cloud platforms.",
      },
      {
        question: "How long does it take to build a website?",
        answer:
          "Project timelines depend on complexity. Simple business websites take 2-4 weeks, custom web applications 6-12 weeks, and complex SaaS platforms 3-6 months. We provide detailed project timelines and milestone schedules during our initial consultation.",
      },
      {
        question: "Do you provide ongoing maintenance and support?",
        answer:
          "Yes, we offer comprehensive maintenance packages including security updates, performance monitoring, content updates, feature enhancements, and technical support. Our support plans range from basic maintenance to full-service management.",
      },
      {
        question: "Can you help with SEO and digital marketing?",
        answer:
          "We provide SEO optimization, content marketing, social media strategy, PPC advertising, email marketing, and conversion optimization. Our digital marketing services are designed to drive traffic and generate leads for your business.",
      },
    ],
  },
  {
    category: "Business Services",
    questions: [
      {
        question: "Do you help with business planning and strategy?",
        answer:
          "Yes, we provide comprehensive business planning services including market research, competitive analysis, financial projections, go-to-market strategies, and investor pitch deck development. Our business consultants have experience across various industries.",
      },
      {
        question: "Can you assist with regulatory compliance?",
        answer:
          "We help navigate regulatory requirements for various industries including healthcare, fintech, and government contracting. Our team assists with compliance documentation, regulatory filings, and ensuring your business meets all necessary requirements.",
      },
      {
        question: "Do you provide legal and accounting services?",
        answer:
          "While we don't provide legal or accounting services directly, we work with a network of trusted partners including attorneys, CPAs, and business advisors. We can connect you with the right professionals for your specific needs.",
      },
    ],
  },
  {
    category: "Pricing & Process",
    questions: [
      {
        question: "How much do your services cost?",
        answer:
          "Our pricing varies based on project scope and complexity. Grant writing services start at $5,000 for simple applications. Web development projects range from $10,000 to $100,000+. We provide detailed quotes after understanding your specific requirements during our free consultation.",
      },
      {
        question: "Do you offer payment plans?",
        answer:
          "Yes, we offer flexible payment options including milestone-based payments for larger projects, monthly payment plans, and success-based pricing for certain grant applications. We work with you to find a payment structure that fits your budget.",
      },
      {
        question: "What's included in your free consultation?",
        answer:
          "Our free consultation includes project assessment, technology recommendations, timeline estimates, budget planning, grant eligibility review, and a detailed proposal. There's no obligation, and you'll receive valuable insights regardless of whether you choose to work with us.",
      },
      {
        question: "How do you ensure project success?",
        answer:
          "We follow a proven methodology including detailed planning, regular communication, milestone reviews, quality assurance testing, and post-launch support. Our project managers keep you informed throughout the process and ensure deliverables meet your expectations.",
      },
    ],
  },
]

export default function FAQPage() {
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
          {/* Hero Section */}
          <section className="pt-32 pb-16">
            <div className="container mx-auto px-6 lg:px-8">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-8">
                  Frequently Asked Questions
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6">
                  Got <span className="text-blue-600">Questions?</span>
                </h1>
                <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                  Find answers to common questions about our grant writing, web development, and business services.
                  Can't find what you're looking for? Contact us directly.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Content */}
          <section className="pb-20">
            <div className="container mx-auto px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                {faqData.map((category, categoryIndex) => (
                  <div key={categoryIndex} className="mb-12">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-2 border-b-2 border-blue-600">
                      {category.category}
                    </h2>
                    <div className="space-y-4">
                      {category.questions.map((faq, index) => (
                        <details
                          key={index}
                          className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden group"
                        >
                          <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-slate-50 transition-colors">
                            <h3 className="text-lg font-semibold text-slate-900 pr-4">{faq.question}</h3>
                            <ChevronDownIcon className="text-slate-400 group-open:rotate-180 transition-transform flex-shrink-0" />
                          </summary>
                          <div className="px-6 pb-6">
                            <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                          </div>
                        </details>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <div className="container mx-auto px-6 lg:px-8 text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Still Have Questions?</h2>
              <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
                Get personalized answers and expert guidance for your specific situation.
              </p>
              <Link
                href="/contact"
                onClick={handleLinkClick}
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Contact Our Experts
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
