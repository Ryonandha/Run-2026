'use client';

import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Memperbaiki masalah ikon Leaflet di Next.js
const customIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconShadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export default function Map() {
  // Koordinat dummy (Misal di area perkotaan/taman)
  const mapCenter: [number, number] = [-6.9147, 107.6098]; // Contoh: Bandung (Padjadjaran)
  
  // Dummy Rute Eco-Run
  const ecoRunRoute: [number, number][] = [
    [-6.9147, 107.6098],
    [-6.9155, 107.6110],
    [-6.9130, 107.6125],
    [-6.9120, 107.6100],
    [-6.9147, 107.6098], // Kembali ke start
  ];

  return (
    <div className="h-[400px] w-full rounded-2xl overflow-hidden border-2 border-gray-100 shadow-inner z-0 relative">
      <MapContainer center={mapCenter} zoom={15} scrollWheelZoom={false} className="h-full w-full">
        {/* Menggunakan basemap gratis dari OpenStreetMap */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {/* Marker Titik Kumpul / Bazaar */}
        <Marker position={mapCenter} icon={customIcon}>
          <Popup>
            <b>Green Bazaar & Titik Start</b><br/>Eco Padjadjarun 2026.
          </Popup>
        </Marker>

        {/* Garis Rute Eco-Run */}
        <Polyline positions={ecoRunRoute} pathOptions={{ color: '#00D27F', weight: 4 }} />
      </MapContainer>
    </div>
  );
}