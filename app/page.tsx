"use client"

import type React from "react"
import { ArrowRight, CheckCircle, Award, TrendingUp, Shield, Clock, Globe, Zap, ShoppingCart, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ClientLogos } from "@/components/client-logos"
import { TrustBadges } from "@/components/trust-badges"
import { Guarantees } from "@/components/guarantees"
import { TechnologyStack } from "@/components/technology-stack"
import { TeamExpertise } from "@/components/team-expertise"

const HomePage: React.FC = () => {
  const handleServicesClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pb-[env(safe-area-inset-bottom)]">
        <section className="relative py-8 sm:py-12 md:py-20 lg:py-32 xl:py-40 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden animate-fadeInUp">
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4H-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            ></div>
          </div>
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-20 w-2 h-2 bg-amber-400/30 rounded-full animate-float"></div>
            <div className="absolute top-40 right-32 w-3 h-3 bg-teal-400/20 rounded-full animate-float animation-delay-1000"></div>
            <div className="absolute bottom-32 left-32 w-1.5 h-1.5 bg-blue-400/25 rounded-full animate-float animation-delay-2000"></div>
            <div className="absolute bottom-20 right-20 w-2.5 h-2.5 bg-amber-300/20 rounded-full animate-float animation-delay-3000"></div>
          </div>
          <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
            <div className="grid gap-8 lg:gap-12 lg:grid-cols-2 items-center">
              <div className="space-y-6 sm:space-y-8">
                <div className="space-y-4 sm:space-y-6">
                  <div className="inline-flex items-center rounded-full bg-white/10 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium text-white border border-white/20">
                    <Award className="mr-2 h-3 w-3 sm:h-4 sm:w-4 text-amber-400" />🚀 $50M+ in Grants Secured
                  </div>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight text-balance">
                    Unlock Government Funding &{" "}
                    <span className="inline-block relative text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-teal-300 to-blue-400">
                      Transform Your Digital Presence
                    </span>
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-full sm:max-w-2xl text-pretty">
                    Secure millions in government grants and build world-class websites with our proven expertise for
                    startups in the USA and Canada.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-4">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 px-6 sm:px-8 py-4 text-base sm:text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 w-full sm:w-auto min-h-[48px]"
                    asChild
                  >
                    <Link href="/contact#contact-form">
                      Get Free Grant Assessment 🎯
                      <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900 backdrop-blur-sm px-6 sm:px-8 py-4 text-base sm:text-lg font-semibold transition-all duration-300 w-full sm:w-auto bg-transparent min-h-[48px]"
                    asChild
                  >
                    <Link href="/services">View Our Portfolio</Link>
                  </Button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-white/20">
                  <div className="text-center px-2 sm:px-4">
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white min-w-0 break-words">500+</div>
                    <div className="text-xs sm:text-sm text-slate-300 font-medium min-w-0 break-words">
                      Websites Built
                    </div>
                  </div>
                  <div className="text-center px-2 sm:px-4">
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white min-w-0 break-words">
                      $50M+
                    </div>
                    <div className="text-xs sm:text-sm text-slate-300 font-medium min-w-0 break-words">
                      Client Revenue Generated
                    </div>
                  </div>
                  <div className="text-center px-2 sm:px-4">
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white min-w-0 break-words">98%</div>
                    <div className="text-xs sm:text-sm text-slate-300 font-medium min-w-0 break-words">
                      Client Satisfaction Rate
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative order-first lg:order-last overflow-hidden">
                <div
                  className="absolute inset-0 bg-gradient-to-r from-teal-500/10 via-blue-500/10 to-slate-500/10 rounded-2xl sm:rounded-3xl blur-2xl pointer-events-none"
                  aria-hidden="true"
                ></div>
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
                  <Image
                    alt="Canadian web development team creating custom websites"
                    src="/headerimage.jpg"
                    width={600}
                    height={600}
                    className="block w-full h-[200px] xs:h-[250px] sm:h-[300px] md:h-[350px] lg:h-[500px] xl:h-[600px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <ClientLogos />
        <TrustBadges />

        <section className="w-full py-12 sm:py-16 md:py-20 lg:py-32 bg-gray-100 animate-slideInRight">
          <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 text-balance">
                Government Grants + Digital Solutions
                <span className="block bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                  Complete Business Growth Package
                </span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4 text-pretty">
                Why choose between funding and digital growth? Get both! We secure government grants to fund your
                digital transformation while building world-class websites and marketing strategies.
              </p>
            </div>
            <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 bg-white group hover:-translate-y-2">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                    <Award className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl font-bold mb-3 text-slate-900">
                    Government Grant Assistance
                  </CardTitle>
                  <CardDescription className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    Expert assistance with USA & Canadian government grants and funding programs for startups and small
                    businesses, including application preparation and compliance management.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3 text-sm text-slate-600">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-amber-600 mr-3 flex-shrink-0" />
                      USA & Canadian Grant Research
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-amber-600 mr-3 flex-shrink-0" />
                      Application Preparation
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-amber-600 mr-3 flex-shrink-0" />
                      Federal & Provincial Programs
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-amber-600 mr-3 flex-shrink-0" />
                      Compliance Management
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-amber-600 mr-3 flex-shrink-0" />
                      85% Success Rate
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 bg-white group hover:-translate-y-2">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                    <Globe className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl font-bold mb-3 text-slate-900">
                    Custom Website Development
                  </CardTitle>
                  <CardDescription className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    Professional custom website development services including responsive web design, WordPress
                    development, and modern web applications for USA & Canadian businesses.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3 text-sm text-slate-600">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-blue-600 mr-3 flex-shrink-0" />
                      Custom Web Design & Development
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-blue-600 mr-3 flex-shrink-0" />
                      Mobile-First Responsive Design
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-blue-600 mr-3 flex-shrink-0" />
                      WordPress & CMS Development
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-blue-600 mr-3 flex-shrink-0" />
                      SEO-Optimized Architecture
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-blue-600 mr-3 flex-shrink-0" />
                      Performance Optimization
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 bg-white group hover:-translate-y-2">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-600 to-orange-700 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                    <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl font-bold mb-3 text-slate-900">
                    SEO & Digital Marketing
                  </CardTitle>
                  <CardDescription className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    Comprehensive SEO services, Google Ads management, and digital marketing strategies to increase your
                    online visibility and drive qualified traffic to your website.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3 text-sm text-slate-600">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-orange-600 mr-3 flex-shrink-0" />
                      Search Engine Optimization (SEO)
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-orange-600 mr-3 flex-shrink-0" />
                      Google Ads & PPC Management
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-orange-600 mr-3 flex-shrink-0" />
                      Social Media Marketing
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-orange-600 mr-3 flex-shrink-0" />
                      Content Marketing Strategy
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-orange-600 mr-3 flex-shrink-0" />
                      Local SEO for Canadian Businesses
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 bg-white group hover:-translate-y-2">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-green-600 to-green-700 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                    <ShoppingCart className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl font-bold mb-3 text-slate-900">
                    E-commerce Development
                  </CardTitle>
                  <CardDescription className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    Professional e-commerce website development using Shopify, WooCommerce, and custom solutions with
                    secure payment processing and inventory management systems.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3 text-sm text-slate-600">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-3 flex-shrink-0" />
                      Shopify Store Development
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-3 flex-shrink-0" />
                      WooCommerce Development
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-3 flex-shrink-0" />
                      Payment Gateway Integration
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-3 flex-shrink-0" />
                      Inventory Management Systems
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-3 flex-shrink-0" />
                      Multi-currency & Canadian Tax Setup
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 bg-white group hover:-translate-y-2">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-purple-700 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                    <Zap className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl font-bold mb-3 text-slate-900">
                    Website Redesign Services
                  </CardTitle>
                  <CardDescription className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    Transform your existing website with modern design, improved user experience, mobile optimization,
                    and enhanced performance to increase conversions and engagement.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3 text-sm text-slate-600">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-purple-600 mr-3 flex-shrink-0" />
                      Complete Website Redesign
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-purple-600 mr-3 flex-shrink-0" />
                      UX/UI Improvements
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-purple-600 mr-3 flex-shrink-0" />
                      Mobile Optimization
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-purple-600 mr-3 flex-shrink-0" />
                      Speed & Performance Optimization
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-purple-600 mr-3 flex-shrink-0" />
                      Conversion Rate Optimization
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 bg-white group hover:-translate-y-2">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-600 to-teal-700 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                    <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl font-bold mb-3 text-slate-900">
                    Website Maintenance & Support
                  </CardTitle>
                  <CardDescription className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    Ongoing website maintenance services including security updates, backups, performance monitoring,
                    and technical support to keep your website running smoothly.
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
                      Regular Website Backups
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-teal-600 mr-3 flex-shrink-0" />
                      Performance Monitoring
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-teal-600 mr-3 flex-shrink-0" />
                      Content Updates & Changes
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-teal-600 mr-3 flex-shrink-0" />
                      24/7 Technical Support
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            <div className="text-center mt-8 sm:mt-12">
              <Button
                className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white px-6 sm:px-8 py-4 text-base sm:text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 w-full sm:w-auto min-h-[48px]"
                asChild
              >
                <Link href="/services" onClick={handleServicesClick}>
                  View All Services & Pricing
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <TeamExpertise />
        <TechnologyStack />
        <Guarantees />

        <section className="w-full py-12 sm:py-16 md:py-20 lg:py-32 bg-gray-50 animate-slideInLeft overflow-hidden">
          <div className="container px-4 sm:px-6 lg:px-8 mx-auto overflow-hidden">
            <div className="grid gap-8 sm:gap-12 lg:gap-16 lg:grid-cols-2 items-center overflow-hidden">
              <div className="space-y-6 sm:space-y-8 overflow-hidden">
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 text-balance leading-tight px-2 sm:px-0">
                  Why Canadian Businesses Choose
                  <span className="block bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent mt-1 break-words word-break overflow-wrap-anywhere">
                    FSI Digital for Web Development
                  </span>
                </h2>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 mb-6 sm:mb-8 leading-relaxed text-pretty px-2 sm:px-0 break-words word-break overflow-wrap-anywhere">
                  As a leading web development company in Canada, we don't just build websites - we create comprehensive
                  digital solutions that drive measurable business growth. Our proven approach combines cutting-edge web
                  development with strategic digital marketing to deliver exceptional ROI for startups, small
                  businesses, and enterprises across Toronto, Vancouver, Montreal, and beyond.
                </p>
                <div className="space-y-4 sm:space-y-6 overflow-hidden">
                  <div className="flex items-start space-x-3 sm:space-x-4 px-2 sm:px-0 py-2 sm:py-3 overflow-hidden">
                    <div className="flex-shrink-0 bg-gradient-to-br from-teal-500 to-teal-600 p-2.5 sm:p-3 rounded-xl shadow-lg mt-0.5 overflow-hidden">
                      <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0 pr-2 sm:pr-4 overflow-hidden">
                      <h3 className="font-bold text-slate-900 text-sm sm:text-base lg:text-lg mb-1 sm:mb-2 text-balance break-words overflow-hidden">
                        Proven Track Record
                      </h3>
                      <p className="text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed text-pretty break-words word-break overflow-wrap-anywhere overflow-hidden">
                        500+ successful website projects with measurable ROI and sustained business growth for Canadian
                        clients across all industries.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 sm:space-x-4 px-2 sm:px-0 py-2 sm:py-3 overflow-hidden">
                    <div className="flex-shrink-0 bg-gradient-to-br from-blue-500 to-blue-600 p-2.5 sm:p-3 rounded-xl shadow-lg mt-0.5 overflow-hidden">
                      <Shield className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0 pr-2 sm:pr-4 overflow-hidden">
                      <h3 className="font-bold text-slate-900 text-sm sm:text-base lg:text-lg mb-1 sm:mb-2 text-balance break-words overflow-hidden">
                        Enterprise-Grade Security
                      </h3>
                      <p className="text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed text-pretty break-words word-break overflow-wrap-anywhere overflow-hidden">
                        Bank-level security protocols, SSL certificates, and ISO 27001 certified development processes
                        ensure your website and data remain completely secure.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 sm:space-x-4 px-2 sm:px-0 py-2 sm:py-3 overflow-hidden">
                    <div className="flex-shrink-0 bg-gradient-to-br from-amber-500 to-amber-600 p-2.5 sm:p-3 rounded-xl shadow-lg mt-0.5 overflow-hidden">
                      <Award className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0 pr-2 sm:pr-4 overflow-hidden">
                      <h3 className="font-bold text-slate-900 text-sm sm:text-base lg:text-lg mb-1 sm:mb-2 text-balance break-words overflow-hidden">
                        Full-Service Digital Agency
                      </h3>
                      <p className="text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed text-pretty break-words word-break overflow-wrap-anywhere overflow-hidden">
                        From custom web development and SEO to digital marketing and government grants - everything you
                        need to succeed online under one roof.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 sm:space-x-4 px-2 sm:px-0 py-2 sm:py-3 overflow-hidden">
                    <div className="flex-shrink-0 bg-gradient-to-br from-slate-500 to-slate-600 p-2.5 sm:p-3 rounded-xl shadow-lg mt-0.5 overflow-hidden">
                      <Clock className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0 pr-2 sm:pr-4 overflow-hidden">
                      <h3 className="font-bold text-slate-900 text-sm sm:text-base lg:text-lg mb-1 sm:mb-2 text-balance break-words overflow-hidden">
                        Dedicated Canadian Support
                      </h3>
                      <p className="text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed text-pretty break-words word-break overflow-wrap-anywhere overflow-hidden">
                        24/7 technical support and dedicated account management from our Canadian team ensures your
                        website performs optimally at all times.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="pt-2 sm:pt-4 px-4 pb-24 overflow-hidden">
                  <Button
                    className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white px-6 sm:px-10 py-4 text-sm sm:text-base lg:text-lg font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 w-full rounded-xl break-words word-break overflow-hidden"
                    asChild
                  >
                    <Link href="/about">Learn About Our Web Development Process</Link>
                  </Button>
                </div>
              </div>
              <div className="relative order-first lg:order-last overflow-hidden">
                <div
                  className="absolute inset-0 bg-gradient-to-r from-teal-500/10 via-blue-500/10 to-slate-500/10 rounded-2xl sm:rounded-3xl blur-2xl pointer-events-none"
                  aria-hidden="true"
                ></div>
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
                  <Image
                    alt="Canadian web development team creating custom websites"
                    src="/herobody.jpg"
                    width={600}
                    height={600}
                    className="block w-full h-[200px] xs:h-[250px] sm:h-[300px] md:h-[350px] lg:h-[500px] xl:h-[600px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 sm:py-16 md:py-20 lg:py-32 bg-gray-100 animate-slideInRight">
          <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
            <div className="text-center mb-12 sm:mb-20">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-balance">
                <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                  Client Success Stories
                </span>
                <span className="text-slate-900"> & Website Development Reviews</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto px-4 text-pretty">
                Real results from Canadian businesses who transformed their online presence with our professional web
                development and digital marketing services.
              </p>
            </div>
            <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
              <Card className="border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex mb-4 sm:mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-amber-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-slate-700 mb-6 sm:mb-8 italic text-base sm:text-lg leading-relaxed">
                    "FSI Digital delivered a sophisticated, professional website that perfectly represents our brand.
                    Our online conversions increased by 300% in the first month after launch!"
                  </blockquote>
                  <div className="flex items-center">
                    <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-full h-12 w-12 sm:h-14 sm:w-14 mr-4 flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-base sm:text-lg">SC</span>
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 text-base sm:text-lg">Sarah Chen</div>
                      <div className="text-slate-600 text-sm sm:text-base">CEO, TechFlow Solutions - Toronto</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex mb-4 sm:mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-amber-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-slate-700 mb-6 sm:mb-8 italic text-base sm:text-lg leading-relaxed">
                    "The quality and attention to detail exceeded our expectations. Our new e-commerce website not only
                    looks premium but performs exceptionally well with fast loading times."
                  </blockquote>
                  <div className="flex items-center">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-full h-12 w-12 sm:h-14 sm:w-14 mr-4 flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-base sm:text-lg">MR</span>
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 text-base sm:text-lg">Michael Rodriguez</div>
                      <div className="text-slate-600 text-sm sm:text-base">
                        Founder, GreenTech Innovations - Vancouver
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex mb-4 sm:mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-amber-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-slate-700 mb-6 sm:mb-8 italic text-base sm:text-lg leading-relaxed">
                    "Professional, strategic, and results-driven web development. They delivered exactly what we needed
                    and more. Our online presence and SEO rankings have never been stronger."
                  </blockquote>
                  <div className="flex items-center">
                    <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-full h-12 w-12 sm:h-14 sm:w-14 mr-4 flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-base sm:text-lg">EW</span>
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 text-base sm:text-lg">Emily Watson</div>
                      <div className="text-slate-600 text-sm sm:text-base">Co-founder, HealthTech Pro - Montreal</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 sm:py-16 md:py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden animate-fadeInUp">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-32 h-32 bg-teal-400/20 rounded-full animate-float"></div>
            <div className="absolute bottom-20 right-20 w-24 h-24 bg-amber-400/20 rounded-full animate-float animation-delay-2000"></div>
            <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-blue-400/20 rounded-full animate-float animation-delay-4000"></div>
          </div>
          <div className="container px-4 sm:px-6 lg:px-8 mx-auto text-center relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8 text-balance">
              Ready to Transform Your Business with Professional Web Development?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4 text-pretty">
              Let's create a sophisticated, SEO-optimized website that not only looks exceptional but drives real
              business results. Get your free consultation and custom quote today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 px-8 sm:px-10 py-4 text-base sm:text-lg font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 w-full sm:w-auto min-h-[48px]"
                asChild
              >
                <Link href="/contact#contact-form">
                  Get Free Website Quote Today
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900 backdrop-blur-sm px-8 sm:px-10 py-4 text-base sm:text-lg font-semibold transition-all duration-300 w-full sm:w-auto bg-transparent min-h-[48px]"
                asChild
              >
                <Link href="/services">View Our Web Development Portfolio</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default HomePage
