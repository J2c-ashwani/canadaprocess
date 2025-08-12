import { Award, Users, Globe, TrendingUp } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

export function TeamExpertise() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="container px-6 lg:px-8 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Meet Our <span className="text-blue-600">Expert Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our senior-level professionals bring decades of combined experience from leading 
            technology companies and successful startups.
          </p>
        </div>
        
        <div className="grid gap-8 lg:grid-cols-4 mb-16">
          <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-full h-20 w-20 mx-auto mb-6 flex items-center justify-center">
                <span className="text-white font-bold text-2xl">15+</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Years Experience</h3>
              <p className="text-gray-600">Average team experience in web development and digital marketing</p>
            </CardContent>
          </Card>
          
          <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8">
              <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-full h-20 w-20 mx-auto mb-6 flex items-center justify-center">
                <Award className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Certified Experts</h3>
              <p className="text-gray-600">Google, AWS, and industry certifications across our team</p>
            </CardContent>
          </Card>
          
          <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8">
              <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-full h-20 w-20 mx-auto mb-6 flex items-center justify-center">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Senior Level Only</h3>
              <p className="text-gray-600">No junior developers - only experienced professionals work on your project</p>
            </CardContent>
          </Card>
          
          <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8">
              <div className="bg-gradient-to-br from-amber-600 to-amber-700 rounded-full h-20 w-20 mx-auto mb-6 flex items-center justify-center">
                <Globe className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Global Experience</h3>
              <p className="text-gray-600">Worked with Fortune 500 companies and successful startups worldwide</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Senior-Level Professionals Only
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our team consists exclusively of experienced professionals with proven track records 
            in enterprise-level projects and startup success stories.
          </p>
        </div>
      </div>
    </section>
  )
}
