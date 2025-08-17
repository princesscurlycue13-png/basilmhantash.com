import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { ArrowRight, Award, Users, BookOpen, Briefcase, ChevronRight } from 'lucide-react'
import basilHantashPhoto from '../assets/basil-hantash-photo.jpg'

function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="luxury-hero">
        <div className="luxury-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-12">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="text-sm font-medium tracking-wider text-gray-500 uppercase">
                    Multidisciplinary Excellence
                  </div>
                  <h1 className="luxury-text-5xl luxury-text-gradient">
                    Basil M Hantash
                  </h1>
                  <div className="flex items-center space-x-2 text-xl font-light text-gray-600">
                    <span>MD</span>
                    <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                    <span>PhD</span>
                    <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                    <span>MBA</span>
                  </div>
                </div>
                
                <div className="w-16 h-px bg-gradient-to-r from-gray-900 to-gray-300"></div>
                
                <p className="luxury-text-xl max-w-lg">
                  Pioneering the convergence of medicine, science, and business to create 
                  transformative solutions at the intersection of healthcare innovation 
                  and strategic excellence.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="luxury-button luxury-button-primary group">
                  <Link to="/services" className="flex items-center">
                    Explore Expertise
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="luxury-button luxury-button-secondary">
                  <Link to="/contact">
                    Schedule Consultation
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-gray-100 to-gray-50 rounded-sm transform rotate-1 opacity-30"></div>
                <img 
                  src={basilHantashPhoto} 
                  alt="Dr. Basil M Hantash" 
                  className="relative w-80 h-96 object-cover rounded-sm luxury-shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Overview */}
      <section className="luxury-section luxury-spacing">
        <div className="luxury-container">
          <div className="text-center mb-20">
            <div className="text-sm font-medium tracking-wider text-gray-500 uppercase mb-4">
              Core Competencies
            </div>
            <h2 className="luxury-text-4xl luxury-text-gradient mb-6">
              Multidisciplinary Leadership
            </h2>
            <p className="luxury-text-xl max-w-3xl mx-auto">
              Three decades of pioneering work across medicine, scientific research, 
              and business strategy, creating unprecedented value through integrated expertise.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-12 h-12 mx-auto mb-6 flex items-center justify-center">
                <Award className="h-8 w-8 text-gray-700 transition-transform group-hover:scale-110" />
              </div>
              <h3 className="luxury-text-2xl text-gray-900 mb-4">Clinical Excellence</h3>
              <p className="luxury-text-xl text-gray-600">
                Board-certified dermatologist with deep expertise in clinical practice 
                and healthcare systems optimization.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-12 h-12 mx-auto mb-6 flex items-center justify-center">
                <BookOpen className="h-8 w-8 text-gray-700 transition-transform group-hover:scale-110" />
              </div>
              <h3 className="luxury-text-2xl text-gray-900 mb-4">Scientific Innovation</h3>
              <p className="luxury-text-xl text-gray-600">
                PhD-level research in regenerative medicine, with 100+ patents 
                and breakthrough discoveries in stem cell therapeutics.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-12 h-12 mx-auto mb-6 flex items-center justify-center">
                <Briefcase className="h-8 w-8 text-gray-700 transition-transform group-hover:scale-110" />
              </div>
              <h3 className="luxury-text-2xl text-gray-900 mb-4">Strategic Vision</h3>
              <p className="luxury-text-xl text-gray-600">
                Wharton MBA driving venture capital success, with $1B+ 
                in shareholder value creation across multiple exits.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-12 h-12 mx-auto mb-6 flex items-center justify-center">
                <Users className="h-8 w-8 text-gray-700 transition-transform group-hover:scale-110" />
              </div>
              <h3 className="luxury-text-2xl text-gray-900 mb-4">Executive Leadership</h3>
              <p className="luxury-text-xl text-gray-600">
                Serial entrepreneur and C-suite executive with proven track record 
                in scaling organizations and leading transformational change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="luxury-section-alt luxury-spacing">
        <div className="luxury-container">
          <div className="text-center mb-20">
            <div className="text-sm font-medium tracking-wider text-gray-500 uppercase mb-4">
              Service Portfolio
            </div>
            <h2 className="luxury-text-4xl luxury-text-gradient mb-6">
              Comprehensive Solutions
            </h2>
            <p className="luxury-text-xl max-w-3xl mx-auto">
              Delivering specialized expertise across healthcare, technology, 
              and business domains with unparalleled depth and integration.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="luxury-card luxury-hover group">
              <div className="mb-8">
                <h3 className="luxury-text-3xl text-gray-900 mb-4">Healthcare Innovation</h3>
                <div className="w-12 h-px bg-gray-200 mb-6"></div>
                <p className="luxury-text-xl text-gray-600 mb-8">
                  Advanced medical consulting spanning clinical practice, longevity science, 
                  and anti-aging therapeutics with cutting-edge research integration.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <div className="w-1 h-1 bg-gray-400 rounded-full mr-3"></div>
                    Clinical Practice Optimization
                  </li>
                  <li className="flex items-center">
                    <div className="w-1 h-1 bg-gray-400 rounded-full mr-3"></div>
                    Longevity & Healthspan Extension
                  </li>
                  <li className="flex items-center">
                    <div className="w-1 h-1 bg-gray-400 rounded-full mr-3"></div>
                    Anti-Aging Technology Development
                  </li>
                </ul>
              </div>
              <Button asChild variant="outline" className="luxury-button luxury-button-secondary w-full group">
                <Link to="/services/medicine" className="flex items-center justify-center">
                  Explore Healthcare Services
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
            
            <div className="luxury-card luxury-hover group">
              <div className="mb-8">
                <h3 className="luxury-text-3xl text-gray-900 mb-4">Scientific R&D</h3>
                <div className="w-12 h-px bg-gray-200 mb-6"></div>
                <p className="luxury-text-xl text-gray-600 mb-8">
                  Strategic research and development guidance for breakthrough innovations, 
                  clinical trials, and intellectual property commercialization.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <div className="w-1 h-1 bg-gray-400 rounded-full mr-3"></div>
                    Clinical Trial Strategy & Execution
                  </li>
                  <li className="flex items-center">
                    <div className="w-1 h-1 bg-gray-400 rounded-full mr-3"></div>
                    Intellectual Property Development
                  </li>
                  <li className="flex items-center">
                    <div className="w-1 h-1 bg-gray-400 rounded-full mr-3"></div>
                    Regulatory Affairs & FDA Approval
                  </li>
                </ul>
              </div>
              <Button asChild variant="outline" className="luxury-button luxury-button-secondary w-full group">
                <Link to="/services/scientific-rd" className="flex items-center justify-center">
                  Explore R&D Services
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
            
            <div className="luxury-card luxury-hover group">
              <div className="mb-8">
                <h3 className="luxury-text-3xl text-gray-900 mb-4">Strategic Consulting</h3>
                <div className="w-12 h-px bg-gray-200 mb-6"></div>
                <p className="luxury-text-xl text-gray-600 mb-8">
                  Executive-level business strategy, venture capital advisory, 
                  and transformational leadership for high-growth organizations.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <div className="w-1 h-1 bg-gray-400 rounded-full mr-3"></div>
                    Venture Capital & M&A Advisory
                  </li>
                  <li className="flex items-center">
                    <div className="w-1 h-1 bg-gray-400 rounded-full mr-3"></div>
                    Corporate Strategy & Development
                  </li>
                  <li className="flex items-center">
                    <div className="w-1 h-1 bg-gray-400 rounded-full mr-3"></div>
                    Executive Leadership Coaching
                  </li>
                </ul>
              </div>
              <Button asChild variant="outline" className="luxury-button luxury-button-secondary w-full group">
                <Link to="/services/business-strategy" className="flex items-center justify-center">
                  Explore Strategy Services
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Achievement Highlights */}
      <section className="luxury-section luxury-spacing">
        <div className="luxury-container">
          <div className="text-center mb-20">
            <div className="text-sm font-medium tracking-wider text-gray-500 uppercase mb-4">
              Track Record
            </div>
            <h2 className="luxury-text-4xl luxury-text-gradient mb-6">
              Measurable Impact
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="luxury-text-4xl font-light text-gray-900 mb-2">100+</div>
              <div className="text-sm font-medium tracking-wider text-gray-500 uppercase">
                Patents Issued
              </div>
            </div>
            <div className="text-center">
              <div className="luxury-text-4xl font-light text-gray-900 mb-2">$1B+</div>
              <div className="text-sm font-medium tracking-wider text-gray-500 uppercase">
                Value Created
              </div>
            </div>
            <div className="text-center">
              <div className="luxury-text-4xl font-light text-gray-900 mb-2">165+</div>
              <div className="text-sm font-medium tracking-wider text-gray-500 uppercase">
                Publications
              </div>
            </div>
            <div className="text-center">
              <div className="luxury-text-4xl font-light text-gray-900 mb-2">30</div>
              <div className="text-sm font-medium tracking-wider text-gray-500 uppercase">
                Years Experience
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="luxury-section-alt luxury-spacing">
        <div className="luxury-container text-center">
          <div className="max-w-4xl mx-auto">
            <div className="text-sm font-medium tracking-wider text-gray-500 uppercase mb-6">
              Ready to Transform
            </div>
            <h2 className="luxury-text-4xl luxury-text-gradient mb-8">
              Elevate Your Organization's Potential
            </h2>
            <p className="luxury-text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Experience the power of multidisciplinary expertise. Schedule a confidential 
              consultation to explore how integrated medical, scientific, and business 
              acumen can accelerate your organization's success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="luxury-button luxury-button-primary">
                <Link to="/contact">
                  Schedule Consultation
                </Link>
              </Button>
              <Button asChild variant="outline" className="luxury-button luxury-button-secondary">
                <Link to="/about">
                  Discover My Journey
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

