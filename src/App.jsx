import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { ChevronDown, Menu, X, Phone, Mail, MapPin } from 'lucide-react'
import './App.css'

// Import pages
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Publications from './pages/Publications'
import CaseStudies from './pages/CaseStudies'
import Testimonials from './pages/Testimonials'
import Blog from './pages/Blog'
import Contact from './pages/Contact'

// Service sub-pages
import Medicine from './pages/services/Medicine'
import Longevity from './pages/services/Longevity'
import AntiAging from './pages/services/AntiAging'
import ScientificRD from './pages/services/ScientificRD'
import BusinessStrategy from './pages/services/BusinessStrategy'
import RealEstate from './pages/services/RealEstate'
import KeynoteSpeaker from './pages/services/KeynoteSpeaker'
import LifeCoaching from './pages/services/LifeCoaching'
import DueDiligence from './pages/services/DueDiligence'

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <nav className="luxury-nav fixed top-0 w-full z-50">
      <div className="luxury-container">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-light tracking-tight text-gray-900">
              Basil M Hantash
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-12">
            <Link 
              to="/" 
              className={`text-sm font-medium tracking-wide transition-colors ${
                isActive('/') ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`text-sm font-medium tracking-wide transition-colors ${
                isActive('/about') ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              About
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
                className="flex items-center text-sm font-medium tracking-wide text-gray-600 hover:text-gray-900 transition-colors"
              >
                Services
                <ChevronDown className="ml-1 h-3 w-3" />
              </button>
              
              {isServicesOpen && (
                <div 
                  className="absolute left-0 mt-4 w-80 bg-white rounded-sm luxury-shadow-xl border luxury-border z-50"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <div className="p-6">
                    <div className="text-xs font-medium tracking-wider text-gray-500 uppercase mb-4">Healthcare</div>
                    <div className="space-y-3 mb-6">
                      <Link to="/services/medicine" className="block text-sm text-gray-700 hover:text-gray-900 transition-colors">Medicine</Link>
                      <Link to="/services/longevity" className="block text-sm text-gray-700 hover:text-gray-900 transition-colors">Longevity</Link>
                      <Link to="/services/anti-aging" className="block text-sm text-gray-700 hover:text-gray-900 transition-colors">Anti-Aging</Link>
                    </div>
                    
                    <div className="text-xs font-medium tracking-wider text-gray-500 uppercase mb-4">Research & Business</div>
                    <div className="space-y-3 mb-6">
                      <Link to="/services/scientific-rd" className="block text-sm text-gray-700 hover:text-gray-900 transition-colors">Scientific R&D</Link>
                      <Link to="/services/business-strategy" className="block text-sm text-gray-700 hover:text-gray-900 transition-colors">Business Strategy</Link>
                      <Link to="/services/real-estate" className="block text-sm text-gray-700 hover:text-gray-900 transition-colors">Real Estate</Link>
                    </div>
                    
                    <div className="text-xs font-medium tracking-wider text-gray-500 uppercase mb-4">Professional Services</div>
                    <div className="space-y-3">
                      <Link to="/services/keynote-speaker" className="block text-sm text-gray-700 hover:text-gray-900 transition-colors">Speaking</Link>
                      <Link to="/services/life-coaching" className="block text-sm text-gray-700 hover:text-gray-900 transition-colors">Executive Coaching</Link>
                      <Link to="/services/due-diligence" className="block text-sm text-gray-700 hover:text-gray-900 transition-colors">Due Diligence</Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link 
              to="/publications" 
              className={`text-sm font-medium tracking-wide transition-colors ${
                isActive('/publications') ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Publications
            </Link>
            <Link 
              to="/case-studies" 
              className={`text-sm font-medium tracking-wide transition-colors ${
                isActive('/case-studies') ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Portfolio
            </Link>
            <Link 
              to="/testimonials" 
              className={`text-sm font-medium tracking-wide transition-colors ${
                isActive('/testimonials') ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Testimonials
            </Link>
            <Link 
              to="/blog" 
              className={`text-sm font-medium tracking-wide transition-colors ${
                isActive('/blog') ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Insights
            </Link>
            <Button asChild className="luxury-button luxury-button-primary">
              <Link to="/contact">
                Contact
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="py-6 space-y-6 bg-white border-t luxury-border">
              <Link to="/" className="block text-base font-medium text-gray-700 hover:text-gray-900">Home</Link>
              <Link to="/about" className="block text-base font-medium text-gray-700 hover:text-gray-900">About</Link>
              <div className="text-base font-medium text-gray-900">Services</div>
              <div className="pl-4 space-y-4">
                <Link to="/services/medicine" className="block text-sm text-gray-700 hover:text-gray-900">Medicine</Link>
                <Link to="/services/longevity" className="block text-sm text-gray-700 hover:text-gray-900">Longevity</Link>
                <Link to="/services/anti-aging" className="block text-sm text-gray-700 hover:text-gray-900">Anti-Aging</Link>
                <Link to="/services/scientific-rd" className="block text-sm text-gray-700 hover:text-gray-900">Scientific R&D</Link>
                <Link to="/services/business-strategy" className="block text-sm text-gray-700 hover:text-gray-900">Business Strategy</Link>
                <Link to="/services/real-estate" className="block text-sm text-gray-700 hover:text-gray-900">Real Estate</Link>
                <Link to="/services/keynote-speaker" className="block text-sm text-gray-700 hover:text-gray-900">Speaking</Link>
                <Link to="/services/life-coaching" className="block text-sm text-gray-700 hover:text-gray-900">Executive Coaching</Link>
                <Link to="/services/due-diligence" className="block text-sm text-gray-700 hover:text-gray-900">Due Diligence</Link>
              </div>
              <Link to="/publications" className="block text-base font-medium text-gray-700 hover:text-gray-900">Publications</Link>
              <Link to="/case-studies" className="block text-base font-medium text-gray-700 hover:text-gray-900">Portfolio</Link>
              <Link to="/testimonials" className="block text-base font-medium text-gray-700 hover:text-gray-900">Testimonials</Link>
              <Link to="/blog" className="block text-base font-medium text-gray-700 hover:text-gray-900">Insights</Link>
              <Link to="/contact" className="block text-base font-medium text-gray-700 hover:text-gray-900">Contact</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="luxury-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-light mb-6">Basil M Hantash</h3>
            <p className="text-gray-300 mb-8 max-w-md font-light leading-relaxed">
              Multidisciplinary expertise spanning medicine, science, and business. 
              Creating transformative solutions at the intersection of healthcare innovation 
              and strategic excellence.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-sm text-gray-400">
                <Phone className="h-4 w-4 mr-3" />
                <span>+1 (408) 204-8946</span>
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <Mail className="h-4 w-4 mr-3" />
                <span>contact@basilmhantash.com</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-6">Services</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link to="/services/medicine" className="hover:text-white transition-colors">Healthcare Innovation</Link></li>
              <li><Link to="/services/longevity" className="hover:text-white transition-colors">Longevity Science</Link></li>
              <li><Link to="/services/scientific-rd" className="hover:text-white transition-colors">Scientific R&D</Link></li>
              <li><Link to="/services/business-strategy" className="hover:text-white transition-colors">Strategic Consulting</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-6">Resources</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link to="/publications" className="hover:text-white transition-colors">Publications</Link></li>
              <li><Link to="/case-studies" className="hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 Dr. Basil M Hantash. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/medicine" element={<Medicine />} />
            <Route path="/services/longevity" element={<Longevity />} />
            <Route path="/services/anti-aging" element={<AntiAging />} />
            <Route path="/services/scientific-rd" element={<ScientificRD />} />
            <Route path="/services/business-strategy" element={<BusinessStrategy />} />
            <Route path="/services/real-estate" element={<RealEstate />} />
            <Route path="/services/keynote-speaker" element={<KeynoteSpeaker />} />
            <Route path="/services/life-coaching" element={<LifeCoaching />} />
            <Route path="/services/due-diligence" element={<DueDiligence />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

