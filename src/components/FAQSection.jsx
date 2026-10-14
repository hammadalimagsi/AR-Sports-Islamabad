import React, { useState } from 'react';
import { ChevronDown, Plus, Minus, HelpCircle } from 'lucide-react';

const FAQS_DATA = [
  {
    q: "How can I customize a jersey?",
    a: "You can either use our interactive Custom Design Studio online to choose your sport, pattern, colors, customer/player name, number, and upload a preview logo — or you can send your design concepts, pictures, or hand-drawn sketches directly to our design team via WhatsApp."
  },
  {
    q: "Can I add my name, squad number, and sponsor logos?",
    a: "Yes, 100%! We specialize in high-definition digital sublimation where names, sponsor graphics, and back numbers are permanently dyed into the fabric fibers. They will never peel, crack, or fade with washing."
  },
  {
    q: "Can I order different sizes for a full squad or team?",
    a: "Absolutely. With our School & Teamwear bulk order system, you can submit an entire roster with each player's individual jersey size (from Youth Sizes through 3XL), squad number, and custom name."
  },
  {
    q: "How do I share my vector logo or high-resolution graphics?",
    a: "While you can upload a logo on our website for an instant garment mockup preview, you can send the high-resolution vector file (AI, EPS, PDF, or HD PNG) directly to our WhatsApp chat after initiating your order."
  },
  {
    q: "Why are prices not listed as fixed amounts?",
    a: "Every custom sports kit is unique in fabric GSM, sublimation print coverage, order quantity, and customization details (collar type, extra crests, shorts, socks). Providing personalized quotes on WhatsApp ensures you receive factory-direct wholesale rates without generic markups."
  },
  {
    q: "How do bulk academy, tournament, and school orders work?",
    a: "For bulk orders of 10+ uniforms, we provide factory-direct wholesale pricing, physical fabric swatch proofs if needed, and digital 3D mockups on WhatsApp before manufacturing commences. Typical production turnaround is 7 to 14 working days depending on quantity."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq-section" className="py-16 sm:py-24 bg-dark-950 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-dark-900 text-neon-400 border border-neon-500/30 mb-3">
            <HelpCircle className="w-3.5 h-3.5" /> Frequently Asked Questions
          </span>
          <h2 className="font-teko text-4xl sm:text-5xl font-bold text-white tracking-wide">
            EVERYTHING YOU NEED TO KNOW
          </h2>
          <p className="text-sm text-slate-400 max-w-xl mx-auto mt-2">
            Have questions about custom printing, fabric types, team rosters, or WhatsApp pricing quotes? Find quick answers here.
          </p>
        </div>

        {/* ACCORDION ITEMS */}
        <div className="space-y-3">
          {FAQS_DATA.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.q}
                className="bg-dark-900 border border-dark-800 rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(index)}
                  className="w-full py-4 px-6 text-left flex items-center justify-between gap-4 hover:bg-dark-850 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-white">
                    {faq.q}
                  </span>
                  <span className={`w-8 h-8 rounded-lg bg-dark-950 border border-dark-750 flex items-center justify-center text-neon-400 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180 bg-neon-500 text-black border-neon-500' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm text-slate-300 leading-relaxed border-t border-dark-800 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
