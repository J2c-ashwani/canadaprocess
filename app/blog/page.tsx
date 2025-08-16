"use client"

import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const CalendarIcon = () => (
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
)

const UserIcon = () => (
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>
)

const ClockIcon = () => (
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
)

const ArrowRightIcon = () => (
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
)

// Top Priority Grant Programs
const topGrantPrograms = [
  {
    name: "CDAP - Canada Digital Adoption Program",
    flag: "/flags/ca.png",
    amount: "Up to $100K",
    description: "Digital transformation funding for Canadian SMEs",
    color: "bg-red-100 text-red-800 border-red-200",
  },
  {
    name: "IRAP - Industrial Research Program",
    flag: "/flags/ca.png",
    amount: "Up to $1M",
    description: "R&D funding and advisory services for Canadian tech companies",
    color: "bg-blue-100 text-blue-800 border-blue-200",
  },
  {
    name: "SBIR - Small Business Innovation",
    flag: "/flags/us.png",
    amount: "Up to $1.7M",
    description: "Federal R&D funding for US small businesses",
    color: "bg-green-100 text-green-800 border-green-200",
  },
  {
    name: "SR&ED Tax Credits",
    flag: "💰",
    amount: "35% Return",
    description: "R&D tax incentives for Canadian companies",
    color: "bg-purple-100 text-purple-800 border-purple-200",
  },
  {
    name: "Venture Capital Assistance",
    flag: "💼",
    amount: "Varies",
    description: "Government-backed VC programs and co-investment funds",
    color: "bg-orange-100 text-orange-800 border-orange-200",
  },
  {
    name: "SEED Funds & Provincial Grants",
    flag: "/flags/ca.png",
    amount: "Up to $500K",
    description: "Early-stage funding from provincial governments",
    color: "bg-teal-100 text-teal-800 border-teal-200",
  },
  {
    name: "First Fund - Early-Stage Funding",
    flag: "🚀",
    amount: "Up to $250K",
    description: "First-time entrepreneur support programs",
    color: "bg-indigo-100 text-indigo-800 border-indigo-200",
  },
]

const blogPosts = [
  // New Priority Grant Posts
  {
    id: 13,
    title: "CDAP - Canada Digital Adoption Program: Complete Guide for SMEs",
    excerpt:
      "Discover how the Canada Digital Adoption Program (CDAP) provides up to $100,000 in funding to help Canadian small and medium enterprises adopt digital technologies and boost productivity.",
    category: "Grant Funding",
    categoryColor: "bg-red-100 text-red-800",
    author: "Jennifer Walsh",
    date: "December 18, 2024",
    readTime: "10 min read",
    image: "/cdap-digital-adoption-program.png",
    featured: true,
  },
  {
    id: 14,
    title: "Venture Capital Assistance Programs: Government-Backed Investment Guide",
    excerpt:
      "Explore government venture capital assistance programs, co-investment funds, and public-private partnerships that help startups access growth capital with favorable terms.",
    category: "Grant Funding",
    categoryColor: "bg-orange-100 text-orange-800",
    author: "Michael Torres",
    date: "December 17, 2024",
    readTime: "11 min read",
    image: "/venture-capital-assistance.png",
    featured: false,
  },
  {
    id: 15,
    title: "SEED Funds & Provincial Grants: Regional Startup Funding Opportunities",
    excerpt:
      "Navigate the landscape of provincial SEED funds and regional grants across Canada. Learn how to access up to $500K in early-stage funding from provincial governments.",
    category: "Grant Funding",
    categoryColor: "bg-teal-100 text-teal-800",
    author: "Sarah Kim",
    date: "December 16, 2024",
    readTime: "9 min read",
    image: "/seed-funds-provincial-grants.png",
    featured: false,
  },
  {
    id: 16,
    title: "First Fund Programs: Early-Stage Funding for New Entrepreneurs",
    excerpt:
      "Discover First Fund programs designed specifically for first-time entrepreneurs. Access up to $250K in funding, mentorship, and resources to launch your startup successfully.",
    category: "Grant Funding",
    categoryColor: "bg-indigo-100 text-indigo-800",
    author: "David Chen",
    date: "December 15, 2024",
    readTime: "8 min read",
    image: "/first-fund-early-stage.png",
    featured: false,
  },
  // Existing Posts
  {
    id: 1,
    title: "SBIR Grants: The Ultimate Guide for Tech Startups in 2024",
    excerpt:
      "Discover how Small Business Innovation Research (SBIR) grants can provide up to $1.7M in non-dilutive funding for your tech startup.",
    category: "Grant Funding",
    categoryColor: "bg-green-100 text-green-800",
    author: "Sarah Johnson",
    date: "December 15, 2024",
    readTime: "12 min read",
    image: "/sbir-grants-guide.png",
    featured: false,
  },
  {
    id: 2,
    title: "STTR Grants: Unlocking University Partnerships for Innovation",
    excerpt:
      "Learn how Small Business Technology Transfer (STTR) grants can fund your startup's collaboration with universities and research institutions.",
    category: "Grant Funding",
    categoryColor: "bg-green-100 text-green-800",
    author: "Dr. Michael Chen",
    date: "December 12, 2024",
    readTime: "10 min read",
    image: "/sttr-grants-university-partnerships.png",
    featured: false,
  },
  {
    id: 3,
    title: "NIH Grants for Healthcare Startups: Your Path to Medical Innovation Funding",
    excerpt: "Explore National Institutes of Health funding opportunities for biotech and healthcare startups.",
    category: "Grant Funding",
    categoryColor: "bg-green-100 text-green-800",
    author: "Dr. Emily Rodriguez",
    date: "December 10, 2024",
    readTime: "11 min read",
    image: "/nih-grants-healthcare-startups.png",
    featured: false,
  },
  {
    id: 4,
    title: "NSF Grants: Fueling Scientific and Engineering Breakthroughs",
    excerpt:
      "National Science Foundation grants offer substantial funding for startups in STEM fields. Learn about NSF SBIR/STTR programs, eligibility criteria, and how to craft winning proposals.",
    category: "Grant Funding",
    categoryColor: "bg-green-100 text-green-800",
    author: "Dr. David Thompson",
    date: "December 8, 2024",
    readTime: "9 min read",
    image: "/nsf-grants-stem-startups.png",
    featured: false,
  },
  {
    id: 5,
    title: "DOE Grants: Clean Energy and Climate Tech Funding Opportunities",
    excerpt:
      "Department of Energy grants are transforming the clean tech landscape. Discover SBIR opportunities, ARPA-E funding, and other DOE programs supporting energy innovation startups.",
    category: "Grant Funding",
    categoryColor: "bg-green-100 text-green-800",
    author: "Lisa Wang",
    date: "December 5, 2024",
    readTime: "10 min read",
    image: "/doe-grants-clean-energy.png",
    featured: false,
  },
  {
    id: 6,
    title: "Canadian SR&ED Tax Credits: Maximize Your R&D Investment Returns",
    excerpt:
      "Scientific Research and Experimental Development (SR&ED) tax credits can return up to 35% of your R&D expenses.",
    category: "Grant Funding",
    categoryColor: "bg-green-100 text-green-800",
    author: "James Miller",
    date: "December 3, 2024",
    readTime: "8 min read",
    image: "/sred-tax-credits-canada.png",
    featured: false,
  },
  {
    id: 7,
    title: "IRAP Funding: Canada's Premier Startup Support Program",
    excerpt:
      "Industrial Research Assistance Program (IRAP) provides funding and advisory services to Canadian tech startups. Discover how to access up to $1M in non-repayable contributions.",
    category: "Grant Funding",
    categoryColor: "bg-green-100 text-green-800",
    author: "Dr. Amanda Foster",
    date: "November 30, 2024",
    readTime: "9 min read",
    image: "/irap-funding-canadian-startups.png",
    featured: false,
  },
  {
    id: 8,
    title: "State and Provincial Grant Programs: Local Funding Opportunities",
    excerpt:
      "Beyond federal programs, state and provincial governments offer substantial funding for startups. Explore regional grant opportunities and how to stack multiple funding sources.",
    category: "Grant Funding",
    categoryColor: "bg-green-100 text-green-800",
    author: "Alex Kumar",
    date: "November 28, 2024",
    readTime: "7 min read",
    image: "/state-provincial-grants.png",
    featured: false,
  },
  {
    id: 9,
    title: "USDA Grants: Agricultural Innovation and Rural Development Funding",
    excerpt:
      "United States Department of Agriculture offers SBIR grants and rural development funding for agtech startups. Learn about NIFA programs and rural business opportunities.",
    category: "Grant Funding",
    categoryColor: "bg-green-100 text-green-800",
    author: "Maria Gonzalez",
    date: "November 25, 2024",
    readTime: "8 min read",
    image: "/usda-grants-agtech.png",
    featured: false,
  },
  {
    id: 10,
    title: "EPA Grants: Environmental Technology and Sustainability Funding",
    excerpt:
      "Environmental Protection Agency grants support cleantech and environmental innovation. Discover SBIR opportunities and specialized programs for sustainability-focused startups.",
    category: "Grant Funding",
    categoryColor: "bg-green-100 text-green-800",
    author: "Robert Chen",
    date: "November 22, 2024",
    readTime: "9 min read",
    image: "/epa-grants-environmental-tech.png",
    featured: false,
  },
  {
    id: 11,
    title: "NASA Grants: Space Technology and Aerospace Innovation Funding",
    excerpt:
      "NASA SBIR/STTR programs fund space technology development and aerospace innovations. Learn how to access funding for dual-use technologies and space commercialization.",
    category: "Grant Funding",
    categoryColor: "bg-green-100 text-green-800",
    author: "Dr. Jennifer Park",
    date: "November 20, 2024",
    readTime: "10 min read",
    image: "/nasa-grants-space-tech.png",
    featured: false,
  },
  {
    id: 12,
    title: "DHS Grants: Homeland Security and Cybersecurity Funding",
    excerpt:
      "Department of Homeland Security offers SBIR grants for cybersecurity, border security, and critical infrastructure protection. Explore funding for security technology startups.",
    category: "Grant Funding",
    categoryColor: "bg-green-100 text-green-800",
    author: "Thomas Anderson",
    date: "November 18, 2024",
    readTime: "8 min read",
    image: "/dhs-grants-cybersecurity.png",
    featured: false,
  },
]

export default function BlogPage() {
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
          {/* Hero Section */}
          <section className="pt-32 pb-16">
            <div className="container mx-auto px-6 lg:px-8">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-8">
                  Government Grant Insights
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6">
                  Grant Funding <span className="text-green-600">Blog</span>
                </h1>
                <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                  Expert insights on government grants, funding opportunities, and strategies to secure non-dilutive
                  funding for your startup. Stay updated with the latest in SBIR, STTR, and other federal funding
                  programs.
                </p>
              </div>
            </div>
          </section>

          {/* Top Priority Grant Programs */}
          <section className="pb-16">
            <div className="container mx-auto px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">🏆 Top Priority Grant Programs</h2>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  The most valuable funding opportunities for American and Canadian startups right now
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {topGrantPrograms.map((program, index) => (
                  <div
                    key={index}
                    className={`${program.color} border-2 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      {typeof program.flag === 'string' && program.flag.startsWith('/') ? (
                        <Image src={program.flag} alt={`${program.name} flag`} width={32} height={20} className="rounded-sm" />
                      ) : (
                        <span className="text-2xl">{program.flag}</span>
                      )}
                      <span className="text-sm font-bold bg-white/50 px-2 py-1 rounded-full">{program.amount}</span>
                    </div>
                    <h3 className="font-bold text-lg mb-2 leading-tight">{program.name}</h3>
                    <p className="text-sm opacity-80 leading-relaxed">{program.description}</p>
                  </div>
                ))}
              </div>

              <div className="text-center mt-8">
                <Link
                  href="/get-started"
                  onClick={handleLinkClick}
                  className="inline-flex items-center space-x-2 bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  <span>Get Free Grant Assessment</span>
                  <ArrowRightIcon />
                </Link>
              </div>
            </div>
          </section>

          {/* Featured Post */}
          {featuredPost && (
            <section className="pb-16">
              <div className="container mx-auto px-6 lg:px-8">
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-green-100">
                  <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                    <div className="relative h-64 lg:h-full">
                      <img
                        src={featuredPost.image || `/placeholder.svg?height=400&width=600&query=${featuredPost.title}`}
                        alt={featuredPost.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                          ⭐ Featured Guide
                        </span>
                      </div>
                      <div className="absolute bottom-4 right-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-600 text-white">
                          Up to $100K Available
                        </span>
                      </div>
                    </div>
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <div className="flex items-center space-x-4 mb-4">
                        <span
                          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${featuredPost.categoryColor}`}
                        >
                          {featuredPost.category}
                        </span>
                      </div>
                      <h2 className="text-3xl font-bold text-slate-900 mb-4 leading-tight">{featuredPost.title}</h2>
                      <p className="text-slate-600 text-lg mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-slate-500">
                          <div className="flex items-center space-x-1">
                            <UserIcon />
                            <span>{featuredPost.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <CalendarIcon />
                            <span>{featuredPost.date}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <ClockIcon />
                            <span>{featuredPost.readTime}</span>
                          </div>
                        </div>
                        <Link
                          href={`/blog/${featuredPost.id}`}
                          onClick={handleLinkClick}
                          className="inline-flex items-center space-x-2 text-green-600 font-semibold hover:text-green-700 transition-colors"
                        >
                          <span>Read Complete Guide</span>
                          <ArrowRightIcon />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Blog Posts Grid */}
          <section className="pb-20">
            <div className="container mx-auto px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Latest Grant Funding Guides</h2>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  Comprehensive guides to help you navigate the complex world of government funding
                </p>
              </div>

              <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
                {regularPosts.map((post) => (
                  <article
                    key={post.id}
                    className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image || `/placeholder.svg?height=200&width=400&query=${post.title}`}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <span
                          className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${post.categoryColor}`}
                        >
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h2 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 leading-tight">{post.title}</h2>
                      <p className="text-slate-600 mb-4 line-clamp-3 leading-relaxed">{post.excerpt}</p>

                      <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <UserIcon />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <CalendarIcon />
                            <span>{post.date}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1">
                          <ClockIcon />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      <Link
                        href={`/blog/${post.id}`}
                        onClick={handleLinkClick}
                        className="inline-flex items-center space-x-2 text-green-600 hover:text-green-700 font-medium group"
                      >
                        <span>Read More</span>
                        <ArrowRightIcon className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
            <div className="container mx-auto px-6 lg:px-8 text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Apply for Government Grants?</h2>
              <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
                Get expert help with your grant applications and maximize your chances of securing funding.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <Link
                  href="/get-started"
                  onClick={handleLinkClick}
                  className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors"
                >
                  Get Free Grant Assessment
                </Link>
                <Link
                  href="/contact"
                  onClick={handleLinkClick}
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
