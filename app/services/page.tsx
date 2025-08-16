import type { Metadata } from "next"
import { Award, CheckCircle, Globe, TrendingUp, Zap, ArrowRight, Shield, ShoppingCart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Web Development Services USA | Custom Website Design & SEO Services",
  description:
    "Professional web development services in USA. Custom website design, e-commerce development, SEO services, and digital marketing. Serving New York, Los Angeles, Chicago.",
  keywords: [
    "web development services USA",
    "custom website design New York",
    "e-commerce development Los Angeles",
    "SEO services Chicago",
    "website redesign services",
    "WordPress development USA",
    "Shopify development",
    "responsive web design",
    "digital marketing services",
    "website maintenance USA",
  ],
  alternates: {
    canonical: "https://startupboost.com/services",
  },
  openGraph: {
    title: "Professional Web Development Services in USA | StartupBoost",
    description:
      "Custom website development, e-commerce solutions, SEO services, and digital marketing for American businesses. Get a free quote today.",
    url: "https://startupboost.com/services",
  },
}

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-900">
                  Government Grant Assistance &{" "}
                  <span className="text-emerald-600">Professional Web Development Services</span>
                </h1>
                <p className="max-w-[900px] mx-auto text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center">
                  Unlock millions in USA & Canadian government funding with our 85% success rate. Plus comprehensive web
                  development solutions designed to accelerate your business growth in the competitive North American
                  market.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
              {/* Government Grant Assistance - Featured First */}
              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-amber-50 to-amber-100 group hover:-translate-y-2 relative overflow-hidden hover-lift animate-fadeInUp lg:col-span-2 xl:col-span-3">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-full -translate-y-10 translate-x-10"></div>
                <CardHeader className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-gradient-to-br from-amber-600 to-amber-700 p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-500">
                      <Award className="h-8 w-8 text-white" />
                    </div>
                    <div className="bg-amber-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      85% SUCCESS RATE
                    </div>
                  </div>
                  <CardTitle className="text-3xl font-bold text-slate-900 mb-4">
                    🏛️ Government Grant Assistance - Canada & USA
                  </CardTitle>
                  <CardDescription className="text-slate-600 text-lg leading-relaxed">
                    Unlock millions in government funding with our proven track record. We specialize in Canadian and
                    American grant programs with an industry-leading 85% success rate.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-slate-900 mb-3 text-lg flex items-center">
                        <Image src="/flags/ca.png" alt="Canadian Flag" width={24} height={16} className="mr-2 rounded-sm" />
                        Canadian Grant Programs:
                      </h4>
                      <ul className="space-y-2 text-sm text-slate-600">
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-amber-600 mr-3 flex-shrink-0" />
                          <span>
                            <strong>CDAP</strong> - Canada Digital Adoption Program ($15K-$100K)
                          </span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-amber-600 mr-3 flex-shrink-0" />
                          <span>
                            <strong>IRAP</strong> - Industrial Research Assistance Program
                          </span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-amber-600 mr-3 flex-shrink-0" />
                          <span>
                            <strong>SR&ED</strong> - Scientific Research & Development
                          </span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-amber-600 mr-3 flex-shrink-0" />
                          <span>
                            <strong>SEED Funds</strong> - Provincial Seed Funding
                          </span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-amber-600 mr-3 flex-shrink-0" />
                          <span>
                            <strong>DIV</strong> - Digital Innovation Voucher
                          </span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-amber-600 mr-3 flex-shrink-0" />
                          <span>
                            <strong>BDC</strong> - Business Development Bank Funding
                          </span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-amber-600 mr-3 flex-shrink-0" />
                          <span>
                            <strong>First Fund</strong> - Early-Stage Startup Funding
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-3 text-lg flex items-center">
                        <Image src="/flags/us.png" alt="USA Flag" width={24} height={16} className="mr-2 rounded-sm" />
                        American Grant Programs:
                      </h4>
                      <ul className="space-y-2 text-sm text-slate-600">
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-amber-600 mr-3 flex-shrink-0" />
                          <span>
                            <strong>SBIR</strong> - Small Business Innovation Research
                          </span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-amber-600 mr-3 flex-shrink-0" />
                          <span>
                            <strong>STTR</strong> - Small Business Technology Transfer
                          </span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-amber-600 mr-3 flex-shrink-0" />
                          <span>
                            <strong>SBA Grants</strong> - Small Business Administration
                          </span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-amber-600 mr-3 flex-shrink-0" />
                          <span>
                            <strong>State Grants</strong> - Individual State Programs
                          </span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-amber-600 mr-3 flex-shrink-0" />
                          <span>
                            <strong>Venture Capital</strong> - VC Funding Assistance
                          </span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-amber-600 mr-3 flex-shrink-0" />
                          <span>
                            <strong>Angel Investment</strong> - Angel Investor Networks
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-amber-50 p-6 rounded-xl border border-amber-200">
                    <div className="grid md:grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-amber-600">$50M+</div>
                        <div className="text-sm text-slate-600">Total Funding Secured</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-amber-600">85%</div>
                        <div className="text-sm text-slate-600">Success Rate</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-amber-600">200+</div>
                        <div className="text-sm text-slate-600">Grants Approved</div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-amber-200">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-amber-600">Service Fee + 5% of grant secured</span>
                      <span className="text-sm text-slate-500">Success-based pricing</span>
                    </div>
                    <Button
                      className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white shadow-lg text-lg py-3"
                      asChild
                    >
                      <Link href="/contact#contact-form">Get Grant Assessment</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Website Development */}
              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-blue-50 to-blue-100 group hover:-translate-y-2 relative overflow-hidden hover-lift animate-fadeInUp">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-full -translate-y-10 translate-x-10"></div>
                <CardHeader className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-500">
                      <Globe className="h-8 w-8 text-white" />
                    </div>
                    <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">POPULAR</div>
                  </div>
                  <CardTitle className="text-2xl font-bold text-slate-900">Website Development</CardTitle>
                  <CardDescription className="text-slate-600 text-base leading-relaxed">
                    Custom, responsive websites built with modern technologies that convert visitors into customers.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3 text-sm text-slate-600">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-blue-600 mr-3 flex-shrink-0" />
                      Custom Design & Development
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-blue-600 mr-3 flex-shrink-0" />
                      Mobile-First Responsive Design
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-blue-600 mr-3 flex-shrink-0" />
                      E-commerce Integration
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-blue-600 mr-3 flex-shrink-0" />
                      Performance Optimization
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-blue-600 mr-3 flex-shrink-0" />
                      CMS Integration
                    </li>
                  </ul>
                  <div className="pt-4 border-t border-blue-200">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-blue-600">$2,999+</span>
                      <span className="text-sm text-slate-500">Starting from</span>
                    </div>
                    <Button
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg"
                      asChild
                    >
                      <Link href="/contact">Get Quote</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Website Redesign */}
              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-purple-50 to-purple-100 group hover:-translate-y-2 relative overflow-hidden hover-lift animate-fadeInUp">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-400/20 to-purple-600/20 rounded-full -translate-y-10 translate-x-10"></div>
                <CardHeader className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-gradient-to-br from-purple-600 to-purple-700 p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-500">
                      <Zap className="h-8 w-8 text-white" />
                    </div>
                    <div className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">UPGRADE</div>
                  </div>
                  <CardTitle className="text-2xl font-bold text-slate-900">Website Redesign</CardTitle>
                  <CardDescription className="text-slate-600 text-base leading-relaxed">
                    Transform your existing website with modern design, improved UX, and enhanced performance.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3 text-sm text-slate-600">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-purple-600 mr-3 flex-shrink-0" />
                      Complete Visual Overhaul
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-purple-600 mr-3 flex-shrink-0" />
                      UX/UI Improvements
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-purple-600 mr-3 flex-shrink-0" />
                      Speed Optimization
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-purple-600 mr-3 flex-shrink-0" />
                      Mobile Optimization
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-purple-600 mr-3 flex-shrink-0" />
                      SEO Enhancement
                    </li>
                  </ul>
                  <div className="pt-4 border-t border-purple-200">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-purple-600">$1,999+</span>
                      <span className="text-sm text-slate-500">Starting from</span>
                    </div>
                    <Button
                      className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white shadow-lg"
                      asChild
                    >
                      <Link href="/contact">Get Quote</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* E-commerce Development */}
              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-green-50 to-green-100 group hover:-translate-y-2 relative overflow-hidden hover-lift animate-fadeInUp">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-400/20 to-green-600/20 rounded-full -translate-y-10 translate-x-10"></div>
                <CardHeader className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-gradient-to-br from-green-600 to-green-700 p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-500">
                      <ShoppingCart className="h-8 w-8 text-white" />
                    </div>
                    <div className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold">HOT</div>
                  </div>
                  <CardTitle className="text-2xl font-bold text-slate-900">E-commerce Development</CardTitle>
                  <CardDescription className="text-slate-600 text-base leading-relaxed">
                    Full-featured online stores with secure payment processing and inventory management.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3 text-sm text-slate-600">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-3 flex-shrink-0" />
                      Shopify/WooCommerce Setup
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-3 flex-shrink-0" />
                      Payment Gateway Integration
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-3 flex-shrink-0" />
                      Inventory Management
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-3 flex-shrink-0" />
                      Order Management System
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-3 flex-shrink-0" />
                      Multi-currency Support
                    </li>
                  </ul>
                  <div className="pt-4 border-t border-green-200">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-green-600">$4,999+</span>
                      <span className="text-sm text-slate-500">Starting from</span>
                    </div>
                    <Button
                      className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-lg"
                      asChild
                    >
                      <Link href="/contact">Get Quote</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* SEO & Digital Marketing */}
              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-orange-50 to-orange-100 group hover:-translate-y-2 relative overflow-hidden hover-lift animate-fadeInUp">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-400/20 to-orange-600/20 rounded-full -translate-y-10 translate-x-10"></div>
                <CardHeader className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-gradient-to-br from-orange-600 to-orange-700 p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-500">
                      <TrendingUp className="h-8 w-8 text-white" />
                    </div>
                    <div className="bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-semibold">RESULTS</div>
                  </div>
                  <CardTitle className="text-2xl font-bold text-slate-900">SEO & Digital Marketing</CardTitle>
                  <CardDescription className="text-slate-600 text-base leading-relaxed">
                    Comprehensive digital marketing strategies to boost your online visibility and drive traffic.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3 text-sm text-slate-600">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-orange-600 mr-3 flex-shrink-0" />
                      Search Engine Optimization
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-orange-600 mr-3 flex-shrink-0" />
                      Google Ads Management
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-orange-600 mr-3 flex-shrink-0" />
                      Social Media Marketing
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-orange-600 mr-3 flex-shrink-0" />
                      Content Marketing
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-orange-600 mr-3 flex-shrink-0" />
                      Analytics & Reporting
                    </li>
                  </ul>
                  <div className="pt-4 border-t border-orange-200">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-orange-600">$1,999/mo</span>
                      <span className="text-sm text-slate-500">Starting from</span>
                    </div>
                    <Button
                      className="w-full bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white shadow-lg"
                      asChild
                    >
                      <Link href="/contact">Get Quote</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Website Maintenance */}
              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-teal-50 to-teal-100 group hover:-translate-y-2 relative overflow-hidden hover-lift animate-fadeInUp">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-teal-400/20 to-teal-600/20 rounded-full -translate-y-10 translate-x-10"></div>
                <CardHeader className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-gradient-to-br from-teal-600 to-teal-700 p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-500">
                      <Shield className="h-8 w-8 text-white" />
                    </div>
                    <div className="bg-teal-600 text-white px-3 py-1 rounded-full text-xs font-semibold">SECURE</div>
                  </div>
                  <CardTitle className="text-2xl font-bold text-slate-900">Website Maintenance</CardTitle>
                  <CardDescription className="text-slate-600 text-base leading-relaxed">
                    Keep your website secure, updated, and performing at its best with our maintenance plans.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3 text-sm text-slate-600">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-teal-600 mr-3 flex-shrink-0" />
                      Security Updates & Monitoring
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-teal-600 mr-3 flex-shrink-0" />
                      Regular Backups
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-teal-600 mr-3 flex-shrink-0" />
                      Performance Optimization
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-teal-600 mr-3 flex-shrink-0" />
                      Content Updates
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-teal-600 mr-3 flex-shrink-0" />
                      24/7 Support
                    </li>
                  </ul>
                  <div className="pt-4 border-t border-teal-200">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-teal-600">$299/mo</span>
                      <span className="text-sm text-slate-500">Starting from</span>
                    </div>
                    <Button
                      className="w-full bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white shadow-lg"
                      asChild
                    >
                      <Link href="/contact">Get Quote</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Pitch Deck Creation */}
              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-indigo-50 to-indigo-100 group hover:-translate-y-2 relative overflow-hidden hover-lift animate-fadeInUp">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-indigo-400/20 to-indigo-600/20 rounded-full -translate-y-10 translate-x-10"></div>
                <CardHeader className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-500">
                      <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                    <div className="bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      INVESTOR READY
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold text-slate-900">Pitch Deck Creation</CardTitle>
                  <CardDescription className="text-slate-600 text-base leading-relaxed">
                    Professional investor-ready pitch decks that secure funding and impress stakeholders.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3 text-sm text-slate-600">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-indigo-600 mr-3 flex-shrink-0" />
                      Investor-Ready Presentations
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-indigo-600 mr-3 flex-shrink-0" />
                      Financial Projections & Models
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-indigo-600 mr-3 flex-shrink-0" />
                      Professional Design & Branding
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-indigo-600 mr-3 flex-shrink-0" />
                      Market Analysis & Strategy
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-indigo-600 mr-3 flex-shrink-0" />
                      Grant Application Support
                    </li>
                  </ul>
                  <div className="pt-4 border-t border-indigo-200">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-indigo-600">$1,499+</span>
                      <span className="text-sm text-slate-500">Starting from</span>
                    </div>
                    <Button
                      className="w-full bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white shadow-lg"
                      asChild
                    >
                      <Link href="/contact">Get Quote</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Featured Grant Programs Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-amber-50 to-yellow-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-gray-900 mb-4">
                🏆 Featured Grant Programs We Specialize In
              </h2>
              <p className="max-w-3xl mx-auto text-xl text-gray-600">
                Access millions in government funding through our proven grant application process
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
              <Card className="border-2 border-amber-200 bg-white hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-amber-700 flex items-center">
                    <Image src="/flags/ca.png" alt="Canadian Flag" width={24} height={16} className="mr-2 rounded-sm" />
                    CDAP - Canada Digital Adoption Program
                  </CardTitle>
                  <CardDescription>Up to $100,000 for digital transformation projects</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Website development funding</li>
                    <li>• E-commerce platform grants</li>
                    <li>• Digital marketing support</li>
                    <li>• Technology adoption assistance</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-amber-200 bg-white hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-amber-700 flex items-center">
                    <Image src="/flags/ca.png" alt="Canadian Flag" width={24} height={16} className="mr-2 rounded-sm" />
                    IRAP - Industrial Research Program
                  </CardTitle>
                  <CardDescription>Up to $1M for innovation and R&D projects</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Technology development</li>
                    <li>• Product innovation funding</li>
                    <li>• Research & development</li>
                    <li>• Technical advisory services</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-amber-200 bg-white hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-amber-700 flex items-center">
                    <Image src="/flags/us.png" alt="USA Flag" width={24} height={16} className="mr-2 rounded-sm" />
                    SBIR - Small Business Innovation
                  </CardTitle>
                  <CardDescription>Up to $1.7M for innovative technology development</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Phase I: Up to $275K</li>
                    <li>• Phase II: Up to $1.7M</li>
                    <li>• Technology commercialization</li>
                    <li>• Federal agency partnerships</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-amber-200 bg-white hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-amber-700 flex items-center">
                    <Image src="/flags/ca.png" alt="Canadian Flag" width={24} height={16} className="mr-2 rounded-sm" />
                    SR&ED Tax Credits
                  </CardTitle>
                  <CardDescription>Up to 35% tax credit on R&D expenses</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Software development credits</li>
                    <li>• Innovation tax incentives</li>
                    <li>• Refundable tax credits</li>
                    <li>• Retroactive claims possible</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-amber-200 bg-white hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-amber-700">💰 Venture Capital Assistance</CardTitle>
                  <CardDescription>Connect with investors and secure funding</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Investor pitch preparation</li>
                    <li>• Due diligence support</li>
                    <li>• Valuation assistance</li>
                    <li>• Term sheet negotiation</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-amber-200 bg-white hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-amber-700 flex items-center">
                     <Image src="/flags/ca.png" alt="Canadian Flag" width={24} height={16} className="mr-2 rounded-sm" />
                    SEED Funds & Provincial Grants
                  </CardTitle>
                  <CardDescription>Early-stage funding for Canadian startups</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Provincial startup grants</li>
                    <li>• Seed funding programs</li>
                    <li>• Incubator partnerships</li>
                    <li>• Accelerator funding</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-amber-200 bg-white hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-amber-700 flex items-center">
                     <Image src="/flags/ca.png" alt="Canadian Flag" width={24} height={16} className="mr-2 rounded-sm" />
                    First Fund - Early-Stage Funding
                  </CardTitle>
                  <CardDescription>Up to $500K for early-stage Canadian startups</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Pre-seed funding support</li>
                    <li>• Technology startup focus</li>
                    <li>• Mentorship programs</li>
                    <li>• Growth acceleration funding</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-semibold px-8 py-4 text-lg shadow-xl"
                asChild
              >
                <Link href="/contact#contact-form">
                  Get Free Grant Assessment
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
                  Our Proven Web Development Process
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A systematic approach that ensures your website project's success from initial consultation to launch
                  and ongoing optimization.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-4">
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-white font-bold">
                  1
                </div>
                <h3 className="font-semibold">Discovery & Strategy</h3>
                <p className="text-sm text-gray-600">
                  We analyze your business goals, target audience, and competitive landscape to create a comprehensive
                  web development strategy.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-white font-bold">
                  2
                </div>
                <h3 className="font-semibold">Design & Development</h3>
                <p className="text-sm text-gray-600">
                  Custom website design and development using modern technologies, responsive design, and SEO best
                  practices.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-white font-bold">
                  3
                </div>
                <h3 className="font-semibold">Testing & Launch</h3>
                <p className="text-sm text-gray-600">
                  Comprehensive testing across devices and browsers, performance optimization, and seamless website
                  launch.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-white font-bold">
                  4
                </div>
                <h3 className="font-semibold">Optimization & Growth</h3>
                <p className="text-sm text-gray-600">
                  Ongoing monitoring, performance optimization, and strategic improvements to maximize your website's
                  effectiveness.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-emerald-600 to-teal-600">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                  Ready to Start Your Web Development Project?
                </h2>
                <p className="max-w-[600px] text-emerald-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Let's discuss your web development needs and create a custom solution that drives real business
                  results for your American business.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" variant="secondary" className="bg-white text-emerald-600 hover:bg-gray-100" asChild>
                  <Link href="/contact#contact-form">
                    Get Free Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  className="bg-white text-emerald-600 hover:bg-emerald-100 hover:text-emerald-700 border-2 border-white font-semibold shadow-lg transition-all duration-300"
                  asChild
                >
                  <Link href="/contact#contact-form">Start Your Project</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
