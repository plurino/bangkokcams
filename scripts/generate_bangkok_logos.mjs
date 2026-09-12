// scripts/generate_bangkok_logos.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');
const imagesDir = path.join(rootDir, 'public', 'images');
const publicDir = path.join(rootDir, 'public');

if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// 1. Horizontal Brand Logo SVG
const logoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 120" width="540" height="120" fill="none">
  <defs>
    <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#00E5FF" />
      <stop offset="100%" stop-color="#0284C7" />
    </linearGradient>
    <linearGradient id="pinkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FF2A6D" />
      <stop offset="100%" stop-color="#D946EF" />
    </linearGradient>
    <filter id="glowCyan" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="6" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
    <filter id="glowPink" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="6" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  <!-- Left Icon: Radar / Camera Lens Shield -->
  <g transform="translate(15, 12)">
    <!-- Outer Glow Ring -->
    <circle cx="48" cy="48" r="44" stroke="url(#cyanGrad)" stroke-width="2.5" opacity="0.4" stroke-dasharray="8 6" />
    <!-- Radar Sweep Ring -->
    <circle cx="48" cy="48" r="36" stroke="#00E5FF" stroke-width="2" opacity="0.8" />
    <!-- Background Lens -->
    <circle cx="48" cy="48" r="28" fill="#111827" stroke="#1F2937" stroke-width="2" />
    
    <!-- Camera Aperture Crosshairs -->
    <path d="M48 20 V34 M48 62 V76 M20 48 H34 M62 48 H76" stroke="#00E5FF" stroke-width="2" stroke-linecap="round" opacity="0.7" />
    
    <!-- Central Glowing Core -->
    <circle cx="48" cy="48" r="14" fill="url(#pinkGrad)" filter="url(#glowPink)" />
    <!-- Live White Pip -->
    <circle cx="48" cy="48" r="5" fill="#FFFFFF" />

    <!-- Pulse Ping Ring -->
    <circle cx="48" cy="48" r="46" stroke="#FF2A6D" stroke-width="1.5" opacity="0.5">
      <animate attributeName="r" values="24;46" dur="2s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.8;0" dur="2s" repeatCount="indefinite" />
    </circle>
  </g>

  <!-- Right Typography: BANGKOK CAMS -->
  <g transform="translate(135, 20)">
    <!-- Main Logotype -->
    <text x="0" y="52" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-weight="900" font-size="46" letter-spacing="1" fill="#FFFFFF">
      BANGKOK<tspan fill="url(#pinkGrad)" filter="url(#glowPink)">CAMS</tspan>
    </text>

    <!-- Subtitle / Tagline -->
    <g transform="translate(2, 75)">
      <rect x="0" y="-14" width="70" height="18" rx="4" fill="#00E5FF" fill-opacity="0.15" stroke="#00E5FF" stroke-opacity="0.4" stroke-width="1" />
      <text x="35" y="-1" font-family="'JetBrains Mono', Consolas, Monaco, monospace" font-weight="800" font-size="10" fill="#00E5FF" text-anchor="middle" letter-spacing="1">
        LIVE 4K
      </text>

      <text x="80" y="-1" font-family="'JetBrains Mono', Consolas, Monaco, monospace" font-weight="600" font-size="11" fill="#94A3B8" letter-spacing="2">
        STREET WEBCAMS &bull; TRANSIT RADAR
      </text>
    </g>
  </g>
</svg>`;

// 2. Square App Mark Icon SVG (512x512)
const markSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512" fill="none">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0F172A" />
      <stop offset="50%" stop-color="#0B0F17" />
      <stop offset="100%" stop-color="#020617" />
    </linearGradient>
    <linearGradient id="markCyan" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#00E5FF" />
      <stop offset="100%" stop-color="#0284C7" />
    </linearGradient>
    <linearGradient id="markPink" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FF2A6D" />
      <stop offset="100%" stop-color="#D946EF" />
    </linearGradient>
    <filter id="markGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="16" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  <!-- App Rounded Backdrop -->
  <rect width="512" height="512" rx="112" fill="url(#bgGrad)" />
  <rect x="4" y="4" width="504" height="504" rx="108" stroke="#334155" stroke-width="3" opacity="0.6" />

  <!-- Outer Radar Rings -->
  <circle cx="256" cy="236" r="170" stroke="url(#markCyan)" stroke-width="4" stroke-dasharray="16 12" opacity="0.4" />
  <circle cx="256" cy="236" r="130" stroke="#00E5FF" stroke-width="5" opacity="0.8" />
  <circle cx="256" cy="236" r="90" fill="#1E293B" stroke="#475569" stroke-width="4" />

  <!-- Crosshairs -->
  <path d="M256 96 V150 M256 322 V376 M116 236 H170 M342 236 H396" stroke="#00E5FF" stroke-width="6" stroke-linecap="round" opacity="0.8" />

  <!-- Core Neon Pulse -->
  <circle cx="256" cy="236" r="54" fill="url(#markPink)" filter="url(#markGlow)" />
  <circle cx="256" cy="236" r="22" fill="#FFFFFF" />

  <!-- Bottom Brand Text -->
  <text x="256" y="440" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="900" font-size="38" fill="#FFFFFF" text-anchor="middle" letter-spacing="3">
    BANGKOK<tspan fill="#FF2A6D">CAMS</tspan>
  </text>
</svg>`;

async function renderAssets() {
  console.log('Generating BangkokCams Brand SVGs...');
  fs.writeFileSync(path.join(imagesDir, 'logo.svg'), logoSvg, 'utf8');
  fs.writeFileSync(path.join(imagesDir, 'logo-dark.svg'), logoSvg, 'utf8');
  fs.writeFileSync(path.join(imagesDir, 'logo-mark.svg'), markSvg, 'utf8');
  console.log('✓ Wrote logo.svg, logo-dark.svg, logo-mark.svg');

  console.log('Launching Edge browser to render pixel-perfect PNG assets...');
  const browser = await chromium.launch({ channel: 'msedge' });
  const page = await browser.newPage();

  // Helper to render HTML/SVG string to PNG file
  async function renderToPng(svgContent, width, height, destPath) {
    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            html, body { margin: 0; padding: 0; background: transparent; overflow: hidden; }
            svg { display: block; width: ${width}px; height: ${height}px; }
          </style>
        </head>
        <body>
          ${svgContent}
        </body>
      </html>
    `;
    await page.setViewportSize({ width, height });
    await page.setContent(html);
    await page.screenshot({ path: destPath, omitBackground: true });
    console.log(`✓ Rendered ${path.basename(destPath)} (${width}x${height})`);
  }

  // Render Horizontal Logo (540x120)
  await renderToPng(logoSvg, 540, 120, path.join(imagesDir, 'logo.png'));
  await renderToPng(logoSvg, 540, 120, path.join(imagesDir, 'logo-dark.png'));

  // Render Square App Mark (512x512)
  await renderToPng(markSvg, 512, 512, path.join(imagesDir, 'logo-mark.png'));

  // Render App Icons & Favicons
  await renderToPng(markSvg, 192, 192, path.join(publicDir, 'icon.png'));
  await renderToPng(markSvg, 180, 180, path.join(publicDir, 'apple-touch-icon.png'));
  await renderToPng(markSvg, 32, 32, path.join(publicDir, 'favicon-32x32.png'));
  await renderToPng(markSvg, 48, 48, path.join(publicDir, 'favicon-48x48.png'));
  fs.copyFileSync(path.join(publicDir, 'favicon-48x48.png'), path.join(publicDir, 'favicon.ico'));
  console.log('✓ Copied favicon-48x48.png to favicon.ico');

  await browser.close();
  console.log('\n✨ All BangkokCams brand assets generated successfully!');
}

renderAssets().catch(err => {
  console.error('Error generating assets:', err);
  process.exit(1);
});
