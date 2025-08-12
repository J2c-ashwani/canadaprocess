import { Building2, Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-slate-600 to-slate-500 p-2 rounded-xl">
                <Building2 className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold">StartupBoost</span>
                <div className="text-xs text-slate-400 font-medium -mt-1">Business Solutions</div>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed max-w-sm">
              Empowering startups across Canada & North America with comprehensive digital solutions and strategic guidance.
            </p>
            <div className="flex space-x-4">
              <div className="bg-slate-800 p-3 rounded-lg hover:bg-slate-700 transition-colors cursor-pointer">
                <Linkedin className="h-5 w-5 text-slate-300" />
              </div>
              <div className="bg-slate-800 p-3 rounded-lg hover:bg-slate-700 transition-colors cursor-pointer">
                <Twitter className="h-5 w-5 text-slate-300" />
              </div>
              <div className="bg-slate-800 p-3 rounded-lg hover:bg-slate-700 transition-colors cursor-pointer">
                <Facebook className="h-5 w-5 text-slate-300" />
              </div>
              <div className="bg-slate-800 p-3 rounded-lg hover:bg-slate-700 transition-colors cursor-pointer">
                <Instagram className="h-5 w-5 text-slate-300" />
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-6">Services</h3>
            <ul className="space-y-4 text-slate-300">
              <li><Link href="/services" className="hover:text-white transition-colors">Website Development</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Digital Marketing & SEO</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Government Grant Assistance</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Business Consulting</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Strategic Planning</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-6">Company</h3>
            <ul className="space-y-4 text-slate-300">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Case Studies</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-6">Contact Info</h3>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-slate-400" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-slate-400" />
                <span>hello@startupboost.ca</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-slate-400 mt-0.5" />
                <div>
                  <div>Toronto, ON</div>
                  <div>Vancouver, BC</div>
                  <div>Montreal, QC</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © 2024 StartupBoost. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-slate-400 mt-4 sm:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
