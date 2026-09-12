/**
 * Bangkok Regional Zones & Navigation Jump Coordinates
 */

export const BANGKOK_ZONES = {
  soi_4: {
    id: 'soi_4',
    name: 'Sukhumvit Soi 4 & Nana',
    name_th: 'สุขุมวิท ซอย 4 / นานาพลาซ่า',
    center: [13.7410, 100.5535],
    zoom: 17,
    color: '#FF2A6D',
  },
  cowboy: {
    id: 'cowboy',
    name: 'Soi Cowboy & Asok',
    name_th: 'ซอยคาวบอย / อโศก',
    center: [13.7368, 100.5615],
    zoom: 17,
    color: '#00E5FF',
  },
  soi_11: {
    id: 'soi_11',
    name: 'Sukhumvit Soi 11',
    name_th: 'สุขุมวิท ซอย 11',
    center: [13.7460, 100.5565],
    zoom: 16,
    color: '#A855F7',
  },
  khaosan: {
    id: 'khaosan',
    name: 'Khaosan & Rambuttri',
    name_th: 'ถนนข้าวสาร / รามบุตรี',
    center: [13.7588, 100.4975],
    zoom: 16,
    color: '#FACC15',
  },
  rca: {
    id: 'rca',
    name: 'RCA (Royal City Avenue)',
    name_th: 'อาร์ซีเอ (ถนนพระราม 9)',
    center: [13.7485, 100.5790],
    zoom: 16,
    color: '#EC4899',
  },
  silom: {
    id: 'silom',
    name: 'Silom Soi 4 & Patpong',
    name_th: 'สีลม ซอย 4 / พัฒน์พงศ์',
    center: [13.7290, 100.5315],
    zoom: 16,
    color: '#10B981',
  },
  thonglor: {
    id: 'thonglor',
    name: 'Thonglor & Ekkamai',
    name_th: 'ทองหล่อ / เอกมัย',
    center: [13.7300, 100.5820],
    zoom: 15,
    color: '#3B82F6',
  },
  chinatown: {
    id: 'chinatown',
    name: 'Yaowarat Chinatown',
    name_th: 'เยาวราช ไชน่าทาวน์',
    center: [13.7412, 100.5085],
    zoom: 16,
    color: '#EF4444',
  },
  siam: {
    id: 'siam',
    name: 'Siam & Ratchaprasong',
    name_th: 'สยามสแควร์ / ราชประสงค์',
    center: [13.7460, 100.5340],
    zoom: 15,
    color: '#06B6D4',
  },
};

export const QUICK_JUMP_TARGETS = [
  { label: 'Soi 4 Nana', ...BANGKOK_ZONES.soi_4 },
  { label: 'Soi Cowboy', ...BANGKOK_ZONES.cowboy },
  { label: 'Soi 11', ...BANGKOK_ZONES.soi_11 },
  { label: 'Khaosan', ...BANGKOK_ZONES.khaosan },
  { label: 'Silom Soi 4', ...BANGKOK_ZONES.silom },
  { label: 'RCA Strip', ...BANGKOK_ZONES.rca },
  { label: 'Chinatown', ...BANGKOK_ZONES.chinatown },
];
