import React, { useState } from 'react';
import { 
  Users, Plus, Trash2, ShieldCheck, 
  MessageCircle, School, Award, FileSpreadsheet 
} from 'lucide-react';
import { SPORTS_CATEGORIES, GARMENT_TYPES } from '../data/productsData';
import { buildTeamOrderInquiryMessage } from '../utils/whatsappMessages';
import { openWhatsAppChat } from '../config/businessConfig';

const SIZES = ["Youth S", "Youth M", "Youth L", "XS", "S", "M", "L", "XL", "2XL", "3XL"];

export default function TeamOrderForm() {
  const [teamName, setTeamName] = useState("AR Lions FC");
  const [organizationType, setOrganizationType] = useState("Sports Club / Academy");
  const [sport, setSport] = useState("Cricket");
  const [kitType, setKitType] = useState("Complete Kit (Jersey + Pants/Shorts + Socks)");
  const [deliveryCity, setDeliveryCity] = useState("Islamabad / Rawalpindi");
  const [notes, setNotes] = useState("Include school crest embroidery on left chest and player names in bold arched lettering.");

  // Player Roster
  const [players, setPlayers] = useState([
    { id: 1, name: "Ali Raza", number: "7", size: "L", role: "Captain" },
    { id: 2, name: "Hassan Mir", number: "10", size: "M", role: "Vice Captain" },
    { id: 3, name: "Hamza Tariq", number: "18", size: "XL", role: "Player" },
    { id: 4, name: "Bilal Ahmed", number: "23", size: "M", role: "Wicketkeeper / GK" },
    { id: 5, name: "Usman Malik", number: "45", size: "L", role: "Player" },
  ]);

  const [validationError, setValidationError] = useState("");

  const handleAddPlayer = () => {
    const nextId = players.length > 0 ? Math.max(...players.map(p => p.id)) + 1 : 1;
    setPlayers([...players, { id: nextId, name: "", number: "", size: "M", role: "Player" }]);
  };

  const handleRemovePlayer = (id) => {
    if (players.length <= 1) {
      setValidationError("At least one player row is required for a team order.");
      return;
    }
    setValidationError("");
    setPlayers(players.filter(p => p.id !== id));
  };

  const handlePlayerChange = (id, field, value) => {
    setPlayers(players.map(p => {
      if (p.id === id) {
        return { ...p, [field]: value };
      }
      return p;
    }));
  };

  const handleBulkSubmit = (e) => {
    e.preventDefault();
    if (!teamName.trim()) {
      setValidationError("Please enter your Team or School name.");
      return;
    }

    if (players.length === 0) {
      setValidationError("Please add at least one player to your team roster.");
      return;
    }

    setValidationError("");

    const message = buildTeamOrderInquiryMessage({
      teamName,
      organizationType,
      sport,
      kitType,
      deliveryCity,
      notes,
      players
    });

    openWhatsAppChat(message);
  };

  return (
    <div className="bg-white border border-brand-border rounded-3xl p-6 lg:p-10 shadow-sm">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-brand-border">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-brand-green border border-emerald-200 mb-2">
            <School className="w-3.5 h-3.5" /> Bulk Team Roster Specialist
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-text tracking-tight">
            School & Teamwear Bulk Roster Order
          </h2>
          <p className="text-sm text-brand-muted mt-1">
            Easily enter your full squad roster, names, squad numbers, and individual player sizes.
          </p>
        </div>

        <div className="flex items-center gap-3 bg-brand-alt px-4 py-2.5 rounded-xl border border-brand-border">
          <Users className="w-5 h-5 text-brand-green" />
          <div className="text-left">
            <span className="text-[10px] uppercase font-bold text-brand-muted block">Total Players</span>
            <span className="text-base font-bold text-brand-text">{players.length} Uniforms</span>
          </div>
        </div>
      </div>

      <form onSubmit={handleBulkSubmit} className="mt-8 space-y-8">
        
        {/* TEAM & ORDER SPECIFICATIONS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-xs font-semibold text-brand-text mb-1.5">
              School / Club / Team Name *
            </label>
            <input
              type="text"
              required
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              placeholder="e.g. Crescent Model School"
              className="w-full bg-white border border-brand-border rounded-xl py-2.5 px-3.5 text-brand-text text-sm focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-brand-text mb-1.5">
              Organization Category
            </label>
            <select
              value={organizationType}
              onChange={(e) => setOrganizationType(e.target.value)}
              className="w-full bg-white border border-brand-border rounded-xl py-2.5 px-3.5 text-brand-text text-sm focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green"
            >
              <option value="School / College / University">School / College / University</option>
              <option value="Sports Club / Academy">Sports Club / Academy</option>
              <option value="Corporate / Company Team">Corporate / Company Team</option>
              <option value="Tournament Organizer">Tournament Organizer</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-brand-text mb-1.5">
              Sport
            </label>
            <select
              value={sport}
              onChange={(e) => setSport(e.target.value)}
              className="w-full bg-white border border-brand-border rounded-xl py-2.5 px-3.5 text-brand-text text-sm focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green"
            >
              {SPORTS_CATEGORIES.map(s => (
                <option key={s.id} value={s.name}>{s.name}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-brand-text mb-1.5">
              Kit Specification
            </label>
            <select
              value={kitType}
              onChange={(e) => setKitType(e.target.value)}
              className="w-full bg-white border border-brand-border rounded-xl py-2.5 px-3.5 text-brand-text text-sm focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green"
            >
              <option value="Complete Kit (Jersey + Pants/Shorts + Socks)">Complete Kit (Jersey + Pants + Socks)</option>
              <option value="Match Jersey Only">Match Jersey Only</option>
              <option value="Jersey + Short">Jersey + Short</option>
              <option value="Team Tracksuit Set">Team Tracksuit Set</option>
              <option value="School Sports Polo & Shorts">School Sports Polo & Shorts</option>
            </select>
          </div>
        </div>

        {/* PLAYER ROSTER TABLE */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-brand-green flex items-center gap-2">
              <FileSpreadsheet className="w-4 h-4" /> Squad Roster & Individual Sizes
            </h3>
            <button
              type="button"
              onClick={handleAddPlayer}
              className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-brand-green hover:bg-brand-hover text-white flex items-center gap-1.5 shadow-sm transition-colors cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Player</span>
            </button>
          </div>

          {validationError && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-600">
              {validationError}
            </div>
          )}

          {/* Roster responsive table */}
          <div className="overflow-x-auto border border-brand-border rounded-2xl bg-white shadow-xs">
            <table className="w-full text-left text-sm text-brand-text">
              <thead className="bg-brand-alt text-xs text-brand-muted uppercase font-semibold border-b border-brand-border">
                <tr>
                  <th className="py-3 px-4 w-12 text-center">#</th>
                  <th className="py-3 px-4">Player Name (on Jersey)</th>
                  <th className="py-3 px-4 w-28">Squad No.</th>
                  <th className="py-3 px-4 w-36">Size</th>
                  <th className="py-3 px-4 w-44">Role / Notes</th>
                  <th className="py-3 px-4 w-16 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-border font-medium">
                {players.map((player, index) => (
                  <tr key={player.id} className="hover:bg-brand-alt/40 transition-colors">
                    <td className="py-3 px-4 text-center text-xs text-brand-muted font-bold">
                      {index + 1}
                    </td>
                    <td className="py-2 px-4">
                      <input
                        type="text"
                        value={player.name}
                        onChange={(e) => handlePlayerChange(player.id, 'name', e.target.value)}
                        placeholder="e.g. Z. ABBAS"
                        className="w-full bg-white border border-brand-border rounded-lg py-1.5 px-2.5 text-brand-text text-xs focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green"
                      />
                    </td>
                    <td className="py-2 px-4">
                      <input
                        type="text"
                        value={player.number}
                        onChange={(e) => handlePlayerChange(player.id, 'number', e.target.value)}
                        placeholder="e.g. 10"
                        maxLength={3}
                        className="w-full bg-white border border-brand-border rounded-lg py-1.5 px-2.5 text-brand-text text-xs focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green"
                      />
                    </td>
                    <td className="py-2 px-4">
                      <select
                        value={player.size}
                        onChange={(e) => handlePlayerChange(player.id, 'size', e.target.value)}
                        className="w-full bg-white border border-brand-border rounded-lg py-1.5 px-2 text-brand-text text-xs focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green"
                      >
                        {SIZES.map(s => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </td>
                    <td className="py-2 px-4">
                      <input
                        type="text"
                        value={player.role}
                        onChange={(e) => handlePlayerChange(player.id, 'role', e.target.value)}
                        placeholder="Player / GK / Coach"
                        className="w-full bg-white border border-brand-border rounded-lg py-1.5 px-2.5 text-brand-text text-xs focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green"
                      />
                    </td>
                    <td className="py-2 px-4 text-center">
                      <button
                        type="button"
                        onClick={() => handleRemovePlayer(player.id)}
                        className="p-1.5 text-brand-muted hover:text-red-500 transition-colors"
                        title="Remove player row"
                        aria-label="Remove player row"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-3 flex items-center justify-between text-xs text-brand-muted">
            <span>Tip: You can add more rows anytime. Minimum bulk package starts at 5-10 kits.</span>
            <button
              type="button"
              onClick={handleAddPlayer}
              className="text-brand-green hover:underline font-bold flex items-center gap-1 cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" /> Add Another Player Row
            </button>
          </div>
        </div>

        {/* ADDITIONAL SPECIAL INSTRUCTIONS & DELIVERY CITY */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-brand-text mb-1.5">
              Delivery City / Country
            </label>
            <input
              type="text"
              value={deliveryCity}
              onChange={(e) => setDeliveryCity(e.target.value)}
              placeholder="e.g. Islamabad, Rawalpindi, or Nationwide"
              className="w-full bg-white border border-brand-border rounded-xl py-2.5 px-3.5 text-brand-text text-sm focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-brand-text mb-1.5">
              Specific Instructions (Colors, Sponsor Logos, Collar Styles)
            </label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Detail colors, crest placements, or special deadlines..."
              className="w-full bg-white border border-brand-border rounded-xl p-2.5 text-brand-text text-xs focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green"
            />
          </div>
        </div>

        {/* SUMMARY & DIRECT WHATSAPP ACTION */}
        <div className="bg-brand-alt border border-brand-border rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-base font-bold text-brand-text flex items-center justify-center md:justify-start gap-2">
              <ShieldCheck className="w-5 h-5 text-brand-green" />
              <span>Bulk Order Summary Ready for WhatsApp</span>
            </h4>
            <p className="text-xs text-brand-muted max-w-lg">
              Clicking below prepares a structured inquiry with your <strong>{players.length} player roster</strong>, sizes, and customizations. Price and delivery schedules are confirmed personally via WhatsApp.
            </p>
          </div>

          <button
            type="submit"
            className="w-full md:w-auto px-8 py-3.5 rounded-xl font-bold text-sm bg-brand-green hover:bg-brand-hover text-white flex items-center justify-center gap-2.5 shadow-md shadow-brand-green/20 transition-all cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Send Bulk Order on WhatsApp</span>
          </button>
        </div>

      </form>
    </div>
  );
}
