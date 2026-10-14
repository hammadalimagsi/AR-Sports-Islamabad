import React from 'react';
import TeamOrderForm from '../components/TeamOrderForm';
import { School, Users, ShieldCheck, CheckCircle2, Award, Clock } from 'lucide-react';

export default function SchoolTeamwearPage() {
  return (
    <div className="py-12 bg-white min-h-screen text-brand-text">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-emerald-50 text-brand-green border border-emerald-200 mb-3">
            <School className="w-3.5 h-3.5" /> Bulk Institutional Solutions
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-brand-text tracking-tight">
            School Uniforms & Bulk Teamwear
          </h1>
          <p className="text-sm text-brand-muted mt-2 leading-relaxed">
            Equip your school houses, academy squads, and sports clubs with unified, durable team kits. Fill in your full roster below to get wholesale bulk quotes directly on WhatsApp.
          </p>
        </div>

        {/* TEAM ORDER ROSTER BUILDER */}
        <TeamOrderForm />

        {/* BULK PERKS & ADVANTAGES */}
        <div className="mt-16 border-t border-brand-border pt-12">
          <h3 className="text-2xl font-bold text-brand-text tracking-tight text-center mb-8">
            The AR Sports Bulk Commitment
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-brand-alt border border-brand-border rounded-2xl p-6 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-white border border-brand-border text-brand-green flex items-center justify-center mb-4 shadow-xs">
                <Users className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-brand-text mb-1">
                Tiered Bulk Discounts
              </h4>
              <p className="text-xs text-brand-muted leading-relaxed">
                Wholesale pricing starting at 10 uniforms. Additional discounts for full academic sports day house kits (100+ kits).
              </p>
            </div>

            <div className="bg-brand-alt border border-brand-border rounded-2xl p-6 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-white border border-brand-border text-brand-green flex items-center justify-center mb-4 shadow-xs">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-brand-text mb-1">
                Embroidered Academy Crests
              </h4>
              <p className="text-xs text-brand-muted leading-relaxed">
                Choose between high-precision Japanese embroidery, 3D raised silicone crests, or crisp sublimated emblems.
              </p>
            </div>

            <div className="bg-brand-alt border border-brand-border rounded-2xl p-6 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-white border border-brand-border text-brand-green flex items-center justify-center mb-4 shadow-xs">
                <Clock className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-brand-text mb-1">
                On-Time Tournament Delivery
              </h4>
              <p className="text-xs text-brand-muted leading-relaxed">
                Scheduled delivery timelines confirmed up front via WhatsApp to guarantee your kits arrive before match day.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
