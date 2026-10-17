# BangkokCams.com

> **Live Street Webcams, BMA Traffic CCTV & Interactive City Transit Radar**  
> *Tourism Information Service & Metropolitan Transit Guide for Bangkok, Thailand*

[![Next.js](https://img.shields.io/badge/Next.js-16.0-black?logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Leaflet](https://img.shields.io/badge/Leaflet-1.9-199900?logo=leaflet)](https://leafletjs.com/)
[![Deployment](https://img.shields.io/badge/Deploy-Cloudflare%20Pages-F38020?logo=cloudflare)](https://pages.cloudflare.com/)
[![License](https://img.shields.io/badge/License-Proprietary-blue.svg)](#)

---

## 🏙️ Project Overview

**BangkokCams.com** is a high-performance, real-time map, multi-cam dashboard, public transit radar, and programmatic SEO portal for Bangkok, Thailand.

It aggregates live municipal CCTV feeds from the Bangkok Metropolitan Administration (BMA) traffic system (`cpudapp.bangkok.go.th/bmatraffic/`), 24/7 street webcams, and authentic nightlife venue live streams from YouTube & Kick (Nana Plaza / Sukhumvit Soi 4, Soi Cowboy, Soi 11, Khaosan Road, Silom, Patpong, Thonglor, RCA, Chinatown), paired with complete BTS Skytrain, MRT Subway, Airport Rail Link, Chao Phraya Express Boat, and Khlong Saen Saep Canal boat transit networks, real-time Doppler rain radar, and an automated VOD portal (**BangkokVids**).

---

## ⚡ Key Features

- **Interactive Dark & Light Map Engine**: Powered by Leaflet and licensed CartoDB Dark Matter / Positron basemaps with smooth 45° step rotation, interactive compass rose reset, and theme toggling with zero watermarks or paid API dependencies.
- **BMA Municipal CCTV Network & Traffic Surveillance Integration**: Complete interactive surveillance points across Bangkok's most congested transit arteries (Asok-Sukhumvit, Nana Soi 4, Rama 9, Ratchaprasong, Victory Monument, Silom, Sathorn, Rama 4, Din Daeng, Lat Phrao). Features one-click direct camera telemetry and direct launch to the official Bangkok Metropolitan Administration traffic monitoring system (`https://cpudapp.bangkok.go.th/bmatraffic/`).
- **Real-Time Doppler Rain Radar**: Embedded RainViewer API layer centered on the Bangkok metropolitan area with 10-minute past history and 30-minute forward precipitation forecasts, interactive timeline scrubber, and rain overlay toggle.
- **Hero Entertainment & Nightlife Venues**: Prominently features **Sukhumvit Soi 4** (Nana Plaza, Billboard Nana, Spanky's, Hillary 2), Soi Cowboy (Baccara, Crazy House), Sukhumvit Soi 11 (Levels, Above Eleven), Khaosan Road, Silom/Patpong, RCA (Route 66), and Yaowarat Chinatown with neon status pins (`🔴 LIVE` vs `⚪ OFFLINE`).
- **Automated Stream Health-Checker**: Quota-free GitHub Actions automation (`scripts/check_streams.mjs` + `.github/workflows/check_streams.yml`) probing YouTube handle redirects and Kick API v2 endpoints without consuming paid API credits.
- **Multi-Cam Command Grid**: 2x2 and 3x3 multi-screen grid wall with slots auto-populated with active live streams, featuring sleek standby cards with channel avatars and links for offline feeds (zero broken player boxes).
- **Desktop Theater Mode**: VideoDrawer includes a Maximize/Minimize toggle expanding into an 800px+ 2-column widescreen desktop command console.
- **🎲 Live Shuffle (City Roulette)**: Floating neon widget flying the map to an active live stream venue or dropping into an IRL creator's broadcast across Bangkok.
- **Bangkok Creators & Venues Hub**: Verified Bangkok creators (JWINTHAI, Bangkok Walker, Walking in the Rain, Bangkok 112, Global Travel Mate, etc.) and nightlife venues indexed on YouTube and Kick with a "Live Only" toggle.
- **BangkokVids VOD Portal**: Zero-quota RSS video scraper displaying completed episodes with automated exclusion of scheduled waiting rooms, live cams, and upcoming countdowns.
- **Full Bangkok Rapid Transit & Waterways Network**:
  - **BTS Sukhumvit Line** (`#22C55E` Light Green): Mo Chit ⇄ Siam ⇄ Nana ⇄ Asok ⇄ Bearing ⇄ Kheha
  - **BTS Silom Line** (`#15803D` Dark Green): National Stadium ⇄ Siam ⇄ Sala Daeng ⇄ Bang Wa
  - **MRT Blue Line Loop** (`#1D4ED8` Royal Blue): Bang Sue ⇄ Sukhumvit ⇄ Silom ⇄ Hua Lamphong ⇄ Tha Phra
  - **MRT Yellow Line Monorail** (`#EAB308` Bright Yellow): Lat Phrao ⇄ Samrong
  - **Airport Rail Link (ARL)** (`#831843` Crimson): Phaya Thai ⇄ Suvarnabhumi Airport (BKK)
  - **Chao Phraya Express Boat** (`#0284C7` Cyan Waterway): Nonthaburi ⇄ Sathorn Central Pier
  - **Khlong Saen Saep Canal Express** (`#0D9488` Teal Waterway): Panfa Leelard ⇄ Pratunam ⇄ Asok ⇄ Wat Si Bun Rueang
- **Programmatic SEO & Schema.org JSON-LD**: Statically pre-rendered HTML landing pages (`/venues/[slug]`, `/creators/[slug]`, `/cams/[slug]`), full `robots.txt`, dynamic `sitemap.xml`, high-res 1200x630 `og-image.jpg`, and valid Schema.org structured data.

---

## 🛠️ Tech Stack & Architecture

- **Framework**: Next.js 16 with Turbopack (App Router, Static HTML Export `output: 'export'`)
- **Styling**: Tailwind CSS, PostCSS, Autoprefixer
- **Mapping**: Leaflet 1.9, `leaflet-rotate`, `leaflet.markercluster` (dynamically imported with client lifecycle isolation)
- **Tiles**: CartoDB Dark Matter & Positron (Licensed API Key)
- **Radar**: RainViewer Global Weather Radar API
- **Video Players**: Responsive YouTube Live embeds, Kick.com iFrame player, `hls.js` municipal stream wrapper
- **Icons**: `lucide-react`
- **State Persistence**: Browser `localStorage` (Zero server database needed)
- **Hosting Target**: Cloudflare Pages (Direct Git integration)

---

## 🤖 Live Pipeline & GitHub Actions Automation

The repository runs automated background workflows that update stream statuses without exceeding GitHub free tier quotas:

1. **Continuous Stream Health Check (`.github/workflows/check_streams.yml`)**:
   - Runs every 5 minutes 24/7 (`*/5 * * * *`) probing stream manifests and status endpoints.
2. **Creator VOD Pipeline & Stream Health (`.github/workflows/scheduled_pipeline.yml`)**:
   - Runs every 3 hours (`0 */3 * * *`) pulling fresh video releases from Bangkok creators, sanitizing content, and updating `public/data/creator_videos.json`.

---

## 🚀 Local Development Setup

### Prerequisites
- Node.js 20+
- npm or pnpm

### Installation

```bash
# Clone repository
git clone https://github.com/plurino/bangkokcams.git
cd bangkokcams

# Install dependencies
npm install

# Start development server with Turbopack
npm run dev
```

Visit `http://localhost:3000` to view the application.

### Production Build

```bash
# Compile and export static bundle
npm run build
```

This generates a fully pre-rendered static distribution in the `/out` directory ready for Cloudflare Pages or AWS S3.

---

## 🌐 Custom Domain & Cloudflare Pages Configuration

### Connecting Domain to Cloudflare Pages
1. In Cloudflare Pages dashboard, create project linked to GitHub repository `plurino/bangkokcams`.
2. Set Build Command to `npm run build` and Output Directory to `out`.
3. Under **Custom domains**, add `bangkokcams.com` and `www.bangkokcams.com`.
4. Cloudflare automatically provisions a free Universal SSL certificate.

---

## 📄 License

Proprietary. All rights reserved. BangkokCams.com
