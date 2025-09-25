'use client'

import { useState, useEffect } from 'react'
import { X, Mail, Phone, User, Building, MessageSquare, Send } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export function PopupContactForm() {
  const [isVisible, setIsVisible] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  })

  useEffect(() => {
    // Check if user has already submitted or dismissed the popup
    const hasSubmitted = localStorage.getItem('popup-form-submitted')
    const lastDismissed = localStorage.getItem('popup-form-dismissed')
    
    if (hasSubmitted) return

    // Show popup after 30 seconds initially
    const initialTimer = setTimeout(() => {
      if (!hasSubmitted && (!lastDismissed || Date.now() - parseInt(lastDismissed) > 180000)) {
        setIsVisible(true)
      }
    }, 30000)

    // Show popup every 3 minutes if not submitted and not recently dismissed
    const recurringTimer = setInterval(() => {
      if (!hasSubmitted && (!lastDismissed || Date.now() - parseInt(lastDismissed) > 180000)) {
        setIsVisible(true)
      }
    }, 180000) // 3 minutes

    return () => {
      clearTimeout(initialTimer)
      clearInterval(recurringTimer)
    }
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      console.log('Submitting popup form:', formData)
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          source: 'Popup Contact Form'
        }),
      })

      const result = await response.json()
      console.log('API response:', result)

      if (response.ok && result.success) {
        setSubmitStatus('success')
        localStorage.setItem('popup-form-submitted', 'true')
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          budget: '',
          message: ''
        })
        // Auto-close after 3 seconds on success
        setTimeout(() => {
          setIsVisible(false)
        }, 3000)
      } else {
        setSubmitStatus('error')
        setErrorMessage(result.error || result.details || 'Failed to send enquiry')
        console.error('Form submission failed:', result)
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
      setErrorMessage('Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const closePopup = () => {
    setIsVisible(false)
    setSubmitStatus('idle')
    setErrorMessage('')
    // Store dismissal time to prevent showing again for 3 minutes
    localStorage.setItem('popup-form-dismissed', Date.now().toString())
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
      <Card className="w-full max-w-lg bg-white shadow-2xl border-0 relative animate-slideInUp max-h-[90vh] overflow-y-auto">
        <button
          onClick={closePopup}
          className="absolute top-3 right-3 p-2 hover:bg-gray-100 rounded-full transition-colors z-10 bg-white/80 backdrop-blur-sm"
          aria-label="Close popup"
        >
          <X className="h-4 w-4 text-gray-600" />
        </button>

        <CardHeader className="text-center pb-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-t-lg">
          <div className="bg-white/20 rounded-full h-12 w-12 mx-auto mb-3 flex items-center justify-center">
            <Mail className="h-6 w-6 text-white" />
          </div>
          <CardTitle className="text-xl font-bold">Get Your Free Quote!</CardTitle>
          <CardDescription className="text-emerald-100 text-sm">
            Ready to transform your business? Let's discuss your project!
          </CardDescription>
        </CardHeader>

        <CardContent className="p-4">
          {submitStatus === 'success' ? (
            <div className="text-center py-6">
              <div className="bg-green-100 rounded-full h-12 w-12 mx-auto mb-3 flex items-center justify-center">
                <Send className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-green-600 mb-2">Thank You!</h3>
              <p className="text-gray-600 text-sm">
                Your enquiry has been sent successfully. We'll get back to you within 24 hours!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-2 gap-2">
                <div className="space-y-1">
                  <label htmlFor="popup-firstName" className="text-xs font-medium text-gray-700">
                    First Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-2 top-1/2 transform -translate-y-1/2 h-3 w-3 text-gray-400" />
                    <Input
                      id="popup-firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="John"
                      className="pl-7 h-8 text-sm"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <label htmlFor="popup-lastName" className="text-xs font-medium text-gray-700">
                    Last Name *
                  </label>
                  <Input
                    id="popup-lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Doe"
                    className="h-8 text-sm"
                    required
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="popup-email" className="text-xs font-medium text-gray-700">
                  Email *
                </label>
                <div className="relative">
                  <Mail className="absolute left-2 top-1/2 transform -translate-y-1/2 h-3 w-3 text-gray-400" />
                  <Input
                    id="popup-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@company.com"
                    className="pl-7 h-8 text-sm"
                    required
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="popup-phone" className="text-xs font-medium text-gray-700">
                  Phone
                </label>
                <div className="relative">
                  <Phone className="absolute left-2 top-1/2 transform -translate-y-1/2 h-3 w-3 text-gray-400" />
                  <Input
                    id="popup-phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1 (909) 404-8938"
                    className="pl-7 h-8 text-sm"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="popup-company" className="text-xs font-medium text-gray-700">
                  Company
                </label>
                <div className="relative">
                  <Building className="absolute left-2 top-1/2 transform -translate-y-1/2 h-3 w-3 text-gray-400" />
                  <Input
                    id="popup-company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your Company"
                    className="pl-7 h-8 text-sm"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="popup-service" className="text-xs font-medium text-gray-700">
                  Service Interest
                </label>
                <select
                  id="popup-service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-input bg-background px-2 py-1 h-8 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <option value="">Select a service</option>
                  <option value="website-development">Website Development</option>
                  <option value="website-redesign">Website Redesign</option>
                  <option value="ecommerce">E-commerce Development</option>
                  <option value="seo-marketing">SEO & Digital Marketing</option>
                  <option value="maintenance">Website Maintenance</option>
                  <option value="grants">Government Grant Assistance</option>
                  <option value="multiple">Multiple Services</option>
                </select>
              </div>

              <div className="space-y-1">
                <label htmlFor="popup-budget" className="text-xs font-medium text-gray-700">
                  Project Budget
                </label>
                <select
                  id="popup-budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-input bg-background px-2 py-1 h-8 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <option value="">Select budget range</option>
                  <option value="under-5k">Under $5,000</option>
                  <option value="5k-15k">$5,000 - $15,000</option>
                  <option value="15k-50k">$15,000 - $50,000</option>
                  <option value="50k-plus">$50,000+</option>
                </select>
              </div>

              <div className="space-y-1">
                <label htmlFor="popup-message" className="text-xs font-medium text-gray-700">
                  Message *
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-2 top-2 h-3 w-3 text-gray-400" />
                  <textarea
                    id="popup-message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project goals and requirements..."
                    className="min-h-[60px] w-full rounded-md border border-input bg-background px-2 py-1 pl-7 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    required
                  />
                </div>
              </div>

              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-md p-2">
                  <p className="text-xs text-red-600">
                    {errorMessage || 'Failed to send enquiry. Please try again or contact us directly.'}
                  </p>
                </div>
              )}

              <div className="flex gap-2 pt-2">
                <Button
                  type="button"
                  onClick={closePopup}
                  variant="outline"
                  className="flex-1 h-8 text-sm"
                >
                  Maybe Later
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white h-8 text-sm"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-white mr-1"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Get Quote
                      <Send className="ml-1 h-3 w-3" />
                    </>
                  )}
                </Button>
              </div>

              <p className="text-xs text-gray-500 text-center pt-1">
                We'll respond within 24 hours. No spam, guaranteed.
              </p>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
