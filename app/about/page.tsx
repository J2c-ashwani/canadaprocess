import {
  Award,
  BarChart3,
  Users,
  Target,
  Globe,
  Zap,
  Shield,
  Clock,
  TrendingUp,
  DollarSign,
  Rocket,
  Building2,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-20 lg:py-32 xl:py-40 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 animate-fade-in">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-gray-900 mb-4 md:mb-6 text-balance">
                Building the Future of
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-600">
                  Business Innovation
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-6 md:mb-8 text-pretty px-2">
                Since 2018, we've been the trusted strategic partner for ambitious entrepreneurs across Canada and North
                America, combining deep industry expertise with cutting-edge technology to accelerate business growth.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto">
                <div className="text-center py-3 md:py-4">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-1">6+</div>
                  <div className="text-sm md:text-base text-gray-600 font-medium">Years of Excellence</div>
                </div>
                <div className="text-center py-3 md:py-4">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-1">500+</div>
                  <div className="text-sm md:text-base text-gray-600 font-medium">Success Stories</div>
                </div>
                <div className="text-center py-3 md:py-4">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-1">$50M+</div>
                  <div className="text-sm md:text-base text-gray-600 font-medium">Funding Secured</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="w-full py-12 md:py-20 lg:py-32 bg-white animate-fade-in">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-6 md:space-y-8">
                <div className="space-y-3 md:space-y-4">
                  <div className="inline-flex items-center rounded-full bg-blue-100 px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-medium text-blue-900">
                    Our Foundation
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900 text-balance">
                    Born from Entrepreneurial Experience
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed text-pretty">
                    FSI Digital was founded by serial entrepreneurs who understood firsthand the challenges of scaling a
                    business in today's competitive landscape.
                  </p>
                </div>
                <div className="space-y-4 md:space-y-6">
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-pretty">
                    After successfully launching and scaling multiple ventures, our founders recognized a critical gap
                    in the market: startups with brilliant ideas were struggling not because of poor concepts, but due
                    to inadequate digital infrastructure, limited marketing expertise, and complex government funding
                    processes.
                  </p>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-pretty">
                    This insight led to the creation of FSI Digital - a comprehensive business solutions firm that
                    combines technical excellence, strategic marketing, and funding expertise under one roof. Today,
                    we're proud to be the go-to partner for ambitious entrepreneurs across North America.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  <div className="bg-blue-50 p-4 md:p-6 rounded-xl">
                    <div className="text-2xl md:text-3xl font-bold text-blue-900 mb-1 md:mb-2">98%</div>
                    <div className="text-xs md:text-sm text-gray-600 font-medium">Client Retention Rate</div>
                  </div>
                  <div className="bg-indigo-50 p-4 md:p-6 rounded-xl">
                    <div className="text-2xl md:text-3xl font-bold text-indigo-900 mb-1 md:mb-2">24/7</div>
                    <div className="text-xs md:text-sm text-gray-600 font-medium">Support Available</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur-3xl opacity-20"></div>
                <Image
                  alt="Our founding team and company culture"
                  className="relative rounded-2xl object-cover shadow-2xl"
                  height="600"
                  src="/aboutheader.jpg"
                  width="600"
                />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-6 shadow-xl border">
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-100 p-3 rounded-lg">
                      <TrendingUp className="h-8 w-8 text-green-600" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-lg">400% ROI</div>
                      <div className="text-sm text-gray-600">Average Client Growth</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="w-full py-12 md:py-20 lg:py-32 bg-gray-50 animate-fade-in">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-3 md:mb-4 text-balance">
                Our Core Values
              </h2>
              <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-gray-600 text-pretty px-2">
                These fundamental principles guide every decision we make and every solution we deliver.
              </p>
            </div>
            <div className="grid gap-6 md:gap-8 lg:grid-cols-3">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                <CardContent className="p-6 md:p-8 text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-500">
                    <Target className="h-6 w-6 md:h-8 md:w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl md:text-2xl font-bold mb-3 text-balance">
                    Results-Driven Excellence
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-sm sm:text-base leading-relaxed text-pretty">
                    We measure our success by your success. Every strategy, every solution, every recommendation is
                    designed to deliver measurable, sustainable results.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                <CardContent className="p-6 md:p-8 text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-indigo-500">
                    <Users className="h-6 w-6 md:h-8 md:w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl md:text-2xl font-bold mb-3 text-balance">
                    Strategic Partnership
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-sm sm:text-base leading-relaxed text-pretty">
                    We don't just provide services - we become your strategic partners, deeply invested in your
                    long-term success and growth trajectory.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                <CardContent className="p-6 md:p-8 text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-purple-500">
                    <Zap className="h-6 w-6 md:h-8 md:w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl md:text-2xl font-bold mb-3 text-balance">
                    Innovation Leadership
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-sm sm:text-base leading-relaxed text-pretty">
                    We stay at the forefront of industry trends and emerging technologies to ensure your business
                    maintains a competitive advantage.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Success Metrics & Client Impact */}
        <section className="w-full py-12 md:py-20 lg:py-32 bg-white animate-fade-in">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-3 md:mb-4 text-balance">
                Proven Results That Speak Volumes
              </h2>
              <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-gray-600 text-pretty px-2">
                Our track record demonstrates consistent value delivery across diverse industries and business stages.
              </p>
            </div>

            {/* Key Metrics */}
            <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-12 md:mb-16">
              <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-emerald-50 text-center">
                <CardContent className="p-4 sm:p-6 md:p-8">
                  <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-full h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 mx-auto mb-3 md:mb-4 flex items-center justify-center">
                    <DollarSign className="h-6 w-6 md:h-8 md:w-8 text-white" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-1 md:mb-2">$50M+</div>
                  <div className="text-xs sm:text-sm text-gray-600 font-medium">Total Funding Secured</div>
                  <p className="text-xs text-gray-500 mt-1 md:mt-2">For our clients through grants and investments</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-cyan-50 text-center">
                <CardContent className="p-4 sm:p-6 md:p-8">
                  <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 mx-auto mb-3 md:mb-4 flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 md:h-8 md:w-8 text-white" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1 md:mb-2">400%</div>
                  <div className="text-xs sm:text-sm text-gray-600 font-medium">Average ROI Increase</div>
                  <p className="text-xs text-gray-500 mt-1 md:mt-2">Within first 12 months of partnership</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-violet-50 text-center">
                <CardContent className="p-4 sm:p-6 md:p-8">
                  <div className="bg-gradient-to-br from-purple-600 to-violet-600 rounded-full h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 mx-auto mb-3 md:mb-4 flex items-center justify-center">
                    <Rocket className="h-6 w-6 md:h-8 md:w-8 text-white" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-1 md:mb-2">85%</div>
                  <div className="text-xs sm:text-sm text-gray-600 font-medium">Grant Success Rate</div>
                  <p className="text-xs text-gray-500 mt-1 md:mt-2">Industry average is only 30-40%</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-br from-orange-50 to-amber-50 text-center">
                <CardContent className="p-4 sm:p-6 md:p-8">
                  <div className="bg-gradient-to-br from-orange-600 to-amber-600 rounded-full h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 mx-auto mb-3 md:mb-4 flex items-center justify-center">
                    <Building2 className="h-6 w-6 md:h-8 md:w-8 text-white" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-orange-600 mb-1 md:mb-2">500+</div>
                  <div className="text-xs sm:text-sm text-gray-600 font-medium">Successful Projects</div>
                  <p className="text-xs text-gray-500 mt-1 md:mt-2">Across 50+ industries and sectors</p>
                </CardContent>
              </Card>
            </div>

            {/* Client Success Stories */}
            <div className="grid gap-6 md:gap-8 lg:grid-cols-2">
              <Card className="border-0 shadow-lg bg-gradient-to-br from-slate-50 to-gray-50">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-start space-x-3 md:space-x-4 mb-4 md:mb-6">
                    <div className="bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 md:mb-2">TechFlow Solutions</h3>
                      <p className="text-gray-600 text-xs sm:text-sm mb-3 md:mb-4">B2B SaaS Startup</p>
                    </div>
                  </div>
                  <div className="space-y-3 md:space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 text-xs sm:text-sm">Website Conversion Rate</span>
                      <span className="font-bold text-green-600 text-sm sm:text-base">+300%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 text-xs sm:text-sm">Monthly Recurring Revenue</span>
                      <span className="font-bold text-green-600 text-sm sm:text-base">+250%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 text-xs sm:text-sm">Government Grants Secured</span>
                      <span className="font-bold text-green-600 text-sm sm:text-base">$2.5M</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-br from-slate-50 to-gray-50">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-start space-x-3 md:space-x-4 mb-4 md:mb-6">
                    <div className="bg-gradient-to-br from-emerald-500 to-green-500 rounded-full h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center flex-shrink-0">
                      <Building2 className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 md:mb-2">GreenTech Innovations</h3>
                      <p className="text-gray-600 text-xs sm:text-sm mb-3 md:mb-4">Clean Energy Startup</p>
                    </div>
                  </div>
                  <div className="space-y-3 md:space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 text-xs sm:text-sm">Online Lead Generation</span>
                      <span className="font-bold text-green-600 text-sm sm:text-base">+450%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 text-xs sm:text-sm">Market Expansion</span>
                      <span className="font-bold text-green-600 text-sm sm:text-base">3 Provinces</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 text-xs sm:text-sm">Series A Funding Raised</span>
                      <span className="font-bold text-green-600 text-sm sm:text-base">$8.5M</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="w-full py-12 md:py-20 lg:py-32 bg-gradient-to-br from-slate-900 to-blue-900 text-white animate-fade-in">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3 md:mb-4 text-balance">
                Why FSI Digital Stands Apart
              </h2>
              <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-blue-100 text-pretty px-2">
                Our unique combination of expertise, experience, and commitment sets us apart in the industry.
              </p>
            </div>
            <div className="grid gap-6 md:gap-8 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-6 md:space-y-8">
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-400 flex-shrink-0">
                    <Users className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold mb-1 md:mb-2">Senior-Level Expertise</h3>
                    <p className="text-blue-100 leading-relaxed text-sm sm:text-base text-pretty">
                      Our team consists exclusively of senior professionals with 15+ years of experience. No junior
                      staff, no learning on your dime - just proven expertise from day one.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-indigo-400 flex-shrink-0">
                    <BarChart3 className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold mb-1 md:mb-2">Proven Track Record</h3>
                    <p className="text-blue-100 leading-relaxed text-sm sm:text-base text-pretty">
                      500+ successful projects, $50M+ in secured funding, and a 98% client retention rate. Our results
                      speak for themselves.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-purple-400 flex-shrink-0">
                    <Award className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold mb-1 md:mb-2">Government Partnerships</h3>
                    <p className="text-blue-100 leading-relaxed text-sm sm:text-base text-pretty">
                      Direct relationships with funding agencies across Canada and the US, giving you insider access to
                      opportunities others miss.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6 md:space-y-8">
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-amber-400 flex-shrink-0">
                    <Globe className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold mb-1 md:mb-2">North American Focus</h3>
                    <p className="text-blue-100 leading-relaxed text-sm sm:text-base text-pretty">
                      Deep understanding of Canadian and US markets, regulations, and business culture. We know what
                      works in North America.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-green-400 flex-shrink-0">
                    <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold mb-1 md:mb-2">Enterprise Security</h3>
                    <p className="text-blue-100 leading-relaxed text-sm sm:text-base text-pretty">
                      Bank-level security protocols and comprehensive data protection ensure your business information
                      and operations remain completely secure.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-red-400 flex-shrink-0">
                    <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold mb-1 md:mb-2">Dedicated Support</h3>
                    <p className="text-blue-100 leading-relaxed text-sm sm:text-base text-pretty">
                      24/7 support availability and dedicated account management ensure you're never left waiting for
                      critical assistance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-20 lg:py-32 bg-gradient-to-r from-blue-600 to-indigo-600 animate-fade-in">
          <div className="container px-4 md:px-6 mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 md:mb-6 text-balance">
              Ready to Partner With Industry Leaders?
            </h2>
            <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-blue-100 mb-6 md:mb-8 text-pretty px-2">
              Join the ranks of successful entrepreneurs who chose FSI Digital as their strategic partner. Let's discuss
              your vision and create a roadmap to success.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-blue-900 hover:bg-gray-100 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold shadow-xl h-12 md:h-auto"
              asChild
            >
              <Link href="/contact#contact-form">Schedule Your Consultation</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
