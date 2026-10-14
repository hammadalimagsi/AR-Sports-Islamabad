import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, Sparkles, Target, Users, 
  Phone, ArrowRight, Award, Factory 
} from 'lucide-react';
import { openWhatsAppChat } from '../config/businessConfig';

export default function About() {
  const handleContactWhatsApp = () => {
    openWhatsAppChat("Assalam-o-Alaikum AR Sports! I want to learn more about your brand and custom manufacturing.");
  };

  return (
    <div className="py-12 bg-navy-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HERO INTRO */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-electric-500/20 text-electric-400 border border-electric-500/30 mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Our Heritage & Philosophy
          </span>
          <h1 className="font-teko text-4xl sm:text-6xl font-bold text-white tracking-wide">
            CRAFTING ATHLETIC IDENTITY SINCE DAY ONE
          </h1>
          <p className="text-base text-slate-300 mt-3 leading-relaxed">
            At AR SPORTS, we believe your uniform is more than just cloth — it is your team's badge of honor, confidence, and collective identity on the field.
          </p>
        </div>

        {/* STORY GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6 text-slate-300 text-sm leading-relaxed">
            <h2 className="font-teko text-3xl sm:text-4xl font-bold text-white tracking-wide">
              FOCUSED ON BESPOKE SPORTSWEAR & MATCH EQUIPMENT
            </h2>
            <p>
              AR SPORTS was created to bridge the gap between expensive international sportswear and poor-quality local prints. We specialize in custom teamwear, school uniforms, and dedicated equipment for cricket, football, badminton, basketball, volleyball, and fitness athletes.
            </p>
            <p>
              By leveraging advanced digital sublimation technology, we allow sports teams to realize their dream aesthetic without limitations on colors, gradients, logos, or squad numbering. Every garment is cut from technical fabrics designed for breathability, flex, and rigorous tournament play.
            </p>

            <div className="pt-2">
              <h3 className="font-bold text-white mb-2">Our Core Commitments:</h3>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Honest, direct pricing confirmed personally on WhatsApp without hidden fees.</span>
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Durable colors infused directly into yarns that never crack or wash out.</span>
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Personalized squad roster customization for schools, clubs, and tournaments.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-navy-900 border border-navy-800 shadow-2xl relative">
              <img
                src="https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=1000&q=80"
                alt="AR Sports in Action"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-navy-950/80 backdrop-blur-md border border-navy-700 text-xs text-slate-300">
                <strong className="text-white block font-teko text-xl">PERFORMANCE FIRST</strong>
                Every jersey, trouser, and bat is engineered to endure intense competitive action.
              </div>
            </div>
          </div>
        </div>

        {/* PILLARS / VALUES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-navy-900 border border-navy-800 rounded-2xl p-8">
            <div className="w-12 h-12 rounded-xl bg-electric-500/20 text-electric-400 flex items-center justify-center mb-6">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="font-teko text-2xl font-bold text-white tracking-wide mb-2">
              PRECISION CUSTOMIZATION
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              From vector logo conversion to exact pantone color matching, we provide 3D digital approvals before putting needle to fabric.
            </p>
          </div>

          <div className="bg-navy-900 border border-navy-800 rounded-2xl p-8">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6">
              <Factory className="w-6 h-6" />
            </div>
            <h3 className="font-teko text-2xl font-bold text-white tracking-wide mb-2">
              DIRECT FACTORY ACCESS
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Skip distributor markups. We communicate directly with captains and coaches on WhatsApp to tailor packages to your budget.
            </p>
          </div>

          <div className="bg-navy-900 border border-navy-800 rounded-2xl p-8">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-6">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-teko text-2xl font-bold text-white tracking-wide mb-2">
              COMMUNITY & TEAM SPIRIT
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Proud partners to local school districts, cricket clubs, football academies, and weekend corporate tournaments.
            </p>
          </div>
        </div>

        {/* CALL TO ACTION */}
        <div className="bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 border border-navy-700 rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-2xl">
          <h2 className="font-teko text-3xl sm:text-5xl font-bold text-white tracking-wide">
            JOIN HUNDREDS OF TEAMS WEARING AR SPORTS
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-xl mx-auto">
            Ready to design your squad's new kit or equip your institution with premium equipment? Start your inquiry today.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6">
            <Link
              to="/custom-design"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-electric-500 hover:bg-electric-600 text-white transition-colors"
            >
              Custom Design Studio
            </Link>
            <button
              onClick={handleContactWhatsApp}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center gap-2 transition-colors"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>Chat with Admin on WhatsApp</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
