'use client';

import React, { useState } from 'react';
import { X, Ship, Waves, Compass, Clock, DollarSign, AlertCircle, Anchor } from 'lucide-react';

export default function RiverCanalModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('chaophraya'); // 'chaophraya' | 'saensaep' | 'crossriver'

  if (!isOpen) return null;

  const chaoPhrayaPiers = [
    { code: 'N30', name: 'Nonthaburi Pier', area: 'Northern Terminal & Clocktower' },
    { code: 'N24', name: 'Rama VII Bridge Pier', area: 'Northern Riverside' },
    { code: 'N22', name: 'Bang Pho Pier', area: 'MRT Blue Line Interchange' },
    { code: 'N15', name: 'Thewet Pier', area: 'Flower Market & Dusit' },
    { code: 'N13', name: 'Phra Arthit Pier', area: 'Khaosan Road & Rambuttri (8 min walk)' },
    { code: 'N10', name: 'Wang Lang / Siriraj Pier', area: 'Street Food & Hospital' },
    { code: 'N9', name: 'Tha Chang Pier', area: 'Grand Palace & Emerald Buddha' },
    { code: 'N8', name: 'Tha Tien Pier', area: 'Wat Pho & Wat Arun Cross-Ferry' },
    { code: 'N5', name: 'Ratchawong Pier', area: 'Yaowarat Chinatown Main Pier' },
    { code: 'N3', name: 'Si Phraya Pier', area: 'River City Art Center & Creative District' },
    { code: 'ICON', name: 'ICONSIAM Pier', area: 'Luxury Riverside Mall' },
    { code: 'CEN', name: 'Sathorn Central Pier', area: 'BTS Saphan Taksin Interchange' },
  ];

  const saenSaepPiers = [
    { name: 'Panfa Leelard', desc: 'Old Town, Golden Mount & Khaosan Access' },
    { name: 'Talad Bobae', desc: 'Wholesale Fashion Garment Market' },
    { name: 'Sapan Hua Chang', desc: 'Jim Thompson House & BTS Ratchathewi' },
    { name: 'Pratunam Pier', desc: 'Central Interchange, CentralWorld & Platinum' },
    { name: 'Nana Nua Pier', desc: 'Sukhumvit Soi 3 / Soi 4 Access' },
    { name: 'Asok Pier', desc: 'MRT Phetchaburi & ARL Makkasan Interchange' },
    { name: 'Thonglor Pier', desc: 'North end of Thonglor Soi 55' },
    { name: 'The Mall Bang Kapi', desc: 'Eastern Terminal & Shopping Mall' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm animate-fade-in select-none">
      <div className="relative w-full max-w-xl rounded-2xl bg-surface border border-borderDark shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-borderDark bg-surfaceLight/50">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-orange-600/20 border border-orange-500/40 flex items-center justify-center text-orange-400">
              <Ship className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-white flex items-center gap-2">
                <span>Bangkok Waterways & Canal Radar</span>
                <span className="px-2 py-0.5 rounded bg-orange-950/60 border border-orange-500/40 text-orange-400 text-[10px] font-mono">
                  16 THB FLAT
                </span>
              </h2>
              <p className="text-[11px] text-slate-400 font-mono">
                Chao Phraya River Express & Khlong Saen Saep Commuter Boats
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-surface hover:bg-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-borderDark bg-canvas/40 px-4 pt-2 gap-2 text-xs font-mono">
          <button
            onClick={() => setActiveTab('chaophraya')}
            className={`pb-2 px-3 border-b-2 font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'chaophraya'
                ? 'border-orange-400 text-orange-400'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <Ship className="w-3.5 h-3.5" />
            <span>Chao Phraya Express</span>
          </button>
          <button
            onClick={() => setActiveTab('saensaep')}
            className={`pb-2 px-3 border-b-2 font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'saensaep'
                ? 'border-cyan-400 text-cyan-400'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <Waves className="w-3.5 h-3.5" />
            <span>Khlong Saen Saep Canal</span>
          </button>
          <button
            onClick={() => setActiveTab('crossriver')}
            className={`pb-2 px-3 border-b-2 font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'crossriver'
                ? 'border-amber-400 text-amber-400'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <Anchor className="w-3.5 h-3.5" />
            <span>Cross-River Ferries</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-5 overflow-y-auto space-y-4 text-xs font-mono">
          {/* TAB 1: CHAO PHRAYA EXPRESS BOAT */}
          {activeTab === 'chaophraya' && (
            <div className="space-y-4">
              <div className="p-3 rounded-xl bg-canvas/70 border border-borderDark space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-white pb-1.5 border-b border-borderDark/60">
                  <div className="flex items-center gap-1.5 text-orange-400">
                    <Compass className="w-3.5 h-3.5" />
                    <span>Orange Flag Express Boat (Nonthaburi ⇄ Sathorn)</span>
                  </div>
                  <span className="text-emerald-400 font-mono font-bold">16 THB Flat</span>
                </div>
                <div className="grid grid-cols-2 gap-3 pt-1 text-[11px] text-slate-300">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block mb-1">
                      Operating Hours:
                    </span>
                    <p className="font-bold text-white">06:00 – 19:00 Daily</p>
                    <p className="text-[10px] text-slate-400">Departs every 15–20 minutes</p>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block mb-1">
                      Key Interchanges:
                    </span>
                    <p className="font-bold text-cyan-300">Sathorn Pier (BTS Saphan Taksin)</p>
                    <p className="text-[10px] text-slate-400">Bang Pho Pier (MRT Blue Line)</p>
                  </div>
                </div>
              </div>

              {/* Major Piers List */}
              <div className="space-y-1.5">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-bold">
                  Key Pier Stops Along River Corridor:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {chaoPhrayaPiers.map((p) => (
                    <div
                      key={p.code}
                      className="p-2 rounded-lg bg-surfaceLight/40 border border-borderDark/60 flex items-center gap-2"
                    >
                      <span className="px-1.5 py-0.5 rounded bg-orange-950/80 border border-orange-500/40 text-orange-300 text-[9px] font-bold shrink-0">
                        {p.code}
                      </span>
                      <div className="min-w-0 flex-1">
                        <strong className="text-white text-[11px] block truncate">{p.name}</strong>
                        <span className="text-[10px] text-slate-400 block truncate">{p.area}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: KHLONG SAEN SAEP CANAL */}
          {activeTab === 'saensaep' && (
            <div className="space-y-4">
              <div className="p-3 rounded-xl bg-canvas/70 border border-borderDark space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-white pb-1.5 border-b border-borderDark/60">
                  <div className="flex items-center gap-1.5 text-cyan-400">
                    <Compass className="w-3.5 h-3.5" />
                    <span>Saen Saep Canal Commuter Express</span>
                  </div>
                  <span className="text-emerald-400 font-mono font-bold">12–22 THB</span>
                </div>
                <div className="grid grid-cols-2 gap-3 pt-1 text-[11px] text-slate-300">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block mb-1">
                      Operating Schedule:
                    </span>
                    <p className="font-bold text-white">06:00 – 19:30 Daily</p>
                    <p className="text-[10px] text-slate-400">Frequency: 5–10 minutes</p>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block mb-1">
                      Central Interchange:
                    </span>
                    <p className="font-bold text-cyan-300">Pratunam Pier</p>
                    <p className="text-[10px] text-slate-400">Switch between Golden Mount & NIDA lines</p>
                  </div>
                </div>
              </div>

              <div className="space-y-1.5">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-bold">
                  Canal Piers Across Town:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {saenSaepPiers.map((p) => (
                    <div
                      key={p.name}
                      className="p-2 rounded-lg bg-surfaceLight/40 border border-borderDark/60 flex flex-col"
                    >
                      <strong className="text-white text-[11px]">{p.name}</strong>
                      <span className="text-[10px] text-slate-400">{p.desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-2.5 rounded-lg bg-blue-950/30 border border-blue-500/30 text-[10px] text-slate-300 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Quick Tip: Boats move fast! Hold the pull-ropes during spray surges and watch your footing at Pratunam interchange.</span>
              </div>
            </div>
          )}

          {/* TAB 3: CROSS-RIVER FERRIES */}
          {activeTab === 'crossriver' && (
            <div className="space-y-3">
              <div className="p-3 rounded-xl bg-canvas/70 border border-borderDark space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-white pb-1.5 border-b border-borderDark/60">
                  <span className="text-amber-400 font-bold">Chao Phraya Cross-River Shuttle Ferries</span>
                  <span className="text-emerald-400 font-mono font-bold">5 THB Flat</span>
                </div>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  Dedicated cross-river shuttles continuously bounce back and forth between east and west banks every 3–5 minutes from 06:00 to 22:00:
                </p>
                <div className="space-y-2 pt-1 text-[11px]">
                  <div className="p-2 rounded bg-surface border border-borderDark/60 flex justify-between">
                    <span className="text-white font-semibold">Tha Tien ⇄ Wat Arun (Temple of Dawn)</span>
                    <span className="text-emerald-400 font-bold">5฿</span>
                  </div>
                  <div className="p-2 rounded bg-surface border border-borderDark/60 flex justify-between">
                    <span className="text-white font-semibold">Tha Chang ⇄ Wang Lang Market</span>
                    <span className="text-emerald-400 font-bold">5฿</span>
                  </div>
                  <div className="p-2 rounded bg-surface border border-borderDark/60 flex justify-between">
                    <span className="text-white font-semibold">Si Phraya ⇄ Khlong San Pier</span>
                    <span className="text-emerald-400 font-bold">5฿</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-3 border-t border-borderDark bg-surfaceLight/30 flex items-center justify-between text-[11px] text-slate-400 font-mono">
          <span>Bangkok Marine Department & Chao Phraya Express Telemetry</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-surfaceLight hover:bg-slate-700 text-white font-semibold transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
