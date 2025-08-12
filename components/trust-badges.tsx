import { Shield, Award, Users, Clock, CheckCircle, Star, Globe, Lock } from 'lucide-react'

export function TrustBadges() {
  return (
    <section className="w-full py-16 bg-gradient-to-r from-slate-50 to-gray-50">
      <div className="container px-6 lg:px-8 mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Industry-Leading Standards & Certifications
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We maintain the highest standards of quality, security, and professionalism 
            recognized by leading industry organizations.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center group">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-full h-16 w-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">ISO 27001</h4>
              <p className="text-sm text-gray-600">Information Security Management</p>
            </div>
          </div>
          
          <div className="text-center group">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
              <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-full h-16 w-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Google Partner</h4>
              <p className="text-sm text-gray-600">Certified Digital Marketing</p>
            </div>
          </div>
          
          <div className="text-center group">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
              <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-full h-16 w-16 mx-auto mb-4 flex items-center justify-center">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Clutch Top 1%</h4>
              <p className="text-sm text-gray-600">Web Development Agency</p>
            </div>
          </div>
          
          <div className="text-center group">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
              <div className="bg-gradient-to-br from-amber-600 to-amber-700 rounded-full h-16 w-16 mx-auto mb-4 flex items-center justify-center">
                <Lock className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">SOC 2 Type II</h4>
              <p className="text-sm text-gray-600">Security & Compliance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
