import React from 'react';
import { Mic, Calendar } from 'lucide-react';

function PresentationsList() {
  const speakingEngagements = [
    {
      title: "Tissue engineered skin substitute.",
      event: "ASDS Annual Meeting",
      date: "10/05"
    },
    {
      title: "Laser-tissue interactions.",
      event: "Stanford University Seminar Series",
      date: "04/06"
    },
    {
      title: "Site specific delivery in fraxel-treated skin.",
      event: "Total Anti-Aging Annual Seminar",
      date: "09/06"
    },
    {
      title: "Tissue engineered skin substitute.",
      event: "ASDS Annual Meeting",
      date: "10/06"
    },
    {
      title: "Fibroblast differentiation of mouse bone marrow-derived mesenchymal stem cells.",
      event: "PSRC Annual Meeting",
      date: "06/07"
    },
    {
      title: "Characterization of a novel ablative fractional resurfacing device.",
      event: "World Congress of Dermatology Annual Meeting",
      date: "10/07"
    },
    {
      title: "Tissue engineered skin substitute.",
      event: "ASDS Annual Meeting",
      date: "10/07"
    },
    {
      title: "Stem cell commercialization.",
      event: "Stem Cell Partnering Annual Conference",
      date: "02/08"
    },
    {
      title: "Topical skin lighteners: an evidence-based treatment algorithm for cutaneous pigmentation disorders,",
      event: "FACE Annual Meeting",
      date: "07/10"
    },
    {
      title: "Advances in Radiofrequency Therapy for Rejuvenation.",
      event: "AAD Annual Meeting",
      date: "02/11"
    },
    {
      title: "Topical skin lighteners: an evidence-based treatment algorithm for cutaneous pigmentation disorders,",
      event: "Athens Dermatology Meeting",
      date: "05/11"
    },
    {
      title: "β2 microglobulin-free HLA-G enhances natural killer cell cytotoxicity and proinflammatory cytokine production.",
      event: "HLA-G conference",
      date: "2012"
    },
    {
      title: "Insights into Biotech and the World of Healthcare,",
      event: "PR ICON Conference",
      date: "2022"
    }
  ];

  return (
    <div className="bg-black min-h-screen">
      <section className="luxury-section luxury-spacing">
        <div className="luxury-container">
          <div className="text-center mb-16">
            <div className="text-sm font-medium tracking-wider text-gray-400 uppercase mb-4">
              Speaking Engagements
            </div>
            <h2 className="luxury-text-4xl luxury-text-gradient mb-8">
              Conference Presentations & Invited Talks
            </h2>
            <p className="luxury-text-xl text-gray-300 max-w-3xl mx-auto">
              Sharing insights and expertise at leading scientific conferences, industry events, and academic institutions worldwide.
            </p>
          </div>
          
          <div className="space-y-6">
            {speakingEngagements.map((presentation, index) => (
              <div key={index} className="luxury-card luxury-hover">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gray-800 rounded-sm flex items-center justify-center">
                      <Mic className="h-6 w-6 text-gray-300" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="luxury-text-2xl text-white mb-2">{presentation.title}</h3>
                    <div className="flex items-center space-x-4 text-gray-400 mb-2">
                      <span className="font-medium">{presentation.event}</span>
                      <span>•</span>
                      <span>{presentation.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default PresentationsList;

