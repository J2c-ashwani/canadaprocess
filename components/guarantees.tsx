import { CheckCircle, Shield, Clock, Award, RefreshCw, Users } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

export function Guarantees() {
  return (
    <section className="w-full py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="container px-6 lg:px-8 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-600">Ironclad Guarantees</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We stand behind our work with industry-leading guarantees that protect your investment 
            and ensure your complete satisfaction.
          </p>
        </div>
        
        <div className="grid gap-8 lg:grid-cols-3">
          <Card className="border-0 shadow-xl bg-white hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2">
            <CardContent className="p-8 text-center">
              <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-full h-20 w-20 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <CheckCircle className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">100% Satisfaction</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                If you're not completely satisfied with our work, we'll revise it until you are - 
                or provide a full refund within 30 days.
              </p>
              <div className="bg-green-50 rounded-lg p-4">
                <p className="text-sm font-semibold text-green-800">30-Day Money-Back Guarantee</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-xl bg-white hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2">
            <CardContent className="p-8 text-center">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-full h-20 w-20 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <Clock className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">On-Time Delivery</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We guarantee project delivery on or before the agreed deadline. Late delivery 
                results in automatic compensation for delays.
              </p>
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-sm font-semibold text-blue-800">Punctuality Guarantee</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-xl bg-white hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2">
            <CardContent className="p-8 text-center">
              <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-full h-20 w-20 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Lifetime Support</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Enjoy free technical support and minor updates for the lifetime of your website. 
                We're your long-term technology partner.
              </p>
              <div className="bg-purple-50 rounded-lg p-4">
                <p className="text-sm font-semibold text-purple-800">Ongoing Partnership</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
