import { ArrowRight, CheckCircle, Clock, Users, Award } from 'lucide-react'
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function GetStartedPage() {
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
                  Let's <span className="text-emerald-600">Get Started</span>
                </h1>
                <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Take the first step towards transforming your startup. Choose your path and let's begin your journey to success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Start Options */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
                  Choose Your Starting Point
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Select the option that best describes your current needs and we'll guide you through the next steps.
                </p>
              </div>
            </div>
            
            <div className="grid gap-6 lg:grid-cols-3">
              <Card className="border-2 hover:border-emerald-200 transition-colors cursor-pointer">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                    <Clock className="h-8 w-8 text-emerald-600" />
                  </div>
                  <CardTitle className="text-xl">Quick Consultation</CardTitle>
                  <CardDescription>
                    15-minute free call to discuss your immediate needs and get expert advice.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <ul className="space-y-2 text-sm text-gray-600 mb-6">
                    <li className="flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                      Free 15-minute consultation
                    </li>
                    <li className="flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                      Immediate expert advice
                    </li>
                    <li className="flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                      No commitment required
                    </li>
                  </ul>
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700" asChild>
                    <Link href="/contact#contact-form">Book Free Call</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-emerald-200 transition-colors cursor-pointer border-emerald-300 bg-emerald-50">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                    <Users className="h-8 w-8 text-emerald-600" />
                  </div>
                  <CardTitle className="text-xl">Full Strategy Session</CardTitle>
                  <CardDescription>
                    Comprehensive 60-minute session to create a detailed roadmap for your startup.
                  </CardDescription>
                  <div className="inline-block rounded-lg bg-emerald-600 px-3 py-1 text-xs text-white">
                    Most Popular
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <ul className="space-y-2 text-sm text-gray-600 mb-6">
                    <li className="flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                      60-minute strategy session
                    </li>
                    <li className="flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                      Detailed action plan
                    </li>
                    <li className="flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                      Priority recommendations
                    </li>
                  </ul>
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700" asChild>
                    <Link href="/contact#contact-form">Schedule Session</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-emerald-200 transition-colors cursor-pointer">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                    <Award className="h-8 w-8 text-emerald-600" />
                  </div>
                  <CardTitle className="text-xl">Grant Assessment</CardTitle>
                  <CardDescription>
                    Specialized consultation focused on identifying and securing government funding.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <ul className="space-y-2 text-sm text-gray-600 mb-6">
                    <li className="flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                      Grant eligibility assessment
                    </li>
                    <li className="flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                      Funding opportunity analysis
                    </li>
                    <li className="flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                      Application strategy
                    </li>
                  </ul>
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700" asChild>
                    <Link href="/contact#contact-form">Get Assessment</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter text-gray-900">Ready to Begin?</h2>
                  <p className="text-gray-600 md:text-xl">
                    Fill out this form to get started immediately. We'll review your information and 
                    contact you within 24 hours to schedule your consultation.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                    <span className="text-gray-600">Response within 24 hours</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                    <span className="text-gray-600">No obligation consultation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                    <span className="text-gray-600">Customized recommendations</span>
                  </div>
                </div>
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle>Start Your Project</CardTitle>
                  <CardDescription>
                    Tell us about your startup and goals so we can provide the best recommendations.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="first-name" className="text-sm font-medium">
                        First name *
                      </label>
                      <Input id="first-name" placeholder="John" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="last-name" className="text-sm font-medium">
                        Last name *
                      </label>
                      <Input id="last-name" placeholder="Doe" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email *
                    </label>
                    <Input id="email" placeholder="john@startup.com" type="email" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium">
                      Company Name *
                    </label>
                    <Input id="company" placeholder="Your Startup Name" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="stage" className="text-sm font-medium">
                      Startup Stage *
                    </label>
                    <select 
                      id="stage" 
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      required
                    >
                      <option value="">Select your stage</option>
                      <option value="idea">Idea Stage</option>
                      <option value="mvp">MVP Development</option>
                      <option value="early">Early Stage (Pre-Revenue)</option>
                      <option value="growth">Growth Stage (Revenue)</option>
                      <option value="scale">Scaling Stage</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="priority" className="text-sm font-medium">
                      Primary Need *
                    </label>
                    <select 
                      id="priority" 
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      required
                    >
                      <option value="">Select primary need</option>
                      <option value="website">Website Development</option>
                      <option value="marketing">Digital Marketing & SEO</option>
                      <option value="grants">Government Grant Assistance</option>
                      <option value="consulting">Business Strategy Consulting</option>
                      <option value="multiple">Multiple Services</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="timeline" className="text-sm font-medium">
                      Desired Timeline
                    </label>
                    <select 
                      id="timeline" 
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP (Rush)</option>
                      <option value="1month">Within 1 month</option>
                      <option value="3months">Within 3 months</option>
                      <option value="6months">Within 6 months</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="goals" className="text-sm font-medium">
                      Project Goals *
                    </label>
                    <textarea
                      className="min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      id="goals"
                      placeholder="Describe your main goals, challenges, and what success looks like for your startup..."
                      required
                    />
                  </div>
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                    Start My Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <p className="text-xs text-gray-500 text-center">
                    By submitting this form, you agree to our privacy policy. We'll contact you within 24 hours.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* What Happens Next Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
                  What Happens Next?
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Here's what you can expect after submitting your information.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-600 text-white font-bold text-xl">
                  1
                </div>
                <h3 className="text-xl font-semibold">We Review Your Submission</h3>
                <p className="text-gray-600">
                  Our team analyzes your information and prepares customized recommendations 
                  based on your specific needs and goals.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-600 text-white font-bold text-xl">
                  2
                </div>
                <h3 className="text-xl font-semibold">Initial Consultation Call</h3>
                <p className="text-gray-600">
                  We schedule a consultation call to discuss your project in detail, 
                  answer questions, and provide expert guidance.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-600 text-white font-bold text-xl">
                  3
                </div>
                <h3 className="text-xl font-semibold">Custom Proposal</h3>
                <p className="text-gray-600">
                  Receive a detailed proposal with timeline, deliverables, and pricing 
                  tailored specifically to your startup's requirements.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
