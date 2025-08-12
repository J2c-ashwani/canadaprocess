import type { Metadata } from 'next'
import { Award, CheckCircle, Globe, TrendingUp, Zap, ArrowRight, Shield, ShoppingCart } from 'lucide-react'
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: 'Web Development Services Canada | Custom Website Design & SEO Services',
  description: 'Professional web development services in Canada. Custom website design, e-commerce development, SEO services, and digital marketing. Serving Toronto, Vancouver, Montreal.',
  keywords: [
    'web development services Canada',
    'custom website design Toronto',
    'e-commerce development Vancouver',
    'SEO services Montreal',
    'website redesign services',
    'WordPress development Canada',
    'Shopify development',
    'responsive web design',
    'digital marketing services',
    'website maintenance Canada'
  ],
  alternates: {
    canonical: 'https://startupboost.ca/services',
  },
  openGraph: {
    title: 'Professional Web Development Services in Canada | StartupBoost',
    description: 'Custom website development, e-commerce solutions, SEO services, and digital marketing for Canadian businesses. Get a free quote today.',
    url: 'https://startupboost.ca/services',
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
                  Professional Web Development <span className="text-emerald-600">Services in Canada</span>
                </h1>
                <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Comprehensive web development solutions designed to accelerate your business growth 
                  in the competitive Canadian market. From custom website design to e-commerce development 
                  and SEO services.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
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
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg" asChild>
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
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white shadow-lg" asChild>
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
                    <Button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-lg" asChild>
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
                    <Button className="w-full bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white shadow-lg" asChild>
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
                    <Button className="w-full bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white shadow-lg" asChild>
                      <Link href="/contact">Get Quote</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Government Grant Assistance */}
              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-amber-50 to-amber-100 group hover:-translate-y-2 relative overflow-hidden hover-lift animate-fadeInUp">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-full -translate-y-10 translate-x-10"></div>
                <CardHeader className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-gradient-to-br from-amber-600 to-amber-700 p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-500">
                      <Award className="h-8 w-8 text-white" />
                    </div>
                    <div className="bg-amber-600 text-white px-3 py-1 rounded-full text-xs font-semibold">85% SUCCESS</div>
                  </div>
                  <CardTitle className="text-2xl font-bold text-slate-900">Government Grants</CardTitle>
                  <CardDescription className="text-slate-600 text-base leading-relaxed">
                    Expert assistance securing government funding to fuel your business growth and innovation.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3 text-sm text-slate-600">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-amber-600 mr-3 flex-shrink-0" />
                      Grant Research & Identification
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-amber-600 mr-3 flex-shrink-0" />
                      Application Preparation
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-amber-600 mr-3 flex-shrink-0" />
                      Compliance Management
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-amber-600 mr-3 flex-shrink-0" />
                      Federal & Provincial Programs
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-amber-600 mr-3 flex-shrink-0" />
                      Ongoing Support
                    </li>
                  </ul>
                  <div className="pt-4 border-t border-amber-200">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-amber-600">15%</span>
                      <span className="text-sm text-slate-500">of grant secured</span>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white shadow-lg" asChild>
                      <Link href="/contact">Get Quote</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
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
                  A systematic approach that ensures your website project's success from initial consultation 
                  to launch and ongoing optimization.
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
                  We analyze your business goals, target audience, and competitive landscape to create 
                  a comprehensive web development strategy.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-white font-bold">
                  2
                </div>
                <h3 className="font-semibold">Design & Development</h3>
                <p className="text-sm text-gray-600">
                  Custom website design and development using modern technologies, responsive design, 
                  and SEO best practices.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-white font-bold">
                  3
                </div>
                <h3 className="font-semibold">Testing & Launch</h3>
                <p className="text-sm text-gray-600">
                  Comprehensive testing across devices and browsers, performance optimization, 
                  and seamless website launch.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-white font-bold">
                  4
                </div>
                <h3 className="font-semibold">Optimization & Growth</h3>
                <p className="text-sm text-gray-600">
                  Ongoing monitoring, performance optimization, and strategic improvements to maximize 
                  your website's effectiveness.
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
                  Let's discuss your web development needs and create a custom solution that drives 
                  real business results for your Canadian business.
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
