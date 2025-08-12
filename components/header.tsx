'use client'

import { Building2, Menu, X } from 'lucide-react'
import Link from "next/link"
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

import { Button } from "@/components/ui/button"

export function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Smooth scroll to top when navigating
  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <header className="px-6 lg:px-8 h-16 flex items-center bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
      <Link className="flex items-center justify-center" href="/" onClick={handleNavClick}>
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-to-br from-slate-800 to-slate-600 p-2 rounded-xl">
            <Building2 className="h-6 w-6 text-white" />
          </div>
          <div>
            <span className="text-xl font-bold text-slate-900">StartupBoost</span>
            <div className="text-xs text-slate-500 font-medium -mt-1">Business Solutions</div>
          </div>
        </div>
      </Link>
      
      {/* Desktop Navigation */}
      <nav className="hidden md:flex ml-auto items-center gap-8">
        <Link 
          className={`text-sm font-medium transition-colors hover:text-slate-900 ${
            pathname === '/' ? 'text-slate-900 font-semibold' : 'text-slate-600'
          }`} 
          href="/"
          onClick={handleNavClick}
        >
          Home
        </Link>
        <Link 
          className={`text-sm font-medium transition-colors hover:text-slate-900 ${
            pathname === '/about' ? 'text-slate-900 font-semibold' : 'text-slate-600'
          }`} 
          href="/about"
          onClick={handleNavClick}
        >
          About
        </Link>
        <Link 
          className={`text-sm font-medium transition-colors hover:text-slate-900 ${
            pathname === '/services' ? 'text-slate-900 font-semibold' : 'text-slate-600'
          }`} 
          href="/services"
          onClick={handleNavClick}
        >
          Services
        </Link>
        <Link 
          className={`text-sm font-medium transition-colors hover:text-slate-900 ${
            pathname === '/contact' ? 'text-slate-900 font-semibold' : 'text-slate-600'
          }`} 
          href="/contact"
          onClick={handleNavClick}
        >
          Contact
        </Link>
      </nav>
      
      <Button className="hidden md:flex ml-6 bg-slate-900 hover:bg-slate-800 text-white px-6 py-2 font-medium" asChild>
        <Link href="/contact#contact-form" onClick={handleNavClick}>Get Started</Link>
      </Button>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden ml-auto p-2"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white border-b border-gray-100 md:hidden">
          <nav className="flex flex-col p-4 space-y-4">
            <Link href="/" className="text-slate-600 hover:text-slate-900 font-medium" onClick={handleNavClick}>Home</Link>
            <Link href="/about" className="text-slate-600 hover:text-slate-900 font-medium" onClick={handleNavClick}>About</Link>
            <Link href="/services" className="text-slate-600 hover:text-slate-900 font-medium" onClick={handleNavClick}>Services</Link>
            <Link href="/contact" className="text-slate-600 hover:text-slate-900 font-medium" onClick={handleNavClick}>Contact</Link>
            <Button className="bg-slate-900 hover:bg-slate-800 text-white mt-4" asChild>
              <Link href="/contact#contact-form" onClick={handleNavClick}>Get Started</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
