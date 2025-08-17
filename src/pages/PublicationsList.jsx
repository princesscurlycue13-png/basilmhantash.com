import React from 'react';
import { BookOpen, FileText, Users, Calendar, ExternalLink } from 'lucide-react';

function PublicationsList() {
  const peerReviewedPapers = [
    {
      title: "Novel Oligopeptides with Selective Cytotoxicity against Human and Mouse Melanoma Cells",
      journal: "J Dermatol Surg Res Ther",
      year: "2020",
      volume: "1:3-13"
    },
    {
      title: "Tyrosinase inhibitors with potent anti-senescence activity in human epidermal progenitors",
      journal: "J Dermatol Surg Res Ther",
      year: "2019",
      volume: "2:30-39"
    },
    {
      title: "Enhanced topical uptake of ascorbic acid in nonablative fractional photothermolysis-treated ex vivo human skin",
      journal: "J Dermatol Surg Res Ther",
      year: "2018",
      volume: "1:20-27"
    },
    {
      title: "Mechanisms and therapeutic prospects of peptides in skin pigmentation",
      journal: "J Dermatol Surg Res Ther",
      year: "2018",
      volume: "1:11-19"
    },
    {
      title: "Enhanced skin permeation of a novel peptide via structural modification, chemical enhancement, and microneedles",
      journal: "Intl J of Pharm",
      year: "2021",
      volume: "606:120868"
    },
    {
      title: "Heterologous expression of mutated HLA-G1 reduces immunogenicity of human dermal fibroblasts",
      journal: "Reg Med",
      year: "2014",
      volume: "9:775-84"
    },
    {
      title: "Heterelogous expression of mutated HLA-G decreases immunogenicity of human embryonic stem cells and their epidermal derivatives",
      journal: "Stem Cell Res",
      year: "2014",
      volume: "13:342–54"
    },
    {
      title: "Human embryonic stem cell-derived mesenchymal stem cells, an alternative MSC source for regenerative medicine therapy",
      journal: "Reg Med",
      year: "2014",
      volume: "9:453–65"
    },
    {
      title: "Temporal HLA profiling and immunomodulatory effects of human adult bone marrow- and adipose-derived mesenchymal stem cells",
      journal: "Reg Med",
      year: "2014",
      volume: "9:67-79"
    },
    {
      title: "The Principles of Wound Healing",
      journal: "Exp Rev Dermatol",
      year: "2013",
      volume: "8:639–658"
    }
  ];

  const bookChapters = [
    {
      title: "Isolation and Cultivation of Human Scalp Interfollicular Epidermal Stem Cells",
      book: "Skin Stem Cells: Methods and Protocols, 2/e. Methods in Molecular Biology",
      publisher: "Springer, New York",
      year: "2018"
    },
    {
      title: "Connective Tissue Diseases",
      book: "Cosmetic Dermatology",
      publisher: "Wolters Kluwer/Lippincott, PA",
      year: "2016"
    },
    {
      title: "Emerging technologies in aesthetic medicine: nonablative skin tightening",
      book: "Aesthetic Medicine: Art and Techniques",
      publisher: "Springer, Berlin",
      year: "2011"
    },
    {
      title: "Tgf-β1 Regulates Differentiation of Bone Marrow Mesenchymal Stem Cells",
      book: "Vitamins & Hormones: Stem Cell Regulators",
      publisher: "Academic Press, Burlington",
      year: "2011"
    }
  ];

  return (
    <div className="bg-black min-h-screen">
      {/* Peer-Reviewed Publications */}
      <section className="luxury-section-alt luxury-spacing">
        <div className="luxury-container">
          <div className="text-center mb-16">
            <div className="text-sm font-medium tracking-wider text-gray-400 uppercase mb-4">
              Scientific Research
            </div>
            <h2 className="luxury-text-4xl luxury-text-gradient mb-8">
              Selected Peer-Reviewed Publications
            </h2>
            <p className="luxury-text-xl text-gray-300 max-w-3xl mx-auto">
              Highlighting recent breakthrough research in regenerative medicine, 
              dermatology, and biotechnology innovation.
            </p>
          </div>
          
          <div className="space-y-6">
            {peerReviewedPapers.map((paper, index) => (
              <div key={index} className="luxury-card luxury-hover">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gray-800 rounded-sm flex items-center justify-center">
                      <FileText className="h-6 w-6 text-gray-300" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="luxury-text-2xl text-white mb-2">{paper.title}</h3>
                    <div className="flex items-center space-x-4 text-gray-400 mb-2">
                      <span className="font-medium">{paper.journal}</span>
                      <span>•</span>
                      <span>{paper.year}</span>
                      <span>•</span>
                      <span>{paper.volume}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Book Chapters */}
      <section className="luxury-section-alt luxury-spacing">
        <div className="luxury-container">
          <div className="text-center mb-16">
            <div className="text-sm font-medium tracking-wider text-gray-400 uppercase mb-4">
              Scholarly Contributions
            </div>
            <h2 className="luxury-text-4xl luxury-text-gradient mb-8">
              Selected Book Chapters
            </h2>
            <p className="luxury-text-xl text-gray-300 max-w-3xl mx-auto">
              Authoritative contributions to leading medical and scientific textbooks, 
              sharing expertise with the global research community.
            </p>
          </div>
          
          <div className="space-y-6">
            {bookChapters.map((chapter, index) => (
              <div key={index} className="luxury-card luxury-hover">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gray-800 rounded-sm flex items-center justify-center">
                      <BookOpen className="h-6 w-6 text-gray-300" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="luxury-text-2xl text-white mb-2">{chapter.title}</h3>
                    <div className="flex items-center space-x-4 text-gray-400 mb-2">
                      <span className="font-medium">{chapter.book}</span>
                      <span>•</span>
                      <span>{chapter.year}</span>
                    </div>
                    <p className="text-gray-400 text-sm">
                      {chapter.publisher}
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

export default PublicationsList;

