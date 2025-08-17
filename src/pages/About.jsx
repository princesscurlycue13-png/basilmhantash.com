import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Award, BookOpen, Briefcase, Users, GraduationCap, Building, Stethoscope } from 'lucide-react'
import basilHantashPhoto from '../assets/basil-hantash-photo.jpg'

function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="luxury-section luxury-spacing">
        <div className="luxury-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="text-sm font-medium tracking-wider text-gray-500 uppercase">
                  Professional Biography
                </div>
                <h1 className="luxury-text-5xl luxury-text-gradient">
                  A Journey of Innovation
                </h1>
                <p className="luxury-text-xl">
                  Three decades of pioneering work at the intersection of medicine, 
                  science, and business, creating transformative solutions and 
                  unprecedented value across multiple industries.
                </p>
              </div>
            </div>
            
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                <img 
                  src={basilHantashPhoto} 
                  alt="Dr. Basil M Hantash" 
                  className="w-80 h-96 object-cover rounded-sm luxury-shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Overview */}
      <section className="luxury-section-alt luxury-spacing">
        <div className="luxury-container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="text-sm font-medium tracking-wider text-gray-500 uppercase mb-4">
                Executive Summary
              </div>
              <h2 className="luxury-text-4xl luxury-text-gradient mb-8">
                Multidisciplinary Excellence
              </h2>
            </div>
            
            <div className="luxury-card">
              <p className="luxury-text-xl text-gray-700 leading-relaxed mb-8">
                Dr. Basil M. Hantash is a serial entrepreneur who has successfully founded companies 
                acquired via M&A, launching over a dozen life sciences products across medical devices, 
                diagnostics, small molecule drugs, biomaterials, cosmeceuticals, nutraceuticals, 
                cell therapy, and nanotechnology.
              </p>
              
              <p className="luxury-text-xl text-gray-700 leading-relaxed mb-8">
                With 18 years of operational experience, Dr. Hantash has served in executive, 
                Board of Directors, Scientific Advisory Board, and consultant positions, helping 
                raise capital across all stages of company development. His intellectual property 
                has led to breakthrough medical devices and skin care products, while his R&D 
                efforts have resulted in 4 acquisitions, over a dozen FDA approvals, 100+ issued 
                and pending patents, 165+ scientific peer-reviewed articles, abstracts, and book 
                chapters, and the creation of over $1 billion in shareholder value.
              </p>
              
              <p className="luxury-text-xl text-gray-700 leading-relaxed">
                As a 30-year veteran of Regenerative Medicine, Dr. Hantash conducted pioneering 
                research at Stanford University investigating the mechanisms underlying mesenchymal 
                stem cell immune tolerance. In 2006, based on his Stanford intellectual property, 
                he founded Escape Therapeutics, a Stanford University spin-out focused on creating 
                the world's first universal, off-the-shelf stem cell source for human clinical use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Training */}
      <section className="luxury-section luxury-spacing">
        <div className="luxury-container">
          <div className="text-center mb-16">
            <div className="text-sm font-medium tracking-wider text-gray-500 uppercase mb-4">
              Academic Foundation
            </div>
            <h2 className="luxury-text-4xl luxury-text-gradient mb-8">
              Education & Training
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="luxury-card luxury-hover">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gray-100 rounded-sm flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-gray-700" />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="luxury-text-2xl text-gray-900 mb-2">MBA in Finance with Honors</h3>
                  <p className="text-gray-600 mb-2">The Wharton School, University of Pennsylvania</p>
                  <p className="text-sm text-gray-500 mb-4">2008-2010</p>
                  <p className="luxury-text-xl text-gray-700">
                    Awarded the Price Institute Fellowship for entrepreneurship. Recognized on 
                    Director's List and graduated with Honors Distinction.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="luxury-card luxury-hover">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gray-100 rounded-sm flex items-center justify-center">
                    <Stethoscope className="h-6 w-6 text-gray-700" />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="luxury-text-2xl text-gray-900 mb-2">Clinical Fellowship & Postdoctoral Training</h3>
                  <p className="text-gray-600 mb-2">Stanford University School of Medicine</p>
                  <p className="text-sm text-gray-500 mb-4">2005-2007</p>
                  <p className="luxury-text-xl text-gray-700">
                    Biodesign Innovation Program Fellowship and Postdoctoral Scholar in the 
                    Program for Regenerative Medicine, conducting pioneering stem cell research.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="luxury-card luxury-hover">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gray-100 rounded-sm flex items-center justify-center">
                    <Stethoscope className="h-6 w-6 text-gray-700" />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="luxury-text-2xl text-gray-900 mb-2">Dermatology Residency</h3>
                  <p className="text-gray-600 mb-2">Stanford University School of Medicine</p>
                  <p className="text-sm text-gray-500 mb-4">2003-2006</p>
                  <p className="luxury-text-xl text-gray-700">
                    Board-certified dermatologist with specialized training in clinical practice, 
                    research, and innovative treatment modalities.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="luxury-card luxury-hover">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gray-100 rounded-sm flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-gray-700" />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="luxury-text-2xl text-gray-900 mb-2">MD, PhD in Pharmacology and Physiology</h3>
                  <p className="text-gray-600 mb-2">Rutgers University Medical School</p>
                  <p className="text-sm text-gray-500 mb-4">1996-2002</p>
                  <p className="luxury-text-xl text-gray-700">
                    Valedictorian of both Graduate and Medical School. Inducted into Alpha Omega Alpha 
                    Medical Honor Society. Recipient of multiple academic awards and scholarships.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="luxury-card luxury-hover">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gray-100 rounded-sm flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-gray-700" />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="luxury-text-2xl text-gray-900 mb-2">BS in Biology, Minor in Chemistry</h3>
                  <p className="text-gray-600 mb-2">University of Illinois, Urbana-Champaign</p>
                  <p className="text-sm text-gray-500 mb-4">1989-1992</p>
                  <p className="luxury-text-xl text-gray-700">
                    Recipient of Howard Hughes Research Fellowship. Illinois State Scholar with 
                    multiple academic honors and research achievements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Highlights */}
      <section className="luxury-section-alt luxury-spacing">
        <div className="luxury-container">
          <div className="text-center mb-16">
            <div className="text-sm font-medium tracking-wider text-gray-500 uppercase mb-4">
              Professional Journey
            </div>
            <h2 className="luxury-text-4xl luxury-text-gradient mb-8">
              Career Milestones
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="luxury-card">
              <div className="space-y-8">
                <div>
                  <h3 className="luxury-text-2xl text-gray-900 mb-4">Early Career Foundation</h3>
                  <p className="luxury-text-xl text-gray-700 leading-relaxed">
                    Dr. Hantash began his life sciences career at Abbott Labs, where he developed 
                    and successfully launched a hepatitis screening assay. He then joined Molecular 
                    Geriatrics, a neuroscience biotech start-up founded by Nobel Laureate Ferid Murad, 
                    MD, PhD, where his work contributed to the discovery and patenting of a novel 
                    therapeutic drug for Alzheimer's disease that was subsequently sold to Upjohn.
                  </p>
                </div>
                
                <div>
                  <h3 className="luxury-text-2xl text-gray-900 mb-4">Stanford Innovation Period</h3>
                  <p className="luxury-text-xl text-gray-700 leading-relaxed">
                    During his time at Stanford University, Dr. Hantash completed his Dermatology 
                    Residency, Postdoctoral training in the Program for Regenerative Medicine, and 
                    a prestigious fellowship in the Biodesign Innovation Program. This period laid 
                    the foundation for his groundbreaking work in stem cell therapeutics and 
                    regenerative medicine.
                  </p>
                </div>
                
                <div>
                  <h3 className="luxury-text-2xl text-gray-900 mb-4">Entrepreneurial Excellence</h3>
                  <p className="luxury-text-xl text-gray-700 leading-relaxed">
                    As a serial entrepreneur, Dr. Hantash has been part of the founding team of 
                    10 medical device or biotech start-ups, accumulating extensive operational 
                    experience across executive, Board of Directors, Scientific Advisory Board, 
                    and consultant positions. His leadership has resulted in multiple successful 
                    exits and the creation of over $1 billion in shareholder value.
                  </p>
                </div>
                
                <div>
                  <h3 className="luxury-text-2xl text-gray-900 mb-4">Humanitarian Commitment</h3>
                  <p className="luxury-text-xl text-gray-700 leading-relaxed">
                    Beyond his professional achievements, Dr. Hantash remains intimately involved 
                    in humanitarian relief work and is an award-winning poet featured in several 
                    books and one audio CD, demonstrating his commitment to making a positive 
                    impact beyond the business world.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="luxury-section luxury-spacing">
        <div className="luxury-container">
          <div className="text-center mb-16">
            <div className="text-sm font-medium tracking-wider text-gray-500 uppercase mb-4">
              Notable Achievements
            </div>
            <h2 className="luxury-text-4xl luxury-text-gradient mb-8">
              Track Record of Excellence
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="luxury-text-4xl font-light text-gray-900 mb-2">100+</div>
              <div className="text-sm font-medium tracking-wider text-gray-500 uppercase">
                Patents Issued & Pending
              </div>
            </div>
            <div className="text-center">
              <div className="luxury-text-4xl font-light text-gray-900 mb-2">165+</div>
              <div className="text-sm font-medium tracking-wider text-gray-500 uppercase">
                Scientific Publications
              </div>
            </div>
            <div className="text-center">
              <div className="luxury-text-4xl font-light text-gray-900 mb-2">$1B+</div>
              <div className="text-sm font-medium tracking-wider text-gray-500 uppercase">
                Shareholder Value Created
              </div>
            </div>
            <div className="text-center">
              <div className="luxury-text-4xl font-light text-gray-900 mb-2">12+</div>
              <div className="text-sm font-medium tracking-wider text-gray-500 uppercase">
                FDA Approvals
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="luxury-card luxury-hover text-center">
              <Award className="h-8 w-8 text-gray-700 mx-auto mb-4" />
              <h3 className="luxury-text-2xl text-gray-900 mb-4">Medical Excellence</h3>
              <p className="luxury-text-xl text-gray-600">
                Board-certified dermatologist with pioneering research in regenerative medicine 
                and stem cell therapeutics.
              </p>
            </div>
            
            <div className="luxury-card luxury-hover text-center">
              <BookOpen className="h-8 w-8 text-gray-700 mx-auto mb-4" />
              <h3 className="luxury-text-2xl text-gray-900 mb-4">Scientific Innovation</h3>
              <p className="luxury-text-xl text-gray-600">
                30-year veteran of regenerative medicine with breakthrough discoveries 
                and extensive intellectual property portfolio.
              </p>
            </div>
            
            <div className="luxury-card luxury-hover text-center">
              <Building className="h-8 w-8 text-gray-700 mx-auto mb-4" />
              <h3 className="luxury-text-2xl text-gray-900 mb-4">Business Leadership</h3>
              <p className="luxury-text-xl text-gray-600">
                Serial entrepreneur with proven track record in scaling organizations 
                and creating substantial shareholder value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="luxury-section-alt luxury-spacing">
        <div className="luxury-container text-center">
          <div className="max-w-4xl mx-auto">
            <div className="text-sm font-medium tracking-wider text-gray-500 uppercase mb-6">
              Ready to Collaborate
            </div>
            <h2 className="luxury-text-4xl luxury-text-gradient mb-8">
              Experience Multidisciplinary Excellence
            </h2>
            <p className="luxury-text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Leverage three decades of integrated expertise across medicine, science, and business. 
              Discover how this unique combination can accelerate your organization's success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="luxury-button luxury-button-primary">
                <Link to="/contact">
                  Schedule Consultation
                </Link>
              </Button>
              <Button asChild variant="outline" className="luxury-button luxury-button-secondary">
                <Link to="/services">
                  Explore Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

