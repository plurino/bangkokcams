import React from 'react';
import CreatorDirectoryClient from '@/src/components/CreatorDirectoryClient';
import creatorsData from '@/public/data/creators.json';
import venuesData from '@/public/data/venues.json';
import streamStatus from '@/public/data/stream_status.json';

export const metadata = {
  title: 'Bangkok Creators & Live Venues Directory | Channels, Nightlife & Street Walkers',
  description: 'Explore Bangkok content creators, nightlife live venues, 4K walking tour vloggers, expat guides, and mobile IRL streamers on YouTube and Kick. Watch live broadcasts, latest uploads, and discover authentic local guides.',
  openGraph: {
    title: 'Bangkok Creators & Live Venues Directory | BangkokCams.com',
    description: 'Explore Bangkok content creators, nightlife live venues, 4K walking tour vloggers, expat guides, and mobile IRL streamers on YouTube and Kick.',
    url: 'https://bangkokcams.com/creators/',
    type: 'website',
  },
};

export default function CreatorsIndexPage() {
  return (
    <CreatorDirectoryClient
      creators={creatorsData}
      venues={venuesData}
      streamStatus={streamStatus}
    />
  );
}
