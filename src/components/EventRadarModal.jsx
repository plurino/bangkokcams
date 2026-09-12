'use client';

import React, { useState, useEffect } from 'react';
import { X, Sparkles, Calendar, MapPin, Flame, Music, Droplets, PartyPopper } from 'lucide-react';

export const BANGKOK_EVENTS = [
  {
    id: 'loy-krathong',
    name: 'Bangkok Loy Krathong Festival of Lights',
    name_th: 'ประเพณีลอยกระทง กรุงเทพมหานคร',
    dateStr: '2026-11-13T19:00:00+07:00',
    displayDate: 'November 13, 2026',
    location: 'Chao Phraya River, Asiatique & ICONSIAM',
    icon: Sparkles,
    color: '#38BDF8',
    description: 'Candle-lit floral baskets floating across the Chao Phraya River with spectacular illuminated temples and fireworks displays.',
  },
  {
    id: 'countdown',
    name: 'Bangkok CentralWorld & ICONSIAM Mega-Countdown',
    name_th: 'เคานต์ดาวน์กรุงเทพฯ เซ็นทรัลเวิลด์ & ไอคอนสยาม',
    dateStr: '2026-12-31T18:00:00+07:00',
    displayDate: 'December 31, 2026',
    location: 'CentralWorld Square & ICONSIAM Riverside',
    icon: PartyPopper,
    color: '#FACC15',
    description: 'Southeast Asia\'s Times Square countdown featuring 1,400-meter eco-fireworks displays over the river and Thailand\'s biggest music stars.',
  },
  {
    id: 'chinese-new-year',
    name: 'Yaowarat Chinatown Lunar New Year',
    name_th: 'เทศกาลตรุษจีน เยาวราช',
    dateStr: '2027-02-06T10:00:00+07:00',
    displayDate: 'February 6–8, 2027',
    location: 'Yaowarat Road & Odeon Circle',
    icon: Flame,
    color: '#EF4444',
    description: 'Bangkok\'s largest cultural street festival with acrobatic dragon dances, red lanterns stretching miles, and legendary banquet street food.',
  },
  {
    id: 'songkran',
    name: 'Bangkok Songkran Mega Water Festival',
    name_th: 'เทศกาลสงกรานต์ กรุงเทพฯ',
    dateStr: '2027-04-13T09:00:00+07:00',
    displayDate: 'April 13–15, 2027',
    location: 'Silom Road, Khaosan Road & Siam Square',
    icon: Droplets,
    color: '#00E5FF',
    description: 'The world-famous Thai New Year water battle taking over 5 kilometers of closed streets along Silom, Khaosan, and Siam Square.',
  },
  {
    id: 's2o-festival',
    name: 'S2O Songkran EDM Music Festival',
    name_th: 'เทศกาลดนตรีเอสทูโอ',
    dateStr: '2027-04-13T17:00:00+07:00',
    displayDate: 'April 13–15, 2027',
    location: 'Live Park Rama 9',
    icon: Music,
    color: '#A855F7',
    description: 'The world\'s wettest EDM festival featuring high-pressure 360-degree water cannons and world top 100 DJ headliners.',
  },
];

function getTimeRemaining(targetDateStr) {
  const total = Date.parse(targetDateStr) - Date.now();
  if (total <= 0) {
    return { total: 0, days: 0, hours: 0, minutes: 0, isPast: true };
  }
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  return { total, days, hours, minutes, seconds, isPast: false };
}

export default function EventRadarModal({ isOpen, onClose }) {
  const [, setTick] = useState(0);

  useEffect(() => {
    if (!isOpen) return;
    const interval = setInterval(() => {
      setTick((t) => t + 1);
    }, 60000);
    return () => clearInterval(interval);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm animate-fade-in select-none">
      <div className="relative w-full max-w-xl rounded-2xl bg-surface border border-borderDark shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-borderDark bg-surfaceLight/50">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-purple-600/20 border border-purple-500/40 flex items-center justify-center text-purple-400">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-white flex items-center gap-2">
                <span>Bangkok Major Events & Festival Radar</span>
                <span className="px-2 py-0.5 rounded bg-purple-950/60 border border-purple-500/40 text-purple-400 text-[10px] font-mono">
                  LIVE COUNTDOWNS
                </span>
              </h2>
              <p className="text-[11px] text-slate-400 font-mono">
                Key dates driving stream spikes & massive citywide gatherings in Bangkok
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

        {/* Modal Body: Events List */}
        <div className="p-4 sm:p-5 overflow-y-auto space-y-3.5 text-xs font-mono">
          {BANGKOK_EVENTS.map((evt) => {
            const countdown = getTimeRemaining(evt.dateStr);
            const IconComponent = evt.icon;

            return (
              <div
                key={evt.id}
                className="p-3.5 rounded-xl bg-canvas/70 border border-borderDark/80 hover:border-borderDark transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-md"
              >
                {/* Event Metadata */}
                <div className="space-y-1.5 min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0 border"
                      style={{
                        backgroundColor: `${evt.color}20`,
                        borderColor: `${evt.color}50`,
                        color: evt.color,
                      }}
                    >
                      <IconComponent className="w-3.5 h-3.5" />
                    </span>
                    <strong className="text-sm font-bold text-white truncate">
                      {evt.name}
                    </strong>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 text-[11px] text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-slate-400" />
                      <span className="text-slate-200">{evt.displayDate}</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-slate-400" />
                      <span className="text-slate-300">{evt.location}</span>
                    </span>
                  </div>

                  <p className="text-[11px] text-slate-400 leading-relaxed pt-0.5">
                    {evt.description}
                  </p>
                </div>

                {/* Countdown Badge */}
                <div className="shrink-0 flex sm:flex-col items-center justify-between sm:justify-center p-2 sm:p-2.5 rounded-xl bg-surface border border-borderDark/60 min-w-[110px] text-center">
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider block">
                    Starts In:
                  </span>
                  {countdown.isPast ? (
                    <span className="text-xs font-bold text-emerald-400 animate-pulse">
                      Happening Now!
                    </span>
                  ) : (
                    <div className="flex items-baseline gap-1 mt-0.5">
                      <span className="text-base font-extrabold text-white">
                        {countdown.days}
                      </span>
                      <span className="text-[10px] text-slate-400">days</span>
                      <span className="text-xs font-bold text-slate-300 ml-1">
                        {countdown.hours}h
                      </span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="p-3 border-t border-borderDark bg-surfaceLight/30 flex items-center justify-between text-[11px] text-slate-400 font-mono">
          <span>Bangkok City Official Festivals Calendar</span>
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
