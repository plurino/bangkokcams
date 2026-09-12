import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata = {
  title: 'BangkokCams | Live Street Webcams, Nightlife Feeds & Bangkok Transit Radar',
  description: 'Real-time interactive map, municipal BMA traffic CCTV streams, nightlife webcams (Sukhumvit Soi 4, Cowboy, Khaosan), BTS Skytrain, MRT, and Chao Phraya river transit radar for Bangkok, Thailand.',
  keywords: ['Bangkok webcams', 'Bangkok live camera', 'Sukhumvit Soi 4 Nana', 'Soi Cowboy live', 'Khaosan Road live', 'Bangkok CCTV BMA traffic', 'BTS Skytrain map', 'Chao Phraya Express boat'],
  authors: [{ name: 'BangkokCams' }],
  metadataBase: new URL('https://bangkokcams.com'),
  openGraph: {
    title: 'BangkokCams | Live Street Webcams, Nightlife Feeds & Bangkok Transit Radar',
    description: 'Real-time interactive map, municipal CCTV streams, nightlife feeds, and mass transit radar for Bangkok, Thailand.',
    url: 'https://bangkokcams.com',
    siteName: 'BangkokCams',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BangkokCams Live Feeds & Mass Transit Radar',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BangkokCams | Live Street Webcams, Nightlife Feeds & Transit Radar',
    description: 'Explore live Bangkok webcams, BMA traffic surveillance, BTS/MRT routes, and nightlife strips in Bangkok, Thailand.',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon.png', sizes: '192x192', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'BangkokCams',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-canvas text-slate-100 antialiased min-h-screen w-full flex flex-col overflow-x-hidden selection:bg-brandPink selection:text-white">
        {children}
      </body>
    </html>
  );
}
