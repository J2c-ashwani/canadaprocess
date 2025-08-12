import { Building2, Users, Award, TrendingUp } from 'lucide-react'

export function ClientLogos() {
  return (
    <section className="w-full py-16 bg-white border-t border-gray-100">
      <div className="container px-6 lg:px-8 mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
            Trusted by Businesses Across North America
          </p>
          <h3 className="text-2xl font-bold text-gray-900">
            Serving Startups to Fortune 500 Companies
          </h3>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-full h-16 w-16 mx-auto flex items-center justify-center">
              <Building2 className="h-8 w-8 text-white" />
            </div>
            <div className="text-2xl font-bold text-gray-900">500+</div>
            <div className="text-sm text-gray-600">Projects Completed</div>
          </div>
          
          <div className="space-y-2">
            <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-full h-16 w-16 mx-auto flex items-center justify-center">
              <Users className="h-8 w-8 text-white" />
            </div>
            <div className="text-2xl font-bold text-gray-900">98%</div>
            <div className="text-sm text-gray-600">Client Retention</div>
          </div>
          
          <div className="space-y-2">
            <div className="bg-gradient-to-br from-amber-600 to-amber-700 rounded-full h-16 w-16 mx-auto flex items-center justify-center">
              <Award className="h-8 w-8 text-white" />
            </div>
            <div className="text-2xl font-bold text-gray-900">6+</div>
            <div className="text-sm text-gray-600">Years Experience</div>
          </div>
          
          <div className="space-y-2">
            <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-full h-16 w-16 mx-auto flex items-center justify-center">
              <TrendingUp className="h-8 w-8 text-white" />
            </div>
            <div className="text-2xl font-bold text-gray-900">$50M+</div>
            <div className="text-sm text-gray-600">Revenue Generated</div>
          </div>
        </div>
      </div>
    </section>
  )
}
