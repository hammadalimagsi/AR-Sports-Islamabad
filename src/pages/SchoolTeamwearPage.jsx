import React from 'react';
import TeamOrderForm from '../components/TeamOrderForm';
import { School, Users, ShieldCheck, CheckCircle2, Award, Clock } from 'lucide-react';

export default function SchoolTeamwearPage() {
  return (
    <div className="py-12 bg-navy-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-electric-500/20 text-electric-400 border border-electric-500/30 mb-3">
            <School className="w-3.5 h-3.5" /> Bulk Institutional Solutions
          </span>
          <h1 className="font-teko text-4xl sm:text-6xl font-bold text-white tracking-wide">
            SCHOOL UNIFORMS & BULK TEAMWEAR
          </h1>
          <p className="text-sm text-slate-300 mt-2 leading-relaxed">
            Equip your school houses, academy squads, and sports clubs with unified, durable team kits. Fill in your full roster below to get wholesale bulk quotes directly on WhatsApp.
          </p>
        </div>

        {/* TEAM ORDER ROSTER BUILDER */}
        <TeamOrderForm />

        {/* BULK PERKS & ADVANTAGES */}
        <div className="mt-16 border-t border-navy-800 pt-12">
          <h3 className="font-teko text-3xl font-bold text-white tracking-wide text-center mb-8">
            THE AR SPORTS BULK COMMITMENT
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-navy-900 border border-navy-800 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-electric-500/20 text-electric-400 flex items-center justify-center mb-4">
                <Users className="w-5 h-5" />
              </div>
              <h4 className="font-teko text-2xl font-bold text-white tracking-wide mb-1">
                TIERED BULK DISCOUNTS
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Wholesale pricing starting at 10 uniforms. Additional discounts for full academic sports day house kits (100+ kits).
              </p>
            </div>

            <div className="bg-navy-900 border border-navy-800 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="font-teko text-2xl font-bold text-white tracking-wide mb-1">
                EMBROIDERED ACADEMY CRESTS
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Choose between high-precision Japanese embroidery, 3D raised silicone crests, or crisp sublimated emblems.
              </p>
            </div>

            <div className="bg-navy-900 border border-navy-800 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <h4 className="font-teko text-2xl font-bold text-white tracking-wide mb-1">
                ON-TIME TOURNAMENT DELIVERY
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Scheduled delivery timelines confirmed up front via WhatsApp to guarantee your kits arrive before match day.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
