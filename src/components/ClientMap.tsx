"use client"; // Ensure this is a client component

import React, { useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import { useLocation } from "@/Providers/LocationProvider";

// Fix for Leaflet marker icons
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

L.Icon.Default.mergeOptions({
  iconUrl: markerIcon.src,
  iconRetinaUrl: markerIcon2x.src,
  shadowUrl: markerShadow.src,
});

interface MapProps {
  center?: number[];
}

// Component to handle map click events
const ClickableMap: React.FC<{ onLocationSelect: (location: L.LatLng) => void }> = ({ onLocationSelect }) => {
  useMapEvents({
    click(e) {
      onLocationSelect(e.latlng);
    },
  });

  return null;
};

const ClientMap: React.FC<MapProps> = ({ center }) => {
  const [selectedLocation, setSelectedLocation] = useState<L.LatLng | null>(null);
  const { selectLocation } = useLocation();

  const handleLocationSelect = (location: L.LatLng) => {
    setSelectedLocation(location);
    selectLocation([location.lat, location.lng]);
  };

  return (
    <MapContainer
      center={(center as L.LatLngExpression) || [47.91878061388805, 106.91760624754126]}
      zoom={18}
      scrollWheelZoom={true}
      className="h-[35vh] w-[45vw] max-w-[1000px] rounded-lg"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ClickableMap onLocationSelect={handleLocationSelect} />
      {selectedLocation && <Marker position={selectedLocation} />}
    </MapContainer>
  );
};

export default ClientMap;
