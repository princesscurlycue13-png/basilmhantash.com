import React from 'react';
import { Award } from 'lucide-react';

function PatentsList() {
  const keyPatents = [
    {
      title: "Peptide tyrosinase inhibitors and uses thereof",
      inventors: "Basil M Hantash, Anan Abu Ubeid",
      patentNumber: "9,320,698",
      issueDate: "2016-04-26",
      status: "Issued"
    },
    {
      title: "System for Evaluating Skin Treatment",
      inventors: "Basil M Hantash",
      patentNumber: "9,554,746",
      issueDate: "2017-01-31",
      status: "Issued"
    },
    {
      title: "Peptide Tyrosinase Activators",
      inventors: "Basil M Hantash, Anan Abu Ubeid",
      patentNumber: "9,567,368",
      issueDate: "2017-02-14",
      status: "Issued"
    },
    {
      title: "Decapeptide-12 Modulation of Sirtuin Gene Expression in Epidermal Keratinocytes",
      inventors: "Basil M Hantash, Anan Abu Ubeid",
      patentNumber: "PCT/US2018/25450",
      issueDate: "2018-03-30",
      status: "International Application"
    },
    {
      title: "Tyrosine Inhibitors with Immunosuppressive Activity in Human Neonatal Keratinocyte Progenitors",
      inventors: "Basil M Hantash",
      patentNumber: "PCT/US2020/014298",
      issueDate: "2020-01-20",
      status: "International Application"
    },
    {
      title: "Melanoma Therapeutics",
      inventors: "Basil M Hantash, Anan Abu Ubeid",
      patentNumber: "PCT/US2021/018247",
      issueDate: "2021-02-16",
      status: "International Application"
    },
    {
      title: "Enhanced Skin Permeation of a Novel Peptide via Structural Modification, Chemical Enhancement, and Microneedles",
      inventors: "Basil M Hantash",
      patentNumber: "PCT/US2021/055692",
      issueDate: "2021-10-19",
      status: "International Application"
    },
    {
      title: "Microdermabrasion Treatment Heads",
      inventors: "Kenneth B. Karasiuk, Basil M Hantash, Brendon Boone, Steven E. Wojcik",
      patentNumber: "8,236,008",
      issueDate: "2012-08-07",
      status: "Issued"
    },
    {
      title: "Microdermabrasion System with Combination Skin Therapies",
      inventors: "Kenneth B. Karasiuk, Basil M Hantash, Brendon Boone, Steven E. Wojcik",
      patentNumber: "8,945,104",
      issueDate: "2015-02-03",
      status: "Issued"
    }
  ];

  return (
    <div className="bg-black min-h-screen">
      {/* Patents & IP */}
      <section className="luxury-section luxury-spacing">
        <div className="luxury-container">
          <div className="text-center mb-16">
            <div className="text-sm font-medium tracking-wider text-gray-400 uppercase mb-4">
              Innovation Portfolio
            </div>
            <h2 className="luxury-text-4xl luxury-text-gradient mb-8">
              Key Patents & Intellectual Property
            </h2>
            <p className="luxury-text-xl text-gray-300 max-w-3xl mx-auto">
              Breakthrough innovations in biotechnology, medical devices, and therapeutic 
              compounds with global patent protection across multiple jurisdictions.
            </p>
          </div>
          
          <div className="space-y-6">
            {keyPatents.map((patent, index) => (
              <div key={index} className="luxury-card luxury-hover">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gray-800 rounded-sm flex items-center justify-center">
                      <Award className="h-6 w-6 text-gray-300" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="luxury-text-2xl text-white mb-2">{patent.title}</h3>
                    <div className="flex items-center space-x-4 text-gray-400 mb-2">
                      <span className="font-medium">{patent.patentNumber}</span>
                      <span>•</span>
                      <span>{patent.issueDate}</span>
                      <span>•</span>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        patent.status === 'Issued' 
                          ? 'bg-green-900 text-green-300' 
                          : 'bg-blue-900 text-blue-300'
                      }`}>
                        {patent.status}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Inventors: {patent.inventors}
                    </p>
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

export default PatentsList;

