import { Code, Database, Cloud, Shield, Zap, Globe } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function TechnologyStack() {
  return (
    <section className="w-full py-20 bg-gray-900 text-white">
      <div className="container px-6 lg:px-8 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Built with <span className="text-blue-400">Enterprise-Grade</span> Technology
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We use cutting-edge technologies and industry best practices to ensure your website 
            is fast, secure, and scalable.
          </p>
        </div>
        
        <div className="grid gap-8 lg:grid-cols-3">
          <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-all duration-300">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="bg-blue-600 rounded-lg p-3">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white">Frontend Excellence</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">React/Next.js</span>
                  <span className="text-blue-400 text-sm">Latest</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">TypeScript</span>
                  <span className="text-blue-400 text-sm">Type-Safe</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Tailwind CSS</span>
                  <span className="text-blue-400 text-sm">Responsive</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-all duration-300">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="bg-green-600 rounded-lg p-3">
                  <Database className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white">Backend Power</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Node.js/Python</span>
                  <span className="text-green-400 text-sm">Scalable</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">PostgreSQL/MongoDB</span>
                  <span className="text-green-400 text-sm">Reliable</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Redis Cache</span>
                  <span className="text-green-400 text-sm">Fast</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-all duration-300">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="bg-purple-600 rounded-lg p-3">
                  <Cloud className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white">Cloud Infrastructure</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">AWS/Vercel</span>
                  <span className="text-purple-400 text-sm">Global CDN</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">SSL Encryption</span>
                  <span className="text-purple-400 text-sm">Secure</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Auto Scaling</span>
                  <span className="text-purple-400 text-sm">99.9% Uptime</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
