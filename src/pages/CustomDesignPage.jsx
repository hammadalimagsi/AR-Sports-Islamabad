import React from 'react';
import { useSearchParams } from 'react-router-dom';
import GarmentCustomizer from '../components/GarmentCustomizer';
import { Sparkles, ShieldCheck, Palette, FileCode2 } from 'lucide-react';

export default function CustomDesignPage() {
  const [searchParams] = useSearchParams();
  const initialSport = searchParams.get('sport') 
    ? (searchParams.get('sport').charAt(0).toUpperCase() + searchParams.get('sport').slice(1)) 
    : 'Cricket';

  return (
    <div className="py-12 bg-dark-950 min-h-screen text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-dark-900 text-neon-400 border border-neon-500/30 mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Interactive Garment Studio
          </span>
          <h1 className="font-teko text-4xl sm:text-6xl font-bold text-white tracking-wide">
            CUSTOM SPORTSWEAR DESIGN STUDIO
          </h1>
          <p className="text-sm text-slate-300 mt-2 leading-relaxed">
            Personalize your match jerseys, trousers, shorts, and complete kits. Preview your custom team colors, customer name, jersey number, and sponsor crest live before submitting for factory quotation.
          </p>
        </div>

        {/* INTERACTIVE CUSTOMIZER COMPONENT */}
        <GarmentCustomizer initialSport={initialSport} />

        {/* DESIGN SPECS & CAPABILITIES FOOTER */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-dark-900 border border-dark-800 rounded-2xl p-6">
            <Palette className="w-6 h-6 text-neon-400 mb-3" />
            <h3 className="font-teko text-2xl font-bold text-white tracking-wide mb-1">
              PANTONE & DIGITAL MATCHING
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              We match exact club or school Pantone color codes ensuring your kit matches your traditional brand identity seamlessly.
            </p>
          </div>

          <div className="bg-dark-900 border border-dark-800 rounded-2xl p-6">
            <ShieldCheck className="w-6 h-6 text-neon-400 mb-3" />
            <h3 className="font-teko text-2xl font-bold text-white tracking-wide mb-1">
              HIGH DENSITY STITCHING
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Anti-chafing overlock and flatlock seams provide extreme durability under physical tackles and intensive tournament slides.
            </p>
          </div>

          <div className="bg-dark-900 border border-dark-800 rounded-2xl p-6">
            <FileCode2 className="w-6 h-6 text-neon-400 mb-3" />
            <h3 className="font-teko text-2xl font-bold text-white tracking-wide mb-1">
              DIGITAL 3D PROOF APPROVAL
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Before printing starts, our graphic artists share 3D render mockups on WhatsApp for your committee’s final sign-off.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
