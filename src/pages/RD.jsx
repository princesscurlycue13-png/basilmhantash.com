import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { BookOpen, FileText, Award, Mic, Users, Calendar, ExternalLink } from 'lucide-react';

function RD() {
  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="luxury-section luxury-spacing">
        <div className="luxury-container">
          <div className="text-center mb-16">
            <div className="text-sm font-medium tracking-wider text-gray-400 uppercase mb-4">
              Research & Development
            </div>
            <h1 className="luxury-text-5xl luxury-text-gradient mb-8">
              Innovation & Intellectual Leadership
            </h1>
            <p className="luxury-text-xl max-w-4xl mx-auto">
              A comprehensive portfolio of peer-reviewed research, breakthrough patents, 
              and scholarly contributions spanning three decades of innovation in medicine, 
              biotechnology, and regenerative therapeutics.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="luxury-text-4xl font-light text-white mb-2">165+</div>
              <div className="text-sm font-medium tracking-wider text-gray-400 uppercase">
                Total Publications
              </div>
            </div>
            <div className="text-center">
              <div className="luxury-text-4xl font-light text-white mb-2">82</div>
              <div className="text-sm font-medium tracking-wider text-gray-400 uppercase">
                Peer-Reviewed Papers
              </div>
            </div>
            <div className="text-center">
              <div className="luxury-text-4xl font-light text-white mb-2">100+</div>
              <div className="text-sm font-medium tracking-wider text-gray-400 uppercase">
                Patents Issued & Pending
              </div>
            </div>
            <div className="text-center">
              <div className="luxury-text-4xl font-light text-white mb-2">24</div>
              <div className="text-sm font-medium tracking-wider text-gray-400 uppercase">
                Book Chapters
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-navigation for Publications, Patents and Presentations */}
      <nav className="bg-gray-900 py-4">
        <div className="luxury-container flex justify-center space-x-8">
          <NavLink 
            to="/rd/publications" 
            className={({ isActive }) => 
              `flex items-center space-x-2 text-lg font-medium ${isActive ? 'text-white' : 'text-gray-400 hover:text-white'}`
            }
          >
            <FileText className="h-5 w-5" />
            <span>Publications</span>
          </NavLink>
          <NavLink 
            to="/rd/patents" 
            className={({ isActive }) => 
              `flex items-center space-x-2 text-lg font-medium ${isActive ? 'text-white' : 'text-gray-400 hover:text-white'}`
            }
          >
            <Award className="h-5 w-5" />
            <span>Patents & IP</span>
          </NavLink>
          <NavLink 
            to="/rd/presentations" 
            className={({ isActive }) => 
              `flex items-center space-x-2 text-lg font-medium ${isActive ? 'text-white' : 'text-gray-400 hover:text-white'}`
            }
          >
            <Mic className="h-5 w-5" />
            <span>Presentations</span>
          </NavLink>
        </div>
      </nav>

      {/* Render nested routes */}
      <Outlet />

      {/* Research Impact */}
      <section className="luxury-section luxury-spacing">
        <div className="luxury-container">
          <div className="text-center mb-16">
            <div className="text-sm font-medium tracking-wider text-gray-400 uppercase mb-4">
              Research Impact
            </div>
            <h2 className="luxury-text-4xl luxury-text-gradient mb-8">
              Global Scientific Influence
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="luxury-card luxury-hover text-center">
              <Users className="h-8 w-8 text-gray-300 mx-auto mb-4" />
              <h3 className="luxury-text-2xl text-white mb-4">International Collaboration</h3>
              <p className="luxury-text-xl text-gray-300">
                Research partnerships spanning multiple continents with leading 
                institutions and pharmaceutical companies.
              </p>
            </div>
            
            <div className="luxury-card luxury-hover text-center">
              <Calendar className="h-8 w-8 text-gray-300 mx-auto mb-4" />
              <h3 className="luxury-text-2xl text-white mb-4">Three Decades of Innovation</h3>
              <p className="luxury-text-xl text-gray-300">
                Consistent publication record from 1996 to present, demonstrating 
                sustained scientific productivity and impact.
              </p>
            </div>
            
            <div className="luxury-card luxury-hover text-center">
              <ExternalLink className="h-8 w-8 text-gray-300 mx-auto mb-4" />
              <h3 className="luxury-text-2xl text-white mb-4">Cross-Disciplinary Impact</h3>
              <p className="luxury-text-xl text-gray-300">
                Publications spanning dermatology, regenerative medicine, 
                biotechnology, and aesthetic medicine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="luxury-section-alt luxury-spacing">
        <div className="luxury-container text-center">
          <div className="max-w-4xl mx-auto">
            <div className="text-sm font-medium tracking-wider text-gray-400 uppercase mb-6">
              Collaborate with Excellence
            </div>
            <h2 className="luxury-text-4xl luxury-text-gradient mb-8">
              Leverage Proven Scientific Innovation
            </h2>
            <p className="luxury-text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Partner with a researcher whose work has shaped the future of regenerative 
              medicine and biotechnology. Explore opportunities for collaboration, 
              licensing, and strategic partnerships.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="luxury-button luxury-button-primary">
                Schedule Research Consultation
              </button>
              <button className="luxury-button luxury-button-secondary">
                Explore IP Licensing
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default RD;

