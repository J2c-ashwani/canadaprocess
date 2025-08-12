'use client'

import { ArrowRight, CheckCircle, Building2, Star, Users, Award, TrendingUp, Shield, Clock, Globe, Zap, Target, BarChart3, Lightbulb, Sparkles, ShoppingCart } from 'lucide-react'
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

export default function HomePage() {
  const handleServicesClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Hero Section - Premium Professional Design */}
        <section className="relative py-20 md:py-32 lg:py-40 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden animate-fadeInUp">
          {/* Sophisticated Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>

          {/* Elegant Floating Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-20 w-2 h-2 bg-amber-400/30 rounded-full animate-float"></div>
            <div className="absolute top-40 right-32 w-3 h-3 bg-teal-400/20 rounded-full animate-float animation-delay-1000"></div>
            <div className="absolute bottom-32 left-32 w-1.5 h-1.5 bg-blue-400/25 rounded-full animate-float animation-delay-2000"></div>
            <div className="absolute bottom-20 right-20 w-2.5 h-2.5 bg-amber-300/20 rounded-full animate-float animation-delay-3000"></div>
          </div>

          <div className="container px-6 lg:px-8 mx-auto relative z-10">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="inline-flex items-center rounded-full bg-white/10 backdrop-blur-sm px-6 py-3 text-sm font-medium text-white border border-white/20">
                    <Award className="mr-2 h-4 w-4 text-amber-400" />
                    Enterprise-Grade Web Development Since 2018
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                    Professional Website Development & 
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-teal-300 to-blue-400">
                      Digital Marketing Services
                    </span>
                    for Canadian Businesses
                  </h1>
                  <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
                    Transform your startup or enterprise with custom website development, strategic SEO, 
                    digital marketing campaigns, and government grant assistance. Serving Toronto, Vancouver, 
                    Montreal, and businesses across Canada.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
                    asChild
                  >
                    <Link href="/contact#contact-form">
                      Get Free Website Quote
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900 backdrop-blur-sm px-8 py-4 text-lg font-semibold transition-all duration-300"
                    asChild
                  >
                    <Link href="/services">View Our Portfolio</Link>
                  </Button>
                </div>

                <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">500+</div>
                    <div className="text-sm text-slate-300 font-medium">Websites Built</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">$50M+</div>
                    <div className="text-sm text-slate-300 font-medium">Client Revenue Generated</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">98%</div>
                    <div className="text-sm text-slate-300 font-medium">Client Satisfaction Rate</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 via-teal-500/20 to-blue-500/20 rounded-3xl blur-3xl"></div>
                  <Image
                    alt="Professional website development services in Canada - StartupBoost team working on custom web design projects"
                    className="relative rounded-3xl object-cover shadow-2xl border border-white/20 backdrop-blur-sm"
                    height="600"
                    src="/modern-startup-office.png"
                    width="600"
                    priority
                  />
                  <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl p-6 shadow-2xl border border-white/10">
                    <div className="flex items-center space-x-4">
                      <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
                        <TrendingUp className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-white text-lg">400% ROI</div>
                        <div className="text-sm text-white/80">Average Client Growth</div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -top-6 -right-6 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-4 shadow-2xl border border-white/10">
                    <div className="flex items-center space-x-3">
                      <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
                        <Award className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-white">Enterprise Grade</div>
                        <div className="text-xs text-white/80">Premium Quality</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Client Logos */}
        <ClientLogos />

        {/* Trust Badges */}
        <TrustBadges />

        {/* Services Section - SEO Optimized */}
        <section className="w-full py-20 md:py-32 bg-gray-100 animate-slideInRight">
          <div className="container px-6 lg:px-8 mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Professional Web Development & Digital Marketing Services
                <span className="block bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                  That Drive Business Growth
                </span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                From custom website development and responsive web design to comprehensive SEO services 
                and digital marketing campaigns, we provide end-to-end solutions for Canadian businesses, 
                startups, and enterprises looking to dominate their online presence.
              </p>
            </div>
            
            <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
              {/* Website Development */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 bg-white group hover:-translate-y-2 hover-lift">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                    <Globe className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold mb-3 text-slate-900">Custom Website Development</CardTitle>
                  <CardDescription className="text-slate-600 leading-relaxed">
                    Professional custom website development services including responsive web design, 
                    WordPress development, and modern web applications for Canadian businesses.
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

              {/* SEO & Digital Marketing */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 bg-white group hover:-translate-y-2 hover-lift">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-600 to-orange-700 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                    <TrendingUp className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold mb-3 text-slate-900">SEO & Digital Marketing</CardTitle>
                  <CardDescription className="text-slate-600 leading-relaxed">
                    Comprehensive SEO services, Google Ads management, and digital marketing strategies 
                    to increase your online visibility and drive qualified traffic to your website.
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

              {/* E-commerce Development */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 bg-white group hover:-translate-y-2 hover-lift">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-green-600 to-green-700 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                    <ShoppingCart className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold mb-3 text-slate-900">E-commerce Development</CardTitle>
                  <CardDescription className="text-slate-600 leading-relaxed">
                    Professional e-commerce website development using Shopify, WooCommerce, and custom 
                    solutions with secure payment processing and inventory management systems.
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

              {/* Website Redesign */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 bg-white group hover:-translate-y-2 hover-lift">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-purple-700 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold mb-3 text-slate-900">Website Redesign Services</CardTitle>
                  <CardDescription className="text-slate-600 leading-relaxed">
                    Transform your existing website with modern design, improved user experience, 
                    mobile optimization, and enhanced performance to increase conversions and engagement.
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

              {/* Website Maintenance */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 bg-white group hover:-translate-y-2 hover-lift">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-600 to-teal-700 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold mb-3 text-slate-900">Website Maintenance & Support</CardTitle>
                  <CardDescription className="text-slate-600 leading-relaxed">
                    Ongoing website maintenance services including security updates, backups, 
                    performance monitoring, and technical support to keep your website running smoothly.
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

              {/* Government Grant Assistance */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 bg-white group hover:-translate-y-2 hover-lift">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold mb-3 text-slate-900">Government Grant Assistance</CardTitle>
                  <CardDescription className="text-slate-600 leading-relaxed">
                    Expert assistance with Canadian government grants and funding programs for startups 
                    and small businesses, including application preparation and compliance management.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3 text-sm text-slate-600">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-amber-600 mr-3 flex-shrink-0" />
                      Canadian Grant Research
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
            </div>

            {/* View All Services Button */}
            <div className="text-center mt-12">
              <Button className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300" asChild>
                <Link href="/services" onClick={handleServicesClick}>
                  View All Web Development Services & Pricing
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Team Expertise */}
        <TeamExpertise />

        {/* Technology Stack */}
        <TechnologyStack />

        {/* Guarantees */}
        <Guarantees />

        {/* Why Choose Us - SEO Optimized */}
        <section className="w-full py-20 md:py-32 bg-gray-50 animate-slideInLeft">
          <div className="container px-6 lg:px-8 mx-auto">
            <div className="grid gap-16 lg:grid-cols-2 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
                  Why Canadian Businesses Choose
                  <span className="block bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                    StartupBoost for Web Development
                  </span>
                </h2>
                <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                  As a leading web development company in Canada, we don't just build websites - we create 
                  comprehensive digital solutions that drive measurable business growth. Our proven approach 
                  combines cutting-edge web development with strategic digital marketing to deliver exceptional 
                  ROI for startups, small businesses, and enterprises across Toronto, Vancouver, Montreal, and beyond.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 bg-gradient-to-br from-teal-500 to-teal-600 p-3 rounded-xl shadow-lg">
                      <CheckCircle className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg mb-2">Proven Track Record</h3>
                      <p className="text-slate-600">500+ successful website projects with measurable ROI and sustained business growth for Canadian clients across all industries.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-xl shadow-lg">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg mb-2">Enterprise-Grade Security</h3>
                      <p className="text-slate-600">Bank-level security protocols, SSL certificates, and ISO 27001 certified development processes ensure your website and data remain completely secure.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 bg-gradient-to-br from-amber-500 to-amber-600 p-3 rounded-xl shadow-lg">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg mb-2">Full-Service Digital Agency</h3>
                      <p className="text-slate-600">From custom web development and SEO to digital marketing and government grants - everything you need to succeed online under one roof.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 bg-gradient-to-br from-slate-500 to-slate-600 p-3 rounded-xl shadow-lg">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg mb-2">Dedicated Canadian Support</h3>
                      <p className="text-slate-600">24/7 technical support and dedicated account management from our Canadian team ensures your website performs optimally at all times.</p>
                    </div>
                  </div>
                </div>
                <div className="mt-10">
                  <Button className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300" asChild>
                    <Link href="/about">Learn About Our Web Development Process</Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 via-blue-500/10 to-slate-500/10 rounded-3xl blur-2xl"></div>
                <Image
                  alt="Professional web development team in Canada creating custom websites and digital marketing strategies for businesses"
                  className="relative rounded-3xl object-cover shadow-2xl border border-slate-200"
                  height="600"
                  src="/startup-strategy-discussion.png"
                  width="600"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="w-full py-20 md:py-32 bg-gray-100 animate-slideInRight">
          <div className="container px-6 lg:px-8 mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                  Client Success Stories
                </span>
                <span className="text-slate-900"> & Website Development Reviews</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Real results from Canadian businesses who transformed their online presence with our 
                professional web development and digital marketing services.
              </p>
            </div>
            <div className="grid gap-8 lg:grid-cols-3">
              <Card className="border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-slate-700 mb-8 italic text-lg leading-relaxed">
                    "StartupBoost delivered a sophisticated, professional website that perfectly represents our brand. 
                    Our online conversions increased by 300% in the first month after launch!"
                  </blockquote>
                  <div className="flex items-center">
                    <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-full h-14 w-14 mr-4 flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-lg">SC</span>
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 text-lg">Sarah Chen</div>
                      <div className="text-slate-600">CEO, TechFlow Solutions - Toronto</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-slate-700 mb-8 italic text-lg leading-relaxed">
                    "The quality and attention to detail exceeded our expectations. Our new e-commerce website 
                    not only looks premium but performs exceptionally well with fast loading times."
                  </blockquote>
                  <div className="flex items-center">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-full h-14 w-14 mr-4 flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-lg">MR</span>
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 text-lg">Michael Rodriguez</div>
                      <div className="text-slate-600">Founder, GreenTech Innovations - Vancouver</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-slate-700 mb-8 italic text-lg leading-relaxed">
                    "Professional, strategic, and results-driven web development. They delivered exactly what we needed 
                    and more. Our online presence and SEO rankings have never been stronger."
                  </blockquote>
                  <div className="flex items-center">
                    <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-full h-14 w-14 mr-4 flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-lg">EW</span>
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 text-lg">Emily Watson</div>
                      <div className="text-slate-600">Co-founder, HealthTech Pro - Montreal</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-20 md:py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden animate-fadeInUp">
          {/* Subtle Background Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-32 h-32 bg-teal-400/20 rounded-full animate-float"></div>
            <div className="absolute bottom-20 right-20 w-24 h-24 bg-amber-400/20 rounded-full animate-float animation-delay-2000"></div>
            <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-blue-400/20 rounded-full animate-float animation-delay-4000"></div>
          </div>
          
          <div className="container px-6 lg:px-8 mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Transform Your Business with Professional Web Development?
            </h2>
            <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Let's create a sophisticated, SEO-optimized website that not only looks exceptional but drives 
              real business results. Get your free consultation and custom quote today.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 px-10 py-4 text-lg font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300"
                asChild
              >
                <Link href="/contact#contact-form">
                  Get Free Website Quote Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900 backdrop-blur-sm px-10 py-4 text-lg font-semibold transition-all duration-300"
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
