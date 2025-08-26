import type { Metadata } from "next"
import BlogPostClient from "./BlogPostClient"

interface BlogPostPageProps {
  params: {
    id: string
  }
}

const blogPosts = {
  "1": {
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
  },
  "2": {
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
  },
  "3": {
    id: 3,
    title: "NIH Grants for Healthcare Startups: Your Path to Medical Innovation Funding",
    excerpt: "Explore National Institutes of Health funding opportunities for biotech and healthcare startups.",
    category: "Grant Funding",
    categoryColor: "bg-green-100 text-green-800",
    author: "Dr. Emily Rodriguez",
    date: "December 10, 2024",
    readTime: "11 min read",
    image: "/nih-grants-healthcare-startups.png",
  },
  "4": {
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
  },
  "5": {
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
  },
  "6": {
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
  },
  "7": {
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
  },
  "8": {
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
  },
  "9": {
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
  },
  "10": {
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
  },
  "11": {
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
  },
  "12": {
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
  },
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts[params.id as keyof typeof blogPosts]

  if (!post) {
    return {
      title: "Blog Post Not Found",
    }
  }

  return {
    title: `${post.title} | FSI Digital Blog`,
    description: post.excerpt,
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  return <BlogPostClient params={params} />
}
