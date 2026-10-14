import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQS_DATA = [
  {
    q: "How can I customize a jersey or team kit?",
    a: "You can either use our interactive Custom Design Studio online to choose your sport, pattern, colors, customer/player name, squad number, and upload a preview logo — or you can send your design concepts, pictures, or hand-drawn sketches directly to our design team via WhatsApp."
  },
  {
    q: "Can I add my player name, squad number, and sponsor logos?",
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
    <section id="faq-section" className="py-16 sm:py-24 bg-brand-alt relative border-t border-brand-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-white text-brand-green border border-brand-border shadow-xs mb-3">
            <HelpCircle className="w-3.5 h-3.5" /> Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-charcoal tracking-tight">
            Everything You Need To Know
          </h2>
          <p className="text-sm text-brand-muted max-w-xl mx-auto mt-2">
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
                className="bg-white border border-brand-border rounded-2xl overflow-hidden transition-all duration-200 hover:border-brand-green/40 shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(index)}
                  className="w-full py-4 px-6 text-left flex items-center justify-between gap-4 hover:bg-brand-alt/50 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-brand-text">
                    {faq.q}
                  </span>
                  <span className={`w-8 h-8 rounded-lg bg-brand-alt border border-brand-border flex items-center justify-center text-brand-muted flex-shrink-0 transition-transform ${isOpen ? 'rotate-180 bg-brand-green text-white border-brand-green' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm text-brand-muted leading-relaxed border-t border-brand-border/60 animate-in fade-in duration-200">
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
